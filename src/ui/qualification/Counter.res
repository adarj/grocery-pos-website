@@directive("'use client'")

// Retained solely to qualify ReScript hydration; capability presentation is server-only.

@react.component
let make = (~labels: Messages.counterLabels) => {
  let (count, setCount) = React.useState(() => 0)

  <section ariaLabel=labels.section>
    <h2> {React.string(labels.heading)} </h2>
    <dl>
      <dt> {React.string(labels.count)} </dt>
      <dd> <output ariaLabel=labels.count ariaLive=#polite> {React.int(count)} </output> </dd>
    </dl>
    <button onClick={_ => setCount(previous => previous + 1)}>
      {React.string(labels.increment)}
    </button>
  </section>
}
