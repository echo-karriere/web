import React from "react";
import { Link } from "gatsby";
import { Menu } from "@headlessui/react";

interface Props {
  title: string;
  description: string;
  to: string;
  children: React.ReactNode;
}

export function MenuItem({
  title,
  description,
  to,
  children,
}: Props): JSX.Element {
  return (
    <Menu.Item>
      <Link
        to={to}
        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
      >
        {children}
        <div className="ml-4">
          <p className="text-base font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </Link>
    </Menu.Item>
  );
}
