import type { Metadata } from "next";
import { requireRouteLanguage } from "../../../../src/adapters/next/language";
import { evaluationMetadata } from "../../../../src/i18n/Messages.gen";
import { make as EngineeringShell } from "../../../../src/ui/EngineeringShell.gen";
import { make as EducationalResource } from "../../../../src/ui/EducationalResource.gen";

export async function generateMetadata({ params }: PageProps<"/[lang]/resources/evaluating-grocery-pos-systems">): Promise<Metadata> {
  return evaluationMetadata(requireRouteLanguage((await params).lang));
}

export default async function Page({ params }: PageProps<"/[lang]/resources/evaluating-grocery-pos-systems">) {
  const language = requireRouteLanguage((await params).lang);
  return <EngineeringShell language={language} pageIdentity="Resource"><EducationalResource language={language} /></EngineeringShell>;
}
