# M1.2 engineering-preview shell qualification

## Scope and status

**M1.2 — ACCEPTED by the human maintainer on October 8, 2026 (UTC).** The
maintainer confirmed completion of the visual review and formal acceptance of the
internal engineering-preview shell. A12-01/A12-02 are resolved; final merged-main
qualification passes at the correction commit recorded below. The independent
audit's original **CONDITIONAL PASS — BOUNDED CORRECTIONS** remains historical
evidence, not a retroactively changed audit result.

**M1.3 — Design Tokens & Reusable Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC).** M1.3.1 tokens are accepted, merged and qualified on main
(30/30). The [M1.3.2 no-extraction decision](m1-3-2-primitives-qualification.md)
was human-accepted October 8, 2026 (UTC), merged and main-qualified (30/30).
The [M1.3.3 qualification](m1-3-3-design-system-qualification.md) is merged and
main-qualified (30/30), with adversarial audit PASS. The
[acceptance record](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc) preserves
the final M1.3.4 historical CONDITIONAL PASS and subsequent human gate resolution.
Signed main closeout `ad69f632129231bb2604a3a71678ac959900046c` passes run
37827607606 (30/30 and source cleanliness); D13-01–D13-03 remain
DEFERRED, UNVERIFIED — M1.5. Scope remains governed by
the [M1 plan](milestone-1-plan.md) and
[design-system specification](../design/design-system-specification.md).
The [M1.3.1 token record](m1-3-1-token-qualification.md) owns subsequent token
work; this document preserves M1.2 evidence. M1.3 is formally accepted.
M1.4/M1.4.1 documentation planning is authorized October 8, 2026 (UTC); see the
[content-readiness register](../product/m1-4-1-content-readiness.md).
M1.4.2 and future commercial publication are not authorized.

| Checkpoint evidence / decision | Status |
| --- | --- |
| Local implementation qualification | PASSED |
| Feature-branch remote implementation qualification | PASSED: run 37752595132, attempt 2, exact signed commit below |
| Independent adversarial implementation audit | Historical CONDITIONAL PASS: no BLOCKER/MAJOR; A12-01/A12-02 subsequently resolved; A12-03 remains NOTE |
| A12-01/A12-02 dispositions | RESOLVED |
| Human visual review | COMPLETED: confirmed October 8, 2026 (UTC); no additional manual accessibility coverage is asserted |
| Human M1.2 ESLint exception disposition | APPROVED October 8, 2026 (UTC), under the unchanged bounded exception |
| Final correction qualification | PASSED on merged main: run 37780086710 at the exact correction commit below |
| Main integration and CI | COMPLETE; 27/27 and source cleanliness pass |
| M1.2 formal acceptance | ACCEPTED October 8, 2026 (UTC) |
| M1.3 acceptance | FORMALLY ACCEPTED October 8, 2026 (UTC); main closeout `ad69f632129231bb2604a3a71678ac959900046c`, run 37827607606: 30/30 and source cleanliness; [record](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc) preserves audit history and DEFERRED, UNVERIFIED — M1.5 obligations |
| M1.4 / commercial publication | M1.4/M1.4.1 documentation planning authorized October 8, 2026 (UTC), under review; M1.4.2 and substantive publication NOT AUTHORIZED |

An internal-preview label is neither access control nor deployment authorization.
No marketing content, new routes, publication grants or product availability claims
are introduced. See the [approved scope and audit notes](milestone-1-plan.md#approved-m12-boundary-and-acceptance-checklist).

## Baseline and composition

Feature branch: `feat/m1-2-public-shell`; starting HEAD/main/origin-main:
`cea8dea94bafe182af40ef30fe390cc9b667ac07`, with clean staging/worktree.
Independently inspected [main run 37749346349](https://github.com/adarj/grocery-pos-website/actions/runs/37749346349)
tests that exact M1.1 integration commit: Ubuntu 24.04 x86_64, repository Nix,
frozen installation, 21/21 Chromium/Firefox/WebKit scenarios, one worker, zero
retries and source cleanliness pass. This historical M1.1 result is the implementation
starting point; M1.2 feature qualification is recorded separately below.

Next retains route validation, HTML language/direction, metadata and static
params. Its root layout composes the ReScript `EngineeringShell` through GenType.
The shell resolves five typed messages for identity, home accessible name, skip
link, preview status and footer; pseudo output derives from the same catalog.
`ArchitectureProof` retains the sole main landmark, now with `id="main-content"`
and `tabIndex=-1` for native fragment focus. Existing proof and capability projection
are preserved. Counter receives resolved labels and remains the only application
client island; no language provider or catalog enters its runtime import graph.

**A11-01:** identity/home is the sole eligible route link (`/en`, or the validated
qualification route during development). Empty navigation groups and mobile
controls are omitted. The identity link now has `aria-current="page"` and an
emphasized underline independent of color (A12-02), preserving its name, destination
and focus treatment. This assumes the current single-page language surfaces: `/en`
and controlled development `/en-XA`. **Before the first additional public child
route, make current-state rendering route-aware** through appropriate server/page
composition; the shared language layout must not announce home as current on a child
page. No speculative route-context or client-pathname infrastructure is introduced.
**A11-02:** provisional shell styles are measured now.
**A11-03:** disclosure behavior remains deferred until real destinations justify it.

## Visual and accessibility evidence

System fonts, logical CSS, a fluid container capped at 60rem, readable paragraph
measures, wrapping headings/labels and restrained decorative sage dividers express
**Modern infrastructure for the independent grocer**. No images, remote fonts,
ornament, animation, framework or dependency is added. Six preview-scoped custom
properties are provisional implementation values, not a complete M1.3 token system.

Actual computed foreground/background pairs use these sRGB values:

| Use | Foreground / background | Contrast |
| --- | --- | --- |
| Main text and focus against paper | `#152B30` / `#F7F8F4` | 13.86:1 |
| Identity/footer and focus against white | `#152B30` / `#FFFFFF` | 14.79:1 |
| Counter default text | `#FFFFFF` / `#236D58` | 6.18:1 |
| Counter boundary against paper | `#236D58` / `#F7F8F4` | 5.79:1 |
| Skip text/focus against sage | `#152B30` / `#DDEBE4` | 12.03:1 |
| Counter hover/active text | `#FFFFFF` / `#152B30` | 14.79:1 |

Production browser assertions compute WCAG relative luminance from rendered
styles: text at least 4.5:1, essential boundaries/focus at least 3:1. Decorative
sage rules convey no essential control information. Links remain underlined;
keyboard focus has a 3px outline with 4px offset; controls use native semantics.
A forced-colors Chromium probe confirms visible system-color focus. Reduced-motion
emulation works; no motion is implemented.

Keyboard traversal reaches skip, identity/home and Counter in meaningful order.
Activating skip scrolls to and focuses main without JavaScript; subsequent Tab
reaches Counter. Enter and Space increment it and retain focus. The focused skip
link is visible, and one banner/main/footer, coherent headings and accessible
names are asserted. Axe's existing WCAG A/AA tags and zero-exclusion policy remain;
scans report zero violations. This does not establish WCAG 2.2 AA conformance.

## Responsive and pseudo qualification

Chromium and Firefox assertions cover 320, 375, 768, 1024 and 1440 CSS-pixel widths
without page-level horizontal overflow. At 320 CSS pixels, 200% root text size
plus WCAG text-spacing overrides still reflows and permits keyboard operation.
The 320 CSS-pixel viewport tests the reflow condition of a 1280px viewport at
400% zoom; native browser-chrome zoom was not independently exercised. Real
screen-reader review and manual browser zoom remain human review items.
Desktop/narrow production screenshots were visually inspected outside the repository.

A separate real development-server Chromium experiment qualifies `/en-XA` at all
five widths and 200% text at 320 CSS pixels. Shell/proof labels visibly transform
and expand; native skip navigation also works with JavaScript disabled, and
Counter hydrates/activates with no page or console errors. HTML is `lang=en-XA`,
`dir=ltr`, metadata is pseudo with `noindex,nofollow`; IDs and canonical `PREVIEW`
remain unchanged. Withheld identifiers are absent from its response. The watcher
and browser processes were stopped before canonical type validation resumed.

Language still implies no formatting locale, market, currency or tax jurisdiction.
No new public language or RTL route is implemented; logical properties preserve
future direction flexibility without claiming current RTL qualification.

## Executable local qualification: 2026-10-08

The existing Linux aarch64 environment uses Nix-owned Node 24.21.0, pnpm 12.9.0
and just 1.51.0. Browser binaries are project-owned Playwright 1.64.0; available
cached binaries required no installation or host changes.

| Gate | Result |
| --- | --- |
| `just clean` | PASS: ignored generated state removed |
| `pnpm install --frozen-lockfile` | PASS: dependency metadata/lifecycle policy unchanged |
| `just check` | PASS: zero-warning ESLint, non-mutating ReScript formatting, 15 pure tests, seven supervisor cases, canonical typecheck, production build, Chromium 9/9 |
| `just test-e2e --project=firefox` | PASS: 9/9 |
| Development pseudo / post-development `just typecheck` | PASS: separate controlled experiment, then canonical generated route types restored |
| Security / accessibility | PASS: original response/CSP, SSR/hydration, axe and keyboard assertions retained; two shell scenarios added |
| Production artifacts | PASS: `/en` remains static; no pseudo HTML page; only Counter in application client-reference manifest; withheld IDs absent from inspected HTML/RSC/client files |

All seven prior scenarios remain; two shell tests bring the suite to nine per
engine. Supported Ubuntu `just ci` ran **27/27** for the signed implementation
commit below. Final merged-main qualification also passes the correction commit,
including current-page and identity-focus assertions, as recorded below. Chromium,
Firefox and WebKit remain blocking, with one worker and zero retries.
Fedora ARM64 WebKit native runtime remains unqualified; no local success is asserted
and no remote project is disabled.
The existing Linux-CI WebKit child-only GSettings correction is unchanged.

No dependency, lockfile, Nix, CI, Playwright, security, domain/publication policy,
route set or language-exposure change is made. Generated ReScript/GenType output
remains ignored. The [first-checkpoint ESLint review](quality-and-ci.md#m12-eslint-compatibility-review-2026-10-08)
supports retaining the qualified exception; the maintainer approved continued use
at M1.2 acceptance under its unchanged conditions and deadline, as recorded below.

## Feature-branch remote qualification: 2026-10-08

Signed implementation commit: `e229b5a5ed92d785bbcbbd6773ee26f970dd4e8f`.
[Run 37752595132](https://github.com/adarj/grocery-pos-website/actions/runs/37752595132)
ran on Ubuntu 24.04 x86_64. Run metadata, job steps and logs were independently
verified; both attempts used the identical signed source commit and workflow.

**Attempt 1 — FAILED:** [job 113229205496](https://github.com/adarj/grocery-pos-website/actions/runs/37752595132/job/113229205496)
timed out in Ubuntu browser provisioning after ten minutes while package downloads
were still in progress. Nix/toolchain and frozen installation passed, but the
application quality/browser step was skipped: no application tests executed and
no application regression was demonstrated. Source cleanliness passed. The pattern
is consistent with transient external package-delivery slowness; the underlying
network or mirror root cause was not independently established.

**Attempt 2 — PASSED:** [job 113234517406](https://github.com/adarj/grocery-pos-website/actions/runs/37752595132/job/113234517406)
passed repository Nix/toolchain qualification (Node 24.21.0, pnpm 12.9.0, just 1.51.0),
frozen installation and browser provisioning. Zero-warning lint, non-mutating
ReScript formatting, 15 pure tests, seven supervisor cases, canonical typecheck and
production build passed. Chromium **9/9**, Firefox **9/9**, WebKit **9/9**: **27/27**,
one worker, zero browser retries. Security/CSP, axe/keyboard, SSR/hydration,
publication withholding and responsive/contrast scenarios passed. `/en` remained
static and source cleanliness passed. The failed attempt is not counted as passing
application evidence; the successful rerun qualifies this implementation commit,
not the subsequent corrections.

## Adversarial findings and correction review

- **A12-01 — MINOR, RESOLVED:** corrected obsolete pending-feature-CI/audit summaries and
  recorded both remote attempts distinctly. Cross-document summaries link here.
- **A12-02 — MINOR, RESOLVED:** added the identity link's current-page semantics and emphasized
  underline, with production SSR, keyboard-order, focus/contrast and eligible-link
  assertions. The single-route assumption and mandatory future child-route safeguard
  are recorded above and in the shell source.
- **A12-03 — NOTE:** retain the provisioning incident as nonblocking history.
  No timeout, retry, cache, mirror or provisioning change is justified by this
  isolated event; reassess only if comparable incidents recur.

A12-01/A12-02 are **RESOLVED** through the implemented corrections, local
qualification and successful merged-main qualification. The maintainer formally
accepted M1.2 on October 8, 2026 (UTC). The original audit result and failed
provisioning attempt remain distinct historical evidence.

## M1.2.1 local correction qualification: 2026-10-08

The same Nix-owned Linux aarch64 tools and cached Playwright 1.64.0 binaries were
used; no installation, dependency or host modification was needed.

| Gate | Result |
| --- | --- |
| `just check` | PASS: lint/format, 15 pure tests, seven supervisor cases, canonical typecheck/build, Chromium 9/9 |
| `just test-e2e --project=firefox` | PASS: Firefox 9/9 |
| Current-page / focus regressions | PASS in both engines: identity keeps its accessible name and `/en` destination, announces `aria-current="page"`, uses a 0.15em underline, and retains a 3px focus outline with 4px offset; skip → identity → Counter order remains native |
| Original behavior | PASS: zero axe violations, skip activation/Counter keyboard and hydration, response security/CSP, production language restrictions, SSR/withholding, and responsive/text-expansion scenarios retained |
| Production output | PASS: static `/en`, one main landmark, current-page annotation in HTML, no pseudo HTML, sole application client reference Counter; withheld IDs absent from 22 inspected HTML/RSC/client artifacts |
| Pseudo component semantics | PASS: in-memory server rendering of the compiled shell with qualification language preserves `/en-XA`, current-page semantics and expanded typed messages; this is not a new development-server/browser qualification |
| Scope / documentation | PASS: only the intended shell/CSS/tests and status documentation changed; local Markdown links/anchors and `git diff --check` pass; dependencies, Nix, CI, route/publication policy and security controls unchanged |

The existing nine scenarios per engine are preserved. Fedora ARM64 WebKit was not
run locally; the final supported Ubuntu main run below qualifies all three engines,
with WebKit required, one worker and zero retries.

## Final merged-main qualification and human acceptance: 2026-10-08

Merged main commit: `e5f690977273ce721998f6f778b946924b5a443f`.
[Main run 37780086710](https://github.com/adarj/grocery-pos-website/actions/runs/37780086710)
and [job 113320701351](https://github.com/adarj/grocery-pos-website/actions/runs/37780086710/job/113320701351)
were independently verified against that exact SHA and the `main` branch:
**SUCCESS** on Ubuntu 24.04 x86_64.

| Gate | Final main result |
| --- | --- |
| Repository Nix toolchain | PASS: Node 24.21.0, pnpm 12.9.0, just 1.51.0 |
| Frozen installation / browser provisioning | PASS |
| Lint / ReScript formatting | PASS: zero-warning lint and non-mutating formatting |
| Pure / supervisor tests | PASS: 15 pure tests and seven supervisor regression cases |
| Canonical typecheck / production build | PASS; `/en` remains statically generated |
| Chromium / Firefox / WebKit | PASS: 9/9 each, aggregate 27/27, one worker, zero browser retries |
| Security / accessibility / shell regressions | PASS: response/CSP, axe/keyboard, SSR/hydration, current-page/focus, reflow and withholding checks |
| Source cleanliness | PASS |

The human maintainer confirmed **completion of the visual review, formal M1.2
acceptance and authorization to begin M1.3 on October 8, 2026 (UTC)**. Acceptance
covers the internal engineering-preview shell only. It does not authorize
customer-facing product claims, production deployment, M1.4 or other commercial
publication. An internal-preview designation remains neither access control nor
deployment authorization.

### M1.2 ESLint checkpoint disposition

On **October 8, 2026 (UTC)** the human maintainer explicitly approved continued
use of exactly pinned **ESLint 9.39.5** under the
[previously accepted maintenance exception](milestone-0-qualification.md#approved-eslint-9-maintenance-exception).
The M1.2 technical review found no supported, coverage-preserving ESLint 10
migration with the required stable plugin stack. This approval satisfies the
**first-M1-implementation-checkpoint review requirement**.

All controls remain: development/CI-only scope, zero-warning enforcement, existing
Next/TypeScript/JSX accessibility coverage, frozen installation, normal CI gates
and no unsupported peer overrides. Targeted lint-stack updates still trigger
review; the maximum review date remains **January 8, 2027**. Upgrade criteria and
explicit renewal/alternative-decision requirements at expiration remain unchanged.
This is not an unrestricted exception or an automatic deadline extension.

## Next-checkpoint boundaries and retained limitations

M1.2 is formally accepted, merged and qualified on main; its historical evidence
and acceptance records above remain unchanged. **M1.3 — Design Tokens & Reusable
Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC)** by the human maintainer. The
[M1.3.1 token record](m1-3-1-token-qualification.md) owns the subsequent evidence:

| M1.3 checkpoint | Current status |
| --- | --- |
| M1.3.1 semantic token foundation | Accepted and merged at signed commit `61784aec86d53f35aa839c9ef7fce780d3cd4805` |
| M1.3.1 local qualification | Historical PASS: Chromium 10/10, Firefox 10/10, lint/format, 15 pure tests, seven supervisor cases, canonical typecheck/build, accessibility and security/CSP checks |
| M1.3.1 independent adversarial audit | Historical CONDITIONAL PASS — BOUNDED CORRECTIONS; A13-01 resolved in the merged commit; A13-02/A13-03 retained as NOTES; original audit decision preserved |
| M1.3.1 human acceptance | Accepted baseline identified by the maintainer's M1.3.2 instruction; no additional manual accessibility coverage is asserted |
| M1.3.1 integration and main CI | Complete: run 37791509300, exact signed commit above, Chromium/Firefox/WebKit 10/10 each (30/30), source cleanliness PASS |
| M1.3.2 assessment | No-extraction decision accepted October 8, 2026 (UTC); signed main commit `e14416956296233844b833526ccc32d21b86f47e`, run 37797004595: 30/30 and source cleanliness PASS |
| M1.3.3 | Merged at signed commit `b3175b473710279152e78598019812ff43e15a08`; adversarial audit PASS; main run 37804897764: 30/30 and source cleanliness PASS |
| M1.3.4 / overall acceptance | Historical CONDITIONAL PASS retained; human gates subsequently resolved; M1.3 FORMALLY ACCEPTED October 8, 2026 (UTC), main closeout `ad69f632129231bb2604a3a71678ac959900046c`, run 37827607606 (30/30); [record](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc) retains the approved, unverified M1.5 deferrals |
| M1.4 | Authorized October 8, 2026 (UTC); M1.4.1 documentation planning under review; [content-readiness register](../product/m1-4-1-content-readiness.md); M1.4.2 not authorized |

Follow the approved M1 plan and design-system specification. M1.3 is formally accepted;
M1.4.1 is documentation-only and under review; M1.4.2 remains unauthorized.

- Before the first additional public child route, make identity-link current-page
  handling route-aware; preserve the shared-layout safeguard recorded above.
- A12-03 remains NOTE-level: monitor comparable provisioning incidents; no CI
  timeout, retry, mirror, cache or provisioning change is authorized.
- Fedora ARM64 WebKit native runtime remains unqualified. M1.2's visual review did
  not establish screen-reader/native-zoom qualification. The subsequent
  [M1.3 acceptance record](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc) records
  human-reported native-zoom and other manual PASS observations with missing
  environment metadata; screen-reader/device/actual OS high-contrast checks are
  explicitly deferred, unverified at M1.5. No WCAG 2.2 AA conformance is asserted.
- Production HTTPS/HSTS, deployment and commercial publication require separate
  authorization and qualification; M1.4/M1.4.1 planning approval grants neither.
