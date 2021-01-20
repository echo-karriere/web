import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Content = ({ title, children }: Props): JSX.Element => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose">
          <h1 className="mt-2 block text-3xl leading-8 font-bold text-gray-900 sm:text-4xl">
            {title}
          </h1>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
};
