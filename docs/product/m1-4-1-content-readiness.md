# M1.4.1 content readiness and publication matrix

## Authorization and baseline

**M1.4 — Reviewed Templates & Content: AUTHORIZED October 8, 2026 (UTC).**
**M1.4.1 — Content Readiness & Publication Matrix: AUTHORIZED; implementation under review.**
The human maintainer authorized this documentation-only checkpoint. It grants no
approval of substantive public content, assets, routes, navigation or metadata.
M1.4.1 is not formally accepted; M1.4.2 and later implementation are not authorized.

Starting branch: `docs/m1-4-1-content-readiness`; HEAD/main/origin-main:
`b16a18342e94173b93d9bfa750ca8b16859b052a`, clean worktree/staging and 0/0
ahead/behind. M1.3 is formally accepted October 8, 2026 (UTC). Its
[acceptance record](../engineering/m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc)
preserves signed main closeout `ad69f632129231bb2604a3a71678ac959900046c` and
[run 37827607606](https://github.com/adarj/grocery-pos-website/actions/runs/37827607606):
30/30, one worker, zero retries and source cleanliness. The later baseline records
that formal acceptance; neither historical CI nor M1.3 acceptance approves this
future documentation commit or commercial claims.

This is an **internal planning artifact**, not public copy or a production
capability ledger. Do not place its unresolved subjects in HTML, RSC, metadata,
client bundles, indexes or navigation. This designation is not access control;
record only bounded provenance, never confidential source contents, credentials,
unreleased partner details or operational security information.

[Information architecture](website-information-architecture.md),
[claims policy](public-capability-claims.md), [Website vs Manager](website-vs-manager.md),
[content-claims guidance](../agents/content-claims.md) and the
[M1 plan](../engineering/milestone-1-plan.md) govern this work.
**Next routes. ReScript models. React presents. APIs connect.**
Applicable accepted [ADRs](../adr/README.md), especially
[0002](../adr/0002-next-rescript-react-boundaries.md),
[0003](../adr/0003-server-first-rendering.md),
[0005](../adr/0005-internationalized-routing-model.md) and
[0006](../adr/0006-css-and-design-system-foundation.md), remain unchanged.

## Current publication posture and independent decisions

Only the existing /en engineering qualification surface, root redirect and
development-only /en-XA behavior are implemented. The fictional samples and
Counter establish engineering properties; they are not real product claims.
No substantive customer-facing publication set is approved by this checkpoint.

| Decision | Required basis | Present position |
| --- | --- | --- |
| Product maturity | Authoritative evidence and owner confirmation of exact product/version/audience | Candidate operational capabilities remain UNVERIFIED / UNRESOLVED; no taxonomy status inferred |
| Disclosure authorization | Explicit human approval of the particular information for a named audience/scope | NOT AUTHORIZED for every candidate assertion in this register |
| Page/template readiness | Sufficient reviewed facts, exact content/assets, legitimate destinations and implementation scope approval | Architecture defined; all proposed substantive pages NOT READY under present inputs |

AVAILABLE, PILOT, PREVIEW, PLANNED and INTERNAL retain their accepted meanings.
Do not map pre-production source, design intent, branch names or milestones to
these labels. N/A below means the assertion is not itself a product capability;
it does not establish maturity for the product it discusses. Separate content
approval from permission to implement a template and from eventual deployment approval.

## Page-candidate readiness matrix

IDs identify planning candidates, not route registrations. English URL examples
follow the approved IA; placeholders below are not links. All eight areas are
architecturally defined. The preferred audience is the independent grocery
owner/operator, with accessible technical due diligence for store IT.

| ID / location | Audience and user question | Editorial purpose / minimum facts | Available evidence | Missing dependencies / approvals | Navigation / recommendation |
| --- | --- | --- | --- | --- | --- |
| P01 — Home /en | Owner/operator; IT: what is Grocery POS and is evaluation relevant? | Orientation, truthful scope/approach, material constraints and a legitimate next step if available | S01–S05: identity/boundary specifications and real website engineering proof | Verified identity/positioning, approved exact scope facts and limitations; approved destinations/assets if used | Preferred conditional first slice; reuse existing root, no new primary groups |
| P02 — Platform /en/platform | Owner/regional evaluator; IT: what exists and where does it fit? | Product definition, evidenced versioned scope, intended versus implemented architecture, prerequisites/exclusions | S02/S06: governing decisions and bounded platform source intake | Product-owner maturity confirmation, released/evaluation scope, publishable technical summary and qualifiers | Withhold; add Platform only after reviewed route/content approval |
| P03 — Solutions /en/solutions | Owner/regional evaluator: does it fit my actual store context? | Named user problem, demonstrated workflow fit and exclusions | S01 identifies audiences, not supported workflows or scale | Evidence for the claimed context; no regional/multi-store inference; case rights if used | Defer until a genuinely evidenced solution earns a page; no empty overview |
| P04 — Hardware /en/hardware | Owner; IT: which physical configuration is verified? | Actual model/configuration/version constraints and requirements | S06 supplies internal provenance, not a customer compatibility matrix | Model/firmware/OS tests, operating constraints, certification evidence if claimed; real asset rights and approval | Withhold; no purchasing links or inferred compatibility |
| P05 — Resources `/en/resources/<reviewed-slug>` | Owner; IT/general visitor: how should I evaluate a concrete topic? | One useful article with factual sources, reviewer and actual review/publication dates | S01/S02/S07 provide possible topics and internal architecture context | Authoritative subject sources, editorial responsibility, exact article/disclosure approval; dates cannot be invented | Conditional alternative to P01; direct article before any index, only eligible related links |
| P06 — Documentation `/en/docs/<reviewed-slug>` | IT/existing customer: how do I perform a supported task? | Version, prerequisites, verified instructions, outcomes/failure limits and maintenance owner | S06 locates internal implementation context, not approved customer instructions | Verified task execution and access/support scope; redact internal operational/security content | Withhold; do not expose internal runbooks or build a docs platform |
| P07 — Company /en/company | General visitor/evaluator: who is responsible? | Verified organization facts and approved approach/contact information | S01 establishes repository/product identity only | Legal/organization facts, approved people/history, genuine channel and asset rights | Not automatically safer than home; withhold unverified company facts |
| P08 — Contact /en/contact | Prospective evaluator/customer: what genuine next step is available? | Actual owned channel, purpose, privacy and accurate response expectations | No approved contact destination supplied | Maintainer validation of channel ownership, privacy and service facts; form requires separate security scope | Withhold; no guessed email, form, promised response time or dead-end CTA |

### Readiness decisions and deferred areas

| Candidate | Implementation readiness | Disclosure authorization | Publication decision | Next action |
| --- | --- | --- | --- | --- |
| P01 | NOT READY; shell exists, content inputs do not | NOT AUTHORIZED | WITHHELD | Resolve C01–C05 as applicable, then approve a minimal exact set |
| P02–P04 | NOT READY | NOT AUTHORIZED | WITHHELD | Establish product scope, fit or compatibility before template work |
| P05 | NOT READY; editorial alternative only | NOT AUTHORIZED | WITHHELD | Select topic, verify sources and approve exact article |
| P06–P08 | NOT READY | NOT AUTHORIZED | WITHHELD | Verify instructions, identity or channel and approve disclosure |

Developers (/en/developers) needs an actual approved integration contract,
version/access limits and support owner (C08). Support (/en/support) needs real
staffing, access and owned channels (C09). Pricing (/en/pricing) needs authoritative
terms, currency/tax/market scope and approval (C10). Commerce and Account remain
future illustrative journeys: they additionally require qualified server authority,
identity/organization scope, privacy/cache isolation and payment controls.
No prerequisite package for these areas is established here. Do not create an
index or navigation destination merely because the IA names it.

## Claim-and-evidence register

The two tables join by stable C IDs and constitute one register. Entries are
precise subjects for review, not finished marketing assertions.
Sources are pinned in the next section. Design intent never proves released behavior.

### Assertions and provenance

| ID | Proposed assertion / subject | Category | Candidate destination / audience | Source / evidence assessment |
| --- | --- | --- | --- | --- |
| C01 | Grocery POS identity and the website's first-party relationship | Identity | P01/P07; all visitors | S01/S02 establish repository identity and separation; legal organization facts and brand authority not verified |
| C02 | Website commercial-relationship ownership is distinct from operational grocery authority | Architecture | P01/P02; owner and IT | S01/S02 define accepted intended ownership, not implemented website accounts or services |
| C03 | Current website uses Next routing, ReScript modeling/UI and server-first React composition | Architecture | P01/P05, only if useful; IT | S03/S05 show the engineering implementation; this is website evidence, not POS release or deployment evidence |
| C04 | Local-first/offline operation and its actual reliability limits | Reliability | P01/P02; owner and IT | S06 describes internal direction and qualification limits; no independent offline, interruption or physical-store validation performed here |
| C05 | Actual checkout scope and customer evaluation/availability conditions | Capability | P01/P02; owner and IT | S06 distinguishes repository implementation from production readiness; source presence does not determine commercial maturity/access |
| C06 | Suitability for a named grocery workflow or regional/multi-store context | Capability | P03; owner/regional evaluator | S01 records an audience need; no tested product fit or scale evidence established |
| C07 | Compatibility or certification for a particular hardware configuration | Compatibility | P04; owner and IT | S06 is only an internal intake pointer; no approved model/configuration test package or certification established |
| C08 | Supported integration contract and authorized partner access | Compatibility | Developers/P06; developer and IT | S06's internal interfaces/adapter are not a public integration contract or support commitment |
| C09 | Customer support availability, channels and service commitments | Support | Support/P08; customers/evaluators | No service/staffing/channel evidence supplied; policy lists only eventual ownership |
| C10 | Price, purchase availability or commercial terms | Commercial | Pricing/future commerce; buyers | No authoritative offer, currency/market/tax or price source supplied |
| C11 | Company facts and a contact channel with accurate privacy/response expectations | Identity / support | P07/P08; all visitors | S01 identifies information requirements, not verified organization details or an approved channel |
| C12 | A reviewed explanation of a defined evaluation/architecture topic | Editorial | P05 or limited P01 explanation; owner and IT | S02/S07 are internal architecture sources; publishable source attribution and responsible editorial review still required |

### Maturity, scope and authority decisions

The human repository maintainer is the approval authority. Where product,
commercial or specialist evidence needs another owner, that role is pending
assignment/confirmation, not an invented reviewer.

| ID | Maturity | Intended scope / mandatory qualification | Owner / reviewer | Disclosure authorization | Publication decision | Next action |
| --- | --- | --- | --- | --- | --- | --- |
| C01 | N/A: identity | Grocery POS website; distinguish product name from legal organization | Maintainer | NOT AUTHORIZED | WITHHELD | Confirm identity facts and exact public wording |
| C02 | N/A: ownership rule | Separate website/platform responsibilities; future commercial surfaces are not existing features | Maintainer | NOT AUTHORIZED | WITHHELD | Approve a scoped ownership explanation |
| C03 | N/A: website engineering fact | Exact website revision; no appliance-runtime, deployment or product-availability implication | Maintainer | NOT AUTHORIZED | WITHHELD | Decide whether this technical detail helps the audience |
| C04 | UNVERIFIED / UNRESOLVED | Owner must define product/version, connectivity, recovery and hardware conditions; no uptime guarantee | Maintainer; product evidence owner pending | NOT AUTHORIZED | WITHHELD | Obtain scoped behavior/qualification evidence and maturity confirmation |
| C05 | UNVERIFIED / UNRESOLVED | Version/audience/access/market/support limits; distinguish implementation from release | Maintainer; product evidence owner pending | NOT AUTHORIZED | WITHHELD | Confirm the exact offered scope or omit the section |
| C06 | UNVERIFIED / UNRESOLVED | Named workflow/store context and exclusions; no inferred multi-store support | Maintainer; product evidence owner pending | NOT AUTHORIZED | WITHHELD | Supply representative fit evidence |
| C07 | UNVERIFIED / UNRESOLVED | Exact model, firmware/OS/configuration and limitations; certification separately evidenced | Maintainer; hardware evidence owner pending | NOT AUTHORIZED | WITHHELD | Review test provenance and asset rights |
| C08 | UNVERIFIED / UNRESOLVED | Exact published contract/version, access/support and limits; no internal endpoint disclosure | Maintainer; integration owner pending | NOT AUTHORIZED | WITHHELD | Establish an authorized public contract |
| C09 | UNVERIFIED / UNRESOLVED | Actual channel, staffing, hours/access and commitments; no SLA inferred | Maintainer; service owner pending | NOT AUTHORIZED | WITHHELD | Verify service scope and permitted promises |
| C10 | UNVERIFIED / UNRESOLVED | Exact offer, currency, market, taxes and effective revision; English implies neither US nor USD | Maintainer; commercial owner pending | NOT AUTHORIZED | WITHHELD | Obtain authoritative terms; remains outside proposed initial slice |
| C11 | N/A: identity/channel facts | Actual organization/channel; no fabricated team, history or response promise | Maintainer | NOT AUTHORIZED | WITHHELD | Verify facts, privacy and ownership |
| C12 | N/A: editorial explanation | Named topic/sources; label intended architecture and avoid product capability implications | Maintainer; editorial reviewer pending | NOT AUTHORIZED | WITHHELD | Select topic and review exact prose/attribution |

## Source-of-truth and evidence standards

### Pinned source intake

All website sources below are read at the clean baseline
`b16a18342e94173b93d9bfa750ca8b16859b052a`; later changes require explicit
revision updates. Source IDs identify evidence, not disclosure approvals.

| Source | Exact reference | What was established / limitation |
| --- | --- | --- |
| S01 | [Website IA](website-information-architecture.md), [Website vs Manager](website-vs-manager.md), [claims policy](public-capability-claims.md), README at website baseline | Approved audiences, intended ownership and claim rules; no released POS facts, legal entity or publication grants |
| S02 | Accepted website ADRs 0001–0006 at website baseline | Governing architecture/specification; distinguish intent from implementation and commercial availability |
| S03 | Website `app/[lang]/layout.tsx`, `page.tsx`, `src/ui/EngineeringShell.res`, `ArchitectureProof.res`, `src/i18n/Language.res` at baseline | Existing server shell, proof-only page, typed route validation and public English registry; no substantive pages or service integration |
| S04 | Website `src/qualification/CapabilityProofData.res`, `src/domain/Capability.res`, `src/application/CapabilityPresentation.res` at baseline | Fictional fixture, default withholding and projection before presentation; fixture approval constructor is not real disclosure authority |
| S05 | [M1.3 acceptance](../engineering/m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc), closeout SHA/run above | Accepted design-system subset and scoped browser evidence, not product or deployment qualification |
| S06 | Local `grocery-pos-platform` commit `4d8c23c33f6a22f61c5b50f2bfc08b013e94b82c`: README; `flutter/apps/pos_terminal/lib/core/pos_core/pos_core_client.dart`; `http_pos_core_client.dart` | README identifies a pre-production foundation and explicit production-qualification limits; inspection confirms a client interface/HTTP adapter, not runtime outcomes or public integration support |
| S07 | [Internationalization](../architecture/internationalization.md), [security](../engineering/security-baseline.md), [accessibility](../engineering/accessibility-and-performance.md) at website baseline | Implemented website constraints and future review obligations; language is not commercial geography |

S06 was inspected read-only through the pinned Git revision, not uncommitted
platform work. The bounded code inspection covers the client interface and
selected HTTP adapter definitions; it is not a full platform implementation audit. It is a development checkout, not a release attestation.
No platform tests were executed and no acceptance result was independently
reproduced. Internal technical details are deliberately not copied into this
register. A reviewer can resolve the local reference with
`git -C <platform-checkout> show <revision>:<path>`; public repository visibility
is not assumed. Request an owner-approved, sanitized evidence summary before
disclosure. If the source is unavailable later, retain its provenance and mark
revalidation pending rather than claiming it passed.

### Category-specific minimum evidence

| Category | Minimum trustworthy evidence before disclosure |
| --- | --- |
| Company identity | Verified organization/brand facts and explicit disclosure approval; repository naming alone is insufficient |
| Technical architecture | Versioned accepted specification or observed implementation, labeled as such; product direction is not shipped behavior |
| Current capability | Implemented scope, relevant tests/qualification, product/version, explicit maturity/access confirmation and limitations |
| Offline reliability | Actual scoped operation/recovery evidence, tested conditions and exclusions; process tests do not establish physical reliability or uptime |
| Hardware compatibility | Exact model/firmware/configuration, test revision/results and operating constraints; certification requires its own authoritative record |
| Integration support | Actual public contract/version, access and support scope approved by its owner; internal client code is insufficient |
| Pilot availability | Explicit confirmed pilot arrangements, eligible audience, access/support conditions and limitations; no inference from branch activity |
| Support/service | Real staffing, owned channels, access/hours and approved commitments; no invented SLA or implied unlimited service |
| Commercial terms | Authoritative effective offer, currency/market/tax treatment and scope, approved by commercial authority |
| Editorial advice | Reviewed factual primary sources where applicable, attribution, actual review dates and responsible editorial approval |

Assess provenance, scope, missing evidence and conflicts qualitatively; no numerical
confidence score. Conflicting facts block the affected assertion until reconciled.
Passing development tests does not mean released/supportable functionality.
Do not copy secrets, customer records, restricted architecture or partner details
into evidence notes; maintainers must supply a safe reviewable summary.

## Initial proposed content set

**Recommendation: conditionally prepare P01, a restrained owner/operator orientation
at the existing /en destination. All publication sets remain WITHHELD today.**
The existing shell supplies a qualified presentation boundary, not approved content.

Home-first avoids adding a route before there is an eligible onward destination.
A self-contained P05 editorial article could avoid unsupported product claims, but
still needs authoritative editorial sources, review and a new-route safeguard.
P07 is not automatically safer: organization/contact facts are also missing.
Do not select Platform/Solutions/Hardware first while their central claims remain unresolved.

Proposed sections, not finished copy:

| Section | Exact inputs / claim review | Omission rule |
| --- | --- | --- |
| Identity and audience orientation | Verified Grocery POS identity, approved audience/positioning, C01; no legal/availability inference | Withhold the entire set if essential identity/proposition is unapproved |
| Scope and approach | Approved explanation of C02; only useful, evidenced product facts from C04/C05 with owner-confirmed scope/maturity | Omit unsupported highlights; distinguish intentions from delivered behavior |
| Practical evaluation constraints | Owner-reviewed prerequisites/limitations adjacent to any product assertion | Do not bury caveats in a footer or use an unqualified architecture slogan |
| Contextual next step, if one exists | Approved real contact or reading destination, C11/C12; eligible URLs and owner | Omit CTA/link entirely when destination or commitments are unresolved |

Mandatory limitations follow the approved facts. Never imply commercial release,
certified hardware, multi-store support, reliability guarantees or geography from
the engineering foundation. Any proposed offering must reconcile S06's stated
pre-production/qualification limits before publication. Without sufficient
approved substance after omissions, retain the existing engineering preview.

No image is mandatory. Optional real imagery/diagram needs separate ownership,
rights, alternatives and content approval. Proposed title, description and link
labels need exact review and typed English messages. Do not invent canonical
origin, schema.org organization facts, social preview assets, dates or hreflang.
Root negotiation and registry language codes remain unchanged.

Before implementation: approve M1.4.1, explicitly authorize the next checkpoint
and an exact sufficient content/template scope. Before public disclosure: approve
each assertion and qualifier, intended audience/version/market, metadata, assets
and destinations. Deployment remains a separate later approval/qualification gate.

## Navigation and route prerequisites

The target categories remain **Platform · Solutions · Hardware · Resources · Company**.
They are not eligible links today. A destination requires actual implementation,
reviewed content and separate publication approval. Keep the one valid identity
link; omit empty groups, disabled/# placeholders, invented contact paths and
dead-end CTAs. No mobile disclosure or language selector is presently justified.

**Before the first additional public child route is introduced, the shared
identity link must become route-aware so aria-current="page" appears only when
that identity link is actually current.** Next provides bounded route context;
do not add a client pathname dependency or parallel router by default.

Future route qualification must cover home-current versus child-not-current,
the non-color-only current cue, ordinary/back/new-tab link semantics, skip/focus
behavior, invalid/pseudo-language rejection, metadata/discovery exposure and
security headers. A real destination set must justify any responsive disclosure
and its keyboard/dismissal/focus/transition/JS-disabled behavior.

## Template and component implications

The accepted 43 tokens, 60rem container, readable prose measure, native headings/
sections, skip/main landmarks and shared CSS support an initial static page.
[M1.3.2's no-extraction decision](../engineering/m1-3-2-primitives-qualification.md)
remains accepted. New prose length and heading levels still need actual reflow review.

| Content need | Smallest likely treatment / trigger |
| --- | --- |
| Orientation/long prose | Existing server ReScript composition and native headings/paragraphs/lists; no generic content engine |
| Shared width/section rhythm | Existing CSS patterns/tokens; extract only if real consumers prove meaningful semantic reuse |
| Qualifications | Visible adjacent text; no callout component solely because a specification lists one |
| Related navigation | Ordinary eligible anchors with typed names; no empty index or menu infrastructure |
| Requirements comparison | Native table with caption/headers and qualified narrow-screen reading only if real approved data needs it |
| Supporting diagram | Text equivalent and qualified image semantics only if it answers an actual question; no diagram required now |

Next owns routes, static generation, metadata and validated framework context.
ReScript owns meaningful typed presentation/messages and application policy;
localize only public-safe information. Preserve static/server rendering and
Counter as the current sole application client island. Future work must decide
how the engineering proof's unique withholding/hydration regression purpose is
preserved if content replaces it; no removal or test weakening is authorized here.

## Asset and accessibility readiness

No new asset is supplied or acquired. “Missing” means no approved asset was
identified for this content set, not that no asset exists anywhere.

| Asset class / intended use | Existence and owner/rights | Accessibility / performance contract | Approval |
| --- | --- | --- | --- |
| Text identity/system typography | Existing preview identity and local system stack; maintainer must confirm public brand treatment | Typed accessible identity/home name; user scaling; no remote font | Preview use only; substantive publication not approved |
| Logo/brand artwork | No approved file supplied; brand owner/usage rights pending | Meaningful name or decorative treatment according to context; real dimensions and suitable format | NOT APPROVED |
| Product/hardware photo or screenshot | No approved current, representative asset supplied; owner and usage scope pending | Honest version/context, useful alt text, no secrets/customer data; dimensions, responsive sizes/compression | NOT APPROVED; omit rather than fabricate |
| Real grocery-context photograph | No approved asset supplied; creator/subject/location rights pending | Must not imply customer deployment/endorsement; alt/decorative classification, responsive payload | NOT APPROVED; optional |
| Architecture diagram | No approved diagram supplied; content/revision and authorship rights pending | Approved relationships, adjacent text equivalent, readable labels, scalable format and measured contrast | NOT APPROVED; optional |
| Functional icons | No new consumer/asset approved; any source/license requires review | Visible text names, appropriate decorative semantics/direction; no icon-only critical next step | DEFERRED until genuine need |

New content requires actual text/non-text contrast, headings/links/names, keyboard/
focus, long-content reflow and reading order, text expansion/pseudo qualification,
image alternatives, visible claim qualifiers and static/client-boundary review.
Use 320/375/768/1024/1440 CSS-pixel layouts, enlargement/spacing, forced colors and
reduced motion as relevant. A viewport proxy is not native browser zoom.
English remains the only approved public language; /en-XA remains development-only.
Language, formatting locale, market, currency, jurisdiction and direction remain distinct.

D13-01 screen-reader, D13-02 physical-device and D13-03 actual OS high-contrast
checks remain **DEFERRED, UNVERIFIED — M1.5** under their original explicit approval.
They do not approve untested new M1.4 behavior or excuse a discovered present defect.
Review the new content's risks and preserve the
[manual obligations](../engineering/m1-3-3-design-system-qualification.md#retained-unverified-obligations-and-boundaries).
Axe/multi-browser evidence does not establish WCAG conformance, device support,
general RTL support or deployment readiness.

## Editorial and publication approval workflow

Use ordinary Git-based review and claim IDs, not a CMS/database/approval service.
The maintainer is the approval authority unless a different owner is explicitly established.

1. Propose a factual claim/section using its C ID.
2. Identify the authoritative source and exact revision.
3. Assess evidence and obtain maturity confirmation where applicable.
4. Define audience, product/version, market, limitations and conflicts.
5. Obtain separate approval to disclose that information for the defined scope.
6. Review language, accessibility, metadata and assets/rights.
7. Approve an exact sufficient content set and legitimate destinations; record reviewer/date/revision.
8. Implement only after separate checkpoint/scope authorization.
9. Qualify rendering, withholding/exposure, route/navigation, security and browser behavior.
10. Obtain final publication/release approval when deployment is relevant.

A later approval entry must identify exact claim/content IDs, wording revision,
qualifiers, scope, authorized reviewer, decision/date and rights/destinations.
Silence, CI success and approval of this planning document are not disclosure approval.
Evidence or scope changes require rereview and withdrawal of unsupported claims.

## Withheld and unresolved decisions

All C01–C12 assertions and P01–P08 substantive publication sets are WITHHELD.
Unknown operational maturity, release/access scope, compatibility, service,
terms, organization facts, contact channels, editorial owners and asset rights
require human evidence or decisions. No completed customer disclosure is invented.
The website's engineering-preview permission does not extend to these claims.

The only new approvals established here are M1.4/M1.4.1 work authorization on
October 8, 2026 (UTC). M1.3 acceptance and earlier specifications remain historical
decisions; no candidate route, customer publication set or deployment is approved.

## Proposed M1.4.2 scope, not authorization

Recommend one bounded checkpoint after human review: select P01 or P05 and approve
its exact evidence-backed content set, then implement one server-rendered template
with typed messages and only necessary composition. Prefer P01 without a new route
if its core facts can be approved. If neither set is sufficient, continue evidence/
content review with no runtime work; do not fabricate a page to satisfy a milestone.

Prerequisites: M1.4.1 approval, explicit M1.4.2 authorization, resolved/approved
claim subset and qualifiers, eligible destinations, asset decisions and a plan
preserving unique engineering regression evidence. An added route also requires
route-aware identity composition. Exclude new commercial/services/backend work,
CMS, capability database, real second language and speculative components.

Later qualification must retain the existing blocking 30-scenario three-browser
gate, one worker and zero retries, plus proportionate checks for genuinely new
behavior; do not preserve obsolete wording by misrepresenting fictional fixtures
as public truth. This proposal neither starts nor authorizes M1.4.2.

## Human approval checklist

- Confirm the P01-first recommendation or select another bounded slice based on evidence.
- Confirm identity/positioning facts; assign missing product/editorial/asset evidence owners.
- Resolve applicable C IDs with exact authoritative revisions, maturity/access and limitations.
- Explicitly approve disclosure separately from this planning checkpoint.
- Approve exact sections, metadata, destinations and any assets/rights; omit unsupported slots.
- Confirm the plan for engineering-proof regression preservation and any route-aware identity change.
- Review new content accessibility risks without broadening D13-01–D13-03 deferrals.
- Approve M1.4.1 only after review; separately authorize M1.4.2 and its exact scope.
- Retain separate deployment/publication release gates; no action is inferred from CI.

## Risks, deferred obligations and engineering validation

| Risk / obligation | Evidence / consequence | Required disposition |
| --- | --- | --- |
| Source intent mistaken for release | S02/S06 are not commercial-status attestations | Resolve maturity/scope and withhold unsupported capability claims |
| Internal source mistaken for public permission | S06 is a local read-only intake | Maintainer provides sanitized evidence and explicit disclosure approval |
| Empty or misleading page/CTA | No exact content/destination set approved | Withhold insufficient pages and links; no placeholders |
| Shared identity current-state on a child | Existing shell assumes one page per language root | Make route-aware before first public child; qualify both routes |
| New content invalidates old presentation evidence | Existing evidence covers engineering fixtures, not arbitrary prose/assets | Qualify actual long content, colors/states, navigation, accessibility and asset performance |
| Unverified manual coverage | D13-01–D13-03 approved only as bounded M1.5 deferrals | Revisit at M1.5; correct discovered current defects; no conformance claim |
| Premature abstraction | M1.3.2 no-extraction decision remains accepted | Require actual consumers and meaningful benefit |
| Tooling/deployment maintenance | ESLint exception and deployment controls remain governing | Preserve exact ESLint 9.39.5 and January 8, 2027 review deadline; qualify origin/HTTPS/HSTS separately |

Validation for this documentation-only candidate consists of full-diff review,
local links/anchors, new-file whitespace/trailing newline and scope/Git integrity.
No build/browser suite or platform test is run merely for this register.
The eventual signed commit still requires supported Ubuntu exact-SHA CI with all
30 existing scenarios and source cleanliness. The current `docs/**` branch does
not trigger push CI automatically; use the unchanged PR-to-main or manual-dispatch
path under human control. No Git or GitHub mutation is performed by this checkpoint.
