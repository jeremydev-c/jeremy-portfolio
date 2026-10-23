// A cobalt band of words that scrolls forever. Pure CSS: the list is drawn twice
// and the track slides by half its width, so the loop has no visible seam.
export default function Marquee({ items, className = '' }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap px-5 sm:px-7">
          <span aria-hidden className="mr-5 text-[0.6em] sm:mr-7">▶</span>
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`overflow-hidden border-y-2 border-ink bg-cobalt text-bone ${className}`}>
      <div className="flex w-max animate-marquee py-4 font-display text-[clamp(1.6rem,3.6vw,3rem)] uppercase leading-none tracking-[-0.04em] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
