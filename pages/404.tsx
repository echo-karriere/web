import { Content, Layout } from "@/components";

export default function FourOhFour(): JSX.Element {
  return (
    <Layout title="404" description="Vi kunne dessverre ikke finne det du var på jakt etter.">
      <main className="flex items-center flex-col justify-center h-96 p-4">
        <Content title="404: Vi finner ikke siden din :(">
          <p>Gå tilbake eller prøvd på nytt.</p>
        </Content>
      </main>
    </Layout>
  );
}
