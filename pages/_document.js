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
