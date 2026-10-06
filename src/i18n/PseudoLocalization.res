// Human-facing messages only. Machine identifiers never enter this transformation.
let transform = text => {
  let accented = text
  ->String.split("")
  ->Array.map(character =>
    switch character {
    | "a" => "á"
    | "e" => "é"
    | "i" => "í"
    | "o" => "ó"
    | "u" => "ú"
    | "A" => "Á"
    | "E" => "É"
    | "I" => "Í"
    | "O" => "Ó"
    | "U" => "Ú"
    | unchanged => unchanged
    }
  )
  ->Array.join("")
  let padding = (String.length(text) * 3 + 9) / 10
  "[!! " ++ accented ++ " " ++ String.repeat("·", padding) ++ " !!]"
}
