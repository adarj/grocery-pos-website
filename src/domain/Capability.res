type maturity = Available | Pilot | Preview | Planned | Internal
type publication = Withheld | ApprovedForPublicDisclosure
type decodeError = UnknownMaturity(string)

type t = {id: string, maturity: maturity, publication: publication}

let make = (~id, ~maturity, ~publication=Withheld) => {id, maturity, publication}
let id = capability => capability.id
let maturity = capability => capability.maturity
let hasPublicDisclosureApproval = capability =>
  capability.publication == ApprovedForPublicDisclosure

let decodeMaturity = raw =>
  switch raw {
  | "available" => Ok(Available)
  | "pilot" => Ok(Pilot)
  | "preview" => Ok(Preview)
  | "planned" => Ok(Planned)
  | "internal" => Ok(Internal)
  | unknown => Error(UnknownMaturity(unknown))
  }
