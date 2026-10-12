# M2.3 — Information Architecture & Experience Qualification Plan

## Status, authority and accepted baseline — October 11, 2026 (UTC)

**M2.3: DOCUMENTATION/PLANNING AUTHORIZED; CANDIDATE UNDER REVIEW, NOT ACCEPTED.**
Authority is the maintainer's instruction, “Codex — M2.3 Information Architecture &
Experience Qualification Plan”, received October 11, 2026 (UTC). It permits
architecture, experience and qualification planning and necessary documentation
status reconciliation. It grants no public copy, route, dependency, asset,
application implementation, qualification execution or deployment authority.
**M2.4–M2.6: NOT AUTHORIZED FOR EXECUTION.**
**Milestone 2 overall: IN PROGRESS, NOT FORMALLY ACCEPTED.**

Initial read-only verification found clean branch `main`, empty index, no
untracked files, and HEAD/main/origin/main all
`2f9e522ec0fc2a4eb729b93e013c2fbd5cae60d0`, ahead/behind 0/0.
Subject: `docs(web): record formal M2.2 acceptance`; parent:
`55c7f05862c45b85abec9f5a55f88ec9995f962b`.
GitHub reports a valid signature; the local commit payload and signature match
its verified values. [Exact-SHA run 38112225630](https://github.com/adarj/grocery-pos-website/actions/runs/38112225630)
completed SUCCESS, push, attempt 1. It qualifies the integrated M2.2 acceptance
record, not this new planning candidate; no fresh technical qualification is run.

[M2.1](../engineering/m2-1-acceptance.md) is formally accepted and its repository
closeout is verified. [M2.2](../engineering/m2-2-acceptance.md) is formally
accepted and administratively closed. The maintainer supplies the subsequent
retrospective audit disposition:
**PASS — M2.2 FORMAL ACCEPTANCE RECORD REPOSITORY CLOSEOUT VERIFIED.**
**M22-ACC-N01 — NOTE** records that the separate acceptance-record audit occurred
after signed integration, rather than before it. This is a nonblocking procedural
observation, not a present application defect or an invented pre-integration review.

The M2.2 human decision remains:

> I formally accept M2.2's completed documentation and editorial review while explicitly deferring public disclosure and implementation.

**PUBLIC DISCLOSURE: EXPLICITLY DEFERRED.**
**ARTICLE PUBLICATION: NOT APPROVED.**
**WEBSITE IMPLEMENTATION: NOT AUTHORIZED.**

## Governing contracts and evidence labels

The approved [information architecture](../product/website-information-architecture.md),
[design system](design-system-specification.md), [visual direction](visual-direction.md)
and [ADR 0006](../adr/0006-css-and-design-system-foundation.md) remain governing.
The [M2 plan](../engineering/milestone-2-plan.md) owns chronology and the proposed
roadmap; [M2.1 readiness](../product/m2-1-marketing-content-readiness.md) and
[experience study](m2-1-marketing-experience-study.md) own accepted planning inputs.
[Milestone 1 acceptance](../engineering/milestone-1-acceptance.md) and
[M1.5.1 methodology](../engineering/m1-5-1-qualification-baseline.md) retain accepted
scope, evidence limitations and future triggers.

Use three distinct labels in review: **source-inspected** describes files at the
baseline; **accepted evidence** describes earlier recorded execution or human
observations within their scope; **proposed requirement** describes unbuilt
behavior and future checks. Source inspection does not establish runtime results.
The tables below identify these boundaries; no new layout, route or test is executed.

The approved M1.1 target sitemap remains a specification, not a required page count.
M1.3's no-extraction, M1.4's no-expansion/M1.4.3 deferral, and M1.5.3's accepted
**A — NO CORRECTION JUSTIFIED** remain valid historical decisions. This plan narrows
a possible future slice without replacing them or amending an ADR.

## State A — Current approved public surface

Source links below establish implementation facts; the
[accepted homepage record](../engineering/m1-4-2-homepage-qualification.md) and
[M1 acceptance](../engineering/milestone-1-acceptance.md) own qualification.

| Concern | Source-inspected baseline and retained expectation |
| --- | --- |
| Routes and language | [Page](../../app/[lang]/page.tsx) validates language through the [Next adapter](../../src/adapters/next/language.ts) and renders the ReScript homepage. The [registry](../../src/i18n/Language.res) exposes only English publicly. Exact unsupported identifiers produce Next not-found; development alone permits `/en-XA`. |
| Root selection | [Proxy](../../proxy.ts) handles bare `/` with a temporary 307 to the public language root, preserves query parameters, and emits no-store/Vary. With one public language it selects English; quality-weighted negotiation is a future second-language gate. |
| Eligible destination set | The only public content slice is `/en`. [Shell](../../src/ui/EngineeringShell.res) has a skip anchor to `#main-content` and named home identity link to the language root. No primary navigation landmark, mobile disclosure, search, language selector or other destination is rendered. |
| Current identity | The shell unconditionally assigns home `aria-current="page"` under its single-root assumption. Existing CSS emphasizes the identity underline. This is accepted for State A; copying it unchanged onto a child page would misidentify the current page. |
| Structure | [Homepage](../../src/ui/Homepage.res) owns one focusable main target with `id="main-content"`, four sections, one H1 and three H2 headings. The skip link is first in the shell. There is a banner; no footer/contentinfo landmark is currently rendered. Retained footer CSS/messages are not rendered footer evidence. |
| Exact content | Only the [approved C01/C02/C04/C05 subset and metadata](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc) may appear. Typed [Messages](../../src/i18n/Messages.res) owns the existing text/title/description. C03 and broader assertions remain withheld; approval is not of whole claim categories. |
| Metadata | [Language layout](../../app/[lang]/layout.tsx) owns HTML language/direction, public static parameters and current homepage title/description. Nonpublic language metadata requests no indexing/following. No production origin, canonical, hreflang, sitemap, structured-data or social-metadata expansion is authorized. |
| Rendering | The page/shell source imports no authored client island. Accepted evidence establishes exact content and native navigation with JavaScript disabled. Next framework JavaScript still exists; this is not a zero-JavaScript claim. |

Retain the homepage unchanged during M2.3. The
[existing browser assertions](../../tests/e2e/framework-smoke.spec.ts) explicitly
expect no contentinfo/navigation and only two links. They must be reviewed against
any separately approved future navigation change, rather than silently discarded.
A footer or menu is not required merely because its styling or target IA exists.

## State B — Conditional first P05 resource

The accepted internal article is **M22-C12-A01-R1**, working title
**Evaluating Grocery POS Systems: Checkout Continuity, Migration, and Operational Risk**,
SHA-256 `1b17142f74d05747dd4ed130dac29c638df20faeb846190e4dcabd5356663c05`.
The [exact-candidate contract](../product/m2-2-exact-content-disclosure-review.md#exact-editorial-candidate-and-identity)
defines 7,840 UTF-8 bytes covering proposed title, metadata, body, source links
and scope notes. The bytes remain unchanged. Identity and accepted internal review
do not approve publication or prove Grocery POS satisfies the article's criteria.

A possible route would be a Resources descendant under `/[lang]`; **no concrete
URL or slug is selected or approved here**. P02–P08 remain withheld, including P05.
Unknown product maturity remains UNVERIFIED / UNRESOLVED. No owner, byline,
publication date, contact channel, commercial CTA or capability status is invented.

| Question | Minimum proposed model, conditional on later decisions |
| --- | --- |
| Resources index | One reviewed article does not establish an index need. Defer an index until a useful approved corpus or evidenced findability task justifies it. Do not create a placeholder ancestor. |
| Entry from home | A single contextual native link can be sufficient if its exact label, placement and destination are separately approved. It would be a new homepage/navigation disclosure decision; M2.3 approves no change to the current homepage. Without that decision, the entry/discovery proposal remains withheld. |
| Primary navigation | Retain the identity-only header for this small eligible set. No five-item marketing menu or mobile disclosure is justified. Reassess only when actual eligible destinations cannot be served clearly by contextual links. |
| Return to home | Keep a named identity link to the selected public-language root. An additional in-content return link is optional only when it improves orientation; its exact label/placement also requires approval. Ordinary anchors retain browser back and new-tab behavior. |
| Current page | Home identity is current only on home. On the article it remains a home link without `aria-current="page"` or a misleading current-page cue. The article H1/title identifies the page. If a link exactly representing the article appears in navigation, only that exact destination may be marked page-current, with a non-color cue. Do not mark a Resources ancestor as the current page. |
| Breadcrumbs | Omit for the first resource unless actual hierarchy helps the reader. If approved later, use a named navigation landmark, a real home link and current non-link label; never link an unimplemented Resources index. An organizational path does not itself require a breadcrumb. |
| Related and source links | Related internal links derive only from implemented, qualified, publication-eligible destinations. An empty group is omitted. Separately approved source links are native citations, not partner badges, endorsements, third-party runtime imports or sales destinations. |
| Source/review presentation | Keep qualifications and jurisdiction notes near the statements they qualify. A source-access date is not the article's publication date. Display review/byline/maintenance fields only after authoritative facts and exact presentation are approved. No authority is implied by an organization logo. |

The proposed contextual model satisfies the accepted IA's eligible-destination
rule without requiring its entire target navigation. If future link density
genuinely needs responsive disclosure, the original
[IA disclosure contract](../product/website-information-architecture.md#navigation-contract)
still applies: native anchors, in-flow nonmodal behavior, named state, normal
keyboard order, usable no-JS fallback and safe focus at closing/breakpoint changes.
An enhanced disclosure needs separate client authorization and interaction proof.

## State C — Later expansion readiness contracts

These are deferred inputs, not page designs, route registrations or authorizations.

| Future area | Required distinct substance and authority before design/implementation |
| --- | --- |
| Platform / Solutions | Versioned product/workflow/market evidence, applicable maturity and limitations, exact claim approval; intended store segments are not proof of fit or scale. |
| Hardware | Exact model/firmware/software/configuration qualification, truthful compatibility/certification scope, sourcing facts and any asset rights. |
| Company / Contact | Verified organization/identity facts, genuine owned channel, privacy and accurate service expectations; sparse copy does not waive verification. |
| Resources | A maintained, approved editorial corpus and real retrieval need before index/search/related-content expansion. |
| Documentation / Developers | Verified versioned tasks or public contracts, access/authority boundaries, maintenance owners and disclosure approval; no internal endpoint examples exposed incidentally. |
| Support / Accounts / Pricing / Commerce | Real service/offer/entitlement facts plus separately authorized identity, payment, privacy, server authority and operational qualification. |
| Languages / RTL | Separate real-language scope, typed messages/registry, standards-based negotiation and language-specific layout/metadata/assistive-technology qualification. |

The [M2.1 page-readiness register](../product/m2-1-marketing-content-readiness.md#p01p08-and-target-page-readiness)
retains P identities and dependencies. No quota, empty destination or fictional
customer, demo, support or commercial availability claim follows.

## Conditional editorial experience and first-party CSS

The following anatomy is an **internal structural proposal**, not approved public
labels or prose. An engineer must map the approved article into semantics without
adding, dropping or strengthening its wording, metadata, references or qualifiers.
The internal candidate's administrative labels/hash instructions are not automatically
page copy; exact public presentation must be reviewed separately.

| Layer | Proposed composition and constraints |
| --- | --- |
| Shell / main | Existing non-sticky identity and native skip link; one main target per page, with a self-contained article inside it. Keep the focusable main target and stable skip ID; do not nest another main or give every section an artificial landmark. |
| Opening | One H1 from the approved title, followed by the approved introduction. Do not invent a standfirst, claim badge, expert byline, date or commercial CTA to fill a template. |
| Body | Preserve approved section order as H2 sections; use H3 only for actual subordinate content. Paragraphs and semantic lists express the practical questions. Keep technical terms and identifiers selectable, readable and safely wrapping. |
| Evidence | Maintain source/scope notes in the reading flow, with clear named links and adjacent qualifiers. Distinguish editorial recommendations from sourced facts; no decorative callout may imply a new official requirement. |
| Ending | Existing approved conclusion and references; only genuinely eligible onward links if separately approved. No empty footer groups, teaser for withheld pages, newsletter, demo or contact promise. |
| Reading / responsive | One column, coherent DOM order, calm spacing and bounded prose on large displays; no sidebar, sticky table of contents, decorative grid or fixed-height text box without demonstrated need. |

Source inspection of [current CSS](../../app/globals.css) finds the accepted
43-property foundation, system sans-serif, rem-based text, logical spacing,
60rem shell container and 68ch paragraph measure. It supplies section rhythm,
wrapping, link and focus patterns. These values are baseline facts, not proof of
an unbuilt article. Start with those roles; ensure lists/source notes share a
comfortable measure and do not stretch across desktop width. Article nesting may
need a bounded selector adjustment because the current first-section rule targets
direct main children; list rhythm/measure may likewise need local rules. Review
actual markup and content before adding a role or extracting a primitive.

At 320/375 CSS px, keep gutters, wrapped title/links and indented questions usable.
At 768/1024, keep the same meaningful reading sequence; at 1440, retain prose
measure rather than stretching text. Native enlargement, zoom and user spacing
must tolerate longer lines/headings. Readable extra wrapping is not clipping.
Text-only is sufficient. Future truthful diagrams/imagery require evidence,
rights, disclosure, alternatives and qualification; no asset slot must be filled.

| Technology | Planning disposition |
| --- | --- |
| First-party CSS / custom properties | Retain ADR 0006 and semantic tokens as the source of truth. Existing HTML/CSS capabilities are sufficient for the proposed text resource; new consumers still need qualification. |
| CSS Modules | Selective local isolation only if demonstrated by the actual authorized composition; not a mandatory new stylesheet family. |
| shadcn/ui / Tailwind | Deferred pending concrete component need, explicit architecture/dependency/interoperability review and separate authorization. No exception to ADR 0006 is made. |
| Sass | Deferred; no demonstrated compile-time requirement. No installation or token duplication. |
| Rive | Deferred; no approved interaction/storytelling need. A later use case needs runtime, fallback, reduced-motion, accessibility, performance, CSP and licensing review. |

**No new technology, generic component library or client interaction is justified
by this conditional text article.** This is a planning judgment, not an integration
test or permanent prohibition. Retain **Next routes. ReScript models. React
presents. APIs connect.** Follow the [source layout](../architecture/source-layout.md):
thin validated Next entrypoints/metadata seams, typed ReScript publication and
presentation boundaries, server-first React output; no client router/global provider.

## Route, metadata and discovery implementation contract

**Before the first additional public child route, implement and qualify route-aware
current-page identity and navigation semantics.** This plan specifies the invariant,
not a framework mechanism. The shared language layout currently receives language
and children, not explicit child-page identity. A future authorized engineer must
inspect version-matched installed Next documentation, select a server-first route
context/composition seam, and verify it on home, direct child requests and framework
navigation. Do not assume a shared layout automatically knows its descendant or
solve this by adding a global client pathname provider.

Keep exact registry validation at each consequential route/metadata entry boundary,
typed `PageProps` / `LayoutProps`, and the existing not-found behavior. English
`/en` is the only public language. `/en-XA` is controlled development
qualification only; exclude it from production access, links, static public
enumeration and discovery. Stress content is a test input, not a second language
or new public assertion.

Current layout metadata is homepage-specific. A future article needs separately
approved route-specific title/description and qualified inheritance so it cannot
silently repeat the homepage's description. Approve link labels and any source,
review/publication fields too. No new metadata is emitted by M2.3.

A destination becomes discoverable only after exact content/metadata/link approval,
assigned maintenance, authorized implementation and applicable qualification;
release/deployment approval remains a separate gate. Filter contextual links,
related entries and any later sitemap/index/search by that eligibility. Do not emit
withheld article text through HTML, RSC, metadata, generated static files or prefetch.
Production canonical origins, hreflang/sitemaps and indexing operations require
their separately authorized origin/deployment scope; no hostname or sitemap file is
invented. No route is implemented during this planning checkpoint.

Native links must work on direct load, browser back/forward and new-tab opening,
with and without JavaScript. Preserve skip-to-main focus, exact page-current
semantics, names and landmarks across home/child navigation. No client island is
needed for those requirements. If a genuine interaction later proves necessary,
separately authorize it and restore live production-browser hydration, activation,
state-update, keyboard and retained-focus coverage **before introduction**.
Retained Counter SSR fixtures establish none of those live properties.

## Future accessibility qualification matrix

**All cases below are proposed; none was executed during M2.3.** WCAG 2.2 AA remains
the target, not a certification. Apply to the exact authorized homepage/navigation
changes and candidate article; existing homepage PASS does not qualify a new page.

Use the [accepted manual-evidence fields](../engineering/m1-5-1-qualification-baseline.md#common-manual-evidence-record)
for every case: exact source SHA and running-build/artifact identity, date/operator,
URL/mode, OS/CPU/device, browser/AT versions, viewport/orientation/DPR, native zoom,
font/theme/input settings and JS state. Retain expected versus observed results,
PASS/FAIL/UNVERIFIED, settings/restoration, diagnostic records and agreed screenshot
or transcript locations outside source. Proposed tools below are execution layers,
not permission to install, deploy or collect evidence now.

For **every row**, missing required coverage is UNVERIFIED, not PASS. The maintainer
must explicitly decide new evidence collection, separately authorized correction,
scope deferral or a bounded limitation before future qualification acceptance.
Existing Windows/provenance limitation acceptance does not automatically waive new
coverage. A demonstrated loss of access must be reported as a finding, not hidden
by a coverage limitation.

| Case / trigger | Expected observable result; failure condition | Layer / tools and human observation | Evidence and environmental limits |
| --- | --- | --- | --- |
| A01 — New route/content | One meaningful H1; logical headings, one main, valid language, distinct title, named links and complete approved text/qualifiers. Missing content, misleading names or landmark/current-page errors fail. | Production DOM/response and whole-page axe in Chromium/Firefox/WebKit; human semantic review. | DOM/metadata, axe violations/incomplete checks and review notes. Axe cannot establish all reading/order/usability properties or conformance. |
| A02 — Widths 320, 375, 768, 1024, 1440 CSS px | Full content and destinations visible/reachable; no ordinary-content horizontal scrolling, overlap or clipped links; bounded desktop measure. Readable heading wrapping passes. | Three-browser viewport assertions plus human visual inspection at all listed widths; physical mobile portrait/landscape review for touch. | CSS viewport/DPR, scroll and bounds diagnostics, observations. Desktop emulation is not physical-device proof. |
| A03 — Native zoom/reflow | Actual 400% browser zoom from a 1280 CSS-px content viewport at 100%, approximately 320 CSS px after zoom; readable content and usable navigation without two-dimensional scrolling. Loss/obscured focus fails. | Human browser-chrome zoom on supported actual browsers; automated 320px reflow complements it. | Record pre/post viewport, zoom, browser/OS and focused-target visibility. CSS viewport resizing or deviceScaleFactor does not execute native browser zoom. |
| A04 — 200% text enlargement | Text and controls enlarge without truncation, overlap, hidden action or reading loss. Check relevant narrow and intermediate widths. | Human actual text/font setting in a browser supporting text enlargement; controlled 200% root-font stress in automation as supplementary evidence. | Capture setting/computed sizes and scope. Page zoom alone is not evidence of the separately planned text-only condition. |
| A05 — User text spacing | Simultaneously tolerate line height 1.5 times font size, paragraph spacing 2 times, letter spacing 0.12em and word spacing 0.16em. All text, lists, sources and links remain accessible. | Controlled temporary CSS overrides plus human visual/keyboard review; also stress combined enlargement/narrow cases selected from actual layout risk. | Computed values, width/zoom, overflow and actual observations; restore settings. Distinguish spacing-only from combined tests; these are user overrides, not required default styles. |
| A06 — Keyboard and focus | Tab/Shift+Tab order follows reading; Enter activates links; skip focuses main; indicators visible/unobscured at top/bottom and after navigation. No trap or hidden focus. | Production three-browser keyboard assertions with JS enabled/disabled; human traversal/scroll/back/new-tab review. | Active element, focus styles/bounds, URL and observation sequence. Do not require Space/Escape for ordinary links; add disclosure-specific keys only if that feature is approved. |
| A07 — Screen reader | Correct home versus child naming/current state, headings/landmarks, article reading order, lists, citations and link purposes; no false home-current announcement on child. | Actual VoiceOver/Safari and an applicable Windows screen-reader/browser combination selected by maintainer; human heading/landmark/link and reading traversal. | Exact AT/OS/browser/build, settings and action/utterance transcript. Browser accessibility snapshots supplement rather than replace AT output; unavailable combination stays unverified. |
| A08 — Contrast and targets | Actual text/link/focus surfaces meet applicable contrast and target requirements; current/link meaning survives without color alone; touch targets do not overlap. | Computed opaque color/state checks plus human visual/touch/focus assessment against the design-system contract. | Pair/state measurements and actual target spacing/exception rationale. Synthetic button probes do not prove article controls; qualify only real links/controls. |
| A09 — Genuine high contrast | Real Windows forced-colors retains content, link distinction, identity/skip focus and any meaningful boundaries; record macOS Increase Contrast separately. Missing links/focus or color-only meaning fails. | Genuine OS settings/browser human sessions; automated forcedColors media checks supplement. | Exact Windows theme/browser/device and observed substitutions; distinct macOS evidence. Emulation and macOS observations cannot establish Windows compatibility. |
| A10 — Reduced motion | No nonessential motion or motion-only information; native actions remain comprehensible. If later motion is authorized, verify applicable pause/stop and reduced-motion fallback. | Media emulation/computed styles plus human actual reduced-motion OS setting. | Settings and actual observed behavior. No animation is proposed; this does not authorize one or require a synthetic animated fixture. |
| A11 — Development pseudo / long content | Exact development pseudo validation; expanded labels/headings, long identifiers/URLs and lists wrap without loss at representative widths/spacing. Production pseudo and unsupported identifiers remain unavailable. | Actual development route/server review and proportionate production route/registry assertions after authorization. | Mode/build and transformed-human versus unchanged-machine-value checks. No public pseudo discovery, invented translation or publication of stress strings. |
| A12 — Conditional new client/disclosure | Only if separately approved: working hydration, activation/state, native keyboard, focus retention/return and safe breakpoint/closing behavior; content/navigation remains useful without JS. SSR-only evidence fails to establish interaction. | Actual production browser interaction tests in three engines plus human relevant AT/keyboard review. | Action/state/hydration/focus evidence and console/CSP errors. Currently not applicable to the text-only proposal; future feature triggers renew coverage. |

W3C's [Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html),
[Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) and
[Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
explanations were inspected October 11, 2026 (UTC) solely to verify these planning
conditions. They are informative guidance, not a site audit. Any genuinely
two-dimensional future material needs a justified local treatment; it cannot
excuse unreadable prose. No such material is needed for the current text proposal.

## Future performance, security and public-output checks

These are future gates for a separately authorized slice, not fresh measurements.

| Area | Proportionate future evidence and failure/disposition |
| --- | --- |
| Build and regression | Existing Nix/frozen workflow, canonical `just typecheck`, local `just check` and supported Ubuntu x86_64 `just ci`; keep lint/format/unit/supervisor/source-cleanliness gates. Review affected homepage counts and add meaningful article/navigation tests. New scenario counts must be reported honestly; current 30-test history is not a fixed future quota. |
| SSR / resources | Exact approved content, citation links and return navigation useful without JS; inspect prerender/output and client-reference graph. Enumerate actual fonts/images/scripts/requests/origins. Expect no new authored island, remote font, media or third-party runtime from this proposal; verify rather than assert zero framework JS. |
| Performance | Reuse the [accepted production protocol](../engineering/m1-5-1-qualification-baseline.md#performance-measurement-protocol--proposed-not-executed): exact build/host/browser, equivalent cache/CPU/network/viewport conditions, at least five cold/warm observations, raw records plus median/range. Collect FCP/LCP/CLS, transfer categories and origins, and script/main-thread costs proportionately. Keep LCP observation window and CLS session-window accounting explicit; on-disk size is not transferred size. |
| Performance decisions | Compare equivalent baseline/candidate conditions and investigate user-relevant changes beyond noise. No arbitrary score/byte/uptime budget. Real interaction metrics only if the authorized feature supports meaningful interaction; navigation traces do not establish field INP. Loopback/laboratory values are not field or production-edge guarantees. |
| CSP / authority | Preserve the [security baseline](../engineering/security-baseline.md); inspect actual server/client imports, props and resource/runtime behavior. Revisit allowances only for an authorized concrete need; no CSP expansion for hypothetical Rive. Reject new unexpected runtime origins, sensitive serialization or console/page/CSP errors. A source citation is a navigation link, not permission to execute that site's scripts. |
| Public outputs | Compare approved text/metadata/links against HTML, RSC, fetched scripts, emitted files and actual import graphs. Withheld product/article/fixture material must not leak through imports, prefetch or discovery. Retain sanitized, bounded exposure inventory/search evidence and its limitations; a negative search is not universal secret detection. Do not include private evidence or raw operational facts in public output. |
| Metadata / discovery | Qualify direct route requests, invalid identifiers, home versus article titles/descriptions, development pseudo exclusion and approved destination filtering. Canonical origin, sitemap, indexing, hosting and release checks remain separately authorized; do not invent an origin or generate discovery files now. |
| Editorial maintenance | Before any disclosure, assign owner/subject review, reverify mutable sources and rights/attribution, approve exact presentation/date handling. Changed source truth, unsupported wording, qualifier removal, rights loss or inability to maintain content requires correction, renewed approval, narrowing or withdrawal; no silent public update. |

Local ARM64 WebKit limitations remain distinct from supported Ubuntu x86_64
qualification. Actual human Safari/device/OS coverage is also separate from automated
WebKit. Select environments and agree evidence storage before later execution;
no installation, new evidence collection, telemetry or deployment occurs here.

## Implementation-readiness and pending decision matrix

“Specified” below means a proposal, not acceptance. “None” under new qualification
means no test of an unbuilt article was performed.

| Decision object | Architecture / design | Supporting evidence | Disclosure | Implementation | Actual qualification | Remaining human decision |
| --- | --- | --- | --- | --- | --- | --- |
| Current homepage | Accepted; retain unchanged | Exact approved copy/source and M1 records | Existing subset only | Existing accepted slice only; no change | Accepted scoped M1 evidence and integrated CI | Any contextual-link change needs exact new approval |
| Conditional P05 article | Conditional anatomy specified | Accepted internal R1 and source review | Deferred; not approved | Not authorized | Internal review only; no page qualification | Exact public copy/metadata/links and presentation |
| Source / review ownership | Required fields specified | Mutable seven-source register; no archive | No invented attribution/date | No publishing system authorized | No ongoing maintenance established | Assign editorial/maintenance/subject roles and scope |
| Public metadata / copy | Governing exact-approval contract | R1 is an internal proposal | Decision pending; withholding binding | No public export/change authorized | No new public projection tested | Approve indivisible exact content set; revision if changed |
| First child route / identity | Invariant specified; server seam to be selected | Current unconditional home-current source | Route/discovery withheld | Not authorized | None for child | Approve route scope and later qualify route-aware composition |
| Navigation expansion | Contextual link recommended conditionally | Only one potential new destination | No new label/link approval | Not authorized | None for new link | Approve exact destination/placement; omit unnecessary menu/index |
| Responsive article | One-column/prose proposal | Accepted roles and scenario contracts | No presentation approval inferred | Not authorized | None | Review actual composition and qualification scope |
| New CSS / components | Existing roles first; local need only | Possible list/selector needs from source inspection | No new public substance | No style/component changes authorized | None | Demonstrate necessary rule/consumer before implementation |
| Interactive client code | Deferred absent actual task | Text resource needs no interaction | No interactive disclosure granted | Not authorized | Historical SSR does not prove hydration | Separate need/authorization and live test restoration |
| Images / diagrams | Optional, deferred | No new approved asset package | Withheld pending rights/content review | Not authorized | None | Truthful content, ownership/rights, alternatives and qualification |
| Deployment / release | Separate operational scope | M1 Q26 remains unverified | No launch approval | Not authorized | No deployment-edge qualification | Separate hosting/origin/HTTPS/HSTS/CDN/cache/monitoring approval |

**Current recommendation: NO IMPLEMENTATION YET.** Design can be reviewed while
the article remains withheld. M2.3 adequacy does not require content approval to be
invented; it requires a precise conditional contract and visible stop conditions.

After exact disclosure, ownership, approved presentation/navigation and separate
M2.4 authorization, the minimum sufficient proposed slice is one server-rendered
resource, a thin validated Next route and approved route-specific metadata,
route-aware home identity, and only the approved contextual entry/return links.
Reuse existing first-party roles, with bounded local rules if actually needed.
Qualify affected home and child behavior before eligibility; require human
acceptance of actual results and limitations. No index, menu, footer expansion,
search, assets, new library or authored client island is implied. Publication and
production release remain separate human decisions.

## Carried findings, limitations and forward gates

| ID / severity | Disposition and M2.3 handling |
| --- | --- |
| M21-01 — NOTE | OPEN: preserve product/maturity/version/market and exact disclosure prerequisites. A vendor-neutral design supplies no product qualification or broader publication authority. |
| M21-02 — NOTE | OPEN: no market/store context or editorial/maintenance/contact/evaluation owner is invented. Readiness explicitly stops on applicable ownership and approval gaps. |
| M21-03 — NOTE | OPEN: demonstrate concrete UI/tooling need before architecture reconsideration. The conditional article supplies no new framework need; future needs are not permanently ruled out. |
| M21-04 — NOTE | OPEN: asset rights, representativeness, accuracy and qualification remain unresolved. Text-only avoids reliance on an asset; it does not close the finding. |
| M22-ACC-N01 — NOTE | Retained nonblocking procedural observation: M2.2 acceptance-record audit was retrospective after integration; no application correction or invented earlier audit. |

Accepted [M1 limitations](../engineering/milestone-1-acceptance.md#accepted-qualification-limitations)
remain unchanged: genuine Windows forced-colors UNVERIFIED within its human-accepted
bound; A152M-02 missing running-build identity/manual metadata still unverified;
D13-01/D13-02/D13-03/M152-T01 scoped human observations; original evidence loss and
audited replacement evidence without recovered originals; laboratory performance;
partial requirement classifications, Q23–Q25 not applicable to the then-current
surface and Q26 deployment-edge properties unverified; bounded CSP tradeoffs.
No WCAG conformance, universal accessibility/compatibility, security certification
or production readiness is claimed. Future functionality must reassess applicability,
rather than inheriting a historical NOT APPLICABLE classification.

Keep exactly ESLint 9.39.5 under its bounded exception and review targeted changes
and no later than January 8, 2027. Preserve route-aware identity, live client-island
tests, sensitive-feature security/authority, real-language/RTL, documentation and
future feature gates. Vercel remains the designated future hosting direction,
with no provisioning, domain/DNS, HTTPS/HSTS, CDN/cache, monitoring, deployment or
launch authorization. Public claims still require evidence and exact approval.

## Review, integration and future execution gates

This document is an initial planning candidate. Author self-checks are not an
independent adversarial audit. Under the [Git workflow](../agents/git-workflow.md),
prepare the five-path diff and complete new document for separate read-only review
of source facts, chronology, conditional disclosure, route/navigation semantics,
qualification sufficiency and scope containment. The maintainer then reviews the
candidate and audit, controls signing/push and exact-SHA CI, and explicitly decides
M2.3 scope/acceptance. No preceding CI qualifies this uncommitted plan.

Only a subsequent explicit authorization may begin M2.4 or any new content,
route, component, asset, dependency, integration, operational-platform change or
production operation. Acceptance of earlier checkpoints grants none of those actions.
