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
  cream: "#FAF6F1",
  "warm-white": "#FFFDFB",

  coral: "#E97A67",
  peach: "#F4B69A",

  sage: "#A9C1A8",
  "soft-sage": "#DCE9D9",

  gold: "#F1CF8A",
  "dusty-blue": "#9AB7D3",

  ink: "#2F3A37",
  mist: "#66706B",

  brand: {
    light: "#FAF6F1",
    DEFAULT: "#E97A67",
    dark: "#2F3A37",
  },

  accent: {
    DEFAULT: "#A9C1A8",
    soft: "#DCE9D9",
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
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/*

_______________COLOR THEME___________________

--cream: #FAF6F1;
--warm-white: #FFFDFB;

--coral: #E97A67;
--peach: #F4B69A;

--sage: #A9C1A8;
--soft-sage: #DCE9D9;

--gold: #F1CF8A;

--dusty-blue: #9AB7D3;

--ink: #2F3A37;
--mist: #66706B;*/