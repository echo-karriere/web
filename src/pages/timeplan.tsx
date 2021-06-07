import { graphql, Link, useStaticQuery } from "gatsby";

import { Container, Content, Layout, Schedule, SEO } from "../components";

interface Workshop {
  company: string;
  description: string | null;
  title: string;
  time: string;
  participants: number;
  practical: string | null;
  practicals: string[] | null;
}

interface Talk {
  company: string;
  description: string | null;
  title: string;
  time: string;
}

export default function SchedulePage(): JSX.Element {
  const data = useStaticQuery(graphql`
    query WorkshopsTalks {
      workshops: allWorkshopsJson {
        nodes {
          company
          description
          participants
          practical
          practicals
          time
          title
        }
      }
      talks: allTalksJson {
        nodes {
          company
          description
          time
          title
        }
      }
    }
  `);

  const workshops: Workshop[] = data.workshops.nodes.map(
    (workshop: Workshop) => workshop,
  );
  const talks: Talk[] = data.talks.nodes.map((talk: Talk) => talk);

  return (
    <Layout>
      <SEO
        title="Timeplan digital karrieredag 2021"
        description="Hva er planen for karrieredagen 2021?"
      />
      <Container>
        <Content title="Timeplan digital karrieredag 2021">
          <p>
            Vil du vite hva som skjer hvor og når? Se en oversikt over
            timeplanen her, og klikk deg inn på det som skjer! Husk også å se på{" "}
            <Link to="/jobb/">jobbene</Link> og{" "}
            <Link to="/karrieredagen-2021">bedriftene som deltar.</Link>
          </p>
        </Content>
        <div className="relative py-4 bg-white overflow-hidden">
          <div className="relative md:px-4 sm:px-6 lg:px-8">
            <Schedule />
          </div>
        </div>
        <div className="relative py-4 bg-white overflow-hidden">
          <div className="relative md:px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl">Informasjon</h2>
            <div>
              <h3 className="text-2xl">Workshopper</h3>
              <ul className="divide-y divide-gray-200">
                {workshops.map((workshop) => (
                  <li
                    key={workshop.company}
                    className="relative bg-white py-5 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                  >
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900">
                          {workshop.title}
                        </p>
                        <p className="text-gray-500">{workshop.company}</p>
                      </div>
                      <time
                        dateTime={workshop.time}
                        className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                      >
                        {workshop.time}
                      </time>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: workshop.description ?? "",
                      }}
                    />
                    <h5 className="font-bold py-2">Praktisk info</h5>
                    <p>{workshop.practical}</p>
                    <ul className="list-disc list-inside">
                      {workshop.practicals?.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-4">
              <h3 className="text-2xl">Presentasjoner</h3>
              <ul className="divide-y divide-gray-200">
                {talks.map((talk) => (
                  <li
                    key={talk.company}
                    className="relative bg-white py-5 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                  >
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900">
                          {talk.title}
                        </p>
                        <p className="text-gray-500">{talk.company}</p>
                      </div>
                      <time
                        dateTime={talk.time}
                        className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                      >
                        {talk.time}
                      </time>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: talk.description ?? "",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
