// Jeremy's personal mark: a round "JN" seal, like the stamp that seals a
// ballot receipt in E-ELECTIONS. Drawn in SVG so it stays crisp at any size.
export default function Seal({ size = 132, className = '' }: { size?: number; className?: string }) {
  const ring = 'JEREMY GACHIKI NDUATI · KIRINYAGA · KENYA · ';
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="JN seal: Jeremy Gachiki Nduati, Kirinyaga, Kenya"
      className={className}
    >
      <defs>
        <path id="seal-ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        fill="currentColor"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '11.4px', letterSpacing: '0.2em' }}
      >
        <textPath href="#seal-ring" startOffset="0">
          {ring}
        </textPath>
      </text>
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-serif)', fontSize: '50px', letterSpacing: '-0.02em' }}
      >
        J<tspan fontStyle="italic">N</tspan>
      </text>
      <line x1="80" y1="128" x2="120" y2="128" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
