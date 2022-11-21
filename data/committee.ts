import cecilie from "../content/images/styret/cecilie.jpg";
import elin from "../content/images/styret/elin.jpg";
import fredric from "../content/images/styret/fredric.jpg";
import maella from "../content/images/styret/maella.jpg";
import malvika from "../content/images/styret/malvika.jpg";
import mathilde from "../content/images/styret/mathilde.jpg";
import safiya from "../content/images/styret/safiya.jpg";
import sebastian from "../content/images/styret/sebastian.jpg";

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
    name: "Mathilde Bergenheim",
    position: "Leder",
    headshot: mathilde,
    socials: {
      email: "mathilde.bergenheim@echokarriere.no",
      github: null,
      linkedin: "mathildebergenheim",
      website: null,
    },
  },
  {
    name: "Elin Veila",
    position: "Nestleder",
    headshot: elin,
    socials: {
      email: "elin.veila@echokarriere.no",
      github: null,
      linkedin: "elin-veila-a5a744249",
      website: null,
    },
  },
  {
    name: "Cecilie Danbolt Tveter",
    position: "Økonomiansvarlig",
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
  {
    name: "Maella Irebe Muganga",
    position: "Styremedlem",
    headshot: maella,
    socials: {
      email: "maella.muganga@echokarriere.no",
      github: null,
      linkedin: "maella-muganga-a19160204",
      website: null,
    },
  },
  {
    name: "Fredric Hegland",
    position: "Styremedlem",
    headshot: fredric,
    socials: {
      email: "fredric.hegland@echokarriere.no",
      github: null,
      linkedin: "fredric-hegland-8a8972206",
      website: null,
    },
  },
  {
    name: "Malvika Singh",
    position: "Styremedlem",
    headshot: malvika,
    socials: {
      email: "malvika.singh@echokarriere.no",
      github: null,
      linkedin: "malvika-singh-uib",
      website: null,
    },
  },
];
