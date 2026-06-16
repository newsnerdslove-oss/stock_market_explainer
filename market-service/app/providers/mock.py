"""Deterministic mock provider so the UI can be built without API keys.

Prices are generated from the symbol name + time so charts look alive
and reproducible without any external calls.
"""
import hashlib
import math
from datetime import datetime, timedelta, timezone

from app.models import Candle, Candles, Quote
from app.providers.base import MarketProvider


def _seed(symbol: str) -> float:
    h = hashlib.sha256(symbol.upper().encode()).hexdigest()
    return 50 + (int(h[:6], 16) % 45000) / 100  # base price ~ $50–$500


class MockProvider(MarketProvider):
    name = "mock"

    def _price(self, symbol: str, t: float) -> float:
        base = _seed(symbol)
        wave = math.sin(t / 600) * base * 0.01  # gentle intraday wave
        return round(base + wave, 2)

    async def get_quote(self, symbol: str) -> Quote:
        now = datetime.now(timezone.utc)
        price = self._price(symbol, now.timestamp())
        return Quote(
            symbol=symbol.upper(),
            price=price,
            bid=round(price - 0.02, 2),
            ask=round(price + 0.02, 2),
            timestamp=now.isoformat(),
            source="mock",
        )

    async def get_candles(self, symbol: str, limit: int) -> Candles:
        now = datetime.now(timezone.utc)
        candles: list[Candle] = []
        for i in range(limit, 0, -1):
            t = now - timedelta(minutes=i)
            o = self._price(symbol, t.timestamp())
            c = self._price(symbol, t.timestamp() + 60)
            high = max(o, c) + abs(o - c) * 0.5 + 0.1
            low = min(o, c) - abs(o - c) * 0.5 - 0.1
            candles.append(
                Candle(
                    time=t.isoformat(),
                    open=round(o, 2),
                    high=round(high, 2),
                    low=round(low, 2),
                    close=round(c, 2),
                    volume=1000 + (i * 37 % 500),
                )
            )
        return Candles(symbol=symbol.upper(), candles=candles, source="mock")

    async def get_crypto_quote(self, symbol: str) -> Quote:
        q = await self.get_quote(symbol)
        return q
