import React, { ReactNode } from "react";
import { Link } from "gatsby";

interface AttendeeProps {
  name: string;
  logo: ReactNode | string;
  link: string;
}

const Attendee = ({ name, logo, link }: AttendeeProps): JSX.Element => (
  <Link
    to={link}
    className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200"
  >
    {typeof logo === "string" ? (
      <img className="max-h-12" src={logo} alt={name} />
    ) : (
      logo
    )}
  </Link>
);

interface AttendeesProps {
  title: string;
}

export const Attendees = ({ title }: AttendeesProps): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          {title}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Attendee
              key={i}
              name="Transistor"
              logo="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              link="/bedrift/transistor/"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
