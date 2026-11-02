import PageHead from './PageHead';

type Section = { title: string; body: React.ReactNode };

// Shared layout for the privacy and terms pages: numbered sections in a readable column.
export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: React.ReactNode;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHead eyebrow={eyebrow} title={title} intro={intro} aside={<p className="font-mono text-[12px] text-ink-3 lg:text-right">Last updated {updated}</p>} />
      <div className="wrap pb-24 sm:pb-32">
        <ol className="border-t border-rule">
          {sections.map((s, i) => (
            <li key={s.title} className="grid gap-4 border-b border-rule py-10 lg:grid-cols-12 lg:gap-8">
              <p className="font-mono text-[11px] text-accent lg:col-span-1">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="font-display text-[24px] leading-tight tracking-[-0.025em] lg:col-span-4">{s.title}</h2>
              <div className="prose-body max-w-[40rem] !text-[16px] lg:col-span-7">{s.body}</div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
