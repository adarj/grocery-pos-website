// Server-rendered preview only; navigation awaits real approved destinations.
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
