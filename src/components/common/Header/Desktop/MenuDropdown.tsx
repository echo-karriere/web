import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuButton } from "./MenuButton";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function MenuDropdown({ title, children }: Props): JSX.Element {
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <MenuButton title={title} />

            <Transition
              show={open}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <Menu.Items>
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {children}
                    </div>
                  </Menu.Items>
                </div>
              </div>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
