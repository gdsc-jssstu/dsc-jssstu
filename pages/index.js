import { useRef, useContext } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const headerRef = useRef(null);
  const themeContext = useContext(ThemeContext);

  return (
    <Layout page="home" headerRef={headerRef}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="main" id="home">
        <div className="main-text-holder">
          <div className="main-text-holder-heading" ref={headerRef}>
            <picture>
              <source type="image/webp" srcSet="images/DSC_JSSSTU-dark.webp" />
              <source type="image/png" srcSet="images/DSC_JSSSTU-dark.png" />
              {themeContext.theme === "dark" ? (
                <Image
                  src="/images/DSC_JSSSTU-dark.png"
                  className="logo"
                  alt="DSC JSSSTU"
                  width={350}
                  height={80}
                  priority={true}
                />
              ) : (
                <></>
              )}
            </picture>
            <picture>
              <source type="image/webp" srcSet="images/DSC_JSSSTU-color.webp" />
              <source type="image/png" srcSet="images/DSC_JSSSTU-color.png" />
              {themeContext.theme === "light" ? (
                <Image
                  src="/images/DSC_JSSSTU-color.png"
                  className="logo-light"
                  alt="DSC JSSSTU"
                  width={350}
                  height={80}
                  priority={true}
                />
              ) : (
                <></>
              )}
            </picture>
          </div>
          <h2>Powered by Google Developers</h2>
          <p className="continous-text">
            At DSC JSSSTU, our aim is to learn and teach. Developers, designers
            and managers come together under one roof to create a community
            which inspires thousands. Join Us!
          </p>
          <p style={{ fontWeight: "400" }}>Connect • Learn • Grow</p>
        </div>
        <Link href="#our-work">
          <div className="main-down-arrow" id="down-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.55 44.393">
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
        <img src="/images/landing.svg" className="main-image" alt="Home Page" />
      </div>
      <div className="container-main holded-container" id="our-work">
        <h1 data-aos="fade-up" className=" text-center">
          Our Focus
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          We Believe that Together we can. We not only conduct events to impart
          learning but also various other activities and competitions!
        </p>
        <p
          data-aos="fade-up"
          className="text-center"
          style={{ fontWeight: "200" }}
        >
          TEAM - Together Each Achieve More
        </p>
      </div>

      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className=" text-center">
          About JSSSTU
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          JSS Science and Technology University, popularly known as SJCE or
          JSSSTU, is a private university located in Mysore, Karnataka, India.
          SJCE was Established in 1963. JSS S&T University is committed to
          deliver high quality educational opportunities for youth and transform
          not only its neighborhood but offer courses to equip aspiring youth to
          meet the global needs of industry in every sector.
        </p>
        <a href="https://jssstuniv.in/" target="_blank" rel="noopener">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Official Website</div>
          </div>
        </a>
      </div>

      <div className="container-main holded-container" id="team">
        <h1 data-aos="fade-up" className=" text-center">
          Get to know the team
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          We've got a strong team filled with passionate developers, dexterous
          designers and competent organisers!
        </p>
        <Link href="/team">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Meet The Team</div>
          </div>
        </Link>
      </div>
      <div className="container-main holded-container" id="updates">
        <h1 data-aos="fade-up" className=" text-center">
          Projects
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Proper execution of Knowledge leads to successful projects. Here are a
          few projects built by our team.
        </p>
        <Link href="/projects">
          <div data-aos="fade-up" className="buttons">
            <div className="button-maker" id="projects-button">
              <div className="button-text">Projects</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="container-main holded-container" id="blog">
        <h1 data-aos="fade-up" className=" text-center">
          Our Blog
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          You learn by sharing your knowledge and we emphasize it! Our team
          disseminates their knowledge on Medium often.
        </p>
        <div data-aos="fade-up" className="buttons">
          <a href="https://medium.com/dscjssstu">
            <div className="button-maker" id="projects-button">
              <div className="button-text">Check Out</div>
            </div>
          </a>
        </div>
      </div>
      <div className="container-main holded-container" id="contact">
        <h1 data-aos="fade-up" className=" text-center">
          Contact us
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Reach out to us on these platforms! We're just a message away.
        </p>
        <div data-aos="fade-up" className="icons small-icons">
          <a
            href="https://instagram.com/dscjssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/images/Instagram.svg"
              className="circle-icon"
              alt="DSC JSSSTU Instagram"
            />
          </a>
          {/* <a href="https://twitter.com/dscvit" target="_blank" rel="noopener">
            <img
              src="images/Twitter.svg"
              className="circle-icon"
              alt="DSC JSSSTU Twitter"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/company/dsc-jssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/images/Linkedin.svg"
              className="circle-icon"
              alt="DSC JSSSTU Linkedin"
            />
          </a>
          {/* <a
            href="https://facebook.com/dscvitvellore"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Facebook.svg"
              className="circle-icon"
              alt="DSC JSSSTU Facebook"
            />
          </a> */}
          <a
            href="https://github.com/dsc-jssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/images/Github.svg"
              className="circle-icon"
              alt="DSC JSSSTU GitHub"
            />
          </a>
          {/* <a
            href="https://www.behance.net/dsc-vit"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Behance.svg"
              className="circle-icon"
              alt="DSC JSSSTU Behance"
            />
          </a> */}
          <a href="https://medium.com/dscjssstu" target="_blank" rel="noopener">
            <img
              src="/images/Medium.svg"
              className="circle-icon"
              alt="DSC JSSSTU Medium"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCs7FLvZy-oflwwXZnUZkrJA"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/images/Youtube.svg"
              className="circle-icon"
              alt="DSC JSSSTU Youtube"
            />
          </a>
        </div>
      </div>
      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className=" text-center">
          Partners
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Partners help us reach our goals and grow our community! Thank You,
          for being one of them.
          <br />
          If you are interested in being a Speaker at one of our events or want
          to Sponsor us to get brand exposure and elevate your business identity
          within the community, then drop us the details.
        </p>
        <a href="mailto:dsc@jssstuniv.in" target="_blank" rel="noopener">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Send Proposal</div>
          </div>
        </a>
      </div>

      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className=" text-center">
          Submit an idea
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Tried implementing your idea and got stuck? Don't worry. We got your
          back! Drop your idea here and we will implement it!
        </p>
        <a href="mailto:dsc@jssstuniv.in" target="_blank" rel="noopener">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Submit Ideas</div>
          </div>
        </a>
      </div>

      <div className="footer container-main  container-main-last"></div>
    </Layout>
  );
}
