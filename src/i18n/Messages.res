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

// The complete English source catalog; adding a key requires an exhaustive entry.
let english = key =>
  switch key {
  | PageTitle => "Grocery POS Website — M0.4 internationalized architecture proof"
  | MetadataDescription => "Engineering qualification of language routing and public-safe capability presentation."
  | ArchitectureExplanation => "Publication decisions come from the ReScript application boundary."
  | FictionalDisclaimer => "Fictional qualification data; no Grocery POS product availability is claimed."
  | CapabilitySection => "Public-safe capability samples"
  | SampleIdentifier => "Sample identifier"
  | MaturityLabel => "Maturity"
  | CanonicalMaturityCode => "Canonical maturity code"
  | Maturity(code) =>
    switch code {
    | #AVAILABLE => "Available"
    | #PILOT => "Pilot"
    | #PREVIEW => "Preview"
    | #PLANNED => "Planned"
    | #INTERNAL => "Internal"
    }
  | CounterSection => "Client component proof"
  | CounterHeading => "ReScript client interaction"
  | CounterCount => "Count"
  | CounterIncrement => "Increment counter"
  }

let get = (language, key) =>
  switch language {
  | Language.English => english(key)
  | PseudoEnglish => english(key)->PseudoLocalization.transform
  }

// Only resolved labels cross the client boundary; no client language context/catalog.
type counterLabels = {section: string, heading: string, count: string, increment: string}
let counterLabels = language => {
  section: get(language, CounterSection),
  heading: get(language, CounterHeading),
  count: get(language, CounterCount),
  increment: get(language, CounterIncrement),
}

@genType
type pageMetadata = {title: string, description: string}
@genType
let pageMetadata = language => {
  title: get(language, PageTitle),
  description: get(language, MetadataDescription),
}
