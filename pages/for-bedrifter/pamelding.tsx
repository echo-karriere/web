import { Container, Layout } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout title="Påmelding 2022" description="Påmelding for echo karriere 2022">
      <Container>
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
          <div className="relative max-w-xl mx-auto">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Påmelding echo karriere 2022</h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Høstens arrangement er <strong>8. og 9. september 2022</strong>, og påmelding skal gjøres via skjemaet
                under:
                <br />
                <br />
                <strong>Påmeldingen åpner 2. mai ca. klokken 12:00*</strong>
                <br />
                <small className="text-red-500">*Endringer i tidspunkt kan forekomme</small>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
