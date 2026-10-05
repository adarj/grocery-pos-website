# Testing guide for agents

Use the [testing strategy](../engineering/testing-strategy.md) to select the lowest
layer that can expose a real failure. Current commands and browser qualification
limits are in the [toolchain record](../engineering/toolchain.md).

| Change | Proportionate verification |
| --- | --- |
| Documents/copy | Review meaning, maturity claims, links, scope, and whitespace |
| Pure rule or external decoder | Compiler checks and focused valid/invalid/boundary unit cases |
| Interactive control | User-visible component behavior and relevant manual accessibility checks |
| Framework/API/authority seam | Integration checks for wiring, failure paths, and access/data boundaries |
| Critical journey | Browser coverage, eventually Chromium/Firefox/WebKit, plus production smoke |
| Compiler/build/dependency change | Clean output regeneration and production build qualification |

Do not add tests that only restate a wrapper or implementation. Accessibility smoke
is not a WCAG proof. Reversible low-impact changes need appropriate review rather
than a new test suite.

A passing development server is not full framework/type validation. Run
`just typecheck` after consequential route/framework changes and before checkpoint
completion; use `just test-supervisor` when changing development process management.

Run the relevant canonical `just` commands and report
results and untested limits. Broaden testing for new failures or unresolved risks;
avoid repeatedly rerunning completed checks without a reason. Never install tooling
without an actual verification need.
