type key =
  | PageTitle
  | MetadataDescription
  | ArchitectureExplanation
  | FictionalDisclaimer
  | CapabilitySection
  | SampleIdentifier
  | MaturityLabel
  | CanonicalMaturityCode
  | Maturity(CapabilityPresentation.maturityCode)
  | CounterSection
  | CounterHeading
  | CounterCount
  | CounterIncrement

// Callers request semantic messages; the English catalog remains private.
let get: (Language.t, key) => string
type counterLabels = {section: string, heading: string, count: string, increment: string}
let counterLabels: Language.t => counterLabels
@genType
type pageMetadata = {title: string, description: string}
@genType
let pageMetadata: Language.t => pageMetadata
