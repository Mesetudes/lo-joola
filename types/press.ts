import type { VerificationStatus } from "@/types/editorial";

export type PressItem = {
  id: string;
  journal: string;
  annee: string;
  titre: string;
  image: string | null;
  alt: string;
  source: string | null;
  source_url: string | null;
  usage_rights: string | null;
  statut_verification: VerificationStatus;
  notes: string | null;
};