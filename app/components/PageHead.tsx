type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
};

// The opening block shared by inner pages: a ruled label strip and a poster headline.
// Animated in CSS so it shows on first paint.
export default function PageHead({ eyebrow, title, intro, aside }: Props) {
  return (
    <header className="wrap pb-12 pt-24 sm:pb-16 sm:pt-32">
      <div className="anim-fade-up">
        <p className="eyebrow border-y border-ink py-2.5 !text-ink">{eyebrow}</p>
        <h1 className="mt-6 font-display text-display-xl uppercase">{title}</h1>
      </div>
      {(intro || aside) && (
        <div
          className="anim-fade-up mt-10 grid gap-8 border-t-2 border-ink pt-6 lg:grid-cols-12"
          style={{ animationDelay: '0.12s' }}
        >
          {intro && <p className="max-w-[38rem] text-[19px] leading-[1.55] text-ink-2 lg:col-span-6">{intro}</p>}
          {aside && <div className="lg:col-span-5 lg:col-start-8">{aside}</div>}
        </div>
      )}
    </header>
  );
}
