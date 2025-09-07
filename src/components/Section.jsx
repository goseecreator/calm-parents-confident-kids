// src/components/Section.jsx
export default function Section({
  title,
  subtitle,
  children,
  fullBleed = false,   // optional: let you toggle full width
  className = "",
}) {
  const inner = (
    <>
      {title && <h2 className="text-3xl font-semibold text-center">{title}</h2>}
      {subtitle && <p className="text-slate-400 mt-2 text-center">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </>
  );

  return (
    <section className={`w-full ${className}`}>
      {fullBleed ? (
        <div className="px-4 py-12 ">{inner}</div>
      ) : (
        <div className="mx-auto max-w-6xl px-4 py-12">{inner}</div>
      )}
    </section>
  );
}
