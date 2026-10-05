# ADR 0003 — Server-first rendering

**Status:** Accepted (M0.1)

## Context

Marketing, documentation, and product information primarily deliver content.
Unnecessary browser execution increases transfer, startup, hydration, and
interaction costs, especially on slower devices and networks.

## Decision

**Server-first by default; client JavaScript is earned.** Use Server Components
and server rendering by default, with static generation where content and freshness
requirements allow it. Dynamic rendering must follow a real request/data need.

Use Client Components only for browser-side state, event handling, effects,
browser APIs, or other required interaction. Keep the client boundary as small
as practical and explain why it exists. Review its transitive imports and props
for accidental server authority or private data exposure.

Next App Router remains the sole router. Do not introduce a parallel client router
or a global client provider without a concrete shared-state requirement.
Progressively enhance useful HTML where practical.

## Consequences

Rendering mode and client dependencies become reviewable decisions. Interactive
islands can coexist with server-rendered content. Server rendering does not itself
authorize access, prevent caching leaks, or remove the need for validation.
M0.2 must prove how the chosen ReScript output participates in these boundaries.
Performance budgets will follow measurement, not arbitrary M0.1 byte limits.

## Alternatives

A site-wide SPA/client root or unconditional provider wrapper would impose costs
before a need exists. Static-only rendering would prevent future request-specific
account/commerce behavior. Neither is the default.
