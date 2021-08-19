import { useEffect, useState } from "react";

import { JOBS } from "@/data";
import { shuffleArray } from "@/utils";

import { ActiveFilter, Job, JobFilter, jobFilters, JobProps, Selects } from ".";

export const Jobs = (): JSX.Element => {
  const [jobs, setJobs] = useState<JobProps[]>(JOBS);
  const [activeFilters, setActiveFilters] = useState<Array<ActiveFilter>>([]);
  const [filters, setFilters] = useState<Array<JobFilter>>(jobFilters);

  useEffect(() => {
    const copy = [...jobs];
    shuffleArray(copy);
    setJobs(copy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Selects
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {jobs.map((job) => (
          <Job key={job.name} activeFilters={activeFilters} {...job} />
        ))}
      </div>
    </div>
  );
};
