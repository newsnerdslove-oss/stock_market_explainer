#!/usr/bin/env bash
# Run from your Mac: smoke-test the model endpoint, then race the enabled
# candidates in bench/models.json and print the leaderboard.
#
#   ./deploy/run-benchmark.sh                 # default host/port
#   ./deploy/run-benchmark.sh 192.168.110.145 8082
set -euo pipefail

HOST="${1:-192.168.110.145}"
PORT="${2:-8082}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "== 1/2 Smoke test =="
python3 "$REPO_ROOT/deploy/healthcheck.py" "$HOST" "$PORT" || {
  echo "Endpoint not healthy — fix that before benchmarking."; exit 1; }

echo
echo "== 2/2 Benchmark (enabled models in bench/models.json) =="
cd "$REPO_ROOT/bench"
python3 run.py "$@" 2>/dev/null || python3 run.py
echo
echo "Leaderboard + side-by-side answers are in bench/results/<timestamp>/."
echo "To race more models, flip \"enabled\": true on them in bench/models.json."
