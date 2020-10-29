import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from 'next/image';

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
              <h1 className="title">Projects</h1>
              <p className="description">
                Learing goes hand-in-hand with building new and cool stuff. And
                here, we keep building stuff all the time. Here are a few of
                them.
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="card">
              <Image
                style={{
                  objectFit: "contain",
                  display: "flex",
                  justifyContent: "center",
                }}
                src="/images/jssstucse.jpg"
                alt="dsc logo"
                height="250px"
                width="370px"
              ></Image>
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
              <div className="icons small-icons" style={{display: "flex", justifyContent: "center"}}>
                <a href="#" target="_blank" rel="noopener">
                  <Image
                    style={{ height: "5px", width: "5px" }}
                    src="/images/Linkedin.svg"
                    className="circle-icon"
                    alt="DSC JSSSTU Link"
                    unsized
                  />
                </a>
                <a
                  href="https://github.com/dsc-jssstu/jsstu-cse-webapp"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/images/Github.svg"
                    className="circle-icon"
                    alt="DSC JSSSTU GitHub"
                    unsized
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <Image
                style={{
                  objectFit: "contain",
                  display: "flex",
                  justifyContent: "center",
                }}
                src="/images/projectReachout.jpeg"
                alt="dsc logo"
                height= "250px"
                width= "300px"
              ></Image>
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

              <div className="icons small-icons" style={{display: "flex", justifyContent: "center"}}>
                <a
                  href="https://youtu.be/HMPDMOthVDU"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/images/Youtube.svg"
                    className="circle-icon"
                    alt="DSC JSSSTU Youtube"
                    unsized
                  />
                </a>
                <a href="#" target="_blank" rel="noopener">
                  <Image
                    src="/images/Github.svg"
                    className="circle-icon"
                    alt="DSC JSSSTU GitHub"
                    unsized
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
