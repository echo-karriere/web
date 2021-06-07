import { graphql, Link, useStaticQuery } from "gatsby";

import { Container, Layout, SEO } from "../components";

interface Edge {
  node: {
    frontmatter: {
      title: string;
      path: string;
      date: string;
      prettyDate: string;
    };
    excerpt: string;
  };
}

export default function News(): JSX.Element {
  const query = useStaticQuery(graphql`
    query News {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/*/posts/*" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date
              prettyDate: date(formatString: "DD MMMM YYYY", locale: "nb-NO")
            }
            excerpt(pruneLength: 180, truncate: true)
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Nyheter" description="Les siste nytt for echo karriere." />
      <Container>
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Nyheter
              </h2>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p className="text-xl text-gray-500">
                  Oppdateringer og siste nytt fra echo karriere.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {query.allMdx.edges.map((edge: Edge) => (
                <div key={edge.node.frontmatter.path}>
                  <p className="text-sm text-gray-500">
                    <time dateTime={edge.node.frontmatter.date}>
                      {edge.node.frontmatter.prettyDate}
                    </time>
                  </p>
                  <Link to={edge.node.frontmatter.path} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {edge.node.frontmatter.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {edge.node.excerpt}
                    </p>
                  </Link>
                  <div className="mt-3">
                    <Link
                      to={edge.node.frontmatter.path}
                      className="text-base font-semibold text-c6 hover:text-c5"
                    >
                      Les mer
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
