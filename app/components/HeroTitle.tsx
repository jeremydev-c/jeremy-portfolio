import Image from 'next/image';

function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <span className="anim-rise block" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
        {children}
      </span>
    </span>
  );
}

// The home headline. Lines rise out of a mask and the portrait opens inline.
export default function HeroTitle() {
  return (
    <h1 className="font-serif text-[16vw] leading-[0.92] sm:text-[13vw] lg:text-[clamp(3rem,11vw,11.5rem)] tracking-[-0.035em]">
      <Line i={0}>I build software</Line>
      <Line i={1}>
        <span className="inline-flex items-center">
          <span
            aria-hidden
            className="anim-pill relative mr-[0.18em] inline-block h-[0.74em] w-[1.45em] overflow-hidden rounded-full align-middle"
          >
            <Image
              src="/me.jpeg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 220px, 120px"
              className="object-cover object-[50%_30%]"
            />
          </span>
          people can
        </span>
      </Line>
      <Line i={2}>
        <span className="italic text-kiln">trust.</span>
      </Line>
    </h1>
  );
}
