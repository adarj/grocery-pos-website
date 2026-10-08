# Deliberately deferred decisions

These implementation choices remain open by design. Accepted ADRs fix ownership
and architectural constraints. The maintainer has identified **Vercel as the
intended strategic hosting provider**; the former provider-selection entry was
stale at that level. Deployment architecture, domain/origin, runtime/regions,
caching, HTTPS/HSTS and operational approval remain unqualified.
A listed trigger calls for evidence and a decision; it does not automatically
authorize implementation. See the [M1 deployment boundary](milestone-1-plan.md#hosting-and-deployment-boundary).

| Decision | Why premature | Trigger for evaluation |
| --- | --- | --- |
| Vercel hosting implementation and operational approval | Strategic target selected; actual project/domain/runtime/cache/cost/operations requirements remain unqualified | Bounded first-deployment decision using the qualified build; no provider configuration in M1.1 |
| Exact deployment topology | API, regional, and availability needs are not established | First deployment and authoritative API integration |
| Authentication provider | No account journeys or identity requirements | Authenticated-account milestone and threat model |
| MFA/recovery implementation | Assurance/support requirements depend on accounts | Account-security design before protected commercial access |
| Payment/commerce provider | No checkout, subscription, or market requirements | Commerce milestone with supported payment models/markets |
| Tax engine | Jurisdictions and transaction rules are unspecified | First priced commercial offering in defined jurisdictions |
| Shipping provider | Hardware fulfillment workflows are not defined | Hardware ordering/fulfillment milestone |
| Support backend | Entitlement and case workflows are not defined | Support milestone with access/attachment requirements |
| CRM | Lead ownership and sales process are unspecified | Real contact/consultative-sales workflow |
| Analytics | No measured product questions or deployed experience | First deployment with explicit measurement/privacy needs |
| Consent-management system | Actual data processing, scripts, and jurisdictions are unknown | Before introducing processing that requires consent decisions |
| CMS | Authoring roles and content workflow are unproven | Sustained content maintenance with demonstrated editorial needs |
| Docs search backend | No corpus or search behavior to assess | Documentation scale/queries justify search |
| Final translation/i18n library | M0.4's typed messages/pseudo transform need no full framework | Real multilingual editorial, plural/interpolation, or resource-loading requirements |
| Canonical public origin and final canonical/hreflang/sitemap URLs | No production origin or real second language exists | First public deployment/SEO requirements; derive languages from public exposure |
| Country-specific domains | Language architecture does not define market rollout | Real country/SEO/commercial deployment requirements |
| Account subdomain vs `/account` | Isolation and navigation requirements are unspecified | Account deployment/security design |
| GraphQL | No API consumers or query needs justify it | Concrete API contract needs showing benefit over simpler interfaces |
| Shared cross-repository contracts package/repository | No stable contracts or multiple consumers exist | Explicit API evolution and demonstrated cross-repository reuse; create neither now |
| `codebase-memory-mcp` | Repository scale does not justify another tool | Proven navigation/knowledge needs as codebase grows |
| Strict CSP nonce/hash/SRI hardening | M0.5 qualifies a static-compatible baseline with documented inline allowances | Before auth, billing/commerce, rich content, sensitive support, or significant third-party JS; reevaluate current Next support |
| HSTS and HTTPS deployment-edge profile | No production HTTPS origin/deployment exists | First HTTPS deployment; qualify transport, subdomains, and redirects |
| Dependency bot, scheduled advisory checks, or CodeQL | No evidenced automation/scanner need for the current qualification surface | Sustained update/security operations or materially expanded sensitive code |
| Production observability vendor | No runtime/SLO/error volume to evaluate | Deployment operations with explicit reliability and privacy requirements |

Exact dependency versions, ReScript output conventions, and executable commands
are **M0.2 proof work**, rather than unresolved product architecture. CI/test
configuration is implemented and qualified in M0.5. Main CI run 37721922700 at
`a85611d2c863386f9600c29abf48d84dbc609f12` qualifies the merged cleanup, Ubuntu
x86_64 repository runtime, and Chromium/Firefox/WebKit 7/7 each. The inherited
`XDG_DATA_DIRS`/GSettings failure is resolved by the Linux-CI WebKit browser-child
correction; temporary diagnostics are removed. Fedora ARM64 WebKit native-runtime
compatibility remains unqualified. Detailed history is in [quality and CI](quality-and-ci.md).
The [approved ESLint 9 exception](milestone-0-qualification.md#approved-eslint-9-maintenance-exception)
requires review at the first M1 implementation checkpoint and any targeted
lint-stack update, no later than January 8, 2027 unless explicitly revised by the
maintainer. Milestone 0 acceptance and final main evidence are recorded in the
[qualification record](milestone-0-qualification.md).

When a trigger arrives, identify the owner/requirement, evaluate the smallest
adequate options, and record the outcome in an ADR or scoped engineering document.
Update this register and affected guidance. Keep untriggered choices visibly open
instead of quietly treating a provider or preference as a settled decision.
