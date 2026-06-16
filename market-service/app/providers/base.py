"""Provider interface. Mock and Alpaca both implement this."""
from abc import ABC, abstractmethod

from app.models import Candles, Quote


class MarketProvider(ABC):
    name: str = "base"

    @abstractmethod
    async def get_quote(self, symbol: str) -> Quote: ...

    @abstractmethod
    async def get_candles(self, symbol: str, limit: int) -> Candles: ...

    @abstractmethod
    async def get_crypto_quote(self, symbol: str) -> Quote: ...
