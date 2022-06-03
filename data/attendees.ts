import appear from "../content/images/logos/appear.svg";
import appfarm from "../content/images/logos/appfarm.svg";
import bekk from "../content/images/logos/bekk.svg";
import bouvet from "../content/images/logos/bouvet.svg";
import capgemini from "../content/images/logos/capgemini.svg";
import cgi from "../content/images/logos/cgi.svg";
import deloitte from "../content/images/logos/deloitte.svg";
import dfind from "../content/images/logos/dfind.webp";
import digdir from "../content/images/logos/digdir.svg";
import itera from "../content/images/logos/itera.svg";
import kantega from "../content/images/logos/kantega.svg";
import knowit from "../content/images/logos/knowit.svg";
import kongsberg from "../content/images/logos/kongsberg.svg";
import marinit from "../content/images/logos/marinit.webp";
import microsoftuniversity from "../content/images/logos/microsoftuniversity.svg";
import miles from "../content/images/logos/miles.svg";
import netcompany from "../content/images/logos/netcompany.svg";
import netlight from "../content/images/logos/netlight.svg";
import norkart from "../content/images/logos/norkart.svg";
import nsm from "../content/images/logos/nsm.svg";
import pit from "../content/images/logos/pit.svg";
import sbanken from "../content/images/logos/sbanken.svg";
import skatteetaten from "../content/images/logos/skatteetaten.svg";
import soprasteria from "../content/images/logos/soprasteria.svg";
import spv from "../content/images/logos/spv.webp";
import stacc from "../content/images/logos/stacc.svg";
import tietoevry from "../content/images/logos/tietoevry.svg";
import traineevest from "../content/images/logos/traineevest.svg";
import tryg from "../content/images/logos/tryg.svg";
import tv2 from "../content/images/logos/tv2.svg";
import variant from "../content/images/logos/variant.svg";
import visma from "../content/images/logos/visma.svg";

export interface Attendee {
  company: string;
  website: string;
  logo: StaticImageData;
}

export type ATTENDEE_NAMES =
  | "itera"
  | "appear"
  | "bouvet"
  | "capgemini"
  | "kantega"
  | "soprasteria"
  | "spv"
  | "miles"
  | "tietoevry"
  | "traineevest"
  | "digdir"
  | "bekk"
  | "appfarm"
  | "knowit"
  | "netlight"
  | "skatteetaten"
  | "stacc"
  | "variant"
  | "visma"
  | "tryg"
  | "microsoftuniversity"
  | "norkart"
  | "dfind"
  | "marinit"
  | "cgi"
  | "netcompany"
  | "nsm"
  | "tv2"
  | "kongsberg"
  | "deloitte"
  | "sbanken"
  | "pit";

export const ATTENDEE_LOGOS: Record<ATTENDEE_NAMES, StaticImageData> = {
  itera: itera,
  appear: appear,
  bouvet: bouvet,
  capgemini: capgemini,
  kantega: kantega,
  soprasteria: soprasteria,
  spv: spv,
  miles: miles,
  tietoevry: tietoevry,
  traineevest: traineevest,
  digdir: digdir,
  bekk: bekk,
  appfarm: appfarm,
  knowit: knowit,
  netlight: netlight,
  skatteetaten: skatteetaten,
  stacc: stacc,
  variant: variant,
  visma: visma,
  tryg: tryg,
  microsoftuniversity: microsoftuniversity,
  norkart: norkart,
  dfind: dfind,
  marinit: marinit,
  cgi: cgi,
  netcompany: netcompany,
  nsm: nsm,
  tv2: tv2,
  kongsberg: kongsberg,
  deloitte: deloitte,
  sbanken: sbanken,
  pit: pit,
};

export const ATTENDEES: Array<Attendee> = [
  {
    company: "Itera",
    website: "https://itera.com/no/",
    logo: itera,
  },
  {
    company: "Appear",
    website: "https://www.appear.net/",
    logo: appear,
  },
  {
    company: "Bouvet",
    website: "https://www.bouvet.no/",
    logo: bouvet,
  },
  {
    company: "Capgemini",
    website: "https://www.capgemini.com/",
    logo: capgemini,
  },
  {
    company: "Kantega",
    website: "https://www.kantega.no/",
    logo: kantega,
  },
  {
    company: "Sopra Steria",
    website: "https://www.soprasteria.no/",
    logo: soprasteria,
  },
  {
    company: "Sparebanken vest",
    website: "https://www.spv.no/om-oss/jobb",
    logo: spv,
  },
  {
    company: "Miles Bergen",
    website: "https://www.miles.no/",
    logo: miles,
  },
  {
    company: "Tietoevry",
    website: "https://www.tietoevry.com/",
    logo: tietoevry,
  },
  {
    company: "Bergen Næringsråd - Trainee Vest",
    website: "https://www.traineevest.no/",
    logo: traineevest,
  },
  {
    company: "Digitaliseringsdirektoratet",
    website: "https://www.digdir.no/",
    logo: digdir,
  },
  {
    company: "Bekk",
    website: "https://www.bekk.no/jobb",
    logo: bekk,
  },
  {
    company: "Appfarm",
    website: "https://www.appfarm.io/",
    logo: appfarm,
  },
  {
    company: "Knowit",
    website: "https://www.knowit.no/",
    logo: knowit,
  },
  {
    company: "Netlight",
    website: "https://www.netlight.com/",
    logo: netlight,
  },
  {
    company: "Skatteetaten",
    website: "https://www.skatteetaten.no/",
    logo: skatteetaten,
  },
  {
    company: "Stacc",
    website: "https://www.stacc.com/",
    logo: stacc,
  },
  {
    company: "Variant",
    website: "https://www.variant.no/",
    logo: variant,
  },
  {
    company: "Visma Consulting",
    website: "https://www.visma.no/consulting/konsulenttjenester/",
    logo: visma,
  },
  {
    company: "Tryg",
    website: "https://www.tryg.no/",
    logo: tryg,
  },
  {
    company: "Microsoft University",
    website: "https://www.glasspaper.no/artikkel/microsoft-university-2022/",
    logo: microsoftuniversity,
  },
  {
    company: "Norkart",
    website: "https://www.norkart.no/",
    logo: norkart,
  },
  {
    company: "Dfind Consulting",
    website: "https://www.dfindconsulting.no",
    logo: dfind,
  },
  {
    company: "Marin IT",
    website: "https://www.marinit.no/",
    logo: marinit,
  },
  {
    company: "CGI Norge",
    website: "https://www.cgi.com/no/nb/careers/talentprogram",
    logo: cgi,
  },
  {
    company: "Netcompany",
    website: "https://www.netcompany.com/no",
    logo: netcompany,
  },
  {
    company: "Nasjonal sikkerhetsmyndighet",
    website: "https://www.nsm.no/",
    logo: nsm,
  },
  {
    company: "TV 2",
    website: "https://jobb.tv2.no/",
    logo: tv2,
  },
  {
    company: "Kongsberg gruppen",
    website: "https://www.kongsberg.com/",
    logo: kongsberg,
  },
  {
    company: "Deloitte",
    website: "https://www2.deloitte.com/no/no/careers/students.html?icid=top_students",
    logo: deloitte,
  },
  {
    company: "Sbanken",
    website: "https://www.sbanken.no/",
    logo: sbanken,
  },
  {
    company: "Politiets IKT-tjenester",
    website: "https://www.politiet.no/om/organisasjonen/sarorganene/pit/",
    logo: pit,
  },
];
