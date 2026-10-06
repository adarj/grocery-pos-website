import { load } from "../src/qualification/CapabilityProofData.gen";
import { make as ArchitectureProof } from "../src/ui/ArchitectureProof.gen";

export default function Page() {
  return <ArchitectureProof capabilities={load()} />;
}
