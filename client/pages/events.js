import { useRef } from 'react';
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import EventTimeline from '../components/EventTimeline';

export default function Events() {
  const headerRef = useRef(null);
  return (
    <Layout page="events"
      headerRef={headerRef}>
      <Head>
        <title>{siteTitle} - Events</title>
      </Head>
      <div className="main main-raised" style={{ marginTop: 0, overflow: 'hidden' }}>
        <div className="container">
          <div className="container-page">
            <div data-aos="fade-up" className="event-header-container">
              <div className="header-text-container">
                <h2 className="title" ref={headerRef}>Events</h2>
                <h5 className="description">Here at DSC JSSSTU we put the fun in functions and events.
                Attend Study Jams / Hackathon / Developer Conferences to learn more about the latest
                technologies.
                    Interested in being a Speaker at one of our events? Just drop us your Proposal. </h5>
              </div>
              <div>
                <img className="header-img"
                  src="https://d33wubrfki0l68.cloudfront.net/ccfa8808b9399e10d2ea4f26760ba995f0a4c741/7b481/assets/img/kit/speaker_banner.png" />
              </div>
            </div>
            <EventTimeline style={{height: '100%'}} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
