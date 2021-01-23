import React from "react";
import { Menu } from "@headlessui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { MenuDropdown } from ".";

import { navigationData } from "../../../../data/navigation";
import { MenuItem } from "./MenuItem";
import { More, MoreLink } from "./More";

interface Props {
  mobileButtonClicked: () => void;
}

interface Edge {
  node: {
    frontmatter: {
      title: string;
      path: string;
    };
  };
}

export function DesktopMenu({ mobileButtonClicked }: Props): JSX.Element {
  const { file, allMdx } = useStaticQuery(graphql`
    query DesktopLogo {
      file(name: { eq: "echo-karriere" }) {
        childImageSharp {
          fixed(width: 160, height: 70, quality: 70) {
            base64
            srcSet
          }
        }
      }
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/*/posts/*" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 pt-6 md:justify-start md:space-x-10">
        <div>
          <Link to="/">
            <span className="sr-only">echo karriere</span>
            <img
              className="w-auto"
              src={file.childImageSharp.fixed.base64}
              srcSet={file.childImageSharp.fixed.srcSet}
              alt="echo karriere logo"
            />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Menu.Button
            onClick={mobileButtonClicked}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Åpne meny</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Menu.Button>
        </div>
        <nav className="hidden md:flex space-x-10 pl-8">
          {navigationData.map((item) => (
            <MenuDropdown title={item.title} key={item.title}>
              <div className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <Menu.Items>
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {item.items.map((child) => (
                        <MenuItem
                          title={child.title}
                          to={child.to}
                          description={child.description}
                          key={child.to}
                        >
                          {child.children}
                        </MenuItem>
                      ))}
                    </div>
                  </Menu.Items>
                  {item.hasPosts && (
                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <More
                        title="Siste nytt"
                        readMoreLink="/nyheter/"
                        readMoreTitle="Les mer"
                      >
                        {allMdx.edges.map((edge: Edge) => (
                          <MoreLink
                            title={edge.node.frontmatter.title}
                            to={edge.node.frontmatter.path}
                            key={edge.node.frontmatter.path}
                          />
                        ))}
                      </More>
                    </div>
                  )}
                </div>
              </div>
            </MenuDropdown>
          ))}
        </nav>
      </div>
    </div>
  );
}
