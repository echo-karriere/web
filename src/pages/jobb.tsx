import { Layout } from "../components/common/Layout";
import { SEO } from "../components/common/Seo";
import { Container } from "../components/common/Container";
import { Jobs } from "../components/event";

export default function News(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Jobb"
        description="Se stillingsutlysninger fra våre deltakere her."
      />
      <Container>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose">
              <h1 className="">
                <span className="block text-base text-c6 font-semibold tracking-wide uppercase">
                  Fra bedriftene som deltar
                </span>
                <span className="mt-2 block text-3xl leading-8 font-bold text-gray-900 sm:text-4xl">
                  Stillinger
                </span>
              </h1>
            </div>
            <div className="mt-6">
              <Jobs />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
