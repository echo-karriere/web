import React from "react";
import { Menu } from "@headlessui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { MenuDropdown } from ".";

import { navigationData } from "../../../../data/navigation";
import { MenuItem } from "./MenuItem";

interface Props {
  mobileButtonClicked: () => void;
}

export function DesktopMenu({ mobileButtonClicked }: Props): JSX.Element {
  const { file } = useStaticQuery(graphql`
    query DesktopLogo {
      file(name: { eq: "echo-karriere" }) {
        childImageSharp {
          fixed(width: 160, height: 70) {
            ...GatsbyImageSharpFixed
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
            <Img
              className="h-12 w-auto sm:h-10"
              fixed={file.childImageSharp.fixed}
              alt="echo karriere logo"
            />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Menu.Button
            onClick={mobileButtonClicked}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
            </MenuDropdown>
          ))}
        </nav>
      </div>
    </div>
  );
}
