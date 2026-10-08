# Milestone 0 qualification

## Purpose and scope

Milestone 0 establishes the executable engineering foundation for subsequent
Grocery POS Website development. It does not establish production deployment
readiness, commercial feature availability, or WCAG conformance. The current
page uses fictional qualification data.

M0.1–M0.5 are complete, signed, and merged. Accepted
[ADRs 0001–0006](../adr/README.md) continue to govern the foundation. This record
owns foundation-closeout status and the bounded M0.6 maintenance decision;
[quality and CI](quality-and-ci.md) retains detailed CI and WebKit diagnostic history.

## M0.1–M0.5 evidence matrix

| Milestone | Completed responsibility and governing records | Actual implemented proof | Qualification evidence |
| --- | --- | --- | --- |
| M0.1 | Separate website, framework/application ownership, server-first rendering, API authority, i18n and CSS policy; [accepted ADRs](../adr/README.md) | Repository constitution and inward source boundaries; no operational POS implementation or speculative provider layer | Signed constitution commit `d2fb66b2b9b0`; independent M0.6.1 source/ADR comparison found no substantive contradiction |
| M0.2 | Reproducible tooling and framework integration; [toolchain](toolchain.md), ADRs 0002–0003 | One pinned Nixpkgs input, Node/pnpm/just, pnpm lock, ReScript ESM/GenType, strict TS, sequential Next validation and managed dev processes | Local ARM64 qualification; main CI proves x86 toolchain, frozen install, typecheck/build and seven supervisor regression cases |
| M0.3 | Domain/application/UI ownership and separate disclosure approval; [source layout](../architecture/source-layout.md), [claims policy](../product/public-capability-claims.md) | Opaque capability construction defaults to withholding; application projection precedes UI; fictional samples live in qualification | Six pure publication/decoder tests; SSR and withheld-data assertions in main CI; independent HTML/RSC/client inspection |
| M0.4 | Typed language-bearing routes and messages; [i18n foundation](../architecture/internationalization.md), ADR 0005 | Registry-derived `/en`, root-only redirect, strict route validation, development-only pseudo, exhaustive messages and localized metadata | Nine additional pure tests; production routing/metadata/SSR/hydration in main CI; controlled dev-pseudo evidence in the i18n record |
| M0.5 | Enforceable quality/security/accessibility/CI floor; [quality and CI](quality-and-ci.md), [security](security-baseline.md), [accessibility](accessibility-and-performance.md) | Lint/format, unit/supervisor gates, static CSP/headers, axe/keyboard smoke, Nix-owned CI and blocking three-browser matrix | Merged main run 37721922700 passes every required step and all 21 production scenarios; final source cleanliness passes |

The 15 pure tests and seven supervisor cases are distinct from the 21 browser
scenarios. This matrix links empirical records without restating each ADR.

## M0.6.1 independent assessment

**CONDITIONAL PASS — no BLOCKER or MAJOR findings.** The independent read-only
audit assessed baseline `a85611d2c863386f9600c29abf48d84dbc609f12`, reviewed main
CI metadata/logs, inspected source and generated artifacts, and used non-mutating
in-memory probes. It did not rebuild or install dependencies.

- **F06-01, MINOR:** stale milestone/qualification guidance. The M0.6.2 correction
  set replaces obsolete cleanup/merge/runtime claims with actual main evidence.
- **F06-02, MINOR:** ESLint 9 EOL lacked a formal disposition. The proposal below
  requires explicit maintainer approval; drafting it does not resolve that approval.
- **F06-03, NOTE:** Next-generated page validators do not reject every semantic
  prop mismatch. Current authored routes are correct. This is an accepted framework
  limitation, not a present M1 blocker. Use explicit supported `PageProps` and
  `LayoutProps`, review signatures against installed version-matched Next docs,
  and keep new-route tests proportionate. See the [toolchain guidance](toolchain.md).

The audit established architectural readiness subject to bounded corrections and
formal closeout; completing an audit is not Milestone 0 acceptance.

## M0.5 main qualification

[Website CI run 37721922700](https://github.com/adarj/grocery-pos-website/actions/runs/37721922700),
attempt 1, was triggered by a push to **main** and tested signed commit
`a85611d2c863386f9600c29abf48d84dbc609f12`
(`chore(web): finalize M0.5 browser qualification`). Run and job
**Quality and browsers**, ID `113131290782`, conclude **success**.
Metadata, step conclusions and logs were independently verified.

| Evidence | Result |
| --- | --- |
| Ubuntu 24.04 x86_64 repository Nix environment | PASS; Node 24.21.0, pnpm 12.9.0, just 1.51.0 from `/nix/store` |
| Frozen installation and project-owned browser provisioning | PASS; Playwright 1.64.0 |
| Lint, non-mutating formatting, pure tests, supervisor regression | PASS; 15 pure tests and seven supervisor cases |
| Canonical typecheck and production build | PASS; `/en` remains statically generated |
| Chromium / Firefox / WebKit | 7/7 each; **21/21, one worker, zero retries** |
| Production security/accessibility/framework tests | PASS: headers/CSP diagnostics, zero axe violations, keyboard/focus, JS-disabled SSR, hydration and language routing |
| Source cleanliness | PASS |
| Temporary diagnostics / failure artifacts | Diagnostics removed from the tested commit/workflow; failure upload correctly skipped |

This result qualifies the merged cleanup, not merely a prior feature revision.
Earlier failures and isolation evidence remain in [quality and CI](quality-and-ci.md).
The inherited `XDG_DATA_DIRS` caused WebKit subprocess GSettings lookup failure;
omitting it only from Linux-CI WebKit browser children restored the full suite.
The exact defective search-path entry was not exhaustively determined.

## M0.6.3 qualification evidence

**Technical qualification passes; human ESLint approval and final acceptance remain pending.**
The qualification began with a clean worktree/staging area at signed feature HEAD
`de6ccda2cd99c8c068801962e95851509832738b`, one commit ahead of main baseline
`a85611d2c863386f9600c29abf48d84dbc609f12`.

[Feature CI run 37725244132](https://github.com/adarj/grocery-pos-website/actions/runs/37725244132)
tests that exact feature SHA. Run/job `Quality and browsers` (ID `113141811106`)
conclude success; metadata, step conclusions, logs and GitHub signature verification
were independently inspected. This is feature qualification, not post-integration
main evidence. Failure-artifact upload was correctly skipped.

| Category | Fresh local result | Exact feature CI result | Acceptance |
| --- | --- | --- | --- |
| Nix/toolchain | Fedora Linux aarch64; Nix 2.34.7; Node 24.21.0, pnpm 12.9.0, just 1.51.0 resolve through the website Nix environment | Ubuntu 24.04 x86_64; Nix 2.35.2; repository flake supplies the same project versions | PASS |
| Clean regeneration / frozen installation | `just clean`, then `pnpm install --frozen-lockfile` pass; dependency metadata unchanged | Frozen installation and pinned browser provisioning pass | PASS |
| Lint / formatting | `just check`: zero-warning ESLint and non-mutating ReScript formatting pass | PASS | PASS |
| Pure / supervisor tests | 15/15 pure tests; seven supervisor cases pass with all owned processes gone | Same counts pass | PASS |
| Typecheck / build | Canonical typegen/strict TypeScript and production build pass; `/en` statically generated | PASS; static `/en` preserved | PASS |
| Chromium | 7/7 production scenarios pass | 7/7 | PASS |
| Firefox | `just test-e2e --project=firefox`: 7/7 pass using the same build | 7/7 | PASS |
| WebKit | Not run on the unqualified Fedora ARM64 native runtime | 7/7; blocking Linux-CI child-environment correction retained | Supported-host PASS |
| Security / accessibility | Response/CSP diagnostics, zero axe violations, native keyboard/focus, JS-disabled SSR and hydration pass in both local engines | All three engines pass | PASS; no WCAG/HTTPS claim |
| Documentation / source cleanliness | Local paths/heading links pass; all 71 tracked hashes unchanged after execution; generated output ignored; no test server remains | Source-cleanliness step passes | PASS; this closeout record is a subsequent documentation change |
| ESLint exception | No explicit maintainer authorization supplied; proposal remains pending | CI success does not grant approval | PENDING |

Fresh production inspection confirms `/en` is the sole public prerendered route
(apart from Next's built-in error routes), `lang="en"`/`dir="ltr"`, no pseudo page,
and only Counter from application source in the client-reference manifest. The
26 inspected public HTML/RSC/segment/client files contain neither withheld fixture
identifier. Counter's generated runtime imports only React/JSX; server policy and
catalog logic remain outside its client graph. No remote script source or
high-confidence tracked credential pattern was found.

F06-01 corrections are incorporated in the tested M0.6.2 commit. F06-02 still
requires maintainer sign-off on the exact proposal below; F06-03 remains the
accepted framework note. No new BLOCKER or MAJOR was found. The only runtime
warnings were Node's `NO_COLOR`/`FORCE_COLOR` notices. No source, test, dependency,
CI or security configuration was changed for qualification.

## Accepted limitations and future triggers

- Fedora ARM64 WebKit native-runtime compatibility remains unqualified; supported
  Ubuntu x86_64 application qualification does not establish that host support.
- Automated axe/keyboard checks are not WCAG 2.2 AA conformance. Manual keyboard,
  screen-reader, zoom/reflow, contrast and related review accompanies real M1 UI;
  the broader checklist remains unperformed on the qualification page.
- Current CSP script/style inline allowances preserve qualified static Next
  behavior. Reconsider before authentication, billing/commerce, rich content,
  sensitive support uploads or significant third-party JavaScript.
- HTTPS/HSTS, canonical production origin and final discovery URLs require actual
  deployment qualification. No deployment approval is implied by local HTTP tests.
- Root Proxy's 307 preserves non-GET methods. Review GET/HEAD scope before a root
  write endpoint exists; no such endpoint is currently implemented.
- The ESLint exception below remains proposed, subject to human approval and review.
- Real commercial features require separate authoritative validation, disclosure
  evidence, authorization/organization scope, cache isolation and security qualification.
  Fictional approval constructors are not production authorization.

Other untriggered choices remain in the [deferred register](deferred-decisions.md).

### Proposed ESLint 9 maintenance exception

**Status: proposed / pending maintainer sign-off.** No human acceptance or renewal
is recorded by this document.

| Field | Proposal |
| --- | --- |
| Exception | Temporarily continue exactly pinned ESLint **9.39.5**, acknowledging EOL |
| Owner | Human repository maintainer |
| Rationale | M0.6.1 found incomplete stable ESLint 10 compatibility in required React, JSX accessibility and import tooling; forced migration may weaken active rule behavior |
| Scope | Development/CI lint tooling only; ESLint is not shipped application runtime |
| Controls | Retain `--max-warnings=0`, existing Next/TypeScript/JSX accessibility rules, frozen installation and the normal CI gate |
| Review trigger | First M1 implementation checkpoint and any targeted lint-stack dependency update |
| Maximum review date | **January 8, 2027**, unless the human maintainer explicitly revises it |
| Upgrade criteria | Relevant stable plugins support ESLint 10; no unsupported peer overrides; active rules work correctly; accessibility/framework coverage retained; local and remote quality gates pass |
| Expiration behavior | At review, if a supported upgrade remains unavailable, require explicit documented renewal or an alternative supported lint-stack decision |

M0.6.1 inspected stable ESLint 10.12.0. Next config's broad peer range permits it,
but React 7.37.5, JSX accessibility 6.10.2 and import 2.32.0 exclude it. React's
component detector also uses `SourceCode.getJSDocComment`, removed in ESLint 10;
catching the resulting failure can change annotation-based detection.
See [ESLint support](https://eslint.org/version-support/),
[ESLint 10 API changes](https://eslint.org/docs/latest/use/migrate-to-10.0.0),
and the [qualified lint-stack record](quality-and-ci.md).
Do not force peer overrides, drop useful checks or upgrade unrelated framework
dependencies to conceal this risk. Maintainer sign-off must be recorded explicitly
before this exception can satisfy F06-02.

## M0.6 final acceptance criteria

Final acceptance requires all of the following:

1. F06-01 corrections are reviewed and accurate.
2. The maintainer explicitly accepts the F06-02 exception or otherwise resolves it.
3. M0.6.3 local qualification passes: stop dev; enter the repository Nix shell;
   `just clean`; `pnpm install --frozen-lockfile`; provision pinned browsers explicitly
   if needed; run `just check` and the relevant Firefox regression. Inspect static
   routes, typed seams, client references, withheld-data absence, ignored generation,
   links, `git diff --check`, and source/staging status.
4. Full `just ci` passes on supported Ubuntu with all three blocking browser projects.
   Feature-branch remote CI qualifies the human-reviewed, signed and pushed correction
   commit; no local Fedora WebKit success is required.
5. Human review and signed commit occur; the human integrates the accepted branch
   into main, then actual main-branch CI passes at the integrated SHA.
6. The human records the formal Milestone 0 acceptance and M1 authorization decision.

M0.6.2 did not execute the qualification sequence; the M0.6.3 results are recorded
above. After human review/signing of this closeout record, its feature CI and
post-integration main CI remain required. Do not invent a final acceptance date,
future commit SHA or CI run ID, or infer exception approval from passing checks.

## Current status

| Checkpoint | Status |
| --- | --- |
| M0.1–M0.5 | Complete, signed, merged and qualified on main |
| M0.6.1 | Independent assessment complete: CONDITIONAL PASS |
| M0.6.2 | Corrections committed as `de6ccda2cd99c8c068801962e95851509832738b` and feature-CI qualified; ESLint exception proposal pending sign-off |
| M0.6.3 | Fresh local qualification and exact feature CI pass; closeout-record review/CI, ESLint approval, main integration/CI and formal human acceptance remain |
| M1 | Not authorized; GO recommendation only after the remaining human/CI conditions |

**Milestone 0 final acceptance pending maintainer ESLint approval, closeout-record
review/qualification, main integration/CI and formal human sign-off.**
