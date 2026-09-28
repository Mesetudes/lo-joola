import type { VerificationStatus } from "@/types/editorial";

export type Testimony = {
  id: string;
  titre: string;
  locuteur: string | null;
  photo: string | null;
  alt: string;
  audio: string | null;
  transcription: string;
  source: string | null;
  source_url: string | null;
  consentement: string | null;
  usage_rights: string | null;
  statut_verification: VerificationStatus;
  notes: string | null;
};