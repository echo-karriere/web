import { NextSeo } from "next-seo";
import { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export function Layout({ title, description, children }: Props): JSX.Element {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: "website",
          title: title,
          description: description,
          site_name: "echo karriere",
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
