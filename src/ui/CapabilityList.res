@react.component
let make = (~capabilities: array<CapabilityPresentation.view>, ~language: Language.t) => {
  <section ariaLabel={Messages.get(language, CapabilitySection)}>
    <h2> {React.string(Messages.get(language, CapabilitySection))} </h2>
    <ul>
      {capabilities
      ->Array.map(view =>
        <li key=view.id>
          <dl>
            <dt> {React.string(Messages.get(language, SampleIdentifier))} </dt>
            <dd> {React.string(view.id)} </dd>
            <dt> {React.string(Messages.get(language, MaturityLabel))} </dt>
            <dd> {React.string(Messages.get(language, Maturity(view.maturityCode)))} </dd>
            <dt> {React.string(Messages.get(language, CanonicalMaturityCode))} </dt>
            <dd> {React.string((view.maturityCode :> string))} </dd>
          </dl>
        </li>
      )
      ->React.array}
    </ul>
  </section>
}
