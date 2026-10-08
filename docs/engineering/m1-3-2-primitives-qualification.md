# M1.3.2 reusable presentation primitives assessment

## Scope and status

**M1.3.2 — ACCEPTED by the human maintainer on October 8, 2026 (UTC).**
The no-extraction decision retains the existing semantic tokens, shared CSS
patterns and ReScript composition. The assessment was documentation-only;
no new component, CSS rule, token, route, test or dependency was introduced.
Signed main commit `e14416956296233844b833526ccc32d21b86f47e` is qualified by
run 37797004595 (30/30), recorded below.

M1.3.3 is merged and main-qualified (30/30), with adversarial audit PASS.
**M1.3 — Design Tokens & Reusable Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [acceptance record](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc) identifies
signed main closeout `ad69f632129231bb2604a3a71678ac959900046c` and run
37827607606 (30/30 and source cleanliness), preserving M1.3.4's historical
CONDITIONAL PASS and subsequent human gate resolution. D13-01–D13-03 remain
DEFERRED, UNVERIFIED — M1.5. M1.4/M1.4.1 documentation planning was subsequently
authorized October 8, 2026 (UTC); see the
[content-readiness register](../product/m1-4-1-content-readiness.md). M1.4.2 and substantive
publication remain unauthorized.

Starting branch: `feat/m1-3-2-reusable-primitives`; HEAD/main/origin-main:
`61784aec86d53f35aa839c9ef7fce780d3cd4805`, with clean worktree and staging.
Linux ARM64 tools resolve through the website Nix environment: Node 24.21.0,
pnpm 12.9.0, just 1.51.0. The maintainer identifies the merged M1.3.1 tokens as
accepted. Their [qualification record](m1-3-1-token-qualification.md#independent-audit-and-final-main-qualification--october-8-2026-utc)
owns the signed main commit, verified run 37791509300 and A13-01–A13-03 dispositions.

[ADR 0006](../adr/0006-css-and-design-system-foundation.md), the
[design-system specification](../design/design-system-specification.md) and
[M1 plan](milestone-1-plan.md) govern this decision. Extraction is earned by
meaningful repeated responsibility; a planned primitive is not a mandatory file.

## Reusable-pattern inventory and decisions

Three distinct layers already exist: **tokens** supply semantic values, **CSS
patterns** share presentation without owning markup, and **ReScript components**
own actual composition and behavior. Repeated values do not require a component.

| Candidate | Actual evidence and existing layer | Decision and rationale |
| --- | --- | --- |
| Header and footer | One header and one footer in the 30-line server-rendered `EngineeringShell.res`; the shared language layout composes that shell. Each has different semantic content. | Retain the existing ReScript composition. Splitting these single instances would redistribute markup without removing meaningful duplication. |
| Shared container | `.preview-container` is used three times: header/footer `div` elements and the focusable `main` in `ArchitectureProof.res`. | Retain the CSS pattern. A fixed `div` wrapper would add DOM or move classes; a polymorphic API would duplicate already-explicit element/attribute ownership. Neither improves this width/alignment contract. |
| Main-content rhythm | One `.preview-main` owns padding, scroll margin and wrapping. `ArchitectureProof` owns the sole main, ID and fragment-focus target. | Keep these responsibilities together; do not extract a generic main landmark or another wrapper. |
| Section rhythm | `.preview-main section` gives the capability list and Counter the same spacing/divider. Each owns a native section, localized name, h2 and different contents. | Retain the CSS pattern and local markup. Two small section/heading pairs do not justify a new heading/region API; a shared module would also be consumed across server and client trees without a new requirement. |
| Identity and skip links | Two real anchors have different destinations, labels and semantics; base link CSS shares affordances, while local classes handle identity/current state and skip visibility. | Retain ordinary anchors. Do not hide fragment focus or current-page semantics behind a generic link component, or add navigation without eligible destinations. |
| Heading typography | One h1 and two h2 elements consume existing global heading rules and semantic typography tokens. | Retain native heading levels and shared CSS; visual style does not need a heading component. |
| Counter button | One native button in the qualification-only client Counter; existing button CSS consumes semantic action, boundary and geometry tokens. | No reusable button API is justified by one proof control. Keep interaction in Counter; review global button defaults before introducing a genuinely different control. |
| Interactive focus | Shared `:focus-visible` rule covers links, Counter and fragment-focused main; forced-colors overrides use system colors. | Retain CSS reuse. No focus wrapper, global provider or extra client island is needed. |

No new React primitive is extracted. `EngineeringShell`, `ArchitectureProof`,
`CapabilityList` and the isolated Counter keep their existing meaningful ownership.
A section wrapper would not remove capability policy, typed message resolution or
Counter state; those remain in their existing boundaries.

## Retained presentation and semantic contracts

- `.preview-container`: fluid logical inline width, existing 60rem maximum,
  centered alignment and 1–2rem fluid gutters; no landmark or element choice.
- `.preview-main`: existing fluid block padding and useful scroll margin;
  `main#main-content` remains the sole main with `tabIndex=-1`.
- `.preview-main section`: existing 2.5rem start margin, 1.5rem start padding and
  decorative divider for the two current sections. Do not assume this descendant
  rule defines future nested-section variants.
- Native links/buttons retain distinct navigation/action semantics, current-page
  underline, focus-visible outlines and existing geometry. The identity's current
  annotation must become route-aware before the first public child route.
- All 43 existing CSS properties retain their consumers. Component rules use
  semantic roles rather than raw palette names. No new surface, pairing or state
  is introduced; no new contrast measurement is required for this unchanged CSS.

The [measured token matrix](m1-3-1-token-qualification.md#measured-contrast-matrix)
remains applicable to the same consumers: ink/paper 13.86:1, ink/white 14.79:1,
evergreen/paper 5.79:1, evergreen/white 6.18:1 and ink/sage 12.03:1.
The canonical test measures 24 pairing/state results per browser, including
controlled base-link fixtures and actual focus-adjacent surfaces. Decorative
sage dividers are not essential boundaries. No new visual-parity experiment or
focus-target claim is made; the historical post-Tab parity limitation remains.

## Qualification evidence at assessment time and limits

The following preserves the original pre-merge assessment evidence. Its decision
was **EXTRACTION NOT JUSTIFIED — READY FOR HUMAN SCOPE REVIEW**; its then-pending
approval/CI state is superseded by the acceptance and main qualification below.

The existing source, CSS, configuration and tests were inspected; no runtime file
is changed by this assessment. The signed-baseline
[main run 37791509300](https://github.com/adarj/grocery-pos-website/actions/runs/37791509300)
was independently verified against the exact starting SHA: Ubuntu 24.04 x86_64,
repository Nix tools, frozen installation, lint/format, 15 pure tests, seven
supervisor cases, canonical typecheck/build, Chromium 10/10, Firefox 10/10 and
WebKit 10/10. All **30/30** scenarios pass with one worker and zero browser retries;
source cleanliness passes. These are baseline results, not remote qualification
of this uncommitted documentation candidate.

The unchanged suite checks JS-disabled server content and native skip focus,
Counter hydration and Enter/Space, current identity and focus contrast, narrow
320/375/768/1024/1440px layouts, enlarged text/text spacing, forced colors/reduced
motion, production pseudo/unknown rejection, security headers and CSP diagnostics.
Historical development `/en-XA` expansion evidence stays in the token record;
no fresh pseudo or browser execution is claimed here.

Existing local production artifacts were inspected without rebuilding: `/en` is
prerendered, no pseudo page is generated, the sole ReScript application client
reference is `ui/qualification/Counter.res.mjs`, and 25 public HTML/RSC/client-JS
artifacts contain neither withheld qualification identifier. The `/en` HTML
retains one main, the skip target, current identity and fictional-data disclaimer,
with no remote script source. This is existing-artifact inspection, not a fresh
build result.

Documentation-only validation covers links/heading anchors, whitespace and scope
hashes; builds and browser suites are not rerun for an unchanged runtime. The exact
eventual human-signed commit still requires the unchanged three-browser CI gate.
Manual screen-reader/device and native browser-zoom review remain separate;
320 CSS-pixel reflow and root-font enlargement do not prove browser-chrome zoom or
WCAG conformance. Fedora ARM64 WebKit native runtime remains unqualified.

## Independent audit, human acceptance and main qualification — October 8, 2026 (UTC)

The read-only adversarial audit returned **M1.3.2 PASS — NO EXTRACTION JUSTIFIED;
READY FOR HUMAN REVIEW**, with no new BLOCKER, MAJOR or MINOR finding. It
independently challenged each proposed primitive and found the existing CSS
patterns and ReScript ownership sufficient. The human maintainer formally
accepted the no-extraction decision and authorized M1.3.3 on October 8, 2026 (UTC).
That decision does not authorize new components, publication or deployment.

Signed main commit: **`e14416956296233844b833526ccc32d21b86f47e`**.
[Main run 37797004595](https://github.com/adarj/grocery-pos-website/actions/runs/37797004595)
passes on that exact SHA; GitHub reports its signature as verified. The run,
job conclusions and logs were independently inspected during M1.3.3.
Ubuntu 24.04 x86_64 qualifies repository Nix tools (Node 24.21.0, pnpm 12.9.0,
just 1.51.0), frozen installation, lint/format, 15 pure tests, seven supervisor
cases, canonical typecheck and production build. Chromium **10/10**, Firefox
**10/10** and WebKit **10/10** pass: **30/30**, one worker, zero browser retries.
Static `/en` and source cleanliness pass. This qualifies the merged M1.3.2
assessment; it does not qualify the future M1.3.3 documentation commit or prove
additional manual accessibility/device coverage.

## Architecture, publication and security safeguards

**Next routes. ReScript models. React presents. APIs connect.** Next retains
validated route context, static params and metadata. ReScript keeps shell/proof
composition, typed language/messages and public-safe capability presentation.
Counter remains the only application client island; no provider or state manager
is added. Withholding precedes localization; fictional proof data is not a claim
of product availability. English implies neither US nor USD; `/en-XA` remains
qualification-only and production rejects unsupported languages.

Security headers/CSP, dependencies, lockfiles, Nix, CI, browser projects, one
worker and zero retries remain unchanged. No account, commerce, backend authority,
remote asset, deployment or customer-facing publication is authorized. The approved
ESLint 9.39.5 exception retains every condition and the January 8, 2027 deadline.

## Deferred primitives and subsequent checkpoint handoff

The accepted inventory governs the completed
[M1.3.3 qualification](m1-3-3-design-system-qualification.md). Do not reopen extraction
for completeness or manufacture a second page to justify it. M1.3.4's authorized
final audit and subsequent human dispositions are preserved in the
[acceptance record](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc). M1.3 is formally
accepted; later implementation requires separate authorization.
M1.4.1 documentation planning is formally accepted October 8, 2026 (UTC); M1.4.2 remains unauthorized.

Reconsider extraction when approved real pages repeat meaningful semantic
composition, require consistent inputs or expose maintenance drift that CSS cannot
solve. Keep each API smaller than the duplication it removes. Review nested-section
and button selector scope when new content/controls arrive; make current-page
handling route-aware before a child route. New surfaces/states require contrast,
keyboard, responsive and server/client qualification appropriate to their behavior.

Cards/callouts, generic variants, menus, forms, status/loading families, theme/dark
mode, fonts, page templates and commercial features remain deferred until real
consumers and explicit scope authorization exist. A later audit can qualify this
unchanged foundation without a component-system rewrite.
