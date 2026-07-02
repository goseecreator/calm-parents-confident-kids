export default function LayeredWave() {
  return (

    <div className="relative -mt-px -mb-px overflow-hidden bg-cream">

      <svg

        viewBox="0 0 1440 120"

        preserveAspectRatio="none"

        className="block h-20 w-full"

        aria-hidden="true"

      >

        <path

          d="M0,52 C220,22 420,82 650,58 C890,34 1080,38 1440,70 L1440,120 L0,120 Z"

          fill="#DCE9D9"

          opacity="0.42"

        />

        <path

          d="M0,78 C260,46 460,98 720,76 C980,54 1180,92 1440,58 L1440,120 L0,120 Z"

          fill="#FAF6F1"

          opacity="0.9"

        />

      </svg>

    </div>

  );
}