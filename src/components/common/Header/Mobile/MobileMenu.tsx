import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { BigMobileLink } from "./BigMobileLink";

import { useNavigationData } from "../../../../queries";

interface Props {
  mobileOpen: boolean;
  mobileButtonClicked: () => void;
}

export function MobileMenu({
  mobileOpen,
  mobileButtonClicked,
}: Props): JSX.Element {
  const navigation = useNavigationData();
  const query = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(name: { eq: "echo-karriere-logo" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            src
            srcSet
            base64
          }
        }
      }
    }
  `);

  return (
    <Transition
      show={mobileOpen}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-10 w-auto"
                  src={query.logo.childImageSharp.fixed.base64}
                  srcSet={query.logo.childImageSharp.fixed.srcSet}
                  alt="echo karriere logo"
                />
              </div>
              <div className="-mr-2">
                <Menu.Button
                  onClick={mobileButtonClicked}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  <span className="sr-only">Lukk meny</span>
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Menu.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navigation.map((item) => {
                  return item.items
                    .filter((child) => child.mainMobile)
                    .map((child) => (
                      <BigMobileLink
                        title={child.title}
                        to={child.to}
                        key={child.to}
                      >
                        {child.children}
                      </BigMobileLink>
                    ));
                })}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navigation.map((item) => {
                return item.items
                  .filter((child) => !child.mainMobile)
                  .map((child) => (
                    <Link
                      to={child.to}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      key={child.to}
                    >
                      {child.title}
                    </Link>
                  ));
              })}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
