import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";

export default function Resources() {
  return (
    <Layout page="resources">
      <Head>
        <title>{siteTitle} - Resources</title>
      </Head>

      <div className="main main-raised" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="container-page">
            <div className="row mt-5">
              <div className="col-lg-6">
                <p>&nbsp;</p>
                <h2 className="title">Resources</h2>
                <h5 className="description">
                  Learing goes hand-in-hand with building new and cool stuff.
                  And here, we keep building stuff all the time. Here are a few
                  of them.
                </h5>
                <p>&nbsp;</p>
              </div>
              <div className="col-lg-6" style={{ textAlign: "center" }}>
                <Image className="img-fluid" src="/images/team.svg" unsized />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
