import React from "react";
import { Menu } from "@headlessui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { MenuDropdown } from ".";

interface Props {
  mobileButtonClicked: () => void;
}

export function DesktopMenu({ mobileButtonClicked }: Props): JSX.Element {
  const query = useStaticQuery(graphql`
    query DesktopLogo {
      logoText: file(name: { eq: "echo-karriere" }) {
        childImageSharp {
          fixed(width: 160, height: 70) {
            src
            srcSet
            base64
          }
        }
      }
    }
  `);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div>
          <Link to="/">
            <span className="sr-only">echo karriere</span>
            <img
              className="h-12 w-auto sm:h-10"
              src={query.logoText.childImageSharp.fixed.base64}
              srcSet={query.logoText.childImageSharp.fixed.srcSet}
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
          <MenuDropdown title="For studenter">
            <p>test</p>
          </MenuDropdown>
          <MenuDropdown title="For bedrifter">
            <p>test</p>
          </MenuDropdown>
          <MenuDropdown title="echo karriere">
            <p>test</p>
          </MenuDropdown>
        </nav>
      </div>
    </div>
  );
}
