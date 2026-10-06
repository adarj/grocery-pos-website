@react.component
let make = (~capabilities: array<CapabilityPresentation.view>) => {
  <section ariaLabel="Public-safe capability samples">
    <h2> {React.string("Public-safe capability samples")} </h2>
    <ul>
      {capabilities
      ->Array.map(view =>
        <li key=view.id>
          <dl>
            <dt> {React.string("Sample identifier")} </dt>
            <dd> {React.string(view.id)} </dd>
            <dt> {React.string("Maturity code")} </dt>
            <dd> {React.string(view.maturityCode)} </dd>
          </dl>
        </li>
      )
      ->React.array}
    </ul>
  </section>
}
