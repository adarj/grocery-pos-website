import type { Metadata } from "next";
import { make as Homepage } from "../../src/ui/Homepage.gen";
import { make as EngineeringShell } from "../../src/ui/EngineeringShell.gen";
import { pageMetadata } from "../../src/i18n/Messages.gen";
import { requireRouteLanguage } from "../../src/adapters/next/language";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  return pageMetadata(requireRouteLanguage((await params).lang));
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const language = requireRouteLanguage((await params).lang);
  return <EngineeringShell language={language} pageIdentity="Home"><Homepage language={language} /></EngineeringShell>;
}
