import Image from "next/image";

import { ActiveFilter } from "./index";

export type JobType = "full" | "part" | "summer" | "other";

export interface JobProps {
  name: string;
  company: string;
  logo: StaticImageData;
  link: string;
  description: string;
  location: string | null;
  type: JobType;
  deadline: Date | null;
}

export const jobType = (type: JobType): string => {
  switch (type) {
    case "full":
      return "Fulltid";
    case "part":
      return "Deltid";
    case "summer":
      return "Sommerjobb";
    case "other":
      return "Annet";
  }
};

export const Job = ({
  name,
  company,
  location,
  logo,
  description,
  type,
  deadline,
  link,
  activeFilters,
}: JobProps & { activeFilters: Array<ActiveFilter> }): JSX.Element | null => {
  const show = (): boolean => {
    const size = activeFilters.length === 0;
    if (size) return true;

    const hasType = activeFilters.some((it) => it.type === "type");
    const validType = hasType && activeFilters.some((it) => it.value === type);

    const hasCompany = activeFilters.some((it) => it.type === "companies");
    const validCompany = hasCompany && activeFilters.some((it) => it.label === company);

    const hasLocation = activeFilters.some((it) => it.type === "location");
    const validLocation = hasLocation && activeFilters.some((it) => it.label === location);

    if (hasType && hasCompany && hasLocation) return validType && validCompany && validLocation;
    if (hasType && hasCompany) return validType && validCompany;
    if (hasType && hasLocation) return validType && validLocation;
    if (hasCompany && hasLocation) return validCompany && validLocation;

    return validType || validCompany || validLocation;
  };

  if (!show()) return null;

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
      <div className="aspect-w-3 aspect-h-4 group-hover:opacity-75 sm:aspect-none flex justify-center items-center p-2 h-24 md:h-36">
        <Image src={logo} alt={company} className="w-full h-full object-contain sm:w-full sm:h-full" />
      </div>
      <div className="flex-1 p-4 space-y-2 flex flex-col">
        <h3 className="flex min-w-0 text-sm font-medium text-lg text-gray-900 mx-auto max-w-xs">
          <a href={link} className="inline-block md:truncate">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <div className="flex flex justify-between">
          <p className="text-sm font-bold text-gray-900">Frist</p>
          <p className="text-sm text-gray-600">
            {deadline?.toLocaleDateString("no-NB", { day: "2-digit", month: "2-digit", year: "numeric" }) ?? "N/A"}
          </p>
        </div>
        <div className="flex flex justify-between">
          <p className="text-sm font-bold text-gray-900">Sted</p>
          <p className="text-sm text-gray-600">{location ?? "Flere"}</p>
        </div>
        <div className="flex flex justify-between">
          <p className="text-sm font-bold text-gray-900">Stilling</p>
          <p className="text-sm text-gray-600">{jobType(type)}</p>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
