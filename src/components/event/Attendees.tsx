import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ReactNode, useEffect, useState } from "react";

import { shuffleArray } from "../../utils";

interface AttendeesProps {
  title: string;
}

interface AttendeeProps {
  name: string;
  link: string;
  svg: boolean;
  children: ReactNode;
}

interface AttendeeSVG extends AttendeeProps {
  icon: {
    publicURL: string;
  };
}

interface AttendeeImage extends AttendeeProps {
  icon: { childImageSharp: { gatsbyImageData: IGatsbyImageData } } | null;
}

const Attendee = ({ link, children }: AttendeeProps): JSX.Element => (
  <a
    href={link}
    className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 hover:bg-gray-200 h-36"
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

const SVGLogo = ({ name, icon }: AttendeeSVG): JSX.Element => (
  <img src={icon.publicURL} alt={name} />
);

const ImageLogo = ({ name, icon }: AttendeeImage): JSX.Element => {
  if (icon) {
    return (
      <GatsbyImage
        imgStyle={{ height: "unset" }}
        image={icon.childImageSharp.gatsbyImageData}
        alt={name}
      />
    );
  } else {
    return <span className="text-gray-600 uppercase text-center">{name}</span>;
  }
};

const isSVGNode = (node: AttendeeProps): node is AttendeeSVG => {
  return node.svg;
};

export const Attendees = ({ title }: AttendeesProps): JSX.Element => {
  const data = useStaticQuery(
    graphql`
      query Attendees {
        images: allAttendeesJson(filter: { svg: { eq: false } }) {
          edges {
            node {
              name
              link
              svg
              icon {
                childImageSharp {
                  gatsbyImageData(width: 220, quality: 70, layout: CONSTRAINED)
                }
              }
            }
          }
        }
        svg: allAttendeesJson(filter: { svg: { eq: true } }) {
          edges {
            node {
              name
              link
              svg
              icon {
                publicURL
              }
            }
          }
        }
      }
    `,
  );

  const images = data.images.edges.map(
    ({ node }: { node: AttendeeImage }) => node,
  );
  const svg = data.svg.edges.map(({ node }: { node: AttendeeSVG }) => node);
  const [attendees, setAttendees] = useState<(AttendeeImage | AttendeeSVG)[]>([
    ...images,
    ...svg,
  ]);

  useEffect(() => {
    const copy = [...attendees];
    shuffleArray(copy);
    setAttendees(copy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          {title}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-3 lg:mt-8">
          {attendees.map((node) => (
            <Attendee key={node.name} {...node}>
              {isSVGNode(node) ? (
                <SVGLogo {...node} />
              ) : (
                <ImageLogo {...node} />
              )}
            </Attendee>
          ))}
        </div>
      </div>
    </div>
  );
};
