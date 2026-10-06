type maturity = Available | Pilot | Preview | Planned | Internal
type publication = Withheld | ApprovedForPublicDisclosure
type decodeError = UnknownMaturity(string)

// Construction is controlled; maturity never supplies disclosure approval.
type t
let make: (~id: string, ~maturity: maturity, ~publication: publication=?) => t
let id: t => string
let maturity: t => maturity
let hasPublicDisclosureApproval: t => bool
let decodeMaturity: string => result<maturity, decodeError>
