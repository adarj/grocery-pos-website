# Development principles

These principles guide implementation after M0.1. Foundational choices and their
rationale are in the [ADRs](../adr/README.md).

- **Server-first:** Render content on the server or statically where practical.
  Add browser JavaScript for a stated interaction need and keep its scope small.
- **Semantic HTML first:** Prefer native structure and controls before custom
  abstraction. Progressively enhance useful pages where practical.
- **Functional core / imperative shell:** Keep domain decisions deterministic and
  testable. Coordinate effects at explicit application/infrastructure boundaries.
  Use narrow contracts when they protect a real boundary, not as ritual wrappers.
- **Validate external data:** Decode route/input/API/provider data before it enters
  trusted models. Compiler types do not validate runtime payloads.
- **Bound providers:** Application rules use Grocery concepts. Adapters translate
  external schemas/errors; SDK convenience does not move persistence authority into UI.
- **Accessibility is correctness:** WCAG 2.2 AA informs markup, interaction, content,
  and design review rather than becoming a final audit-only task.
- **Internationalization is architectural:** Keep language, formatting, market,
  currency, and tax context distinct. Build for expansion and directionality early.
- **Performance is a product property:** Account for client execution, fonts, images,
  and third-party costs. Establish measured budgets after a production baseline.
- **Verification follows risk:** Test rules, interactions, and boundaries at the
  layer that can meaningfully expose failures. See the [testing strategy](testing-strategy.md).
- **Dependencies are intentional:** Add a package for a concrete need, consider its
  maintenance and client/server impact, and use reviewed, reproducible versions.
- **Complexity is earned:** Prefer clear feature boundaries over speculative generic
  frameworks. Keep route files thin and avoid an arbitrary `lib/` collection.

M0.2 will establish executable development commands. Until then, do not publish
invented setup instructions or add configuration that has not been qualified.
Document real constraints and update the [deferred register](deferred-decisions.md)
when requirements make an open decision actionable.
