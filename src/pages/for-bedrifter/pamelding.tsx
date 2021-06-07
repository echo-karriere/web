import { Container, Layout, SEO } from "../../components";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Påmelding"
        description="Meld bedriften din på echo karriere 2021."
      />
      <Container>
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
          <div className="relative max-w-xl mx-auto">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                Påmelding
              </h2>
              <h3 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                echo karriere 2021
              </h3>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Påmeldingen for echo karriere åpner 15. juni, 09:00. Vi sees her
                da!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
