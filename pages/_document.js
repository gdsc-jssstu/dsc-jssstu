import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="theme-color" content="#141414" />
        <meta name="robots" content="all" />

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
        <meta property="og:url" content="https://dsc-jssstu.github.io/" />

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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
