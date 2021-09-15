import { useEffect } from "react";
import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Script from "next/script";
import { useRouter } from "next/router";
import ThemeContextProvider from "../contexts/ThemeContext";
import * as gtag from "../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  const router = useRouter();

  useEffect(() => {
    AOS.init();
    const handleRouteChange = (url) => {
      NProgress.done();
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", () => NProgress.done());
    return () => {
      router.events.off("routeChangeStart", () => NProgress.start());
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeError", () => NProgress.done());
    };
  }, [router.events]);

  return (
    <>
      <Script strategy="beforeInteractive" src="/js/theme.js" />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* Enable analytics script only for production */}
      {isProduction && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            strategy="afterInteractive"
            id="ga-script"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}

      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
