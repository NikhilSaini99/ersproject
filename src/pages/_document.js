import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://www.esupplychainportal.com/SRA/bootstrap-gts.min.css" />
        <script src="https://www.esupplychainportal.com/SRA/gts-web.js" type="module" defer></script>
        <script src="https://www.esupplychainportal.com/SRA/gts-web-legacy.js" noModule defer></script>
      </Head>
      <body>
        <Main />
        <div id="chatbot-container"></div>
        <NextScript />
      </body>
    </Html>
  );
}
