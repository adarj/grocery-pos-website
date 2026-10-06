@genType
type view = {id: string, maturityCode: string}

let maturityCode = maturity =>
  switch maturity {
  | Capability.Available => "AVAILABLE"
  | Pilot => "PILOT"
  | Preview => "PREVIEW"
  | Planned => "PLANNED"
  | Internal => "INTERNAL"
  }

let present = capability =>
  if Capability.hasPublicDisclosureApproval(capability) {
    Some({id: Capability.id(capability), maturityCode: maturityCode(Capability.maturity(capability))})
  } else {
    None
  }
