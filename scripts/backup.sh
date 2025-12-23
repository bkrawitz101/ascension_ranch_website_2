#!/usr/bin/env bash
set -euo pipefail

# Creates a timestamped tar.gz of the project in the backups/ folder.
# Usage: ./scripts/backup.sh [--full]


TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BACKUP_DIR="$ROOT_DIR/backups"
# Default to full backup so the archive can be used to run the project directly
FULL=true

for arg in "$@"; do
  case "$arg" in
    --no-full) FULL=false ;;
    --full) FULL=true ;;
    -h|--help)
      echo "Usage: $0 [--no-full|--full]"
      echo "  (default) copies everything except ./backups and .git"
      echo "  --no-full  exclude node_modules and dist to save space"
      echo "  --full     include all files (same as default)"
      exit 0 ;;
  esac
done

mkdir -p "$BACKUP_DIR"
FNAME="site-backup-$TIMESTAMP.tar.gz"

cd "$ROOT_DIR"
if [ "$FULL" = true ]; then
  tar czf "$BACKUP_DIR/$FNAME" \
    --exclude="./backups" \
    --exclude="./.git" \
    --exclude="./.DS_Store" \
    .
else
  tar czf "$BACKUP_DIR/$FNAME" \
    --exclude="./backups" \
    --exclude="./.git" \
    --exclude="./node_modules" \
    --exclude="./dist" \
    --exclude="./.DS_Store" \
    .
fi

echo "Created backup: $BACKUP_DIR/$FNAME"
