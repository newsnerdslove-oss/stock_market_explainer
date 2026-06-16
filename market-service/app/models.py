"""Pydantic response models shared by all providers."""
from pydantic import BaseModel


class Quote(BaseModel):
    symbol: str
    price: float
    bid: float
    ask: float
    timestamp: str
    source: str


class Candle(BaseModel):
    time: str  # ISO timestamp
    open: float
    high: float
    low: float
    close: float
    volume: float


class Candles(BaseModel):
    symbol: str
    candles: list[Candle]
    source: str
