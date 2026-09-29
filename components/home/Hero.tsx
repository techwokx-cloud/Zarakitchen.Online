import Image from 'next/image';

function OutlineHeart({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 44" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 40 C 8 28, 3 19, 6 12 C 9 5, 19 4, 24 13 C 29 2, 40 5, 42 13 C 44 21, 36 30, 24 40 Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section aria-label="Welcome" className="bg-white">
      <div className="relative mx-auto max-w-[1920px] md:aspect-[1536/447]">
        {/* Copy */}
        <div className="relative z-10 px-5 pb-2 pt-8 md:absolute md:inset-0 md:px-0 md:pb-0 md:pt-0">
          <p className="text-[13px] font-semibold tracking-[0.12em] text-neutral-900 sm:text-[15px] md:absolute md:left-[6.95vw] md:top-[1.85vw] md:text-[1.29vw]">
            Authentic Ghanaian &amp; Continental Cuisine
          </p>

          <h1 className="mt-3 font-script text-[16vw] leading-[0.95] tracking-[-0.01em] text-zara-red [-webkit-text-stroke:0.02em_currentColor] sm:text-[13vw] md:absolute md:left-[3.5vw] md:top-[3.5vw] md:mt-0 md:text-[7.6vw]">
            Zara Kitchen
          </h1>

          <p className="flex items-center gap-[0.15em] font-script text-[11.5vw] leading-none text-black sm:text-[9vw] md:absolute md:left-[3.6vw] md:top-[10vw] md:text-[4.95vw]">
            Made with Love
            <OutlineHeart className="ml-[0.1em] h-[0.7em] w-[0.75em] -translate-y-[0.12em] text-zara-red" />
          </p>

          <p className="mt-2 text-[17px] font-medium italic tracking-[0.14em] text-neutral-900 sm:text-[20px] md:absolute md:left-[5.1vw] md:top-[15vw] md:mt-0 md:text-[1.5vw]">
            Fresh. Tasty. Satisfying.
          </p>
        </div>

        {/* Photo (contains the “Delicious Meals Made for You” brush badge) */}
        <div className="relative mt-4 aspect-[4/3] w-full md:absolute md:inset-0 md:mt-0 md:aspect-auto">
          <Image
            src="/images/hero/hero.jpg"
            alt="Smoky jollof rice with grilled chicken, fried plantain and fresh salad. Delicious meals made for you."
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_50%] md:object-center"
          />
        </div>
      </div>
    </section>
  );
}
