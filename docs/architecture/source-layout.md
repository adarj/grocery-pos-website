# Source layout and application boundary

M0.3 proves the responsibility map with a small capability-publication slice.
This is an engineering surface with fictional fixtures, not a capability ledger.

## Actual source structure

```text
app/
  layout.tsx                          Next document/layout seam
  page.tsx                            Obtain typed views and render the ReScript page
  globals.css                         Minimal qualification-page CSS
src/
  domain/Capability.res + .resi        Opaque capability, maturity, disclosure, decoder
  application/
    CapabilityPresentation.res + .resi Public eligibility and minimal view projection
  qualification/CapabilityProofData.res Fictional sample composition for architecture proof
  ui/
    ArchitectureProof.res             Engineering-page composition; GenType component export
    CapabilityList.res                Semantic rendering of public views
    qualification/Counter.res         Isolated M0.2 hydration qualification island
tests/
  unit/CapabilityPublicationTest.res   Direct pure-core tests, compiled for Node's test runner
  e2e/framework-smoke.spec.ts          Visible SSR without JS, then interactive hydration
  tooling/dev-supervisor.test.mjs      Isolated process-group regression fixtures
```

The generic server-tree `FrameworkProof.res` and `src/spike/` are superseded.
The counter remains useful for ongoing ReScript client-directive/hydration
qualification; it is not an application feature or a design-system primitive.

## Dependency direction

```text
app/page.tsx --> qualification/CapabilityProofData --> application --> domain
            --> ui/ArchitectureProof --> ui/CapabilityList --> application view type
                                     --> ui/qualification/Counter (client island)
```

Domain code imports no Next, React, browser, or provider APIs. Application code
depends on the domain and owns whether a public view exists. The list receives
only `id` and `maturityCode`, never publication internals, and makes no eligibility
decision. UI imports of the application view are type dependencies; the policy
implementation is not part of the client island.

The qualification module owns the fictional sample inputs and calls the application
projection. Qualification artifacts exercise architectural/runtime properties;
they are not production data, marketing truth, or provider implementations.
It performs no I/O, does not simulate a provider, and exports only
its typed `load` operation to TypeScript through GenType. `page.tsx` passes its
result to the generated ReScript component interface. There are no handwritten
TypeScript model mirrors, unchecked route imports, speculative ports, or extra
network hops. Being called by a Next page does not make this module a Next adapter.
Next request/cache/metadata details belong in framework entrypoints or genuine
framework interoperability seams under `adapters/next` when required.

## Capability and publication boundary

`Capability` models maturity and publication as independent variants. `make`
defaults to `Withheld`; even AVAILABLE and INTERNAL yield no public view without
separate `ApprovedForPublicDisclosure`. That approval value must come from an
authoritative trusted source when real data replaces the fixtures. Constructing
the variant is not itself a security or disclosure-approval mechanism.

`CapabilityPresentation.present` returns `option<view>` and checks approval before
projecting public fields. Its canonical uppercase maturity code preserves the
original status; approved disclosure of INTERNAL information does not turn it
into a customer offering. Production claims still require evidence, scope, and
publication review under the [claims policy](../product/public-capability-claims.md).

The domain stores structured maturity, not formatted English prose. View codes
are stable semantic values, not a final translation catalog or localized labels.
M0.4 can map them to messages at the presentation boundary; no language, market,
currency, or jurisdiction is inferred here. The sample IDs identify fictional
engineering examples, not product names.

## Interfaces and decoding

`Capability.resi` hides the capability record behind `type t`, forcing ReScript
callers through controlled construction and the narrow read API.
`CapabilityPresentation.resi` exposes the public record and projection operation
while hiding the status-mapping helper. Interfaces are justified by these actual
boundaries; UI and fixture modules do not need mechanical interface copies.
These compiler contracts are not runtime protection against arbitrary JavaScript.

`decodeMaturity` accepts a raw string and returns `result<maturity, decodeError>`.
The five supported lowercase transport values decode explicitly; unknown values
return `UnknownMaturity(raw)`, without coercion, exceptions, or AVAILABLE fallback.
This directly tested format boundary demonstrates validation without fabricating
an HTTP API. Real payloads will also require shape/size validation and separate
verification of publication authority before domain construction; maturity decoding
does not approve disclosure.

## Future responsibilities, introduced only when needed

- `src/i18n/`: language/resources/formatting boundaries in M0.4, with market and
  commercial context kept distinct.
- `src/infrastructure/`: concrete external I/O, HTTP clients, storage and privileged
  provider implementations behind application boundaries. No such I/O exists yet.
- `src/adapters/`: framework/library interoperability and boundary translations.
  No such source directory is needed yet; a Next caller alone does not justify one.
  A concrete provider network implementation belongs in infrastructure; do not
  duplicate wrappers across these areas merely to populate folders.
- UI primitives/layout, shared styles/tokens, and reviewed content grow when real
  repeated needs justify them; M0.3 creates none of that scaffolding.

No empty i18n, infrastructure, third-party, design-system, or content directories
were created. Reject large route files, generic `lib/` dumping grounds, broad UI
provider authority, and abstraction solely to match a diagram.

## Generated code and verification

In-source ESM `.res.mjs`, GenType `.gen.tsx`, and ReScript `lib/` state remain
ignored, reproducible, and never hand-edited. GenType derives the public view's
readonly TypeScript fields and component props; its generated assertions remain
localized, with strong caller types. `just clean` removes generated seams, including
stale ones after module moves, before a fresh build regenerates them. Hand-authored
JS/TS source remains trackable.

`just test-unit` compiles ReScript and runs the pure tests with Node 24's built-in
runner. Tests are written in ReScript to exercise the `.resi` API without mirroring
generated variant representations in JS. Two test-only bindings connect to
`node:test` and `node:assert/strict`; no new dependency is needed. Vitest remains
an option when mocks, runner features, or a larger suite justify it; React Testing
Library remains deferred until component behavior warrants it.

The disclosure invariant followed red/green development: a projection without
the approval check failed the default/explicit-withholding tests; adding the gate
made them pass. Decoder cases cover known and unknown values directly. Framework
smoke tests prove the authorized sample is visible without JavaScript, withheld
samples are absent, and the separate counter hydrates without errors.

The clean production build lists only `ui/qualification/Counter.res.mjs` from
application source in Next's client-reference manifest; the capability modules
remain in the server tree. Static HTML/RSC output contains neither withheld sample
identifier. Chromium and Firefox pass both production smoke scenarios on the
current ARM64 host; WebKit retains the M0.2 native-runtime qualification limit.

`just check` sequences unit tests, canonical strict typecheck, production build,
and Chromium smoke. Development feedback is not full framework/type acceptance;
retain the sequential, version-sensitive Next type workflow in the
[toolchain record](../engineering/toolchain.md). Full browser qualification remains
`just test-e2e`, with the known local WebKit native-runtime limitation reported.
