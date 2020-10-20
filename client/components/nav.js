export default function Nav({ children, page }) {
  return (
    <div>
      <div className="main-menu">
        <div className="main-menu-item-holder">
          <h2 className="text-center" id="home">
            <a href="/">Home</a>
          </h2>
          <h2 className="text-center" id="team">
            {page == "home" ? (
              <>Team</>
            ) : (
              <>
                <a href="/team">Team</a>
              </>
            )}
          </h2>
          <h2 className="text-center" id="updates">
            <a href="/events">Events</a>
          </h2>
          <h2 className="text-center" id="team">
            <a href="/projects">Projects</a>
          </h2>
          <h2 className="text-center" id="links">
            <a href="/resorces">Resources</a>
          </h2>
          <h2 className="text-center" id="team">
            <a href="/blog">Blog</a>
          </h2>
          <h2 className="text-center" id="contact">
            Contact Us
          </h2>
        </div>
        <img
          src="images/menu-image.svg"
          className="main-menu-image"
          alt="Open Menu"
        />
      </div>
      <div className="navbar">
        <div className="navbar-dsc-logo">
          <picture>
            <source type="image/webp" srcSet="images/DSC_JSSSTU-dark.webp" />
            <source type="image/png" srcSet="images/DSC_JSSSTU-dark.png" />
            <img
              src="images/DSC_JSSSTU-dark.png"
              data-aos="fade-up"
              className="logo-nav"
              alt="DSC JSSSTU"
              style={{ marginRight: "45px", marginLeft: "-20px" }}
            />
          </picture>
          <picture>
            <source type="image/webp" srcSet="images/DSC_JSSSTU-color.webp" />
            <source type="image/png" srcSet="images/DSC_JSSSTU-color.png" />
            <img
              src="images/DSC_JSSSTU-color.png"
              data-aos="fade-up"
              className="logo-nav-light"
              alt="DSC JSSSTU"
              style={{ marginRight: "45px", marginLeft: "-20px" }}
            />
          </picture>
        </div>
        <div className="menu">
          <div className="menu-item" id="home-desk">
            <a href="/">Home</a>
          </div>
          <div className="menu-item" id="team-desk">
            {page == "home" ? (
              <>Team</>
            ) : (
              <>
                <a href="/team">Team</a>
              </>
            )}
          </div>
          <div className="menu-item" id="updates-desk">
            <a href="/events">Events</a>
          </div>
          <div className="menu-item" id="team-desk">
            <a href="/projects">Projects</a>
          </div>
          <div className="menu-item" id="our-work-desk">
            <a href="/resources">Resources</a>
          </div>
          <div className="menu-item" id="team-desk">
            <a href="/blog">Blog</a>
          </div>
          <div className="menu-item" id="contact-desk">
            Contact Us
          </div>
        </div>
        <div className="menu-phone" id="menu-open">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.68"
            height={21}
            viewBox="0 0 36.68 21"
          >
            <g
              id="Group_7"
              data-name="Group 7"
              transform="translate(-1000.435 -266.349)"
            >
              <path
                id="Path_6"
                data-name="Path 6"
                d="M-223.854-311.151h27.406"
                transform="translate(1233.563 578)"
                fill="none"
                stroke="#141414"
                strokeWidth={1}
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M-223.854-311.151h18.34"
                transform="translate(1242.629 588)"
                fill="none"
                stroke="#141414"
                strokeWidth={1}
              />
              <path
                id="Path_8"
                data-name="Path 8"
                d="M-223.854-311.151h36.68"
                transform="translate(1224.289 598)"
                fill="none"
                stroke="#141414"
                strokeWidth={1}
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
