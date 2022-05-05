import { Container, Jobs, Layout } from "@/components";

export default function News(): JSX.Element {
  return (
    <Layout title="Jobb" description="Finn jobber som er relevant for studenter og nyutdannede.">
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/echo-karriere/echo-karriere-static/main/meta_thumbnails/echo_stilling.png"
      />
      <Container>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose">
              <h1 className="">
                <span className="block text-base text-c6 font-semibold tracking-wide uppercase">
                  Finn jobber som er relevant for studenter og nyutdannede.
                </span>
                <span className="mt-2 block text-3xl leading-8 font-bold text-gray-900 sm:text-4xl">
                  Stillingsannonser
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
