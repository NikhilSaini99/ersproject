import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
  
      </Head>
      <body>
        <Main />
        <div id="chatbot-container"></div>
        <NextScript />
        <Script id="chatbot-containers">
          {`
          <script type="module" src="http://102.36.181.13:5500/dist/chat-bot.bundle.js" defer>
          </script> `}
        </Script>
      </body>
    </Html>
  );
}
