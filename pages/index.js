import { useRef, useContext, useState, useEffect } from "react";
import { Button, Snackbar, Slide } from "@material-ui/core";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Landing,
  Instagram,
  Linkedin,
  Github,
  Medium,
  Youtube,
  Twitter
} from "../components/Icons";
import dscDark from "../public/images/DSC_JSSSTU-dark.png";
import dscColor from "../public/images/DSC_JSSSTU-color.png";

export default function Home() {
  const headerRef = useRef(null);
  const themeContext = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  const handleNewVersion = () => {
    window.workbox.addEventListener("controlling", () => {
      window.location.reload();
    });

    window.workbox.messageSkipWaiting();
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      window.workbox.addEventListener("waiting", handleClick);

      window.workbox.register();
    }
  }, []);

  return (
    <Layout page="home" headerRef={headerRef}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        TransitionComponent={function SlideTransition(props) {
          return <Slide {...props} direction="left" />;
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        message="New version is available!"
        action={
          <Button color="secondary" size="small" onClick={handleNewVersion}>
            Refresh
          </Button>
        }
      />

      <div className="main" id="home">
        <div className="main-text-holder">
          <div className="main-text-holder-heading" ref={headerRef}>
            {themeContext.theme === "dark" ? (
              <Image
                src={dscDark}
                className="logo"
                alt="GDSC JSSSTU"
                width={350}
                height={80}
                placeholder="blur"
              />
            ) : (
              <></>
            )}
            {themeContext.theme === "light" ? (
              <Image
                src={dscColor}
                className="logo-light"
                alt="GDSC JSSSTU"
                width={350}
                height={80}
                placeholder="blur"
              />
            ) : (
              <></>
            )}
          </div>
          <p className="continous-text">
            At GDSC JSSSTU, our aim is to learn and teach. Developers, designers
            and managers come together under one roof to create a community
            which inspires thousands. Join Us!
          </p>
          <p style={{ fontWeight: "400" }}>Connect • Learn • Grow</p>
        </div>
        <Link href="#our-work" passHref>
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
        <Landing className="main-image" alt="Home Page" />
      </div>
      <div className="container-main holded-container" id="our-work">
        <h1 data-aos="fade-up" className="text-center">
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
        <h1 data-aos="fade-up" className="text-center">
          About JSSSTU
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          JSS Science and Technology University, popularly known as SJCE or
          JSSSTU, is a private university located in Mysore, Karnataka, India.
          SJCE was Established in 1963. JSS S&T University is committed to
          deliver high quality educational opportunities for youth and transform
          not only its neighborhood but offer courses to equip aspiring youth to
          meet the global needs of industry in every sector.
        </p>
        <a
          href="https://jssstuniv.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Official Website</div>
          </div>
        </a>
      </div>

      <div className="container-main holded-container" id="team">
        <h1 data-aos="fade-up" className="text-center">
          Get to know the team
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          We&apos;ve got a strong team filled with passionate developers,
          dexterous designers and competent organisers!
        </p>
        <Link href="/team" passHref>
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Meet The Team</div>
          </div>
        </Link>
      </div>

      <div className="container-main holded-container" id="updates">
        <h1 data-aos="fade-up" className="text-center">
          Projects
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          Proper execution of Knowledge leads to successful projects. Here are a
          few projects built by our team.
        </p>
        <Link href="/projects" passHref>
          <div data-aos="fade-up" className="buttons">
            <div className="button-maker" id="projects-button">
              <div className="button-text">Projects</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="container-main holded-container" id="blog">
        <h1 data-aos="fade-up" className="text-center">
          Our Blog
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
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
        <h1 data-aos="fade-up" className="text-center">
          Contact us
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          Reach out to us on these platforms! We&apos;re just a message away.
        </p>
        <div data-aos="fade-up" className="icons small-icons">
          <a
            href="https://instagram.com/gdscjssstu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="circle-icon" alt="GDSC JSSSTU Instagram" />
          </a>
          {/* <a href="https://twitter.com/dscjssstu" target="_blank" rel="noopener">
            <img
              src="images/Twitter.svg"
              className="circle-icon"
              alt="DSC JSSSTU Twitter"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/company/dsc-jssstu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="circle-icon" alt="GDSC JSSSTU Linkedin" />
          </a>
          <a
            href="https://twitter.com/gdscjssstu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="circle-icon" alt="GDSC JSSSTU Twitter" />
          </a>
          <a
            href="https://github.com/gdsc-jssstu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="circle-icon" alt="GDSC JSSSTU GitHub" />
          </a>
          <a
            href="https://medium.com/dscjssstu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Medium className="circle-icon" alt="GDSC JSSSTU Medium" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCs7FLvZy-oflwwXZnUZkrJA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="circle-icon" alt="GDSC JSSSTU Youtube" />
          </a>
        </div>
      </div>

      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className="text-center">
          Join us!
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          Ready to hang out? Grab a seat in a voice channel. Designed so you can
          pop in and out of voice and video conversations throughout the day.
          Play games, have fun and enjoy geek time with us. Access to a global
          network of student leaders, professional community organizers,
          industry experts, and Googlers to gain mentorship and share knowledge.
        </p>
        <div data-aos="fade-up" className="buttons">
          <a
            href="https://discord.dscjssstu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade-up" className="button-maker">
              <div className="button-text">Discord</div>
            </div>
          </a>
          <a
            href="https://gdsc.community.dev/jss-science-technology-university-mysuru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade-up" className="button-maker">
              <div className="button-text">Subscribe</div>
            </div>
          </a>
        </div>
      </div>

      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className="text-center">
          Submit an idea
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          Tried implementing your idea and got stuck? Don&apos;t worry. We got
          your back! Drop your idea here and we will help you implement it!
        </p>
        <a
          href="mailto:dsc@jssstuniv.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Submit Ideas</div>
          </div>
        </a>
      </div>

      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className="text-center">
          Partners
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          Partners help us reach our goals and grow our community! Thank You,
          for being one of them.
          <br />
          If you are interested in being a Speaker at one of our events or want
          to Sponsor us to get brand exposure and elevate your business identity
          within the community, then drop us the details.
        </p>
        <a
          href="mailto:dsc@jssstuniv.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Send Proposal</div>
          </div>
        </a>
      </div>

      <div className="footer container-main  container-main-last"></div>
    </Layout>
  );
}
