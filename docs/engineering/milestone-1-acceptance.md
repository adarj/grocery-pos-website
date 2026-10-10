# Milestone 1 — Website Foundation: Formal Acceptance

## Formal human acceptance — October 10, 2026 (UTC)

On October 10, 2026 (UTC), the human maintainer explicitly stated:

> I formally accept Milestone 1 — Website Foundation.

**MILESTONE 1 — WEBSITE FOUNDATION: FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC).**

The decision followed the independent overall acceptance-readiness review's
**A — READY FOR FORMAL MILESTONE 1 ACCEPTANCE** recommendation. It accepts the
approved and explicitly revised M1.1–M1.5 scope, its bounded qualification
limitations and deliberate deferrals. This records an effective human decision;
it is not acceptance inferred from CI or issued by this documentation author.

Independent audit, human documentation review, signed integration and this
administrative record's own exact-SHA CI remain repository-closeout requirements.
They do not postpone the human acceptance date or authorize production readiness,
public launch or further implementation.

## Exact accepted Milestone 1 scope

The accepted deliverable is the pre-production informational website foundation,
separate from the operational Grocery POS Platform: approved specifications,
the qualified native shell and responsive layout, the measured semantic CSS
system, one exact reviewed four-section server-rendered `/en` homepage and its
metadata, controlled English routing, development-only pseudo-localization,
qualification evidence, documented decisions and repeatable quality workflows.

The [original M1 scope and review gates](milestone-1-plan.md#checkpoint-scopes-and-review-gates)
allowed human revisions and evidence-driven reductions in the published area set.
There was no requirement to populate the target sitemap, extract unsupported
generic primitives or manufacture content to satisfy a milestone quota.
The accepted M1.3.2 no-extraction decision and M1.4 no-expansion decision remain
part of the completed scope.

## Governing prerequisites and approved specification

[Milestone 0](milestone-0-qualification.md#final-main-qualification-and-human-acceptance)
was formally accepted, and M1 authorized, October 8, 2026 (UTC). Its qualified
toolchain, compiler/interoperability, authority, server-first, language,
publication and security boundaries remain intact under the
[accepted ADRs](../adr/README.md).

The maintainer approved M1.1's specification/design October 8, 2026 (UTC), after
the independent **M1.1 PASS — READY FOR HUMAN DESIGN APPROVAL** audit. The
[approval record](milestone-1-plan.md#m11-approval-and-qualification-record),
[information architecture](../product/website-information-architecture.md),
[visual direction](../design/visual-direction.md) and
[design-system specification](../design/design-system-specification.md) govern.
M1.1 had human specification/design approval; no separate historical formal
acceptance declaration is invented. Specification approval did not itself grant
page implementation, product disclosure or release permission.

## M1.1–M1.5 completion and acceptance matrix

| Checkpoint | Human disposition | Accepted work and review chronology |
| --- | --- | --- |
| M1.1 — Specifications | HUMAN-APPROVED AND QUALIFIED October 8, 2026 (UTC) | Approved audience/IA, visual direction and component contracts; independent PASS, signed specification/integration and exact-SHA CI. A11-01–A11-03 remain applicable safeguards. |
| [M1.2 — Engineering-preview Shell](m1-2-shell-qualification.md#final-merged-main-qualification-and-human-acceptance-2026-10-08) | FORMALLY ACCEPTED October 8, 2026 (UTC) | Server-first identity/skip shell, responsive preview container and original footer; native keyboard/focus and JS-disabled qualification. Historical CONDITIONAL PASS preserved; A12-01/A12-02 resolved; visual review and ESLint retention approved. The later approved homepage composition superseded the preview presentation. |
| [M1.3 — Tokens & Primitives](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc) | FORMALLY ACCEPTED October 8, 2026 (UTC) | Measured 43-property CSS system; accepted M1.3.2 no-extraction decision and M1.3.3 qualification. M1.3.4's original conditional audit, subsequent human observations and explicit M1.5 deferrals remain historical. |
| [M1.4 — Reviewed Templates & Content](milestone-1-plan.md#formal-m14-acceptance--october-9-2026-utc) | FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC) | Accepted M1.4.1 readiness matrix and M1.4.2 exact homepage; explicit no-expansion decision. M1.4.3 remains REVIEWED AND DEFERRED; NO IMPLEMENTATION AUTHORIZED. |
| [M1.5 — Final Qualification](m1-5-final-qualification-acceptance.md) | FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC) | All three subcheckpoints formally accepted; cumulative evidence classifications and bounded limitations retained. M1.5.3's accepted conclusion is A — NO CORRECTION JUSTIFIED; no corrective application implementation required or performed. |

The linked records retain their original audit wording, test environments,
human observations and distinct implementation/administrative acceptance roles.

## Signed integration and exact-SHA CI provenance

This acceptance record starts on `main` at
`2195fcc938ca7eeafc0cc6c3a8b287dd03d170f8`,
`docs(web): record formal M1.5 acceptance`, whose parent is
`1067bd0d21ac45890dcf8e94a3afdf353f372bde`.
HEAD, main and origin/main match; ahead/behind is 0/0, with a clean initial
worktree and empty staging. Read-only GitHub verification reports a valid
signature; the preceding audit matched the local signed payload and signature
to that verified commit. Relevant prerequisite/checkpoint revisions are ancestors
of this baseline.

| Qualified record | Signed revision | Successful exact-SHA CI |
| --- | --- | --- |
| M0 accepted main foundation | `780ba8b89364fd16dba8609a0cb2a13779c24348` | [37727162386](https://github.com/adarj/grocery-pos-website/actions/runs/37727162386), 21/21 browsers |
| M1.1 specification / main integration | `efa76de8dc5afec83c7f4858afa2cbfcfeeab2e1` / `cea8dea94bafe182af40ef30fe390cc9b667ac07` | [37728971554](https://github.com/adarj/grocery-pos-website/actions/runs/37728971554) / [37749346349](https://github.com/adarj/grocery-pos-website/actions/runs/37749346349), 21/21 each |
| M1.2 corrected main shell | `e5f690977273ce721998f6f778b946924b5a443f` | [37780086710](https://github.com/adarj/grocery-pos-website/actions/runs/37780086710), 27/27 |
| M1.3 signed closeout | `ad69f632129231bb2604a3a71678ac959900046c` | [37827607606](https://github.com/adarj/grocery-pos-website/actions/runs/37827607606), 30/30 |
| M1.4 no-expansion closeout / formal acceptance record | `8729179ee18b0d154d8fa63b144d1d98212f8f39` / `bd865a81740c3d890c80989123ce72c07b3fdcc9` | [37877425523](https://github.com/adarj/grocery-pos-website/actions/runs/37877425523) / [37880289907](https://github.com/adarj/grocery-pos-website/actions/runs/37880289907), 30/30 each |
| M1.5 overall formal acceptance record | `2195fcc938ca7eeafc0cc6c3a8b287dd03d170f8` | [38047244927](https://github.com/adarj/grocery-pos-website/actions/runs/38047244927), 30/30 |

The [M1.5 checkpoint provenance](m1-5-final-qualification-acceptance.md#checkpoint-acceptance-and-exact-revision-provenance)
owns the separate M1.5.1–M1.5.3 integrations and acceptance-record runs.
The [homepage acceptance](m1-4-2-homepage-qualification.md#signed-implementation-and-exact-commit-main-qualification)
owns the implemented application revision and its qualification.

Run 38047244927 completed **SUCCESS**, push to main, attempt 1, on the exact
M1.5 acceptance-record SHA. Read-only metadata, job steps and
[execution logs](https://github.com/adarj/grocery-pos-website/actions/runs/38047244927/job/114199140916)
establish supported Ubuntu 24.04 x86_64 (runner OS 24.04.5) and:

| Gate | Qualified M1.5 acceptance-record result |
| --- | --- |
| Unit/fixture tests | PASS — 17/17 |
| Development-supervisor regressions | PASS — 7/7 |
| Chromium / Firefox / WebKit | PASS — 10/10 each; aggregate 30/30 |
| Browser policy | One Playwright worker; zero configured retries |
| Lint / formatting / typechecking | PASS |
| Production build / source cleanliness | PASS |

These results qualify the integrated M1.5 record. They do not qualify this new
Milestone 1 acceptance-documentation candidate. No fresh application build,
browser suite, benchmark or manual accessibility session is claimed here.

## Integrated architecture and implemented foundation

**Next routes. ReScript models. React presents. APIs connect.**

The [source layout](../architecture/source-layout.md) retains thin Next App Router
route/metadata entrypoints, validated language parameters, typed ReScript models
and messages, and React server rendering. The [language boundary](../architecture/internationalization.md)
provides English public routing and controlled development pseudo-localization;
it grants no real second-language or RTL qualification.

The approved homepage uses native identity/skip navigation, a focusable main
landmark, four semantic sections and the measured CSS foundation. It has no
authored application client island; Next framework JavaScript remains present.
Fictional capability and Counter fixtures stay outside public route imports.
Retained Counter SSR proves initial output, not live hydration.

The [quality/CI contract](quality-and-ci.md) preserves Nix/pnpm, frozen
installation, sequential compiler/generated-type/build gates, unit fixtures,
supervisor regressions, all three blocking browser engines and source cleanliness.
The [security policy](security-baseline.md#implemented-response-policy) retains
qualified response headers and authority boundaries. The current site has no
account, commerce, submission, provider or privileged application surface.

## Approved content and deliberate no expansion

Only the exact [C01/C02/C04/C05 homepage statement subset](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc),
four-section composition/headings and approved title/description remain eligible.
These communicate project identity, pre-production limitations, the bounded
internal checkout foundation, the qualified local-first objective and the
website/operational-POS distinction. They approve neither entire claim categories
nor commercial availability.

The [October 8 no-expansion decision](milestone-1-plan.md#m14-no-expansion-scope-closeout--october-8-2026-utc)
and October 9 M1.4 acceptance deliberately deferred M1.4.3. Additional candidate
pages lacked distinct reviewed material; their deferral is not a permanent
product exclusion. Other substantive claims and P02–P08 remain withheld.
No additional page, route, CTA, asset or navigation destination is accepted.

## Independent findings and final dispositions

The [M1.5 cumulative register](m1-5-final-qualification-acceptance.md#carried-finding-dispositions-and-accepted-limitations)
and earlier checkpoint records remain the detailed authorities.

- A11-01–A11-03 retain navigation eligibility, accessible styling and actual
  future interaction safeguards.
- A12-01/A12-02, A13-01, A134-01/A134-02 and A142-01 retain their documented
  resolutions. Historical conditional audit decisions are not rewritten as PASS.
- A12-03, A13-02/A13-03 and A142-02 retain their nonblocking history, evidence
  boundaries and human-accepted tradeoffs.
- A151-01–A151-09 and A152-01–A152-04 retain later scoped evidence, accepted
  limitations and future obligations; no present application correction is implied.
- A152A-01, A152M-01 and A153A-01 remain independently RESOLVED. A152M-02
  retains its explicitly human-accepted bounded provenance limitation; A152M-03
  retains scoped text-spacing evidence and the accepted Windows coverage limit.
- The subsequent independent audit returned **PASS — M1.5 CLOSEOUT VERIFIED;
  M15R-01 RESOLVED**, confirming the effective human M1.5 acceptance, correction,
  signed integration and successful exact-SHA CI.

The overall M1 readiness review found no substantiated unresolved BLOCKER,
MAJOR or MINOR application issue preventing acceptance. It recommended
**A — READY FOR FORMAL MILESTONE 1 ACCEPTANCE**; it did not itself grant acceptance.
The accepted no-correction conclusion is scoped to the reviewed homepage and
does not establish universal defect absence.

## Accepted qualification limitations

The [26-requirement reconciliation](m1-5-final-qualification-acceptance.md#cumulative-reconciliation-of-the-26-requirements)
remains intact. There is no 26/26 fully verified claim.

- Genuine Windows forced-colors compatibility remains **UNVERIFIED**; its absence
  was [explicitly human-accepted](m1-5-2-qualification-results.md#windows-forced-colors-limitation-decision--october-9-2026-utc)
  as a bounded limitation of this pre-production homepage.
- [A152M-02](m1-5-2-qualification-results.md#a152m-02-evidence-provenance-limitation-decision--october-9-2026-utc)
  retains missing exact running-build identity and incomplete manual environment,
  browser/display and VoiceOver transcript/procedure metadata. The limitations
  were explicitly accepted; missing information remains unverified.
- [D13-01, D13-02, D13-03 and M152-T01](m1-5-2-qualification-results.md#formal-m152-acceptance--october-9-2026-utc)
  remain scoped human-reported PASS observations: 8/8 VoiceOver/Safari checks,
  6/6 iPhone 13 Pro/Safari checks, 5/5 macOS Increase Contrast checks and 5/5
  Safari text-spacing checks after P03 clarification. The macOS contrast session
  left the webpage visually unchanged; it does not prove Windows color substitution.
  The initial P03 FAIL and subsequent readable-wrapping diagnostics remain preserved.
- Q11/Q12/Q16–Q19 retain applicable whole-requirement/manual-provenance and partial
  verification limits. Directly verified assertions remain valid without expanding
  their coverage.
- Q23–Q25 remain **NOT APPLICABLE** to the current implemented surface.
  Q26 production deployment-edge qualification remains **UNVERIFIED**.
- Original temporary raw evidence was lost; separately collected, independently
  reviewed replacement evidence did not recover the originals. Output checks retain
  their inventory/search boundaries; negative scans are not universal secret detection.
- Performance measurements remain local laboratory evidence, not field Core Web
  Vitals, real-user INP, actual-phone guarantees or production-edge benchmarks.
- Accepted inline CSP allowances remain bounded tradeoffs for the static
  unauthenticated surface, not universal security assurance.

Acceptance establishes neither universal accessibility, WCAG conformance,
universal browser/OS compatibility, security certification nor production readiness.
The historical M1.3 deferrals retain their contemporaneous meaning; later M1.5
observations and explicit limitation decisions supply their current dispositions.

## Binding future engineering and security obligations

| Future trigger | Obligation retained |
| --- | --- |
| Next real application client island | Restore applicable live production-browser hydration, activation, state-update, keyboard and retained-focus tests before introduction. Counter SSR is insufficient. |
| First additional public child route | Implement and qualify route-aware identity/current-page handling, homepage/new-route navigation, metadata/language, keyboard, accessibility and responsive behavior using approved destinations. |
| Sensitive functionality | Requalify relevant CSP, authentication, server/client authority, validation and data/cache boundaries when the authorized surface warrants them. Existing allowances are not blanket approval. |
| Translations, RTL, documentation, accounts, commerce, support or other features | Require separate scope, implementation authorization and functionality-specific qualification; retain appropriate claim/disclosure approval. Before a second public language, qualify standards-based negotiation and public discovery. |
| Toolchain maintenance | Preserve exactly ESLint 9.39.5 and its bounded exception controls; review targeted lint-stack changes and no later than January 8, 2027. |
| Production operations | Require separate authorization and actual hosting, HTTPS/HSTS, CDN, caching, redirects, monitoring, operational-security and release qualification. |
| Future public information | Require authoritative evidence, exact wording/disclosure approval, appropriate maturity qualifications and public-output withholding before publication. |

The accepted M0 framework-validator limitation also retains explicit supported
PageProps/LayoutProps and proportionate route qualification when framework seams
change. These triggers are future gates, not unresolved present M1 defects or
authorization to implement deferred functionality.

## Final M1.5 administrative-status reconciliation

The overall M1 review noted that some summaries still described this M1.5 record's
review, signed integration and CI as pending at preparation time. Those steps
are completed: signed main commit `2195fcc938ca7eeafc0cc6c3a8b287dd03d170f8`,
successful exact-SHA run 38047244927 and **PASS — M1.5 CLOSEOUT VERIFIED;
M15R-01 RESOLVED**.

This dated record and synchronized current summaries supersede those pending
statuses. Original preparation-time statements in the M1.5 acceptance record
remain historical; no new defect identifier or reopening of M15R-01 follows.
The pending administrative gates below apply to this new Milestone 1 record.

## Milestone completion and future implementation/release authority

| Scope | Authoritative human status |
| --- | --- |
| Milestone 0 | FORMALLY ACCEPTED |
| M1.1 | HUMAN-APPROVED AND QUALIFIED |
| M1.2 / M1.3 | FORMALLY ACCEPTED |
| M1.4 / M1.5 | FORMALLY ACCEPTED AND COMPLETE |
| Milestone 1 overall | FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC); administrative record integration pending |

Completing the approved foundation grants no application implementation,
expanded homepage copy/disclosure, new public route/language, P02–P08 content,
account/commerce/support portal, external integration, product-maturity or
commercial-availability claim. Production deployment, Vercel configuration,
domain/DNS/hosting operations and public release remain **NOT AUTHORIZED**.

Subsequent website milestones require their own scope, authorization,
implementation and qualification decisions. Milestone 1 is accepted as a
foundation; it is not certified as a production website or authorized for launch.

## Independent audit and administrative integration requirements

1. An independent read-only reviewer checks this record, status synchronization,
   exact provenance, retained limitations, historical preservation and scope.
2. The maintainer reviews the documentation candidate and performs the signed
   commit and integration. All candidate changes remain unstaged and uncommitted
   during preparation; Git signing/integration belong to the maintainer.
3. The resulting new exact SHA must pass the unchanged supported Ubuntu workflow:
   17 fixtures, seven supervisor regressions, Chromium/Firefox/WebKit 10/10 each,
   one worker, zero configured retries and lint/format/typecheck/build/source cleanliness.
   Prior runs do not qualify the future administrative commit.
4. The record and summaries preserve the effective October 10 human acceptance
   and completed M1.5 closeout while distinguishing this record's later integration
   outcome. No new acceptance or release decision is inferred from administrative CI.

No new technical qualification, application correction, private-evidence change,
Git integration or deployment is performed to prepare this record.
