import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMemo } from "react";

import { components, Container, Content, Layout } from "@/components";
import { allContentByType, MdxContent, pagePathsToSlug, renderMDX } from "@/lib/mdx";
import { Content as C } from "@/lib/types";

export default function Page({ mdx, frontMatter }: MdxContent<C>): JSX.Element {
  const Component = useMemo(() => getMDXComponent(mdx), [mdx]);

  return (
    <Layout title={frontMatter.title} description={frontMatter.description ?? ""}>
      <Container>
        <Content title={frontMatter.title}>
          <Component components={components} />
        </Content>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("getStaticProps:", params?.slug);
  const { mdx, frontMatter } = await renderMDX(params?.slug as string, "students");

  return {
    props: {
      mdx,
      frontMatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await allContentByType("students");
  const pages = pagePathsToSlug(paths.map((p) => p.path));

  return {
    paths: pages.map((p) => ({ params: { slug: p } })),
    fallback: false,
  };
};
