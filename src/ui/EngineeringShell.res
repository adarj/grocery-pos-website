// Per-page server composition supplies identity explicitly; no client pathname state.
@genType
type pageIdentity = Home | Resource

@genType @react.component
let make = (~language: Language.t, ~pageIdentity: pageIdentity, ~children: React.element) => {
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
          ariaCurrent=?{switch pageIdentity {
          | Home => Some(#page)
          | Resource => None
          }}
        >
          {React.string(Messages.get(language, SiteIdentity))}
        </a>
      </div>
    </header>
    {children}
  </>
}
