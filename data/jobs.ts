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
  {
    name: "Konsulent + Talentprogram 2023",
    company: "CGI Norge",
    link: "http://www.cgitalent.no/",
    logo: ATTENDEE_LOGOS.cgi,
    description:
      "Vi søker morgendagens konsulentstjerner til vårt talentprogram 2023! Er du nyutdannet, ønsker en bratt læringskurve og å utforske mulighetene i IT- og konsulentbransjen? Da er talentprogrammet i CGI noe for deg! Hos oss blir du fast ansatt og i løpet av programmets to år gir vi deg forutsetninger for å utvikle deg gjennom spennende utfordringer i prosjekt hos kunder, en solid opplæringspakke og kulturbyggende aktiviteter. Talentprogrammet er omgitt av en sterk kultur, varmt fellesskap og store muligheter til å drive egne initiativ.",
    location: ["Bergen", "Trondheim"],
    type: "full",
    deadline: new Date(Date.parse("2022-08-21")),
  },
  {
    name: "Summer Intern",
    company: "Visma Consulting",
    link: "https://vismaconsulting.recman.no/job.php?job_id=287062",
    logo: ATTENDEE_LOGOS.visma,
    description:
      "Er du student og nysgjerrig på IT-bransjen? Bli en del av Visma Consulting for en sommer og prøv deg som konsulent! Som Summer Intern i Visma Consulting får du et innblikk i livet som IT-konsulent. Du får prøve deg som utvikler på et reelt programmeringsprosjekt. Vårt summer internship varer i 6-7 uker, fra midten av juni til slutten av juli. Vi har også et stort fokus på at du skal bli kjent med de andre sommerstudentene, og de faste ansatte hos oss. Derfor arrangeres det masse sosialt og moro hele sommeren. Det blir arrangert alt fra hyttetur, til badstue, til karaoke og mye mer.",
    location: ["Oslo"],
    type: "summer",
    deadline: new Date(Date.parse("2022-10-01")),
  },
  {
    name: "IT-konsulent i traineeprogrammet Nytt Krutt",
    company: "Visma Consulting",
    link: "https://vismaconsulting.recman.no/job.php?job_id=287054",
    logo: ATTENDEE_LOGOS.visma,
    description:
      "Er du nyutdannet og ønsker en kickstart på karrieren som IT-konsulent i Visma Consulting? Som nyansatt blir du fast ansatt, og en del av traineeprogrammet Nytt Krutt. I over 20 år har nyansatte hos oss fått en lærerik, trygg og spennende overgang inn i arbeidslivet gjennom Nytt Krutt. Hvert år søker vi dyktige nyutdannede utviklere og designere som er engasjerte og nysgjerrige på ny teknologi! Vi i Visma Consulting leverer samfunnskritiske konsulenttjenester i form av IT-rådgivning, systemutvikling og applikasjonsforvaltning til både private og offentlige virksomheter.",
    location: ["Oslo"],
    type: "full",
    deadline: new Date(Date.parse("2022-11-09")),
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
