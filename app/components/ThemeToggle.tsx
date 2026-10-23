'use client';

import { useSyncExternalStore } from 'react';

function currentTheme(): 'light' | 'dark' {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  media.addEventListener('change', onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener('change', onChange);
  };
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => 'light' as const);
  const next = theme === 'dark' ? 'light' : 'dark';

  function toggle() {
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      className={`group relative grid h-9 w-9 place-items-center border-2 border-ink transition-colors hover:bg-cobalt hover:text-bone ${className}`}
    >
      {/* A half-filled disc: reads as "light/dark" without a sun or moon cliché. */}
      <span className="relative block h-3.5 w-3.5 overflow-hidden rounded-full border border-ink">
        <span
          className={`absolute inset-y-0 left-0 w-1/2 bg-ink transition-transform duration-500 ease-out ${
            theme === 'dark' ? 'translate-x-full' : 'translate-x-0'
          }`}
        />
      </span>
    </button>
  );
}
