import marinit from "../content/images/logos/jobads/marinit.png";
import tietoevry from "../content/images/logos/jobads/tietoevry.png";

export interface Jobads {
  company: string;
  logo: StaticImageData;
}

export type JOB_NAMES = "marinit" | "tietoevry";

export const JOB_LOGOS: Record<JOB_NAMES, StaticImageData> = {
  marinit: marinit,
  tietoevry: tietoevry,
};
