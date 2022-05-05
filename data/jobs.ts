import { JobProps } from "@/components";

import { JOB_LOGOS } from "./jobads";

export const JOBS: Array<JobProps> = [
  {
    name: "IT Support Engineer",
    company: "Marin IT AS",
    link: "	https://www.linkedin.com/jobs/view/3040848919",
    logo: JOB_LOGOS.marinit,
    description:
      "As a Support Technician you will contribute to customer satisfaction by assisting end-users in the daily operation of our services. You will be joining a global team, that supports customers in all continents and oceans.",
    location: "Bergen",
    type: "full",
    deadline: null,
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
