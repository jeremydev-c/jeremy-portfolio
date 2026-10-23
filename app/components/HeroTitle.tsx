import Image from 'next/image';

function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="block overflow-hidden">
      <span className="anim-rise block" style={{ animationDelay: `${0.08 + i * 0.1}s` }}>
        {children}
      </span>
    </span>
  );
}

// The home headline: three poster lines, with a cobalt block that slides open
// and holds the portrait as a blue duotone.
export default function HeroTitle() {
  return (
    <h1 className="font-display text-[17.5vw] uppercase leading-[0.84] tracking-[-0.06em] sm:text-[14vw] lg:text-[clamp(3rem,12.2vw,13.5rem)]">
      <Line i={0}>Jeremy</Line>
      <Line i={1}>builds things</Line>
      <Line i={2}>
        <span className="flex flex-wrap items-center">
          that
          <span
            aria-hidden
            className="anim-block relative mx-[0.12em] inline-block h-[0.72em] w-[1.6em] origin-left overflow-hidden bg-cobalt align-middle"
          >
            <Image
              src="/me.jpeg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 340px, 160px"
              className="object-cover object-[50%_28%] opacity-90 mix-blend-multiply grayscale contrast-125"
            />
          </span>
          work.
        </span>
      </Line>
    </h1>
  );
}
