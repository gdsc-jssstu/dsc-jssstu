import { useRef, useEffect } from "react";
import Link from "next/link";

export default function Nav({ page }) {
  const menuRef = useRef(null);
  const darkModeRef = useRef(null);
  var modeText = "Dark Mode";

  const onMenuOpen = () => {
    menuRef.current.style.display = "inherit";
  };

  const onMenuClose = () => {
    menuRef.current.style.display = "none";
  };

  const setDarkMode = () => {
    const bodyClass = document.body.classList;
    bodyClass.add("dark");
    localStorage.setItem("dark", true);
    modeText = "Light Mode";
  };

  const setLightMode = () => {
    const bodyClass = document.body.classList;
    bodyClass.remove("dark");
    localStorage.setItem("dark", false);
    modeText = "Dark Mode";
  };

  const darkModeToggle = () => {
    const bodyClass = document.body.classList;
    bodyClass.contains("dark") ? setLightMode() : setDarkMode();
  };

  useEffect(() => {
    var dark = localStorage.getItem("dark");
    dark === "true" ? setDarkMode() : setLightMode();
  }, []);

  return (
    <div>
      <div className="main-menu" ref={menuRef}>
        <div className="main-menu-item-holder">
          <h2 className="text-center" onClick={onMenuClose}>
            {page == "home" ? (
              <Link href="/#home">Home</Link>
            ) : (
              <>
                <Link href="/">Home</Link>
              </>
            )}
          </h2>
          <h2 className="text-center" onClick={onMenuClose}>
            {page == "home" ? (
              <Link href="#team">Team</Link>
            ) : (
              <>
                <Link href="/team">Team</Link>
              </>
            )}
          </h2>
          <h2 className="text-center" onClick={onMenuClose}>
            <Link href="/events">Events</Link>
          </h2>
          <h2 className="text-center" onClick={onMenuClose}>
            {page == "home" ? (
              <Link href="#updates">Projects</Link>
            ) : (
              <>
                <Link href="/projects">Projects</Link>
              </>
            )}
          </h2>
          <h2 className="text-center" onClick={onMenuClose}>
            <Link href="/resources">Resources</Link>
          </h2>
          <h2 className="text-center" onClick={onMenuClose}>
            {page == "home" ? (
              <Link href="#blog">Blog</Link>
            ) : (
              <>
                <Link href="/blog">Blog</Link>
              </>
            )}
          </h2>
          <h2 className="text-center" onClick={onMenuClose}>
            <Link href="/#contact">Contact Us</Link>
          </h2>
          <h2
            className="text-center"
            onClick={darkModeToggle}
            ref={darkModeRef}
          >
            {modeText}
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
          <div className="menu-item">
            {page == "home" ? (
              <Link href="/#home">Home</Link>
            ) : (
              <>
                <Link href="/">Home</Link>
              </>
            )}
          </div>
          <div className="menu-item">
            {page == "home" ? (
              <Link href="#team">Team</Link>
            ) : (
              <>
                <Link href="/team">Team</Link>
              </>
            )}
          </div>
          <div className="menu-item">
            <Link href="/events">Events</Link>
          </div>
          <div className="menu-item">
            {page == "home" ? (
              <Link href="#updates">Projects</Link>
            ) : (
              <>
                <Link href="/projects">Projects</Link>
              </>
            )}
          </div>
          <div className="menu-item">
            <Link href="/resources">Resources</Link>
          </div>
          <div className="menu-item">
            {page == "home" ? (
              <Link href="#blog">Blog</Link>
            ) : (
              <>
                <Link href="/blog">Blog</Link>
              </>
            )}
          </div>
          <div className="menu-item">
            <Link href="/#contact">Contact Us</Link>
          </div>
          <div className="menu-item" onClick={darkModeToggle} ref={darkModeRef}>
            {modeText}
          </div>
        </div>
        <div className="menu-phone" id="menu-open">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.68"
            height={21}
            viewBox="0 0 36.68 21"
            onClick={onMenuOpen}
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
