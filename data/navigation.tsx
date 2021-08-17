import { MenuItemProps } from "@/components";
import {
  AcademicIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ClockIcon,
  InboxInIcon,
  LightBulbIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PencilAltIcon,
  UserGroupIcon,
} from "@/icons";

interface MenuChild {
  mainMobile: boolean;
}

interface MenuItem {
  title: string;
  hasPosts: boolean;
  items: (MenuItemProps & MenuChild)[];
}

export const navigation: Array<MenuItem> = [
  {
    title: "For studenter",
    hasPosts: false,
    items: [
      {
        title: "For studenter",
        to: "/for-studenter/",
        description: "Hva er echo karriere og hva skjer?",
        Icon: AcademicIcon,
        mainMobile: false,
      },
      {
        title: "Jobb",
        to: "/jobb/",
        description: "Se stillingsutlysninger fra deltakere",
        Icon: BriefcaseIcon,
        mainMobile: false,
      },
      {
        title: "Karrieredagen 2021",
        to: "/karrieredagen-2021/",
        description: "Hvem, hva og hvor for echo karriere 2021",
        Icon: LightBulbIcon,
        mainMobile: true,
      },
      {
        title: "Timeplan",
        to: "/for-studenter/timeplan/",
        description: "Se timeplanen for hva som skjer på karrieredagene.",
        Icon: ClockIcon,
        mainMobile: true,
      },
    ],
  },
  {
    title: "For bedrifter",
    hasPosts: false,
    items: [
      {
        title: "For bedrifter",
        to: "/for-bedrifter/",
        description: "Hva er echo karriere og hvordan kan dere bidra?",
        Icon: OfficeBuildingIcon,
        mainMobile: true,
      },
      {
        title: "Send stillingsannonser",
        to: "/for-bedrifter/stillinger/",
        description: "Stillingene din bedrift vil ha på våre nettsider",
        Icon: PencilAltIcon,
        mainMobile: true,
      },
    ],
  },
  {
    title: "echo karriere",
    hasPosts: true,
    items: [
      {
        title: "Om oss",
        to: "/om/",
        description: "Hvem og hva er echo karriere?",
        Icon: BookOpenIcon,
        mainMobile: true,
      },
      {
        title: "Styret",
        to: "/om/styret/",
        description: "Om oss i styret",
        Icon: UserGroupIcon,
        mainMobile: false,
      },
      {
        title: "Kontakt oss",
        to: "/kontakt-oss/",
        description: "Spørsmål, tilbakemelding eller vil du komme i kontakt med styret?",
        Icon: InboxInIcon,
        mainMobile: true,
      },
      {
        title: "Nyheter",
        to: "/nyheter/",
        description: "Nyheter og informasjon fra echo karriere",
        Icon: NewspaperIcon,
        mainMobile: false,
      },
    ],
  },
];