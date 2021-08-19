import { JobProps } from "@/components";

import { ATTENDEE_LOGOS } from "./attendees";

export const JOBS: Array<JobProps> = [
  {
    name: "Graduate Program",
    company: "TietoEVRY",
    link: "https://www.finn.no/job/fulltime/ad.html?finnkode=227705443",
    logo: ATTENDEE_LOGOS.tietoEvry,
    description:
      "Would you like to start your career in a place where you can impact society as a part of a world-class team? TietoEVRY is the leading digital services and software company in the Nordics. We create digital advantages for businesses and societies. Whether you want to become a strategist, coder, analyst, or a future-enthusiast, you will find your place here.",
    location: null,
    type: "full",
    deadline: new Date(Date.parse("2021-09-08")),
  },
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
    name: "Summer internship 2022",
    company: "Netcompany",
    link: "https://jobs.smartrecruiters.com/Netcompany1/743999761895601-summer-internship-2022",
    logo: ATTENDEE_LOGOS.netcompany,
    description:
      "Ønsker du en smakebit på hvordan det er å være med på å levere morgendagens løsninger i det digitale landskapet? Som summer intern i Netcompany får du mulighet til nettopp dette! Du vil jobbe på et reelt prosjekt for en av våre kunder i team sammen med andre sommerstudenter og konsulenter fra Netcompany.",
    location: "Oslo",
    type: "summer",
    deadline: new Date(Date.parse("2021-10-15")),
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
    name: "Sommerjobb IT/Tech 2022",
    company: "Sopra Steria",
    link: "https://www.soprasteria.no/bli-en-av-oss/ledigestillinger/stilling/220589",
    logo: ATTENDEE_LOGOS.sopraSteria,
    description:
      "Vil du tilbringe neste sommer på Norges beste arbeidsplass? En sommer som gir deg et innblikk i konsulentverdenen, prosjektarbeid, nytt nettverk, samt mye sosialt og moro rundt omkring i Oslo by, sammen med en fantastisk gjeng. Høres det interessant ut?",
    location: "Oslo",
    type: "summer",
    deadline: new Date(Date.parse("2021-10-20")),
  },
  {
    name: "Nyutdannet IT/tech 2022",
    company: "Sopra Steria",
    link: "https://www.soprasteria.no/bli-en-av-oss/ledigestillinger/stilling/197434",
    logo: ATTENDEE_LOGOS.sopraSteria,
    description:
      "Få en rakettstart på arbeidslivet hos Norges beste arbeidsplass! Synes du de fleste graduate-programmer fremstår som nesten helt like? For å gjøre det litt enklere for deg å velge, tenkte vi å fortelle om de to tingene som skiller oss ut fra de aller fleste, ja - kanskje alle.",
    location: "Oslo",
    type: "full",
    deadline: new Date(Date.parse("2021-10-01")),
  },
  {
    name: "Konsulent design",
    company: "Sopra Steria",
    link: "https://www.soprasteria.no/bli-en-av-oss/ledigestillinger/stilling/220665",
    logo: ATTENDEE_LOGOS.sopraSteria,
    description:
      "Få en rakettstart på arbeidslivet hos Norges beste arbeidsplass! Synes du de fleste graduate-programmer fremstår som nesten helt like? For å gjøre det litt enklere for deg å velge, tenkte vi å fortelle om de to tingene som skiller oss ut fra de aller fleste, ja - kanskje alle.",
    location: "Oslo",
    type: "full",
    deadline: new Date(Date.parse("2021-10-01")),
  },
  {
    name: "Nyutdannet Cyber Security 2022",
    company: "Sopra Steria",
    link: "https://www.soprasteria.no/bli-en-av-oss/ledigestillinger/stilling/220625",
    logo: ATTENDEE_LOGOS.sopraSteria,
    description:
      "Få en rakettstart på arbeidslivet hos Norges beste arbeidsplass! Synes du de fleste graduate-programmer fremstår som nesten helt like? For å gjøre det litt enklere for deg å velge, tenkte vi å fortelle om de to tingene som skiller oss ut fra de aller fleste, ja - kanskje alle.",
    location: "Oslo",
    type: "full",
    deadline: new Date(Date.parse("2021-09-27")),
  },
  {
    name: "Nyutdannet 2022 - Forretningsrådgivning",
    company: "Sopra Steria",
    link: "https://www.soprasteria.no/bli-en-av-oss/ledigestillinger/stilling/220646",
    logo: ATTENDEE_LOGOS.sopraSteria,
    description:
      "Få en rakettstart på arbeidslivet hos Norges beste arbeidsplass! Synes du de fleste graduate-programmer fremstår som nesten helt like? For å gjøre det litt enklere for deg å velge, tenkte vi å fortelle om de to tingene som skiller oss ut fra de aller fleste, ja - kanskje alle.",
    location: "Oslo",
    type: "full",
    deadline: new Date(Date.parse("2021-10-01")),
  },
];

export const JOB_LOCATIONS: Array<string> = [...new Set(JOBS.flatMap((it) => (it.location ? [it.location] : [])))];
export const JOB_COMPANIES: Array<string> = [...new Set(JOBS.map((it) => it.company))];
