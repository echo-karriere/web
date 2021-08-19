import appear from "../public/logos/appear.png";
import atea from "../public/logos/atea.svg";
import bekk from "../public/logos/bekk.svg";
import bouvet from "../public/logos/bouvet.png";
import capgemini from "../public/logos/capgemini.png";
import deloitte from "../public/logos/deloitte.jpg";
import dnb from "../public/logos/dnb.png";
import easee from "../public/logos/easee.png";
import equinor from "../public/logos/equinor.png";
import finn from "../public/logos/finn.png";
import gjensidige from "../public/logos/gjensidige.png";
import kantega from "../public/logos/kantega.svg";
import knowit from "../public/logos/knowit.png";
import kongsberg from "../public/logos/kongsberg.jpg";
import netcompany from "../public/logos/netcompany.png";
import netlight from "../public/logos/netlight.svg";
import nsm from "../public/logos/nsm.png";
import patient from "../public/logos/patient-sky.svg";
import politet from "../public/logos/politiet-ikt.jpg";
import pwc from "../public/logos/pwc.svg";
import simula from "../public/logos/simula-uib.svg";
import sopra from "../public/logos/sopra-steria.png";
import stacc from "../public/logos/stacc.png";
import tieto from "../public/logos/tieto-evry.png";
import tripletex from "../public/logos/tripletex.png";

export interface Attendee {
  company: string;
  website: string;
  logo: StaticImageData;
}

export type ATTENDEE_NAMES =
  | "appear"
  | "atea"
  | "bekk"
  | "bouvet"
  | "capgemini"
  | "deloitte"
  | "dnb"
  | "easee"
  | "equinor"
  | "finn"
  | "gjensidige"
  | "kantega"
  | "knowit"
  | "kongsberg"
  | "netcompany"
  | "netlight"
  | "nsm"
  | "patient"
  | "politet"
  | "pwc"
  | "simula"
  | "sopraSteria"
  | "stacc"
  | "tietoEvry"
  | "tripletex";

export const ATTENDEE_LOGOS: Record<ATTENDEE_NAMES, StaticImageData> = {
  appear: appear,
  atea: atea,
  bekk: bekk,
  bouvet: bouvet,
  capgemini: capgemini,
  deloitte: deloitte,
  dnb: dnb,
  easee: easee,
  equinor: equinor,
  finn: finn,
  gjensidige: gjensidige,
  kantega: kantega,
  knowit: knowit,
  kongsberg: kongsberg,
  netcompany: netcompany,
  netlight: netlight,
  nsm: nsm,
  patient: patient,
  politet: politet,
  pwc: pwc,
  simula: simula,
  sopraSteria: sopra,
  stacc: stacc,
  tietoEvry: tieto,
  tripletex: tripletex,
};

export const ATTENDEES: Array<Attendee> = [
  {
    company: "Capgemini",
    website: "https://www.capgemini.com/no-no/?georedirect_none=true",
    logo: capgemini,
  },
  {
    company: "Bouvet AS",
    website: "https://www.bouvet.no/",
    logo: bouvet,
  },
  {
    company: "Politiets IKT-tjenester",
    website: "https://www.politiet.no/om/organisasjonen/andre/pit/om-pit/jobb-hos-pit/",
    logo: politet,
  },
  {
    company: "Bekk",
    website: "https://bekk.no",
    logo: bekk,
  },
  {
    company: "Kantega AS",
    website: "https://kantega.no",
    logo: kantega,
  },
  {
    company: "Netcompany AS",
    website: "https://www.netcompany.com/no/Karriere",
    logo: netcompany,
  },
  {
    company: "PwC",
    website: "https://www.pwc.no/",
    logo: pwc,
  },
  {
    company: "Sopra Steria",
    website: "https://www.soprasteria.no/",
    logo: sopra,
  },
  {
    company: "Knowit",
    website: "https://www.knowit.no",
    logo: knowit,
  },
  {
    company: "Appear AS",
    website: "https://www.appeartv.com/",
    logo: appear,
  },
  {
    company: "Simula UiB AS",
    website: "https://simula-uib.com/",
    logo: simula,
  },
  {
    company: "Stacc",
    website: "https://www.stacc.com",
    logo: stacc,
  },
  {
    company: "FINN.no",
    website: "https://www.finn.no/jobbeifinn",
    logo: finn,
  },
  {
    company: "Kongsberg Gruppen",
    website: "https://www.kongsberg.com",
    logo: kongsberg,
  },
  {
    company: "Tripletex",
    website: "https://www.tripletex.no/",
    logo: tripletex,
  },
  {
    company: "Netlight",
    website: "https://www.netlight.com/",
    logo: netlight,
  },
  {
    company: "TietoEVRY",
    website: "https://www.tietoevry.com/",
    logo: tieto,
  },
  {
    company: "Gjensidige Forsikring",
    website: "https://www.gjensidige.no/",
    logo: gjensidige,
  },
  {
    company: "DNB",
    website: "https://m.dnb.no/",
    logo: dnb,
  },
  {
    company: "PatientSky",
    website: "https://www.patientsky.no/",
    logo: patient,
  },
  {
    company: "Equinor",
    website: "https://www.equinor.com",
    logo: equinor,
  },
  {
    company: "Deloitte AS",
    website: "https://www2.deloitte.com/no/no.html",
    logo: deloitte,
  },
  {
    company: "Atea AS",
    website: "https://www.atea.no",
    logo: atea,
  },
  {
    company: "Easee AS",
    website: "https://easee.com/no/",
    logo: easee,
  },
  {
    company: "Nasjonal sikkerhetsmyndighet",
    website: "https://nsm.no/",
    logo: nsm,
  },
];
