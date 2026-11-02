type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
};

// The opening block shared by inner pages: a small room label and a two-tone headline.
// Animated in CSS so it shows on first paint.
export default function PageHead({ eyebrow, title, intro, aside }: Props) {
  return (
    <header className="wrap pb-14 pt-28 sm:pb-20 sm:pt-36 lg:pt-40">
      <div className="anim-fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-[16ch] font-display text-display-xl">{title}</h1>
      </div>
      {(intro || aside) && (
        <div className="anim-fade-up mt-10 grid gap-8 lg:grid-cols-12" style={{ animationDelay: '0.12s' }}>
          {intro && <p className="max-w-[36rem] text-[19px] leading-[1.55] text-ink-2 lg:col-span-6">{intro}</p>}
          {aside && <div className="lg:col-span-5 lg:col-start-8">{aside}</div>}
        </div>
      )}
    </header>
  );
}
