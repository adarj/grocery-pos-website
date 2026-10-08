// Server-rendered preview only; navigation awaits real approved destinations.
// Only language-root pages exist today. Make current state route-aware before
// adding a child page to this shared layout.
@genType @react.component
let make = (~language: Language.t, ~children: React.element) => {
  <>
    <a className="skip-link" href="#main-content">
      {React.string(Messages.get(language, SkipToMain))}
    </a>
    <header className="preview-header">
      <div className="preview-container preview-header-content">
        <a
          className="preview-identity"
          href={"/" ++ Language.routeCode(language)}
          ariaLabel={Messages.get(language, IdentityHome)}
          ariaCurrent={#page}
        >
          {React.string(Messages.get(language, SiteIdentity))}
        </a>
        <p className="preview-status"> {React.string(Messages.get(language, PreviewStatus))} </p>
      </div>
    </header>
    {children}
    <footer className="preview-footer">
      <div className="preview-container">
        <p> {React.string(Messages.get(language, PreviewFooter))} </p>
      </div>
    </footer>
  </>
}
