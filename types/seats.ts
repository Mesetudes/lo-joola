import type { VerificationStatus } from "@/types/editorial";

export type SeatsInfo = {
  id: string;
  titre: string;
  nombre: number;
  source: string | null;
  source_url: string | null;
  statut_verification: VerificationStatus;
  date_verification: string | null;
  notes: string | null;
};