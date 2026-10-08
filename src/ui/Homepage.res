// Exact human-approved M1.4.2 content; presentation is entirely server-rendered.
@genType @react.component
let make = (~language: Language.t) => {
  <main id="main-content" className="preview-container preview-main" tabIndex={-1}>
    <section>
      <p> {React.string(Messages.get(language, IntroductionLabel))} </p>
      <h1> {React.string(Messages.get(language, SiteIdentity))} </h1>
      <p> {React.string(Messages.get(language, IntroductionParagraph))} </p>
    </section>
    <section>
      <h2> {React.string(Messages.get(language, DevelopedHeading))} </h2>
      <p> {React.string(Messages.get(language, DevelopedParagraph))} </p>
    </section>
    <section>
      <h2> {React.string(Messages.get(language, LocalFirstHeading))} </h2>
      <p> {React.string(Messages.get(language, LocalFirstParagraph))} </p>
    </section>
    <section>
      <h2> {React.string(Messages.get(language, WebsiteHeading))} </h2>
      <p> {React.string(Messages.get(language, WebsiteParagraph))} </p>
    </section>
  </main>
}
