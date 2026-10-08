# M1.2 engineering-preview shell qualification

## Scope and status

The approved M1.2 scope is implemented around the existing fictional qualification
page. **Local qualification passes; independent adversarial review, supported
remote CI and human checkpoint acceptance remain pending.** M1.3 has not begun.
An internal-preview label is neither access control nor deployment authorization.
No marketing content, new routes, publication grants or product availability claims
are introduced. See the [approved scope and audit notes](milestone-1-plan.md#approved-m12-boundary-and-acceptance-checklist).

## Baseline and composition

Feature branch: `feat/m1-2-public-shell`; starting HEAD/main/origin-main:
`cea8dea94bafe182af40ef30fe390cc9b667ac07`, with clean staging/worktree.
Independently inspected [main run 37749346349](https://github.com/adarj/grocery-pos-website/actions/runs/37749346349)
tests that exact M1.1 integration commit: Ubuntu 24.04 x86_64, repository Nix,
frozen installation, 21/21 Chromium/Firefox/WebKit scenarios, one worker, zero
retries and source cleanliness pass. This historical result does not qualify
uncommitted M1.2 changes.

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
controls are omitted. **A11-02:** provisional shell styles are measured now.
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
engine. Supported Ubuntu `just ci` must run **27/27** with Chromium, Firefox and
WebKit blocking, one worker and zero retries. Fedora ARM64 WebKit native runtime
remains unqualified; no local success is asserted and no remote project is disabled.
The existing Linux-CI WebKit child-only GSettings correction is unchanged.

No dependency, lockfile, Nix, CI, Playwright, security, domain/publication policy,
route set or language-exposure change is made. Generated ReScript/GenType output
remains ignored. The [first-checkpoint ESLint review](quality-and-ci.md#m12-eslint-compatibility-review-2026-10-08)
retains the qualified exception; maintainer disposition is required at acceptance.

## Remaining checkpoint gates

- Independent M1.2 adversarial audit and human visual/accessibility review.
- Maintainer review of ESLint exception retention under its unchanged conditions.
- Signed human commit/push and successful exact-commit supported Ubuntu CI (27/27).
- Human integration and main qualification; M1.3 authorization remains separate.
- Manual screen-reader/zoom review; no deployment, HTTPS/HSTS or WCAG certification claim.
