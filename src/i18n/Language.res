@genType
type t = English | PseudoEnglish
type exposure = Public | Qualification
@genType
type direction = [#ltr | #rtl]

let all = [English, PseudoEnglish]

let exposure = language =>
  switch language {
  | English => Public
  | PseudoEnglish => Qualification
  }

@genType
let isPublic = language => exposure(language) == Public

@genType
let routeCode = language =>
  switch language {
  | English => "en"
  | PseudoEnglish => "en-XA"
  }

@genType
let htmlLanguage = routeCode

@genType
let direction = (_language: t): direction => #ltr

let decodeRoute = raw => all->Array.find(language => routeCode(language) == raw)

@genType
let resolveRoute = (raw, allowQualification) =>
  switch decodeRoute(raw) {
  | Some(language) if isPublic(language) || allowQualification => Some(language)
  | _ => None
  }

let defaultPublic = English
let publicLanguages = () => all->Array.filter(isPublic)

@genType
let publicRouteCodes = () => publicLanguages()->Array.map(routeCode)

// With one public language, every preference/fallback has the same result.
// Before adding another public language, qualify quality-weighted matching with
// focused standards-oriented utilities; do not grow a home-made header parser.
@genType
let negotiate = (_acceptLanguage: option<string>) => defaultPublic
