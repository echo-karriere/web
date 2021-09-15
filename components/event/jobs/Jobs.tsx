import { useEffect, useState } from "react";

import { JOBS } from "@/data";
import { shuffleArray } from "@/utils";

import { ActiveFilter, Job, JobFilter, jobFilters, JobProps, jobSortOptions, Selects, SortOption } from ".";

export const Jobs = (): JSX.Element => {
  const [jobs, setJobs] = useState<JobProps[]>(JOBS);
  const [activeFilters, setActiveFilters] = useState<Array<ActiveFilter>>([]);
  const [filters, setFilters] = useState<Array<JobFilter>>(jobFilters);
  const [order, setOrder] = useState<Array<SortOption>>(jobSortOptions);

  const shuffleJobs = () => {
    const copy = [...jobs];
    shuffleArray(copy);
    setJobs(copy);
  };

  const sortJobsByDate = () => {
    const copy = [...jobs];
    copy.sort((a, b) => {
      if (a.deadline === b.deadline) return 0;
      else if (a.deadline === null) return 1;
      else if (b.deadline === null) return -1;
      else return a.deadline.getTime() - b.deadline.getTime();
    });
    setJobs(copy);
  };

  useEffect(() => {
    shuffleJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const active = order.filter((it) => it.current)[0];
    switch (active.type) {
      case "date":
        sortJobsByDate();
        break;
      case "none":
        shuffleJobs();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  return (
    <div>
      <Selects
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        filters={filters}
        setFilters={setFilters}
        order={order}
        setOrder={setOrder}
      />
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {jobs.map((job, i) => (
          <Job key={`${job.name}-${i}`} activeFilters={activeFilters} {...job} />
        ))}
      </div>
    </div>
  );
};
