import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import EventTimeline from "../components/EventTimeline";
import Image from "next/image";
import speakerBanner from "../public/images/speaker_banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Events() {
  return (
    <Layout page="events">
      <Head>
        <title>{siteTitle} - Events</title>
        <link rel="stylesheet" href="css/events.css" />
      </Head>
      <div
        className="main main-raised"
        style={{ marginTop: 0, overflow: "hidden" }}
      >
        <div className="container">
          <div className="container-page">
            <div className="event-header-container">
              <div className="header-text-container">
                <h2 className="title">Events</h2>
                <h5 className="description">
                  Here at GDSC JSSSTU we put the fun in functions and events.
                  Attend Study Jams / Hackathon / Developer Conferences to learn
                  more about the latest technologies. Interested in being a
                  Speaker at one of our events? Just drop us your Proposal.{" "}
                </h5>
              </div>
              <div>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="images/speaker_banner.webp"
                  />
                  <source type="image/png" srcSet="images/speaker_banner.png" />
                  <Image
                    className="events-header-img"
                    src={speakerBanner}
                    alt="DSC JSSSTU Events"
                    width={564 / 1.3}
                    height={214 / 1.3}
                    placeholder="blur"
                  />
                </picture>
              </div>
            </div>
            <EventTimeline style={{ height: "100%" }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
