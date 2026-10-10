# M1.5 — Final Qualification: Formal Acceptance

## Formal human acceptance — October 10, 2026 (UTC)

On October 10, 2026 (UTC), the human maintainer explicitly stated:

> I formally accept M1.5 — Final Qualification.

**M1.5 — FINAL QUALIFICATION: FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC).**

The decision accepts the cumulative qualification evidence and previously
accepted bounded limitations of M1.5.1, M1.5.2 and M1.5.3. It is an effective
human decision, not acceptance inferred from CI or issued by this documentation
author. Repository closeout is in progress: this record and the M15R-01 correction
still require independent review, human review, signed integration and their own
exact-SHA CI. Those administrative requirements do not postpone the recorded
human acceptance date.

This outcome supersedes earlier M1.5-in-progress and pending-status statements
in dated checkpoint records without changing their historical meaning.
**Milestone 1 overall remains NOT FORMALLY ACCEPTED.** Completing M1.5
does not itself accept Milestone 1 or authorize implementation or public release.

## Accepted scope and governing records

The scope is the accepted pre-production informational website, distinct from
the operational Grocery POS Platform. The implementation remains the
server-rendered, statically built four-section `/en` homepage, its exact approved
headings, four substantive statements, title and meta description, existing
English routing and development-only pseudo-localization.

**Next routes. ReScript models. React presents. APIs connect.**

The [M1.4.2 acceptance](m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc)
and [exact homepage disclosure approval](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc)
remain the application and publication authorities. Approval covers the exact
bounded C01/C02/C04/C05 statement subset, not entire claim categories.
Other substantive assertions and P02–P08 remain withheld and unimplemented;
no new content, route, language, product capability or commercial availability
classification is approved.

The [M1 plan](milestone-1-plan.md), [accepted ADRs](../adr/README.md),
[security baseline](security-baseline.md), [accessibility and performance expectations](accessibility-and-performance.md)
and [quality/CI contract](quality-and-ci.md) continue to govern. This record
reconciles existing qualification evidence; it introduces no new execution,
architectural specification, testing infrastructure or application correction.

## Checkpoint acceptance and exact-revision provenance

Implementation/integration revisions and subsequent administrative acceptance
records have separate roles. The linked canonical records own the original
audit wording, execution chronology and detailed evidence.

| Checkpoint / human acceptance | Accepted deliverable and independent review | Signed integration and acceptance-record CI |
| --- | --- | --- |
| [M1.5.1 — October 9, 2026 (UTC)](m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc) | FORMALLY ACCEPTED. The 26-requirement inventory, ten evidence sources, classifications, findings and prospective manual/performance protocols were accepted. Original decision: **M1.5.1 INDEPENDENT AUDIT — PASS, READY FOR HUMAN REVIEW**; no substantiated BLOCKER, MAJOR or MINOR finding. | Signed implementation `35e4fd72c170f0f4a28286044bf890ab69f33cfc`, [run 37883330881](https://github.com/adarj/grocery-pos-website/actions/runs/37883330881). Signed acceptance record `e5db9126e57b39aa120004d684f7af78e229fc7b`, [run 37884329332](https://github.com/adarj/grocery-pos-website/actions/runs/37884329332). Both succeeded on their own exact main SHA. |
| [M1.5.2 — October 9, 2026 (UTC)](m1-5-2-qualification-results.md#formal-m152-acceptance--october-9-2026-utc) | FORMALLY ACCEPTED AND COMPLETE. Technical qualification, scoped human observations and explicit bounded limitations were accepted. The original evidence audit's CONDITIONAL PASS is preserved; replacement-evidence follow-up PASS independently resolved A152A-01. Focused summary-correction PASS independently resolved A152M-01; final reconciliation audit returned PASS. | Signed integration `b5c090709145d3fc48efef0f12e3aa8630f7d07e`, [run 37978959204](https://github.com/adarj/grocery-pos-website/actions/runs/37978959204). Signed acceptance record `335a31187284956f2a8eb6e23deecee0e12ed3fe`, [run 37981808698](https://github.com/adarj/grocery-pos-website/actions/runs/37981808698). Both succeeded on their own exact main SHA. |
| [M1.5.3 — October 10, 2026 (UTC)](m1-5-3-correction-assessment.md#formal-m153-acceptance--october-10-2026-utc) | FORMALLY ACCEPTED AND COMPLETE; NO CORRECTIVE APPLICATION IMPLEMENTATION REQUIRED. Accepted decision: **A — NO CORRECTION JUSTIFIED**. The original independent assessment audit returned **CONDITIONAL PASS — A153A-01 MINOR correction required**. The later focused audit returned **PASS — A153A-01 RESOLVED**. | Signed assessment `f2db122136675e21133cb4c3c0443d87f6dd41b2`, [run 38042793882](https://github.com/adarj/grocery-pos-website/actions/runs/38042793882). Signed corrected reconciliation `7aec4feaae90afa946565adb17fe60c6e230fccf`, [run 38044259857](https://github.com/adarj/grocery-pos-website/actions/runs/38044259857). Signed acceptance record `1067bd0d21ac45890dcf8e94a3afdf353f372bde`, [run 38044969571](https://github.com/adarj/grocery-pos-website/actions/runs/38044969571). Each succeeded on its own exact main SHA. |

The checkpoint audit dispositions are recorded in their canonical acceptance
sections and the task's independent-review chronology. They are not replaced
by a new technical audit here. No substantiated present BLOCKER, MAJOR or MINOR
application defect required or received corrective implementation.

### Verified baseline and completed M1.5.3 acceptance-record qualification

This administrative closeout starts on `main` at
`1067bd0d21ac45890dcf8e94a3afdf353f372bde`,
`docs(web): record formal M1.5.3 acceptance`.
HEAD, main and origin/main match; ahead/behind is 0/0, with an initially clean
worktree and empty staging. Read-only GitHub verification reports a valid
signature; the local signed payload and signature match that verified commit.
The preceding checkpoint integration and acceptance revisions are ancestors
of this baseline. Application, test and configuration files remain unchanged
from the accepted homepage implementation.

[Run 38044969571](https://github.com/adarj/grocery-pos-website/actions/runs/38044969571)
completed **SUCCESS**, push to main, attempt 1, for that exact acceptance-record
SHA. Read-only run metadata, steps and
[Quality and browsers job logs](https://github.com/adarj/grocery-pos-website/actions/runs/38044969571/job/114192549932)
identify supported Ubuntu 24.04 x86_64 (runner OS 24.04.5) and establish:

| Gate | Completed acceptance-record result |
| --- | --- |
| Unit/fixture tests | PASS — 17/17 |
| Development-supervisor regressions | PASS — 7/7 |
| Chromium | PASS — 10/10 |
| Firefox | PASS — 10/10 |
| WebKit | PASS — 10/10 |
| Browser aggregate / execution policy | PASS — 30/30; one worker; zero configured retries |
| Lint / formatting / ReScript and TypeScript typechecking | PASS |
| Production build / source cleanliness | PASS |

Zero retries is the unchanged Playwright configuration; the logs confirm one
worker and ten executed scenarios per engine. Thirty scenarios do not represent
thirty independent product capabilities or exhaustive certification.

These results qualify the integrated M1.5.3 acceptance record. They do **not**
qualify this new M1.5 overall acceptance-record candidate. No build, browser
suite, benchmark or manual accessibility session is performed for this closeout.

## Cumulative reconciliation of the 26 requirements

The [original inventory](m1-5-1-qualification-baseline.md#current-verification-inventory)
and [evidence-classification method](m1-5-1-qualification-baseline.md#evidence-classification-and-provenance)
remain intact. Later [M1.5.2 observations](m1-5-2-qualification-results.md#current-manual-evidence-reconciliation--october-9-2026-utc),
[replacement build/output evidence](m1-5-2-qualification-results.md#replacement-build-public-output-and-pseudo-observations)
and [replacement measurements](m1-5-2-qualification-results.md#replacement-performance-methods-and-raw-statistics)
supply the cumulative dispositions below. “Verified” applies only to the stated
assertion, environment and inspection boundary. It does not imply that all
26 requirements are fully verified.

| Requirement | Cumulative classification and retained scope |
| --- | --- |
| Q01 — Routing/framework ownership | VERIFIED — CURRENT, source ownership and thin validated Next entrypoints; deployment-edge routing is separate. |
| Q02 — Static rendering / JS-disabled content | VERIFIED — CURRENT for accepted builds and production browser assertions of the approved homepage; hosting delivery is untested. |
| Q03 — Root redirect / invalid and pseudo production routes | VERIFIED — CURRENT for sampled routes and method behavior under the existing tests; no universal input or hosting-edge claim. |
| Q04 — Exact approved copy / metadata / structure | VERIFIED — CURRENT for the precise approved statement subset and page composition; no broader disclosure or maturity approval. |
| Q05 — Public HTML/RSC/loaded-script exclusion | VERIFIED — CURRENT for tested output and eight fictional-qualification needles; not universal secret detection. |
| Q06 — Complete build graph / artifact exclusion | Replacement exact-build evidence obtained and independently audited within the inventoried public-output, manifest and source-map boundaries. VERIFIED — CURRENT within that documented scope; no exhaustive arbitrary-secret guarantee. |
| Q07 — No authored homepage client interaction | VERIFIED — CURRENT for source and client-reference graph. Framework JavaScript remains present. |
| Q08 — Capability withholding / typed maturity | VERIFIED — CURRENT for pure policy/decoding and isolated fictional fixtures; not a customer capability register or commercial availability proof. |
| Q09 — 43-token reference integrity | VERIFIED — CURRENT by source reference inspection; generic/synthetic rules do not establish visible homepage widgets. |
| Q10 — Text/control/focus contrast | VERIFIED — CURRENT for measured opaque sRGB contexts and tested focus states; synthetic styling probes are not user-facing controls. |
| Q11 — Responsive/enlarged/spaced text | PARTIALLY VERIFIED as a whole requirement. Automated assertions and scoped human zoom/reflow/spacing observations are retained; no exhaustive visual, width/platform or combined 200% matrix. |
| Q12 — Native keyboard/skip/focus | VERIFIED — CURRENT for asserted native targets and traversal; PARTIALLY VERIFIED for broader manual coverage/provenance. M152-T01 supplies its separate scoped spacing observation without promoting the whole requirement. |
| Q13 — Automated accessibility | VERIFIED — CURRENT for the configured whole-page axe scan; incomplete/manual rules and broader accessibility are not conformance proof. |
| Q14 — Forced colors / reduced motion | VERIFIED — CURRENT for automated browser emulation and asserted states; not genuine Windows OS testing. |
| Q15 — Development pseudo rendered layout | Replacement Chromium/Firefox development-runtime evidence obtained and independently audited. VERIFIED — CURRENT within recorded expansion, metadata, keyboard and reflow checks; no real-language or RTL qualification. |
| Q16 — Human keyboard/zoom/visual observations | PARTIALLY VERIFIED. Historical and later human-reported observations retain their environment, exact-build and metadata limitations; they were not independently executed here. |
| Q17 — D13-01 screen reader | PARTIALLY VERIFIED, including human-reported 8/8 VoiceOver/Safari PASS within the recorded environment; exact running-build identity, separate VoiceOver version and verbatim transcripts/procedure details remain incomplete. |
| Q18 — D13-02 physical touch/device | PARTIALLY VERIFIED, including human-reported 6/6 iPhone 13 Pro/Safari PASS; browser/display/JS/build metadata and unmeasured target-size boundaries remain. |
| Q19 — D13-03 actual OS high contrast | PARTIALLY VERIFIED: human-reported 5/5 macOS Increase Contrast PASS only. Genuine Windows forced-colors remains UNVERIFIED; its absence is explicitly human-accepted for this homepage. |
| Q20 — Security headers / diagnostics | VERIFIED — CURRENT for asserted local production responses and browser diagnostics; accepted CSP allowances and deployment limitations remain. |
| Q21 — Performance metrics / transfer / main thread | Replacement raw laboratory measurements obtained and independently audited. VERIFIED — CURRENT within the documented local profiles, observation windows, byte conventions and trace methodology; not field, physical-phone or production-edge performance. |
| Q22 — Dependency/install/build discipline | VERIFIED — CURRENT for frozen installation, pinned toolchain and unchanged quality/build gates; not proof of vulnerability absence. |
| Q23 — Live Counter hydration/activation | NOT APPLICABLE to the current homepage. Counter SSR is not live browser evidence; the next real client-island restoration gate remains binding. |
| Q24 — Counter screen-reader status announcement | NOT APPLICABLE to the current public surface; actual status-changing functionality would require appropriate future AT/interaction qualification. |
| Q25 — Real translations/RTL / accounts/commerce | NOT APPLICABLE to the current implemented scope; no qualification or implementation approval for those future surfaces. |
| Q26 — Production HTTPS/HSTS/edge/release | UNVERIFIED and separately authorized. Local qualification and green CI do not establish deployment-edge properties or release permission. |

Whole-requirement limitations in Q11/Q12/Q16–Q19 do not erase directly verified
assertions. Accepted missing evidence remains missing; acceptance does not
convert PARTIALLY VERIFIED, UNVERIFIED or NOT APPLICABLE entries into universal
PASS results.

## Carried finding dispositions and accepted limitations

The [M1.5.3 disposition register](m1-5-3-correction-assessment.md#finding-and-obligation-dispositions)
links the original records. The cumulative disposition is:

| Finding / obligation | Accepted disposition |
| --- | --- |
| A151-01 / A151-02 / A151-03 | Scoped human D13 observations supplied; broader provenance and coverage limitations remain, including UNVERIFIED Windows testing. |
| A151-04 / A151-05 | Independently audited replacement laboratory baseline and exact-build/output provenance obtained within documented limits. |
| A151-06 | Future client-island regression restoration remains binding; retained SSR fixtures are insufficient. |
| A151-07 | Accepted CSP limitations and separate deployment-edge gates remain; no newly substantiated present security defect. |
| A151-08 | Historical/manual metadata limitations remain unverified, with explicit human acceptance through A152M-02. |
| A151-09 | ESLint 9.39.5 bounded maintenance exception retained; review due no later than January 8, 2027. |
| A152-01 | Local Fedora ARM64 WebKit runtime constraint remains environmental; supported Ubuntu exact-SHA three-engine CI succeeded. |
| A152-02 | Original access/missing-session state is historical and partially addressed by later human observations; accepted residual coverage/provenance limitations remain. |
| A152-03 | Framework scripts and laboratory long tasks are measured startup costs; no demonstrated material reader-impact defect justified a correction. |
| A152-04 | Original temporary raw evidence lost; separately collected persistent replacement evidence independently inspected. Original data was not recovered. |
| A152A-01 | Independently RESOLVED within the [replacement-evidence follow-up audit](m1-5-2-qualification-results.md#corroborated-evidence-recovery-disposition). |
| A152M-01 | Independently RESOLVED within the [focused summary-correction audit](m1-5-2-qualification-results.md#corroborated-summary-correction-disposition). |
| A152M-02 | HUMAN-ACCEPTED BOUNDED QUALIFICATION LIMITATION; missing manual provenance remains unverified. |
| A152M-03 / M152-T01 | Separate manual spacing gap addressed by scoped human-reported PASS; Windows coverage absence explicitly accepted, not verified. |
| A153A-01 | Original MINOR integration-status finding corrected and independently RESOLVED by the focused PASS audit; original CONDITIONAL PASS preserved. |
| M15R-01 | CORRECTED IN DOCUMENTATION CANDIDATE; INDEPENDENT CONFIRMATION PENDING. See the dated correction below. |

### Human-reported observations and explicit limitation decisions

The [M1.5.2 formal acceptance](m1-5-2-qualification-results.md#formal-m152-acceptance--october-9-2026-utc)
preserves D13-01: 8/8 VoiceOver/Safari PASS on macOS 15.6; D13-02: 6/6
iPhone 13 Pro/Safari PASS on iOS 18.7.8; D13-03: 5/5 macOS Increase Contrast
PASS; and M152-T01: 5/5 Safari text-spacing PASS after P03 clarification.
All are attributed to the human maintainer within their recorded environments,
not to independent execution by this author.

M152-T01's initial P03 FAIL concerned readable two-line heading wrapping.
Follow-up diagnostics/observations established no clipping, overlap, horizontal
overflow or lost content; the final PASS clarified the classification without
changing the application. No manual test of every width, platform or combined
200% configuration is claimed.

The October 9 [Windows limitation decision](m1-5-2-qualification-results.md#windows-forced-colors-limitation-decision--october-9-2026-utc)
explicitly accepts the absence of genuine Windows forced-colors testing for the
current pre-production homepage. **Windows forced-colors remains UNVERIFIED;
Q19 remains PARTIALLY VERIFIED.** The macOS webpage showed no visible change
under Increase Contrast; those genuine observations and automated forced-colors
emulation retain separate evidentiary scopes. Neither demonstrates Windows
compatibility or webpage forced-color substitution.

The October 9 [A152M-02 decision](m1-5-2-qualification-results.md#a152m-02-evidence-provenance-limitation-decision--october-9-2026-utc)
explicitly accepts missing exact running-build identity and incomplete environment,
browser, display and VoiceOver transcript/procedure metadata for this homepage.
Missing information remains unverified; no version, transcript, measurement
or independent observation is invented.

The [original evidence-loss and replacement chronology](m1-5-2-qualification-results.md#evidence-availability-correction-and-replacement-run--october-9-2026-utc)
remains intact: temporary original records became unavailable after the
maintainer-reported VM restart; separately collected replacement records were
audited. A restart did not prove original data integrity, and replacement data
did not recover the deleted samples. Private local evidence still requires
authorized access; matching manifest hashes are not independent authenticity
attestation, tested restart survival or an off-VM backup.

Performance remains local laboratory evidence with documented sampling,
instrumentation, cache and profile limits. It establishes neither field Core
Web Vitals, real-user INP, actual-phone performance nor production-CDN behavior.
The accepted [response policy](security-baseline.md#implemented-response-policy)
retains qualified inline-script/style CSP allowances for the current static,
unauthenticated surface; it does not certify security of future untrusted-input
or privileged functionality.

Formal acceptance claims neither universal accessibility, browser/OS compatibility,
WCAG conformance, security certification nor production readiness.

## M15R-01 documentation correction — October 10, 2026 (UTC)

The overall readiness review recommended **B — CONDITIONALLY READY** and
identified **M15R-01 — MINOR: Completed M1.5.3 formal-acceptance integration
and CI still presented as pending**. The qualification conclusion was supported;
the remaining issue was live documentation status, not an application defect.

Signed M1.5.3 acceptance-record commit
`1067bd0d21ac45890dcf8e94a3afdf353f372bde` is already integrated on main,
and exact-SHA run 38044969571 succeeded. The four current summaries in
AGENTS.md, README.md, docs/README.md and the M1 plan now identify that completed
step and link to this canonical overall acceptance record. Earlier
preparation-time statements in the M1.5.3 record and dated plan sections are
preserved as historical; this outcome supersedes their pending integration/CI
status.

**M15R-01 — CORRECTED IN DOCUMENTATION CANDIDATE; INDEPENDENT CONFIRMATION PENDING.**

Applying the correction is not independent confirmation. A separate read-only
reviewer must verify its scope, evidence and consistency before human integration.
No application behavior, accepted qualification result or content approval changes.

## Binding future engineering and security obligations

| Trigger | Obligation retained |
| --- | --- |
| Next real application client island | Restore applicable production-browser hydration, activation, state-update, keyboard and retained-focus tests before introduction. Counter initial-state SSR does not satisfy this gate. |
| First additional public child route | Implement route-aware current-page identity semantics and qualify homepage/new-route routing, language/metadata, native keyboard, accessibility and responsive behavior using only approved navigation destinations. |
| Future sensitive functionality | Requalify applicable CSP and server/client authority boundaries when the authorized surface warrants it; existing inline allowances are not blanket approval. |
| Actual translations, RTL, accounts, commerce and additional features | Require separate evidence, exact disclosure approval where applicable, implementation authorization and functionality-specific qualification. |
| Toolchain maintenance | Retain the ESLint 9.39.5 [bounded exception controls](quality-and-ci.md#m12-eslint-compatibility-review-2026-10-08); review targeted lint-stack changes and no later than January 8, 2027. No upgrade is authorized here. |
| Production operations | Require separate authorization and deployment-edge, hosting, domain, HTTPS/HSTS, redirect/cache, CDN, monitoring and release qualification. These properties remain unverified by local/browser CI evidence. |

These triggers are future gates, not present application defects or permission
to implement deferred features.

## Current status and administrative closeout gates

| Scope | Authoritative status |
| --- | --- |
| M1.5.1 | FORMALLY ACCEPTED October 9, 2026 (UTC) |
| M1.5.2 | FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC) |
| M1.5.3 | FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC); NO CORRECTIVE APPLICATION IMPLEMENTATION REQUIRED |
| M1.5 overall | FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC) — repository closeout in progress |
| Milestone 1 overall | NOT FORMALLY ACCEPTED; requires a separate human decision |

Remaining administrative gates are independent read-only review of this record
and M15R-01, human documentation review, human signed integration and successful
exact-SHA supported Ubuntu CI for the resulting new commit. The workflow must
retain 17 fixture tests, seven supervisor regressions, Chromium/Firefox/WebKit
10/10 each, one worker, zero configured retries and the existing
quality/typecheck/build/source-cleanliness gates. Previous runs do not qualify
the future overall acceptance-record commit.

The effective M1.5 acceptance and these repository-closeout requirements are
distinct. No additional human acceptance decision for M1.5 is inferred or
issued here. Subsequent overall Milestone 1 acceptance remains separate.

**Application changes, corrective implementation, additional homepage content,
public routes or languages, P02–P08 and expanded product maturity/commercial
availability claims remain NOT AUTHORIZED. Production deployment, Vercel,
hosting/domain configuration and public release remain NOT AUTHORIZED.**
