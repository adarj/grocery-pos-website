// Server-rendered site identity and native skip navigation; no eligible extra destinations.
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
      </div>
    </header>
    {children}
  </>
}
