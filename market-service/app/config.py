"""Environment config and provider selection."""
import os
from pathlib import Path

from dotenv import load_dotenv

# Load .env from the repo root (one level up from market-service/).
_repo_root = Path(__file__).resolve().parents[2]
load_dotenv(_repo_root / ".env")

ALPACA_API_KEY = os.getenv("ALPACA_API_KEY", "").strip()
ALPACA_API_SECRET = os.getenv("ALPACA_API_SECRET", "").strip()
ALPACA_DATA_BASE_URL = os.getenv("ALPACA_DATA_BASE_URL", "https://data.alpaca.markets").strip()

# Allow the Next.js dev server to call us during local development.
CORS_ORIGINS = ["http://localhost:3000", "http://127.0.0.1:3000"]


def has_alpaca() -> bool:
    return bool(ALPACA_API_KEY and ALPACA_API_SECRET)


def active_provider_name() -> str:
    return "alpaca" if has_alpaca() else "mock"
