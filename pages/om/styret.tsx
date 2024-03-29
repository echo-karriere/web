import Image from "next/image";

import { Container, Layout } from "@/components";
import { COMMITTEE_MEMBERS, CommitteeMember } from "@/data";

const Member = ({ name, position, headshot, socials }: CommitteeMember): JSX.Element => (
  <li>
    <div className="space-y-4">
      <div>
        {headshot && (
          <Image
            alt={`Headshot of ${name}`}
            src={headshot}
            className="object-cover shadow-lg rounded-lg max-h-96"
            width={375}
            height={375}
          />
        )}
      </div>

      <div className="space-y-2">
        <div className="text-lg leading-6 font-medium space-y-1">
          <h3>{name}</h3>
          <p className="text-indigo-600">{position}</p>
        </div>
        <ul className="flex space-x-5">
          {socials.email && (
            <li>
              <a
                href={`mailto:${socials.email}`}
                className="text-gray-400 hover:text-red-500"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="sr-only">E-post</span>
                <svg className="w-5 h-5.5" fill="currentColor" viewBox="0 0 24 23" aria-hidden="true">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
                </svg>
              </a>
            </li>
          )}
          {socials.github && (
            <li>
              <a
                href={`https://github.com/${socials.github}`}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
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
                className="text-gray-400 hover:text-blue-500"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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

export default function Committee(): JSX.Element {
  return (
    <Layout title="Styret" description="Om styret.">
      <Container>
        <div className="bg-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Om styret</h2>
                <p className="text-xl text-gray-500">echo karriere drives av frivillige studenter.</p>
              </div>
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                {COMMITTEE_MEMBERS.map((member) => (
                  <Member key={member.name} {...member} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
