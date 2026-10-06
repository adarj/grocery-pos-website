@genType
@react.component
let make = (~capabilities: array<CapabilityPresentation.view>) => {
  <main>
    <h1> {React.string("Grocery POS Website — M0.3 architecture proof")} </h1>
    <p> {React.string("Publication decisions come from the ReScript application boundary.")} </p>
    <p>
      {React.string("Fictional qualification data; no Grocery POS product availability is claimed.")}
    </p>
    <CapabilityList capabilities />
    <Counter />
  </main>
}
