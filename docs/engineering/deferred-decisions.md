# Deliberately deferred decisions

These choices are open by design. M0.1 fixes ownership and architectural constraints,
not vendors or infrastructure for features that do not exist. A listed trigger
calls for evidence and a decision; it does not automatically authorize implementation.

| Decision | Why premature | Trigger for evaluation |
| --- | --- | --- |
| Vercel vs DigitalOcean vs other hosting | Production operating requirements remain unspecified | First deployment with cost/runtime/region needs, using the qualified build |
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
configuration is implemented in M0.5. CI run 37550037169 qualifies the x86_64
runtime and Chromium/Firefox; WebKit navigation remains a likely upstream blocker.
Stable Playwright 1.64 with the promised Linux bundle fix is the preferred targeted
upgrade trigger, subject to human approval and a successful unchanged full CI gate.
See the [qualification evidence and remaining acceptance boundary](quality-and-ci.md).

When a trigger arrives, identify the owner/requirement, evaluate the smallest
adequate options, and record the outcome in an ADR or scoped engineering document.
Update this register and affected guidance. Keep untriggered choices visibly open
instead of quietly treating a provider or preference as a settled decision.
