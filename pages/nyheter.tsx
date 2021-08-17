import { GetStaticProps } from "next";
import Link from "next/link";

import { Container, Layout } from "@/components";
import { getNews } from "@/lib/mdx";
import { NewsItem } from "@/lib/types";

interface Props {
  news: NewsItem[];
}

export default function News({ news }: Props): JSX.Element {
  return (
    <Layout title="Nyheter" description="Les siste nytt for echo karriere.">
      <Container>
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nyheter</h2>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p className="text-xl text-gray-500">Oppdateringer og siste nytt fra echo karriere.</p>
              </div>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {news.map((n) => (
                <div key={n.path}>
                  <p className="text-sm text-gray-500">
                    <time dateTime={n.date}>{n.prettyDate}</time>
                  </p>
                  <Link href={n.path}>
                    <a className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{n.title}</p>
                      <p className="mt-3 text-base text-gray-500">{n.excerpt}</p>
                    </a>
                  </Link>
                  <div className="mt-3">
                    <Link href={n.path}>
                      <a className="text-base font-semibold text-c6 hover:text-c5">Les mer</a>
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

export const getStaticProps: GetStaticProps = async () => {
  const news = await getNews();

  return {
    props: {
      news: news,
    },
  };
};
