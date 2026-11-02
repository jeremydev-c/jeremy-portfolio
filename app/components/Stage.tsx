import Image from 'next/image';
import type { Project } from '../lib/content';

const tint: Record<Project['stage'], string> = {
  green: 'bg-stage-green',
  sand: 'bg-stage-sand',
  leaf: 'bg-stage-leaf',
  stone: 'bg-stage-stone',
};

function hostOf(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}

type Props = {
  p: Project;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Full page width: more wall around the exhibit so it stays a sensible height. */
  wide?: boolean;
};

// One exhibit on its own tinted wall: a framed screenshot, or the app on a phone.
// Lifts slightly when its parent link (a `group`) is hovered.
export default function Stage({ p, priority, sizes = '(min-width: 1024px) 60vw, 100vw', className = '', wide }: Props) {
  return (
    <div className={`stage ${tint[p.stage]} ${className}`}>
      {p.phone ? (
        <div className={`relative grid place-items-center py-[6%] ${wide ? 'aspect-[16/10] lg:aspect-[2/1]' : 'aspect-[16/11]'}`}>
          <div className="relative h-full overflow-hidden rounded-[clamp(18px,3vw,34px)] border-[5px] border-[#151514] bg-black shadow-[0_40px_70px_-35px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5 aspect-[9/16]">
            <Image src={p.phone} alt={`${p.name} on a phone`} fill priority={priority} sizes="320px" className="object-cover" />
          </div>
        </div>
      ) : (
        p.image && (
          <div className={`relative ${wide ? 'px-[7%] pt-[7%] lg:px-[15%] lg:pt-[5%]' : 'px-[7%] pt-[7%]'}`}>
            <div className="browser !rounded-b-none !border-b-0 transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
              <div className="browser-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 truncate font-mono text-[10.5px] text-ink-3">{p.live ? hostOf(p.live) : p.slug}</span>
              </div>
              <div className="relative aspect-[16/10]">
                <Image src={p.image} alt={`${p.name} website`} fill priority={priority} sizes={sizes} className="object-cover object-top" />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
