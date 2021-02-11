import React from "react";
import { Layout } from "../components/common/Layout";
import { SEO } from "../components/common/Seo";
import { Container } from "../components/common/Container";
import { Content } from "../components";

export default function Live(): JSX.Element {
  return (
    <Layout>
      <SEO title="Delta" description="Bli med på karrieredagen!" />
      <Container>
        <Content title="Delta" subtitle="Bli med på karrieredagen!">
          <p>
            Her kan du bli med på workshops, presentasjonene og komme deg inn i
            standområdet når det åpner! Vi sees der.
          </p>
        </Content>

        <div className="relative py-4 bg-white overflow-hidden">
          <div className="relative md:px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="py-8">
              <iframe
                className="max-w-sm md:max-w-md lg:max-w-2xl"
                id="bigmarker_embed_conference_room"
                src="https://www.bigmarker.com/conferences/b14749da90dc/attend_check?iframe=true&webcast=true"
                width="720"
                height="402"
                allowFullScreen={true}
                frameBorder="0"
              ></iframe>
            </div>
            <div className="py-8">
              <iframe
                className="max-w-sm md:max-w-md lg:max-w-2xl"
                id="bigmarker_embed_conference_room"
                src="https://www.bigmarker.com/conferences/94de219bb45d/attend_check?iframe=true&webcast=false"
                width="720"
                height="402"
                allowFullScreen={true}
                frameBorder="0"
              ></iframe>
            </div>
            {/* <div className="py-8">
              <iframe
                src="https://discord.com/widget?id=806510017624014848&theme=dark"
                width="350"
                height="500"
                allowtransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div> */}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
