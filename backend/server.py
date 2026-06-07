from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_RECIPIENT_EMAIL = os.environ.get('CONTACT_RECIPIENT_EMAIL', '')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="Hiscope Construction API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactSubmissionCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    service: Optional[str] = Field(default=None, max_length=80)
    message: str = Field(min_length=5, max_length=4000)


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str
    email_sent: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Hiscope Construction API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for c in rows:
        if isinstance(c.get('timestamp'), str):
            c['timestamp'] = datetime.fromisoformat(c['timestamp'])
    return rows


def _build_contact_email_html(sub: ContactSubmission) -> str:
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background:#f4f4f5; padding:24px;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border:1px solid #D4D4D8;">
          <tr><td style="background:#09090B; color:#ffffff; padding:24px;">
            <h1 style="margin:0; font-size:22px; letter-spacing:2px;">HISCOPE CONSTRUCTION</h1>
            <p style="margin:4px 0 0; color:#FF4500; font-size:12px; letter-spacing:3px;">NEW CONTACT INQUIRY</p>
          </td></tr>
          <tr><td style="padding:24px; color:#09090B;">
            <p style="margin:0 0 12px; font-size:14px;"><strong>Name:</strong> {sub.name}</p>
            <p style="margin:0 0 12px; font-size:14px;"><strong>Email:</strong> {sub.email}</p>
            <p style="margin:0 0 12px; font-size:14px;"><strong>Phone:</strong> {sub.phone or '—'}</p>
            <p style="margin:0 0 12px; font-size:14px;"><strong>Service Interest:</strong> {sub.service or '—'}</p>
            <hr style="border:none; border-top:1px solid #D4D4D8; margin:16px 0;" />
            <p style="margin:0 0 8px; font-size:13px; color:#52525B;"><strong>Message</strong></p>
            <p style="margin:0; font-size:14px; line-height:1.6; white-space:pre-wrap;">{sub.message}</p>
          </td></tr>
          <tr><td style="background:#f4f4f5; padding:16px; font-size:11px; color:#52525B;">
            Submitted {sub.created_at.isoformat()}
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact_submission(payload: ContactSubmissionCreate):
    sub = ContactSubmission(**payload.model_dump())

    # Try sending via Resend (non-blocking) if configured
    email_sent = False
    if RESEND_API_KEY and CONTACT_RECIPIENT_EMAIL:
        try:
            params = {
                "from": SENDER_EMAIL,
                "to": [CONTACT_RECIPIENT_EMAIL],
                "reply_to": [str(sub.email)],
                "subject": f"New inquiry from {sub.name} — Hiscope Construction",
                "html": _build_contact_email_html(sub),
            }
            await asyncio.to_thread(resend.Emails.send, params)
            email_sent = True
        except Exception as e:
            logging.getLogger(__name__).error(f"Resend send failed: {e}")

    sub.email_sent = email_sent
    doc = sub.model_dump()
    doc['email'] = str(doc['email'])
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_submissions.insert_one(doc)
    return sub


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contact_submissions():
    rows = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


app.include_router(api_router)

_cors_origins = os.environ.get('CORS_ORIGINS', '*').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_credentials='*' not in _cors_origins,
    allow_origins=_cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def startup_db_client():
    try:
        await client.admin.command("ping")
        logger.info("MongoDB connection OK")
    except Exception as e:
        logger.error(f"MongoDB connection failed: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
