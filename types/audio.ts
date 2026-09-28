import type { VerificationStatus } from "@/types/editorial";

export type AudioItem = {
  id: string;
  titre: string;
  annee: string | null;
  source: string | null;
  langue: string;
  type: string;
  audio: string | null;
  transcription: string;
  source_url: string | null;
  usage_rights: string | null;
  statut_verification: VerificationStatus;
  notes: string | null;
};