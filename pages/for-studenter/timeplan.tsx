import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container, Content, Layout, Schedule } from "@/components";

import { Notification } from "../../components/common/NotificationNoLink";
import stands from "../../public/images/standrom.jpg";

// interface Workshop {
//   company: string;
//   description: string | null;
//   title: string;
//   time: string;
//   participants: number;
//   practical: string | null;
//   practicals: string[] | null;
// }

// interface Talk {
//   company: string;
//   description: string | null;
//   title: string;
//   time: string;
// }

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

interface Tab {
  name: string;
  current: boolean;
}

const TABS: Tab[] = [
  { name: "Timeplan", current: true },
  { name: "Standoversikt", current: false },
];

export default function SchedulePage(): JSX.Element {
  const [tabs, setTabs] = useState([...TABS]);

  const changeTabs = (tab: Tab) => {
    const active = tabs.find((tab) => tab.current) ?? tabs[0];
    if (active.name === tab.name) return;
    const copy = [...tabs];
    if (active.name === "Timeplan") {
      copy[1].current = true;
      copy[0].current = false;
    } else {
      copy[0].current = true;
      copy[1].current = false;
    }
    setTabs(copy);
  };

  return (
    <Layout title="Timeplan digital karrieredag 2021" description="Hva er planen for karrieredagen 2021?">
      <Notification message="Informasjonen på denne siden gjelder for karrieredagen 2021!" url="#" />
      <Container>
        <Content title="Timeplan digital karrieredag 2021">
          <p>
            Vil du vite hva som skjer hvor og når? Se en oversikt over timeplanen og standoversikten her, og klikk deg
            inn på det som skjer! Husk også å se på <Link href="/for-studenter/jobb/">jobbene</Link> og{" "}
            <Link href="/for-studenter/informasjon/">bedriftene som deltar.</Link>
          </p>
        </Content>
        <div className="sm:block md:pl-10 max-w-4xl">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-center md:justify-around" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => changeTabs(tab)}
                  className={classNames(
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "py-4 px-1 text-center border-b-2 font-medium text-sm",
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
        {tabs[0].current && (
          <div className="relative py-4 bg-white overflow-hidden">
            <div className="relative md:px-4 sm:px-6 lg:px-8">
              <Schedule />
            </div>
          </div>
        )}
        {tabs[1].current && (
          <div className="relative py-4 bg-white overflow-hidden">
            <div className="relative md:px-4 sm:px-6 lg:px-8">
              <Image src={stands} alt="Oversikt over stands" className="max-w-3xl" />
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
}
