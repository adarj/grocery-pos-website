# Milestone 1 plan

**Status: M1.1 planning specification approved by the human maintainer on
October 8, 2026 (UTC).** The initial M1.2 internal engineering-preview scope below
is approved; implementation has not begun. Later checkpoints retain their
scope and human review gates. Specification approval grants no publication or
production deployment authorization. Milestone 0 is complete and accepted;
see the [qualification record](milestone-0-qualification.md).

## M1.1 approval and qualification record

| Evidence / decision | Status |
| --- | --- |
| Human specification/design approval | Approved October 8, 2026 (UTC); leading direction: **Modern infrastructure for the independent grocer** |
| Independent adversarial specification audit | **M1.1 PASS — READY FOR HUMAN DESIGN APPROVAL**; no BLOCKER, MAJOR or MINOR defects; A11-01–A11-03 carried below |
| Signed specification commit / feature CI | [Run 37728971554](https://github.com/adarj/grocery-pos-website/actions/runs/37728971554) passes at `efa76de8dc5afec83c7f4858afa2cbfcfeeab2e1`; Chromium/Firefox/WebKit 7/7 each, 21/21, one worker, zero retries; source cleanliness passes |
| M1.1 branch integration / main CI | **Pending**; feature evidence does not establish integration or qualify this subsequent closeout edit |
| M1.2 | Initial scope approved; implementation not started |

## Objective and implementation starting point

Develop a truthful, accessible public shell and reviewed information templates
on the accepted foundation. M1 is not auth, commerce, provider integration, real
multilingual rollout or deployment qualification.

The current app has thin /[lang] layout/page seams, a fictional ReScript capability
proof, typed Language/Messages modules, minimal global CSS, and one qualification
Counter. Existing tests protect policy/decoding, i18n, SSR/hydration, headers/CSP,
keyboard/axe and supervisor cleanup. No public navigation or design system exists.

Future shell composition should consume public-safe, reviewed navigation/content
and typed messages; Next retains route/metadata ownership. ReScript owns UI and
appropriate application decisions. Retain or deliberately replace qualification
artifacts when their regression purpose is superseded; never rebrand fictional
samples as product claims or delete unique coverage without replacement.

## Checkpoint scopes and review gates

| Checkpoint | Scope and dependencies | Acceptance evidence | Explicit exclusions | Human gate |
| --- | --- | --- | --- | --- |
| M1.1 — Specifications | Approved audience/IA, target navigation and templates, visual direction and component contracts; accepted M0 baseline | Adversarial audit PASS; exact feature CI PASS; working document links; documentation-only scope | No components, assets, public copy, routes or M1.2 execution | Specification/design approval recorded October 8, 2026 (UTC); branch integration/main CI pending |
| M1.2 — Internal engineering-preview shell | Approved identity header, skip link, responsive container, existing qualification proof and minimal footer; essential accessible styling; navigation/disclosure only when eligible destinations justify them | Server-first/client-reference review; JS-disabled usability; keyboard/focus/axe; measured actual contrast/control states; narrow-to-wide/pseudo checks; preserved security/hydration/publication regressions; typecheck/build; full supported CI | No fabricated marketing content, unavailable routes/links, pricing, commerce, accounts, contact forms, backend services, speculative features, mega-menu/search, real second language or broad token library | Review the implemented bounded scope and **review the approved ESLint exception at this first implementation checkpoint** |
| M1.3 — Tokens/primitives | Measure palette pairs; consolidate minimal M1.2 styling into semantic tokens and demonstrated container/section/link/button/card/callout patterns | Contrast/state pairing sheet; responsive/expanded-text/forced-colors/reduced-motion checks; proportionate tests and canonical gates | No UI framework, remote fonts, generic component factory, complex forms/data grids or commerce controls | Approve measured visual system and justified component inventory |
| M1.4 — Reviewed templates/content | Integrate a small approved subset of IA templates and actual reviewed copy/assets; depends on owners, maturity/disclosure evidence and M1.3 | Claim/source review; metadata and link checks; public-safe projection/withholding; real SSR; content-specific a11y/performance checks and CI | No requirement to populate every sitemap area; no fake claims, CMS/docs platform, pricing, commerce/account or submission backend | Approve every publication set and its qualifications; withhold unsupported pages |
| M1.5 — Audit/qualification | Adversarial architecture, publication, accessibility, responsive and measured performance review of the implemented scope | Chromium/Firefox/WebKit; manual screen-reader/keyboard/zoom/contrast review; responsive matrix; static/client graph and asset review; canonical local + CI evidence | No deployment certification, WCAG claim from automation, speculative scanners or features added to fill gaps | Accept/correct M1 based on actual evidence; authorize subsequent work separately |

The order is deliberate: shell work has only necessary provisional styles;
M1.3 consolidates actual repeated needs. M1.4's content dependencies may reduce
the published area set; do not create empty pages to satisfy the target sitemap.
M1.5 sets measured performance follow-ups from real shell/content assets rather
than demanding an arbitrary M1.1 score. Human review may revise checkpoint scopes
before each implementation instruction.

## Canonical specifications

- [Information architecture](../product/website-information-architecture.md):
  audiences, eligible navigation, target sitemap, publication review and templates.
- [Visual direction](../design/visual-direction.md): leading hypothesis and alternatives.
- [Design-system contract](../design/design-system-specification.md):
  semantic roles, candidate measurements, component/state scope and test scenarios.

These M1.1 specifications are human-approved. Approval is not evidence that a
public route, capability, approved asset or measured token exists. The candidate
palette remains exploratory and requires contrast/state qualification.

## Verification and maintenance

Documentation-only checkpoints require link/anchor, whitespace and scope/hash
checks, not unrelated build execution. Implementation uses the existing Nix/pnpm
and sequential generated-type contract: pure rules need direct tests; meaningful
UI changes need browser/keyboard checks; route changes need canonical typecheck
and production validation. just check includes the local Chromium gate; Firefox
regression and supported Ubuntu just ci qualify all three blocking engines with
one worker and zero retries. Add tests for actual shell behavior; do not freeze
the old page's wording as permanent product acceptance.

The approved ESLint 9.39.5 exception is unchanged. The human maintainer must review
it at M1.2 (the first implementation checkpoint) and targeted lint-stack updates,
no later than January 8, 2027 unless explicitly revised. Check stable plugin
support, active rules and coverage; use no forced peer overrides. If a supported
migration remains unavailable at review, record explicit renewal or a supported
alternative per the [accepted exception](milestone-0-qualification.md#approved-eslint-9-maintenance-exception).
M1.1 does not authorize a tooling upgrade.

## Hosting and deployment boundary

The maintainer identifies **Vercel as the intended strategic hosting provider**.
The former “Vercel vs DigitalOcean vs other” deferred entry was stale at provider
selection level; [the register](deferred-decisions.md) now reserves the actual
implementation decisions. Accepted ADRs constrain authority, rendering and
dependency direction, not a different mandatory hosting provider; no contradiction
was found, and no ADR is silently superseded.

Strategic provider intent does not select production architecture, canonical
domain/origin, regions/runtime, caching/customer-data isolation, previews,
HTTPS/HSTS profile, secrets, operations or costs. Those require a bounded deployment
decision and actual qualification. No Vercel file, deployment project, DNS,
account, credential, metadataBase or canonical/hreflang URL is created here.

## Approved M1.2 boundary and acceptance checklist

The maintainer approved an initial **internal engineering-preview shell** on
October 8, 2026 (UTC), consisting of:

- Server-rendered Grocery POS identity header.
- Keyboard-accessible skip link and responsive content container.
- Existing ReScript architecture/qualification proof with its fictional-data status.
- Minimal footer and essential accessible, responsive styling.
- Existing security, hydration and publication-boundary regression coverage.

This scope does not approve public marketing copy, unavailable routes, customer
claims or assets. No pricing, commerce, accounts, contact forms, backend services
or speculative product features belong in M1.2. An internal-preview designation
is neither access control nor production deployment authorization. Implementation
has not started; this closeout remains documentation-only.

Carry the independent audit notes into M1.2 acceptance:

- **A11-01 — Navigation eligibility:** only actual approved destinations may appear.
  Omit empty primary/utility/footer groups, unavailable links and an unnecessary
  mobile disclosure. Do not fabricate destinations to exercise navigation.
- **A11-02 — Accessible provisional styling:** verify actual text/background
  contrast, meaningful control boundaries, focus indicators and interactive states
  during M1.2. M1.3 may consolidate tokens but cannot defer accessibility correctness.
- **A11-03 — Navigation interaction:** when genuine destinations justify a
  disclosure, test native/enhanced behavior, keyboard dismissal, focus restoration,
  route changes and responsive transitions. Do not implement a disclosure merely
  to exercise hypothetical behavior.

Review the approved ESLint 9.39.5 maintenance exception at this first implementation
checkpoint under the unchanged conditions above, no later than January 8, 2027.
Actual content owners, public destination sets, contact channels and assets still
require separate approval. Later checkpoint scope and deployment decisions remain
human gates; neither specification approval nor green CI grants publication.
