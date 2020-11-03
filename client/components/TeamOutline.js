import React from 'react';
import teamData from '../data/eventData';

const TeamOutline= ({team}) => { 

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
                          title="Card title"
                          faceImage="images/face.jpg"
                          instagramLink="#"
                          githubLink="#"
                          linkedinLink="#"
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
                            title="Card title"
                            faceImage="images/face.jpg"
                            instagramLink="#"
                            githubLink="#"
                            linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                    title="Card title"
                                    faceImage="images/face.jpg"
                                    instagramLink="#"
                                    githubLink="#"
                                    linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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
                                  title="Card title"
                                  faceImage="images/face.jpg"
                                  instagramLink="#"
                                  githubLink="#"
                                  linkedinLink="#"
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