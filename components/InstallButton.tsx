import { useEffect, useState } from 'react';
import { LuSmartphone } from 'react-icons/lu';

// Chromium fires this before it will show its own install UI.
type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export default function InstallButton() {
  const [deferred, setDeferred] = useState<InstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [hint, setHint] = useState('');

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as InstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    if (window.matchMedia('(display-mode: standalone)').matches) setInstalled(true);
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const onClick = async () => {
    if (deferred) {
      await deferred.prompt();
      const { outcome } = await deferred.userChoice;
      if (outcome === 'accepted') setInstalled(true);
      setDeferred(null);
      return;
    }
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    setHint(
      ios
        ? 'Tap Share, then “Add to Home Screen”.'
        : 'Use your browser menu and choose “Install app”.'
    );
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={installed}
      className="flex w-full min-w-[190px] max-w-[196px] items-center gap-3 rounded-2xl bg-zara-yellow px-3.5 py-2.5 text-left text-black shadow-[0_2px_6px_rgba(0,0,0,0.18)] transition hover:brightness-95 disabled:cursor-default disabled:opacity-90"
    >
      <LuSmartphone className="h-9 w-9 shrink-0" strokeWidth={1.6} aria-hidden />
      <span className="block leading-tight">
        <span className="block whitespace-nowrap text-[19px] font-extrabold">{installed ? 'App installed' : 'Install PWA'}</span>
        <span className="mt-0.5 block text-[10px] leading-snug">
          {hint || 'Order faster. Save favourites.'}
        </span>
      </span>
    </button>
  );
}
