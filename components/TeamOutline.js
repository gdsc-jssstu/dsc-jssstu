import React from "react";
import teamData from "../data/teamData";
import TeamBigCard from "../components/TeamBigCard";
import { TeamCard, TeamCardFront, TeamCardBack } from "../components/TeamCard";
import Image from "next/image";

const TeamOutline = ({ page }) => {
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
              <h2 className="team-row-heads ">{staffData.title}</h2>
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
                >
                  {staffData.bio}
                </TeamBigCard>
              </div>
            </div>
          </div>

          {/*Team Lead*/}
          <div className="container chapter-lead">
            <div className="row">
              <h2 className="team-row-heads">{leadData.title}</h2>
              <hr />{" "}
            </div>
            <div className="row">
              <div className="col-md-12">
                <TeamBigCard
                  title={leadData.name}
                  faceImage={leadData.image}
                  instagramLink={leadData.instagram}
                  githubLink={leadData.github}
                  linkedinLink={leadData.linkedin}
                >
                  {leadData.bio}
                </TeamBigCard>
              </div>
            </div>
          </div>

          {/*Each card is in col, with flip-card-front and flip-card-back*/}
          {/*EXECOM*/}
          <div className="execom">
            <div className="container team-card-row">
              <div className="row">
                {execomData.map((execom) =>
                  typeof execom === "string" ? (
                    <>
                      <h2 className="team-row-heads ">{execom}</h2>
                      <hr />{" "}
                    </>
                  ) : (
                    <div className="col-xl-4 col-md-6 mx-auto">
                      <TeamCard>
                        <TeamCardFront
                          title={execom.name}
                          faceImage={execom.image}
                          instagramLink={execom.instagram}
                          githubLink={execom.github}
                          linkedinLink={execom.linkedin}
                        >
                          {execom.short}
                        </TeamCardFront>
                        <TeamCardBack>{execom.bio}</TeamCardBack>
                      </TeamCard>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="team">
            {teamNames.map((teamVal, i) => (
              <>
                <div className="row team-row">
                  <h2 className="section-heading mx-auto">{teamVal}</h2>
                  <hr />{" "}
                </div>
                {teams[i].map((subVal, idx) => (
                  <div
                    className={teamVal
                      .toLowerCase()
                      .substr(0, teamVal.indexOf(" "))}
                    key={idx}
                  >
                    <div className="container team-card-row ">
                      {subVal.map((subTeam) =>
                        typeof subTeam === "string" ? (
                          <div className="row">
                            <h2 className="team-row-heads">{subTeam}</h2>{" "}
                          </div>
                        ) : (
                          <div className="row">
                            {subTeam.map((subTeamData, idx) => (
                              <div className="col-md-6 mx-auto" key={idx}>
                                <TeamCard>
                                  <TeamCardFront
                                    title={subTeamData.name}
                                    faceImage={subTeamData.image}
                                    instagramLink={subTeamData.instagram}
                                    githubLink={subTeamData.github}
                                    linkedinLink={subTeamData.linkedin}
                                  >
                                    {subTeamData.short}
                                  </TeamCardFront>
                                  <TeamCardBack>{subTeamData.bio}</TeamCardBack>
                                </TeamCard>
                              </div>
                            ))}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </>
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
