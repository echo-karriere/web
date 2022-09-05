import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container, Content, Layout } from "@/components";

import standsFredagBib from "../../static/biblioteket.png";
import timeplanFredag from "../../static/fredag_timeplan.png";
import standsTorsdag from "../../static/torget_torsdag.png";
import timeplanTorsdag from "../../static/tors.png";

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
    <Layout title="Timeplan echo Karriere 2022" description="Timeplanen for hva som skjer på echo Karriere 2022">
      <Container>
        <Content title="Timeplan echo Karriere 2022">
          <p>
            Vil du vite hva som skjer hvor og når? Se en oversikt over timeplanen og standoversikten på denne siden.
            Ønsker du å få mere informasjon om årets karrieredag, med blant annet hvilke workshops du kan delta på,
            liste over bedrifter som deltar, eller en oversikt over ledige stillinger? Da kan du{" "}
            <Link href="/for-studenter/informasjon/">klikke her</Link>
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
            <div className="relative md:px-4 sm:px-6 lg:px-8 max-w-2xl">
              <h2 className="text-2xl font-bold mt-4 mb-4">Timeplan for Torsdagen</h2>
              <Image src={timeplanTorsdag} alt="Bilde over timeplan for torsdag" />
              <h2 className="text-2xl font-bold mt-4 mb-4">Timeplan for Fredagen</h2>
              <Image src={timeplanFredag} alt="Bilde over timeplan for fredag" />
            </div>
          </div>
        )}
        {tabs[1].current && (
          <div className="relative py-4 bg-white overflow-hidden">
            <div className="relative md:px-4 sm:px-6 lg:px-6 max-w-2xl">
              <h2 className="text-2xl font-bold mt-4">Standkart Torget</h2>
              <p className="mb-4">
                Disse bedriftene deltar både <b>torsdag</b> og <b>fredag</b>
              </p>
              <Image src={standsTorsdag} alt="Oversikt over stands torget" />
              <h2 className="text-2xl font-bold mt-4">Standkart Biblioteket</h2>
              <p className="mb-4">
                Disse bedriftene deltar kun på <b>fredag</b>
              </p>
              <Image src={standsFredagBib} alt="Oversikt over stands biblioteket" />
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
}
