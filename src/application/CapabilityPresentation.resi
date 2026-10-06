@genType
type view = {id: string, maturityCode: string}

// The public projection omits publication internals; callers receive no view by default.
let present: Capability.t => option<view>
