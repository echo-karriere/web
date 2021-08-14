import { Intro, Layout } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout title="Hjem" description="echo karriere er en karrieredag for IT-studenter i Bergen.">
      <Intro />
    </Layout>
  );
}
