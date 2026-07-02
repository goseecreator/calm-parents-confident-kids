// src/pages/Creators.jsx
import { useEffect, useMemo, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Section from "../components/Section.jsx";
import { creators as rawCreators } from "../data/creators.js";
import ExpandableText from "../components/ExpandableText.jsx";

export default function Creators() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const listRef = useRef(null);

  const list = useMemo(() => {
    return [...rawCreators].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }, []);

  const slugToIndex = useMemo(() => {
    const m = new Map();
    list.forEach((c, i) => m.set(c.slug, i));
    return m;
  }, [list]);

  const index = slugToIndex.has(slug) ? slugToIndex.get(slug) : -1;

  useEffect(() => {
    if (index === -1 && list.length) navigate(`/${list[0].slug}`, { replace: true });
  }, [index, list, navigate]);

  useEffect(() => {
    if (index < 0) return;
    const node = listRef.current?.querySelector(`[data-idx="${index}"]`);
    node?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [index]);

  if (index < 0) return null;

  const current = list[index];
  const atStart = index <= 0;
  const atEnd = index >= list.length - 1;
  const prevSlug = !atStart ? list[index - 1].slug : null;
  const nextSlug = !atEnd ? list[index + 1].slug : null;

  return (
  <main className="bg-warm-white text-ink">
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,122,103,.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(169,193,166,.18),transparent_40%)]" />

      <Section
        fullBleed
        title="Meet the Creators"
        subtitle="Select a creator to see their story, work, and contribution."
      >
        <div className="relative mx-auto w-[320px] sm:w-[480px] md:w-[600px] lg:w-[800px]">
          {prevSlug && (
            <Link
              to={`/${prevSlug}`}
              aria-label="Previous creator"
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-ink shadow-sm backdrop-blur transition hover:-translate-x-0.5 hover:bg-brand hover:text-white"
            >
              ←
            </Link>
          )}

          {nextSlug && (
            <Link
              to={`/${nextSlug}`}
              aria-label="Next creator"
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-ink shadow-sm backdrop-blur transition hover:translate-x-0.5 hover:bg-brand hover:text-white"
            >
              →
            </Link>
          )}

          <div
            ref={listRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-[2rem] border border-black/5 bg-white/80 px-12 py-4 shadow-card backdrop-blur scrollbar-thin"
            role="listbox"
            aria-label="Creators"
          >
            {list.map((c, i) => (
              <Link
                key={c.slug}
                data-idx={i}
                to={`/${c.slug}`}
                className={`h-20 w-20 shrink-0 snap-start overflow-hidden rounded-full border bg-gray-50 ring-offset-4 ring-offset-warm-white transition hover:scale-105 md:h-24 md:w-24 ${
                  i === index
                    ? "ring-2 ring-brand"
                    : "opacity-75 hover:opacity-100"
                }`}
                title={c.name}
              >
                <img
                  src={c.headshot}
                  alt={c.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8 rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-card backdrop-blur md:grid-cols-[340px,1fr] md:p-8 lg:grid-cols-[380px,1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-gray-50 shadow-sm">
            <img
              src={current.headshot}
              alt={`${current.name} headshot`}
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>

          <div className="pt-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Creator Profile
            </p>

            <h3 className="font-heading text-3xl text-ink md:text-4xl">
              {current.name}
            </h3>

            <p className="mt-2 text-sm italic text-mist">{current.role}</p>

            <div className="mt-4 mb-6 h-px w-16 bg-brand/20" />

<div className="mt-6 max-w-[68ch] text-[15px] leading-8 text-ink/75">              <ExpandableText collapsedLines={10}>
  <div className="space-y-4">
    {(Array.isArray(current.bio) ? current.bio : [current.bio]).map((paragraph, i) => (
      <p key={i}>{paragraph}</p>
    ))}
  </div>
</ExpandableText>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="https://www.amazon.com/Calm-Parents-Confident-Kids-Resilient/dp/1733822402"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Buy the Book
              </Link>

              {current.links?.site && (
                <a
                  className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-brand-light"
                  href={current.links.site}
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              )}

              {current.links?.instagram && (
                <a
                  className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-brand-light"
                  href={current.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              )}

              {current.links?.facebook && (
                <a
                  className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-brand-light"
                  href={current.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>
    </section>
  </main>
);
}