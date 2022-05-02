import { Container, Layout } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout title="Påmelding 2022" description="Påmelding for echo karriere 2022">
      <Container>
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
          <div className="relative max-w-xl mx-auto">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Påmelding echo karriere 2022</h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">Vi åpner påmeldingen ca. kl.12:00.</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
