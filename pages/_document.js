import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="theme-color" content="#141414" />
          <meta name="robots" content="all" />

          <meta name="application-name" content="DSC JSSSTU" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="DSC JSSSTU" />
          <meta
            name="description"
            content="Developer Student Clubs JSSSTU - powered by Google Developers
                      JSS Science and Technology University, Mysore"
          />
          <meta
            name="keywords"
            content="dsc,dscindia,dscjssstu,dscjssmysore,jssstu,sjce"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="author" content="DSC JSSSTU" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="DSC JSSSTU" />
          <meta property="og:site_name" content="DSC JSSSTU" />
          <meta
            property="og:description"
            content="Developer Student Clubs JSSSTU - powered by Google Developers
                      JSS Science and Technology University, Mysore"
          />
          <meta property="og:image" content="favicon.ico" />
          <meta property="og:url" content="https://dscjssstu.in/" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://dscjssstu.in/" />
          <meta name="twitter:title" content="DSC JSSSTU" />
          <meta
            name="twitter:description"
            content="Developer Student Clubs JSSSTU - powered by Google Developers
                      JSS Science and Technology University, Mysore"
          />
          <meta
            name="twitter:image"
            content="/icons/favicons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@dscjssstu" />

          <meta
            name="google-site-verification"
            content="p35m3CR4qO-DF23C0rnyNNBFbghDz6vHTl6s6bwy7v0"
          />

          <link rel="manifest" href="/manifest.json" />

          {/* <!-- Favicons --> */}
          <link rel="icon" href="/icons/favicons/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicons/favicon-32x32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicons/favicon-16x16.png"
          />
          <meta itemProp="image" content="favicon.ico" />
        </Head>
        <body>
          <script src="/js/theme.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
