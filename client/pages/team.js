import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import SideBar from "../components/sidebar";
import React, { useState } from "react";
import TeamOutline from "../components/TeamOutline";
import Grid from "@material-ui/core/Grid";

export default function Team() {
  const [page, setPage] = useState("2020");

  return (
    <Layout page="team">
      <Head>
        <title>{siteTitle} - Team</title>

        <link rel="stylesheet" href="css/team.css" />
      </Head>

      <div id="page-wrap">
        <div className="team">
          <div className="container-fluid team-header main" id="home-scroll">
            <div className="main-text-holder">
              <h1 data-aos="fade-up" className="barlow-extralight">
                The Team
              </h1>
              <p data-aos="fade-up" className="barlow-medium">
                Individuality counts but teamwork dynamites. At DSC JSSSTU we
                celebrate teamwork and attribute the success of DSC to the
                wonderful individuals who put untiring efforts for it.
              </p>
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
            <Grid container class="team-grid">
              <Grid item sm={11} className="team-content-order">
                <TeamOutline page={page} />
              </Grid>
              <Grid item sm={1} className="sidebar-order">
                <div class="sticky-top">
                  <SideBar setPage={setPage} />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Layout>
  );
}
