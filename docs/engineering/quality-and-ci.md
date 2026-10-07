# M0.5 quality and CI contract

Local gates implement the quality/security floor over fictional M0.4 engineering
content. Remote Ubuntu results are **pending** until the human pushes and GitHub
Actions runs. Local success is not final M0.5 acceptance. M0.6 audits the foundation;
M1 owns public content, the visual shell, and design system.

## Commands and ownership

Enter the repository Nix shell; explicitly install with `pnpm install --frozen-lockfile`
and provision binaries with `just browsers`. Acceptance commands do neither automatically.

| Command | Contract |
| --- | --- |
| `just lint` / `pnpm lint` | Handwritten JS/TS/TSX: Next flat Core Web Vitals, TypeScript, and JSX accessibility; zero warnings |
| `just format-check` | ReScript 12's non-mutating `format --check` |
| `just quality` | Sequential lint, formatting, pure tests, supervisor tests, canonical typecheck, one production build |
| `just check` | Quality plus all Chromium production scenarios, including response security, axe, keyboard, SSR, and hydration |
| `just ci` | Quality plus the same scenarios in Chromium, Firefox, and WebKit |
| `just test-e2e --project=firefox` | Selected engine against an existing production build |
| `just test-a11y` | Focused Chromium axe/keyboard smoke against an existing production build |

Stop development before canonical validation because the Next generated-type
workflow is sequential. Development diagnostics are not acceptance; see [toolchain](toolchain.md).

## Lint and dependency decisions

Direct additions: `eslint` 9.39.5, matching `eslint-config-next` 16.3.8, and
`@axe-core/playwright` 4.13.0 (resolved axe-core 4.13.0). Existing framework/compiler,
Playwright, and Nix versions remain pinned. No formatter framework, Vitest, or RTL.
The flat config excludes generated `.res.mjs`, `.gen.tsx`, Next declarations,
compiler state, and build/report/cache output. Basic undefined/unused/unreachable
rules also cover handwritten `.mjs`. A missing-alt image probe is rejected by Next
and JSX accessibility rules; generated-file ignore probes passed.

**Compatibility limitation:** current ESLint 10.12.0 is outside the stable
React/import/JSX-accessibility plugins' declared support. ESLint 9.39.5 is compatible
but explicitly EOL, not a supported long-term choice. See [ESLint support](https://eslint.org/version-support/),
[React compatibility](https://github.com/jsx-eslint/eslint-plugin-react/issues/3984),
and [JSX accessibility support](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/1075).
Carry this tooling limitation into M0.6 review and reevaluate when those plugins
support ESLint 10. Do not suppress peer checks, remove accessibility rules, or
incidentally upgrade qualified Next to hide it.

`pnpm-workspace.yaml` supplies pnpm 12's root lifecycle policy; omitting `packages`
keeps one application. `allowBuilds` explicitly denies `unrs-resolver`'s fallback
postinstall. The pinned Linux optional native binding loads without that script;
CI must qualify the x86_64 binding. Unknown install scripts retain default restrictions.
No global configuration, hoisting, or blanket build permission changed.
ReScript formatting was applied once to seven existing files. Checks never rewrite them.

## Workflow

[Website CI](../../.github/workflows/ci.yml) has one `Quality and browsers` job on
Ubuntu 24.04 x86_64. Triggers: PRs targeting main, pushes to main and `feat/**`, and
manual dispatch. Feature pushes allow the initial qualification before the workflow
exists on main; manual dispatch becomes available once GitHub registers it.
There is no `pull_request_target` trigger or required secret. Permissions are
`contents: read`; checkout retains no Git credentials.

Official release metadata was reviewed: checkout v7.0.1, Cachix install-nix
v31.11.1, and upload-artifact v7.0.1 are pinned by full commit SHA in the workflow.
The installer provides only the disposable runner's outer Nix prerequisite.
The repository flake supplies Node/pnpm/just; pnpm owns JS dependencies.
Logs/assertions record x86_64-linux and the pinned executable versions, followed
by frozen installation and `just ci`. No additional Nix input or cache action exists.

Playwright's supported `install --with-deps chromium firefox webkit` provisions
the disposable Ubuntu host, per its [CI guide](https://playwright.dev/docs/ci).
This does not authorize host package installation on Fedora. One worker, zero
retries, bounded test/server waits, a 30-minute job limit, and a 10-minute provisioning
limit keep failures bounded. The production build happens once.

Superseded branch/PR runs may be cancelled; unique main groups preserve every main
qualification. Failure artifacts contain only Playwright reports/results, including
traces and screenshots, retained seven days. No dependency/browser/store upload.
A final step checks tracked diffs, staging, and nonignored untracked files even
after a gate fails. Ignored generated output is expected; Next's AGENTS marker stays tracked.

## Evidence and next human step

Fedora ARM64: Chromium and Firefox pass all seven production scenarios, including
axe with no violations/exclusions, keyboard behavior, and CSP diagnostics. Static
`/en` is preserved. Dev `/en` and `/en-XA` hydrate; connected Next DevTools reports
no config/session errors. See [security](security-baseline.md) and
[accessibility](accessibility-and-performance.md) for intentional limits.

Ubuntu x86_64: runtime, frozen install, full browser matrix, security, and axe
qualification remain pending. After review, the human should push the feature
branch, inspect `Website CI / Quality and browsers`, and investigate failures/artifacts
before final acceptance or merge. Successful Ubuntu WebKit results would qualify
application compatibility, not Fedora ARM64 native runtime support.

`pnpm audit` is a separate manual dependency-review input, not a network-dependent
correctness gate. Triage changing advisory reports when reviewing dependencies.
Dependency bots, CodeQL, scheduled scanning, and caching remain future operational
choices. All tests use fictional public data and no provider credentials.
