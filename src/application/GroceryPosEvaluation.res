// Exact approved M22-C12-A01-R1 editorial projection; no runtime Markdown or I/O.
// Next owns route eligibility. This catalog contains only D5/D6-approved content.
type citation = {label: string, href: string}
type inline = Text(string) | Citation(citation)
type block = Paragraph(array<inline>) | Questions(array<string>)
type section = {heading: string, blocks: array<block>}
type article = {title: string, introduction: array<block>, sections: array<section>}

let introduction = [
  Paragraph([
    Text(
      "Changing checkout software starts with a practical question: what must your store be able to do, and what evidence would show that a proposed system can do it? Use the questions below to prepare a discussion with a supplier and the people responsible for your store's technology. They are evaluation suggestions, not a certification checklist or a recommendation of any particular product.",
    ),
  ]),
  Paragraph([
    Text(
      "Choose the questions that fit your store. Payment arrangements, taxes, privacy and measurement rules need review for your actual location and configuration. This article does not determine those obligations.",
    ),
  ]),
]

let sections: array<section> = [
  {
    heading: "Define what must continue during an interruption",
    blocks: [
      Paragraph([
        Text(
          "Write down the operations you need during an internet interruption: finding items and prices, recording sales, accepting each intended payment type, printing receipts and closing a lane. Ask which depend on the store network, a remote service or a separate payment connection.",
        ),
      ]),
      Paragraph([
        Text(
          "For each operation, request a written answer: what continues, what stops, what staff see and what they should do next. Ask separately about losing internet access, losing a cloud service and losing power. A statement that a system “works offline” is too broad to answer all of those questions.",
        ),
      ]),
    ],
  },
  {
    heading: "Ask to see recovery, not just disconnected operation",
    blocks: [
      Paragraph([
        Text(
          "Arrange a controlled demonstration away from live trading, using test records and the proposed software and equipment versions. Agree on expected results before introducing an interruption.",
        ),
      ]),
      Paragraph([Text("Ask the supplier to show:")]),
      Questions([
        "What happens to an unfinished sale when the connection is lost.",
        "Where completed sales are recorded during the interruption.",
        "What happens after reconnection, including any rejected or duplicate records.",
        "How staff compare lane records with the restored system and resolve differences.",
        "Which operations require a supervisor, supplier or payment provider.",
      ]),
      Paragraph([
        Text("Also ask how backups are checked and how restoration is demonstrated. "),
        Citation({
          label: "NIST's small-business cybersecurity guide",
          href: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1300.pdf",
        }),
        Text(
          " recommends testing backups and checking their integrity before restoration. That is cybersecurity guidance, not proof that any POS can survive every outage. Record what the demonstration did not test.",
        ),
      ]),
    ],
  },
  {
    heading: "Validate the migration with a representative sample",
    blocks: [
      Paragraph([
        Text(
          "Request a field-by-field migration plan before agreeing to a cutover. Decide which information is needed: item identifiers and barcodes, descriptions, prices, units, tax settings and, if applicable, customer or loyalty records. Ask what can be exported and imported, what needs conversion and what cannot be transferred.",
        ),
      ]),
      Paragraph([
        Text("A "),
        Citation({
          label: "Global Trade Item Number, or GTIN",
          href: "https://support.gs1.org/support/solutions/articles/43000734283-what-is-a-global-trade-item-number-gtin-",
        }),
        Text(
          ", identifies a trade item in the GS1 system. Matching an identifier is only one check; it does not establish that your complete catalog was migrated correctly.",
        ),
      ]),
      Paragraph([
        Text(
          "With the responsible store and implementation staff, compare source records with imported records and agreed expected checkout results. Include the exceptions you actually use, such as weighted goods, changed prices or discounts. Ask who investigates mismatches and who approves the result.",
        ),
      ]),
      Paragraph([
        Text(
          "Keep personal and payment data out of demonstrations unless an appropriate authorized process has been established. Ask how any required customer-data transfer will be scoped and protected under the rules applicable to your business. This is a request for a reviewed process, not a claim that all data may be moved.",
        ),
      ]),
    ],
  },
  {
    heading: "Check the equipment and barcode path together",
    blocks: [
      Paragraph([
        Text(
          "List the scanners, scales, printers, cash drawers, payment terminals, network equipment and any backup-power equipment you intend to retain or replace. Request compatibility evidence for the exact models, firmware, operating environment and POS version. For scales used to price goods, ask the responsible installer about the local measurement requirements.",
        ),
      ]),
      Paragraph([
        Text(
          "A scanner reading a symbol does not by itself demonstrate the complete checkout result. ",
        ),
        Citation({
          label: "GS1's retail 2D implementation guideline",
          href: "https://ref.gs1.org/guidelines/2d-in-retail/1.1.0/",
        }),
        Text(
          " addresses scanner software and POS host-system handling. Ask to see your relevant barcode types produce the expected item, price and quantity at checkout.",
        ),
      ]),
      Paragraph([
        Text("Where a supplier mentions Sunrise 2027, distinguish the "),
        Citation({
          label: "GS1 US industry transition initiative",
          href: "https://www.gs1us.org/industries-and-insights/by-topic/sunrise-2027",
        }),
        Text(
          " from a claim that every 2D capability is already implemented. It is not a universal legal deadline. Confirm the particular capability and configuration being offered.",
        ),
      ]),
    ],
  },
  {
    heading: "Separate payment processing from the checkout promise",
    blocks: [
      Paragraph([
        Text(
          "Ask who supplies the checkout software, terminal and payment-processing service, and who is responsible for installation, updates, access and incident handling. An answer about recording a sale does not establish whether a card payment can be authorized during the same interruption. Ask the payment provider about permitted behavior, restrictions and responsibility for later failures.",
        ),
      ]),
      Paragraph([
        Citation({
          label: "PCI SSC explains",
          href: "https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/",
        }),
        Text(
          " that outsourcing payment processing does not remove the merchant's responsibility to ensure payment data is protected. Request evidence for the services actually provided and a clear allocation of shared responsibilities.",
        ),
      ]),
      Paragraph([
        Text(
          "Confirm applicable compliance validation and reporting with your merchant bank or relevant payment brand, as directed by ",
        ),
        Citation({
          label: "PCI SSC's merchant guidance",
          href: "https://www.pcisecuritystandards.org/merchants/",
        }),
        Text(
          ". The required approach depends on your arrangement; this article does not select a questionnaire, declare compliance or replace qualified advice.",
        ),
      ]),
    ],
  },
  {
    heading: "Agree on the changeover and support responsibilities",
    blocks: [
      Paragraph([
        Text(
          "Before changing a live lane, ask who will train staff, authorize the switch, investigate exceptions and decide whether to pause or return to the previous system. Rehearse the tasks cashiers and supervisors will actually perform.",
        ),
      ]),
      Paragraph([
        Text(
          "Compare a phased transition with a single changeover for your own circumstances. Ask how records created after the switch would be handled if a return is needed; do not assume that switching back automatically reconciles them. Confirm any offered support channel, hours, exclusions and escalation owner in writing. Do not depend on an unconfirmed response-time promise.",
        ),
      ]),
      Paragraph([
        Text(
          "Finish with an evidence sheet for each critical requirement: expected behavior, tested configuration, observed result, remaining limitation and responsible person. Leave unsupported answers open. Use that record to decide whether further evaluation is needed before placing the system into live service.",
        ),
      ]),
    ],
  },
  {
    heading: "Source and scope notes",
    blocks: [
      Paragraph([
        Text(
          "Sources were checked October 11, 2026 (UTC). GS1 material concerns its identifier and barcode system; it does not establish a supplier's compatibility. NIST SP 1300 is voluntary cybersecurity guidance from a U.S. authority. PCI guidance concerns payment-card arrangements; local obligations require separate review. GS1 US material is U.S.-published industry guidance, not a worldwide mandate. The questions are editorial suggestions, not observed store results, promised outcomes, or proof that any particular supplier meets them.",
        ),
      ]),
    ],
  },
]

// Qualification expansion applies to human prose, never URLs or technical identifiers.
let humanText = (language, text) =>
  switch language {
  | Language.English => text
  | PseudoEnglish => {
      let facts = ["NIST SP 1300", "PCI SSC", "GS1 US", "Sunrise 2027", "GS1", "GTIN", "POS"]
      let rec expand = (value, index) => {
        if value == "" {
          ""
        } else {
          switch facts[index] {
          | None => PseudoLocalization.transform(value)
          | Some(fact) =>
            value->String.split(fact)->Array.map(part => expand(part, index + 1))->Array.join(fact)
          }
        }
      }
      expand(text, 0)
    }
  }

let resolveBlock = (language, block) =>
  switch block {
  | Paragraph(parts) =>
    Paragraph(
      parts->Array.map(part =>
        switch part {
        | Text(text) => Text(humanText(language, text))
        | Citation(source) => Citation({...source, label: humanText(language, source.label)})
        }
      ),
    )
  | Questions(items) => Questions(items->Array.map(item => humanText(language, item)))
  }

let load = language => {
  title: Messages.get(language, EvaluationTitle),
  introduction: introduction->Array.map(block => resolveBlock(language, block)),
  sections: sections->Array.map(section => {
    heading: humanText(language, section.heading),
    blocks: section.blocks->Array.map(block => resolveBlock(language, block)),
  }),
}

let path = language =>
  "/" ++ Language.routeCode(language) ++ "/resources/evaluating-grocery-pos-systems"
