# market-service

Python (FastAPI) service for market data, indicators, and simulator orchestration.

Runs with **mock data** out of the box so you can build the UI before wiring real APIs.
When `ALPACA_API_KEY`/`ALPACA_API_SECRET` are set (in the repo-root `.env`), the
`alpaca` provider activates automatically.

## Run
```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Endpoints
- `GET /health` — liveness + which data provider is active.
- `GET /quote/{symbol}` — latest quote for a stock (e.g., `AAPL`).
- `GET /candles/{symbol}?limit=50` — recent OHLC candles for charting.
- `GET /crypto/quote/{symbol}` — latest crypto quote (e.g., `BTC`).

## Structure
```
app/
  main.py            # FastAPI app + routes
  config.py          # env loading, provider selection
  models.py          # pydantic response models
  providers/
    base.py          # Provider interface
    mock.py          # deterministic fake data (default)
    alpaca.py        # real data when keys are present
```

Add indicator math (RSI, MACD, moving averages) and simulator/order endpoints here as you reach Phase 4.
