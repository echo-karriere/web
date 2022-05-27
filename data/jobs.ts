import { JobProps } from "@/components";

import { JOB_LOGOS } from "./jobads";

export const JOBS: Array<JobProps> = [
  {
    name: "Graduate 2022",
    company: "Tietoevry",
    link: "https://tieto.wd3.myworkdayjobs.com/Tieto_Referral_Site/job/Norway-Fornebu/We-are-looking-for-tech-graduates-to-our-specialist-track-in-Norway--Student-Activities_R97120",
    logo: JOB_LOGOS.tietoevry,
    description:
      "We are now recruiting graduates for the fall of 2022 in Norway who want to be a part of shaping the future today! Become a part of our team consisting of 24,000 experts globally, helping businesses and societies meet their full potential – while you are also reaching yours.",
    location: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Kristiansand", "Fornebu", "Brumunddal"],
    type: "full",
    deadline: new Date(Date.parse("2022-06-24")),
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
