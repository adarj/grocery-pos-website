@genType
@react.component
let make = (~title: string) => {
  <main>
    <h1> {React.string(title)} </h1>
    <p> {React.string("ReScript server component rendered through Next App Router.")} </p>
    <p> {React.string("Engineering proof only. This is not the public website.")} </p>
    <Counter />
  </main>
}
