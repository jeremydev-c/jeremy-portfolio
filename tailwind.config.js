/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: token("paper"), 2: token("paper-2"), 3: token("paper-3") },
        ink: { DEFAULT: token("ink"), 2: token("ink-2"), 3: token("ink-3") },
        rule: token("rule"),
        cobalt: { DEFAULT: token("cobalt"), 2: token("cobalt-2"), soft: token("cobalt-soft") },
        moss: token("moss"),
        night: { DEFAULT: token("night"), 2: token("night-2") },
        bone: token("bone"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.4rem, 11vw, 11rem)", { lineHeight: "0.86", letterSpacing: "-0.055em" }],
        "display-lg": ["clamp(2.6rem, 7vw, 6.5rem)", { lineHeight: "0.9", letterSpacing: "-0.05em" }],
        "display-md": ["clamp(2.1rem, 4.6vw, 4.2rem)", { lineHeight: "0.95", letterSpacing: "-0.045em" }],
        "display-sm": ["clamp(1.6rem, 2.8vw, 2.4rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
      },
      maxWidth: { page: "92rem" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 38s linear infinite" },
    },
  },
  plugins: [],
};
