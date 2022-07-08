import { JobProps } from "@/components";

import { ATTENDEE_LOGOS } from "./attendees";

export const JOBS: Array<JobProps> = [
  {
    name: "Graduate",
    company: "Deloitte Norge",
    link: "https://deloitte.recman.no/index.php?query=&department%5B1685%5D=1685",
    logo: ATTENDEE_LOGOS.deloitte,
    description:
      "Vi ser etter folk som er like forskjellige som utfordringene vi jobber med å løse. Dette gjør vi fordi vi tror på at ingenting er umulig med de rette folka, eller mer spesifikt, den rette kombinasjonen av folk. Du som nyutdannet er en svært viktig del av denne kombinasjonen. Er du vår nye kollega? Vi søker nyutdannede til forretningsområdene Consulting, Risk Advisory, Financial Advisory, Business Prosess Solutions og Revisjon/Audit & Assurance flere steder i landet. Les mer om de ulike områdene og se hvor du hører hjemme.",
    location: ["Oslo", "Bergen", "Stavanger"],
    type: "full",
    deadline: new Date(Date.parse("2022-08-14")),
  },
  {
    name: "Functional Analyst",
    company: "Metzum AS",
    link: "https://metzum.no/no/hiring/er-du-en-problemloser",
    logo: ATTENDEE_LOGOS.metzum,
    description:
      "Er du en problemløser? Blir du også helt i ekstase når noen snakker om fakturering, innovasjon og digital fremtid i en og samme setning. Da er du som oss. Nå ser vi etter deg med interesse for både teknologiske og bærekraftige utfordringer. Hvem er vi? Jo, vi utvikler, leverer og drifter en skybasert programvare, som effektivt og med stor grad av automatikk, avregner og fakturerer store transaksjonsvolum for aktører i kraft- og energibransjen i Norden. Det er løsningen for fremtiden. Og vi skal bare bli bedre. Derfor trenger vi smarte folk til å løse nye, spennende oppgaver. Vi trenger en functional analyst.",
    location: ["Bergen"],
    type: "full",
    deadline: null,
  },
  {
    name: "Utviklere",
    company: "Metzum AS",
    link: "https://metzum.no/no/hiring/er-du-en-problemloser",
    logo: ATTENDEE_LOGOS.metzum,
    description:
      "Utvikler? Blir du også helt i ekstase når noen snakker om fakturering, innovasjon og digital fremtid i en og samme setning. Da er du som oss. Nå ser vi etter deg med interesse for både teknologiske og bærekraftige utfordringer. Hvem er vi? Jo, vi utvikler, leverer og drifter en skybasert programvare, som effektivt og med stor grad av automatikk, avregner og fakturerer store transaksjonsvolum for aktører i kraft- og energibransjen i Norden. Det er løsningen for fremtiden. Og vi skal bare bli bedre. Derfor trenger vi smarte folk til å løse nye, spennende oppgaver.",
    location: ["Bergen"],
    type: "full",
    deadline: null,
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
