import { Dialog, Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

import { ActiveFilter, Filter, JobFilter, SortOption } from "./index";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  activeFilters: Array<ActiveFilter>;
  setActiveFilters: Dispatch<SetStateAction<Array<ActiveFilter>>>;
  filters: Array<JobFilter>;
  setFilters: Dispatch<SetStateAction<Array<JobFilter>>>;
  order: Array<SortOption>;
  setOrder: Dispatch<SetStateAction<Array<SortOption>>>;
}

export const Selects = ({
  activeFilters,
  setActiveFilters,
  filters,
  setFilters,
  order,
  setOrder,
}: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  const filterActive = (type: Filter): boolean => activeFilters.some((it) => it.type === type);
  const filterCount = (type: Filter): number => {
    return activeFilters.filter((it) => it.type === type).length;
  };

  const onFilterSelect = (type: Filter, value: string) => {
    const newFilters = [...filters];
    for (const filter of newFilters) {
      if (filter.type === type) {
        for (const option of filter.options) {
          if (option.value === value) {
            option.checked = !option.checked;
            if (option.checked) {
              setActiveFilters([...activeFilters, { type: type, value: option.value, label: option.label }]);
            } else {
              setActiveFilters(activeFilters.filter((it) => it.value !== option.value));
            }
          }
        }
      }
    }

    setFilters(newFilters);
  };

  const onOrderSelect = (name: string) => {
    const newOrder = [...order];
    for (const order of newOrder) {
      order.current = order.name === name;
    }
    setOrder(newOrder);
  };

  return (
    <div className="bg-white pb-4">
      {/* Mobile filter dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 sm:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between pt-24">
                <h2 className="text-lg font-medium text-gray-900">Filtre</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                {filters.map((filter) => (
                  <Disclosure as="div" key={filter.name} className="border-t border-gray-200 px-4 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
                            <span className="font-medium text-gray-900">{filter.name}</span>
                            <span className="ml-6 flex items-center">
                              <ChevronDownIcon
                                className={classNames(open ? "-rotate-180" : "rotate-0", "h-5 w-5 transform")}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {filter.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-mobile-${filter.type}-${optionIdx}`}
                                  name={`${filter.type}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  onChange={() => onFilterSelect(filter.type, option.value)}
                                />
                                <label
                                  htmlFor={`filter-mobile-${filter.type}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Filters */}
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filtre
        </h2>

        <div className="relative z-10 bg-white border-b border-gray-200 pb-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sorter
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {order.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={() => onOrderSelect(option.name)}
                            onClick={() => onOrderSelect(option.name)}
                            className={classNames(
                              option.current ? "font-medium text-gray-900" : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm cursor-pointer",
                            )}
                          >
                            {option.name}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filtre
            </button>

            <div className="hidden sm:block">
              <div className="flow-root">
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                  {filters.map((filter) => (
                    <Popover key={filter.name} className="px-4 relative inline-block text-left">
                      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>{filter.name}</span>
                        {filterActive(filter.type) ? (
                          <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">
                            {filterCount(filter.type)}
                          </span>
                        ) : null}
                        <ChevronDownIcon
                          className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {filter.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${filter.type}-${optionIdx}`}
                                  name={`${filter.type}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  onChange={() => onFilterSelect(filter.type, option.value)}
                                />
                                <label
                                  htmlFor={`filter-${filter.type}-${optionIdx}`}
                                  className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Filtre
              <span className="sr-only">, active</span>
            </h3>

            <div aria-hidden="true" className="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4" />

            <div className="mt-2 sm:mt-0 sm:ml-4">
              <div className="-m-1 flex flex-wrap items-center">
                {activeFilters.map((activeFilter) => (
                  <span
                    key={activeFilter.value}
                    className="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900"
                  >
                    <span>{activeFilter.label}</span>
                    <button
                      type="button"
                      className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                      onClick={() => onFilterSelect(activeFilter.type, activeFilter.value)}
                    >
                      <span className="sr-only">Remove filter for {activeFilter.label}</span>
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
