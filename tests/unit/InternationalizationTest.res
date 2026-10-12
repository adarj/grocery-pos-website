@module("node:test")
external test: (string, unit => unit) => unit = "test"
@module("node:assert/strict")
external expectTrue: bool => unit = "ok"

test("English is the sole public discovery language, independent of market/formatting", () => {
  expectTrue(Language.publicLanguages() == [Language.English])
  expectTrue(Language.publicRouteCodes() == ["en"])
  expectTrue(Language.defaultPublic == Language.English)
  expectTrue(Language.exposure(English) == Public)
  expectTrue(Language.isPublic(English))
  expectTrue(Language.htmlLanguage(English) == "en")
  expectTrue(Language.direction(English) == #ltr)
})

test("route identifiers round-trip exactly and reject unsupported/case aliases", () => {
  [Language.English, Language.PseudoEnglish]->Array.forEach(language =>
    expectTrue(Language.decodeRoute(Language.routeCode(language)) == Some(language))
  )
  ["fr", "es", "zz", "EN", "english", "en-US", "en-xa", "en-XA ", ""]->Array.forEach(code =>
    expectTrue(Language.decodeRoute(code) == None)
  )
})

test("pseudo language is qualification-only and excluded from public discovery", () => {
  expectTrue(Language.exposure(PseudoEnglish) == Qualification)
  expectTrue(!Language.isPublic(PseudoEnglish))
  expectTrue(Language.htmlLanguage(PseudoEnglish) == "en-XA")
  expectTrue(Language.direction(PseudoEnglish) == #ltr)
  expectTrue(!(Language.publicLanguages()->Array.includes(PseudoEnglish)))
})

test("qualification route access is explicit; production rejects pseudo and all unknowns", () => {
  expectTrue(Language.resolveRoute("en", false) == Some(English))
  expectTrue(Language.resolveRoute("en", true) == Some(English))
  expectTrue(Language.resolveRoute("en-XA", false) == None)
  expectTrue(Language.resolveRoute("en-XA", true) == Some(PseudoEnglish))
  ["fr", "EN", "zz"]->Array.forEach(code => {
    expectTrue(Language.resolveRoute(code, false) == None)
    expectTrue(Language.resolveRoute(code, true) == None)
  })
})

test(
  "single-public-language negotiation handles absence, English, unsupported, pseudo and malformed preferences",
  () => {
    [
      None,
      Some("en"),
      Some("en-GB,en;q=0.8"),
      Some("fr"),
      Some("en-XA"),
      Some("en-XA,fr;q=0.9"),
      Some("fr;q=0.9,en;q=0.5"),
      Some("*"),
      Some("en;q=0"),
      Some("not a valid header"),
    ]->Array.forEach(header => {
      let language = Language.negotiate(header)
      expectTrue(language == Language.English)
      expectTrue(Language.isPublic(language))
    })
  },
)

test("English messages and metadata come from semantic keys", () => {
  expectTrue(Messages.get(English, CapabilitySection) == "Public-safe capability samples")
  expectTrue(
    Messages.get(
      English,
      PageTitle,
    ) == "Grocery POS — Pre-production Grocery Point-of-Sale Project",
  )
  let metadata = Messages.pageMetadata(English)
  expectTrue(metadata.title == Messages.get(English, PageTitle))
  expectTrue(metadata.description == Messages.get(English, MetadataDescription))
})

test("every semantic maturity code has an exhaustive human-facing label", () => {
  let cases: array<(CapabilityPresentation.maturityCode, string)> = [
    (#AVAILABLE, "Available"),
    (#PILOT, "Pilot"),
    (#PREVIEW, "Preview"),
    (#PLANNED, "Planned"),
    (#INTERNAL, "Internal"),
  ]
  cases->Array.forEach(((code, expected)) => {
    expectTrue(Messages.get(English, Maturity(code)) == expected)
    expectTrue(
      Messages.get(PseudoEnglish, Maturity(code)) == PseudoLocalization.transform(expected),
    )
  })
})

test(
  "pseudo lookup transforms the same complete message keys deterministically with expansion",
  () => {
    let keys: array<Messages.key> = [
      SiteIdentity,
      IdentityHome,
      SkipToMain,
      PreviewStatus,
      PreviewFooter,
      PageTitle,
      MetadataDescription,
      IntroductionLabel,
      IntroductionParagraph,
      DevelopedHeading,
      DevelopedParagraph,
      LocalFirstHeading,
      LocalFirstParagraph,
      WebsiteHeading,
      WebsiteParagraph,
      EvaluationTitle,
      EvaluationMetaTitle,
      EvaluationMetadataDescription,
      QualificationTitle,
      ArchitectureExplanation,
      FictionalDisclaimer,
      CapabilitySection,
      SampleIdentifier,
      MaturityLabel,
      CanonicalMaturityCode,
      CounterSection,
      CounterHeading,
      CounterCount,
      CounterIncrement,
    ]
    keys->Array.forEach(key => {
      let english = Messages.get(English, key)
      let pseudo = Messages.get(PseudoEnglish, key)
      expectTrue(pseudo == PseudoLocalization.transform(english))
      expectTrue(pseudo != english)
      expectTrue(String.length(pseudo) > String.length(english))
      expectTrue(pseudo->String.startsWith("[!! "))
      expectTrue(pseudo->String.endsWith(" !!]"))
    })
    expectTrue(PseudoLocalization.transform("A, e!") == "[!! Á, é! ·· !!]")
  },
)

test("localization leaves authorized machine facts unchanged and never adds withheld views", () => {
  let views = CapabilityProofData.load()
  expectTrue(Array.length(views) == 1)
  views->Array.forEach(view => {
    expectTrue(view.id == "sample-authorized-preview")
    expectTrue(view.maturityCode == #PREVIEW)
    expectTrue(Messages.get(PseudoEnglish, Maturity(view.maturityCode)) != "Preview")
    // Lookup consumes the code as a semantic key; it does not mutate the view.
    expectTrue(view.id == "sample-authorized-preview" && view.maturityCode == #PREVIEW)
  })
  let pseudoMetadata = Messages.pageMetadata(PseudoEnglish)
  expectTrue(
    pseudoMetadata.title == PseudoLocalization.transform(Messages.pageMetadata(English).title),
  )
})

test(
  "resource metadata and contextual destination use the validated language without changing home metadata",
  () => {
    let metadata = Messages.evaluationMetadata(English)
    expectTrue(metadata.title == "Evaluating Grocery POS: Continuity and Migration Questions")
    expectTrue(
      metadata.description == "Questions for grocery owners comparing POS systems: checkout continuity, data migration, device compatibility, payment responsibilities, and rollout evidence.",
    )
    expectTrue(metadata.title != Messages.pageMetadata(English).title)
    expectTrue(GroceryPosEvaluation.path(English) == "/en/resources/evaluating-grocery-pos-systems")
    expectTrue(
      GroceryPosEvaluation.path(PseudoEnglish) == "/en-XA/resources/evaluating-grocery-pos-systems",
    )
  },
)

test(
  "resolved pseudo editorial content expands human prose while preserving citations and technical identifiers",
  () => {
    let english = GroceryPosEvaluation.load(English)
    let pseudo = GroceryPosEvaluation.load(PseudoEnglish)
    expectTrue(pseudo.title != english.title)
    expectTrue(
      pseudo.sections->Array.map(section => section.heading) !=
        english.sections->Array.map(section => section.heading),
    )
    let expanded = GroceryPosEvaluation.humanText(
      PseudoEnglish,
      "GS1 GTIN NIST SP 1300 PCI SSC POS Sunrise 2027",
    )
    ["GS1", "GTIN", "NIST SP 1300", "PCI SSC", "POS", "Sunrise 2027"]->Array.forEach(fact =>
      expectTrue(expanded->String.includes(fact))
    )
    let citations = (article: GroceryPosEvaluation.article) =>
      article.GroceryPosEvaluation.sections->Array.flatMap(section =>
        section.blocks->Array.flatMap(
          block =>
            switch block {
            | Paragraph(parts) =>
              parts->Array.flatMap(
                part =>
                  switch part {
                  | Citation(source) => [source.href]
                  | Text(_) => []
                  },
              )
            | Questions(_) => []
            },
        )
      )
    expectTrue(citations(english) == citations(pseudo))
    expectTrue(Array.length(citations(english)) == 6)
  },
)
