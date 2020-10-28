import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Projects() {
  return (
    <Layout page="projects">
      <Head>
        <title>{siteTitle} - Projects</title>
        <link rel="stylesheet" href="css/projects.css" />
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
              <h2 className="title">Projects</h2>
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
                src="images/jssstucse.jpg"
                alt="dsc logo"
              ></img>
              <p>&nbsp;</p>
              <h2 style={{ fontWeight: "400", color: "#06f" }}>
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
              <p className="para">
                CSE department website for teachers to maintain their log of
                various activities.
              </p>

              <p>&emsp;</p>
              <div className="icons small-icons">
                <a href="#" target="_blank" rel="noopener">
                  <img
                    style={{ height: "5px", width: "5px" }}
                    src="images/Linkedin.svg"
                    className="circle-icon"
                    alt="DSC JSSSTU Link"
                  />
                </a>
                <a
                  href="https://github.com/dsc-jssstu/jsstu-cse-webapp"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="images/Github.svg"
                    className="circle-icon"
                    alt="DSC JSSSTU GitHub"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                style={{
                  height: "169px",
                  width: "100%",
                  backgroundColor: "#ffd904a1",
                  objectFit: "scale-down",
                }}
                src="images/projectReachout.jpeg"
                alt="dsc logo"
              ></img>
              <p>&nbsp;</p>
              <h2 style={{ fontWeight: "400", color: "#06f" }}>
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

              <div className="icons small-icons">
                <a
                  href="https://youtu.be/HMPDMOthVDU"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="images/Youtube.svg"
                    className="circle-icon"
                    alt="DSC JSSSTU Youtube"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener">
                  <img
                    src="images/Github.svg"
                    className="circle-icon"
                    alt="DSC JSSSTU GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*</div>*/}
      </div>
    </Layout>
  );
}
