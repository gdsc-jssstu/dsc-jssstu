import { useEffect, useState } from "react";
import { Button, Snackbar, Slide } from "@material-ui/core";
import { useDarkMode } from "./themeMode";
import Head from "next/head";
import AOS from "aos";
import Nav from "./nav";
const FontFaceObserver = require("fontfaceobserver");

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

    window.addEventListener("scroll", function () {
      AOS.refresh();
    });
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="theme-color" content="#141414" />
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Developer Student Clubs JSSSTU - powered by Google Developers
                    JSS Science and Technology University, Mysore"
        />
        <meta
          name="keywords"
          content="dsc,dscindia,dscjssstu,dscjssmysore,jssstu"
        />
        <meta name="author" content="DSC JSSSTU" />
        <meta property="og:title" content="DSC JSSSTU" />
        <meta
          property="og:description"
          content="Developer Student Clubs - by Google Developers
                    JSS Science and Technology University, Mysore"
        />
        <meta property="og:image" content="favicon.ico" />
        <meta property="og:url" content="https://dsc-web.vercel.app/" />

        <link rel="manifest" href="/manifest.json" />

        {/* <!-- Favicons --> */}
        <link rel="icon" href="icons/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/favicons/favicon-16x16.png"
        />
        <meta itemProp="image" content="favicon.ico" />

        <title>{siteTitle}</title>

        {/* <!--     Links to css files     --> */}
        <link rel="stylesheet" href="css/index.css" />
        <link rel="stylesheet" href="css/events.css" />
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
      </div>
    </div>
  );
}
