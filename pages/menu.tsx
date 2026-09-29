import Head from 'next/head';
import { useRouter } from 'next/router';
import MenuShowcase from '../components/menu/MenuShowcase';
import { findShowcase } from '../data/menu-showcase';

export default function Menu() {
  const { query } = useRouter();
  const raw = query.category;
  const active = findShowcase(Array.isArray(raw) ? raw[0] : raw);

  return (
    <>
      <Head>
        <title>{`${active.name} Menu — Zara Kitchen`}</title>
        <meta
          name="description"
          content={`${active.name} at Zara Kitchen. ${active.tagline} Authentic Ghanaian & Continental cuisine, made with love.`}
        />
      </Head>
      <MenuShowcase active={active} />
    </>
  );
}
