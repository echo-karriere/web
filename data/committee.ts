import cecilie from "../content/images/styret/cecilie.jpg";
import elin from "../content/images/styret/elin.jpg";
import endre from "../content/images/styret/endre.jpg";
import hedda from "../content/images/styret/hedda.jpg";
import mathias from "../content/images/styret/mathias.jpg";
import nikoline from "../content/images/styret/nikoline.jpg";
import safiya from "../content/images/styret/safiya.jpg";
import sebastian from "../content/images/styret/sebastian.jpg";
import solveig from "../content/images/styret/solveig.jpg";
import victoria from "../content/images/styret/victoria.jpg";

export interface CommitteeMember {
  name: string;
  position: string;
  headshot: StaticImageData;
  socials: {
    email: string | null;
    github: string | null;
    linkedin: string | null;
    website: string | null;
  };
}

export const COMMITTEE_MEMBERS: Array<CommitteeMember> = [
  {
    name: "Endre Borgen Egge",
    position: "Leder",
    headshot: endre,
    socials: {
      email: "endre.egge@echokarriere.no",
      github: null,
      linkedin: "endre-borgen-egge-841009126",
      website: null,
    },
  },
  {
    name: "Nikoline Liseth",
    position: "Nestleder",
    headshot: nikoline,
    socials: {
      email: "nikoline.liseth@echokarriere.no",
      github: null,
      linkedin: "nikoline-liseth-b82b1b194",
      website: null,
    },
  },
  {
    name: "Victoria Valner",
    position: "Økonomiansvarlig",
    headshot: victoria,
    socials: {
      email: "victoria.valner@echokarriere.no",
      github: null,
      linkedin: "victoria-valner-63b3a2194",
      website: null,
    },
  },
  {
    name: "Cecilie Danbolt Tveter",
    position: "Nestøkonomiansvarlig",
    headshot: cecilie,
    socials: {
      email: "cecilie.tveter@echokarriere.no",
      github: null,
      linkedin: "ceciliedanbolttveter",
      website: null,
    },
  },
  {
    name: "Sebastian Helgesen",
    position: "Webansvarlig",
    headshot: sebastian,
    socials: {
      email: "sebastian.helgesen@echokarriere.no",
      github: null,
      linkedin: "shelgesen",
      website: null,
    },
  },
  {
    name: "Elin Veila",
    position: "Bedriftsansvarlig",
    headshot: elin,
    socials: {
      email: "elin.veila@echokarriere.no",
      github: null,
      linkedin: null,
      website: null,
    },
  },
  {
    name: "Hedda Langøy Rødder",
    position: "Bedriftsansvarlig",
    headshot: hedda,
    socials: {
      email: "hedda.rodder@echokarriere.no",
      github: null,
      linkedin: "hedda-langøy-rødder-668b85146",
      website: null,
    },
  },
  {
    name: "Solveig Ødegaard Notø",
    position: "PR-ansvarlig",
    headshot: solveig,
    socials: {
      email: "solveig.noto@echokarriere.no",
      github: null,
      linkedin: "solveig-ødegaard-notø-793b56210",
      website: null,
    },
  },
  {
    name: "Mathias Skauge Larsen",
    position: "Frivilligansvarlig",
    headshot: mathias,
    socials: {
      email: "mathias.larsen@echokarriere.no",
      github: null,
      linkedin: null,
      website: null,
    },
  },
  {
    name: "Safiya Adan Mahamood",
    position: "Styremedlem",
    headshot: safiya,
    socials: {
      email: "safiya.mahamood@echokarriere.no",
      github: null,
      linkedin: "safiya-mahamood-b70460231",
      website: null,
    },
  },
];
