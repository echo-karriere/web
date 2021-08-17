import { ComponentMap } from "mdx-bundler/client";
import Link from "next/link";
import React from "react";

const CustomLink = ({ as, href, ...rest }: { as?: string; href: string; [key: string]: unknown }): JSX.Element => {
  return (
    <Link as={as} href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a {...rest} />
    </Link>
  );
};

export const components: ComponentMap = {
  a: CustomLink as React.ComponentType<Record<string, unknown>>,
};
