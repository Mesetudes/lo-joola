import type { VerificationStatus } from "@/types/editorial";

export type MediaCoverage = {
  id: string;
  entite: string;
  annee: string | null;
  type_couverture: string | null;
  sujet: string | null;
  image: string | null;
  alt: string;
  source: string | null;
  source_url: string | null;
  usage_rights: string | null;
  statut_verification: VerificationStatus;
  notes: string | null;
};

export type CoverageTheme = {
  id: string;
  titre: string;
  resume: string | null;
  source: string | null;
  statut_verification: VerificationStatus;
};

export type CoverageSide = {
  id: string;
  titre: string;
  themes: CoverageTheme[];
};