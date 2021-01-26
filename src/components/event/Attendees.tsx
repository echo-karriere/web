import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { shuffleArray } from "../../utils";
import { logos } from "../../assets/logos";

const Attendee = ({ name, link }: AttendeeProps): JSX.Element => (
  <a
    href={link}
    className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 hover:bg-gray-200 h-36"
  >
    {logos.get(name)}
  </a>
);

interface AttendeesProps {
  title: string;
}

interface AttendeeProps {
  name: string;
  link: string;
}

export const Attendees = ({ title }: AttendeesProps): JSX.Element => {
  const data = useStaticQuery(
    graphql`
      query Attendees {
        allAttendeesJson {
          edges {
            node {
              name
              link
            }
          }
        }
      }
    `,
  );

  const attendees = data.allAttendeesJson.edges;
  shuffleArray(attendees);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          {title}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-3 lg:mt-8">
          {attendees.map(({ node }: { node: AttendeeProps }) => (
            <Attendee key={node.name} name={node.name} link={node.link} />
          ))}
        </div>
      </div>
    </div>
  );
};
