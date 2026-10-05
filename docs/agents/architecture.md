# Architecture guide for agents

Read the [overview](../architecture/website-architecture.md),
[source layout](../architecture/source-layout.md), and relevant [ADR](../adr/README.md)
before changing a boundary.

1. Put pure product decisions in ReScript domain code and use cases in application
   code. Keep Next route exports thin; justify TypeScript outside framework/adapter seams.
2. Have entrypoints compose narrow contracts and implementations. Do not import
   Next, React, or provider SDKs into domain rules, or concrete providers into use cases.
3. State why a client boundary is needed; review transitive imports. Keep privileged
   adapters server-only and route commercial operations through Grocery-owned
   application/API boundaries, in-process or separately deployed as justified by
   [ADR 0004](../adr/0004-first-party-api-authority-boundary.md).
4. Add directories/abstractions for actual responsibilities, not to complete a tree.
   Never edit compiler output; follow the [toolchain record](../engineering/toolchain.md)
   for generated import/ignore conventions and build ordering.
5. Read `node_modules/next/dist/docs/` before Next-specific framework work.
   Report concrete integration contradictions before changing accepted decisions.

## Codex/MCP policy

| Phase | Tools and purpose |
| --- | --- |
| M0.1 | Native repository/shell capabilities for documents and checks; Context7 when external library documentation is genuinely needed |
| M0.2 onward | Evaluate Next.js DevTools MCP once a running Next application exists, for framework/runtime diagnostics; evaluate Context7 for library documentation |
| Later, if justified | Reconsider `codebase-memory-mcp` only when repository scale demonstrates a navigation/knowledge need |

Do not require Dart MCP, DCM, POS codebase-memory, or pre-application Next DevTools
for this repository. Every MCP needs a specific purpose; inheriting the POS toolset
is not a reason. Document proposed needs here without modifying global user Codex
configuration. Open tooling choices remain in the
[deferred register](../engineering/deferred-decisions.md).
