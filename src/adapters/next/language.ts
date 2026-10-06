import { notFound } from "next/navigation";
import { resolveRoute } from "../../i18n/Language.gen";

// Translate a validated registry result into Next's rendering interrupt.
export function requireRouteLanguage(code: string) {
  const language = resolveRoute(code, process.env.NODE_ENV === "development");
  if (language === undefined) notFound();
  return language;
}
