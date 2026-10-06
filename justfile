set shell := ["bash", "-euo", "pipefail", "-c"]

# Compile once, then manage the ReScript watcher and Next dev server together.
dev:
    exec node scripts/dev.mjs

rescript:
    pnpm run rescript

test-unit:
    pnpm run test:unit

typecheck:
    pnpm run typecheck

# Isolated Linux process-group regression fixtures; no application server or packages.
test-supervisor:
    node tests/tooling/dev-supervisor.test.mjs

# ReScript generation always precedes Next's production build/type checking.
build:
    pnpm run build

# Requires a successful just build.
start:
    exec pnpm run start

# Explicit provisioning; no automatic installs during validation.
browsers:
    pnpm exec playwright install chromium firefox webkit

# Requires just build and browser provisioning. Starts its own production server.
test-e2e *args:
    pnpm run test:e2e {{args}}

# Pure rules plus the routine integration gate; full engine matrix is just test-e2e.
check: test-unit typecheck build
    pnpm run test:e2e --project=chromium

# Only known generated artifacts, never source or dependency lockfiles.
clean:
    pnpm exec rescript clean
    node --input-type=module -e 'import { globSync, rmSync } from "node:fs"; for (const path of ["lib", ".next", "next-env.d.ts", "tsconfig.tsbuildinfo", "test-results", "playwright-report", "blob-report", ...globSync("src/**/*.gen.tsx")]) rmSync(path, { recursive: true, force: true });'
