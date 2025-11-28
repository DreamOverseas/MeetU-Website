#!/usr/bin/env bash
# Author: Jerry / MeetU
# Safe deploy for MeetU-Website (Vite + Nginx)

set -Eeuo pipefail
IFS=$'\n\t'

# ===== 1) 基本路径 =====
REPO_DIR="${REPO_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)}"

cd "$REPO_DIR"
echo "[DEPLOY] Working dir: $REPO_DIR"

# ===== 2) 拉取最新代码 =====
echo "[DEPLOY] Fetch latest code from origin/main..."
git fetch --all --prune
git reset --hard origin/main

# ===== 3) 安装依赖 =====
# 使用 npm ci 会根据 package-lock.json 干净安装
echo "[DEPLOY] Installing dependencies..."
if command -v npm >/dev/null 2>&1; then
  npm ci
else
  echo "[ERROR] npm not found in PATH"
  exit 1
fi

# ===== 4) 构建前端（Vite）=====
echo "[DEPLOY] Building project (npm run build)..."
npm run build

# Vite 默认输出 dist，我们统一迁移到 build，配合 Nginx 配置
echo "[DEPLOY] Sync build directory..."
rm -rf build
mv dist build

echo "[DEPLOY] Done. ✅"
