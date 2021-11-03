import atea from "../content/images/logos/atea.svg";
import avo from "../content/images/logos/avo.png";
import bekk from "../content/images/logos/bekk.svg";
import bouvet from "../content/images/logos/bouvet.png";
import capgemini from "../content/images/logos/capgemini.png";
import deloitte from "../content/images/logos/deloitte.jpg";
import dnb from "../content/images/logos/dnb.png";
import easee from "../content/images/logos/easee.png";
import equinor from "../content/images/logos/equinor.png";
import finn from "../content/images/logos/finn.png";
import gjensidige from "../content/images/logos/gjensidige.png";
import kantega from "../content/images/logos/kantega.svg";
import knowit from "../content/images/logos/knowit.png";
import kongsberg from "../content/images/logos/kongsberg.jpg";
import netcompany from "../content/images/logos/netcompany.png";
import netlight from "../content/images/logos/netlight.svg";
import nsm from "../content/images/logos/nsm.png";
import politet from "../content/images/logos/politiet-ikt.jpg";
import pwc from "../content/images/logos/pwc.svg";
import simula from "../content/images/logos/simula-uib.svg";
import sopra from "../content/images/logos/sopra-steria.png";
import stacc from "../content/images/logos/stacc.png";
import tieto from "../content/images/logos/tieto-evry.png";
import tripletex from "../content/images/logos/tripletex.png";

export interface Attendee {
  company: string;
  website: string;
  logo: StaticImageData;
}

export type ATTENDEE_NAMES =
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
  | "politet"
  | "pwc"
  | "simula"
  | "sopraSteria"
  | "stacc"
  | "tietoEvry"
  | "tripletex"
  | "avo";

export const ATTENDEE_LOGOS: Record<ATTENDEE_NAMES, StaticImageData> = {
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
  politet: politet,
  simula: simula,
  sopraSteria: sopra,
  stacc: stacc,
  tietoEvry: tieto,
  tripletex: tripletex,
  pwc: pwc,
  avo: avo,
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
  {
    company: "PwC",
    website: "https://www.pwc.no/",
    logo: pwc,
  },
];
