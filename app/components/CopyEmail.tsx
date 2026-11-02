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
        className="link-under break-all font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-tight tracking-[-0.03em]"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="h-8 rounded-[7px] border border-ink/15 px-3 text-[13px] transition-colors hover:border-ink/50"
        aria-live="polite"
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </button>
    </div>
  );
}
