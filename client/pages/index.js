import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout page="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        <div
          className="page-header header-filter"
          id="home-view"
          style={{ maxHeight: "65vh" }}
        >
          <div className="container">
            <div className="row" style={{ height: "100%" }}>
              <div className="col-md-12" id="hometop-container">
                {/* <p>&nbsp;</p>
                    <img class="img-fluid" src="assets\img\logos\dsc_logo.png" width="200" />
                    <h1 class="tag_title">Developer Student Club</h1>
                    <h3 class="tag_details"><b>JSS Science and Technology University</b></h3>
                    <p>&nbsp;</p>
                    <p>
                        <a target="blank" href="./gcpcc.html">
                            <button class="btn btn-primary" id="buttons"><b>GCP Crash Course</b></button></a>
                    </p> */}
              </div>
            </div>
          </div>
        </div>
        <section id="page-header" style={{ maxHeight: "35vh" }}>
          <div className="container">
            <div className="row p-2">
              <div
                className="col-lg-5 col-sm-6"
                id="jssstuLogo"
                style={{ maxWidth: "50%" }}
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/c2aef9043769a01a9c3669e62c47422a27ad5985/d9437/assets/img/kit/jss_stu_master_logo.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="offset-lg-2 col-lg-5 col-sm-6 mt-2"
                id="dscLogo"
                style={{ maxWidth: "50%" }}
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/981a1f42efb275c0eb1bf3d22cbcd4feba6cf195/d5c72/assets/img/kit/dsclogo.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="main main-raised" style={{ marginTop: 0 }}>
        <div className="container">
          <p>&nbsp;</p>
          <div
            className="row mt-4 wow fadeIn"
            data-wow-delay="0.2s"
            style={{ textAlign: "left" }}
          >
            {/*First column*/}
            <div className="col-lg-6">
              {/*Card*/}
              <h2 className="title" id="tracks">
                <b>About The Program</b>
              </h2>
              <p>&nbsp;</p>
              <span id="mobile" className="icon">
                <i className="material-icons">gesture</i>
              </span>
              <span
                className="about_title_track"
                style={{ color: "rgb(54, 53, 53)" }}
              >
                What we do?
              </span>
              {/*Card*/}
              <p>&nbsp;</p>
              <p></p>
              <h5 className="description">
                Google collaborates with university students who are passionate
                about growing developer communities.
              </h5>
              <p />
              <p></p>
              <h5 className="description text-justify">
                Developer Student Club powered by Google Developers is a
                Technical Club under the Department of{" "}
                <a
                  href="http://jssstuniv.in/departments-CS"
                  target="_blank"
                  id="blue_text"
                >
                  Computer Science &amp; Engineering
                </a>
                is an initiative to grow their knowledge on developer
                technologies and more through peer to peer workshops and events,
                and gain relevant industry experience.
              </h5>
              <p />
              <p>
                <a target="blank" href="https://forms.gle/fhsA3NQwyLvDyPH17">
                  <button className="btn btn-primary" id="buttons">
                    <b>Sign Up</b>
                  </button>
                </a>
              </p>
              {/*/.Card*/}
            </div>
            {/*/.First column*/}
            {/*Second column*/}
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.2s"
              style={{ textAlign: "left" }}
            >
              {/*Card*/}
              {/* <h2 class="title" id="tracks"><b>&nbsp;</b></h2> */}
              {/* <p>&nbsp;</p> */}
              <img
                className="img-fluid"
                src="https://d33wubrfki0l68.cloudfront.net/8eb82534f97d860979b44061e93d512d68223ee8/c91ef/assets/img/kit/event.png"
                width="100%"
              />
            </div>
            {/*/.Second column*/}
          </div>
          {/*/.First row*/}
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div
            className="row mt-2 wow zoomIn"
            data-wow-delay="0.2s"
            style={{ textAlign: "left" }}
          >
            {/*First column*/}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
              {/*Card*/}
              <h3 className="title" id="tracks">
                <b>What DSC JSSSTU does?</b>
              </h3>
              <p>&nbsp;</p>
              <p></p>
              <h5 className="description">
                Developer Student Club JSSSTU is inspired by the Google
                Developers' Family.
              </h5>
              <p />
              <p></p>
              <h5 className="description">
                The motive is to create a local ecosystem of Developers in and
                around the Campus. And having fun doing it.
              </h5>
              <p />
              <p>&nbsp;</p>
              <a
                className="btn btn-primary btn-fab btn-round"
                id="social_button1"
                href="https://www.instagram.com/dscjssstu/"
                target="_blank"
              >
                <i className="fa fa-instagram" />
              </a>
              <a>&nbsp;</a>
              <a
                className="btn btn-primary btn-fab btn-round"
                id="social_button1"
                href="https://www.facebook.com/dsc.jsstu.3"
                target="_blank"
              >
                <i className="fa fa-facebook" />
              </a>
              <a>&nbsp;</a>
              <a
                className="btn btn-primary btn-fab btn-round"
                id="social_button1"
                href="https://github.com/dsc-jssstu"
                target="_blank"
              >
                <i className="fa fa-github" />
              </a>
              <a>&nbsp;</a>
              {/*/.Card*/}
            </div>
            {/*/.First column*/}
            {/*Second column*/}
            <div className="col-lg-6">
              {/*Card*/}
              <p>&nbsp;</p>
              <div className="row">
                <div className="col-lg-5" id="p1">
                  <p></p>
                  <h4
                    className="description"
                    style={{
                      fontWeight: 600,
                      color: "rgb(228, 180, 25)",
                      padding: "8px 4px",
                      backgroundColor: "rgba(247, 212, 17, 0.15)",
                      borderRadius: "8px",
                      width: "100px",
                      paddingLeft: "11px",
                    }}
                  >
                    Seminars
                  </h4>
                  <p />
                  <p></p>
                  <h5 className="description">
                    Get updated with the latest news and announcements.
                  </h5>
                  <p />
                </div>
                <div className="col-lg-5 " id="p4">
                  <p></p>
                  <h4
                    className="description"
                    style={{
                      fontWeight: 600,
                      color: "rgb(12, 80, 182)",
                      padding: "8px 4px",
                      backgroundColor: "rgba(12, 80, 182,0.15)",
                      borderRadius: "8px",
                      width: "115px",
                      paddingLeft: "11px",
                    }}
                  >
                    Study Jams
                  </h4>
                  <p />
                  <p></p>
                  <h5 className="description">
                    Hands-on experience with the community members.
                  </h5>
                  <p />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5" id="p1">
                  <p></p>
                  <h4
                    className="description"
                    style={{
                      fontWeight: 600,
                      color: "rgb(223, 77, 19)",
                      padding: "8px 4px",
                      backgroundColor: "rgba(223, 77, 19,0.15)",
                      borderRadius: "8px",
                      width: "90px",
                      paddingLeft: "11px",
                    }}
                  >
                    Projects
                  </h4>
                  <p />
                  <p></p>
                  <h5 className="description">
                    Projects with a social impact that help a lot of people.
                  </h5>
                  <p />
                </div>
                <div className="col-lg-5 " id="p4">
                  <p></p>
                  <h4
                    className="description"
                    style={{
                      fontWeight: 600,
                      color: "rgb(11, 184, 83)",
                      padding: "8px 4px",
                      backgroundColor: "rgba(11, 184, 83,0.15)",
                      borderRadius: "8px",
                      width: "120px",
                      paddingLeft: "11px",
                    }}
                  >
                    Hackathons
                  </h4>
                  <p />
                  <p></p>
                  <h5 className="description">
                    Dream. Explore. Wonder. Build it Together.
                  </h5>
                  <p />
                </div>
              </div>
              {/*/.Second column*/}
            </div>
            {/*/.First row*/}
            <p>&nbsp;</p>
          </div>
          {/*/.First row*/}
          <div
            className="row mt-2 wow fadeIn"
            data-wow-delay="0.2s"
            style={{ textAlign: "left" }}
          >
            {/*Second column*/}
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.2s"
              style={{ textAlign: "left" }}
            >
              {/*Card*/}
              <img
                className="img-fluid"
                src="https://d33wubrfki0l68.cloudfront.net/d6334d0563a22dff79fb948fe1f92be19036af5c/4ecbd/assets/img/kit/team1.jpg"
                width="100%"
              />
            </div>
            {/*/.Second column*/}
            {/*First column*/}
            <div className="col-lg-6">
              {/*Card*/}
              <p>&nbsp;</p>
              <span id="mobile" className="icon">
                <i className="material-icons">whatshot</i>
              </span>
              <span
                className="about_title_track"
                style={{ color: "rgb(54, 53, 53)" }}
              >
                The Team
              </span>
              {/*Card*/}
              <p>&nbsp;</p>
              <p></p>
              <h5 className="description text-justify">
                These are the amazing bunch of people who make the community
                what it is. Who are the Backbone of Developer Student Club,
                JSSSTU and ensure that we can forge ahead
              </h5>
              <p />
              <p></p>
              <h5 className="description text-justify">
                They take the time out from their daily grind to give back to
                the members and empower them to become bigger (Metaphorically).
                And Better.
              </h5>
              <p />
              <p>
                <a href="team.html" target="blank">
                  <span className="description" id="details_redirect">
                    <b>Meet The Team</b>
                  </span>
                </a>
                &nbsp;&nbsp;
              </p>
              <p></p>
              {/*/.Card*/}
            </div>
            {/*/.First column*/}
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className="row mt-2 wow">
            {/*First column*/}
            <div
              className="col-lg-4 wow zoomIn"
              data-wow-delay="0.2s"
              id="home-cards"
            >
              {/*Card*/}
              <div className="card" style={{ margin: "5px 0" }}>
                {/*Card image*/}
                <img
                  className="img-fluid"
                  src="https://d33wubrfki0l68.cloudfront.net/6319c0c5e21d179203440fac4544e232db9d25a7/93f45/assets/img/kit/_eve.png"
                  alt="Card image cap"
                />
                {/*Card content*/}
                <div className="card-body">
                  {/*Title*/}
                  <h4
                    className="about_title_track"
                    style={{
                      marginLeft: "-8px",
                      fontFamily: '"Open Sans", sans-serif',
                    }}
                  >
                    <b>Events</b>
                  </h4>
                  {/*Text*/}
                  <h5
                    className="description"
                    style={{ fontFamily: '"Open Sans", sans-serif' }}
                  >
                    Attend Study Jams/ Hackathons/ Developer Conferences to
                    learn more about the latest technologies.
                  </h5>
                  <div className="text-center">
                    <a
                      href="events.html"
                      className="btn btn-primary m-auto"
                      id="buttons"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              {/*/.Card*/}
            </div>
            {/*/.First column*/}
            {/*Second column*/}
            <div
              className="col-lg-4 wow zoomIn"
              data-wow-delay="0.4s"
              id="home-cards"
            >
              {/*Card*/}
              <div className="card" style={{ margin: "5px 0" }}>
                {/*Card image*/}
                <img
                  className="img-fluid"
                  src="https://d33wubrfki0l68.cloudfront.net/824bce3a5a18de496bfb3dba1ee134a7de1dce0b/57789/assets/img/kit/speaker.svg"
                  alt="Card image cap"
                />
                {/*Card content*/}
                <div className="card-body">
                  {/*Title*/}
                  <h4
                    className="about_title_track"
                    style={{
                      marginLeft: "-8px",
                      fontFamily: '"Open Sans", sans-serif',
                    }}
                  >
                    <b>Call For Speakers</b>
                  </h4>
                  {/*Text*/}
                  <h5
                    className="description"
                    style={{ fontFamily: '"Open Sans", sans-serif' }}
                  >
                    Interested in being a Speaker at one of our events? Just
                    drop us your Proposal.
                  </h5>
                  <div className="text-center">
                    <a
                      href="https://dscjssstu.typeform.com/to/V2sUUP"
                      target="_blank"
                      className="btn btn-primary"
                      id="buttons"
                    >
                      Send Proposal
                    </a>
                  </div>
                </div>
              </div>
              {/*/.Card*/}
            </div>
            {/*/.Second column*/}
            {/*Third column*/}
            <div
              className="col-lg-4 wow zoomIn"
              data-wow-delay="0.6s"
              id="home-cards"
            >
              {/*Card*/}
              <div className="card" style={{ margin: "5px 0" }}>
                {/*Card image*/}
                <img
                  className="img-fluid"
                  src="https://d33wubrfki0l68.cloudfront.net/39eb051f626b9bee84c726fb19194214ae9f6cc7/d6fd1/assets/img/kit/sponsor.png"
                  alt="Card image cap"
                />
                {/*Card content*/}
                <div className="card-body">
                  {/*Title*/}
                  <h4
                    className="about_title_track"
                    style={{
                      marginLeft: "-8px",
                      fontFamily: '"Open Sans", sans-serif',
                    }}
                  >
                    <b>Sponsorships</b>
                  </h4>
                  {/*Text*/}
                  <h5
                    className="description"
                    style={{ fontFamily: '"Open Sans", sans-serif' }}
                  >
                    Get Brand exposure and elevate your business identity within
                    the Community.{" "}
                  </h5>
                  <div className="text-center">
                    <a
                      href="https://dscjssstu.typeform.com/to/qyey9L"
                      target="_blank"
                      className="btn btn-primary"
                      id="buttons"
                    >
                      Send proposal
                    </a>
                  </div>
                </div>
              </div>
              {/*/.Card*/}
            </div>
            {/*/.Third column*/}
          </div>
          {/*/.First row*/}
          <p>&nbsp;</p>
          <div className="row mt-4 wow fadeIn" data-wow-delay="0.2s">
            <div className="col-lg-6" style={{ textAlign: "left" }}>
              <h3 className="title" id="tracks">
                <b>Partners</b>
              </h3>
              <p>&nbsp;</p>
              <h5 className="description text-justify">
                Thank you to our Partners for their support towards the
                community. If you want to be showcased through DSC JSSSTU,
                contact{" "}
                <a href="mailto:dsc.jssstu@gmail.com" id="blue_text">
                  <b>Here </b>
                </a>
                for Sponsorship details.
              </h5>
            </div>
            <div className="col-lg-6" style={{ textAlign: "center" }}>
              <h4 className="title" id="tracks">
                <b>&nbsp;</b>
              </h4>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6" id="p1">
                    <img
                      style={{ maxWidth: "150px" }}
                      className="img-fluid"
                      src="https://d33wubrfki0l68.cloudfront.net/d52c22d323c0f2970dc5285aa17b521c86d5ba03/fef59/assets/img/logos/google_dev.png"
                    />
                  </div>
                  {/* <div class="col-md-6 col-sm-6 col-xs-6" id="p4">
                                <img style="max-width:150px;" class="img-fluid"
                                    src="assets/img/kit/full-res/gdg-logo.png" />
                            </div> */}
                </div>
              </div>
            </div>
            {/*/.First row*/}
            <p>&nbsp;</p>
            <p>&nbsp;</p>

          </div>
          <p>&nbsp;</p>
          <div className="row mt-5 wow fadeIn" data-wow-delay="0.2s">
            {/*Second column*/}
            <div
              className="col-lg-5 wow fadeIn"
              data-wow-delay="0.2s"
              style={{ textAlign: "left" }}
            >
              {/*Card*/}
              <img
                className="img-fluid"
                src="https://d33wubrfki0l68.cloudfront.net/08fb24aeb617893da637ad6229c5a59f85994381/6f4e0/assets/img/kit/jssstu.png"
                width="100%"
              />
              <p>&nbsp;</p>
            </div>
            {/*/.Second column*/}
            {/*First column*/}
            <div className="col-lg-7">
              {/*Card*/}
              <h3 className="title">About JSSSTU</h3>
              {/*Card*/}
              <p>&nbsp;</p>
              <p></p>
              <h5 className="description text-justify">
                JSS Science and Technology University, popularly known as SJCE
                or JSSSTU, is a private university located in Mysore, Karnataka,
                India. SJCE was Established in 1963. JSS S&amp;T University is
                committed to deliver high quality educational opportunities for
                youth and transform not only its neighborhood but offer courses
                to equip aspiring youth to meet the global needs of industry in
                every sector.
              </h5>
              <p />
              <p>
                <a href="http://jssstuniv.in/" target="blank">
                  <span className="description" id="details_redirect">
                    <b>Learn More</b>
                  </span>
                </a>
                &nbsp;&nbsp;
              </p>
            </div>
            {/*/.First column*/}
          </div>
          <div className="row mt-5 wow fadeIn" data-wow-delay="0.2s">
            {/*Second column*/}
            <div
              className="col-lg-5 wow fadeIn"
              data-wow-delay="0.2s"
              style={{ textAlign: "left" }}
            >
              {/*Card*/}
              <img
                className="img-fluid"
                src="https://d33wubrfki0l68.cloudfront.net/34befad6b2990f7fdf15cdf5c8d3d2365d8e3637/b43e1/assets/img/kit/csedept.jpg"
              />
              <p>&nbsp;</p>
            </div>
            {/*/.Second column*/}
            {/*First column*/}
            <div className="col-lg-7">
              {/*Card*/}
              <h3 className="title">About CSE Department</h3>
              {/*Card*/}
              <p>&nbsp;</p>
              <p></p>
              <h5 className="description text-justify">
                The inception of Department of Computer Science and Engineering
                (CS&amp;E) was one among the first to be established in the
                State of Karnataka in the year 1982. Our mission is to create
                ideas that deepen and advance our understanding of the realm of
                Computer Science and Engineering and with those ideas to develop
                innovative, principled, and insightful leaders who change the
                world. department is actively involved in International
                collaborative research and also in sponsored research projects.
              </h5>
              <p />
              <p>
                <a href="http://jssstuniv.in/departments-CS" target="blank">
                  <span className="description" id="details_redirect">
                    <b>Learn More</b>
                  </span>
                </a>
                &nbsp;&nbsp;
              </p>
            </div>
            {/*/.First column*/}
          </div>
          {/*/.First row*/}
          <p>&nbsp;</p>
        </div>
        <div>
          {/* 
            <div class="elfsight-app-c58b36c6-22bb-4bb2-8371-41964e7b09a5"></div> */}
          {/* <div id="pixlee_container"></div>
            
             */}
        </div>
      </div>

      <div id="location" width="100%">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31182.937796960206!2d76.5888086!3d12.3247225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1571163363597!5m2!1sen!2sin"
          width={1800}
          height={470}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />{" "}
      </div>
    </Layout>
  );
}
