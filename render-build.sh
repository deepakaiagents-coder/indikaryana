#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

corepack enable
corepack prepare pnpm@10.33.3 --activate

pnpm install --frozen-lockfile
pnpm exec prisma generate
pnpm --filter @indikaryana/constants run build
pnpm --filter api run build
