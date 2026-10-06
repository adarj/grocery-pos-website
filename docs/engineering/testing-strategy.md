# Testing strategy

This is the broader test plan. M0.2 implements compiler/strict TypeScript checks
and production/browser smoke; see the [toolchain record](toolchain.md). M0.3 adds
direct ReScript domain/application tests through Node's built-in runner; see the
[source boundary record](../architecture/source-layout.md). Component/a11y tooling
and CI remain planned.

## Intended verification layers

```text
compiler/static checks
    ↓
pure domain/unit tests
    ↓
interactive component tests
    ↓
Next/application integration tests
    ↓
Playwright browser tests
    ↓
production build/smoke
```

| Layer | What it should establish |
| --- | --- |
| Compiler/static checks | ReScript types, framework adapter types, server/client import constraints where enforceable |
| Pure domain/unit | Rules, invariants, external decoders, formatting/context distinctions, failure cases |
| Interactive component | User-visible state, keyboard interaction, labels/errors, emitted intents |
| Next/application integration | Route/use-case wiring, API contracts, error handling, request scope, rendering/cache boundaries |
| Browser | Navigation, language routes, progressive enhancement, hydration, critical journeys across real engines |
| Production build/smoke | Compiler output integration, static/server routes, deployment-relevant runtime behavior |

ReScript compiler/type checking, **Vitest**, **React Testing Library** where
appropriate, **Playwright**, and an accessibility smoke tool such as **axe** are
the broader tool intentions. M0.3's small pure suite needs no Vitest dependency;
reconsider it when runner features justify it. Qualify compatible versions and
integration before publishing new commands.

## Scope and reliability

Put most rule coverage in fast pure tests. Add component tests for meaningful
interaction and integration tests for framework/authority seams. Use browser tests
for outcomes that lower layers cannot establish, rather than duplicating every
assertion at every layer. Reversible copy/style/document changes need proportionate
review, not tests that merely mirror implementation.

Critical flows must eventually run in **Chromium, Firefox, and WebKit**. Include
failure and boundary cases as accounts, commerce, and support arrive: unauthorized
access, cross-organization access, provider failures, duplicate submissions, and
safe user-facing errors. Use representative fixtures without live secrets or
customer data. Contract tests should verify provider/API adapters independently
from the core rules.

Automated accessibility checks are useful smoke tests; **they do not prove WCAG
conformance**. Add manual keyboard, focus, zoom/reflow, contrast, reduced-motion,
and screen-reader review according to the feature's risk. See
[accessibility and performance](accessibility-and-performance.md).

Once canonical `just` commands exist, agents use and report them. A development
server passing does not replace production build qualification. CI and exact test
placement/commands are later implementation, not claims of existing coverage.
