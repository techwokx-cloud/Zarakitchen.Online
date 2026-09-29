import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../../data/site';

export default function CategoryGrid() {
  return (
    <section aria-labelledby="menu-categories" className="bg-white">
      <h2 id="menu-categories" className="sr-only">Browse our menu</h2>
      <ul className="mx-auto grid max-w-[1920px] grid-cols-2 gap-x-2 gap-y-3 px-5 pb-4 pt-3 sm:grid-cols-4 lg:grid-cols-8 lg:gap-y-px lg:px-8 lg:pb-3 lg:pt-1.5">
        {categories.map((c) => (
          <li key={c.name}>
            <Link
              href={{ pathname: '/menu', query: { category: c.slug } }}
              className="group flex flex-col items-center text-center"
            >
              <Image
                src={c.image}
                alt=""
                width={168}
                height={88}
                className="h-auto w-full max-w-[168px] transition-transform duration-200 group-hover:scale-[1.04]"
              />
              <span className="text-[15px] font-bold leading-[1.3] text-neutral-900 xl:text-[16.5px]">
                {c.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
