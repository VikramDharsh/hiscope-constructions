"""Backend tests for Hiscope Construction API"""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://hiscope-build.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root
def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert r.json() == {"message": "Hiscope Construction API"}


# Contact - valid
def test_contact_valid_submission(client):
    payload = {
        "name": "TEST_John Doe",
        "email": "test_john@example.com",
        "phone": "+1-555-1234",
        "service": "Commercial",
        "message": "We need a full commercial build.",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["phone"] == payload["phone"]
    assert data["service"] == payload["service"]
    assert data["message"] == payload["message"]
    assert data["email_sent"] is False  # No RESEND_API_KEY configured
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data
    # ISO format parse-ability
    from datetime import datetime
    datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))


# Contact - validation
@pytest.mark.parametrize("payload", [
    {"email": "a@b.com", "message": "Hello there"},  # missing name
    {"name": "TEST_x", "message": "Hello there"},  # missing email
    {"name": "TEST_x", "email": "a@b.com"},  # missing message
    {"name": "TEST_x", "email": "not-an-email", "message": "Hello there"},  # invalid email
    {"name": "TEST_x", "email": "a@b.com", "message": "hi"},  # message too short
])
def test_contact_validation_422(client, payload):
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422, f"Expected 422 for {payload}, got {r.status_code}: {r.text}"


# Contact - list
def test_contact_list_sorted_no_id(client):
    # Create two submissions
    first = client.post(f"{API}/contact", json={
        "name": "TEST_A", "email": "a@example.com", "message": "First submission message"
    })
    assert first.status_code == 200
    second = client.post(f"{API}/contact", json={
        "name": "TEST_B", "email": "b@example.com", "message": "Second submission message"
    })
    assert second.status_code == 200
    second_id = second.json()["id"]

    r = client.get(f"{API}/contact")
    assert r.status_code == 200
    rows = r.json()
    assert isinstance(rows, list)
    assert len(rows) >= 2
    # No mongo _id leaked
    assert all("_id" not in row for row in rows)
    # Sorted newest-first: the most recent created should be the second
    assert rows[0]["id"] == second_id

    # sorted check across timestamps
    from datetime import datetime
    times = [datetime.fromisoformat(r["created_at"].replace("Z", "+00:00")) for r in rows]
    assert times == sorted(times, reverse=True)


# Status legacy
def test_status_create_and_list(client):
    r = client.post(f"{API}/status", json={"client_name": "TEST_client"})
    assert r.status_code == 200
    data = r.json()
    assert data["client_name"] == "TEST_client"
    assert "id" in data and "timestamp" in data

    r2 = client.get(f"{API}/status")
    assert r2.status_code == 200
    lst = r2.json()
    assert isinstance(lst, list)
    assert any(x["client_name"] == "TEST_client" for x in lst)
