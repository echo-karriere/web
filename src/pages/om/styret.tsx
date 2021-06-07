import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { Container, Layout, SEO } from "../../components";

const Member = ({
  name,
  position,
  headshot,
  socials,
}: CommitteeProps): JSX.Element => (
  <li>
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-2">
        {headshot && (
          <GatsbyImage
            alt={`Headshot of ${name}`}
            image={headshot.childImageSharp.gatsbyImageData}
            className="object-cover shadow-lg rounded-lg max-h-96"
          />
        )}
      </div>

      <div className="space-y-2">
        <div className="text-lg leading-6 font-medium space-y-1">
          <h3>{name}</h3>
          <p className="text-indigo-600">{position}</p>
        </div>
        <ul className="flex space-x-5">
          {socials.github && (
            <li>
              <a
                href={`https://github.com/${socials.github}`}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          )}
          {socials.linkedin && (
            <li>
              <a
                href={`https://www.linkedin.com/in/${socials.linkedin}`}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          )}
          {socials.website && (
            <li>
              <a
                href={socials.website}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="sr-only">Website</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  </li>
);

interface CommitteeProps {
  name: string;
  position: string;
  headshot: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  } | null;
  socials: {
    github: string | null;
    linkedin: string | null;
    website: string | null;
  };
}

export default function Committee(): JSX.Element {
  const data = useStaticQuery(
    graphql`
      query Committee {
        allCommitteeJson {
          edges {
            node {
              name
              position
              headshot {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              socials {
                github
                linkedin
                website
              }
            }
          }
        }
      }
    `,
  );

  const members = data.allCommitteeJson.edges;

  return (
    <Layout>
      <SEO title="Styret" description="Om styret." />
      <Container>
        <div className="bg-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Om styret
                </h2>
                <p className="text-xl text-gray-500">
                  echo karriere drives av frivillige studenter.
                </p>
              </div>
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                {members.map(({ node }: { node: CommitteeProps }) => (
                  <Member key={node.name} {...node} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
