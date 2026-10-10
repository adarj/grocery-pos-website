# M2.1 — Marketing Strategy, Scope & Content Readiness

## Status, authority and publication boundary

**Internal planning candidate — October 10, 2026 (UTC).**
[M2 planning is authorized](../engineering/milestone-2-plan.md);
M2.1 is not complete or accepted. Marketing implementation, new disclosure and
deployment are not authorized.

All current website sources in this assessment are pinned to
`80b55162c865ea58d7de853a3d8eb68845c200e7`, the accepted M1 main baseline.
This extends the analysis of the
[accepted M1.4.1 register](m1-4-1-content-readiness.md), not its historical
approval decisions. Its initial withholding, subsequent exact homepage approval
and M1.4 no-expansion closeout remain valid in their original sequence.

Only the exact four statements, headings and metadata in the
[post-acceptance homepage approval](m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc)
are approved. C01/C02/C04/C05 are approved only to that extent.
All additional substantive assertions and P02–P08 remain **WITHHELD**.
This file is neither public copy nor a production capability ledger. Internal
planning text must not be imported into HTML, RSC, scripts, metadata or discovery
outputs. Repository documentation is not a confidentiality control: retain
sanitized provenance, not secrets, customer data or restricted operational detail.

## Research method and source inventory

Research retrieved public primary/publisher sources on October 10, 2026 (UTC):
industry commentary for evaluation questions, standards-owner material for
bounded technical concerns, one competitor sitemap for information categories,
and official accessibility guidance. No interviews, survey replication, product
execution, outside contacts, paid report access or asset acquisition occurred.
The sample is deliberately bounded; it is not an exhaustive market study.
Technology sources and their applicability are in the
[experience study](../design/m2-1-marketing-experience-study.md#external-technology-and-experience-sources).

Distinguish four kinds of information: accepted internal strategy; directly
qualified website behavior; unvalidated product evidence/aspirations; and
external context. Research never supplies missing Grocery POS capability evidence.
U.S.-focused sources do not determine launch geography, jurisdiction or currency.

### Internal sources

| ID | Exact source at the website baseline above | Evidence and limits |
| --- | --- | --- |
| W01 | [Website IA](website-information-architecture.md), [Website vs Manager](website-vs-manager.md), [claims policy](public-capability-claims.md) | Approved intended audiences, responsibility and disclosure rules; not proof of product suitability, commercial services or company facts |
| W02 | [Accepted ADRs](../adr/README.md), [source layout](../architecture/source-layout.md), [internationalization](../architecture/internationalization.md) | Governing website architecture and documented implementation; language is not market/currency/tax jurisdiction |
| W03 | [M1.4.1 source intake and approval](m1-4-1-content-readiness.md), especially its S06 | Historical platform intake at `4d8c23c33f6a22f61c5b50f2bfc08b013e94b82c`; README and bounded POS client/HTTP-adapter inspection. Not re-inspected in M2.1, not a release attestation or current maturity confirmation |
| W04 | [Homepage qualification](../engineering/m1-4-2-homepage-qualification.md), `src/ui/Homepage.res`, `src/i18n/Messages.res`, `app/[lang]/page.tsx` and `layout.tsx` | Four-section typed server composition and exact metadata; no new public routes, authored application island or legitimate contact/demo destination established |
| W05 | [M1 acceptance](../engineering/milestone-1-acceptance.md), [M1.5 acceptance](../engineering/m1-5-final-qualification-acceptance.md), [M1.5.2 evidence](../engineering/m1-5-2-qualification-results.md) | Qualified informational foundation, supported CI and scoped manual/lab evidence; not operational POS, field, certification or deployment proof |
| W06 | [Visual direction](../design/visual-direction.md), [design specification](../design/design-system-specification.md), [deferred decisions](../engineering/deferred-decisions.md) | Internal positioning, accepted first-party design boundary and future service/tool decisions; no asset rights or contact/service approval |

A future evidence intake must name exact product revision/version, operator/test
environment, actual results, exclusions and owner authority. Obtain an
owner-approved sanitized update to W03 before using operational details. Its
historical limitations remain; do not claim newly inspected platform source.

### External context sources

All URLs below were retrieved October 10, 2026 (UTC). “Date not established”
means no publication date was recorded; it is not an invented publication date.

| ID / source | Publication / update | Relevant observation and applicability limit |
| --- | --- | --- |
| R01 — [NGA: POS selection and replacement](https://www.nationalgrocers.org/news/the-pivotal-role-of-point-of-sale-and-why-grocers-are-prioritizing-this-technology-now/) | July 21, 2025 | Business/technology fit, ownership, costs, vendor support and migration/testing are evaluation categories. NGA hosts Columbus Consulting commentary with a promotional conclusion; referenced survey methodology was not inspected. No survey percentages or representative 2026 market conclusions adopted |
| R02 — [FMI: State of Technology public summary](https://www.fmi.org/blog/view/fmi-blog/2025/09/04/fmi-state-of-technology-report--food-industry-invests-in-its-license-to-innovate) | September 4, 2025 | Technology investment should connect to measurable operating outcomes. Broad food-industry retailers/suppliers context; full report/sample not reviewed, not independent-grocer segment proof or a Grocery ROI promise |
| R03 — [GS1 US: Sunrise 2027](https://www.gs1us.org/industries-and-insights/by-topic/sunrise-2027) | Date not established | POS/scanner readiness for 2D data is a useful versioned evaluation question. Industry transition initiative; not evidence of Grocery support/certification, a universal legal deadline or a requirement to deliver every 2D feature by 2027 |
| R04 — [PCI SSC: merchant resources](https://www.pcisecuritystandards.org/merchants/) | Date not established | Merchant payment-security evaluation includes implementation, providers, people and operating practices. Educational owner material; no Grocery payment qualification, compliance attestation or legal advice inferred |
| R05 — [ECRS sitemap](https://www.ecrs.com/company/site-map/) | Date not established | Vendor separates product, hardware/integrations, onboarding/support and resources. Observed information categories only; mixed historical entries, unvalidated vendor claims and sales CTAs are not a Grocery feature list or proven conversion pattern |
| R06 — [W3C WAI: page structure](https://www.w3.org/WAI/tutorials/page-structure/) | Date not recorded | Logical headings and regions support orientation/navigation; applies to future content structure, not proof of this site's universal accessibility |

The attempted direct ECRS grocery URL and PCI small-merchant PDF were unavailable
to the research tool; neither is treated as reviewed evidence. The accessible
sitemap and merchant resource page above supply the narrower observations.
No full competitive feature comparison, certification audit or global market
research is claimed.

## Proposed strategy and audience hypotheses

Keep the approved homepage unchanged while evidence is collected.
The proposed communication task is to help a visitor understand project scope,
evaluate relevance and recognize what remains unqualified. Lead generation,
purchase and demos are not valid goals unless an owned, truthful destination
and actual access/service conditions are established.

**Modern infrastructure for the independent grocer** remains internal direction.
The analysis below combines W01's audience priority with R01–R05 context.
Questions, objections and information layers are planning hypotheses, not
customer interviews, measured demand or proof of Grocery product fit.

| Priority / audience | Business question and adoption risk | Information / evidence needed | Detail and legitimate future next step |
| --- | --- | --- | --- |
| 1 — Independent owners/operators | Will changing checkout disrupt trade, and is this project relevant to my store? | Clear scope, exclusions, transition/training plan and actual evaluation conditions; proven workflow fit before benefits | Plain operational explanation first; read an approved evaluation article, or use a verified owned channel if one is approved |
| 2 — Small regional / multi-store decision-makers | Can a change be controlled across stores without inconsistent authority or rollout? | Versioned scale, rollout/recovery and administration evidence; cost/ownership terms; no multi-store suitability inferred | Business decision summary with optional technical depth; evidenced fit material only after C06 approval |
| 3 — Grocery IT / implementation personnel | What must connect, what is supported and what happens on failure? | Exact dependencies/devices, contracts, data boundaries, failure tests and migration constraints | Technical annex with versions/limitations; verified documentation or contract only when approved |
| 4 — Integration / technology partners | Is there an actual integration surface and who owns its lifecycle? | Public contract, access, permissions, compatibility tests, licensing and support owner | Precise scoped integration information; approved developer destination, not exposed internal adapters |
| 5 — Existing customers / general visitors where relevant | Who is responsible, and where can I find genuine information or assistance? | Approved organization facts, current instructions and a real service/channel if it exists | Clear identity and plain orientation; approved resources/company/contact information; no existing-customer base assumed |

Trust should come from adjacent evidence and limitations, not badges, unsupported
numbers or an implied live-store deployment. R04 supports asking how payment
security is qualified; it does not permit a PCI badge. R03 supports asking which
barcode/device combinations were tested; it does not permit a compatibility seal.
R05's marketing structure suggests useful question groupings without authorizing
their corresponding pages here.

### Explaining technical differentiation and educational scope

For a future review brief, connect each technical idea to a visitor question,
then separate the design aim from observed behavior and show exclusions nearby.
For example, “what happens when internet access fails?” is a buyer question;
the only approved current answer remains the exact C04 development-objective
statement. A future recovery explanation needs actual scoped operation evidence,
not a stronger rewrite of that statement.

Use optional technical detail after the plain explanation. A component/language
list rarely answers an owner's operational question. Avoid “certified”,
“guaranteed”, “works everywhere”, “hardware agnostic” or “available now” without
the exact corresponding evidence and approval.

An educational article may explain questions to ask *any* supplier, with dated
sources and explicit distinctions. It must not slide from general advice into
claims that Grocery implements the described practices. A possible first
content-review brief is “how to evaluate checkout continuity and migration
evidence”; the topic, author and exact copy still need approval. No article,
slug, download, newsletter, demo booking or contact CTA is authorized.

## Positioning-pillar assessment

All seven names are strategic aspirations under evaluation, not approved public
headlines. Website architecture evidence never establishes the operational
platform's production characteristics.

| Pillar | Desired value / intended audience | Present evidence and approved subset | Missing proof and maturity risk | Proposed treatment |
| --- | --- | --- | --- | --- |
| Store Sovereignty | Owner control and understandable authority | W01/W02 separate operational and website responsibilities; C02's exact statement approved | No validated export/data ownership, autonomy, procurement or lock-in terms; “sovereignty” may imply rights not established | Internal question framework; request owner-defined rights and operation evidence |
| Grocery Depth | Fit for real grocery tasks | C05's exact internal single-register cash-only foundation statement | No broader workflow/scale, perishables, weighted-item, promotion or payment qualification established | Keep specific limitations; require representative workflow evidence before a Solutions claim |
| Global-by-Design | Future adaptability without conflating language and market | W02 typed language/context separation; public English and controlled pseudo proof | No real translations/RTL, market availability, jurisdiction/tax/payment coverage | Describe architecture only if separately approved; no geographic reach claim |
| Verified Reliability | Confidence in continuity and recovery | C04 only a local-first objective; W05 qualifies website behavior in recorded environments | No operational reliability, uptime, physical-store interruption/recovery or service guarantee evidence | Retain exact objective; withhold stronger reliability positioning |
| Certified Interoperability | Predictable supported device/partner fit | W03 historical bounded internal adapter intake; no approved certification statement | No certifier, standard/version, certificate validity, tested model matrix or public contract | Do not use certification wording/badges; resolve C07/C08 first |
| Progressive Power | Capability that can grow with a store's needs | Website's accepted inward boundaries/server-first presentation are engineering evidence | No product upgrade path, scalable multi-store behavior or released advanced capability confirmed | Internal hypothesis; seek versioned growth/upgrade evidence rather than feature teasers |
| Managed Freedom | Choice with accountable lifecycle/service | W01 identifies intended commercial versus operational ownership | No service staffing, SLA, managed deployment, channel or hardware-freedom commitments | Internal only; resolve C07/C09/C10 ownership and exclusions |

## C01–C12 claim-readiness reconciliation

The two tables join by stable IDs. They carry the required evidence, audience,
maturity, qualifiers, approval, ownership and next-action dimensions.
“Not a capability” does not establish product maturity. All capability subjects
whose status is unknown remain **UNVERIFIED / UNRESOLVED**; none is guessed PLANNED.
Evidence classifications describe the named evidence, not blanket claim truth.

| ID / audience-purpose | Candidate content need and pinned sources | Evidence sufficiency / maturity | Required qualification and exclusions |
| --- | --- | --- | --- |
| C01 — All; identity | Project identity versus responsible legal organization; W01/W04 | Exact approved project identity sufficient; legal/brand facts unresolved. Not a capability | Pre-production project; repository identity is not legal entity, customer base or brand-rights proof |
| C02 — Owner/IT; responsibility | Website information versus operational POS responsibilities; W01/W02/W04 | Accepted rule and exact approved statement sufficient; not implemented commercial services. Not a capability | No website checkout, account or service functionality implied |
| C03 — IT; architecture explanation | Current website stack/server presentation; W02/W04/W05 | Direct website evidence scoped to baseline; not appliance evidence. Not a capability | Next framework scripts remain; no zero-JavaScript or product-reliability implication |
| C04 — Owner/IT; continuity | Local-first aim versus tested offline/recovery behavior; W03/W04 | Exact qualified objective approved; broader operational evidence insufficient. UNVERIFIED / UNRESOLVED | No uptime, offline guarantee, physical-store readiness or universal recovery claim |
| C05 — Owner/IT; actual scope/access | Internal checkout foundation and evaluation conditions; W03/W04 | Exact bounded implementation statement approved; commercial maturity/access unresolved. UNVERIFIED / UNRESOLVED outside that wording | Single-register, cash-only, pre-production; incomplete cards/devices/live-retail qualification; no offered demo/pilot inferred |
| C06 — Regional/owner; workflow fit | Named grocery context/scale; W01 | Audience intent only; product fit insufficient. UNVERIFIED / UNRESOLVED | Name tested workflow/store conditions and exclusions; no multi-store inference |
| C07 — Owner/IT; physical fit | Device compatibility/certification; W03; R03 contextual only | No current approved test/certificate package. UNVERIFIED / UNRESOLVED | Model, firmware, OS, software/configuration and certificate scope must be explicit |
| C08 — Partner/IT; integrations | Supported public contract/access; W03; R05 contextual only | Internal adapter pointer insufficient. UNVERIFIED / UNRESOLVED | Versioned contract, permissions, access/support and lifecycle; withhold internal endpoints |
| C09 — Customers/evaluators; assistance | Real support/service scope; W01 | No staffing/channel/commitment evidence. UNVERIFIED / UNRESOLVED | Actual owned channel, eligible audience, hours and approved expectations; no SLA inferred |
| C10 — Buyers; commercial decision | Price/purchase/terms; W01 | No authoritative offer supplied. UNVERIFIED / UNRESOLVED | Currency, market, taxes, scope/effective terms; English implies neither US nor USD |
| C11 — All; accountability/contact | Company facts and real contact; W01/W06 | Organization/channel facts unresolved. Not a capability | Verified identity, privacy and ownership; no fabricated team/history/response promise |
| C12 — Owner/IT; education | Defined evaluation topic; W02/R01–R06 | Sources support an internal brief, not finished reviewed prose. Not a capability | Author/reviewer, date and source limits; distinguish advice from Grocery claims |

| ID | Disclosure eligibility / current explicit approval | Proposed evidence/editorial owner — assignment pending except maintainer authority | Missing input / earliest proposed gate |
| --- | --- | --- | --- |
| C01 | Exact existing statement only approved; all expansion withheld | Maintainer / identity owner | Verified legal/brand facts if needed; M2.2 exact review |
| C02 | Exact existing statement only approved; all expansion withheld | Maintainer / architecture reviewer | Audience-useful bounded explanation, if needed; M2.2 |
| C03 | New disclosure NOT AUTHORIZED; withhold | Maintainer / technical-editorial reviewer | Decide audience value and approve exact baseline-scoped wording; M2.2 |
| C04 | Exact existing objective only approved; stronger assertions withheld | Maintainer / product qualification owner | Actual connectivity/failure/recovery evidence, scope and maturity; M2.2 after intake |
| C05 | Exact existing foundation/limits only approved; additional scope/access withheld | Maintainer / product owner | Sanitized current revision, maturity and genuine evaluation/access conditions; M2.2 after intake |
| C06 | NOT AUTHORIZED; withhold | Maintainer / product-workflow owner | Representative use/scale evidence and approved exclusions; M2.2 only if supplied |
| C07 | NOT AUTHORIZED; withhold | Maintainer / hardware qualification owner | Versioned tests/certification, rights and supported sourcing facts; M2.2 only if supplied |
| C08 | NOT AUTHORIZED; withhold | Maintainer / integration owner | Actual public contract and support/access authority; separately scoped future integration review |
| C09 | NOT AUTHORIZED; withhold | Maintainer / service owner | Service/channel evidence and privacy/response decisions; future review after ownership |
| C10 | NOT AUTHORIZED; withhold | Maintainer / commercial owner | Authoritative terms and market authority; future commerce/pricing scope |
| C11 | NOT AUTHORIZED beyond exact C01 identity; withhold | Maintainer / organization-channel owner | Verified publishable organization facts, real channel and privacy; M2.2 if supplied |
| C12 | NOT AUTHORIZED; withhold pending exact editorial approval | Maintainer / author and subject reviewer | Select a topic; review sources, exact text/metadata and maintenance; possible M2.2 brief |

No confidentiality eligibility beyond existing approval is inferred from a
public repository, test fixture, INTERNAL label or available source. For all
new content, the maintainer must confirm that the sanitized facts are eligible
for disclosure before exact publication approval. No unassigned role is a
confirmed individual or delegated approver.

## P01–P08 and target-page readiness

Keep historical P IDs: P06 is Documentation, P07 Company and P08 Contact.
No new ID/URL becomes a route registration. The approved target IA supplies
questions and ownership, not permission to populate its sitemap.

| Candidate / visitor question | Distinct material and candidate section hierarchy | Evidence/disclosure and optional assets | Destination, route need and owner | Recommendation |
| --- | --- | --- | --- | --- |
| P01 — Home: what is this project today? | Existing approved identity → internal scope/limits → local-first objective → website boundary | W04 exact copy/metadata; no new asset needed | Existing /en and identity only; maintainer owns approval | Retain unchanged; no new content-review implementation proposal yet |
| P02 — Platform: what exists and how does it fit? | Versioned scope → intended/implemented architecture → prerequisites → exclusions/evidence | C02/C04/C05 expansion needs current product evidence and exact approval; optional approved diagram | Actual route only if distinct sufficient content; home/related material only when eligible; proposed product/editorial owner | Blocked on evidence |
| P03 — Solutions: does it fit a specific store problem? | Named context → evidenced workflow → fit/limits → verified next step | C06; real workflow/case rights, no imagined customer story | Route only for a genuinely evidenced case; no generic index quota; proposed product-workflow/editorial owner | Blocked on representative fit evidence |
| P04 — Hardware: what exact equipment is qualified? | Requirements → model/configuration matrix → restrictions → sourcing conditions | C07; tests/certification separately; real version-correct photos if approved | Route only with actionable approved matrix; no purchase link without offer; proposed hardware/editorial owner | Blocked on evidence and assets/rights if used |
| P05 — Resources: how should I evaluate a topic? | Concrete question → dated evidence → practical checklist → limits/source notes | C12/R01–R06; exact article approval; diagram optional | One useful article could justify a child route before an index; onward approved home/source links only; proposed author/reviewer | Ready for a future content-review brief only; not approved copy, route or implementation |
| P07 — Company: who is responsible? | Verified identity → approved approach → actual accountability/channel | C01/C11; legal/people/brand facts and rights | Route only if distinct approved substance; proposed organization/editorial owner | Blocked on verified facts and disclosure |
| P08 — Contact: what real next step exists? | Purpose → actual owned channel → privacy → accurate expectations | C09/C11; no contact service supplied; forms need separate security approval | A verified direct channel may avoid a new route; no placeholder CTA; proposed channel/privacy owner | Blocked on owner/channel/service facts |
| P06 — Documentation: how do I perform a supported task? | Version/audience → prerequisites → verified steps → failures/support | Actual approved instruction execution, C08/C09 as relevant; redacted real screenshots only | Route justified by supported task; no empty docs platform; proposed technical/editorial owner | Defer to separately authorized documentation scope |

For all candidates, maintenance requires a named owner, actual review date,
version-change triggers, correction/withdrawal process and review of links/claims.
If the owner, approved substance or destination is absent, defer the page.
Candidate headings above are section purposes, not factual public copy.

Adjacent Developers requires a public contract/access policy; Support requires
real entitlement/service channels; Pricing requires authoritative market/currency/
tax/offer terms. Commerce and Accounts need separate journeys, server authority,
identity/organization checks, cache/privacy and payment qualification. These remain
deferred, with no UI, endpoint, form or route authorization. Existing customers
are an intended future audience, not a demonstrated installed base.

## Owner questions and next decisions

The human maintainer remains the only established approval authority. Other
roles below are proposed responsibilities requiring explicit assignment.

| Priority / proposed owner | Specific input needed | Decision enabled / omission if absent |
| --- | --- | --- |
| 1 — Maintainer / product owner | Which store contexts and geography should research prioritize, and what exact product revision is authoritative? | Focus the next evidence intake; do not infer multi-store suitability or a market from English |
| 2 — Product qualification owner | Which observed capabilities/limits can be summarized safely, with exact tests/version and confirmed maturity/access? | Reassess C04–C08; retain exact homepage and withholding if unavailable |
| 3 — Editorial owner / subject reviewer | Is an educational evaluation brief useful, who writes/reviews it, and how will changes be maintained? | Select one evidence-backed M2.2 brief or defer; no route quota |
| 4 — Channel / privacy owner | Is there an actual owned contact/evaluation destination, who responds and what may be promised? | Consider a truthful next step only after verification; omit CTA otherwise |
| 5 — Organization / asset owner | Which identity facts and real assets are owned/licensed and approved for this audience/version? | Review Company/asset options; omit unsupported facts or imagery |
| 6 — Maintainer / engineering owner | Does an approved content need demonstrate a styling/component or animation problem the existing system cannot adequately serve? | Apply the experience study; any architecture exception needs separate review, not an installer |
| 7 — Maintainer | Which planning conclusions and later checkpoint scopes should be approved, and what is explicitly deferred? | Independent/human review of M2.1; later execution and exact disclosure remain separate decisions |

The four [planning NOTE findings](../engineering/milestone-2-plan.md#planning-findings-and-owner-decisions)
summarize these constraints. They are not current application defects.
No capability maturity, editorial assignment, service or publication decision is
invented to fill this matrix.

## Review and nonauthorization

Independent review should challenge source dates/applicability, unknown maturity,
pillar overclaim, C/P approval boundaries, useful page differentiation and owner
assignments. Validate links/anchors and preserve M1 historical records. Existing
CI is prior foundation evidence, not fresh qualification of this planning candidate.

No additional public copy, title/description, claim, route, language, asset,
navigation, client runtime or deployment is authorized. M2.1 remains under review,
not complete or accepted.
