export default function SageWave() {
  return (
    <svg
      viewBox="0 0 1440 180"
      preserveAspectRatio="none"
      className="block h-40 w-full"
      aria-hidden="true"
    >
      <path
        fill="#FAF6F1"
        d="
          M0,92
          C220,42 460,130 720,104
          C980,78 1200,132 1440,74
          L1440,180
          L0,180
          Z
        "
      />

      <path
        fill="#DCE9D9"
        opacity="0.75"
        d="
          M0,86
          C220,38 460,120 720,96
          C980,72 1200,124 1440,68
          L1440,116
          C1200,148 980,118 720,132
          C460,146 220,106 0,124
          Z
        "
      />
    </svg>
  );
}