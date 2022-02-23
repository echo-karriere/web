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
  {
    name: "Internship",
    company: "Kongsberg Gruppen",
    link: "https://www.kongsberg.com/careers/vacancies/summer-internship-2022/",
    logo: ATTENDEE_LOGOS.kongsberg,
    description:
      "Throughout the summer internship we promise close supervision from our experienced co-workers whilst working on challenging and innovating tasks and attaining relevant work experience. Our Summer Student Programme is primarily intended for those of you undertaking degrees in science and technology across several of our locations. You will also benefit from unique networking opportunities through social activities after work hours.",
    location: ["Oslo", "Kongsberg", "Bergen", "Trondheim"],
    type: "summer",
    deadline: new Date(Date.parse("2022-02-28")),
  },
  {
    name: "Consultant (Graduate 2022)",
    company: "Avo Consulting",
    link: "https://karriere.avoconsulting.no/jobs/1310309-consultant-graduate-2022",
    logo: ATTENDEE_LOGOS.avo,
    description:
      "Avo er et oppstartsselskap; men vi er et oppstartsselskap med muskler. På bare fem år har vi vokst fra å være en håndfull mennesker til å bli nesten 100 ansatte. Dette har vi klart fordi vi er annerledes, og det har vi tenkt til å fortsette med å være. Kall oss gjerne en slags rebell i konsulentbransjen.  Har du Avo-faktor og et ønske om å skape episke løsninger med oss? Søk da vel!",
    location: ["Bergen"],
    type: "full",
    deadline: new Date(Date.parse("2022-03-01")),
  },
  {
    name: "Consultant - Developer (Graduate 2022)",
    company: "Avo Consulting",
    link: "https://karriere.avoconsulting.no/jobs/1306250-consultant-developer-graduate-2022",
    logo: ATTENDEE_LOGOS.avo,
    description:
      "Avo er et oppstartsselskap; men vi er et oppstartsselskap med muskler. På bare fem år har vi vokst fra å være en håndfull mennesker til å bli nesten 100 ansatte. Dette har vi klart fordi vi er annerledes, og det har vi tenkt til å fortsette med å være. Kall oss gjerne en slags rebell i konsulentbransjen.  Har du Avo-faktor og et ønske om å skape episke løsninger med oss? Søk da vel!",
    location: ["Bergen"],
    type: "full",
    deadline: new Date(Date.parse("2022-03-01")),
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
