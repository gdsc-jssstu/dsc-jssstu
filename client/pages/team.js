import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function Team() {
  return (
    <Layout page="team">
      <Head>
        <title>{siteTitle} - Team</title>

        <link rel="stylesheet" href="css/team.css" />
      </Head>

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
              src="images/team.svg"
              className="main-image"
              alt="DSC VIT Team"
            />
          </div>
          </div>

          <div className="team-cards-container container-main  container-main-last" id="our-work">
        		<div className="row">
        			{/*Team Cards*/}
        			<div className="col-xl-12">
        				<section className="team-cards">
        					{/*Staff Coordinator*/}
        					<div className="container staff-lead">
        						<div className="row">
        							<h2 className="team-row-heads ">STAFF COORDINATOR</h2>
        							<hr/> </div>
        						<div className="row">
        							<div className="col-md-12">
        								<div className="flip-card chapter-lead-card" >
        									<div className="row no-gutters">
        										<div className="col-md-4"> <img src="images/face.jpg" className="card-img-top" alt="team-lead" /> </div>
        										<div className="col-md-8">
        											<div className="card-body text-md-left text-center">
        												<h5 className="card-title">Card title</h5>
        												<p className="team-social-media">
                                  <a href="#" target="_blank" rel="noopener">
                                    <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                  </a>
                                  <a href="" target="_blank" rel="noopener">
                                    <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                  </a>
                                  <a href="#" target="_blank" rel="noopener">
                                    <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                  </a>
                                </p>
        												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        						</div>
        						{/*Team Lead*/}
        						<div className="container chapter-lead">
        							<div className="row">
        								<h2 className="team-row-heads ">COMMUNITY LEAD</h2>
        								<hr/> </div>
        							<div className="row">
        								<div className="col-md-12">
        									<div className="flip-card chapter-lead-card" >
        										<div className="row no-gutters">
        											<div className="col-md-4"> <img src="images/face.jpg" className="card-img-top" alt="team-lead" /> </div>
        											<div className="col-md-8">
        												<div className="card-body text-md-left text-center">
        													<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        							{/*Each card is in col, with flip-card-front and flip-card-back*/}
        							{/*EXECOM*/}
        							<div className="execom">
        								<div className="container team-card-row">
        									<div className="row">
        										<h2 className="team-row-heads ">EXECOM</h2>
        										<hr/> </div>
        									<div className="row">
        										<div className="col-xl-4 col-md-6">
        											<div className="flip-card" id="1" /*{onClick=this.handleClick.bind(this)}*/>
        												<div className="flip-card-inner">
        													<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        														<div className="card-body text-center">
        															<h5 className="card-title">Card title</h5>
                                      <p className="team-social-media">
                                        <a href="#" target="_blank" rel="noopener">
                                          <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                        </a>
                                        <a href="" target="_blank" rel="noopener">
                                          <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                        </a>
                                        <a href="#" target="_blank" rel="noopener">
                                          <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                        </a>
                                      </p>
        															<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        															<p className="read-more">Read More +</p>
        														</div>
        													</div>
        													<div className="flip-card-back ">
        														<div className="card-body text-center">
        															<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        															<p className="read-more">Go Back</p>
        														</div>
        													</div>
        												</div>
        											</div>
        										</div>
        										<div className="col-xl-4 col-md-6">
        											<div className="flip-card" id="2" /*{onClick=this.handleClick.bind(this)}*/>
        												<div className="flip-card-inner">
        													<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        														<div className="card-body text-center">
        															<h5 className="card-title">Card title</h5>
                                      <p className="team-social-media">
                                        <a href="#" target="_blank" rel="noopener">
                                          <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                        </a>
                                        <a href="" target="_blank" rel="noopener">
                                          <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                        </a>
                                        <a href="#" target="_blank" rel="noopener">
                                          <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                        </a>
                                      </p>
        															<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        															<p className="read-more">Read More +</p>
        														</div>
        													</div>
        													<div className="flip-card-back ">
        														<div className="card-body text-center">
        															<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        															<p className="read-more">Go Back</p>
        														</div>
        													</div>
        												</div>
        											</div>
        										</div>
        										<div className="col-xl-4 col-md-6">
        											<div className="flip-card" id="3" /*{onClick=this.handleClick.bind(this)}*/>
        												<div className="flip-card-inner">
        													<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        														<div className="card-body text-center">
        															<h5 className="card-title">Card title</h5>
                                      <p className="team-social-media">
                                        <a href="#" target="_blank" rel="noopener">
                                          <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                        </a>
                                        <a href="" target="_blank" rel="noopener">
                                          <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                        </a>
                                        <a href="#" target="_blank" rel="noopener">
                                          <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                        </a>
                                      </p>
        															<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        															<p className="read-more">Read More +</p>
        														</div>
        													</div>
        													<div className="flip-card-back ">
        														<div className="card-body text-center">
        															<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        															<p className="read-more">Go Back</p>
        														</div>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        								{/*TECHINCAL*/}
        							<div className="technical">
        							<div className="row team-row">
        								<h2 className="section-heading mx-auto">TECHNICAL TEAM</h2>
        								<hr/> </div>
        							{/*Machine Learning*/}
        							<div className="container team-card-row">
        								<div className="row">
        									<h2 className="team-row-heads">MACHINE LEARNING</h2> </div>
        								<div className="row">
        									<div className="col-md-6">
        										<div className="flip-card" id="4" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        									<div className="col-md-6">
        										<div className="flip-card" id="5" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        									<div className="col-md-6">
        										<div className="flip-card" id="6" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        									<div className="col-md-6">
        										<div className="flip-card" id="7" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        							{/*Web*/}
        							<div className="container team-card-row">
        								<div className="row">
        									<h2 className="team-row-heads ">WEB</h2> </div>
        								<div className="row">
        									<div className="col-md-6">
        										<div className="flip-card" id="8" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        									<div className="col-md-6">
        										<div className="flip-card" id="9" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        							{/*Android*/}
        							<div className="container team-card-row">
        								<div className="row">
        									<h2 className="team-row-heads ">ANDROID</h2> </div>
        								<div className="row">
        									<div className="col-md-6">
        										<div className="flip-card" id="10" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        									<div className="col-md-6">
        										<div className="flip-card" id="11" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        							{/*Flutter and Tech Advisor*/}
        							<div className="container team-card-row">
        								<div className="row">
        									<div className="col-md-6 team-card-column">
        										<h2 className="team-row-heads text-center">FLUTTER</h2>
        										<div className="flip-card" id="12" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        									<div className="col-md-6 team-card-column">
        										<h2 className="team-row-heads text-center">TECH ADVISOR</h2>
        										<div className="flip-card" id="13" /*{onClick=this.handleClick.bind(this)}*/>
        											<div className="flip-card-inner">
        												<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        													<div className="card-body text-center">
        														<h5 className="card-title">Card title</h5>
                                    <p className="team-social-media">
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                      </a>
                                      <a href="" target="_blank" rel="noopener">
                                        <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                      </a>
                                      <a href="#" target="_blank" rel="noopener">
                                        <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                      </a>
                                    </p>
        														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        														<p className="read-more">Read More +</p>
        													</div>
        												</div>
        												<div className="flip-card-back ">
        													<div className="card-body text-center">
        														<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        														<p className="read-more">Go Back</p>
        													</div>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        						</div>
        					</div>
        					{/*CREATIVE*/}
        					<div className="creative">
        						<div className="row team-row">
        							<h2 className="section-heading mx-auto">CREATIVE TEAM</h2>
        							<hr/> </div>
        						{/*Communication and Outreach*/}
        						<div className="container team-card-row">
        							<div className="row">
        								<h2 className="team-row-heads ">COMM AND OUTREACH</h2> </div>
        							<div className="row">
        								<div className="col-md-6">
        									<div className="flip-card" id="14" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front "> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center creative">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center bcreative">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        								<div className="col-md-6">
        									<div className="flip-card" id="15" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        						</div>
        						{/*Graphic Designer*/}
        						<div className="container team-card-row">
        							<div className="row">
        								<h2 className="team-row-heads ">GRAPHIC DESIGNER</h2> </div>
        							<div className="row">
        								<div className="col-md-6">
        									<div className="flip-card" id="16" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        								<div className="col-md-6">
        									<div className="flip-card" id="17" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        						</div>
        						{/*Editorial*/}
        						<div className="container team-card-row">
        							<div className="row">
        								<h2 className="team-row-heads ">EDITORIAL</h2> </div>
        							<div className="row">
        								<div className="col-md-6">
        									<div className="flip-card" id="18" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        								<div className="col-md-6">
        									<div className="flip-card" id="19" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        						</div>
        					</div>
        					{/*ORGANISATIONAL*/}
        					<div className="organisational">
        						<div className="row team-row">
        							<h2 className="section-heading mx-auto">ORGANISATIONAL TEAM</h2>
        							<hr/> </div>
        						{/*Event Coordinators*/}
        						<div className="container team-card-row">
        							<div className="row">
        								<h2 className="team-row-heads ">EVENT COORDINATOR</h2> </div>
        							<div className="row">
        								<div className="col-md-6">
        									<div className="flip-card" id="20" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        								<div className="col-md-6">
        									<div className="flip-card" id="21" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        						</div>
        						{/*Op Exec and PR*/}
        						<div className="container team-card-row">
        							<div className="row">
        								<div className="col-md-6 team-card-column">
        									<h2 className="team-row-heads">OP EXEC</h2>
        									<div className="flip-card" id="22" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        								<div className="col-md-6 team-card-column">
        									<h2 className="team-row-heads text-center">PR</h2>
        									<div className="flip-card" id="23" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        						</div>
        						{/*Video Editor*/}
        						<div className="container team-card-row">
        							<div className="row">
        								<h2 className="team-row-heads ">VIDEO EDITORS</h2> </div>
        							<div className="row">
        								<div className="col-md-6">
        									<div className="flip-card" id="24" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet.</p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        								<div className="col-md-6">
        									<div className="flip-card" id="25" /*{onClick=this.handleClick.bind(this)}*/>
        										<div className="flip-card-inner">
        											<div className="flip-card-front"> <img src="images/face.jpg" className="card-img-top" alt="..." />
        												<div className="card-body text-center">
        													<h5 className="card-title">Card title</h5>
                                  <p className="team-social-media">
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Instagram.svg" className="social-circle-icon" alt=""/>
                                    </a>
                                    <a href="" target="_blank" rel="noopener">
                                      <img src="images/Github.svg" className="social-circle-icon" alt="" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener">
                                      <img src="images/Linkedin.svg" className="social-circle-icon" alt="" />
                                    </a>
                                  </p>
        													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        													<p className="read-more">Read More +</p>
        												</div>
        											</div>
        											<div className="flip-card-back ">
        												<div className="card-body text-center">
        													<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus placerat, ultricies neque et, congue orci. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc viverra in magna sed aliquam. Integer euismod, ex sit amet lobortis imperdiet, eros sapien sodales nisi, at scelerisque libero libero vitae ex. Nunc rhoncus vestibulum nunc a convallis.Integer euismod, ex sit amet lobortis imperdiet. </p>
        													<p className="read-more">Go Back</p>
        												</div>
        											</div>
        										</div>
        									</div>
        								</div>
        							</div>
        						</div>

        					</div>
                  </div>
        			</div>


        			{/*Staff Coordinator and Year Timeline*/}
        			<div className="sidebar-column">
        				<section className="team-sidebar sticky-top">
        					<div className="container">
        						<div id="mySidebar" className="sidebar">
        							<a /*href="javascript:void(0)"*/ href="#" className="closebtn" /*onclick="closeNav()"*/>×</a>
        							<a href="#">2020</a> <a href="#">2019</a>
        						</div>
        						<div id="main">
        							<button className="openbtn" /*onclick="openNav()"*/ >
                       	&lt;
                      </button>

        						</div>
        					</div>
              </section>
        	     </div>
            </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
