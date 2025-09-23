export default function Section({
  title,
  subtitle,
  children,
  fullBleed = false,
  className = "",
  image, // 🌱 new prop: optional background image
}) {
  const inner = (
    <>
      {title && <h2 className="text-3xl font-semibold text-center">{title}</h2>}
      {subtitle && <p className="text-slate-500 mt-2 text-center">{subtitle}</p>}
      <div className="mt-6">{children}</div>
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
      <div className={`relative z-10 ${fullBleed ? "px-4 py-12" : "mx-auto max-w-6xl px-4 py-12"}`}>
        {inner}
      </div>
    </section>
  );
}
