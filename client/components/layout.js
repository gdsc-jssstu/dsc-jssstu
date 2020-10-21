import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

export const siteTitle = "DSC JSSSTU";

export default function Layout({ children, page }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        {/* <meta
          name="google-site-verification"
          content="DYJ8Xt0pxjjRZkt7ZtwlHBrrkWm9ModASzPrwZ1cZUg"
        /> */}
        <meta
          name="description"
          content="Developer Student Clubs - by Google Developers
                    JSS Science and Technology University, Mysore
                      Google Developers 2020"
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
        <meta property="og:url" content="https://dscjssstu.netlify.com/" />

        <link rel="manifest" href="/manifest.json" />
        {/* <!-- Favicons --> */}
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta itemProp="image" content="favicon.ico" />
        {/* <!-- <link rel="manifest" href="/manifest.json"> --> */}
        <title>{siteTitle}</title>
        {/* <!--     Fonts and icons     --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://d33wubrfki0l68.cloudfront.net/css/4e59bc3c17ed530a7568243c6b35d24837206cb6/assets/css/material-kit.css"
        />
        {/* <!-- Documentation extras --> */}
        <link
          rel="stylesheet"
          href="https://d33wubrfki0l68.cloudfront.net/css/11e83f5425f85b3ba34afeb0ac4aa30836c155c5/assets/assets-custom/demo.css"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://d33wubrfki0l68.cloudfront.net/css/5a9eaf87ddf5c77150ce3bf98105c9dd8a659c48/assets/assets-custom/css/footer.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity%402.0.11/dist/flickity.min.css"
        />
        <script src="https://unpkg.com/flickity%402.0.11/dist/flickity.pkgd.min.js"></script>
        <link
          href="https://fonts.googleapis.com/css?family=Be+Vietnam|Open+Sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
          integrity="sha256-PHcOkPmOshsMBC+vtJdVr5Mwb7r0LkSVJPlPrp/IMpU="
          crossOrigin="anonymous"
        />
      </Head>

      {/* <div id="preloader">
        <div id="status">
          <div className="showbox">
            <div className="loader">
              <svg className="circular" viewBox="25 25 50 50">
                <circle
                  className="path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> */}

      <nav
        className="navbar navbar-color-on-scroll navbar-transparent fixed-top  navbar-expand-lg "
        color-on-scroll="100"
        id="sectionsNav"
      >
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="/">
              <span id="gdg-logo" />
              <img
                src="https://d33wubrfki0l68.cloudfront.net/58f92715e27dd6332fc56c0acde5d772734ec17d/b31ed/assets/img/logos/dsc_header.png"
                height="30"
              />
            </a>
            <button
              style={{ color: "rgb(120, 120, 120)" }}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="dropdown nav-item">
                <Link href="/" data-page="index">
                  <a className="nav-link">
                    <span>
                      {page == "home" ? (
                        <>
                          <b id="blue_text">Home</b>
                        </>
                      ) : (
                        <>
                          <b id="header_text">Home</b>
                        </>
                      )}
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/events" data-page="events">
                  <a className="nav-link">
                    <span>
                      {page == "events" ? (
                        <>
                          <b id="blue_text">Events</b>
                        </>
                      ) : (
                        <>
                          <b id="header_text">Events</b>
                        </>
                      )}
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/resources" data-page="resources">
                  <a className="nav-link">
                    <span>
                      {page == "resources" ? (
                        <>
                          <b id="blue_text">Resources</b>
                        </>
                      ) : (
                        <>
                          <b id="header_text">Resources</b>
                        </>
                      )}
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" data-page="projects">
                  <a className="nav-link">
                    <span>
                      {page == "projects" ? (
                        <>
                          <b id="blue_text">Projects</b>
                        </>
                      ) : (
                        <>
                          <b id="header_text">Projects</b>
                        </>
                      )}
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team" data-page="team">
                  <a className="nav-link">
                    <span>
                      {page == "team" ? (
                        <>
                          <b id="blue_text">Team</b>
                        </>
                      ) : (
                        <>
                          <b id="header_text">Team</b>
                        </>
                      )}
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" data-page="blog">
                  <a className="nav-link">
                    <span>
                      {page == "blog" ? (
                        <>
                          <b id="blue_text">Blog</b>
                        </>
                      ) : (
                        <>
                          <b id="header_text">Blog</b>
                        </>
                      )}
                    </span>
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/about" data-page="about" className="nav-link">
                  <span>
                    <b id="header_text">About</b>
                  </span>
                </Link>
              </li> */}

              <li className="nav-item">
                <a href="#!" id="bg-toggle" className="nav-link">
                  <span className="text-toggle">
                    <b id="font-weight-bold header_text">Dark Mode</b>
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  target="blank"
                  className="nav-link"
                  href="https://forms.gle/fhsA3NQwyLvDyPH17"
                >
                  <span className="btn" id="joinbtn">
                    <b id="header_text">Sign Up</b>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div name="top" id="top">
        {children}
      </div>

      <div id="footer">
        <a href="#top" id="top-button" className="top">
          <i className="material-icons" style={{ fontSize: "30px" }}>
            keyboard_arrow_up
          </i>
        </a>
        <div className="container" style={{ paddingTop: "20px" }}>
          <div className="row">
            <div className="offset-md-1 col-md-5">
              <div className="share-social">
                <span>
                  Keep In Touch
                  <a
                    id="social_button"
                    href="https://www.instagram.com/dscjssstu/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                  <a>&nbsp;</a>

                  <a
                    id="social_button"
                    href="https://www.linkedin.com/company/dsc-jssstu"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a>&nbsp;</a>

                  <a
                    id="social_button"
                    href="https://github.com/dsc-jssstu"
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                  </a>
                  <a>&nbsp;</a>

                  <a>&nbsp;</a>
                </span>
              </div>
            </div>
            <div className="offset-md-1 col-md-5">
              <div className="share-social">
                <span>
                  <a href="mailto:dsc.jssstu@gmail.com">
                    <h4>
                      Email Us :<b id="blue_text">dsc.jssstu@gmail.com</b>
                    </h4>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4">
          <div className="row">
            <div className="offset-md-1 col-md-5 col-sm-12 footer-details">
              <span>
                <b>ABOUT</b>
              </span>
              <p>
                <a
                  href="https://developers.google.com/"
                  id="details_redirect"
                  target="_blank"
                >
                  Google Developers
                </a>
                <br />
                <a href="team.html" id="details_redirect">
                  Meet the Team
                </a>
                <br />
              </p>
            </div>
            <div className="offset-md-1 col-md-5 col-sm-12 footer-details">
              <span>
                <b>OTHER LINKS</b>
              </span>
              <p>
                <a href="#!" id="details_redirect">
                  Call for Speakers
                </a>
                <br />
                <a
                  href="https://docs.google.com/document/d/131WS_5-IBXdvj_mfNogbSoc5fOBfJx50k2YmHrXkMt4/edit?usp=sharing"
                  id="details_redirect"
                  target="_blank"
                >
                  Community Guidelines
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light" style={{ padding: "15px" }}>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/07d038c64e97a90ebc7fd3be0be5e9884f4bd005/9fd8e/assets/img/logos/dsc_linear.png"
                  alt="dsc-logo"
                />
              </div>
              <div
                className="col-md-6 copyright text-dark"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: "14px",
                }}
              >
                © 2020 <b>DSC JSSSTU</b> <span className="hide-bar"> | </span>
                <a id="details_redirect" href="#">
                  <b>
                    Developed with{" "}
                    <svg className="heart" viewBox="0 0 32 29.6">
                      <path
                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                                                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                      />
                    </svg>
                  </b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--   Core JS Files   --> */}
      <script src="https://d33wubrfki0l68.cloudfront.net/bundles/e6369747b6375000da3b7fe62082ec5ea502ba90.js"></script>
      {/* <!-- Material Kit Core initialisations of plugins and Bootstrap Material Design Library --> */}
      <script src="https://d33wubrfki0l68.cloudfront.net/bundles/c37fd2105a7083bdcd78dd8356e36b8bdadfacbe.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
        integrity="sha256-z6FznuNG1jo9PP3/jBjL6P3tvLMtSwiVAowZPOgo56U="
        crossOrigin="anonymous"
      ></script>

      {/* <!-- <script src="assets/assets-custom/index.js"></script> --> */}
      <script src="https://d33wubrfki0l68.cloudfront.net/js/048113a4571287def76765b91f7f01eb69c92e49/assets/assets-custom/loaderanddarkmode.js"></script>

      <script>
        {/* // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker
        //         .register('/sw.js')
        //         .then(function () { console.log("Service Worker Registered"); });
        // } */}
        new WOW().init();
      </script>
    </div>
  );
}
