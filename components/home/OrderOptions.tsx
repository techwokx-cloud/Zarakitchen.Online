import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { LuCreditCard, LuMonitor, LuPackage, LuShoppingCart, LuSmartphone } from 'react-icons/lu';
import { orderChannels, paymentMethods } from '../../data/site';

const box = 'rounded-[18px] border-[1.5px] border-zara-blush-border bg-zara-blush';
const cellDivider = 'border-zara-blush-border [&:not(:first-child)]:border-l';

function Cell({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  const base = `flex flex-col items-center justify-center text-center ${className}`;
  if (!href) return <div className={base}>{children}</div>;
  const external = /^https?:/.test(href);
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} transition hover:bg-white/60`}>
      {children}
    </a>
  ) : (
    <Link href={href} className={`${base} transition hover:bg-white/60`}>
      {children}
    </Link>
  );
}

function ChannelIcon({ id }: { id: string }) {
  switch (id) {
    case 'website':
      return (
        <span className="relative block h-8 w-8 text-zara-red">
          <LuMonitor className="h-8 w-8" strokeWidth={1.6} aria-hidden />
          <LuShoppingCart className="absolute left-1/2 top-[42%] h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2" strokeWidth={2} aria-hidden />
        </span>
      );
    case 'whatsapp':
      return <FaWhatsapp className="h-8 w-8 text-neutral-800" aria-hidden />;
    case 'jumia':
      return <Image src="/images/platforms/jumia.png" alt="" width={46} height={42} className="h-8 w-auto" />;
    case 'ubereats':
      return <Image src="/images/platforms/uber-eats.png" alt="" width={66} height={36} className="h-7 w-auto" />;
    case 'bolt':
      return <Image src="/images/platforms/bolt-food.png" alt="" width={70} height={36} className="h-7 w-auto" />;
    case 'hubtel':
      return (
        <span className="flex h-7 items-center gap-1">
          <Image src="/images/platforms/hubtel.png" alt="" width={44} height={42} className="h-[22px] w-auto" />
          <span className="text-[15px] font-extrabold tracking-tight text-neutral-900">Hubtel</span>
        </span>
      );
    default:
      return null;
  }
}

function PaymentIcon({ id }: { id: string }) {
  const cls = 'h-[22px] w-[22px] text-zara-red';
  if (id === 'momo') return <LuSmartphone className={cls} strokeWidth={1.7} aria-hidden />;
  if (id === 'card') return <LuCreditCard className={cls} strokeWidth={1.7} aria-hidden />;
  return <LuPackage className={cls} strokeWidth={1.7} aria-hidden />;
}

export default function OrderOptions() {
  return (
    <section aria-label="How to order" className="bg-white">
      <div className="mx-auto grid max-w-[1920px] gap-3 px-5 pb-4 sm:px-6 xl:grid-cols-[1059fr_400fr] xl:px-8">
        {/* Order your way */}
        <div className={`${box} grid items-center gap-y-4 py-3 lg:grid-cols-[auto_1fr] lg:py-0`}>
          <div className="px-6 lg:px-[30px]">
            <h2 className="whitespace-nowrap text-[26px] font-extrabold leading-tight text-zara-red lg:text-[29px]">Order Your Way</h2>
            <p className="mt-0.5 text-base text-neutral-900">Fast&nbsp; •&nbsp; Easy&nbsp; •&nbsp; Convenient</p>
          </div>
          <ul className="grid grid-cols-3 lg:grid-cols-6 lg:self-stretch">
            {orderChannels.map((c) => (
              <li key={c.id} className={`${cellDivider} py-1 max-lg:[&:nth-child(4)]:border-l-0`}>
                <Cell href={c.href} className="h-full min-h-[66px] gap-0.5 px-2">
                  <ChannelIcon id={c.id} />
                  <span
                    className={`text-[14px] font-bold leading-tight ${c.id === 'jumia' ? 'text-zara-red' : 'text-neutral-900'}`}
                  >
                    {c.id === 'hubtel' ? 'Hubtel' : c.label.map((l, i) => (
                      <span key={l} className={i > 0 ? 'block text-[13px] font-normal' : 'block'}>{l}</span>
                    ))}
                  </span>
                </Cell>
              </li>
            ))}
          </ul>
        </div>

        {/* Payments */}
        <div className={`${box} px-3 py-1`}>
          <h2 className="mb-0 text-center text-[15px] font-extrabold leading-tight text-zara-red">All Payments Accepted</h2>
          <ul className="grid grid-cols-3">
            {paymentMethods.map((p) => (
              <li key={p.id} className={`${cellDivider} px-1`}>
                <div className="flex flex-col items-center gap-0.5 text-center">
                  <PaymentIcon id={p.id} />
                  <span className="text-[12.5px] font-bold leading-[1.15] text-zara-red">{p.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
