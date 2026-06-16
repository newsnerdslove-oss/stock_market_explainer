#!/usr/bin/env bash
# Live, end-to-end integration test for the RAG-grounded tutor against the REAL
# self-hosted model (no mocks). It boots a hermetic Next dev server, POSTs real
# learner questions to /api/tutor, and asserts the answers came from the model
# (mode == "llm") grounded on actual lesson sources — while confirming the
# graceful retrieval/none fallback contract still holds.
#
#   ./deploy/test-tutor-live.sh
#   TUTOR_TEST_BASE_URL=http://localhost:3000 ./deploy/test-tutor-live.sh   # reuse a running server
#   TUTOR_TEST_PORT=3100 ./deploy/test-tutor-live.sh
#
# Exit 0 = all assertions passed. Exit 1 = a failure (prints mode/llmStatus to diagnose).
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WEB_DIR="$REPO_ROOT/web"
ENV_FILE="$WEB_DIR/.env.local"
PORT="${TUTOR_TEST_PORT:-3100}"
BASE="${TUTOR_TEST_BASE_URL:-http://localhost:$PORT}"
SERVER_PID=""
LOG_FILE=""

pass=0; fail=0
note() { printf '%s\n' "$*"; }
ok()   { printf '  \033[32mPASS\033[0m %s\n' "$*"; pass=$((pass+1)); }
bad()  { printf '  \033[31mFAIL\033[0m %s\n' "$*"; fail=$((fail+1)); }

# --- 0. Require the tutor env (we test the REAL model, so these must be set) ---
[ -f "$ENV_FILE" ] || { echo "Missing $ENV_FILE — set TUTOR_LLM_URL and TUTOR_MODEL first."; exit 1; }
set -a; # shellcheck disable=SC1090
. "$ENV_FILE"; set +a
if [ -z "${TUTOR_LLM_URL:-}" ] || [ -z "${TUTOR_MODEL:-}" ]; then
  echo "TUTOR_LLM_URL / TUTOR_MODEL are not both set in $ENV_FILE — the tutor would run retrieval-only."
  echo "This test asserts the LLM path, so it needs the real endpoint configured."
  exit 1
fi
note "Tutor model : $TUTOR_MODEL"
note "Tutor URL   : $TUTOR_LLM_URL"

# --- 1. Pre-flight: the self-hosted model must be reachable (real, not mocked) ---
if ! curl -fsS -m 8 "$TUTOR_LLM_URL/models" >/dev/null 2>&1; then
  echo "Cannot reach $TUTOR_LLM_URL/models — bring the llama-nemotron service online first"
  echo "(see deploy/healthcheck.py). Refusing to run a 'live' test against a dead endpoint."
  exit 1
fi
note "Endpoint reachable. ✓"

cleanup() {
  if [ -n "$SERVER_PID" ]; then
    # Kill whatever now owns the port (next spawns children under npm/next).
    local owners; owners="$(lsof -ti "tcp:$PORT" 2>/dev/null || true)"
    [ -n "$owners" ] && kill $owners 2>/dev/null || true
  fi
}
trap cleanup EXIT

# --- 2. Use an existing server if pointed at one; else boot a hermetic dev server ---
if [ -n "${TUTOR_TEST_BASE_URL:-}" ]; then
  note "Reusing server at $BASE"
elif curl -fsS -m 2 "$BASE/" >/dev/null 2>&1; then
  note "Reusing server already listening on $BASE"
else
  LOG_FILE="$(mktemp -t tutor-live-dev.XXXXXX.log)"
  note "Booting Next dev server on :$PORT (log: $LOG_FILE) …"
  ( cd "$WEB_DIR" && exec npm run dev -- -p "$PORT" ) >"$LOG_FILE" 2>&1 &
  SERVER_PID=$!
  # Wait for readiness (first compile can take a while).
  for i in $(seq 1 90); do
    if curl -fsS -m 2 "$BASE/" >/dev/null 2>&1; then break; fi
    if ! kill -0 "$SERVER_PID" 2>/dev/null; then
      echo "Dev server exited early. Last log lines:"; tail -20 "$LOG_FILE"; exit 1
    fi
    sleep 1
  done
  curl -fsS -m 2 "$BASE/" >/dev/null 2>&1 || { echo "Server never became ready."; tail -20 "$LOG_FILE"; exit 1; }
  note "Server ready. ✓"
fi

# --- helper: POST to /api/tutor, return raw JSON on stdout ---
ask() {
  local payload="$1"
  curl -sS -m 60 "$BASE/api/tutor" -H "Content-Type: application/json" -d "$payload"
}

# assert_llm <label> <slug> <question> : expects mode=="llm" + >=1 source + non-empty answer
assert_llm() {
  local label="$1" slug="$2" q="$3" json
  json="$(ask "$(python3 -c 'import json,sys;print(json.dumps({"question":sys.argv[1],"slug":sys.argv[2]}))' "$q" "$slug")")"
  JSON="$json" python3 - "$label" <<'PY'
import json,os,sys
label=sys.argv[1]
d=json.loads(os.environ["JSON"])
mode=d.get("mode"); srcs=d.get("sources") or []; ans=(d.get("answer") or "").strip()
ok = mode=="llm" and len(srcs)>=1 and len(ans)>0
slugs=",".join(s.get("slug","?") for s in srcs)
print(f"::{'OK' if ok else 'NO'}::{label} | mode={mode} llmStatus={d.get('llmStatus')} sources=[{slugs}] answer={ans[:70]!r}")
PY
}

# assert_status <label> <payload> <expected_http>
assert_status() {
  local label="$1" payload="$2" want="$3" code
  code="$(curl -sS -m 30 -o /dev/null -w '%{http_code}' "$BASE/api/tutor" -H "Content-Type: application/json" -d "$payload")"
  if [ "$code" = "$want" ]; then ok "$label (HTTP $code)"; else bad "$label (HTTP $code, wanted $want)"; fi
}

# assert_mode_in <label> <payload> <mode1> [<mode2> ...] : grounded-fallback contract
assert_mode_in() {
  local label="$1" payload="$2"; shift 2
  local want="$*" json
  json="$(ask "$payload")"
  WANT="$want" JSON="$json" python3 - "$label" <<'PY'
import json,os,sys
label=sys.argv[1]; want=set(os.environ["WANT"].split())
d=json.loads(os.environ["JSON"]); mode=d.get("mode")
print(f"::{'OK' if mode in want else 'NO'}::{label} | mode={mode} (allowed: {sorted(want)})")
PY
}

run_assert() { # consume ::OK::/::NO:: lines from the python helpers
  local line; line="$1"
  case "$line" in
    ::OK::*) ok "${line#::OK::}";;
    ::NO::*) bad "${line#::NO::}";;
    *)       note "$line";;
  esac
}

note ""
note "== Grounded LLM answers (must be mode=llm with real sources) =="
while IFS= read -r line; do run_assert "$line"; done < <(assert_llm "spread: why lose money"      "bid-ask-spread"   "why do I lose money on the spread?")
while IFS= read -r line; do run_assert "$line"; done < <(assert_llm "candle: what is a wick"       "what-is-a-candle" "what is a wick on a candlestick?")
while IFS= read -r line; do run_assert "$line"; done < <(assert_llm "pe: high vs low P/E"          "pe-ratio"         "is a high P/E ratio good or bad?")
while IFS= read -r line; do run_assert "$line"; done < <(assert_llm "pnl: realized vs unrealized"  "profit-and-loss"  "what is the difference between realized and unrealized profit?")

note ""
note "== Graceful-fallback / grounding contract (must stay intact) =="
assert_status   "empty question rejected"        '{"question":""}'                              400
assert_status   "overlong question rejected"     "{\"question\":\"$(python3 -c 'print("a"*501)')\"}" 400
# A question with ZERO overlap with any lesson must hit the no-match fallback
# (mode "none") — the model is never invoked, so it can't answer ungrounded.
# (Grounding for *partial* matches is enforced separately by the system prompt:
# the model declines politely but still returns mode "llm" — that's intended.)
while IFS= read -r line; do run_assert "$line"; done < <(assert_mode_in "no-match falls back to 'none'" '{"question":"photosynthesis chloroplast giraffe migration"}' none)

note ""
if [ "$fail" -eq 0 ]; then
  printf '\033[32mLIVE TUTOR TEST PASSED\033[0m — %d checks, model=%s\n' "$pass" "$TUTOR_MODEL"
  exit 0
else
  printf '\033[31mLIVE TUTOR TEST FAILED\033[0m — %d passed, %d failed\n' "$pass" "$fail"
  exit 1
fi
