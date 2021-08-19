import { useEffect, useState } from "react";

import { shuffleArray } from "@/utils";

import { JOBS } from "../../../data/jobs";
import { FilterBy, Job, JobProps } from ".";

export const Jobs = (): JSX.Element => {
  const [jobs, setJobs] = useState<JobProps[]>(JOBS);
  const [filter] = useState<FilterBy>({
    type: undefined,
    location: undefined,
    company: undefined,
  });

  useEffect(() => {
    const copy = [...jobs];
    shuffleArray(copy);
    setJobs(copy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/*<aside className="my-8 flex flex-col items-center justify-center xl:hidden">*/}
      {/*  <Selects jobs={jobs} filter={filter} setFilter={setFilter} />*/}
      {/*</aside>*/}
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {jobs.map((job) => (
          <Job key={job.name} filters={filter} {...job} />
        ))}
      </div>
      {/*<aside className="hidden xl:block xl:pl-8">*/}
      {/*  <Selects jobs={jobs} filter={filter} setFilter={setFilter} />*/}
      {/*</aside>*/}
    </div>
  );
};
