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
  const image = `${meta.siteUrl}/icons/icon-192x192.png`;

  return (
    <Helmet
      htmlAttributes={{ lang: "no" }}
      title={`${title} | ${meta.title}`}
      meta={[
        { name: "name", content: title || meta.title },
        { name: `description`, content: description },
        { name: "image", content: image },

        { name: `twitter:card`, content: `summary` },
        { name: "twitter:site", content: `echo karriere` },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: `twitter:creator`, content: "echo karriere" },
        { name: "twitter:image", content: image },

        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:url", content: meta.siteUrl },
        { property: "og:image", content: image },
        { property: "og:description", content: description },
        { property: "og:site_name", content: `echo karriere` },
      ]}
    />
  );
}
