# M0.5 quality and CI contract

Local gates implement the quality/security floor over fictional M0.4 engineering
content. The first Ubuntu x86_64 CI run qualifies the repository toolchain and
Chromium/Firefox, but WebKit document navigation fails. **M0.5 remains conditional**
until the required supported-host WebKit scenarios pass; do not merge yet.
M0.6 audits the foundation; M1 owns public content, the visual shell, and design system.

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
the first CI run's frozen install and lint gate qualify the x86_64 path as well.
Unknown install scripts retain default restrictions.
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

### First remote qualification: 2026-10-07

[Website CI run 37550037169](https://github.com/adarj/grocery-pos-website/actions/runs/37550037169),
attempt 1, executed commit `963a82f3b48d6e1c4d15668cd66544f3eee27e8f`
(`ci(web): establish quality and security foundation`) on Ubuntu 24.04 x86_64.
The `Quality and browsers` job failed only in four WebKit document-navigation scenarios.

| Evidence | Result |
| --- | --- |
| Repository Nix shell | PASS: x86_64-linux; outer Nix 2.35.2; Node 24.21.0, pnpm 12.9.0, just 1.51.0 from `/nix/store` |
| Frozen installation / browser provisioning | PASS |
| Core quality | PASS: lint, non-mutating formatting, 15 pure tests, seven supervisor cases, canonical typecheck, production build |
| Static rendering | PASS: `/en` remains prerendered static HTML |
| Chromium | PASS: all seven scenarios, including axe, keyboard, SSR, hydration, routing, and security responses |
| Firefox | PASS: all seven scenarios; both engines' axe reports have zero violations and incomplete checks |
| WebKit | Three request/API scenarios pass; four `page.goto("/en")` scenarios fail before a recorded HTTP response |
| Checkout cleanliness / failure artifacts | PASS; artifact `browser-failure-37550037169-1`, ID 11452387359 |

The artifact reports **17 passed, four failed, zero skipped, zero flaky**. Its ZIP
SHA-256 is `d8f4f618f6fa35c53e7678170e5b741b139b1cf9a0458d3abbd342ef2a66a7ea`.
All four traces record document status `-1` (a failure sentinel, not an HTTP status),
no response headers, and `WebKit encountered an internal error`; screenshots are blank.
No CSP violation precedes the failure. JavaScript-enabled and disabled navigation
both fail, before hydration, axe, or keyboard assertions execute.
Request/API tests use Playwright's Node HTTP path, not WebKit's document network process.

### WebKit diagnosis and stable upgrade trigger

[Playwright issue 42803](https://github.com/microsoft/playwright/issues/42803)
identifies Playwright 1.63.0 / `webkit-2359` as bundling libsoup 3.6.5.
The library has a confirmed heap-use-after-free that can crash `WPENetworkProcess`
and surface the same navigation error.
The local Ubuntu-fallback ARM64 `webkit-2359` cache independently contains
`libsoup/3.6.5` in both GTK and WPE libraries. This is version corroboration,
not an inspection of the CI runner's loaded library; Fedora's separate native-runtime
limitation still prevents a useful local WebKit reproduction.

The [WebKit libsoup 3.6.6 update](https://github.com/WebKit/WebKit/pull/74619)
is merged, and the [Playwright maintainer](https://github.com/microsoft/playwright/issues/42803#issuecomment-5837772701)
states that the fixed build will be included in 1.64.
As checked on 2026-10-07, the [npm stable package](https://registry.npmjs.org/@playwright/test/latest)
and [latest stable GitHub release](https://github.com/microsoft/playwright/releases/tag/v1.63.0)
are still 1.63.0; stable 1.64 is unavailable.

**Diagnosis: likely upstream blocker.** Affected versions and the failure pattern
strongly match, with no observed application HTTP, routing, CSP, hydration, or axe
failure preceding navigation. The upstream reproduction used a different host/load,
and this CI artifact has no native crash stack or fixed-library A/B result proving
the exact libsoup failure. Do not describe application incompatibility or exact
crash causation as established.

Wait for stable Playwright 1.64, verify that its Linux WebKit bundle includes the
promised libsoup fix, then request human approval for a targeted stable upgrade.
Reprovision through Playwright and rerun the unchanged full `just ci` gate on Ubuntu.
If navigation still fails, collect native network-process diagnostics or an isolated
HTTP navigation probe; do not assume the upgrade guarantees success.

WebKit remains **required and blocking**. No prerelease, skip, retry-based acceptance,
CSP relaxation, preload, ABI symlink, emulation, or substitute browser is adopted.
Do not merge or begin M0.6 before successful supported-host WebKit qualification.
That future result will qualify application compatibility, not Fedora ARM64 native runtime support.

`pnpm audit` is a separate manual dependency-review input, not a network-dependent
correctness gate. Triage changing advisory reports when reviewing dependencies.
Dependency bots, CodeQL, scheduled scanning, and caching remain future operational
choices. All tests use fictional public data and no provider credentials.
