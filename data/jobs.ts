import { JobProps } from "@/components";

import { ATTENDEE_LOGOS } from "./attendees";

export const JOBS: Array<JobProps> = [
  {
    name: "Nyutdannet utvikler 2022",
    company: "Netcompany",
    link: "https://jobs.smartrecruiters.com/Netcompany1/743999761881466-nyutdannet-utvikler-2022",
    logo: ATTENDEE_LOGOS.netcompany,
    description:
      "Vil du være med å utgjøre en forskjell ved å utvikle fremtidens IT-løsninger? Vi i Netcompany ser etter deg som ønsker å jobbe med å utvikle samfunnsnyttige løsninger for kunder slik som Folkehelseinstituttet, DNB, Barnevernet og OBOS.",
    location: "Oslo",
    type: "full",
    deadline: null,
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
