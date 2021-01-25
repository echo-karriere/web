import {
  AcademicIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalendarIcon,
  InboxInIcon,
  LightBulbIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
} from "../assets/icons";
import { MenuItemProps } from "../components/common/Header/Desktop";

interface NavItem {
  mainMobile: boolean;
}

interface DesktopMenu {
  title: string;
  hasPosts: boolean;
  items: (MenuItemProps & NavItem)[];
}

export const navigationData: DesktopMenu[] = [
  {
    title: "For studenter",
    hasPosts: false,
    items: [
      {
        title: "For studenter",
        to: "/for-studenter/",
        description: "Hva er echo karriere og hva skjer?",
        children: AcademicIcon,
        mainMobile: true,
      },
      {
        title: "Karrieredagen 2021",
        to: "/karrieredagen-2021/",
        description: "Hvem deltar og hva skjer på dagen?",
        children: LightBulbIcon,
        mainMobile: true,
      },
      {
        title: "Jobb",
        to: "/jobb/",
        description: "Se stillingsutlysninger fra deltakere",
        children: BriefcaseIcon,
        mainMobile: false,
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
        children: OfficeBuildingIcon,
        mainMobile: true,
      },
      {
        title: "Påmelding",
        to: "/for-bedrifter/pamelding/",
        description: "Meld dere på vår digitale karrieredag våren 2021.",
        children: CalendarIcon,
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
        children: BookOpenIcon,
        mainMobile: true,
      },
      {
        title: "Kontakt oss",
        to: "/kontakt-oss/",
        description:
          "Spørsmål, tilbakemelding eller vil du komme i kontakt med styret?",
        children: InboxInIcon,
        mainMobile: true,
      },
      {
        title: "Nyheter",
        to: "/nyheter/",
        description: "Nyheter og informasjon fra echo karriere",
        children: NewspaperIcon,
        mainMobile: false,
      },
    ],
  },
];
