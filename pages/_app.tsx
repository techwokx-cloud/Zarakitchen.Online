import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/500-italic.css';
import '@fontsource/kaushan-script/400.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // Service worker makes the site installable as an app (PWA). Production only, so dev HMR isn't cached.
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
