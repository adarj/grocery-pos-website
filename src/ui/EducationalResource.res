// Semantic server-rendered presentation of the resolved, approved editorial view.
let inline = (part, index) =>
  switch part {
  | GroceryPosEvaluation.Text(text) =>
    <React.Fragment key={Int.toString(index)}> {React.string(text)} </React.Fragment>
  | Citation(source) =>
    <a key={Int.toString(index)} href={source.href}> {React.string(source.label)} </a>
  }

let block = (block, index) =>
  switch block {
  | GroceryPosEvaluation.Paragraph(parts) =>
    <p key={Int.toString(index)}>
      {parts->Array.mapWithIndex((part, index) => inline(part, index))->React.array}
    </p>
  | Questions(items) =>
    <ul key={Int.toString(index)}>
      {items
      ->Array.mapWithIndex((item, index) =>
        <li key={Int.toString(index)}> {React.string(item)} </li>
      )
      ->React.array}
    </ul>
  }

@genType @react.component
let make = (~language: Language.t) => {
  let article = GroceryPosEvaluation.load(language)
  <main id="main-content" className="preview-container preview-main" tabIndex={-1}>
    <article className="educational-resource">
      <h1> {React.string(article.title)} </h1>
      {article.introduction->Array.mapWithIndex((value, index) => block(value, index))->React.array}
      {article.sections
      ->Array.mapWithIndex((section, index) =>
        <section key={Int.toString(index)}>
          <h2> {React.string(section.heading)} </h2>
          {section.blocks->Array.mapWithIndex((value, index) => block(value, index))->React.array}
        </section>
      )
      ->React.array}
    </article>
  </main>
}
