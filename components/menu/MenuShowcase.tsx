import Image from 'next/image';
import Link from 'next/link';
import type { IconType } from 'react-icons';
import {
  LuCakeSlice, LuChefHat, LuChevronRight, LuCoffee, LuCookingPot, LuCroissant, LuDrumstick,
  LuFlame, LuLeaf, LuSalad, LuSandwich, LuSoup, LuStar, LuUtensils, LuUtensilsCrossed, LuWheat,
} from 'react-icons/lu';
import { dishesFor, showcase, type ShowcaseCategory } from '../../data/menu-showcase';

const icons: Record<string, IconType> = {
  breakfast: LuUtensils,
  'hot-breakfast': LuCoffee,
  bakery: LuCroissant,
  appetisers: LuSandwich,
  salads: LuLeaf,
  'light-meals': LuSalad,
  'on-the-grill': LuFlame,
  pastas: LuWheat,
  chinese: LuUtensilsCrossed,
  indian: LuCookingPot,
  'rice-dishes': LuSoup,
  ghanaian: LuStar,
  'from-the-grill': LuDrumstick,
  soups: LuSoup,
  'extra-dishes': LuChefHat,
  desserts: LuCakeSlice,
};

function Badge({ slug, size }: { slug: string; size: 'sm' | 'lg' }) {
  const Icon = icons[slug] ?? LuUtensils;
  const box = size === 'lg' ? 'h-[60px] w-[60px]' : 'h-[38px] w-[38px]';
  const ico = size === 'lg' ? 'h-[30px] w-[30px]' : 'h-[19px] w-[19px]';
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full bg-zara-red text-white ${box}`}>
      <Icon className={ico} strokeWidth={2.2} aria-hidden />
    </span>
  );
}

function Sidebar({ active }: { active: ShowcaseCategory }) {
  return (
    <nav
      aria-label="Menu categories"
      className="rounded-[14px] bg-[#fdf8f8] p-2 max-lg:overflow-x-auto lg:px-[6px] lg:py-[14px]"
    >
      <ul className="flex gap-2 lg:block lg:space-y-0">
        {showcase.map((c) => {
          const on = c.slug === active.slug;
          return (
            <li key={c.slug} className="max-lg:shrink-0">
              <Link
                href={{ pathname: '/menu', query: { category: c.slug } }}
                scroll={false}
                aria-current={on ? 'true' : undefined}
                className={`flex items-center gap-[19px] rounded-[10px] px-3.5 transition-colors max-lg:h-12 max-lg:whitespace-nowrap max-lg:border max-lg:border-zara-blush-border lg:h-[43px] lg:px-[14px] ${
                  on ? 'bg-[#fde8e8] font-bold text-zara-red' : 'text-neutral-900 hover:bg-[#fdf0f0]'
                }`}
              >
                <Badge slug={c.slug} size="sm" />
                <span className="flex-1 text-[17px] font-semibold leading-none lg:font-medium">
                  <span className={on ? 'font-bold' : ''}>{c.name}</span>
                </span>
                <LuChevronRight
                  className={`hidden h-5 w-5 shrink-0 lg:block ${on ? 'text-zara-red' : 'text-neutral-700'}`}
                  strokeWidth={2.2}
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Gallery({ c }: { c: ShowcaseCategory }) {
  if (c.photos.length) {
    return (
      <ul className="grid grid-cols-2 gap-3 sm:gap-[19px] md:grid-cols-3">
        {c.photos.map((p) => (
          <li key={p.src} className="overflow-hidden rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
            <Image src={p.src} alt={p.alt} width={231} height={231} className="aspect-square h-auto w-full object-cover" />
          </li>
        ))}
      </ul>
    );
  }

  const dishes = dishesFor(c);
  if (!dishes.length) {
    return <p className="rounded-xl bg-[#fdf8f8] p-6 text-neutral-700">Photos for this category are coming soon.</p>;
  }
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[19px] md:grid-cols-3">
      {dishes.map((d) => (
        <li key={d.id} className="flex flex-col rounded-[10px] border border-zara-blush-border bg-white p-4">
          <h3 className="text-[17px] font-bold leading-snug text-neutral-900">{d.name}</h3>
          <p className="mt-1 flex-1 text-[14px] leading-snug text-neutral-600">{d.description}</p>
          <p className="mt-3 text-lg font-extrabold text-zara-red">₵{d.price.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
}

function Promo({ c }: { c: ShowcaseCategory }) {
  const words = c.promoTitle.split(' ');
  return (
    <aside
      aria-label={c.promoTitle}
      className="relative flex min-h-[620px] flex-col items-center overflow-hidden rounded-[18px] bg-gradient-to-b from-[#fde4e4] to-[#fdf1f0] px-6 pt-7 text-center xl:h-[675px] xl:min-h-0"
    >
      <LuSoup className="h-[72px] w-[72px] text-zara-red" strokeWidth={1.5} aria-hidden />
      <p className="mt-4 font-script text-[46px] leading-[0.98] text-zara-red [-webkit-text-stroke:0.02em_currentColor]">
        {words.map((w) => (
          <span key={w} className="block">{w}</span>
        ))}
      </p>
      <p className="mt-4 max-w-[230px] text-[19px] leading-[1.3] text-neutral-800">{c.promoText}</p>
      <div className="relative mt-5 h-px w-full max-w-[238px] bg-zara-red" aria-hidden>
        <span className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zara-red" />
      </div>
      <p className="mt-6 -rotate-[10deg] font-script text-[27px] leading-[1.1] text-neutral-900">
        Good Food,
        <br />
        Good Mood <span className="text-zara-red" aria-hidden>♡</span>
      </p>
      {c.promoImage && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[210px] [mask-image:linear-gradient(to_bottom,transparent,black_30%)]">
          <Image src={c.promoImage} alt="" width={293} height={226} className="h-full w-full object-cover object-top" />
        </div>
      )}
    </aside>
  );
}

export default function MenuShowcase({ active }: { active: ShowcaseCategory }) {
  return (
    <section aria-labelledby="menu-title" className="px-4 pb-16 pt-6 sm:px-8 xl:px-[58px] xl:pt-[22px]">
      <div className="mx-auto max-w-[1436px] rounded-[26px] bg-white p-3 shadow-[0_10px_44px_rgba(0,0,0,0.10)] sm:p-[14px]">
        <div className="grid gap-6 lg:grid-cols-[290px_1fr] lg:gap-[27px] xl:grid-cols-[313px_1fr_294px] xl:pr-[7px]">
          <Sidebar active={active} />

          <div className="min-w-0 lg:pt-[14px]">
            <header className="mb-6 flex items-center gap-[19px] lg:mb-[36px]">
              <Badge slug={active.slug} size="lg" />
              <div>
                <h1 id="menu-title" className="text-[32px] font-extrabold leading-none text-zara-red sm:text-[40px]">
                  {active.name}
                </h1>
                <p className="mt-1.5 text-[15px] text-neutral-600 sm:text-[17px]">{active.tagline}</p>
              </div>
            </header>
            <Gallery c={active} />
          </div>

          <div className="lg:col-span-2 xl:col-span-1 xl:pt-[14px]">
            <Promo c={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
