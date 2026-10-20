import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[80vh] flex-col justify-center pb-20 pt-32">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 font-serif text-display-xl">
        This page
        <br />
        <span className="italic text-kiln">broke the chain.</span>
      </h1>
      <p className="mt-8 max-w-md text-[18px] leading-relaxed text-ink-2">
        The link may be old, or the page may have moved during the redesign.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn-ink">
          Back home
        </Link>
        <Link href="/work" className="btn-line">
          See the work
        </Link>
      </div>
    </section>
  );
}
