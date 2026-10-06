@genType
type maturityCode = [#AVAILABLE | #PILOT | #PREVIEW | #PLANNED | #INTERNAL]
@genType
type view = {id: string, maturityCode: maturityCode}

// The public projection omits publication internals; callers receive no view by default.
let present: Capability.t => option<view>
