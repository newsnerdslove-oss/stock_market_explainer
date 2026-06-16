#!/usr/bin/env bash
# Serial model bench-off for the RAG tutor: install + evaluate each contender on
# the GPU box (one ~20-27GB model fits in 32GB at a time), scoring speed +
# grounded accuracy + hallucination, then ALWAYS restore the production model.
#
#   ./deploy/eval-models.sh                 # all contenders (downloads as needed)
#   ./deploy/eval-models.sh nemotron-q4     # dry run: one on-disk variant, no download
#
# Reads the contender list + filenames/ctx/hf_url from bench/models.json. For each:
# resolve-on-box (download if missing) -> swap-model.ps1 (preserves tuned flags,
# self-rolls-back on VRAM/arch failure) -> healthcheck -> grounded bench -> stash.
# A trap restores production (nemotron-q5) on any exit. Synthesizes a cross-variant
# leaderboard: hallucination-rate, grounded accuracy, answer latency, tok/s, VRAM.
set -uo pipefail

HOST=192.168.110.145; PORT=8082; SVC=llama-nemotron; SSH_TGT="lavaj@$HOST"
REPO="$(cd "$(dirname "$0")/.." && pwd)"; BENCH="$REPO/bench"
SUITE="$BENCH/suite-grounded.jsonl"
SWAP_PS1='C:\Users\lavaj\swap-model.ps1'   # already on the box (PowerShell 5.1, runs elevated)
MODELS_BASE='G:\llama\models'
RESTORE_KEY=nemotron-q5

# Must match web/lib/tutor/index.ts SYSTEM_PROMPT exactly (ends in /no_think).
TUTOR_SYS="You are a patient finance tutor inside a learning app for beginners. Answer the student's question using ONLY the lesson excerpts provided. If the excerpts do not contain the answer, say you're not certain and point them to the most relevant lesson instead of guessing. Keep answers short, plain, and encouraging. Define jargon in everyday words. Never give financial advice or tell the student what to buy, sell, or trade. /no_think"

# Default order: prod baseline, cheap on-disk Q4, then downloads (smaller dense
# first so a Qwen3.6 arch/load failure is cheaper to discover).
CONTENDERS=(nemotron-q5 nemotron-q4 qwen36-dense qwen36-moe)
[ "$#" -gt 0 ] && CONTENDERS=("$@")

ssh_ps() { ssh -o ConnectTimeout=12 "$SSH_TGT" "powershell -NoProfile -Command \"$1\"" 2>&1; }
mfield() { python3 -c "import json;d=json.load(open('$BENCH/models.json'));print(next((m.get('$2','') for m in d['models'] if m['key']=='$1'),''))"; }
resolve_path() { ssh_ps "Get-ChildItem -Recurse '$MODELS_BASE' -Filter '$1' -EA SilentlyContinue | Select-Object -First 1 -ExpandProperty FullName" | tr -d '\r' | grep -i '\.gguf$' | head -1; }
vram_used() { ssh -o ConnectTimeout=12 "$SSH_TGT" "nvidia-smi --query-gpu=memory.used --format=csv,noheader,nounits" 2>/dev/null | tr -d '\r' | head -1; }
served_model() { curl -s -m 10 "http://$HOST:$PORT/v1/models" | python3 -c "import json,sys;print(json.load(sys.stdin)['data'][0]['id'])" 2>/dev/null; }
# swap-model already polled /health; this confirms the /v1 completion path is
# serving too, retrying through the brief post-load warmup window.
healthcheck() {
  i=1
  while [ "$i" -le 6 ]; do
    python3 "$REPO/deploy/healthcheck.py" "$HOST" "$PORT" >/dev/null 2>&1 && return 0
    sleep 3; i=$((i+1))
  done
  return 1
}
swap_to() { ssh_ps "& '$SWAP_PS1' -Service $SVC -ModelPath '$1' -CtxSize $2 -Port $PORT" | tail -4; return "${PIPESTATUS[0]}"; }

# Resolve the production model path up front so the restore trap always works.
RESTORE_FILE="$(mfield "$RESTORE_KEY" model)"; RESTORE_CTX="$(mfield "$RESTORE_KEY" ctx)"
RESTORE_PATH="$(resolve_path "$RESTORE_FILE")"
[ -z "$RESTORE_PATH" ] && { echo "FATAL: cannot resolve production model '$RESTORE_FILE' on box."; exit 1; }
echo "Production restore target: $RESTORE_PATH (ctx $RESTORE_CTX)"

restore_prod() {
  echo ""; echo ">> Restoring production model ($RESTORE_KEY) ..."
  swap_to "$RESTORE_PATH" "$RESTORE_CTX" >/dev/null 2>&1
  if healthcheck; then echo ">> Restored. Now serving: $(served_model)"; else echo ">> !! RESTORE HEALTHCHECK FAILED — investigate the box manually."; fi
}
trap restore_prod EXIT INT TERM

MANIFEST="$(mktemp /tmp/eval-manifest.XXXX.tsv)"   # one ok variant per line: key <TAB> resultdir <TAB> vram
for key in "${CONTENDERS[@]}"; do
  file="$(mfield "$key" model)"; ctx="$(mfield "$key" ctx)"; url="$(mfield "$key" hf_url)"
  [ -z "$file" ] && { echo "!! unknown contender key '$key' (not in models.json)"; continue; }
  echo ""; echo "================= $key  ($file) ================="

  path="$(resolve_path "$file")"
  if [ -z "$path" ] && [ -n "$url" ]; then
    dest="$MODELS_BASE\\bench\\$file"
    echo ">> Not on box. Downloading (resumable): $url"
    ssh_ps "New-Item -ItemType Directory -Force -Path '$MODELS_BASE\\bench' | Out-Null; & curl.exe -L --fail --retry 5 --retry-delay 5 -C - -o '$dest' '$url'" | tail -3
    path="$(resolve_path "$file")"
  fi
  [ -z "$path" ] && { echo ">> SKIP $key: model file not available on box."; continue; }

  echo ">> Swapping service -> $path (ctx $ctx)"
  if ! swap_to "$path" "$ctx"; then
    echo ">> SWAP FAILED for $key (unsupported arch or VRAM overflow). swap-model rolled back; continuing."
    continue
  fi
  if ! healthcheck; then echo ">> healthcheck failed for $key; skipping."; continue; fi
  served="$(served_model)"; vram="$(vram_used)"
  echo ">> Live: $served  | VRAM used: ${vram} MiB"

  tmpcfg="$(mktemp "/tmp/evalcfg.${key}.XXXX.json")"
  python3 - "$tmpcfg" "$key" "$served" "$HOST" "$PORT" "$TUTOR_SYS" <<'PY'
import json,sys
out,key,served,host,port,sysp=sys.argv[1:7]
json.dump({"default_system":sysp,"models":[{"key":key,"model":served,
  "base_url":f"http://{host}:{port}/v1","api_key":"","enabled":True}]}, open(out,"w"), indent=2)
PY
  outroot="$BENCH/results/eval-$key"
  echo ">> Benching grounded suite (runs=2) ..."
  ( cd "$BENCH" && python3 run.py --config "$tmpcfg" --suite "$SUITE" \
      --runs 2 --max-tokens 1024 --temperature 0.2 --timeout 180 --out "$outroot" ) 2>&1 | tail -4
  resdir="$(ls -dt "$outroot"/*/ 2>/dev/null | head -1)"
  printf '%s\t%s\t%s\n' "$key" "${resdir%/}" "$vram" >> "$MANIFEST"
  rm -f "$tmpcfg"
done

# ---- Cross-variant synthesis ----
echo ""; echo ">> Synthesizing cross-variant leaderboard ..."
OUT="$BENCH/results/crossvariant-$(date +%Y%m%d-%H%M%S)"; mkdir -p "$OUT"
python3 - "$MANIFEST" "$OUT/leaderboard-crossvariant.md" <<'PY'
import json,sys,statistics
manifest,outpath=sys.argv[1:3]
def mean(xs): xs=[x for x in xs if x is not None]; return round(statistics.mean(xs),3) if xs else None
rows=[]
for line in open(manifest):
    line=line.rstrip("\n")
    if not line: continue
    key,d,vram=line.split("\t")
    res=json.load(open(d+"/results.json"))
    tasks=next(iter(res["models"].values()))["tasks"]
    g=[t["score"] for t in tasks if t.get("ok") and t.get("category")=="grounded" and t.get("score") is not None]
    a=[t["score"] for t in tasks if t.get("ok") and t.get("category")=="grounded-adversarial" and t.get("score") is not None]
    abst=mean(a)
    rows.append({"model":key,
      "grounded_acc":mean(g),
      "abstain":abst,
      "halluc": None if abst is None else round(1-abst,3),
      "ans_lat":mean([t.get("answer_latency_s") for t in tasks if t.get("ok")]),
      "tok_s":mean([t.get("tok_per_s") for t in tasks if t.get("ok")]),
      "vram":vram or "—"})
# Decision rule: lowest hallucination, then highest grounded accuracy, then lowest answer latency.
rows.sort(key=lambda r:( (r["halluc"] if r["halluc"] is not None else 1),
                         -(r["grounded_acc"] or 0),
                         (r["ans_lat"] if r["ans_lat"] is not None else 9e9)))
L=["# Tutor model bench-off — cross-variant leaderboard","",
   "Grounded faithfulness suite (`bench/suite-grounded.jsonl`), tutor system prompt, /no_think.",
   "**Hallucination** = fraction of out-of-context questions the model answered instead of abstaining (lower is better — the gate).",
   "**Grounded acc** = correctness on in-context questions. **Answer (s)** = latency to first answer token. **Tok/s** = decode throughput.","",
   "| Rank | Model | Hallucination | Grounded acc | Abstain rate | Answer (s) | Tok/s | VRAM (MiB) |",
   "|---|---|---|---|---|---|---|---|"]
for i,r in enumerate(rows,1):
    f=lambda v:"—" if v is None else (f"{v:.2f}" if isinstance(v,float) else str(v))
    L.append(f"| {i} | {r['model']} | {f(r['halluc'])} | {f(r['grounded_acc'])} | {f(r['abstain'])} | {f(r['ans_lat'])} | {f(r['tok_s'])} | {r['vram']} |")
if rows:
    w=rows[0]
    L+=["", f"**Recommended: `{w['model']}`** — lowest hallucination ({w['halluc']}), grounded accuracy {w['grounded_acc']}, answer latency {w['ans_lat']}s. Decision rule: hallucination gate, then grounded accuracy, then answer latency."]
open(outpath,"w").write("\n".join(L))
print("\n".join(L))
print("\nWrote",outpath)
PY
rm -f "$MANIFEST"
echo ""; echo ">> Done. (restore trap will return the box to production now.)"
