import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LuMenu, LuShoppingCart, LuX } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { navLinks, site } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-[78px] max-w-[1920px] items-center justify-between gap-6 pl-5 pr-5 lg:pl-12 lg:pr-10">
        <Link href="/" className="shrink-0" aria-label="Zara Kitchen — home">
          <Image
            src="/logo/zara-kitchen-red.png"
            alt="Zara Kitchen"
            width={955}
            height={228}
            priority
            className="h-auto w-[190px] sm:w-[240px] xl:w-[302px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 justify-center lg:flex lg:pr-10">
          <ul className="flex items-center gap-[clamp(1.5rem,3.3vw,3.4rem)]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`relative py-2 text-[17px] font-medium transition-colors hover:text-zara-red ${
                    isActive(l.href)
                      ? "text-zara-red after:absolute after:-inset-x-3 after:-bottom-px after:h-[3px] after:bg-zara-red after:content-['']"
                      : 'text-neutral-900'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-[21px] lg:flex">
          <Link
            href="/menu"
            className="inline-flex h-[47px] w-[171px] items-center justify-center gap-2.5 rounded-lg bg-zara-red text-[16.5px] font-semibold text-white transition-colors hover:bg-zara-red-dark"
          >
            <LuShoppingCart className="h-[22px] w-[22px]" aria-hidden />
            Order Online
          </Link>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[47px] w-[188px] items-center justify-center gap-2.5 rounded-lg bg-zara-green text-[16.5px] font-semibold text-white transition-colors hover:bg-zara-green-dark"
          >
            <FaWhatsapp className="h-6 w-6" aria-hidden />
            WhatsApp Order
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-zara-red lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX className="h-7 w-7" /> : <LuMenu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-neutral-100 bg-white px-5 pb-5 lg:hidden">
          <ul className="divide-y divide-neutral-100">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-lg font-medium ${isActive(l.href) ? 'text-zara-red' : 'text-neutral-900'}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link
              href="/menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-zara-red font-medium text-white"
            >
              <LuShoppingCart className="h-5 w-5" aria-hidden /> Order Online
            </Link>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-zara-green font-medium text-white"
            >
              <FaWhatsapp className="h-6 w-6" aria-hidden /> WhatsApp Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
