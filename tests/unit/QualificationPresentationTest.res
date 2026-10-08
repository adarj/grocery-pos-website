@module("node:test")
external test: (string, unit => unit) => unit = "test"
@module("node:assert/strict")
external expectTrue: bool => unit = "ok"
@module("react-dom/server")
external render: React.element => string = "renderToStaticMarkup"

test(
  "retained qualification composition projects before rendering and excludes withheld samples",
  () => {
    let html = render(
      <ArchitectureProof capabilities={CapabilityProofData.load()} language=English />,
    )
    expectTrue(html->String.includes("sample-authorized-preview"))
    expectTrue(!(html->String.includes("sample-withheld-available")))
    expectTrue(!(html->String.includes("sample-withheld-internal")))
    expectTrue(html->String.includes(Messages.get(English, FictionalDisclaimer)))
    expectTrue(html->String.includes("PREVIEW"))
  },
)

test(
  "Counter fixture renders initial state with resolved labels; this is not hydration proof",
  () => {
    let labels = Messages.counterLabels(Language.PseudoEnglish)
    let html = render(<Counter labels />)
    expectTrue(html->String.includes(labels.heading))
    expectTrue(html->String.includes(labels.increment))
    expectTrue(html->String.includes("aria-live=\"polite\""))
    expectTrue(html->String.includes(">0</output>"))
  },
)
