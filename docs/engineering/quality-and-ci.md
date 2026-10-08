# M0.5 quality and CI contract

Local gates implement the quality/security floor over fictional M0.4 engineering
content. The first Ubuntu x86_64 CI run qualifies the repository toolchain and
Chromium/Firefox. The subsequent stable Playwright 1.64.0 run still fails WebKit
document navigation after the bundled libsoup update. Cause remains unconfirmed;
temporary supported-host isolation is prepared and awaits remote CI. **M0.5 remains conditional**
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
`@axe-core/playwright` 4.13.0 (resolved axe-core 4.13.0). Existing framework/compiler
and Nix versions remain pinned. The subsequent targeted Playwright 1.64.0 upgrade
is recorded below. No formatter framework, Vitest, or RTL.
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
Unknown install scripts retain default restrictions. During the explicitly approved
stable upgrade, pnpm recorded `minimumReleaseAgeExclude` entries for exactly
`@playwright/test@1.64.0`, `playwright@1.64.0`, and `playwright-core@1.64.0`.
These permit the newly published versions without changing `allowBuilds` or other
packages' release-age policy. Both repeated frozen installs leave all three package
metadata files unchanged. No global configuration, hoisting, or blanket build
permission changed.
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

### WebKit diagnosis and stable requalification

[Playwright issue 42803](https://github.com/microsoft/playwright/issues/42803)
is closed with the `v1.64` classification. It identifies Playwright 1.63.0 /
`webkit-2359` as bundling libsoup 3.6.5.
The library has a confirmed heap-use-after-free that can crash `WPENetworkProcess`
and surface the same navigation error.
The local Ubuntu-fallback ARM64 `webkit-2359` cache independently contains
`libsoup/3.6.5` in both GTK and WPE libraries. This is version corroboration,
not an inspection of the CI runner's loaded library; Fedora's separate native-runtime
limitation still prevents a useful local WebKit reproduction.

The [WebKit libsoup 3.6.6 update](https://github.com/WebKit/WebKit/pull/74619)
is merged, and the [Playwright maintainer](https://github.com/microsoft/playwright/issues/42803#issuecomment-5837772701)
states that the fixed build will be included in 1.64.
Stable 1.64 was unavailable during the initial diagnosis. The official
[Playwright 1.64.0 release](https://github.com/microsoft/playwright/releases/tag/v1.64.0)
was subsequently published on 2026-10-07; its release metadata marks it as neither
prerelease nor draft.

**Historical 1.63.0 diagnosis: likely upstream blocker.** Affected versions and the failure pattern
strongly match, with no observed application HTTP, routing, CSP, hydration, or axe
failure preceding navigation. The upstream reproduction used a different host/load,
and this CI artifact has no native crash stack or fixed-library A/B result proving
the exact libsoup failure. Do not describe application incompatibility or exact
crash causation as established.

The human-authorized targeted upgrade to `@playwright/test` 1.64.0 is now implemented.
Only its `playwright` / `playwright-core` dependencies and affected peer references
change in the lockfile; framework, axe, ESLint, Nix, and workflow pins are unchanged.
Two `pnpm install --frozen-lockfile` runs succeed without changing package metadata.

The [tagged browser manifest](https://github.com/microsoft/playwright/blob/v1.64.0/packages/playwright-core/browsers.json)
and installed manifest agree: Chromium 156.0.8078.4 / revision 1248, Firefox 157.0 /
revision 1555, and WebKit 27.2 / revision 2370. Provisioning uses the project-owned
Playwright package and the normal user cache. Read-only inspection of the downloaded
Ubuntu 24.04 ARM64 `webkit-2370` GTK and WPE `libsoup-3.0.so.0` libraries finds
`libsoup/3.6.6`, replacing the affected 3.6.5 bundle. This verifies the local bundle's
version; it is not a fixed-build CI result or an inspection of the x86_64 library.

On the upgraded local stack, `just clean` then `just check` passes, followed by all
seven Firefox production scenarios. Each engine reports zero axe violations and
incomplete checks; SSR, hydration, security headers, and CSP diagnostics pass, and
`/en` remains statically generated. Local WebKit is not run: provisioning still
reports Fedora ARM64 native dependencies missing. No host libraries are modified.

Release-note review requires no test/config changes: device descriptors now forward
`screen`, which these tests do not inspect; there is no test JSX, snapshot-update
mode, or hidden-iframe assertion. The new optional default-project selection is not
adopted. All three projects, one worker, zero retries, and browser diagnostics remain.

### Current remote result: 2026-10-08

[Website CI run 37716799825](https://github.com/adarj/grocery-pos-website/actions/runs/37716799825)
ran commit `ea08a586e5ee1154bb881bf5d926d7a133789e25` on Ubuntu 24.04 x86_64.
Logs confirm Playwright 1.64.0 provisioning WebKit 27.2 / revision 2370, successful
Nix/frozen installation/core quality, Chromium 7/7, Firefox 7/7, and WebKit request
scenarios 3/3. All four WebKit document-navigation scenarios still fail with
`WebKit encountered an internal error`: 17 passed, four failed, zero skips/retries.
The final cleanliness step and upload of `browser-failure-37716799825-1`
(artifact ID 11523709042) succeed.

Human-reviewed traces again show document status `-1`, no captured response headers,
and `about:blank`; these do not establish whether the server received the request.
The diagnostic preparation pass independently inspected job logs and artifact metadata;
the artifact download returned HTTP 403, so its trace contents were not independently
re-read in this pass. Job logs contain no `pw:browser` native stderr or crash stack.

**Current cause: unconfirmed.** The old libsoup 3.6.5 hypothesis cannot explain this
run without new evidence: the fix is present in the verified local 2370 bundle and
the same symptom persists. An application/CSP defect, native networking/runtime
failure, and environment/library interaction remain hypotheses. Request/API success
uses Node networking and does not qualify WebKit's native network process.

### Temporary WebKit 2370 isolation: remote results pending

[scripts/diagnostics/webkit-navigation.mjs](../../scripts/diagnostics/webkit-navigation.mjs)
is temporary M0.5 tooling, not a website test layer or acceptance substitute.
One isolated workflow step runs only after the unchanged canonical qualification
fails on a push to `feat/m0-5-quality-security-ci`. It never runs on main or PRs.
Its non-blocking diagnostic status does not change the already-blocking `just ci`
result. Remove the step and script after diagnosis.

The installed project Playwright runs bounded probes of `about:blank`, a data HTML
URL, plain loopback HTTP without JS/security headers, and loopback HTTP with inline
JS. Each minimal HTTP result records server receipt, response `finish`, byte count,
and browser events; `finish` means delivery to the server stream, not proven browser
receipt. No external origin or host package is involved.

Only if plain HTTP loads, the probe starts the existing production build via Next's
ordinary CLI on an ephemeral loopback port. It compares identity/gzip HTTP response
status, selected headers, length/transfer/compression, body hash and completion;
tests a tiny document with the actual production CSP; and navigates the unchanged
`/en` with JS enabled and disabled. If full production loading fails, commit/DCL
observations and captured-HTML variants with bare versus production security headers
provide isolation evidence. Asset requests in these replay variants use the same
owned production server. None is an acceptance result or production config change.

The same binary is launched with inherited browser environment and with only named
native-loader/GLib/GIO/GTK variables removed through Playwright's child `env` option.
Node, PATH, HOME, toolchain and browser selection are unchanged. Only presence and
Nix-path classification are reported, not environment values. If sanitization changes
a failed navigation result, single-variable removal probes seek the smallest cause;
an unresolved interaction requires another experiment, not a broad committed reset.

`DEBUG=pw:browser` captures launch/native stderr and exit signals. Each variant retains
about 64 KiB (head/tail) under ignored `test-results/webkit-isolation/`; logs print
only a bounded tail plus structured probe events. Existing failure artifacts include
these files. Navigation, launch, worker (90 seconds), overall (330 seconds), and CI
step (eight minutes) deadlines bound execution. Cleanup closes browser contexts,
Playwright-owned process groups, the production child, and loopback connections.
Local Chromium checks validate the probe's control flow/cleanup only. Supported-host
WebKit results, native crash attribution, and any corrective change are still pending.

WebKit remains **required and blocking**. No prerelease, skip, retry-based acceptance,
CSP relaxation, preload, ABI symlink, emulation, or substitute browser is adopted.
Do not merge or begin M0.6 before successful supported-host WebKit qualification.
That future result will qualify application compatibility, not Fedora ARM64 native runtime support.

`pnpm audit` is a separate manual dependency-review input, not a network-dependent
correctness gate. Triage changing advisory reports when reviewing dependencies.
Dependency bots, CodeQL, scheduled scanning, and caching remain future operational
choices. All tests use fictional public data and no provider credentials.
