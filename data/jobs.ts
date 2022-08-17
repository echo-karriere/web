import { JobProps } from "@/components";

import { ATTENDEE_LOGOS } from "./attendees";

export const JOBS: Array<JobProps> = [
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
  {
    name: "Nyutdannet 2023",
    company: "Computas",
    link: "https://computas.com/stillinger/nyutdannet-2023/",
    logo: ATTENDEE_LOGOS.computas,
    description:
      "Som nyutdannet i Computas blir du en del av Computas NXT. Denne avdelingen er skrudd sammen for å gi den oppfølgingen, tryggheten og friheten du trenger for å få en god start.",
    location: ["Oslo"],
    type: "full",
    deadline: null,
  },
  {
    name: "Sommerjobb 2023",
    company: "Computas",
    link: "https://computas.com/stillinger/sommerjobb-2023/",
    logo: ATTENDEE_LOGOS.computas,
    description:
      "Har du et eller to år igjen av studiene? Hvert år tar vi inn mellom 20-30 studenter på et 7 ukers langt sommerprogram.",
    location: ["Oslo"],
    type: "summer",
    deadline: new Date(Date.parse("2022-10-01")),
  },
  {
    name: "Tech graduate",
    company: "Tietoevry",
    link: "https://tieto.wd3.myworkdayjobs.com/no-NO/Tieto_Careers_External_Site/job/Norway-Fornebu/We-are-looking-for-Tech-graduates-to-our-specialist-track-in-Norway-_R105317-1",
    logo: ATTENDEE_LOGOS.tietoevry,
    description:
      "Would you like to kickstart your career in a place where you can impact society, for good? We are now recruiting graduates for the fall of 2023 in Norway! Become a part of our team consisting of 24,000 experts globally, helping businesses and societies meet their full potential – while you are also reaching yours. Who might you be? We are looking for people with a background or competence in tech-related fields. You get to work with a range of different technologies, from Software development (Java, .Net), UX Design, AI/robotics, business intelligence, and so much more. More specifically you: - Have recently graduated, or you are about to graduate from your final year of studies. -Have a minimum of a bachelor’s degree within specific tech-related subjects, For example, programming, data engineering, informatics, and information processing. We are also interested in a wider it-related competencies, such as information systems science.",
    location: [
      "Bergen",
      "Trondheim",
      "Stavanger",
      "Fornebu",
      "Mo i Rana",
      "Kristiansand",
      "Haugesund",
      "Brumunddal",
      "Ski",
    ],
    type: "full",
    deadline: null,
  },
  {
    name: "Internship 2023",
    company: "Appfarm",
    link: "https://hello.appfarm.app/jobs",
    logo: ATTENDEE_LOGOS.appfarm,
    description:
      "kan videreføres som deltidsarbeid med fleksible arbeidsvilkår. Du vil jobbe på interne eller eksterne prosjekter, og får en unik mulighet til å skaffe deg relevant arbeidserfaring hos en tech-startup. I tillegg lover vi at du kommer til å ha det vanvittig gøy. Vi har ikke noe krav om at et Internship må starte som et Summer Internship; du må gjerne ta kontakt om du har mulighet vinter, vår eller høst også! Trykk på annonsen for å se mer informasjon.",
    location: ["Oslo"],
    type: "summer",
    deadline: new Date(Date.parse("2022-10-01")),
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
