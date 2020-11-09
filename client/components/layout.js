import { useEffect, useState } from "react";
import { Button, Snackbar, Slide } from "@material-ui/core";
import { useDarkMode } from "./themeMode";
import Head from "next/head";
import AOS from "aos";
import Nav from "./nav";
const FontFaceObserver = require("fontfaceobserver");
import MobileBottomNav from "./MobileBottomNav";

export const siteTitle = "DSC JSSSTU";

export default function Layout({ children, page, headerRef }) {
  const [theme, toggleTheme] = useDarkMode();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleNewVersion = (event) => {
    window.workbox.addEventListener("controlling", (event) => {
      window.location.reload();
    });

    window.workbox.messageSW({ type: "SKIP_WAITING" });
  };

  const Fonts = () => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap";
    link.rel = "stylesheet";

    document.head.appendChild(link);

    const openSans = new FontFaceObserver("Open Sans");

    openSans.load().then(() => {
      document.documentElement.classList.add("open-sans");
    });
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      window.workbox.addEventListener("waiting", handleClick);
      window.workbox.addEventListener("externalwaiting", handleClick);
    }

    Fonts();

    window.addEventListener("scroll", AOS.refresh(), { passive: true });
    return () =>
      window.removeEventListener("scroll", AOS.refresh(), { passive: true });
  }, []);

  return (
    <div>
      <Head>
        <title>{siteTitle}</title>

        {/* <!--     Links to css files     --> */}
        <link rel="stylesheet" href="css/index.css" />
        <link
          rel="preload"
          href="css/events.css"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <link rel="stylesheet" href="css/svg.css" />
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

      <div className={theme === "dark" ? "dark" : ""}>
        <Nav
          page={page}
          headerRef={headerRef}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <div name="top" id="top">
          {children}
        </div>

        <MobileBottomNav page={page} />
      </div>
    </div>
  );
}
