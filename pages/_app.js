import { useEffect } from "react";
import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import ThemeContextProvider from "../contexts/ThemeContext";

NProgress.configure({ showSpinner: false });;
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
