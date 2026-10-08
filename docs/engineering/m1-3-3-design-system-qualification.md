# M1.3.3 design-system qualification

## Scope, baseline and current status

**LOCAL QUALIFICATION COMPLETE — READY FOR M1.3.3 ADVERSARIAL AUDIT.**
This checkpoint independently inspects the accepted token/presentation foundation,
reviews exact-baseline three-browser evidence and performs bounded local probes.
No implementation deficiency requiring a code or test change was found.
The diff is documentation-only; no additional primitive, token, route or test is
introduced. M1.3.3 is not human-accepted or remotely qualified at its future commit.
M1.3 remains incomplete; M1.3.4 has not begun and M1.4 remains unauthorized.

Starting branch: `feat/m1-3-3-design-system-qualification`; HEAD/main/origin-main:
`e14416956296233844b833526ccc32d21b86f47e`, with clean worktree and staging, 0/0
ahead/behind. Fedora ARM64 runs the website Nix environment: Nix 2.34.7,
Node 24.21.0, pnpm 12.9.0 and just 1.51.0. Node/pnpm/just resolve through
`/nix/store`; no substitute toolchain or host-library modification is used.

The maintainer accepted [M1.3.2's no-extraction decision](m1-3-2-primitives-qualification.md#independent-audit-human-acceptance-and-main-qualification--october-8-2026-utc)
and authorized M1.3.3 on October 8, 2026 (UTC).
[ADR 0006](../adr/0006-css-and-design-system-foundation.md), the approved
[design-system contract](../design/design-system-specification.md) and
[M1 plan](milestone-1-plan.md) govern this qualification. The
[token record](m1-3-1-token-qualification.md) remains canonical for token values and
historical experiments; this record owns the independent qualification and limits.

## Coverage inventory and qualification decisions

This inventory preceded the decision to retain the unchanged implementation.
Passing a suite is evidence for its actual assertions, not every design requirement.

| Requirement | Direct evidence reviewed | Coverage / decision |
| --- | --- | --- |
| Token ownership/resolution | Entire stylesheet, definitions/reference graph and actual selectors | 43 referenced properties; no missing reference, cycle, fallback or raw palette reference outside semantic definitions |
| Text/actions/focus contrast | Computed-style contrast scenario, its parser/state setup, independent arithmetic | 24 pairing/state results per engine in accepted CI; relevant text >=4.5:1 and essential non-text >=3:1; no redundant scenario |
| Current-page/link eligibility | Real identity href, aria-current, underline, focus and no-navigation assertions | Existing language-root surface qualified; route-aware handling still required before a child route |
| Responsive/type/spacing | Five-width and 200% root-font/text-spacing scenario; fresh artifact probe | Automated reflow/visibility and control bounds covered; native browser zoom remains manual |
| Keyboard/native semantics | Production JS-disabled skip scenario, activation/focus tests; fresh forward/reverse probe | Existing all-engine forward/Enter/Space coverage; reverse traversal additionally observed in local Chromium/Firefox, not newly verified in WebKit |
| Forced colors/reduced motion | Media-emulation scenario and actual CSS overrides | All-engine automated evidence; actual OS/device/assistive technology remains manual |
| Development pseudo expansion | Historical actual dev-browser experiment; current language/messages source | Prior Chromium/Firefox evidence retained; no fresh dev session or RTL qualification |
| SSR/hydration/security/withholding | Production scenarios, exact main logs and existing artifacts | Qualified baseline retained; no fresh production build or server suite claimed |
| Visual consistency | Accepted M1.3.1 source comparison, current compiled CSS and A13-03 limits | No presentation source change; no new screenshot/parity machinery justified |
| Screen reader/native zoom/device | Manual checklist | Outstanding human evidence, not inferred from axe, viewport or browser emulation |

## Tokens, colors and interaction-state contrast

The 43 authored properties remain five raw palette values, thirteen semantic colors,
nine typography/measure values, seven spacing steps, two layout values and seven
geometry/border/focus values. All have references. Raw ink/paper/evergreen/sage/white
values feed semantic roles only. Selectors use understandable text, surface, action,
link, divider, essential boundary and focus roles; equal present values do not erase
those separate responsibilities. Harvest and unused status/theme families remain deferred.

The existing contrast regression samples actual computed colors, asserts `:active`
before active measurement and asserts the named focused element before measuring
its focus indicator. It emits 24 results: six page/header/footer/identity text
results, six action-label/boundary results, six controlled generic-link states,
one skip-text result and five focus-adjacency results. The temporary anchors are
removed in `finally` before traversal; they qualify generic CSS, not published
navigation. The real identity and skip anchors are independently checked.

Fresh independent opaque-sRGB arithmetic reproduces the following ratios from
the exact stylesheet values. Rendered state coverage comes from the unchanged
computed-style assertions passing on all three engines in baseline CI; this
checkpoint does not claim a fresh 24-result browser run.

| Implemented consumers / states | Foreground / background | Ratio | Applied threshold |
| --- | --- | --- | --- |
| Page text; generic-link hover/active on page | Ink #152B30 / paper #F7F8F4 | 13.86:1 | 4.5:1 text |
| Header/footer text; identity default/hover/active; generic-link hover/active on surface | Ink / white #FFFFFF | 14.79:1 | 4.5:1 text |
| Generic link default on page | Evergreen #236D58 / paper | 5.79:1 | 4.5:1 text |
| Generic link default on surface | Evergreen / white | 6.18:1 | 4.5:1 text |
| Action label default | White / evergreen | 6.18:1 | 4.5:1 text |
| Action label hover/active | White / ink | 14.79:1 | 4.5:1 text |
| Essential action boundary default; hover/active | Evergreen / paper; ink / paper | 5.79:1; 13.86:1 | 3:1 non-text |
| Skip text | Ink / sage #DDEBE4 | 12.03:1 | 4.5:1 text |
| Skip focus against header / skip fill; identity focus against header | Ink / white; ink / sage | 14.79:1; 12.03:1 | 3:1 non-text |
| Main and Counter focus against page | Ink / paper | 13.86:1 | 3:1 non-text |

The parser linearizes sRGB at 0.04045, applies luminance weights
0.2126/0.7152/0.0722 and uses the lighter/darker ratio with 0.05 offsets.
Unrounded values decide pass/fail. It accepts computed opaque rgb/rgba only and
rejects transparency/unsupported spaces; it does not implement alpha compositing
or wide-gamut conversion. Its current opaque colors are within that scope.

Focus remains a 3px outline at 4px offset. Counter/main indicators neighbor paper,
not the button fill. Skip focus is checked against both its fill and header.
Sage dividers are decorative, not essential control boundaries. Identity's
emphasized underline conveys current state without color alone.
Forced-colors checks use resolved Highlight/ButtonText system colors rather than
pretending the fixed-palette ratios describe every user's high-contrast palette.

## Typography, responsive and keyboard results

System sans, 1rem body at 1.6 line height, 1.25rem identity, 1.5rem h2, fluid
1.75–2.75rem h1, 68ch prose and the 60rem shell remain unchanged. Logical gutters,
header wrapping, section rhythm, intrinsic button wrapping and rem-based geometry
retain user scaling; there are no fixed one-line labels or external fonts.
Global section/button defaults cause no present defect. Review their scope when
new nested sections or different controls actually arrive.

A bounded in-memory HTTP probe served the existing production HTML and compiled
CSS with JavaScript disabled, using installed Playwright 1.64.0:
Chromium 156.0.8078.4 and Firefox 157.0 on local Fedora ARM64. It did not start Next,
build files, create a permanent script or use substitute browsers.
Each browser and the ephemeral server were closed in `finally`; the probe exited 0.
It is an artifact/native-behavior probe, not fresh Next HTTP/hydration qualification.

| Viewport CSS px | Container width, Chromium / Firefox | Left margin, Chromium / Firefox | Observation |
| --- | --- | --- | --- |
| 320 | 288 / 288 px | 16 / 16 px | No page overflow; Counter bounds within viewport |
| 375 | 343 / 343 px | 16 / 16 px | Same |
| 768 | 706.55 / 706.57 px | 30.72 / 30.72 px | Same; subpixel rounding differs |
| 1024 | 960 / 960 px | 32 / 32 px | Same; 60rem maximum |
| 1440 | 960 / 960 px | 240 / 240 px | Same; centered bounded measure |

Both engines independently passed first Tab to the visible skip link, Tab to
identity, reverse Tab to skip, Tab to Counter and reverse Tab to identity.
Native Enter on skip focused main; Tab then reached Counter and reverse Tab
returned to identity. The named skip/identity focus targets were asserted before
reading their 3px outline, 4px offset and full viewport bounds.
The identity retained /en and aria-current=page. The landmark order was
header, main, footer; existing HTML has one main and h1/h2/h2 hierarchy.

Baseline production tests additionally prove JS-disabled skip navigation, Counter
hydration, native Enter/Space increments and retained focus. Their reflow scenario
covers 320/375/768/1024/1440 widths and a 320px viewport with 200% root text plus
WCAG text-spacing overrides. Those assertions check overflow, visibility, focused
control position and activation; they do not establish absence of every possible
overlap or actual browser-chrome zoom. The new reverse probe is not a replacement
for manual keyboard/screen-reader review.

## Forced colors, reduced motion and internationalization

The unchanged all-engine media-emulation scenario checks active forced-colors and
reduced-motion queries, no animations/transitions, keyboard skip/Counter behavior,
Highlight focus, ButtonText 2px control boundaries, Enter/Space and retained focus.
The CSS leaves forced-color adjustment enabled; no decorative motion exists and
no reduced-motion override is necessary. Emulation is not actual device/OS testing.

The [historical pseudo experiment](m1-3-1-token-qualification.md#local-qualification--october-8-2026-utc)
used the real development /en-XA page in Chromium/Firefox at five widths with
enlarged text/spacing, native skip/Counter, current identity, noindex/nofollow,
unchanged IDs/PREVIEW and withheld-data exclusion. Current registry, messages and
layout still enforce that separation; no fresh development browser session is
claimed. Production CI rejects pseudo and unsupported routes; public static params
contain only en. Language still implies no formatting locale, country, market,
currency or tax jurisdiction. Logical CSS is future-ready intent, not RTL qualification.

## Cross-browser assessment and visual consistency

[Main run 37797004595](https://github.com/adarj/grocery-pos-website/actions/runs/37797004595)
was independently verified: push to main, exact SHA
`e14416956296233844b833526ccc32d21b86f47e`, attempt 1, successful job/steps.
GitHub verifies the commit signature. Ubuntu 24.04 x86_64 passes repository Nix
tools, frozen install, lint/format, 15 pure tests, seven supervisor cases,
canonical typecheck/build and Chromium/Firefox/WebKit **10/10 each, 30/30**.
One worker, zero browser retries and successful source cleanliness remain enforced.

The ten scenarios per engine are four framework/routing scenarios, two axe/keyboard
scenarios, three shell contrast/reflow/media scenarios and one security-header
scenario. The diagnostics fixture rejects console/page/hydration/CSP errors.
Named focus checks, explicit active-state checks, fixture cleanup and actual
adjacent surfaces provide meaningful coverage. Responsive visibility assertions
and synthetic links have the limits stated above; no important demonstrated
failure requires another permanent test or a changed assertion.

CSS, shell/proof source, shell tests and browser configuration are byte-identical
to accepted M1.3.1 commit `61784aec86d53f35aa839c9ef7fce780d3cd4805`.
Current compiled CSS retains those token definitions/consumers. No unexpected
presentation change is present and no fresh visual-equivalence run is claimed.
A13-03 remains a historical NOTE: its fourth parity snapshot did not assert the
focused target. That limitation is preserved; this checkpoint's named keyboard
probes do not retroactively strengthen the old parity evidence.

## Architecture, security and performance preservation

**Next routes. ReScript models. React presents. APIs connect.** The Next layout/page
validate typed language context before rendering the server ReScript shell/proof.
Publication projection precedes localized presentation; fixtures remain explicitly
fictional and default withholding is preserved. No commercial authority is added.

Existing artifacts, inspected without rebuilding, contain static /en and no
generated pseudo page. The sole ReScript application client reference remains
ui/qualification/Counter.res.mjs; it receives resolved labels, not server catalogs
or publication policy. Neither withheld sample identifier appears in 25 inspected
public HTML/RSC/client-JS artifacts. Authored source uses no raw-HTML injection,
remote scripts/fonts, privileged browser data or provider SDK. HTML script sources
are same-origin framework chunks.

CSP/security configuration is unchanged. Baseline response tests enforce page,
redirect and 404 headers and reject production unsafe-eval/WebSocket allowances;
browser diagnostics qualify hydration under the static-compatible policy.
Inline script/style compromises and sensitive-surface review triggers remain in
the [security baseline](security-baseline.md). No deployment or HTTPS/HSTS claim
is made. Static content, minimal client ownership and no new dependencies preserve
the present performance properties; real-world Core Web Vitals and deployment
behavior have not been measured here.

## Defects, validation and outstanding manual qualification

No runtime, styling, token or test defect was substantiated; no implementation
correction was needed. Stale M1.3.2 approval/CI and M1.3.3-not-started summaries
are reconciled with the human instruction and verified main evidence.
Dependency, lockfile, Nix, CI, security, routing, application and test files stay
unchanged. Canonical build/browser suites are not rerun for this documentation-only
diff. Validation comprises source/artifact inspection, independent color arithmetic,
the bounded local probe, links/anchors, whitespace and scope/generated-state hashes.

Documentation validation passes: 39 Markdown documents, 249 local links and 24
heading-anchor references, with no errors. Tracked/new-document whitespace checks
pass, including git diff --check. Scope hashes show only documentation changes;
all 561 inspected generated/build artifacts remain byte-identical. Nothing is
staged and no diagnostic output or permanent probe file was left in the repository.

Human review still needs appropriate screen-reader names/reading/status behavior,
native browser 400% zoom, real device/touch use, focus visibility/overlap and
text-spacing review. The [manual checklist](accessibility-and-performance.md#manual-review-checklist)
remains governing. No full WCAG 2.2 AA conformance, screen-reader/device or general
RTL support, production hosting, HTTPS/HSTS, product readiness, security certification
or real-world Core Web Vitals is asserted. Fedora ARM64 WebKit native runtime stays
unqualified; the supported Ubuntu baseline provides WebKit evidence.

## M1.3.4 audit handoff and remaining M1.3 acceptance

The subsequent adversarial audit should challenge the mapping from current code
to inherited evidence, contrast adjacency/state sampling, controlled-link limits,
reverse-probe scope, unchanged visual boundaries and explicit manual nonclaims.
Do not reopen the human-accepted no-extraction decision without concrete new
evidence. M1.3.4 has not started and requires separate authorization.

The exact eventual signed M1.3.3 commit must pass the unchanged Ubuntu
Chromium/Firefox/WebKit matrix with one worker and zero retries. Before M1.3
acceptance: resolve substantive audit findings, record human review and the
disposition of outstanding manual requirements, qualify the reviewed feature
commit, perform human integration and main CI, and obtain explicit maintainer
acceptance of the measured system/inventory. None occurs merely because the
baseline suite passed. M1.4 publication scope still requires separate authorization.

Future consumers must justify new component APIs or states and qualify actual
contrast/keyboard/reflow/client boundaries. Make identity current-page composition
route-aware before the first additional public child route. The approved pinned
ESLint 9.39.5 maintenance exception retains all controls, targeted-update review
and its January 8, 2027 maximum review date.
