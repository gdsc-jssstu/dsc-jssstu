import { useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconButton } from "@material-ui/core";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { ThemeContext } from "../contexts/ThemeContext";
import dscDark from "../public/images/DSC_JSSSTU-dark.png";
import dscColor from "../public/images/DSC_JSSSTU-color.png";

export default function Nav({ page, headerRef, theme, toggleTheme }) {
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const themeContext = useContext(ThemeContext);

  const onMenuOpen = () => {
    menuRef.current.style.display = "inherit";
  };

  const onMenuClose = () => {
    menuRef.current.style.display = "none";
  };

  useEffect(() => {
    const handleScroll = () => {
      const logoMark =
        page === "home"
          ? headerRef.current.getBoundingClientRect().top
          : Number.NEGATIVE_INFINITY;

      window.pageYOffset > logoMark
        ? navRef.current.classList.add("navbar-scrolled")
        : navRef.current.classList.remove("navbar-scrolled");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, [headerRef, page]);

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
                <Link href="https://medium.com/dscjssstu">Blog</Link>
              </>
            )}
          </h2>
          <h2 className="text-center" onClick={onMenuClose}>
            <Link href="/#contact">Contact Us</Link>
          </h2>
          <h2 className="text-center" onClick={toggleTheme}>
            {theme === "light" ? "Dark theme" : "Light theme"}
          </h2>
        </div>
        <img
          src="images/menu-image.svg"
          className="main-menu-image"
          alt="Open Menu"
        />
      </div>
      <div className="navbar" ref={navRef}>
        <div className="navbar-dsc-logo">
          {theme === "dark" ? (
            <Image
              src={dscDark}
              className="logo-nav"
              alt="DSC JSSSTU"
              width={250}
              height={55}
              placeholder="blur"
            />
          ) : (
            <></>
          )}
          {theme === "light" ? (
            <Image
              src={dscColor}
              className="logo-nav-light"
              alt="DSC JSSSTU"
              width={250}
              height={55}
              placeholder="blur"
            />
          ) : (
            <></>
          )}
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
          {/*<!--
          <div className="menu-item">
            <Link href="/resources">Resources</Link>
          </div>-->*/}
          <div className="menu-item">
            {page == "home" ? (
              <Link href="#blog">Blog</Link>
            ) : (
              <>
                <Link href="https://medium.com/dscjssstu">Blog</Link>
              </>
            )}
          </div>
          <div className="menu-item">
            <Link href="/#contact">Contact Us</Link>
          </div>
          <div className="menu-item" onClick={toggleTheme}>
            {theme === "light" ? "Dark theme" : "Light theme"}
          </div>
        </div>
        <div className="menu-phone" id="menu-open">
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="change theme"
              onClick={toggleTheme}
              style={{
                color: themeContext.theme === "dark" ? "white" : "black",
              }}
            >
              {themeContext.theme === "dark" ? (
                <NightsStayIcon />
              ) : (
                <Brightness5Icon />
              )}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
