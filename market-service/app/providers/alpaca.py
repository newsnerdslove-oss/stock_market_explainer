"""Real market data via Alpaca (free Basic plan: IEX equities + crypto).

Activated automatically when ALPACA_API_KEY/SECRET are set. Docs:
https://docs.alpaca.markets/us/docs/about-market-data-api
"""
from datetime import datetime, timezone

import httpx

from app import config
from app.models import Candle, Candles, Quote
from app.providers.base import MarketProvider

_TIMEFRAME = "1Min"


class AlpacaProvider(MarketProvider):
    name = "alpaca"

    def __init__(self) -> None:
        self._headers = {
            "APCA-API-KEY-ID": config.ALPACA_API_KEY,
            "APCA-API-SECRET-KEY": config.ALPACA_API_SECRET,
        }
        self._base = config.ALPACA_DATA_BASE_URL.rstrip("/")

    async def get_quote(self, symbol: str) -> Quote:
        url = f"{self._base}/v2/stocks/{symbol.upper()}/quotes/latest"
        async with httpx.AsyncClient(timeout=10) as client:
            r = await client.get(url, headers=self._headers)
            r.raise_for_status()
            q = r.json()["quote"]
        bid, ask = float(q["bp"]), float(q["ap"])
        price = round((bid + ask) / 2, 2) if bid and ask else bid or ask
        return Quote(
            symbol=symbol.upper(),
            price=price,
            bid=bid,
            ask=ask,
            timestamp=q.get("t", datetime.now(timezone.utc).isoformat()),
            source="alpaca",
        )

    async def get_candles(self, symbol: str, limit: int) -> Candles:
        url = f"{self._base}/v2/stocks/{symbol.upper()}/bars"
        params = {"timeframe": _TIMEFRAME, "limit": limit}
        async with httpx.AsyncClient(timeout=10) as client:
            r = await client.get(url, headers=self._headers, params=params)
            r.raise_for_status()
            bars = r.json().get("bars", [])
        candles = [
            Candle(
                time=b["t"],
                open=b["o"],
                high=b["h"],
                low=b["l"],
                close=b["c"],
                volume=b.get("v", 0),
            )
            for b in bars
        ]
        return Candles(symbol=symbol.upper(), candles=candles, source="alpaca")

    async def get_crypto_quote(self, symbol: str) -> Quote:
        # Alpaca crypto symbols look like "BTC/USD".
        pair = symbol.upper() if "/" in symbol else f"{symbol.upper()}/USD"
        url = f"{self._base}/v1beta3/crypto/us/latest/quotes"
        async with httpx.AsyncClient(timeout=10) as client:
            r = await client.get(url, headers=self._headers, params={"symbols": pair})
            r.raise_for_status()
            q = r.json()["quotes"][pair]
        bid, ask = float(q["bp"]), float(q["ap"])
        return Quote(
            symbol=pair,
            price=round((bid + ask) / 2, 2),
            bid=bid,
            ask=ask,
            timestamp=q.get("t", datetime.now(timezone.utc).isoformat()),
            source="alpaca",
        )
