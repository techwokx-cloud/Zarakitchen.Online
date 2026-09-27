import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23DC2626'>Z</text></svg>" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#DC2626" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
