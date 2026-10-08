import { make as Homepage } from "../../src/ui/Homepage.gen";
import { requireRouteLanguage } from "../../src/adapters/next/language";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const language = requireRouteLanguage((await params).lang);
  return <Homepage language={language} />;
}
