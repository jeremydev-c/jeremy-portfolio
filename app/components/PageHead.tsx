type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
};

// The opening block shared by inner pages. Animated in CSS so it shows on first paint.
export default function PageHead({ eyebrow, title, intro, aside }: Props) {
  return (
    <header className="wrap pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
      <div className="anim-fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 font-serif text-display-xl">{title}</h1>
      </div>
      {(intro || aside) && (
        <div
          className="anim-fade-up mt-12 grid gap-8 border-t border-rule pt-8 lg:grid-cols-12"
          style={{ animationDelay: '0.12s' }}
        >
          {intro && <p className="max-w-[36rem] text-[19px] leading-[1.6] text-ink-2 lg:col-span-6">{intro}</p>}
          {aside && <div className="lg:col-span-5 lg:col-start-8">{aside}</div>}
        </div>
      )}
    </header>
  );
}
