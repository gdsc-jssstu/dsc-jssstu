import React from 'react';
import teamData from '../data/teamData';
import TeamBigCard from "../components/TeamBigCard";
import { TeamCard, TeamCardFront, TeamCardBack } from "../components/TeamCard";

const TeamOutline= ({page}) => {
    const team = teamData[page];

     return (<div className="row">

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
                          title={team.coor_name}
                          faceImage={team.coor_pic}
                          instagramLink={team.coor_instagram}
                          githubLink={team.coor_github}
                          linkedinLink={team.coor_linkedin}
                        >
                         {team.short_coor_text}
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
                            title={team.community_name}
                            faceImage={team.community_pic}
                            instagramLink={team.community_instagram}
                            githubLink={team.community_github}
                            linkedinLink={team.community_linkedin}
                          >
                            {team.short_community_text}
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
                                  title={team.execom_name_1}
                                  faceImage={team.execom_pic_1}
                                  instagramLink={team.execom_instagram_1}
                                  githubLink={team.execom_github_1}
                                  linkedinLink={team.execom_linkedin_1}
                                >
                                 {team.short_execom_text_1}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_execom_text_1}
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title={team.execom_name_2}
                                  faceImage={team.execom_pic_2}
                                  instagramLink={team.execom_instagram_2}
                                  githubLink={team.execom_github_2}
                                  linkedinLink={team.execom_linkedin_2}
                                >
                                 {team.short_execom_text_2}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_execom_text_2}
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title={team.execom_name_3}
                                  faceImage={team.execom_pic_3}
                                  instagramLink={team.execom_instagram_3}
                                  githubLink={team.execom_github_3}
                                  linkedinLink={team.execom_linkedin_3}
                                >
                                  {team.short_execom_text_3}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_execom_text_3}
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
                                      title={team.ml_name_1}
                                      faceImage={team.ml_pic_1}
                                      instagramLink={team.ml_instagram_1}
                                      githubLink={team.ml_github_1}
                                      linkedinLink={team.ml_linkedin_1}
                                    >
                                   {team.short_ml_text_1}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                   {team.long_ml_text_1}
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title={team.ml_name_2}
                                    faceImage={team.ml_pic_2}
                                    instagramLink={team.ml_instagram_2}
                                    githubLink={team.ml_github_2}
                                    linkedinLink={team.ml_linkedin_2}
                                  >
                                    {team.short_ml_text_2}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                   {team.long_ml_text_2}
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title={team.ml_name_3}
                                    faceImage={team.ml_pic_3}
                                    instagramLink={team.ml_instagram_3}
                                    githubLink={team.ml_github_3}
                                    linkedinLink={team.ml_linkedin_3}
                                  >
                                    {team.short_ml_text_3}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                   {team.long_ml_text_3}
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title={team.ml_name_4}
                                    faceImage={team.ml_pic_4}
                                    instagramLink={team.ml_instagram_4}
                                    githubLink={team.ml_github_4}
                                    linkedinLink={team.ml_linkedin_4}
                                  >
                                    {team.short_ml_text_4}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                   {team.long_ml_text_4}
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
                                    title={team.web_name_1}
                                    faceImage={team.web_pic_1}
                                    instagramLink={team.web_instagram_1}
                                    githubLink={team.web_github_1}
                                    linkedinLink={team.web_linkedin_1}
                                  >
                                   {team.short_web_text_1}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    {team.long_web_text_1}
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title={team.web_name_2}
                                    faceImage={team.web_pic_2}
                                    instagramLink={team.web_instagram_2}
                                    githubLink={team.web_github_2}
                                    linkedinLink={team.web_linkedin_2}
                                  >
                                    {team.short_web_text_2}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                   {team. long_web_text_2}
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
                                    title={team.android_name_1}
                                    faceImage={team.android_pic_1}
                                    instagramLink={team.android_instagram_1}
                                    githubLink={team.android_github_1}
                                    linkedinLink={team.android_linkedin_1}
                                  >
                                    {team.short_android_text_1}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    {team.long_android_text_1}
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6">
                                <TeamCard>
                                  <TeamCardFront
                                    title={team.android_name_2}
                                    faceImage={team.android_pic_2}
                                    instagramLink={team.android_instagram_2}
                                    githubLink={team.android_github_2}
                                    linkedinLink={team.android_linkedin_2}
                                  >
                                    {team.short_android_text_2}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    {team.long_android_text_2}
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
                                    title={team.flutter_name_1}
                                    faceImage={team.flutter_pic_1}
                                    instagramLink={team.flutter_instagram_1}
                                    githubLink={team.flutter_github_1}
                                    linkedinLink={team.flutter_linkedin_1}
                                  >
                                   {team.short_flutter_text_1}
                                  </TeamCardFront>
                                  <TeamCardBack>
                                    {team.long_flutter_text_1}
                                  </TeamCardBack>
                                </TeamCard>
                              </div>
                              <div className="col-md-6 team-card-column">
                                <h2 className="team-row-heads text-center">
                                  TECH ADVISOR
                                </h2>
                                <TeamCard>
                                  <TeamCardFront
                                    title={team.techadv_name_1}
                                    faceImage={team.techadv_pic_1}
                                    instagramLink={team.techadv_instagram_1}
                                    githubLink={team.techadv_github_1}
                                    linkedinLink={team.techadv_linkedin_1}
                                  >
                                   {team.short_techadv_text_1}
                                    content.
                                  </TeamCardFront>
                                  <TeamCardBack>
                                   {team.long_techadv_text_1}
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
                                  title={team.comm_name_1}
                                  faceImage={team.comm_pic_1}
                                  instagramLink={team.comm_instagram_1}
                                  githubLink={team.comm_github_1}
                                  linkedinLink={team.comm_linkedin_1}
                                >
                                  {team.short_comm_text_1}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_comm_text_1}
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title={team.comm_name_2}
                                  faceImage={team.comm_pic_2}
                                  instagramLink={team.comm_instagram_2}
                                  githubLink={team.comm_github_2}
                                  linkedinLink={team.comm_linkedin_2}
                                >
                                  {team.short_comm_text_2}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_comm_text_2}
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
                                  title={team.graphic_name_1}
                                  faceImage={team.graphic_pic_1}
                                  instagramLink={team.graphic_instagram_1}
                                  githubLink={team.graphic_github_1}
                                  linkedinLink={team.graphic_linkedin_1}
                                >
                                  {team.short_graphic_text_1}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team. long_graphic_text_1}
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title={team.graphic_name_2}
                                  faceImage={team.graphic_pic_2}
                                  instagramLink={team.graphic_instagram_2}
                                  githubLink={team.graphic_github_2}
                                  linkedinLink={team.graphic_linkedin_2}
                                >
                                  {team.short_graphic_text_2}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_graphic_text_2}
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
                                  title={team.editorial_name_1}
                                  faceImage={team.editorial_pic_1}
                                  instagramLink={team.editorial_instagram_1}
                                  githubLink={team.editorial_github_1}
                                  linkedinLink={team.editorial_linkedin_1}
                                >
                                 {team.short_editorial_text_1}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_editorial_text_1}
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title={team.editorial_name_2}
                                  faceImage={team.editorial_pic_2}
                                  instagramLink={team.editorial_instagram_2}
                                  githubLink={team.editorial_github_2}
                                  linkedinLink={team.editorial_linkedin_2}
                                >
                                 {team.short_editorial_text_2}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_editorial_text_2}
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
                                  title={team.event_name_1}
                                  faceImage={team.event_pic_1}
                                  instagramLink={team.event_instagram_1}
                                  githubLink={team.event_github_1}
                                  linkedinLink={team.event_linkedin_1}
                                >
                                  {team.short_event_text_1}

                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_event_text_1}
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title={team.event_name_2}
                                  faceImage={team.event_pic_2}
                                  instagramLink={team.event_instagram_2}
                                  githubLink={team.event_github_2}
                                  linkedinLink={team.event_linkedin_2}
                                >
                                   {team.short_event_text_2}
                                </TeamCardFront>
                                <TeamCardBack>
                                 {team.long_event_text_2}
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
                                  title={team.opexec_name_1}
                                  faceImage={team.opexec_pic_1}
                                  instagramLink={team.opexec_instagram_1}
                                  githubLink={team.opexec_github_1}
                                  linkedinLink={team.opexec_linkedin_1}
                                >
                                 {team.short_opexec_text_1}
                                </TeamCardFront>
                                <TeamCardBack>
                                 {team.long_opexec_text_1}
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6 team-card-column">
                              <h2 className="team-row-heads text-center">PR</h2>
                              <TeamCard>
                                <TeamCardFront
                                  title={team.pr_name_1}
                                  faceImage={team.pr_pic_1}
                                  instagramLink={team.pr_instagram_1}
                                  githubLink={team.pr_github_1}
                                  linkedinLink={team.pr_linkedin_1}
                                >
                                  {team.short_pr_text_1}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_pr_text_1}
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
                                  title={team.video_name_1}
                                  faceImage={team.video_pic_1}
                                  instagramLink={team.video_instagram_1}
                                  githubLink={team.video_github_1}
                                  linkedinLink={team.video_linkedin_1}
                                >
                                  {team.short_video_text_1}
                                </TeamCardFront>
                                <TeamCardBack>
                                  {team.long_video_text_1}
                                </TeamCardBack>
                              </TeamCard>
                            </div>
                            <div className="col-md-6">
                              <TeamCard>
                                <TeamCardFront
                                  title={team.video_name_2}
                                  faceImage={team.video_pic_2}
                                  instagramLink={team.video_instagram_2}
                                  githubLink={team.video_github_2}
                                  linkedinLink={team.video_linkedin_2}
                                >
                                  {team.short_video_text_2}
                                </TeamCardFront>
                                <TeamCardBack>
                                 {team.long_video_text_2}
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
     )};


export default TeamOutline;
