# deploy/ — configuration as code

The bridge from "planned in Cowork" to "actually applied to a machine." Cowork
(and this repo) **generate** the change; an executor that has real network access
**runs** it. Nothing here reaches your LAN on its own.

## Who runs these

- **You, from your Mac terminal** — your Mac is on the LAN and can reach the
  Windows box at `192.168.110.145`. Run the commands below.
- **Claude Code on your Mac** — its shell *is* your machine (your network, your
  SSH keys). Open this repo in Claude Code and tell it to apply a playbook; it
  executes with your approval. This is the autonomous path.

> Safety: review every script before running it. These change a real machine.
> Start with the read-only/verify steps. PowerShell scripts are written to be
> idempotent (safe to re-run) and to check state before changing it.

## Current box (as configured)

The Windows box at `192.168.110.145` already has SSH on and serves Nemotron via
an NSSM-wrapped `llama-server` service named **`llama-nemotron`** on **port 8082**
(`/v1` OpenAI-compatible). So the bootstrap steps below are optional history —
day to day you just need the smoke test and benchmark runner.

## Fastest path (it's already set up)

From your Mac:
```bash
python3 deploy/healthcheck.py            # confirm the endpoint is live + speed
./deploy/run-benchmark.sh                # smoke test, then race the models
```

## What's here

```
deploy/
  healthcheck.py            Mac-side smoke test: model live? latency + tok/s. Changes nothing.
  run-benchmark.sh          Mac-side: healthcheck, then run the bench harness.
  windows/
    service-nssm.ps1        Ensure the llama-nemotron service is auto-start + running (or re-point it).
    enable-openssh.ps1      Turn on OpenSSH Server (already done on this box).
    setup-model-server.ps1  Open the inference port + verify the endpoint.
  ansible/
    inventory.ini.example   Copy to inventory.ini, fill in user/host.
    ansible.cfg             Sensible defaults.
    playbook.yml            Idempotent: SSH + model service + firewall + health-check.
    requirements.md         Collections to install.
```

## Path A — one-off, by hand (fastest)

1. **On the Windows box once** (Admin PowerShell), enable SSH:
   ```powershell
   # copy enable-openssh.ps1 over, then:
   powershell -ExecutionPolicy Bypass -File .\enable-openssh.ps1
   ```
2. **From your Mac**, you can now reach it:
   ```bash
   ssh YOUR_USER@192.168.110.145
   ```
3. Copy and run the model-server setup (opens port 8000, checks the endpoint):
   ```bash
   scp deploy/windows/setup-model-server.ps1 YOUR_USER@192.168.110.145:.
   ssh YOUR_USER@192.168.110.145 "powershell -ExecutionPolicy Bypass -File setup-model-server.ps1 -Port 8000"
   ```

## Path B — repeatable, config-as-code (Ansible from your Mac)

Idempotent, reviewable, re-runnable. Once SSH is on (Path A step 1):

```bash
cd deploy/ansible
cp inventory.ini.example inventory.ini      # fill in ansible_user
# install Windows modules once:  see requirements.md
ansible-playbook -i inventory.ini playbook.yml --check   # dry run, changes nothing
ansible-playbook -i inventory.ini playbook.yml           # apply
```

`--check` is a dry run — always start there.

## Why Cowork can't SSH the box itself

The shell in Cowork is a sandboxed Linux VM with internet-only, allow-listed
access. It cannot see `192.168.x` on your LAN (the same reason the tutor can't
reach your Nemotron from the cloud side). So the executor must run where the
access lives: your Mac, or Claude Code on your Mac.
