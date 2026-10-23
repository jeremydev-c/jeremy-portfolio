'use client';

import { useState } from 'react';

// The email address as a large link, with a one-click copy beside it.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={`mailto:${email}`}
        className="link-under break-all font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-tight"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="border-2 border-ink px-3.5 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] transition-colors hover:bg-ink hover:text-paper"
        aria-live="polite"
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </button>
    </div>
  );
}
