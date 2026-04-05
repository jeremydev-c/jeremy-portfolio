'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextValue {
  theme: Theme;
  resolved: 'dark' | 'light';
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  resolved: 'dark',
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(resolved: 'dark' | 'light') {
  const root = document.documentElement;
  root.setAttribute('data-theme', resolved);
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', resolved === 'dark' ? '#000000' : '#fafafa');
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [resolved, setResolved] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial = stored && ['dark', 'light', 'system'].includes(stored) ? stored : 'dark';
    setTheme(initial);
    const res = initial === 'system' ? getSystemTheme() : initial;
    setResolved(res);
    applyTheme(res);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => {
      if (theme === 'system') {
        const res = getSystemTheme();
        setResolved(res);
        applyTheme(res);
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [theme, mounted]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : prev === 'light' ? 'system' : 'dark';
      localStorage.setItem('theme', next);
      const res = next === 'system' ? getSystemTheme() : next;
      setResolved(res);
      applyTheme(res);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolved, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
