import type { VerificationStatus } from "@/types/editorial";

export type Person = {
  id: string;
  nom: string;
  age: string | null;
  profession: string | null;
  residence: string | null;
  histoire: string;
  photo: string | null;
  alt: string;
  source: string | null;
  source_url: string | null;
  consentement: string | null;
  usage_rights: string | null;
  statut_verification: VerificationStatus;
  notes: string | null;
};