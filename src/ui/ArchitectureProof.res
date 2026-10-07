@genType @react.component
let make = (~capabilities: array<CapabilityPresentation.view>, ~language: Language.t) => {
  <main>
    <h1> {React.string(Messages.get(language, PageTitle))} </h1>
    <p> {React.string(Messages.get(language, ArchitectureExplanation))} </p>
    <p> {React.string(Messages.get(language, FictionalDisclaimer))} </p>
    <CapabilityList capabilities language />
    <Counter labels={Messages.counterLabels(language)} />
  </main>
}
