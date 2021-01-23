import { Link } from "gatsby";
import React from "react";

interface Props {
  message: string;
  url: string;
}

export function Notification({ message, url }: Props): JSX.Element {
  return (
    <div className="bg-yellow-400">
      <div className="flex justify-center items-center">
        <div className="m-3">
          <span className="hover:underline">
            <Link className="text-gray-800 md:text-lg text-xl" to={url}>
              {message} ➔
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
