#!/bin/bash

# Strali Solutions Auto-Deploy Script
# Polls GitHub for changes and rebuilds if needed

REPO_DIR="/var/www/stralisolutionsweb"
LOG_FILE="/home/oe8yml/strali-deploy.log"
LOCK_FILE="/tmp/strali-deploy.lock"

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Check if already running
if [ -f "$LOCK_FILE" ]; then
    log "Deploy already running, skipping..."
    exit 0
fi

# Create lock file
touch "$LOCK_FILE"
trap "rm -f $LOCK_FILE" EXIT

cd "$REPO_DIR" || {
    log "ERROR: Cannot access $REPO_DIR"
    exit 1
}

# Fetch latest changes from remote
log "Fetching changes from GitHub..."
git fetch origin main 2>&1 | tee -a "$LOG_FILE"

# Check if there are new commits
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" = "$REMOTE" ]; then
    log "No changes detected. Already up to date."
    exit 0
fi

log "Changes detected! Deploying..."
log "Local:  $LOCAL"
log "Remote: $REMOTE"

# Pull changes
log "Pulling changes..."
git pull origin main 2>&1 | tee -a "$LOG_FILE"

if [ $? -ne 0 ]; then
    log "ERROR: Git pull failed!"
    exit 1
fi

# Install dependencies
log "Installing dependencies..."
npm install 2>&1 | tee -a "$LOG_FILE"

if [ $? -ne 0 ]; then
    log "ERROR: npm install failed!"
    exit 1
fi

# Build the application (vite build only, skip react-snap if it fails)
log "Building application..."
npx vite build 2>&1 | tee -a "$LOG_FILE"

if [ $? -ne 0 ]; then
    log "ERROR: Build failed!"
    exit 1
fi

log "Deploy completed successfully!"
log "============================================"
