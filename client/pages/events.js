import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function Events() {
  return (
    <Layout page="events">
      <Head>
        <title>{siteTitle} - Events</title>
      </Head>

      <div className="main main-raised" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="container-page">
            <div className="row mt-5">
              <div className="col-lg-6">
                <p>&nbsp;</p>
                <h2 className="title">Events</h2>
                <h5 className="description">
                  Learing goes hand-in-hand with building new and cool stuff.
                  And here, we keep building stuff all the time. Here are a few
                  of them.
                </h5>
                <p>&nbsp;</p>
              </div>
              <div className="col-lg-6" style={{ textAlign: "center" }}>
                <img
                  className="img-fluid"
                  src="https://d33wubrfki0l68.cloudfront.net/4ca4b8ee50e95fb46c02681f286963aa6fa94c9f/4ead2/assets/img/kit/dunkathon.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
