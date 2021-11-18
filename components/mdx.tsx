import { ComponentMap } from "mdx-bundler/client";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type LinkProps = ComponentPropsWithoutRef<"a">;

const CustomLink = ({ href, ...rest }: LinkProps): JSX.Element => {
  return (
    <Link href={href as string}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a {...rest} />
    </Link>
  );
};

export const components: ComponentMap = {
  a: CustomLink,
};
