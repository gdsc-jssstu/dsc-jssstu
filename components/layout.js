import { useEffect } from "react";
import { useDarkMode } from "./themeMode";
import Head from "next/head";
import AOS from "aos";
import Nav from "./nav";
import MobileBottomNav from "./MobileBottomNav";

export const siteTitle = "GDSC JSSSTU";

export default function Layout({ children, page, headerRef }) {
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    window.addEventListener("scroll", AOS.refresh(), { passive: true });
    return () =>
      window.removeEventListener("scroll", AOS.refresh(), { passive: true });
  }, []);

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <title>{siteTitle}</title>

        {/* <!--     Links to css files     --> */}
        <link rel="stylesheet" href="css/index.css" />
        <link
          rel="preload"
          href="css/events.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link rel="stylesheet" href="css/svg.css" />
      </Head>

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
