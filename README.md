# Hiscope Constructions

Marketing website for Hiscope Construction — React frontend + FastAPI backend + MongoDB.

## Local development

### 1. MongoDB

Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas) and copy your connection string.

### 2. Backend

```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # then edit with your values
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
```

API runs at `http://localhost:8000/api/`

### 3. Frontend

```bash
cd frontend
yarn install
cp .env.example .env   # set REACT_APP_BACKEND_URL=http://localhost:8000
yarn start
```

Site runs at `http://localhost:3000`

## Deploy to Render

This repo includes a `render.yaml` Blueprint that creates two services:

| Service | Type | Purpose |
|---------|------|---------|
| `hiscope-api` | Python Web Service | FastAPI backend |
| `hiscope-frontend` | Static Site | React app |

### Prerequisites

1. A [Render](https://render.com) account
2. A [MongoDB Atlas](https://www.mongodb.com/atlas) database (free tier works)
3. This project pushed to a **GitHub** or **GitLab** repository

### Step-by-step

#### 1. Push code to GitHub

```bash
cd HiscopeConstructions-main
git init
git add .
git commit -m "Prepare Hiscope Constructions for Render deployment"
git remote add origin https://github.com/YOUR_USERNAME/hiscope-constructions.git
git push -u origin main
```

#### 2. Set up MongoDB Atlas

1. Create a cluster (free M0 tier is fine).
2. **Database Access** → create a database user with a password.
3. **Network Access** → add `0.0.0.0/0` (allow from anywhere) so Render can connect.
4. **Connect** → choose "Drivers" → copy the connection string.
5. Replace `<password>` in the string with your user's password.

#### 3. Deploy on Render (Blueprint)

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **New** → **Blueprint**
3. Connect your GitHub/GitLab account and select the repository
4. Render detects `render.yaml` — click **Apply**
5. When prompted for **MONGO_URL**, paste your Atlas connection string
6. Wait for both services to finish building (5–10 minutes)

Render automatically wires:

- `REACT_APP_BACKEND_URL` on the frontend → backend URL
- `CORS_ORIGINS` on the backend → frontend URL

#### 4. Verify deployment

- Backend health: `https://hiscope-api.onrender.com/api/` should return `{"message":"Hiscope Construction API"}`
- Frontend: open `https://hiscope-frontend.onrender.com`
- Test the contact form on `/contact`
- View submissions at `/admin/inquiries`

### Optional: email notifications

In the Render dashboard for `hiscope-api`, add:

- `RESEND_API_KEY` — from [resend.com](https://resend.com)
- `CONTACT_RECIPIENT_EMAIL` — where inquiry emails are sent

### Manual deploy (without Blueprint)

If you prefer creating services manually:

**Backend (Web Service)**

| Setting | Value |
|---------|-------|
| Root Directory | `backend` |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `uvicorn server:app --host 0.0.0.0 --port $PORT` |
| Health Check | `/api/` |

Env vars: `MONGO_URL`, `DB_NAME=hiscope`, `CORS_ORIGINS=https://YOUR-FRONTEND.onrender.com`

**Frontend (Static Site)**

| Setting | Value |
|---------|-------|
| Root Directory | `frontend` |
| Build Command | `yarn install && yarn build` |
| Publish Directory | `build` |

Env vars: `REACT_APP_BACKEND_URL=https://YOUR-API.onrender.com`, `CI=false`

Add a rewrite rule: `/*` → `/index.html` (SPA routing). The `_redirects` file in `frontend/public/` handles this.

### Notes

- **Free tier** services spin down after inactivity; first request may take ~30 seconds.
- The `/admin/inquiries` page has no login — protect it before going live.
- Contact form works via mailto even if the API is slow or unavailable.
