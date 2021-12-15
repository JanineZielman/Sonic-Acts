// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

import { createResolver } from "next-slicezone/resolver";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
         <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
          <link rel="manifest" href="favicon/site.webmanifest"/>
          <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#000000"/>

          <link href="/fonts/style.css" rel="stylesheet"/>
          <link rel="preload" as="font" href="/fonts/Sonic-grime-open-01VF.woff2" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" as="font" href="/fonts/Sonic-grime-open-02VF.woff2" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" as="font" href="/fonts/Sonic-grime-open-03VF.woff2" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" as="font" href="/fonts/Sonic-Dirt-open-01VF.woff2" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" as="font" href="/fonts/Sonic-Dirt-open-02VF.woff2" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" as="font" href="/fonts/Sonic-Dirt-open-03VF.woff2" type="font/woff2" crossorigin="anonymous"></link>

          <link rel="preload" as="font" href="/fonts/SuisseIntl-Regular-WebM.woff2" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" as="font" href="/fonts/SuisseIntl-RegularItalic-WebM.woff2" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" as="font" href="/fonts/SuisseIntl-Medium-WebM.woff2" type="font/woff2" crossorigin="anonymous"></link>
          <link rel="preload" as="font" href="/fonts/SuisseIntl-MediumItalic-WebM.woff2" type="font/woff2" crossorigin="anonymous"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
