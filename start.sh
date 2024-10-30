#!/bin/bash

session="honeypot-example"

# Check if script is running as root
if [ "$EUID" -ne 0 ]; then
  echo "This script must be run as root. Requesting sudo..."
  exec sudo "$0" "$@"
fi

# Start the tmux session and run commands
tmux new-session -d -s $session
tmux send-keys "cd server" C-m

tmux split-window -h
tmux send-keys "sudo docker-compose --env-file ./.env -f scripts/docker-compose.data.yml up" C-m
tmux select-pane -t 1

tmux send-keys "nest start" C-m

tmux attach
