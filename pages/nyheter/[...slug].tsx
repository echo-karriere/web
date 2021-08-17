import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useMemo } from "react";

import { components, Container, Content, Layout } from "@/components";
import { allContentByType, MdxContent, renderNewsItem } from "@/lib/mdx";
import { NewsContent } from "@/lib/types";

interface NewsProps extends Omit<NewsContent, "date"> {
  date: string;
}

export default function Page({ mdx, frontMatter }: MdxContent<NewsProps>): JSX.Element {
  const Component = useMemo(() => getMDXComponent(mdx), [mdx]);

  return (
    <Layout title={frontMatter.title} description={frontMatter.description ?? ""}>
      <Container>
        <Content
          title={frontMatter.title}
          subtitle={new Date(frontMatter.date).toLocaleDateString("no-NB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        >
          <Component components={components} />
        </Content>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { mdx, frontMatter } = await renderNewsItem(params?.slug as string[]);

  return {
    props: {
      mdx,
      frontMatter: JSON.parse(JSON.stringify(frontMatter, null, 0)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await allContentByType<NewsContent>("news");

  return {
    paths: paths.map((p) => ({ params: { slug: [`${p.date.getFullYear()}`, p.slug] } })),
    fallback: false,
  };
};
