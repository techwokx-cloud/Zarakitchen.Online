import Image from 'next/image';
import Link from 'next/link';
import type { IconType } from 'react-icons';
import { LuChevronRight, LuClock, LuMail, LuPhone } from 'react-icons/lu';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import InstallButton from './InstallButton';
import { navLinks, site } from '../data/site';

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  x: FaXTwitter,
};

const footerLinks = [
  ...navLinks.slice(0, 2),
  { label: 'About Us', href: '/about' },
  ...navLinks.slice(3),
];

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-2.5 text-[17px] font-bold leading-tight text-white">{children}</h2>;
}

export default function Footer() {
  const cell = 'px-6 py-6 lg:pb-3 lg:pl-[27px] lg:pr-3 lg:pt-[18px]';
  const divider = 'lg:border-l lg:border-white/25';

  return (
    <footer className="bg-gradient-to-b from-[#e2030a] to-[#c80206] text-white">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 sm:grid-cols-2 lg:min-h-[162px] lg:items-stretch lg:grid-cols-[307fr_200fr_303fr_230fr_240fr_256fr] ">
        {/* Brand */}
        <div className={`${cell} flex flex-col items-center justify-center text-center lg:py-4`}>
          <Image
            src="/logo/zara-kitchen-white-stacked.png"
            alt="Zara Kitchen"
            width={740}
            height={289}
            className="h-auto w-[210px] lg:w-[236px]"
          />
          <p className="mt-2 text-base italic text-white/95">{site.tagline}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer" className={`${cell} ${divider} lg:self-stretch`}>
          <Heading>Quick Links</Heading>
          <ul className="space-y-0 text-[14.5px] leading-[18px]">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="group flex items-center gap-2 hover:underline">
                  <LuChevronRight className="h-4 w-4 shrink-0" aria-hidden />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className={`${cell} ${divider} lg:self-stretch`}>
          <Heading>Contact Us</Heading>
          <ul className="space-y-[9px] text-[14.5px] leading-[18px]">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:underline">
                <LuMail className="h-5 w-5 shrink-0" aria-hidden />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden />
                {site.whatsapp.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <LuPhone className="h-5 w-5 shrink-0" aria-hidden />
              <span className="whitespace-nowrap">
                Phone{' '}
                {site.phones.map((p, i) => (
                  <span key={p.href}>
                    {i > 0 && ' / '}
                    <a href={p.href} className="hover:underline">{p.display}</a>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className={`${cell} ${divider} lg:self-stretch`}>
          <Heading>Opening Hours</Heading>
          <div className="flex items-start gap-3 whitespace-nowrap text-[14.5px]">
            <LuClock className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <ul className="space-y-1.5 leading-[18px]">
              {site.hours.map((h) => (
                <li key={h.days}>{h.days}: {h.time}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* PWA */}
        <div className={`${cell} ${divider} lg:self-stretch`}>
          <Heading>Download App</Heading>
          <InstallButton />
        </div>

        {/* Social */}
        <div className={`${cell} ${divider} lg:self-stretch`}>
          <Heading>Follow Us</Heading>
          <ul className="flex gap-[6px]">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.id];
              const circle = 'flex h-9 w-9 items-center justify-center rounded-full bg-white text-zara-red';
              return (
                <li key={s.id}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`${circle} transition hover:scale-105`}>
                      <Icon className="h-[18px] w-[18px]" aria-hidden />
                    </a>
                  ) : (
                    <span className={circle} role="img" aria-label={s.label}>
                      <Icon className="h-[18px] w-[18px]" aria-hidden />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="relative mt-3 -rotate-[4deg] whitespace-nowrap font-script text-[19px] leading-none text-white">
            Download. Order. Enjoy!
            <svg viewBox="0 0 200 8" className="mt-1 h-2 w-[150px]" aria-hidden>
              <path d="M2 6 C 50 1, 120 1, 198 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
}
