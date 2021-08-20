import endre from "../content/images/styret/endre.jpg";
import kristin from "../content/images/styret/kristin.jpg";
import kristine from "../content/images/styret/kristine.jpg";
import marie from "../content/images/styret/marie.jpg";
import nikoline from "../content/images/styret/nikoline.jpg";
import sondreN from "../content/images/styret/sondreN.jpg";
import sondreO from "../content/images/styret/sondreO.jpg";
import victoria from "../content/images/styret/victoria.jpg";

export interface CommitteeMember {
  name: string;
  position: string;
  headshot: StaticImageData;
  socials: {
    github: string | null;
    linkedin: string | null;
    website: string | null;
  };
}

export const COMMITTEE_MEMBERS: Array<CommitteeMember> = [
  {
    name: "Sondre Eide Omland",
    position: "Leder",
    headshot: sondreO,
    socials: {
      github: null,
      linkedin: "sondre-eide-omland-995705170",
      website: null,
    },
  },
  {
    name: "Endre Borgen Egge",
    position: "Nestleder",
    headshot: endre,
    socials: {
      github: null,
      linkedin: "endre-borgen-egge-841009126",
      website: null,
    },
  },
  {
    name: "Marie Heggebakk",
    position: "Økonomiansvarlig",
    headshot: marie,
    socials: {
      github: "heggebakk",
      linkedin: "marieheggebakk",
      website: null,
    },
  },
  {
    name: "Sondre Nilsen",
    position: "Webansvarlig",
    headshot: sondreN,
    socials: {
      github: "sondr3",
      linkedin: "sondr3",
      website: "https://www.eons.io",
    },
  },
  {
    name: "Nikoline Liseth",
    position: "Bedriftsansvarlig",
    headshot: nikoline,
    socials: {
      github: null,
      linkedin: "nikoline-liseth-b82b1b194",
      website: null,
    },
  },
  {
    name: "Kristine Enger",
    position: "Bedriftsansvarlig",
    headshot: kristine,
    socials: {
      github: null,
      linkedin: null,
      website: null,
    },
  },
  {
    name: "Kristin Loka Øydna",
    position: "Styremedlem",
    headshot: kristin,
    socials: {
      github: null,
      linkedin: null,
      website: null,
    },
  },
  {
    name: "Victoria Valner",
    position: "Nestøkonomiansvarlig",
    headshot: victoria,
    socials: {
      github: null,
      linkedin: "http://www.linkedin.com/in/victoria-valner-63b3a2194",
      website: null,
    },
  },
];
