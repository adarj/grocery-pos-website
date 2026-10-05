@@directive("'use client'")

@react.component
let make = () => {
  let (count, setCount) = React.useState(() => 0)

  <section ariaLabel="Client component proof">
    <h2> {React.string("ReScript client interaction")} </h2>
    <p ariaLive=#polite> {React.string("Count: " ++ Int.toString(count))} </p>
    <button onClick={_ => setCount(previous => previous + 1)}>
      {React.string("Increment counter")}
    </button>
  </section>
}
