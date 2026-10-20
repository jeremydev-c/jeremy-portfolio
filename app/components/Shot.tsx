import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  url?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

// A screenshot in a quiet browser frame.
export default function Shot({
  src,
  alt,
  url,
  ratio = 'aspect-[16/10]',
  priority,
  sizes = '(min-width: 1024px) 60vw, 100vw',
  className = '',
}: Props) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser-bar">
        <i />
        <i />
        <i />
        {url && (
          <span className="ml-3 truncate font-mono text-[10.5px] tracking-[0.04em] text-ink-3">{url}</span>
        )}
      </div>
      <div className={`relative ${ratio}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}
