import crypto from "crypto";
import Document, { Html, Head, Main, NextScript } from "next/document";

const isProduction = process.env.NODE_ENV === "production";

const cspHashOf = (text) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return `'sha256-${hash.digest("base64")}'`;
};
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    let csp = `default-src 'self'; script-src 'self' ${cspHashOf(
      NextScript.getInlineScriptSource(this.props)
    )}`;
    if (!isProduction) {
      csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self'; script-src 'unsafe-eval' 'self' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props)
      )}`;
    }

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Content-Security-Policy" content={csp} />

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
                      JSS Science and Technology University - SJCE, Mysuru 2021"
          />
          <meta
            name="keywords"
            content="dsc jssstu,dscjssstu,dsc jss mysore,dsc jss mysuru,dsc jss,dsc sjce,dsc jce,dsc jc,dsc mysore,dsc mysuru,jssstu,sjce,jss mysore,jss mysuru,dsc,dscindia,dsc india,gdsc,gdsc jssstu,gdsc sjce,gdsc jc,gdsc jce,gdsc jss,gdsc mysore,gdsc mysuru"
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
                      JSS Science and Technology University - SJCE, Mysuru 2021"
          />
          <meta property="og:image" content="favicon.ico" />
          <meta property="og:url" content="https://dscjssstu.in/" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://dscjssstu.in/" />
          <meta name="twitter:title" content="DSC JSSSTU" />
          <meta
            name="twitter:description"
            content="Developer Student Clubs JSSSTU - powered by Google Developers
                      JSS Science and Technology University - SJCE, Mysuru 2021"
          />
          <meta
            name="twitter:image"
            content="/icons/favicons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@dscjssstu" />

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

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
