# M0.5 quality and CI contract

Local gates implement the quality/security floor over fictional M0.4 engineering
content. Ubuntu x86_64 [CI run 37720760809](https://github.com/adarj/grocery-pos-website/actions/runs/37720760809)
qualifies the repository toolchain and all 21 Chromium/Firefox/WebKit production
scenarios. The inherited `XDG_DATA_DIRS`/GSettings failure is resolved by the narrow
WebKit browser-child correction. Temporary diagnosis infrastructure is removed;
this final cleanup still requires a successful remote CI run before merge review.
M0.6 has not begun; it audits the foundation separately. M1 owns public content,
the visual shell, and design system.

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

### Successful supported-host qualification: 2026-10-08

[Website CI run 37720760809](https://github.com/adarj/grocery-pos-website/actions/runs/37720760809),
attempt 1, executed signed commit `ea43696930d129d848ad0a67d3ef2e0a98cadeb8`
(`fix(test): isolate WebKit GSettings lookup from Nix environment`). The run and
`Quality and browsers` job both conclude **success** on Ubuntu 24.04 x86_64.
The run metadata, job steps, and logs were independently reviewed.

| Evidence | Result |
| --- | --- |
| Repository Nix shell | PASS: x86_64-linux; outer Nix 2.35.2; Node 24.21.0, pnpm 12.9.0, just 1.51.0 from `/nix/store` |
| Frozen pnpm installation / browser provisioning | PASS: project-owned Playwright 1.64.0; Chromium 1248, Firefox 1555, WebKit 2370 / 27.2 |
| Lint / ReScript formatting | PASS: zero-warning lint and non-mutating format check |
| Pure / supervisor tests | PASS: 15 pure tests and seven process-cleanup regression cases |
| Canonical typecheck / production build | PASS; `/en` remains statically generated HTML |
| Chromium | PASS: 7/7 production scenarios |
| Firefox | PASS: 7/7 production scenarios |
| WebKit | PASS: 7/7 production scenarios, including document navigation |
| Security / accessibility | PASS in all three engines: response headers, CSP/browser diagnostics, zero axe violations, keyboard/focus behavior, SSR without JS, and hydration |
| Browser aggregate | PASS: 21/21, one worker, zero retries |
| Source cleanliness | PASS |
| Temporary diagnostic / failure artifact steps | Correctly skipped on success |

The GitHub Actions Nix environment's inherited `XDG_DATA_DIRS` caused a GSettings
schema-lookup failure in WebKit subprocesses. Omitting this variable from the
Linux CI WebKit child environment restored document navigation and all seven
production browser scenarios. The exact defective search-path entry has not been
exhaustively determined; this is an observed environment interaction, not a claim
that Nix or WebKit is generally incompatible.

Ubuntu x86_64 repository-runtime qualification, supported-host WebKit application
qualification, and the previously unknown CI browser failure are resolved.
Fedora ARM64 WebKit native-runtime compatibility remains unqualified. Axe smoke
is not WCAG 2.2 AA conformance; HTTPS/HSTS deployment qualification remains deferred.
The ESLint 9 EOL obligation and root Proxy method-scope note remain unchanged.

The temporary isolation script and its failure-only workflow step are removed in
this cleanup. The canonical gate, security settings, failure artifacts, and source
cleanliness enforcement remain intact. The cleanup commit must pass remote CI
before final human merge review; the passing run above qualifies its tested commit,
not an unpushed cleanup revision.

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

### Historical upstream investigation and stable upgrade

[Playwright issue 42803](https://github.com/microsoft/playwright/issues/42803)
identifies Playwright 1.63.0 / WebKit 2359's bundled libsoup 3.6.5 heap-use-after-free,
which can produce the same navigation symptom. The local ARM64 fallback libraries
corroborated that version, but no native stack proved that defect caused this CI
failure. The [WebKit libsoup 3.6.6 update](https://github.com/WebKit/WebKit/pull/74619)
is merged; the [maintainer's 1.64 fix statement](https://github.com/microsoft/playwright/issues/42803#issuecomment-5837772701)
justified the subsequent targeted [stable 1.64.0 upgrade](https://github.com/microsoft/playwright/releases/tag/v1.64.0).
It was real upstream context, not a sufficient explanation of the persistent 2370 failure.

The [tagged browser manifest](https://github.com/microsoft/playwright/blob/v1.64.0/packages/playwright-core/browsers.json)
and installed package agree: Chromium 156.0.8078.4 / 1248, Firefox 157.0 / 1555,
WebKit 27.2 / 2370. Downloaded Ubuntu-fallback ARM64 GTK/WPE libraries contain
`libsoup/3.6.6`; Fedora's native-runtime limitation still prevents local WebKit
qualification. Chromium/Firefox local regressions and repeated frozen installs pass.

Only Playwright and its required lockfile references were upgraded; other framework,
axe, ESLint, Nix, and action pins stayed unchanged. Release-note review found no
current test/config incompatibility. All three projects, one worker, zero retries,
and browser diagnostics were retained.

### Stable-upgrade remote result before native isolation: 2026-10-08

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

**Cause at this stage: unconfirmed.** The old libsoup 3.6.5 hypothesis cannot explain this
run without new evidence: the fix is present in the verified local 2370 bundle and
the same symptom persists. An application/CSP defect, native networking/runtime
failure, and environment/library interaction remain hypotheses. Request/API success
uses Node networking and does not qualify WebKit's native network process.

### Native isolation and targeted correction: 2026-10-08

[Website CI run 37719629240](https://github.com/adarj/grocery-pos-website/actions/runs/37719629240)
ran diagnostic commit `631076e0501e4f27db5eeb7a0ac566715a4ac745` on Ubuntu 24.04
x86_64 with Playwright 1.64.0 / WebKit 2370 (27.2). The unchanged canonical gate
again reports 17 passed and four WebKit navigation failures; frozen installation,
core quality, Chromium/Firefox, final source cleanliness, and failure-artifact
upload succeed.

The failure-only diagnostic records successful browser launch, `about:blank`, and
data-document navigation. Plain and inline-script HTTP navigation fail under the
inherited environment; the loopback server receives no request. Browser-native
stderr repeatedly reports `GLib-GIO-ERROR: No GSettings schemas are installed on
the system`. Removing the diagnostic set of native-environment variables restores
HTTP, the production CSP probe, and Next `/en` loading with and without JavaScript.
The separate probe removing **only `XDG_DATA_DIRS`** restores plain HTTP navigation:
status 200, server request received, response finished, and document fully loaded.

This differential strongly identifies a GSettings schema-lookup interaction with
inherited `XDG_DATA_DIRS`, rather than an application/CSP failure or the historical
libsoup 3.6.5 defect. The exact offending search-path entry has not been established.
The single-variable probe qualifies minimal HTTP, not the full production suite.

[Playwright configuration](../../playwright.config.ts) now copies all defined
process-environment values except `XDG_DATA_DIRS` into `use.launchOptions.env` for
**WebKit on Linux CI only**. Playwright's supported browser-launch option changes
only browser-child inheritance; global `process.env`, the Next production server,
Node/test runner, Chromium, and Firefox keep their original environment. Omission
uses the native default lookup demonstrated by the probe, with no invented path,
replacement library, or removal of other diagnostic variables. The full seven
WebKit production scenarios subsequently pass in run 37720760809 above.

### Temporary diagnostics removed after successful qualification

The failure-only isolation script `scripts/diagnostics/webkit-navigation.mjs` and
its feature-branch-only workflow step are removed. Their bounded native/network
probe evidence remains in historical run 37719629240 and its failure artifact.
They were non-authoritative and correctly skipped in successful run 37720760809;
no diagnostic step or special diagnostic upload is added to routine CI.

WebKit remains **required and blocking**. No prerelease, skip, retry-based acceptance,
CSP relaxation, preload, ABI symlink, emulation, or substitute browser is adopted.
Supported-host application qualification does not establish Fedora ARM64 native
runtime compatibility. M0.6 is a separate task and has not begun.

`pnpm audit` is a separate manual dependency-review input, not a network-dependent
correctness gate. Triage changing advisory reports when reviewing dependencies.
Dependency bots, CodeQL, scheduled scanning, and caching remain future operational
choices. All tests use fictional public data and no provider credentials.
