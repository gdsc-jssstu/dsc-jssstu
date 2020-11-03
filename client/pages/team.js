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
        <title>{siteTitle} - Team</title>

        <link rel="stylesheet" href="css/team.css" />
      </Head>
{/* pageWrapId={"page-wrap"} outerContainerId={"top"} */}
      

      <div id="page-wrap">
        <div className="team">
          <div className="container-fluid team-header main" id="home-scroll">
            <div className="main-text-holder">
              <h1 data-aos="fade-up" className="barlow-extralight">
                The Team
              </h1>
              <h2 data-aos="fade-up" className="barlow-medium">
                Presenting board of 2020-2021
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
                alt="DSC JSSSTU Team"
              />
            </div>
          </div>

          <div
            className="team-cards-container container-main  container-main-last"
            id="our-work"
          >
             <SideBar />
             
          </div>
        </div>
      </div>
    </Layout>
  );
}
