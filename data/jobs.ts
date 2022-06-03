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
  {
    name: "IT support - Part time",
    company: "Marin IT",
    link: "	https://www.linkedin.com/jobs/view/3095500112",
    logo: JOB_LOGOS.marinit,
    description:
      "	We are looking for a part time Support Technician! Are you studying Information Technology? Want to get some practical experience in the meantime? We have a 40% position in our Global Helpdesk Team. As a Support Technician you will contribute to customer satisfaction by assisting end-users in the daily operation of our services. You will also be joining a global team, that supports customers in all continents and oceans. About the opportunity: Scope: 2 days a week (08:00 – 16:000), with the possibility to work more during holidays. Duration: Until August 2023, with possibility of extension. Tasks: The tasks consist primarily of user support and customer service, but also include preparation of computers and periodically maintenance of local systems. Qualifications: Job training will be provided for, so no specific competence is needed. We are looking for someone that is easygoing, service-minded and has an interest for IT and computer science. You must also be comfortable speaking and writing in English. We offer: In Marin IT you will get opportunities to learn and develop your career along with competent colleagues eager to share their knowledge. We appreciate our employees' initiatives, and will support your professional development by providing training and challenging tasks. We also offer a social and including work-environment. Working hours will be adjusted to your study plan and exams.",
    location: ["Bergen", "Austevoll"],
    type: "full",
    deadline: new Date(Date.parse("2022-06-15")),
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
