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
    name: "Talent Network 2022",
    company: "Netcompany",
    link: "https://jobs.smartrecruiters.com/Netcompany1/743999766926422-talent-network-2022",
    logo: ATTENDEE_LOGOS.netcompany,
    description:
      "Er du morgendagens teknolog og ønsker å utfordre deg selv, lære og bygge nettverk? Nå kan du få en unik mulighet. Netcompany ønsker å invitere 10 studenter fra Norge ned til et slott utenfor København. Her vil du møte teknologistudenter fra de ulike landene hvor vi har kontor for en faglig og sosial nettverkssamling!",
    location: "København",
    type: "other",
    deadline: new Date(Date.parse("2021-12-01")),
  },
  {
    name: "Systemutvikler",
    company: "Stacc",
    link: "https://grabacoffee.io/stacc",
    logo: ATTENDEE_LOGOS.stacc,
    description:
      "Stacc er en unik kombinasjon av 25 års erfaring og en start-up. Folkene våre har lang og bred erfaring i strategi, forretningsutvikling og teknologi innen den finansielle sektoren. Samtidig er vi stadig nysgjerrig og søker alltid utvikling og endring. Vi er i sterk vekst og opplever stor etterspørsel etter våre tjenester og løsninger, har hovedkontor i Bergen og er for tiden 115 ansatte.",
    location: ["Bergen"],
    type: "part",
    deadline: null,
  },
  {
    name: "Sommerjobb i Politiets IKT-tjenester",
    company: "Politiets IKT-tjenester",
    link: "https://85340.webcruiter.no/Main2/Recruit/Public/4423585345?link_source_id=",
    logo: ATTENDEE_LOGOS.politet,
    description:
      "Er du student innen teknologi- og designfag, og har fullført minst 2 år av utdannelsen din? Har du lyst til å være med å digitalisere politiet - i team med andre studenter? Da kan en sommerjobb i Politiets IKT-tjenester være svaret for deg. ",
    location: ["Oslo"],
    type: "summer",
    deadline: new Date(Date.parse("2022-02-01")),
  },
  {
    name: "Easee ❤ studenter",
    company: "Easee",
    link: "https://karriere.easee.no/jobs/1327691-easee-3-studenter",
    logo: ATTENDEE_LOGOS.easee,
    description:
      "Ønsker du å være med oss å forme fremtidens strømnett- og fremtidens bedriftskultur? Er du ferdig våren 2022 og ønsker å starte karrieren i et selskap hvor menneskene er i fokus. Her kan du legge inn åpen søknad til alle avdelingene i Easee. Vi ser også etter studenter som ønsker å knytte opp teori med praktisk erfaring og er på jakt etter deltidsjobb/sommerjobb, eller ønsker å skrive bachelor- eller masteroppgave i samarbeid med oss i Easee.",
    location: ["Oslo", "Sandnes"],
    type: "other",
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
    name: "Software Developer",
    company: "Easee",
    link: "https://karriere.easee.no/jobs/1086856-software-developer",
    logo: ATTENDEE_LOGOS.easee,
    description:
      "Shape the future of Electricity, by developing innovative, user-friendly, and scalable web solutions at Easee.",
    location: ["Oslo", "Sandnes"],
    type: "full",
    deadline: null,
  },
  {
    name: "Consultant (Graduate 2022)",
    company: "Avo Consulting",
    link: "https://karriere.avoconsulting.no/jobs/1310309-consultant-graduate-2022",
    logo: ATTENDEE_LOGOS.avo,
    description:
      "Avo er et oppstartsselskap; men vi er et oppstartsselskap med muskler. På bare fem år har vi vokst fra å være en håndfull mennesker til å bli nesten 100 ansatte. Dette har vi klart fordi vi er annerledes, og det har vi tenkt til å fortsette med å være. Kall oss gjerne en slags rebell i konsulentbransjen.  Har du Avo-faktor og et ønske om å skape episke løsninger med oss? Søk da vel!",
    location: ["Oslo", "Bergen"],
    type: "full",
    deadline: new Date(Date.parse("2021-12-08")),
  },
  {
    name: "Consultant - Developer (Graduate 2022)",
    company: "Avo Consulting",
    link: "https://karriere.avoconsulting.no/jobs/1306250-consultant-developer-graduate-2022",
    logo: ATTENDEE_LOGOS.avo,
    description:
      "Avo er et oppstartsselskap; men vi er et oppstartsselskap med muskler. På bare fem år har vi vokst fra å være en håndfull mennesker til å bli nesten 100 ansatte. Dette har vi klart fordi vi er annerledes, og det har vi tenkt til å fortsette med å være. Kall oss gjerne en slags rebell i konsulentbransjen.  Har du Avo-faktor og et ønske om å skape episke løsninger med oss? Søk da vel!",
    location: ["Oslo", "Bergen"],
    type: "full",
    deadline: new Date(Date.parse("2021-12-08")),
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
