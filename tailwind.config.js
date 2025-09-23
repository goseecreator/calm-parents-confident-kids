// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { lg: "72rem" }, // ~max-w-6xl
    },
    extend: {
      colors: {
        ink: "#111827",
        mist: "#6B7280",
        brand: {
          light: "#FDF6EC",
          DEFAULT: "#D4A373",
          dark: "#3B3025",
        },
        accent: {
          DEFAULT: "#BC5C3B",
          soft: "#CBC3A6",
        },
      },
      spacing: {
        "section-sm": "2.5rem",
        "section": "3.5rem",
        "section-lg": "5rem",
      },
      fontSize: {
        body: ["clamp(1rem, 1.4vw, 1.06rem)", { lineHeight: "1.65" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,.06), 0 6px 20px rgba(0,0,0,.06)",
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
