import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import { useRef } from "react";

export default function Projects() {
  const headerRef = useRef(null);
  const logoLightRef = useRef(null);
  const logoRef = useRef(null);
  return (
    <Layout page="projects" headerRef={headerRef}>
      <Head>
        <title>{siteTitle} - Projects</title>
        <link rel="stylesheet" href="css/projects.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="main main-raised" style={{ marginTop: "20" }}>
        {/*<div className="container">*/}
        <div className="container-page">
          <div className="row mt-5">
            <div className="col-lg-6">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <h2 className="title" ref={headerRef}>Projects</h2>
              <h5 className="description">
                Learing goes hand-in-hand with building new and cool stuff. And
                here, we keep building stuff all the time. Here are a few of
                them.
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

        <div className="row">
          <div className="column">
            <div className="card">
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                src="images/DSC Logo.png"
                alt="dsc logo"
              ></img>
              <h2 style={{ fontWeight: "400", color: "blue" }}>
                {" "}
                JSSSTU CS Department
              </h2>
              <b>Web</b>
              <p>
                <span
                  className="dot"
                  style={{ background: "rgb(0, 101, 202)" }}
                ></span>
              </p>
              <p>
                CSE department website for teachers to maintain their log of
                various activities.
              </p>
              <a>&emsp;</a>
              <ul className="pad" style={{ listStyleType: "none" }}>
                <li>
                  <a
                    id="social_link1"
                    href="https://jssstu-cs.herokuapp.com/"
                    target="_blank"
                    style={{ color: "#484848" }}
                  >
                    <i className="fa fa-link fa-lg" aria-hidden="true" style={{ paddingTop: "120px" }} ></i>
                  </a>
                  <a>&emsp;</a>
                  <a>&emsp;</a>
                  <a
                    id="social_link2"
                    href="https://github.com/dsc-jssstu/jsstu-cse-webapp"
                    target="_blank"
                    style={{ color: "#484848" }}
                  >
                    <i className="fab fa-github fa-lg" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src="images/DSC Logo.png"
                alt="dsc logo"
              ></img>
              <h2 style={{ fontWeight: "400", color: "blue" }}>
                Project Reachout App
              </h2>
              <b>Android</b>
              <p>
                <span className="dot" style={{ background: "red" }}></span>
              </p>
              <p className="para">
                Project Reachout is an NGO which mainly focuses on upbringing
                talents and helping a bunch of specially-abled kids to bring joy
                in their lives to cope up with this world.
              </p>
              <a>&emsp;</a>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a
                    id="social_link3"
                    href="https://youtu.be/HMPDMOthVDU"
                    target="_blank"
                    style={{ color: "#484848" }}
                  >
                    <i className="fab fa-youtube fa-lg" aria-hidden="true"></i>
                  </a>
                  <a>&emsp;</a>
                  <a
                    id="social_link4"
                    href="https://play.google.com/store/apps/details?id=com.projectreachout"
                    target="_blank"
                    style={{ color: "#484848" }}
                  >
                    <i className="fab fa-google-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*</div>*/}
      </div>
    </Layout>
  );
}
