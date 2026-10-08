# Milestone 1 plan

**Status: proposed checkpoint scopes and review gates, pending human acceptance.**
Milestone 0 was formally accepted and M1 authorized on October 8, 2026 (UTC);
see the [qualification record](milestone-0-qualification.md). That authorization
does not approve every checkpoint proposal, public claim or deployment.
M1.1 is the active documentation-only task; M1.2 has not begun.

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

## Proposed checkpoints

| Checkpoint | Scope and dependencies | Acceptance evidence | Explicit exclusions | Human gate |
| --- | --- | --- | --- | --- |
| M1.1 — Specifications | Audience/IA, target navigation and page templates; visual direction and component contracts; accepted M0 baseline | Adversarial spec review; working document links; no application/config/dependency/generated changes | No components, assets, public copy, routes or M1.2 execution | Approve audience priority, leading visual direction, initial eligible content set and bounded next scope |
| M1.2 — Public shell/navigation | Header/footer, skip link and responsive disclosure around the existing language boundary; depends on M1.1 approval and eligible destinations | Server-first/client-reference review; JS-disabled usability; keyboard/focus/axe; narrow-to-wide/pseudo checks; typecheck/build; full supported CI | No mega-menu/search, auth, real second language, content corpus, broad token library or backend | Review shell behavior/route eligibility and **review the approved ESLint exception at this first implementation checkpoint** |
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

These are proposed specifications. Their presence is not evidence that a public
route, capability or measured token exists.

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

## Decisions before implementation

The human should approve direction/priority and the smallest publishable content
subset; identify content owners and real assets/contact destinations. M1.2 needs
that eligible-destination decision, not every proposed page built. If none exists,
retain an explicitly internal engineering shell or reduce scope until approval,
rather than presenting a public marketing site with empty links.

Document approval of a specification separately from page publication and later
production deployment authorization. Do not infer any of those decisions from
Milestone 0 acceptance or green CI.
