set shell := ["bash", "-euo", "pipefail", "-c"]

# Compile once, then manage the ReScript watcher and Next dev server together.
dev:
    exec node scripts/dev.mjs

rescript:
    pnpm run rescript

lint:
    pnpm run lint

format-check:
    pnpm run format:check

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

# Focused production Chromium scan/keyboard smoke; requires a build.
test-a11y:
    pnpm run test:a11y

# Sequential core gates, shared by local and CI aggregates; exactly one build.
quality: lint format-check test-unit test-supervisor typecheck build

# Fedora ARM64's local WebKit limitation does not relax the CI matrix.
check: quality
    pnpm run test:e2e --project=chromium

# Supported Ubuntu browser runtime/provisioning is an explicit CI prerequisite.
ci: quality
    pnpm run test:e2e

# Only known generated artifacts, never source or dependency lockfiles.
clean:
    pnpm exec rescript clean
    node --input-type=module -e 'import { globSync, rmSync } from "node:fs"; for (const path of ["lib", ".next", "next-env.d.ts", "tsconfig.tsbuildinfo", "test-results", "playwright-report", "blob-report", ...globSync("src/**/*.gen.tsx")]) rmSync(path, { recursive: true, force: true });'
