import { ATTENDEES } from "data/attendees";
import Image from "next/image";
import { useEffect, useState } from "react";
import { shuffleArray } from "utils/utils";

export interface AttendeeProps {
  company: string;
  website: string;
  logo: StaticImageData;
}

const Attendee = ({ company, website, logo }: AttendeeProps): JSX.Element => (
  <a
    href={website}
    className="relative col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 hover:bg-gray-200 h-36"
    target="_blank"
    rel="noreferrer noopener"
    style={{ overflow: "hidden" }}
  >
    <Image src={logo} alt={company} className="unset" />
  </a>
);

export const Attendees = (): JSX.Element => {
  const [attendees, setAttendees] = useState<AttendeeProps[]>(ATTENDEES);

  useEffect(() => {
    const copy = [...attendees];
    shuffleArray(copy);
    setAttendees(copy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Bedrifter som deltar
        </p>
        <div className="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-3 lg:mt-8">
          {attendees.map((a) => (
            <Attendee key={a.company} {...a} />
          ))}
        </div>
      </div>
    </div>
  );
};
