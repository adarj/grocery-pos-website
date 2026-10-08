# Website information architecture

**Status: M1.1 specification approved by the human maintainer on October 8, 2026 (UTC).**
This is the canonical audience,
sitemap, navigation and template specification. It creates no route or publication
grant. The [M1 plan](../engineering/milestone-1-plan.md) defines implementation gates;
[visual direction](../design/visual-direction.md) and the
[design-system contract](../design/design-system-specification.md) define presentation.

## Audiences and decision journeys

| Audience | Job to be done | Decision journey and evidence needed |
| --- | --- | --- |
| Independent grocery owner/operator | Decide whether Grocery POS merits further evaluation for the business | Understand approach → assess grocery fit → check hardware/implementation constraints → use an approved contact path |
| Multi-store/regional decision-maker | Assess organizational fit and a possible evaluation process | Understand platform boundaries → inspect evidenced scope/limitations → evaluate rollout/support questions → contact when a real process exists |
| Store IT/implementation personnel | Assess technical and hardware fit | Find architecture/requirements → inspect verified compatibility and connectivity requirements → read versioned implementation guidance |
| Integration/developer partner | Determine whether a documented integration opportunity exists | Read approved developer overview → inspect actual published contracts/limits → follow an authorized partner-contact path |
| Existing customer | Locate documentation, commercial support or account access | Find relevant version guidance → locate an existing support destination → enter a separately qualified commercial account when available |
| General visitor | Learn who Grocery POS is and how it approaches its work | Read approach → understand verified company information → choose a relevant next step |

Owner/operator evaluation is the approved initial editorial priority, with IT
evidence close at hand. Multi-store evaluation is an audience need, not a claim of
released multi-store functionality.

These journeys help people decide and manage a commercial relationship.
Inventory, employees, shifts, live registers, device control and transaction
operations remain in Manager/the operational platform. Website documentation may
describe an evidenced workflow; the website must not acquire its operational
authority. See [product separation](website-vs-manager.md).

## Target sitemap and readiness

All paths below are **proposed English examples under /[lang]**. Only the
engineering surface at /en, the root redirect, and controlled development pseudo
behavior exist today. No sitemap file, extra language or route is created here.

Readiness has three independent dimensions:
**architecture defined** means this approved specification explains the area's role;
**implementation ready** means a later checkpoint may build it once listed inputs
and human scope approval exist; **publication authorized** requires a separate
review of the actual content. Page readiness is not a capability maturity status.
No AVAILABLE/PILOT/PREVIEW/PLANNED/INTERNAL status is assigned by this table.
The target sitemap is approved as a specification; the proposed public pages
remain unimplemented. Their URL examples grant no route or content publication
approval; the existing /en engineering surface remains qualification content.

| Area and proposed URL | Purpose / primary audience | Information required and dependencies | Architecture defined | Implementation ready | Publication authorized |
| --- | --- | --- | --- | --- | --- |
| Home — /en | Orient visitors; owner/operator first | Reviewed proposition, boundaries, relevant next steps; approved destination set | Yes, specification approved | Conditional M1 template candidate; copy approval needed | No new public homepage/content approved |
| Platform — /en/platform | Explain product approach; owners, regional decision-makers, IT | Evidenced architecture/capabilities, limitations and maturity qualifiers; authoritative product review | Yes, specification approved | Conditional M1 overview candidate | No |
| Solutions — /en/solutions; child path `/en/solutions/<reviewed-slug>` | Explain fit for an evidenced situation; owners/regional buyers | Real audience problem, applicability and exclusions; evidence of any claimed workflow/scale | Yes, specification approved | Conditional M1 candidate; omit unsupported sectors | No |
| Hardware — /en/hardware; child path `/en/hardware/<reviewed-slug>` | Clarify physical/technical fit; owners and IT | Verified device/specification/version scope, requirements, images and sourcing rights; no assumed certification | Yes, specification approved | Conditional M1 candidate with real approved facts/assets | No |
| Resources — /en/resources; article path `/en/resources/<reviewed-slug>` | Explain ideas and evaluation considerations; all audiences | Reviewed editorial corpus, authorship/review responsibility and relevant related links | Yes, specification approved | Conditional M1 article/index candidate; no empty index | No |
| Documentation — /en/docs; article path `/en/docs/<reviewed-slug>` | Answer actual implementation/use questions; IT and customers | Versioned verified instructions, audience scope and ownership; content maintenance process | Yes, specification approved | Conditional article candidate; full docs platform deferred | No |
| Developers — /en/developers | Explain published interoperability; prospective partners/IT | Actual approved contracts, version/support/access limitations; no fake API examples or credentials | Yes, specification approved | Deferred until real approved integration information exists | No |
| Company — /en/company | Explain approach and verified identity; general visitors | Reviewed organization/contact facts; approved people/assets and positioning | Yes, specification approved | Conditional M1 informational candidate | No |
| Contact — /en/contact | Provide a genuine next step; prospective evaluators/customers | Maintainer-approved destination, ownership, privacy and response expectations | Yes, specification approved | Conditional informational candidate; submission backend deferred | No |
| Support — /en/support | Route existing customers to real guidance/help | Actual support availability/access and destination ownership; no invented SLA | Yes, specification approved | Deferred until service/destination is approved; cases remain later work | No |
| Pricing — /en/pricing | Explain an actual commercial offering | Authoritative priced scope, currency/market/tax treatment and approval | Yes, specification approved | Deferred outside initial M1; no public price invented | No |
| Commerce — /en/order (illustrative only) | Future purchase/quote journey | Qualified server price/payment/fulfillment authority and security design | Yes, specification approved | Deferred; path and journey not selected | No |
| Commercial account — /en/account (illustrative only) | Future commercial relationship access | Identity, organization scope, authorization/cache isolation; account path vs subdomain decision | Yes, specification approved | Deferred; URL does not decide deployment topology | No |

Public URLs retain exact registry language identifiers. /fr, /es, aliases and
pseudo discovery remain unavailable until separately authorized real-language work.
Potential child slugs require review; the placeholders above are not links.

## Navigation contract

Target desktop primary navigation: **Platform · Solutions · Hardware · Resources ·
Company**. Home is reached through a named site-identity link to the selected
public-language root. Render only implemented, reviewed and publication-approved
destinations. Until such destinations exist, omit links and empty groups; do not
substitute #, disabled fake links or “coming soon” journeys.

Utility/contextual navigation may include Documentation, Developers, Support and
Contact when their destinations exist. Account access appears only after its
own implementation/security/publication gate. With one real public language,
there is no language selector. A future selector derives only from registry
public exposure, uses language names, and excludes pseudo.

Use anchors for navigation and buttons for disclosure/actions; preserve ordinary
open-in-new-tab and browser-back behavior. Selected-language internal URLs are
validated framework links. Do not add a client router. Exact current destinations
use aria-current="page" plus a visible non-color-only cue; an ancestor section may
receive a separate visual emphasis without falsely announcing it as the current
page. Server composition provides route context through a thin Next seam.

Desktop starts with a flat link row. No mega-menu or hover dropdown is justified.
If content later earns nested navigation, review a small disclosure separately.

Mobile uses one non-modal, in-flow navigation disclosure:
- Prefer native semantics; use details/summary if browser/assistive-technology
  qualification meets this contract. If Escape/state control needs enhancement,
  use one small local ReScript client island, not a global navigation manager.
- A named trigger exposes its expanded state and controlled region appropriately.
  Enter/Space toggles it; opening retains trigger focus. Tab/Shift+Tab follow normal
  document order through visible links; no focus trap or custom arrow-key model.
- Escape closes an enhanced disclosure and returns focus to its trigger.
  Optional outside-pointer dismissal must not steal focus from the clicked target.
  Closing must never strand focus inside hidden content.
- Navigation closes on a successful route change. At responsive transitions,
  retain a focused link when it stays visible; otherwise move focus to an
  equivalent visible control before hiding its container.
- Without JavaScript, navigation remains available through native disclosure or
  visible links. No hover-only destinations or ARIA menu/menubar roles.

Use the [W3C disclosure-navigation guidance](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)
as a behavioral reference, not production code to copy without testing.
Choose the breakpoint by actual link fit, including expanded labels, rather than
device names; the width scenarios live in the design-system contract. Start with
a non-sticky header to avoid obscured focus; sticky behavior needs demonstrated value.

Footer groups, filtered by eligible destinations:
- Explore: Platform, Solutions, Hardware.
- Learn: Resources, Documentation, Developers.
- Company and help: Company, Contact, approved Support.
- Legal/privacy/accessibility information only when real reviewed policies exist.
  An accessibility statement must describe actual review/limits, not certification.

Omit an empty group. Footer content is not an excuse to link withheld pages.
Breadcrumbs become useful on actual nested hardware, resource or docs pages:
reflect hierarchy, use a named navigation landmark, include a real language-root
Home link, and distinguish the current non-link label. Do not fabricate breadcrumbs
for every flat page.

No search control yet. Introduce search only when a reviewed, discoverable corpus
and observed findability needs justify indexing. Define index exposure, language,
result quality, accessibility, empty/error states and operational ownership before
selecting a backend. Withheld content must never enter the index.

## Publication and content governance

The [claims policy](public-capability-claims.md) governs all templates. Before any
page appears in navigation, review its actual content for maturity evidence and
separate authoritative disclosure approval, intended audience, market/version scope,
qualifications, asset rights and working onward destinations. Approval of this IA
or a template does not approve the text placed into it.

Capability maturity and disclosure authorization remain independent. Localize only
the public-safe projection. Keep qualifiers adjacent to claims; omit a withheld
section/card and its navigation entry rather than replacing it with a false teaser.
If an entire page lacks approved substance, omit its route, index entry and CTA.
Links and related-content suggestions must be built from eligible content only.

Do not invent testimonials, customer/store counts, certifications, supported
integrations, market availability, prices, benchmarks, reliability statistics,
service guarantees or dates. Unknown maturity remains unresolved; never guess
PLANNED. No production capability ledger is created by M1.1.

The maintainer owns content approval. Each later content review should identify
source/owner, claim scope/maturity, disclosure decision and reviewer/date; this is
a review requirement, not a new database or publishing platform.

## Reusable page templates

All templates share: a unique localized title/description, one meaningful primary
heading, reviewed navigation context, semantic section hierarchy, and a real next
step only when eligible. Canonical origin/hreflang/sitemap emission waits for
deployment decisions; do not invent a hostname. Approved metadata must not disclose
withheld information. Prefer static/server HTML, sized/compressed images with
appropriate alternatives, no remote scripts/fonts, and reading order that survives
mobile and text expansion. This common contract applies to every row below.

| Template / question | Suggested section sequence | Required fields | Optional sections and CTAs | Verification and presentation emphasis |
| --- | --- | --- | --- | --- |
| Landing / “Is this relevant to me?” | Orientation → evidenced approach/fit → practical constraints → approved next steps | Audience, reviewed proposition, grounded evidence and limitation notes, eligible destinations | Real image; concise highlights; link to relevant approved overview/contact | No unsupported hero claim; purposeful metadata; clear heading order and modest above-fold payload |
| Platform overview / “What is it and where does it fit?” | Scope → system explanation → evidenced capabilities → boundaries/requirements → next steps | Model/terminology, evidence-backed facts, maturity/scope qualifiers | Diagram with text alternative; approved technical/doc links | Separate strategic approach from shipped behavior; semantic lists/tables where needed |
| Solution / “Does it suit this grocery context?” | Audience problem → evidenced workflow fit → prerequisites/exclusions → evaluation next step | Named context, actual fit evidence, constraints and applicable versions | Approved example/customer evidence; contextual hardware/docs/contact link | No inferred multi-store or sector support; examples need rights and approval |
| Hardware information / “Will this fit my store?” | Device/context → verified specification → compatibility/constraints → implementation guidance | Approved identity/specs/versions, evidence for compatibility, accessible real assets | Requirements table; genuine service information; approved docs/contact link | Certification/source/date scope explicit; no purchasing CTA without real commerce |
| Editorial/resource / “How should I understand this topic?” | Title/summary → explanatory sections → sources/qualifications → relevant next reading | Reviewed body, attribution/source responsibility, actual publication/review dates | Diagram, references, related approved content | Honest expertise and sources; comfortable prose measure; no fabricated author/date |
| Documentation / “How do I carry out this documented task?” | Applicability/prerequisites → steps → expected outcomes → failure/limits → related tasks | Version/audience scope, verified instructions, ownership/review date | Semantic code/table/callout, actual troubleshooting, approved help link | Correct operational ownership; selectable/wrappable technical text; no framework invented merely to render an article |
| Company/informational / “Who is responsible and what is the approach?” | Verified identity → approach → relevant information → contact | Reviewed facts and responsible contact destination | Approved team imagery/history; legitimate policy links | Avoid fabricated size, credentials or milestones; plain readable content |
| Future contact/commercial / “How can I take this next step safely?” | Intent/eligibility → actual channel or form → privacy/expectations → outcome | Approved owner/channel, privacy and response facts; later validated error/success contract | Form only after server/security/provider review; accessible status messages | Navigation action is not a submission; no forms/backend/account/commerce in M1.1 |

Section order is a starting point, not a requirement to fill every slot. Omit
irrelevant optional sections; vary density and visual composition to fit the task.
No template requires fabricated proof to look complete.

## Approval and remaining publication decisions

The maintainer approved this specification and an initial internal engineering-preview
shell on October 8, 2026 (UTC); see the [approved M1.2 boundary](../engineering/milestone-1-plan.md#approved-m12-boundary-and-acceptance-checklist).
M1.2 implementation has not begun. Omit empty navigation and its mobile disclosure
when eligible destinations are insufficient. The preview designation is neither
access control nor production deployment authorization.

Actual public content, destination sets, content owners, contact channels and
truthful assets still require separate review. Decide Documentation/Developers
placement when real content exists. The five primary labels remain a target
architecture, not a requirement to launch five empty sections.
