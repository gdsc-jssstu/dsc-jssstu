import React, { useState } from "react";
import teamData from "../data/teamData";
import TeamBigCard from "../components/TeamBigCard";
import TeamCard from "../components/TeamCard";
import Image from "next/image";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@material-ui/core";

const TeamOutline = () => {
  const [page, setPage] = useState("2021");

  const team = teamData[page];
  const staffData = team.staffData;
  const leadData = team.leadData;
  const execomData = team.execomData;
  const teamDatas = team.teamData;
  var teamNames = [];
  var teams = [];

  teamDatas.map((section) => {
    if (typeof section !== "string") {
      Object.keys(section).forEach(function (key) {
        typeof section[key] === "string"
          ? teamNames.push(section[key])
          : teams.push(section[key]);
      });
    }
  });

  return (
    <div className="row">
      {/*Team Cards*/}
      <div className="col-xl-12">
        <section className="team-cards">
          {/*Staff Coordinator*/}
          <div className="container staff-lead">
            <div className="row">
              <h1 className="team-row-heads ">{staffData.title}</h1>
              <hr />
            </div>
            <div className="row">
              <div className="col-md-12">
                <TeamBigCard
                  title={staffData.name}
                  faceImage={staffData.image}
                  blurDataURL={staffData.blurDataURL}
                  instagramLink={staffData.instagram}
                  githubLink={staffData.github}
                  linkedinLink={staffData.linkedin}
                  twitterLink={staffData.twitter}
                >
                  {staffData.bio}
                </TeamBigCard>
              </div>
            </div>
          </div>

          {/* Select chapter year */}
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: 50,
            }}
          >
            <div
              style={{
                backgroundColor: "#f7f7f7",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <FormControl
                // variant="outlined"
                style={{
                  minWidth: 130,
                }}
                color="primary"
              >
                <InputLabel
                  id="select-chapter"
                  color="primary"
                  style={{ color: "4286f4e0" }}
                >
                  Chapter
                </InputLabel>
                <Select
                  value={page}
                  onChange={(e) => setPage(e.target.value)}
                  labelId="select-chapter"
                  label="Chapter"
                  inputProps={{ MenuProps: { disableScrollLock: true } }}
                >
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2019}>2019</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>

          {/*Team Lead*/}
          <div className="container chapter-lead">
            <div className="row">
              <h1 className="team-row-heads" style={{ color: "#4286f4e0" }}>
                {leadData.title}
              </h1>
              <hr style={{ backgroundColor: "#4286f4e0" }} />
            </div>
            <div className="row">
              <div className="col-md-12">
                <TeamBigCard
                  title={leadData.name}
                  faceImage={leadData.image}
                  instagramLink={leadData.instagram}
                  githubLink={leadData.github}
                  linkedinLink={leadData.linkedin}
                  twitterLink={leadData.twitter}
                >
                  {leadData.bio}
                </TeamBigCard>
              </div>
            </div>
          </div>

          {/*Each card is in col, with flip-card-front and flip-card-back*/}
          {/*EXECOM*/}
          <Grid container spacing={2}>
            {execomData.map((execom) =>
              typeof execom === "string" ? (
                <Grid item xs={12}>
                  <h1 className="team-row-heads team-execom">{execom}</h1>
                  <hr className="team-bg-execom" />{" "}
                </Grid>
              ) : (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={5}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 15,
                  }}
                >
                  <TeamCard
                    title={execom.name}
                    faceImage={execom.image}
                    instagramLink={execom.instagram}
                    githubLink={execom.github}
                    linkedinLink={execom.linkedin}
                    twitterLink={execom.twitter}
                    shortBio={execom.short}
                    team="execom"
                  >
                    {execom.bio}
                  </TeamCard>
                </Grid>
              )
            )}
          </Grid>

          <div>
            {teamNames.map((teamVal, i) => (
              <Container key={`team-${teamVal}`}>
                <>
                  <Grid container item sm={12}>
                    <h1
                      className={`section-heading mx-auto
                    team-${teamVal
                      .toLowerCase()
                      .substr(0, teamVal.indexOf(" "))}`}
                    >
                      {teamVal}
                    </h1>
                    <hr
                      className={`team-bg-${teamVal
                        .toLowerCase()
                        .substr(0, teamVal.indexOf(" "))}`}
                    />{" "}
                  </Grid>
                  {teams[i].map((subVal, idx) => (
                    <Grid key={idx} container spacing={2}>
                      {/* <div className="container team-card-row "> */}
                      {subVal.map((subTeam) =>
                        typeof subTeam === "string" ? (
                          <Grid item xs={12}>
                            <h2
                              className="team-row-heads"
                              style={{ fontFamily: "monospace" }}
                            >
                              {subTeam}
                            </h2>{" "}
                          </Grid>
                        ) : (
                          subTeam.map((subTeamData, idx) => (
                            <Grid
                              item
                              // className={teamVal
                              //   .toLowerCase()
                              //   .substr(0, teamVal.indexOf(" "))}
                              xs={12}
                              md={6}
                              lg={5}
                              key={idx}
                              style={{
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: 15,
                              }}
                            >
                              <TeamCard
                                title={subTeamData.name}
                                faceImage={subTeamData.image}
                                instagramLink={subTeamData.instagram}
                                githubLink={subTeamData.github}
                                linkedinLink={subTeamData.linkedin}
                                twitterLink={subTeamData.twitter}
                                shortBio={subTeamData.short}
                                team={teamVal
                                  .toLowerCase()
                                  .substr(0, teamVal.indexOf(" "))}
                              >
                                {subTeamData.bio}
                              </TeamCard>
                            </Grid>
                          ))
                        )
                      )}
                      {/* </div> */}
                    </Grid>
                  ))}
                </>
              </Container>
            ))}

            {/*2019 Junior Team*/}
            {page == 2019 ? (
              <div className="container">
                <div className="row">
                  <h2 className="team-row-heads">Junior Team</h2>
                  <hr />{" "}
                </div>
                <div className="row">
                  <div className="col-md-12 mx-auto">
                    <Image
                      src="/images/team/2019/jnr team.jpg"
                      alt="DSC JSSSTU Junior Team"
                      width={780}
                      height={390}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamOutline;
