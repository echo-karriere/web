import {
  AcademcCapIcon,
  BookOpenIcon,
  CalendarIcon,
  InboxInIcon,
  OfficeBuildingIcon,
} from "../assets/icons";
import { MenuItemProps } from "../components/common/Header/Desktop";

interface NavItem {
  mainMobile: boolean;
}

interface DesktopMenu {
  title: string;
  items: (MenuItemProps & NavItem)[];
}

export const navigationData: DesktopMenu[] = [
  {
    title: "For studenter",
    items: [
      {
        title: "For studenter",
        to: "/for-studenter/",
        description: "Hva er echo karriere og hva skjer?",
        children: AcademcCapIcon,
        mainMobile: true,
      },
    ],
  },
  {
    title: "For bedrifter",
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
    ],
  },
];
