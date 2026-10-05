# Architecture decision records

ADRs record durable choices and their rationale. **Accepted** means the decision
governs future work; it does not mean the stack or feature has been implemented.

| ADR | Decision | Status |
| --- | --- | --- |
| [0001](0001-separate-website-repository.md) | Separate website repository | Accepted |
| [0002](0002-next-rescript-react-boundaries.md) | Next / ReScript / React boundaries | Accepted |
| [0003](0003-server-first-rendering.md) | Server-first rendering | Accepted |
| [0004](0004-first-party-api-authority-boundary.md) | First-party API authority boundary | Accepted |
| [0005](0005-internationalized-routing-model.md) | Internationalized routing and model | Accepted |
| [0006](0006-css-and-design-system-foundation.md) | CSS and design-system foundation | Accepted |

Use sequential four-digit numbers and descriptive filenames. Each record has a
title, status, context, decision, consequences, and alternatives when helpful.
New proposals may be Proposed; use Superseded with a link when a later accepted
record replaces a choice. Do not silently rewrite the history of a material
decision. Open choices belong in the
[deferred register](../engineering/deferred-decisions.md), not speculative ADRs.

All six initial records were accepted for Website M0.1 on 2026-10-05. M0.2 will
qualify executable integration; a failed proof must be reported with evidence.
