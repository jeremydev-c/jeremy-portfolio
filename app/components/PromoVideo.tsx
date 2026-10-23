'use client';

import { useRef, useState } from 'react';

type Props = {
  src: string;
  poster: string;
  title: string;
  /** "vertical" for 9:16 promos, "wide" for 16:9 films. */
  shape?: 'vertical' | 'wide';
  duration?: string;
  /** false for silent films, so the label doesn't promise sound. */
  sound?: boolean;
  className?: string;
};

// A video that shows its poster and loads nothing until the visitor presses play,
// so the page stays fast on mobile data.
export default function PromoVideo({ src, poster, title, shape = 'vertical', duration, sound = true, className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    // Wait a tick for the controls to mount, then start with sound.
    requestAnimationFrame(() => ref.current?.play().catch(() => {}));
  }

  const ratio = shape === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden border-2 border-ink bg-black ${ratio}`}>
        <video
          ref={ref}
          src={started ? src : undefined}
          poster={poster}
          controls={started}
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label={title}
        />
        {!started && (
          <button
            type="button"
            onClick={play}
            className="group absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 text-left text-white"
            aria-label={`Play: ${title}`}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">
              {[duration, sound ? 'Sound on' : 'No sound'].filter(Boolean).join(' · ')}
            </span>
            <span className="grid h-14 w-14 place-items-center bg-cobalt text-white transition-transform duration-300 group-hover:scale-110">
              <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden>
                <path d="M2 1.5v17L16.5 10z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
