import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#E2030A" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
