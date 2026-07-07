export default function Section({
  title,
  subtitle,
  children,
  fullBleed = false,
  className = "",
  image,
}) {
  const inner = (
    <>
      {title && (
        <h2 className="font-heading text-4xl md:text-5xl text-ink text-center">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-body text-mist">
          {subtitle}
        </p>
      )}

      <div className="mt-8">{children}</div>
    </>
  );

  return (
    <section className={`relative overflow-hidden w-full ${className}`}>
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      )}

      <div
        className={`relative z-10 ${
          fullBleed ? "px-4 py-12" : "mx-auto max-w-6xl px-4 py-12"
        }`}
      >
        {inner}
      </div>
    </section>
  );
}