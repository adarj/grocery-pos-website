// Fictional architecture-qualification samples, not a production ledger or marketing truth.
// This composition provides neither real publication grants nor a provider implementation.
// Next consumes only the public projection through GenType; no external I/O exists here.
@genType
let load = () => {
  let samples = [
    Capability.make(
      ~id="sample-authorized-preview",
      ~maturity=Preview,
      ~publication=ApprovedForPublicDisclosure,
    ),
    Capability.make(~id="sample-withheld-available", ~maturity=Available),
    Capability.make(~id="sample-withheld-internal", ~maturity=Internal),
  ]
  samples->Array.filterMap(CapabilityPresentation.present)
}
