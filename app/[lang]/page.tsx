import { load } from "../../src/qualification/CapabilityProofData.gen";
import { make as ArchitectureProof } from "../../src/ui/ArchitectureProof.gen";
import { requireRouteLanguage } from "../../src/adapters/next/language";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const language = requireRouteLanguage((await params).lang);
  return <ArchitectureProof capabilities={load()} language={language} />;
}
