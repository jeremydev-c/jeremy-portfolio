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
        accent: { DEFAULT: token("accent"), 2: token("accent-2"), soft: token("accent-soft") },
        moss: token("moss"),
        night: { DEFAULT: token("night"), 2: token("night-2") },
        bone: token("bone"),
        // Each exhibit stands on a wall tinted from its own colours.
        stage: {
          green: token("stage-green"),
          sand: token("stage-sand"),
          leaf: token("stage-leaf"),
          stone: token("stage-stone"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.2rem, 8.6vw, 8.75rem)", { lineHeight: "0.94", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.6rem, 6vw, 5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(2rem, 4vw, 3.6rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2.2rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
      },
      maxWidth: { page: "88rem" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
