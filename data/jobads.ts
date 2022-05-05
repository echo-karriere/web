import marinit from "../content/images/logos/jobads/marinit.jpg";

export interface Jobads {
  company: string;
  logo: StaticImageData;
}

export type JOB_NAMES = "marinit";

export const JOB_LOGOS: Record<JOB_NAMES, StaticImageData> = {
  marinit: marinit,
};
