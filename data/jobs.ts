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
    name: "Graduate - 2023",
    company: "Capgemini",
    link: "https://www.capgemini.com/no-no/careers/job-search/?search_term=graduate",
    logo: ATTENDEE_LOGOS.capgemini,
    description:
      "Ignite er et skreddersydd utviklingsløp for nyutdannede. Her vil du få en kick-start på karrieren med god oppfølging, mulighet til å delta på en rekke relevante kurs og ta ettertraktede sertifiseringer. Graduate-programmet løper parallelt med arbeid på kundeprosjekt og gir deg reell konsulenterfaring og en bred forståelse av kultur, arbeidsmetodikk, rollen som konsulent og karriereveier i Capgemini. Hos oss får du jobbe som konsulent i prosjekter som virkelig utgjør en forskjell for samfunnet. Vi omstiller blant annet oljeindustrien til grønn energi, effektiviserer helsevesenet og sørger for at ny teknologi gjør det trygt å ferdes på veien. På disse digitaliseringsreisene får du stor mulighet til å påvirke og finne gode løsninger sammen med dyktige kollegaer. Du kan få spesialisere deg innen: • Java, .NET og Frontend • Cloud • Cyber Security • Customer Relationship Management • Robotic Process Automation, Intelligent Automation • Prosjektledelse og agil metodikk",
    location: ["Bergen", "Oslo", "Fredrikstad", "Trondheim", "Stavanger", "Kristiansand", "Sandefjord"],
    type: "full",
    deadline: null,
  },
  {
    name: "Nyutdannet teknolog 2023",
    company: "Frend Digital AS",
    link: "https://www.frend.no/karriere/cloud/nyutdannet-teknolog",
    logo: ATTENDEE_LOGOS.frend,
    description:
      "Studerer du IT, økonomi, organisasjonspsykologi, endringsledelse, teknologi eller utvikling, og er ferdig i 2023? Er du en god problemløser, engasjert og sosial? Da vil en graduate-stilling eller sommerjobb hos oss passe for deg! Som graduate vil du bli fast ansatt fra dag én, og inngå i vårt graduate-program. Programmet går ved siden av jobben din som konsulent, og du vil lære hvordan vi jobber og tenker i Frend.",
    location: ["Oslo"],
    type: "full",
    deadline: null,
  },
  {
    name: "Nyutdannet utvikler 2023",
    company: "Frend Digital AS",
    link: "https://www.frend.no/karriere/dev/nyutdannet-utvikler",
    logo: ATTENDEE_LOGOS.frend,
    description:
      "Er du student og ferdig i 2023? Er du en god problemløser, engasjert og sosial? Da vil en graduate-stilling eller sommerjobb hos oss passe for deg! Som graduate vil du bli fast ansatt fra dag én, og inngå i vårt graduate-program. Programmet går ved siden av jobben din som konsulent, og du vil lære hvordan vi jobber og tenker i Frend.",
    location: ["Oslo"],
    type: "full",
    deadline: null,
  },
  {
    name: "Sommerjobb innen teknologi og utvikling",
    company: "BKK AS",
    link: "https://eviny.easycruit.com/intranet/bkk/vacancy/3099927/169013?iso=no",
    logo: ATTENDEE_LOGOS.bkk,
    description:
      "Teknologi og Utvikling i BKK søker studenter til sommerjobb for sommeren 2023. Arbeidsoppgavene kan være IT-utvikling og programmering, systemdokumentasjon, opprette SharePoint-sider eller lignende for systemopplæring og manualer. Bistand i pågående prosjekter, med alt fra prosjektkoordinering til utvikling.",
    location: ["Bergen", "Førde"],
    type: "summer",
    deadline: new Date(Date.parse("2023-02-28")),
  },
  {
    name: "Trainee IT og utvikling",
    company: "BKK AS",
    link: "https://eviny.easycruit.com/intranet/bkk/vacancy/3096661/169013?iso=no",
    logo: ATTENDEE_LOGOS.bkk,
    description:
      "BKK søker trainee som ønsker å jobbe med teknologi og utvikling. Som trainee vil du få et dypere innblikk i hva BKK driver med, se de ulike avdelingene og arbeidsoppgavene som finnes i nettselskap i tillegg til å jobbe med hvordan du som teknolog kan bidra inn i arbeidet med å nå strategiske mål. Traineene hos oss har fått være med montører ut i felt, besøkt nettsentralen hvor nettet driftes 24/7 og reist til ulike lokasjoner for å bli kjent med de som vi utvikler digitale løsninger for. I tillegg vil du som trainee få delta i et traineeprogram, sammen med andre traineer i andre bransjer.",
    location: ["Førde"],
    type: "full",
    deadline: new Date(Date.parse("2023-03-15")),
  },
];

export const JOB_LOCATIONS: Array<string> = [
  ...new Set(JOBS.flatMap((it) => (Array.isArray(it.location) ? [...it.location] : [it.location]))),
].sort();
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))].sort();
