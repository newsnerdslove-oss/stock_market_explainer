# Ansible prerequisites (run on your Mac)

```bash
# 1. Ansible itself
pip install --user ansible

# 2. Windows modules used by the playbook
ansible-galaxy collection install ansible.windows community.windows

# 3. Confirm you can reach the box (after enable-openssh.ps1 has run on Windows)
ansible -i inventory.ini model_server -m ansible.windows.win_ping
```

A successful `win_ping` returns `"ping": "pong"`. Then run the playbook
(`--check` first for a dry run). Targeting Windows over SSH requires the OpenSSH
Server enabled on the box (see `../windows/enable-openssh.ps1`).
