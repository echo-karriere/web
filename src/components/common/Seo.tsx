import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../../queries/useSiteMetadata";

export interface Props {
  description?: string;
  title?: string;
}

export function SEO({ description: desc, title: t }: Props): JSX.Element {
  const meta = useSiteMetadata();

  const title = t ?? meta.title;
  const description = desc ?? meta.description;

  return (
    <Helmet
      htmlAttributes={{ lang: "no" }}
      title={`${title} | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.title,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
}
