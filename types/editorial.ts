export type VerificationStatus = "verified" | "unverified";

export type EditorialEntity = {
  id: string;
  titre: string;
  description: string;
  date: string | null;
  source: string | null;
  source_url: string | null;
  type: string;
  statut_verification: VerificationStatus;
  date_verification: string | null;
  notes: string | null;
};