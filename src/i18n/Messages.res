type key =
  | SiteIdentity
  | IdentityHome
  | SkipToMain
  | PreviewStatus
  | PreviewFooter
  | PageTitle
  | MetadataDescription
  | IntroductionLabel
  | IntroductionParagraph
  | DevelopedHeading
  | DevelopedParagraph
  | LocalFirstHeading
  | LocalFirstParagraph
  | WebsiteHeading
  | WebsiteParagraph
  | QualificationTitle
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
  | SiteIdentity => "Grocery POS"
  | IdentityHome => "Grocery POS home"
  | SkipToMain => "Skip to main content"
  | PreviewStatus => "Internal engineering preview"
  | PreviewFooter => "Engineering preview. No product availability or production deployment is claimed."
  | PageTitle => "Grocery POS — Pre-production Grocery Point-of-Sale Project"
  | MetadataDescription => "Learn about Grocery POS, a pre-production point-of-sale project for independent grocery stores. It is not yet available or suitable for live retail use."
  | IntroductionLabel => "Introduction"
  | IntroductionParagraph => "Grocery POS is a point-of-sale software project being developed for independent grocery stores. It is currently in pre-production development and is not yet available or suitable for use in a live retail environment."
  | DevelopedHeading => "What has been developed"
  | DevelopedParagraph => "Development has established an internal, single-register, cash-only checkout foundation with transaction recording, recovery mechanisms, and cash-accountability workflows. This implementation remains pre-production software. Payment-card integration, physical device support, and qualification for live retail operation are not yet complete."
  | LocalFirstHeading => "Local-first by design"
  | LocalFirstParagraph => "Grocery POS is being designed around a local-first architecture, with the goal of keeping essential checkout operations functional even when internet connectivity is unavailable. This is a development objective, not a claim of proven reliability in production grocery environments."
  | WebsiteHeading => "About this website"
  | WebsiteParagraph => "This website is intended to provide information about the Grocery POS project and its development. Checkout transactions and day-to-day grocery store operations belong to the separate POS software, not to this website."
  | QualificationTitle => "Grocery POS Website — M0.4 internationalized architecture proof"
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
