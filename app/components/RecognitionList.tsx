'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Recognition } from '../lib/content';

type Open = { kind: 'image'; title: string; src: string } | { kind: 'list'; title: string; pdfs: string[] } | null;

export default function RecognitionList({ items }: { items: Recognition[] }) {
  const [open, setOpen] = useState<Open>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <ul className="border-t border-rule">
        {items.map((r) => (
          <li key={r.title} className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 border-b border-rule py-7">
            <span className="col-span-2 font-mono text-[11px] text-ink-3 sm:col-span-1">{r.year ?? '—'}</span>
            <div className="col-span-10 sm:col-span-6">
              <h2 className="text-[18px] leading-snug sm:text-[20px]">{r.title}</h2>
              <p className="mt-1 text-[14px] text-ink-3">{r.issuer}</p>
            </div>
            <span
              className={`col-span-10 col-start-3 font-display text-[26px] leading-none sm:col-span-2 sm:col-start-auto ${
                r.highlight ? 'text-cobalt' : 'text-ink-2'
              }`}
            >
              {r.result}
            </span>
            <div className="col-span-10 col-start-3 flex flex-wrap gap-2 sm:col-span-3 sm:col-start-auto sm:justify-end">
              {r.link && (
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="chip transition-colors hover:border-ink hover:text-ink">
                  Project ↗
                </a>
              )}
              {r.image && (
                <button
                  type="button"
                  onClick={() => setOpen({ kind: 'image', title: r.title, src: r.image! })}
                  className="chip transition-colors hover:border-ink hover:text-ink"
                >
                  View certificate
                </button>
              )}
              {r.pdf && (
                <a href={r.pdf} target="_blank" rel="noopener noreferrer" className="chip transition-colors hover:border-ink hover:text-ink">
                  View certificate ↗
                </a>
              )}
              {r.pdfs && (
                <button
                  type="button"
                  onClick={() => setOpen({ kind: 'list', title: `${r.issuer} certificates`, pdfs: r.pdfs! })}
                  className="chip transition-colors hover:border-ink hover:text-ink"
                >
                  View all {r.pdfs.length}
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] grid place-items-center bg-ink/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={open.title}
              className="max-h-[88vh] w-full max-w-3xl overflow-auto border-2 border-ink bg-paper"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 flex items-center justify-between border-b border-rule bg-paper px-5 py-4">
                <p className="font-display text-[22px]">{open.title}</p>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="chip hover:border-ink hover:text-ink"
                  autoFocus
                >
                  Close
                </button>
              </div>
              {open.kind === 'image' ? (
                <div className="p-5">
                  <Image
                    src={open.src}
                    alt={open.title}
                    width={1200}
                    height={850}
                    className="h-auto w-full"
                  />
                </div>
              ) : (
                <ul className="divide-y divide-rule px-5">
                  {open.pdfs.map((pdf, i) => (
                    <li key={pdf}>
                      <a
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-4 text-[16px] hover:text-cobalt"
                      >
                        Certificate {String(i + 1).padStart(2, '0')}
                        <span className="font-mono text-[11px] text-ink-3">PDF ↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
