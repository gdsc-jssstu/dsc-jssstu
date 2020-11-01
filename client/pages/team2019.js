import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import SideBar from "../components/sidebar";
import TeamBigCard from "../components/TeamBigCard";
import { TeamCard, TeamCardFront, TeamCardBack } from "../components/TeamCard";
import Image from "next/image";

export default function Team() {
  return (
    <Layout page="team">
      <Head>
        <title>{siteTitle} - Team 2019</title>

        <link rel="stylesheet" href="css/team.css" />
      </Head>



      <div id="page-wrap">
        <div className="team">
          <div className="container-fluid team-header main" id="home-scroll">
            <div className="main-text-holder">
              <h1 data-aos="fade-up" className="barlow-extralight">
                The Team of 2019-2020
              </h1>
              <h2 data-aos="fade-up" className="barlow-medium">
                Presenting board of 2019-2020
              </h2>
            </div>
            <Link href="#our-work">
              <div className="main-down-arrow" id="down-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28.55 44.393"
                >
                  <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(-966 -967.48)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M982,967.98V1011.1"
                      transform="translate(-1.5)"
                      fill="none"
                      stroke="#141414"
                      strokeLinecap="round"
                      strokeWidth={1}
                    />
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M966.813,997.8l13.973,13.577L994.363,997.8"
                      transform="translate(-0.313)"
                      fill="none"
                      stroke="#141414"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                    />
                  </g>
                </svg>
              </div>
            </Link>
            <div className="team-header-image">
              <img
                src="/images/team.svg"
                className="main-image"
                alt="DSC JSSSTU 2019 Team"
              />
            </div>
          </div>

          <div
            className="team-cards-container container-main  container-main-last"
            id="our-work"
          >       <SideBar/>
            <div className="row">
              {/*Team Cards*/}
              <div className="col-xl-12">
                <section className="team-cards">
                  {/*Staff Coordinator*/}
                  <div className="container staff-lead">
                    <div className="row">
                      <h2 className="team-row-heads ">STAFF COORDINATOR</h2>
                      <hr />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <TeamBigCard
                          title="Card title"
                          faceImage="images/face.jpg"
                          instagramLink="#"
                          githubLink="#"
                          linkedinLink="#"
                        >
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </TeamBigCard>
                      </div>
                    </div>
                    {/*Team Lead*/}
                    <div className="container chapter-lead">
                      <div className="row">
                        <h2 className="team-row-heads ">COMMUNITY LEAD</h2>
                        <hr />{" "}
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <TeamBigCard
                            title="Card title"
                            faceImage="images/face.jpg"
                            instagramLink="#"
                            githubLink="#"
                            linkedinLink="#"
                          >
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </TeamBigCard>
                        </div>
                      </div>
                      {/*Each card is in col, with flip-card-front and flip-card-back*/}
                      {/*EXECOM*/}
                      <div className="execom">
                        <div className="container team-card-row">
                          <div className="row">
                            <h2 className="team-row-heads ">EXECOM</h2>
                            <hr />{" "}
                          </div>
                          <div className="row">
                            <div className="col-xl-4 col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                          </div>
                        </div>
                        {/*TECHINCAL*/}
                        <div className="technical">
                          <div className="row team-row">
                            <h2 className="section-heading mx-auto">
                              TECHNICAL TEAM
                            </h2>
                            <hr />{" "}
                          </div>
                          {/*Machine Learning*/}
                          <div className="container team-card-row">
                            <div className="row">
                              <h2 className="team-row-heads">
                                MACHINE LEARNING
                              </h2>{" "}
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                            </div>
                          </div>
                          {/*Web*/}
                          <div className="container team-card-row">
                            <div className="row">
                              <h2 className="team-row-heads ">WEB</h2>{" "}
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                            </div>
                          </div>
                          {/*Android*/}
                          <div className="container team-card-row">
                            <div className="row">
                              <h2 className="team-row-heads ">ANDROID</h2>{" "}
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                            </div>
                          </div>
                          {/*Flutter and Tech Advisor*/}
                          <div className="container team-card-row">
                            <div className="row">
                              <div className="col-md-6 team-card-column">
                                <h2 className="team-row-heads text-center">
                                  FLUTTER
                                </h2>
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6 team-card-column">
                                <h2 className="team-row-heads text-center">
                                  TECH ADVISOR
                                </h2>
                                <TeamCard>
                                  <TeamCardFront
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
                                  >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque ut purus
                                    placerat, ultricies neque et, congue orci.
                                    Nunc viverra in magna sed aliquam. Integer
                                    euismod, ex sit amet lobortis imperdiet,
                                    eros sapien sodales nisi, at scelerisque
                                    libero libero vitae ex. Nunc viverra in
                                    magna sed aliquam. Integer euismod, ex sit
                                    amet lobortis imperdiet, eros sapien sodales
                                    nisi, at scelerisque libero libero vitae ex.
                                    Nunc rhoncus vestibulum nunc a
                                    convallis.Integer euismod, ex sit amet
                                    lobortis imperdiet.
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*CREATIVE*/}
                      <div className="creative">
                        <div className="row team-row">
                          <h2 className="section-heading mx-auto">
                            CREATIVE TEAM
                          </h2>
                          <hr />{" "}
                        </div>
                        {/*Communication and Outreach*/}
                        <div className="container team-card-row">
                          <div className="row">
                            <h2 className="team-row-heads ">
                              COMM AND OUTREACH
                            </h2>{" "}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                          </div>
                        </div>
                        {/*Graphic Designer*/}
                        <div className="container team-card-row">
                          <div className="row">
                            <h2 className="team-row-heads ">
                              GRAPHIC DESIGNER
                            </h2>{" "}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                          </div>
                        </div>
                        {/*Editorial*/}
                        <div className="container team-card-row">
                          <div className="row">
                            <h2 className="team-row-heads ">EDITORIAL</h2>{" "}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*ORGANISATIONAL*/}
                      <div className="organisational">
                        <div className="row team-row">
                          <h2 className="section-heading mx-auto">
                            ORGANISATIONAL TEAM
                          </h2>
                          <hr />{" "}
                        </div>
                        {/*Event Coordinators*/}
                        <div className="container team-card-row">
                          <div className="row">
                            <h2 className="team-row-heads ">
                              EVENT COORDINATOR
                            </h2>{" "}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                          </div>
                        </div>
                        {/*Op Exec and PR*/}
                        <div className="container team-card-row">
                          <div className="row">
                            <div className="col-md-6 team-card-column">
                              <h2 className="team-row-heads">OP EXEC</h2>
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6 team-card-column">
                              <h2 className="team-row-heads text-center">PR</h2>
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                          </div>
                        </div>
                        {/*Video Editor*/}
                        <div className="container team-card-row">
                          <div className="row">
                            <h2 className="team-row-heads ">VIDEO EDITORS</h2>{" "}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
                                >
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </TeamCardFront>
                                <TeamCardBack>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque ut purus
                                  placerat, ultricies neque et, congue orci.
                                  Nunc viverra in magna sed aliquam. Integer
                                  euismod, ex sit amet lobortis imperdiet, eros
                                  sapien sodales nisi, at scelerisque libero
                                  libero vitae ex. Nunc viverra in magna sed
                                  aliquam. Integer euismod, ex sit amet lobortis
                                  imperdiet, eros sapien sodales nisi, at
                                  scelerisque libero libero vitae ex. Nunc
                                  rhoncus vestibulum nunc a convallis.Integer
                                  euismod, ex sit amet lobortis imperdiet.
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
