import type { VerificationStatus } from "@/types/editorial";

export type CaseDocument = {
  id: string;
  titre: string;
  image: string | null;
  alt: string;
  ce_que_nous_voyons: string;
  importance: string;
  source: string | null;
  source_url: string | null;
  statut_verification: VerificationStatus;
  usage_rights: string | null;
  notes: string | null;
};