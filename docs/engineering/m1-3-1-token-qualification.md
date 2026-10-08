# M1.3.1 semantic design-token qualification

## Scope and status

**M1.3.1 — ACCEPTED and merged on main.** Main qualification passes at signed
commit `61784aec86d53f35aa839c9ef7fce780d3cd4805`, run 37791509300 (30/30).
The original pre-merge adversarial CONDITIONAL PASS and its final finding
dispositions are preserved below. M1.3 is not complete; the
[M1.3.2 no-extraction decision](m1-3-2-primitives-qualification.md) is human-accepted,
merged and main-qualified. The authorized
[M1.3.3 qualification](m1-3-3-design-system-qualification.md) records independent
inspection and bounded local probes over the unchanged UI; adversarial audit,
exact-commit CI and human review remain pending. M1.4 is not authorized.
This slice consolidates demonstrated presentation values in `app/globals.css`.
No components, routes, content, publication grants or dependencies are added.
The [approved design-system contract](../design/design-system-specification.md),
[visual direction](../design/visual-direction.md) and
[ADR 0006](../adr/0006-css-and-design-system-foundation.md) govern this work.

Starting branch: `feat/m1-3-1-semantic-tokens`; HEAD/main/origin-main:
`4b990ccab63eb83bc6f5ca7a71eb33dec312f7c0`, with clean staging/worktree.
[Main run 37782359237](https://github.com/adarj/grocery-pos-website/actions/runs/37782359237)
qualifies that accepted M1.2 closeout baseline. Its success is historical evidence,
not qualification of this token change. The [M1.2 record](m1-2-shell-qualification.md)
preserves the original implementation, corrections and acceptance history.

## Token ownership and naming

The existing root stylesheet owns the token definitions and consumers. Raw
`--palette-*` values feed semantic `--color-*` roles; selectors consume roles,
never palette names. Separate action, link, focus, decorative-divider and essential
control-boundary decisions can evolve independently even when values coincide.
There are 43 custom properties, all with consumers: five palette values, thirteen
color roles, nine typography/measure values, seven spacing steps, two layout values
and seven control/border/focus values. No undefined references or unused definitions
were found. No theme provider, new CSS import, cascade-layer scheme or CSS framework
is needed for this single existing sheet.

| Implemented semantic color | Raw value | Current use |
| --- | --- | --- |
| `--color-page` | `#F7F8F4` | Body/page background |
| `--color-surface` | `#FFFFFF` | Header and footer |
| `--color-surface-subtle` | `#DDEBE4` | Visible skip-link fill |
| `--color-text` | `#152B30` | Body, identity, supporting text and skip link |
| `--color-link` | `#236D58` | Generic underlined link treatment |
| `--color-link-interaction` | `#152B30` | Generic link hover/active |
| `--color-action` | `#236D58` | Counter button fill |
| `--color-on-action` | `#FFFFFF` | Counter button label |
| `--color-action-interaction` | `#152B30` | Button hover/active fill |
| `--color-focus` | `#152B30` | Keyboard-visible outline |
| `--color-divider` | `#DDEBE4` | Decorative header, section and footer separators |
| `--color-control-border` | `#236D58` | Essential button boundary |
| `--color-control-border-interaction` | `#152B30` | Hover/active button boundary |

The raw ink, paper, evergreen, sage and white values preserve M1.2 exactly.
Harvest `#D5A65C` remains a documented palette candidate with no token or consumer.
These roles are qualified for their tested engineering-preview combinations;
new consumers/surfaces require their own pairing/state checks and content approval.

## Typography, spacing and geometry

System sans remains `system-ui, sans-serif`; body/supporting text is 1rem with 1.6
line height. Identity is 1.25rem; h2 is 1.5rem; h1 uses the existing
`clamp(1.75rem, 1.25rem + 2vw, 2.75rem)`, with 1.25 heading line height.
Control line height remains 1.5; prose measure is 68ch. Supporting qualifications
inherit readable body text rather than introducing a smaller caption style.
Heading semantics and normal user font scaling remain independent of tokens.
No font assets or dependencies are introduced.

The demonstrated quarter-rem spacing steps are 0.5, 0.75, 1, 1.5, 2, 2.5 and 4rem
(`--space-2/3/4/6/8/10/16`). Header/footer, headings, paragraphs, lists, sections
and skip-link offsets consume them. Container gutters remain fluid
`clamp(1rem, 4vw, 2rem)` and the shell maximum stays **60rem**. Main block padding
remains `clamp(2rem, 6vw, 4rem)`. Unique content-driven measures (27ch title, 35ch
preview status) and the existing 0.65rem control block padding remain direct CSS;
no scale rounding or visual adjustment is imposed.

Shared minimum control block size is 2.75rem; control radius is 0.25rem.
Decorative divider width is 1px, essential control border 2px. Focus is a 3px solid
outline with 4px offset; emphasized current/interactive link underline is 0.15em.
Logical properties, wrapping and intrinsic sizing are retained. Existing global
body/heading/link/button rules remain unchanged in scope; before introducing
other control variants, review those defaults and add justified local styles
rather than treating this button rule as a generic variant system.

## Measured contrast matrix

Production browser tests read actual computed opaque sRGB colors and use WCAG
relative luminance: linearize channels at 0.04045, weight 0.2126/0.7152/0.0722,
then `(lighter + 0.05) / (darker + 0.05)`. The parser rejects transparency and
unsupported color representations instead of pretending to composite/convert them.
Ratios below are rounded; thresholds use unrounded values. Every text pair is
checked at 4.5:1, including headings; essential boundaries/focus at 3:1.

| Consumer / state | Foreground / background | Ratio | Minimum |
| --- | --- | --- | --- |
| Main/body text | Ink / paper | 13.86:1 | 4.5:1 |
| Header status and footer text | Ink / white | 14.79:1 | 4.5:1 |
| Identity default, hover, active | Ink / white | 14.79:1 | 4.5:1 |
| Generic link default on page | Evergreen / paper | 5.79:1 | 4.5:1 |
| Generic link default on surface | Evergreen / white | 6.18:1 | 4.5:1 |
| Generic link hover/active on page | Ink / paper | 13.86:1 | 4.5:1 |
| Generic link hover/active on surface | Ink / white | 14.79:1 | 4.5:1 |
| Primary action label default | White / evergreen | 6.18:1 | 4.5:1 |
| Primary action label hover/active | White / ink | 14.79:1 | 4.5:1 |
| Essential control boundary default | Evergreen / paper | 5.79:1 | 3:1 |
| Essential control boundary hover/active | Ink / paper | 13.86:1 | 3:1 |
| Skip-link text | Ink / sage | 12.03:1 | 4.5:1 |
| Skip outline against header / skip fill | Ink / white; ink / sage | 14.79:1; 12.03:1 | 3:1 |
| Identity focus against header | Ink / white | 14.79:1 | 3:1 |
| Counter and main focus against page | Ink / paper | 13.86:1 | 3:1 |

The contrast regression emits 24 measured pairing/state results per engine.
Generic link pairs use temporary DOM-only anchors in main/footer, removed before
keyboard traversal; the current visible identity and skip links have their own
measured treatments. No extra navigation is published. Counter focus neighbors
the paper background across its 4px offset, not its green fill. The low-contrast
sage separators are decorative, not control boundaries or information indicators.
Forced-colors uses user-agent `Highlight`/`ButtonText` system colors; fixed-palette
ratios are not substituted for that user-controlled mode.

## Local qualification — October 8, 2026 (UTC)

Fedora ARM64, repository Nix Node 24.21.0, pnpm 12.9.0 and just 1.51.0.

| Evidence | Result |
| --- | --- |
| `just check` | PASS: zero-warning ESLint, non-mutating ReScript formatting, 15 pure tests, seven supervisor cases, canonical typecheck, production build, Chromium 10/10 |
| `just test-e2e --project=firefox` | PASS: Firefox 10/10 against the same production build |
| Axe and keyboard | Zero automated violations with existing WCAG A/AA tags, no exclusions; native skip-to-main, Counter Enter/Space and retained focus pass |
| Responsive/text-spacing regression | PASS at 320, 375, 768, 1024 and 1440px; 320px with 200% root text plus WCAG text-spacing overrides, visible focus and Counter operation |
| Forced colors / reduced motion | PASS in Chromium and Firefox: media queries active, system focus/control borders retained, keyboard operation; no animations or transitions introduced |
| CSS parity experiment | PASS in Chromium and Firefox: baseline and token CSS yield identical computed non-custom properties and geometry at five widths × default/hover/active/post-Tab snapshots (20 comparisons per engine) on the same shell markup |
| Development pseudo experiment | PASS in both engines: actual `/en-XA` at five widths and 200% text/spacing, native skip/Counter, `lang=en-XA`, `dir=ltr`, current identity link, noindex/nofollow; canonical ID/PREVIEW preserved and withheld IDs absent; no page errors |
| Production artifact inspection | `/en` remains SSG; no pseudo HTML; Counter is the sole application client reference; 22 public HTML/RSC/client-JS artifacts contain neither withheld identifier |

**A13-03 (NOTE):** the parity probe's fourth snapshot followed Tab but did not
assert the exact focused target. Its style/geometry comparison does not establish
focus on a particular element; the canonical keyboard regressions separately
verify skip-link and Counter focus behavior. The probe is unchanged and was not
rerun for this documentation correction.

The supervised dev server was stopped before the canonical production gate.
Experiments ran in memory without permanent diagnostic scripts. Dependency,
Nix, routing, i18n, publication, security-header/CSP and browser configuration
remain unchanged. All three browser projects remain blocking, one worker, zero
retries. At local implementation time the expected remote matrix was **30/30**
(10 per engine); that historical local report did not claim remote qualification.
The subsequent verified main result follows. Fedora ARM64 WebKit native runtime
remains unqualified.

## Independent audit and final main qualification — October 8, 2026 (UTC)

The independent pre-merge audit returned **M1.3.1 CONDITIONAL PASS — BOUNDED
CORRECTIONS**, with no BLOCKER, MAJOR or runtime defect. That historical decision
is not retroactively rewritten as PASS.

| Audit item | Final disposition |
| --- | --- |
| A13-01 — Stale checkpoint status | RESOLVED: contradictory M1.2/M1.3 status and stale audit-pending summaries were corrected in the merged token commit. |
| A13-02 — Base-link role | NOTE retained: the semantic role is justified; identity/skip links override its default foreground, while controlled DOM-only link fixtures qualify the base treatment. No CSS correction was required. |
| A13-03 — Parity snapshot focus | NOTE retained: the post-Tab parity snapshot did not assert its focused target. The evidence limitation is documented above; independent keyboard regressions verify actual focus. No probe rerun or implementation change was required. |

Signed main commit: **`61784aec86d53f35aa839c9ef7fce780d3cd4805`**.
[Main run 37791509300](https://github.com/adarj/grocery-pos-website/actions/runs/37791509300)
is a successful push-to-main run on that exact SHA. GitHub reports its commit
signature as verified. The run and job logs were independently inspected during
M1.3.2; the repository maintainer identifies these merged tokens as the accepted
baseline for that checkpoint.

Ubuntu 24.04 x86_64 qualifies the repository Nix environment (Node 24.21.0,
pnpm 12.9.0, just 1.51.0), frozen installation, zero-warning lint, non-mutating
ReScript formatting, 15 pure tests, seven supervisor regression cases, canonical
typecheck and production build. Chromium **10/10**, Firefox **10/10** and WebKit
**10/10** pass: **30/30**, one worker, zero browser retries. The scenarios include
JS-disabled server content, hydration, routing/pseudo rejection, security headers,
CSP diagnostics, axe/keyboard, measured contrast, responsive/text-spacing and
forced-colors/reduced-motion checks. The build retains static `/en`; source
cleanliness passes. This supersedes the local report's pending remote evidence,
without claiming Fedora ARM64 WebKit support, WCAG conformance or deployment approval.

## Limits and M1.3.2 handoff

This is contrast and regression evidence, not WCAG 2.2 AA conformance, manual
screen-reader/device review, production deployment approval or commercial claims.
320 CSS-pixel reflow and root text scaling are simulations, not browser-chrome zoom
execution. RTL remains future qualification; logical CSS does not prove RTL support.
Existing security controls and sensitive-surface/CSP/HTTPS review triggers remain
in the [security baseline](security-baseline.md). The approved ESLint 9.39.5
exception and January 8, 2027 deadline remain unchanged.

The [M1.3.2 assessment](m1-3-2-primitives-qualification.md) retains the existing
CSS patterns and ReScript composition because no further component extraction is
currently justified. Future extraction under the [M1 plan](milestone-1-plan.md)
must follow demonstrated reuse and consume semantic roles rather than palette values.
Additional component extraction, cards/callouts without real uses, status/disabled/loading
families, technical type, dark mode, theme switching, shadows and remote fonts
remain deferred. A new contrast surface or interaction needs new measured evidence.
Make identity current-state handling route-aware **before the first public child
route**, preserving the M1.2 safeguard. Retain static/server-first rendering,
typed messages, public-safe projection and the Counter-only client boundary.
