import type { VerificationStatus } from "@/types/editorial";

export type Survivor = {
  id: string;
  titre: string;
  photo: string | null;
  alt: string;
  video: string | null;
  sous_titres: string | null;
  recit: string;
  source: string | null;
  source_url: string | null;
  consentement: string | null;
  usage_rights: string | null;
  statut_verification: VerificationStatus;
  notes: string | null;
};