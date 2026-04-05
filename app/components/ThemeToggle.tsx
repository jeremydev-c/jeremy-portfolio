'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme();

  const label =
    theme === 'dark' ? 'Switch to light mode' : theme === 'light' ? 'Switch to system mode' : 'Switch to dark mode';

  return (
    <button
      onClick={toggle}
      className={`h-8 w-8 inline-flex items-center justify-center rounded-xl transition-colors duration-200 ${className}`}
      style={{ color: 'var(--text-muted)' }}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' && <Moon className="w-3.5 h-3.5" />}
      {theme === 'light' && <Sun className="w-3.5 h-3.5" />}
      {theme === 'system' && <Monitor className="w-3.5 h-3.5" />}
    </button>
  );
}
