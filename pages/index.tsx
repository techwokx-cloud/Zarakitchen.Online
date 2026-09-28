import Head from 'next/head';
import Hero from '../components/home/Hero';
import CategoryGrid from '../components/home/CategoryGrid';
import OrderOptions from '../components/home/OrderOptions';
import { site } from '../data/site';

export default function Home() {
  const title = 'Zara Kitchen — Authentic Ghanaian & Continental Cuisine';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={site.description} />
        <link rel="canonical" href={site.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:url" content={site.url} />
        <meta property="og:image" content={`${site.url}/images/hero/hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Hero />
      <CategoryGrid />
      <OrderOptions />
    </>
  );
}
