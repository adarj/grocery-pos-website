# First-party design-system specification

**Status: M1.1 specification approved by the human maintainer on October 8, 2026 (UTC);
partially implemented in the engineering preview.** M1.3.1 semantic tokens are
locally qualified; human review and exact-commit remote CI remain pending.
Approval does not authorize public claims, routes, assets or deployment; remaining
candidate measurements and palette values still require qualification.
This document owns semantic presentation roles, primitive scope and qualification.
[Visual direction](visual-direction.md) explains the rationale;
[information architecture](../product/website-information-architecture.md) owns
navigation behavior and page/content governance. Follow
[ADR 0006](../adr/0006-css-and-design-system-foundation.md).

## Implemented subset and proposed roles

The [M1.3.1 token record](../engineering/m1-3-1-token-qualification.md) owns actual
CSS values, naming, measured pairings and validation. The current shell implements
page/white/subtle surfaces, primary text, links/actions and their hover/active states,
focus, decorative dividers and essential control boundaries. Typography and spacing
retain M1.2 values: system sans, 1rem body, 1.25rem identity, 1.5rem h2, fluid
1.75–2.75rem h1, 68ch prose, 60rem container and fluid 1–2rem gutters.
Supporting text inherits body size. These are the current qualified implementation,
not automatic approval of broader candidate sizes below. No reusable-component
extraction has occurred; M1.3.2 remains outside this slice.

Secondary/inverse/technical type, status/warning/error/disabled roles, contrasting
panels, additional action variants and unneeded primitives remain proposals.
Harvest remains an unused palette candidate. New consumers need actual contrast,
behavior and publication review; no dark-mode or theme system is implied.

## Color contract

Use semantic roles rather than raw palette names in components. Candidate values
come from visual direction; additional role values require selection and testing.

| Role family | Required distinctions | Pairings / states to validate |
| --- | --- | --- |
| Background and surfaces | Page, ordinary surface, subdued surface, contrasting panel | Every foreground used on each; panel inversions and imagery behind text |
| Text | Primary, secondary, inverse, technical | Body/caption/heading contrast; secondary cannot become unreadable decoration |
| Links | Normal, visited where appropriate, hover, active, focus-visible | Each surface; underline or another non-color-only affordance |
| Actions | Primary/secondary foreground and background, hover/active/focus | Label and icon contrast; boundary/state recognition on adjacent surfaces |
| Borders | Decorative divider vs essential control boundary | Essential boundaries and meaningful graphics; decoration is not a contrast exemption for controls |
| Focus | Visible indicator, offset/adjacent colors | Both light and contrasting surfaces; forced-colors visibility and no clipping |
| Positive/negative status | Text, surface, icon/border when needed | Label and meaningful indicator contrast; explicit language/icon, never color alone |
| Warning/information | Separate message roles from brand highlight | Text/indicator contrast on actual callout backgrounds |
| Disabled | Inactive controls and explanatory text | Semantics and recognition; maintain readable explanation despite contrast exemptions for inactive controls |

Maintain a measured pairing/state sheet in M1.3 before calling a token approved:
normal text at least 4.5:1, qualifying large text at least 3:1, and required
non-text indicators/controls at least 3:1 against relevant adjacent colors.
Use the exact applicable exceptions rather than assuming every border needs
identical treatment. Targets follow [WCAG 2.2 guidance](https://www.w3.org/WAI/WCAG22/quickref/).
Only the implemented combinations in the linked measurement record have evidence;
unimplemented candidate pairs remain unqualified; names such as “accessible green”
are not evidence. Do not rely on opacity alone to create secondary text, disabled
states or focus indicators.

## Typography

System-first stacks: local system sans for interface/prose and local system
monospace for technical values/code. No remote-font request or new font package.
Typography styles describe presentation, not heading semantics.

| Semantic style | Candidate sizing / line height | Use and constraints |
| --- | --- | --- |
| Display | Fluid 2.25–3.5 rem; 1.15–1.25 | Short orientation heading; wraps without clipping or fixed height |
| Heading | Tiers around 1.5–2.5 rem; 1.2–1.35 | Document hierarchy chooses h1/h2/h3 independently of size |
| Body | 1–1.125 rem; 1.5–1.65 | Primary explanations and navigation; respect user base size |
| Caption/supporting | 0.875–1 rem; 1.4–1.6 | Secondary context, never critical qualifications hidden in tiny type |
| Technical | Around 1 rem; 1.5 | Selectable identifiers/code; wrap prose references and handle long examples |

The table describes broader candidates; implemented values are distinguished above.
Fluid sizing keeps rem-based bounds and must
remain responsive to user zoom/text enlargement; viewport-only type is unsuitable.
Aim for prose around 60–70 ch, narrower summaries around 40–50 ch, and wider
technical/specification regions only when useful. No justified body text or
forced one-line titles. Evaluate actual font fallback and glyph coverage before
adding a real language.

## Spacing and layout

Candidate rem scale: 0.25, 0.5, 0.75, 1, 1.5, 2, 3 and 4. Choose semantic usages
(component gap, stack gap, section gap, gutter) from the small scale; avoid a token
for every arbitrary measurement. Section rhythm may range 2–4 rem on narrow screens
to 4–6 rem on wide screens, subject to real content review.

The present shell retains its qualified 60rem maximum. For future wider content,
a centered page container around 72–80 rem maximum is a candidate, with fluid
inline gutters
around 1–2 rem. Reading containers retain the narrower prose measure. Begin with
one column; add two/three columns only when each remains readable. A candidate
card minimum around 18 rem is a starting point, not a requirement that overflows
320px. Grid children allow shrinking/wrapping; images preserve aspect ratio and
known dimensions. Reflow should stack content in meaningful DOM order rather than
rearrange the reading sequence with CSS.

Align headers, body sections and footer to shared container edges. Do not force
equal-height cards when it truncates text. Use block/inline alignment and logical
properties; test gaps with expanded text before fixing a breakpoint.

## Borders and elevation

Candidate radii: 0, 0.25 and 0.5 rem, with a pill reserved for an actually appropriate
small status/action treatment. Start with one subtle divider and one control-boundary
treatment. One light elevation level may distinguish a floating element when one
exists; no shadow stack, glass surface or speculative overlay family. Contrast,
focus and forced-colors checks apply to meaningful boundaries.

## Essential component contracts

Introduce components where the shell/content demonstrates reuse. These are planned
responsibilities, not files or a mandatory directory tree.

| Primitive | Semantic contract | Needed states / boundary |
| --- | --- | --- |
| Site header / footer | Named landmarks/navigation groups; identity link; eligible destinations only | Responsive arrangement and current route; server-rendered by default |
| Navigation disclosure | Ordinary anchor list and native/local disclosure behavior from the IA contract | Closed/open, focus-visible, keyboard dismissal; local client state only if needed |
| Container / section | Width/rhythm without inventing landmarks; name meaningful sections appropriately | Layout variants only; no artificial loading/error states |
| Button / link treatments | Anchor changes location; native button performs action | Default, hover, active, focus-visible; disabled/loading/error only for real actions |
| Card | Article/list grouping with meaningful heading; clear individual link or one named primary link | Hover/focus only when interactive; avoid nested interactive controls or whole-card click handlers |
| Information / callout | Structured supporting facts, limitations and explicit status text | Static informational state; alert/live region only for actual dynamic announcements |

Do not create complex forms, tables, mega-menus, dropdown frameworks, account
controls, commerce widgets or a variant factory before a real task needs them.
Native tables may present actual specifications without a general data-grid component.
Counter remains a qualification artifact, not a design-system requirement.

A button disabled with native disabled is unavailable and not keyboard focusable;
explain why when necessary. aria-disabled alone does not prevent activation.
Do not simulate a disabled anchor; omit unavailable navigation. Loading states
must retain meaningful labels, prevent accidental duplicate actions, and expose
status only when a real asynchronous operation exists. Errors belong next to the
failed action/input with recovery information; decorative primitives need neither
loading nor error states.

## CSS and implementation ownership

Use standards-based CSS/custom properties, logical properties and cascade layers
where ordering becomes clearer. Possible layers are base, tokens and components;
use the minimum useful set, not a generic theming engine. Global typography,
tokens and shell rules may remain global; CSS Modules are selective isolation
tools, not a universal requirement. No Tailwind, major UI framework or remote CSS.

Next owns routes, framework metadata and validated route context. ReScript owns
reusable UI behavior and typed view/message composition through the existing GenType
seam. Keep product decisions in application/domain code. UI resolves semantic
messages after public-safe projection; design tokens never become publication policy.
Server HTML is the default. No theme/language/global client provider is justified.

M1.2 may establish minimal shell-specific styles; M1.3 consolidates demonstrated
patterns into tokens/primitives. M1.2 must verify actual text/background contrast,
meaningful control boundaries, focus indicators and interactive states; token
consolidation in M1.3 cannot defer accessibility correctness (A11-02). This ordering
must not duplicate components or quietly begin a broad system during shell work.
The [approved M1.2 checklist](../engineering/milestone-1-plan.md#approved-m12-boundary-and-acceptance-checklist)
also governs eligible navigation and conditional disclosure qualification.

## Responsive and accessibility qualification

WCAG 2.2 AA is the target, not a conformance claim. Maintain current axe and
three-browser gates, and add proportionate behavior checks for the actual shell.
The [manual checklist](../engineering/accessibility-and-performance.md#manual-review-checklist)
remains necessary; a specification and zero axe violations do not complete it.

| Scenario | Required review on actual implementation |
| --- | --- |
| 320px narrow | One-column content; no page-level horizontal scroll or clipped links; all destinations usable |
| 375px mobile | Disclosure, touch targets, wrapped labels and long headings; portrait/landscape reading order |
| 768px tablet | Content-driven navigation transition; no hidden focused item or crowded intermediate layout |
| 1024px desktop | Full navigation only when it fits; coherent columns and keyboard order |
| 1440px large desktop | Bounded reading widths; purposeful spacing; no stretched prose or stranded controls |
| 200% text enlargement | Labels/headings expand without truncation, overlap or loss of action |
| 400% browser zoom at 1280px | Approximately 320 CSS px reflow; no two-dimensional page scrolling for ordinary content |
| Development en-XA and long content | Expanded messages, long words/IDs and multi-line buttons; machine values unchanged |
| Future RTL / forced colors / reduced motion | Logical layout and meaningful icon direction; retained focus/status semantics; nonessential motion removed |

Supply a keyboard-visible skip link to the main content. Preserve header/nav/main/footer
landmarks, meaningful heading order, accessible names and native controls. Test
Tab/Shift+Tab and Enter/Space/Escape where relevant, visible unobscured focus and
no hover-only information. Start non-sticky; any later sticky header must preserve
anchor and focused-target visibility.

Aim for 44×44 CSS px interactive hit areas; verify WCAG's 24×24 minimum or its
applicable spacing/exceptions for each actual target. Touch expansion must not
overlap adjacent links. Check text-spacing overrides (line 1.5, paragraph 2,
letter 0.12 em, word 0.16 em) without content/control loss. Review contrast,
screen-reader names/order, zoom/reflow, focus and disclosure behavior manually
on representative devices/assistive technology. Intrinsically two-dimensional
technical content may need its own labeled scrolling region; it must not force
the whole page to scroll horizontally.

## Internationalization and performance limits

Use the existing authoritative registry and typed Messages boundary; English /en
does not imply US, USD, formatting locale, market or tax context. Do not add a
language or change negotiation in this checkpoint. Development pseudo remains
non-public and excluded from production/discovery. Future selectors use only
public languages; metadata stays localized without an invented origin.

Reserve space for real translated labels rather than freezing English widths.
Keep URLs, IDs and canonical maturity codes unchanged. Mirror layout/directional
affordances where meaningful; keep logos, product images and machine facts stable.
No culturally specific decoration may imply market availability.

Keep primary content useful without JavaScript. Measure actual shell assets and
client boundaries before proposing performance budgets; avoid remote fonts,
third-party scripts and gratuitous hydration. Do not relax the qualified CSP to
accommodate a visual convenience. Deployment, sensitive forms and commerce each
need separate qualification.
