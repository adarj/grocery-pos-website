@module("node:test")
external test: (string, unit => unit) => unit = "test"

@module("node:assert/strict")
external expectTrue: bool => unit = "ok"

let maturities = [
  Capability.Available,
  Capability.Pilot,
  Capability.Preview,
  Capability.Planned,
  Capability.Internal,
]

test("absent disclosure approval withholds every maturity, including AVAILABLE and INTERNAL", () => {
  maturities->Array.forEach(maturity => {
    let capability = Capability.make(~id="unapproved-sample", ~maturity)
    expectTrue(CapabilityPresentation.present(capability) == None)
  })
})

test("explicit withholding cannot be overridden by maturity", () => {
  maturities->Array.forEach(maturity => {
    let capability = Capability.make(~id="withheld-sample", ~maturity, ~publication=Withheld)
    expectTrue(CapabilityPresentation.present(capability) == None)
  })
})

test("separate disclosure approval produces the public projection", () => {
  let capability = Capability.make(
    ~id="approved-sample",
    ~maturity=Preview,
    ~publication=ApprovedForPublicDisclosure,
  )
  switch CapabilityPresentation.present(capability) {
  | Some(view) => {
      expectTrue(view.id == "approved-sample")
      expectTrue(view.maturityCode == "PREVIEW")
    }
  | None => expectTrue(false)
  }
})

test("explicitly approved INTERNAL information stays INTERNAL, not an available offering", () => {
  let capability = Capability.make(
    ~id="approved-internal-information",
    ~maturity=Internal,
    ~publication=ApprovedForPublicDisclosure,
  )
  switch CapabilityPresentation.present(capability) {
  | Some(view) => expectTrue(view.maturityCode == "INTERNAL")
  | None => expectTrue(false)
  }
})

test("known raw maturity values decode into domain variants", () => {
  let cases = [
    ("available", Capability.Available),
    ("pilot", Capability.Pilot),
    ("preview", Capability.Preview),
    ("planned", Capability.Planned),
    ("internal", Capability.Internal),
  ]
  cases->Array.forEach(((raw, expected)) => expectTrue(Capability.decodeMaturity(raw) == Ok(expected)))
})

test("unknown raw values return explicit errors without a maturity fallback", () => {
  ["unknown", "AVAILABLE", "", "preview "]->Array.forEach(raw =>
    expectTrue(Capability.decodeMaturity(raw) == Error(Capability.UnknownMaturity(raw)))
  )
})
