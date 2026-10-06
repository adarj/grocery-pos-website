@genType
type t = English | PseudoEnglish
type exposure = Public | Qualification
@genType
type direction = [#ltr | #rtl]

let exposure: t => exposure
@genType
let isPublic: t => bool
@genType
let routeCode: t => string
@genType
let htmlLanguage: t => string
@genType
let direction: t => direction
let decodeRoute: string => option<t>
@genType
let resolveRoute: (string, bool) => option<t>
let defaultPublic: t
let publicLanguages: unit => array<t>
@genType
let publicRouteCodes: unit => array<string>
@genType
let negotiate: option<string> => t
