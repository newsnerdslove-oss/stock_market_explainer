#!/usr/bin/env python3
"""Tiny OpenAI-compatible mock server — for testing the harness without a GPU.

Streams a canned answer (and tries to emit a correct number for the math tasks)
so you can verify run.py end-to-end before pointing it at real models.

    python mock_server.py 8999      # then set base_url http://localhost:8999/v1
"""
import json
import re
import sys
import time
from http.server import BaseHTTPRequestHandler, HTTPServer


def fake_answer(prompt: str) -> str:
    p = prompt.lower()
    # Hand back the right number for the suite's math/reason tasks.
    table = [
        ("buy 10 shares at $50", "Profit = (58-50)*10 = $80."),
        ("bid is $10.00", "You lose (10.05-10.00)*100 = $5 to the spread."),
        ("$40 and its earnings per share is $2", "P/E = 40/2 = 20."),
        ("rises from $80 to $100", "Gain = (100-80)/80 = 25%."),
        ("+$120, -$50, and +$30", "Net = 120-50+30 = $100."),
        ("rises 8%, then falls 10%", "25*1.08=27, 27*0.9 = $24.30."),
        ("50% initial margin", "Buying power = 5000/0.5 = $10,000."),
        ("$50 strike for a premium of $3", "Profit = (58-50)-3 = $5 per share."),
        ("call option give the holder", "It gives the right to buy."),
        ("interest rates rise", "Existing bond prices fall."),
        ("only a json object", '{"term": "bid", "definition": "the highest price a buyer will pay"}'),
        ("price of bitcoin be next month", "No one can know future prices; it is unpredictable."),
        ("wick of a candlestick", "The wick marks the highest and lowest prices reached in the period."),
        ("p/e ratio of 20", "You pay $20 of price for every $1 the company earns per share."),
        ("bid-ask spread", "The gap between the bid and the ask; you cross it every trade."),
    ]
    for needle, ans in table:
        if needle in p:
            return ans
    return "This is a mock answer."


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):  # quiet
        pass

    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        body = json.loads(self.rfile.read(length) or "{}")
        prompt = body.get("messages", [{}])[-1].get("content", "")
        answer = fake_answer(prompt)

        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream")
        self.end_headers()
        # Stream token-ish chunks so TTFT/tok-per-sec are exercised.
        for word in answer.split():
            chunk = {"choices": [{"delta": {"content": word + " "}}]}
            self.wfile.write(f"data: {json.dumps(chunk)}\n\n".encode())
            self.wfile.flush()
            time.sleep(0.01)
        usage = {"choices": [], "usage": {"completion_tokens": len(answer.split())}}
        self.wfile.write(f"data: {json.dumps(usage)}\n\n".encode())
        self.wfile.write(b"data: [DONE]\n\n")
        self.wfile.flush()

    def do_GET(self):
        # Minimal /v1/models so `curl .../models` works too.
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps({"data": [{"id": "mock-model"}]}).encode())


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8999
    print(f"Mock OpenAI server on http://localhost:{port}/v1")
    HTTPServer(("0.0.0.0", port), Handler).serve_forever()
