"""FastAPI entrypoint for the market service.

Selects the data provider at startup: real Alpaca data if keys are present,
otherwise deterministic mock data so the UI can be built immediately.
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app import config
from app.models import Candles, Quote
from app.providers.base import MarketProvider
from app.providers.mock import MockProvider

app = FastAPI(title="Stock Market Explainer — Market Service", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=config.CORS_ORIGINS,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _build_provider() -> MarketProvider:
    if config.has_alpaca():
        from app.providers.alpaca import AlpacaProvider

        return AlpacaProvider()
    return MockProvider()


provider: MarketProvider = _build_provider()


@app.get("/health")
async def health() -> dict:
    return {"status": "ok", "provider": provider.name}


@app.get("/quote/{symbol}", response_model=Quote)
async def quote(symbol: str) -> Quote:
    try:
        return await provider.get_quote(symbol)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=f"quote failed: {exc}") from exc


@app.get("/candles/{symbol}", response_model=Candles)
async def candles(symbol: str, limit: int = 50) -> Candles:
    limit = max(1, min(limit, 1000))
    try:
        return await provider.get_candles(symbol, limit)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=f"candles failed: {exc}") from exc


@app.get("/crypto/quote/{symbol}", response_model=Quote)
async def crypto_quote(symbol: str) -> Quote:
    try:
        return await provider.get_crypto_quote(symbol)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=f"crypto quote failed: {exc}") from exc
