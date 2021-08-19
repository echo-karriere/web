import { JOB_COMPANIES, JOB_LOCATIONS } from "@/data";

export * from "./Job";
export * from "./Jobs";
export * from "./Selects";

export type SortType = "none" | "date";

export interface SortOption {
  name: string;
  type: SortType;
  current: boolean;
}

export const jobSortOptions: Array<SortOption> = [
  { name: "Ingen", type: "none", current: true },
  { name: "Frist", type: "date", current: false },
];

export interface JobFilterOption {
  value: string;
  label: string;
  checked: boolean;
}

export interface JobFilter {
  type: Filter;
  name: string;
  options: Array<JobFilterOption>;
}

export type Filter = "type" | "location" | "companies";

export const jobFilters: Array<JobFilter> = [
  {
    type: "type",
    name: "Jobbtype",
    options: [
      { value: "full", label: "Fulltid", checked: false },
      { value: "part", label: "Deltid", checked: false },
      { value: "summer", label: "Sommerjobb", checked: false },
      { value: "other", label: "Annet", checked: false },
    ],
  },
  {
    type: "location",
    name: "Sted",
    options: JOB_LOCATIONS.map((it) => ({ value: it.toLowerCase(), label: it, checked: false })),
  },
  {
    type: "companies",
    name: "Selskap",
    options: JOB_COMPANIES.map((it) => ({ value: it.toLowerCase(), label: it, checked: false })),
  },
];

export interface ActiveFilter {
  type: Filter;
  value: string;
  label: string;
}
