import React from "react";
import { JobProps, JobType } from "./Job";

export interface FilterBy {
  type?: JobType;
  location?: string;
  company?: string;
}

interface JobCompanySelectFilter {
  jobs: JobProps[];
  filter: FilterBy;
  setFilter: (filter: FilterBy) => void;
}

export const JobCompanySelect = ({
  jobs,
  filter,
  setFilter,
}: JobCompanySelectFilter): JSX.Element => {
  const companies = [...new Set(jobs.map((j) => j.company))];
  const company = (company: string): Partial<FilterBy> => {
    return company === "all" ? { company: undefined } : { company: company };
  };
  return (
    <div>
      <label htmlFor="type" className="block text-sm font-medium text-gray-700">
        Selskap
      </label>
      <select
        id="type"
        name="type"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={(e) => setFilter({ ...filter, ...company(e.target.value) })}
      >
        <option value="all">Alle</option>
        {companies.map((com) => (
          <option key={com}>{com}</option>
        ))}
      </select>
    </div>
  );
};

interface JobLocationSelectFilter {
  jobs: JobProps[];
  filter: FilterBy;
  setFilter: (filter: FilterBy) => void;
}

export const JobLocationSelect = ({
  jobs,
  filter,
  setFilter,
}: JobLocationSelectFilter): JSX.Element => {
  const locations = [...new Set(jobs.map((j) => j.location))].filter((e) => e);
  const location = (location: string): Partial<FilterBy> => {
    return location === "all"
      ? { location: undefined }
      : { location: location };
  };
  return (
    <div>
      <label htmlFor="type" className="block text-sm font-medium text-gray-700">
        Sted
      </label>
      <select
        id="type"
        name="type"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={(e) => setFilter({ ...filter, ...location(e.target.value) })}
      >
        <option value="all">Alle</option>
        {locations.map((loc) => (
          <option key={loc}>{loc}</option>
        ))}
      </select>
    </div>
  );
};

interface JobTypeSelectFilter {
  filter: FilterBy;
  setFilter: (filter: FilterBy) => void;
}

export const JobTypeSelect = ({
  filter,
  setFilter,
}: JobTypeSelectFilter): JSX.Element => {
  const type = (type: string): Partial<FilterBy> => {
    return type === "all" ? { type: undefined } : { type: type as JobType };
  };
  return (
    <div>
      <label htmlFor="type" className="block text-sm font-medium text-gray-700">
        Jobbtype
      </label>
      <select
        id="type"
        name="type"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={(e) => setFilter({ ...filter, ...type(e.target.value) })}
      >
        <option value="all">Alle</option>
        <option value="full">Fulltid</option>
        <option value="part">Deltid</option>
        <option value="summer">Sommerjobb</option>
      </select>
    </div>
  );
};
