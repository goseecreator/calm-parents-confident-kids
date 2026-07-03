// src/components/SoftWaveDivider.jsx

export default function SoftWaveDivider({ variant = "warmToCream" }) {
  const variants = {
    warmToCream: {
      wrapper: "bg-warm-white",
      fill: "fill-cream",
    },
    creamToWarm: {
      wrapper: "bg-cream",
      fill: "fill-warm-white",
    },
  };

  const v = variants[variant];

  return (
    <div className={`relative -mb-px overflow-hidden ${v.wrapper}`}>
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="block h-14 w-full md:h-20"
        aria-hidden="true"
      >
        <path
          d="M0,62 C220,94 390,38 610,62 C830,86 1010,42 1215,58 C1320,66 1395,84 1440,72 L1440,110 L0,110 Z"
          className={v.fill}
        />

        <path
          d="M0,58 C240,88 410,44 620,60 C835,78 1005,42 1212,54 C1320,60 1390,72 1440,64"
          className="fill-none stroke-soft-sage"
          strokeWidth="5"
          opacity="0.7"
        />

        <path
          d="M0,54 C240,80 410,40 620,56 C835,72 1005,38 1212,50 C1320,56 1390,66 1440,60"
          className="fill-none stroke-sage"
          strokeWidth="1.5"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}