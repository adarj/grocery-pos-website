# M2.4.1 — First Educational Resource Implementation: Formal Acceptance

## Effective human acceptance — October 12, 2026 (UTC)

On October 12, 2026 (UTC), the human maintainer explicitly stated:

> I formally accept M2.4.1 — First Educational Resource Implementation.

**M2.4.1: FORMALLY ACCEPTED October 12, 2026 (UTC).**
The acceptance target is the reviewed implementation at
`8577c49db8de1b08f2a95caf0fa61018475237ed`. Acceptance is already effective;
it belongs to the maintainer, not Codex, independent audit, a signature or CI.
It covers only the bounded implementation and retained limitations below, with
no approval of future substantive content or behavior changes.

This separate administrative acceptance record remains an uncommitted candidate.
Its independent audit, human review, signed integration, own exact-SHA CI and
focused repository closeout are pending. Those steps do not postpone the human
decision or reopen accepted engineering work.

**EXACT R1 CONTENT DISCLOSURE: HUMAN APPROVED.**
**M2.4 OVERALL: NOT YET FORMALLY ACCEPTED.**
**M2.5 FORMAL QUALIFICATION: NOT AUTHORIZED.**
**M2.6 FINAL M2 ACCEPTANCE: NOT AUTHORIZED.**
**PRODUCTION PUBLICATION: NOT AUTHORIZED.**
**DEPLOYMENT: NOT AUTHORIZED.**
**M2 OVERALL: IN PROGRESS, NOT FORMALLY ACCEPTED.**
No additional application implementation is authorized by this record.

## Accepted implementation scope

The unchanged [implementation report](m2-4-1-resource-implementation.md) owns the
preparation-time architecture, changed-file inventory, local validation and
limitations. Its pending audit/integration/CI statements remain historical;
this later record supplies the completed events and effective acceptance.

| Area | Accepted behavior at the target SHA |
| --- | --- |
| Resource | `/en/resources/evaluating-grocery-pos-systems`, one validated server-rendered English route with exact approved M22-C12-A01-R1 content and distinct metadata |
| Editorial presentation | One focusable main and semantic article, one H1, seven ordered H2 sections, native paragraphs/list and six citation anchors; retain approved source/scope qualifiers and exclude administrative labels/markers |
| Homepage | Preserve all four existing sections, substantive wording and metadata; add only the approved full-title contextual native link in a new paragraph immediately after the fourth-section About this website paragraph |
| Identity / framework seam | Page-owned server-rendered shell composition; typed Home / Resource identity; Grocery POS home is page-current only on home. The shared language layout retains the single HTML/body and language/robots responsibilities. |
| Language / navigation | English remains the sole public language; unsupported and production pseudo routes remain unavailable. Native skip/navigation, direct requests, back/forward and JS-disabled behavior have bounded regression coverage. |
| Styling / tests | Existing first-party CSS and semantic tokens, justified local reading/list rules; associated language, accessibility, security, exact-content, metadata and navigation regressions |

**Next routes. ReScript models. React presents. APIs connect.**
[ADR 0006](../adr/0006-css-and-design-system-foundation.md) and the
[design-system contract](../design/design-system-specification.md) remain binding.
No authored client island, API, runtime external provider, new dependency, asset,
language, Resources index, global menu, search, breadcrumbs or footer expansion
was added. shadcn/ui, Sass and Rive remain deferred.

## Exact editorial identity and disclosure

The unchanged [authoritative R1 source and extraction contract](../product/m2-2-exact-content-disclosure-review.md#exact-editorial-candidate-and-identity)
identify the approved internal editorial block:

- Identifier: **M22-C12-A01-R1**.
- Title: **Evaluating Grocery POS Systems: Checkout Continuity, Migration, and Operational Risk**.
- Input: **7,840 UTF-8 bytes**, original LF endings, no normalization.
- SHA-256: `1b17142f74d05747dd4ed130dac29c638df20faeb846190e4dcabd5356663c05`.

Read-only reproduction during record preparation matches that length and digest;
the complete source document remains byte-identical to the accepted HEAD version.
The digest identifies title, metadata, body, six outgoing citations and scope
notes under the existing marker contract, not serialized HTML or the entire
administrative Markdown document. This record does not duplicate or revise R1.

The [D1–D6 human decisions](m2-4-human-decisions.md) retain their exact editorial,
ownership, audience, maintenance, rights-review and presentation authority.
D5's narrow R1 disclosure approval remains effective. It does not establish
production publication or deployment. C03, broader unapproved C01/C02/C04/C05
assertions, other P02–P08 material and unknown operational maturity remain
withheld or UNVERIFIED/UNRESOLVED beyond the actual approved scope. The educational
article supplies no Grocery POS commercial availability, compatibility,
certification, reliability or customer-deployment evidence.

## Signed implementation and exact-SHA CI provenance

Read-only initial inspection found clean `main`, empty index, no untracked files,
HEAD/main/origin/main all `8577c49db8de1b08f2a95caf0fa61018475237ed`, ahead/behind 0/0.

- [Accepted implementation commit](https://github.com/adarj/grocery-pos-website/commit/8577c49db8de1b08f2a95caf0fa61018475237ed).
- Subject: `feat(web): implement M2.4.1 educational resource page`.
- Parent: `3854375bf2e7ccd2149ce3e316d7343108291649`.
- GitHub signature verification: **valid** (`verified: true`, reason `valid`).
- [Exact-SHA run 38320702025](https://github.com/adarj/grocery-pos-website/actions/runs/38320702025): **SUCCESS**, completed, push to `main`, attempt 1, on that exact implementation SHA.

Read-only GitHub commit/run metadata, job steps and decoded job logs were inspected
during preparation. The supported Ubuntu 24.04 x86_64 job ran canonical `just ci`;
its recorded results are:

| Gate | Committed-revision result |
| --- | --- |
| ReScript formatting / compilation | PASS |
| ESLint | PASS |
| Unit tests | 19/19 PASS |
| Supervisor regressions | 7/7 PASS |
| Next.js route type generation / typecheck | PASS |
| Production build | PASS |
| Chromium | 18/18 PASS |
| Firefox | 18/18 PASS |
| WebKit | 18/18 PASS |
| Complete browser matrix | **54/54 PASS** |
| Source-cleanliness gate | PASS |

This CI supplies canonical automated validation of the integrated implementation;
it does not qualify this new acceptance record, complete formal M2.5 or establish
actual human assistive-technology/OS qualification. No build or browser session
was rerun to prepare this documentation-only record.

## Independent audit, retained notes and human observations

The preceding independent read-only audit returned:

**PASS — M2.4.1 IMPLEMENTATION CANDIDATE READY FOR HUMAN REVIEW**

The reviewer independently inspected the 21-file candidate and found no
substantiated BLOCKER, MAJOR or MINOR defect. This supplied audit outcome is a
review recommendation, not human acceptance. Source inspection and assessment
of reported test evidence are distinct from actually executing automated tests;
the later exact-SHA CI above provides the committed-revision execution evidence.

| Note | Retained observation and later disposition |
| --- | --- |
| M241-T01 | An author-time invalid-language request intermittently exceeded the unchanged test timeout; the unusual response delay's root cause remains undetermined. The invalid-route scenario subsequently passed in all three engines in exact-SHA CI. A passing run does not explain or erase the original observation; investigate recurrence rather than weaken assertions or increase timeouts. |
| M241-R01 | Author-time test-provenance limitations remain historical. The later exact-SHA CI supplies canonical committed-revision validation; it does not reconstruct missing original local artifacts or manual provenance. |
| M241-R02 | Local WebKit was unavailable. Supported-host exact-SHA CI resolves automated three-engine coverage for the accepted revision, not local native-runtime availability or human AT/OS coverage. |
| M241-R03 | Hosting integration was initially unverified. The maintainer reports checking before the push and finding no connected hosting pipeline. This is human-reported operational provenance; Codex did not independently inspect hosting accounts or establish deployment-edge qualification. |

The maintainer reports manual review of the candidate, evaluation of the locally
served website and the pre-push hosting check above. The maintainer explicitly
accepted M2.4.1 after independent review and successful exact-SHA CI. No screenshot,
manual transcript, hosting-account artifact or additional human accessibility
observation is invented. Local website evaluation does not automatically satisfy
the entire M2.3 A01–A12 matrix or authorize a public launch.

## Acceptance chronology

| Order | Event and authority |
| --- | --- |
| 1 | M2.1–M2.3 formal human acceptance and verified repository closeouts; their canonical records remain unchanged |
| 2 | October 12, 2026 (UTC): D1–D6 human editorial/disclosure/presentation decisions, subsequently signed and integrated at the parent revision above |
| 3 | October 12, 2026 (UTC): explicit bounded M2.4.1 implementation authorization, recorded verbatim in the implementation report |
| 4 | Preparation of the 21-file local implementation candidate and author-time automated checks with retained limitations |
| 5 | Separate independent read-only implementation audit returning the PASS above |
| 6 | Maintainer-reported manual review and local website evaluation; hosting-pipeline check before pushing |
| 7 | Human-signed implementation integration at 8577c49db8de1b08f2a95caf0fa61018475237ed |
| 8 | Successful exact-SHA implementation CI, run 38320702025 |
| 9 | October 12, 2026 (UTC): explicit formal M2.4.1 acceptance quoted above |
| 10 | Preparation of this separate, five-path documentation-only acceptance-record candidate |
| 11 | Pending separate independent audit, human manual review, signed commit/push, acceptance-record exact-SHA CI and focused repository closeout |

The maintainer's instruction supplies the acceptance, preceding independent-audit
outcome/notes and human-review chronology. Git/GitHub inspection corroborates the
implementation revision, signed provenance and CI. No within-day decision
timestamps or unprovided evidence are invented. Historical pending statements
remain accurate descriptions of their preparation-time state, superseded by this
record and the [M2 plan's current acceptance status](milestone-2-plan.md#formal-m241-acceptance-and-current-status--october-12-2026-utc).

## Remaining qualification, findings and release restrictions

The accepted [M2.3 A01–A12 plan](../design/m2-3-information-architecture-experience-qualification.md#future-accessibility-qualification-matrix)
and [manual evidence contract](m1-5-1-qualification-baseline.md#common-manual-evidence-record)
remain applicable. Automated evidence is available at the accepted implementation
SHA; formal M2.5 qualification is **not performed and not authorized**. Future
applicable qualification and publication decisions still need:

- Native 400% browser zoom and actual 200% text enlargement observations.
- Human screen-reader, semantic navigation and keyboard observations.
- Genuine Windows forced-colors and physical-device/touch review.
- Controlled text-spacing and responsive visual observations.
- Controlled laboratory performance comparison, distinct from field evidence.
- Final editorial source/fact/rights verification and applicable specialist review before publication.
- Hosting/deployment-edge qualification and explicit production release authority.

Reuse valid, appropriately scoped evidence with exact source/running-build,
operator, environment and observation provenance where justified; no wholesale
repetition of unchanged evidence is required. Missing applicable coverage remains
UNVERIFIED pending explicit human disposition. Browser emulation, root-font stress
or automated axe results do not replace actual AT, native zoom or genuine OS
observations, and do not establish WCAG conformance.

| Finding | Continuing disposition |
| --- | --- |
| M21-01 | OPEN — NOTE: product maturity/version/market evidence and exact disclosure prerequisites |
| M21-02 | OPEN — NOTE: broader store/market and genuine contact/evaluation/operational ownership remain unresolved; article-specific interim editorial/maintenance responsibility and audience are confirmed |
| M21-03 | OPEN — NOTE: demonstrated component/tooling need before architecture reconsideration |
| M21-04 | OPEN — NOTE: future asset ownership/rights, representativeness, revision accuracy and qualification |
| M22-ACC-N01 | Historical nonblocking procedural NOTE: M2.2 acceptance-record audit followed integration |
| R24-N01 | Retained independent inventory-provenance NOTE; present file comparison cannot recover missing historical generated/private-evidence inventory provenance |

Accepted [M0](milestone-0-qualification.md) and
[M1 limitations](milestone-1-acceptance.md#accepted-qualification-limitations)
remain binding: genuine Windows forced-colors unverified, original manual/build
provenance and evidence-loss limitations, scoped human observations,
laboratory-only performance, bounded CSP/security tradeoffs and future feature
triggers. Retain the ESLint **9.39.5** exception with review no later than
**January 8, 2027**. No commercial readiness, security/accessibility certification,
production publication or deployment qualification arises from this acceptance.

## Administrative record gates

Under the [Git workflow](../agents/git-workflow.md) and
[CI contract](quality-and-ci.md), this acceptance-record candidate requires:

1. Separate independent strictly read-only adversarial audit.
2. Human manual review and disposition of any substantiated findings.
3. Human-signed commit and push.
4. Successful GitHub Actions on the acceptance-record commit's own exact SHA.
5. Focused repository closeout verification.

All five steps remain pending for this new record at preparation time. Author
checks are not an independent PASS; run 38320702025 qualifies the implementation
only. These administrative gates do not postpone effective human M2.4.1
acceptance, formally accept M2.4 overall, open M2.5/M2.6 or authorize any additional
implementation, public release or deployment. Only the five permitted Markdown
paths are changed; accepted source, application/tests and historical records
remain untouched. Changes remain unstaged and uncommitted.

Suggested future human-controlled subject: `docs(web): record formal M2.4.1 acceptance`.
