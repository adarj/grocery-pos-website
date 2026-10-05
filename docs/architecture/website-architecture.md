# Website architecture

The website is a first-party surface of the local-first Grocery POS Platform.
It may eventually host several zones in one Next application. Sharing a runtime
or React components does not erase differences in security or authority.

| Zone | Intended responsibility | Boundary |
| --- | --- | --- |
| Public marketing/docs | Product, hardware, customer and developer information | Public, normally static/server rendered; claims require maturity evidence and publication authorization |
| Interaction/contact | Inquiries and other public submissions | Untrusted input; validate, limit abuse, and adapt external delivery services |
| Future commerce | Quotes, orders, subscriptions, hardware purchases | Server/API price and entitlement authority; payment handled by a qualified provider |
| Future authenticated account | Commercial profile, billing, account security | Server-side identity, organization scope, and authorization on every protected operation |
| Future support | Entitlements, cases, warranty and RMA | Scoped access to customer records; attachments need a dedicated upload design |

Operational grocery administration belongs elsewhere. See
[Website vs Manager](../product/website-vs-manager.md).

## Responsibilities and request flow

```text
Browser (public pages and justified interactive UI)
  |
  v
Next App Router / thin framework boundary
  |
  +--> ReScript domain/application logic
  |
  +--> ReScript/React UI
  |
  +--> Grocery-owned server application/API boundary
            |
            +--> in-process provider adapters --> providers
            |
            +--> independent Grocery service/API (when justified)
                       |
                       v
                 bounded provider adapters / providers
```

The diagram shows responsibilities and alternative provider-access paths.
Grocery-owned application/API operations control commercial authority, whether
in-process or in a justified independent service. Conceptual separation requires
no extra network hop; deployment topology remains deferred under
[ADR 0004](../adr/0004-first-party-api-authority-boundary.md).
Providers remain behind Grocery-owned boundaries; the browser does not gain
database authority from a component or SDK. Read-only public content need not
traverse a commercial API.

**Next owns the web framework. ReScript owns product/application logic where
practical. React renders the interface. First-party APIs own commercial authority.**

Next owns route filenames/exports, layouts, metadata, framework rendering and
request semantics. Thin TS/TSX files translate those seams into application calls.
ReScript owns domain models, business rules, use cases, and reusable UI behavior
where practical. Bounded TypeScript adapters are acceptable when materially
cleaner. Language placement does not determine trust: a Server Component, route
handler, or server action still requires validation and authorization where relevant.

Pure rules depend on domain models, not Next, React, or provider SDKs. Application
use cases consume narrow contracts; infrastructure implements them. Framework
entrypoints compose these parts. See [source layout](source-layout.md) and
[ADR 0002](../adr/0002-next-rescript-react-boundaries.md).

## Cross-cutting constraints

Server/static rendering is the default. Browser interaction earns a small client
boundary; its imports must not pull privileged code into the client bundle. No
parallel router or speculative global client provider. See
[ADR 0003](../adr/0003-server-first-rendering.md).

Public URLs carry a language segment, conceptually `/[lang]/...`, starting with
English at `/en/...`. Language is independent of formatting locale, market,
currency, and tax jurisdiction. Document `lang` and direction, translation expansion,
and early pseudo-localization for non-public qualification are architectural
requirements, not market defaults.
See [ADR 0005](../adr/0005-internationalized-routing-model.md).

Accessibility targets WCAG 2.2 AA; performance favors useful content with little
client JavaScript. [Security](../engineering/security-baseline.md),
[accessibility/performance](../engineering/accessibility-and-performance.md), and
[testing](../engineering/testing-strategy.md) apply across all zones.

## What M0.2 must prove

- A compatible, reproducible ReScript + React + Next App Router build using
  Nix/pnpm, with documented versions and canonical `just` commands.
- Compiler output paths/suffix, clean regeneration, module interoperability, and
  thin TS/TSX boundaries under actual Next development and production builds.
- How ReScript/React code participates in Server and Client Components, including
  directive placement and transitive imports; no claim of compatibility by assumption.
- A minimal language-bearing route and framework integration sufficient to prove
  the stack, without prematurely adding commerce, auth, or provider architecture.

The selected foundation stands unless this proof exposes a concrete contradiction.
Record such findings before revising an ADR. Hosting and other unresolved choices
remain in the [deferred register](../engineering/deferred-decisions.md).
