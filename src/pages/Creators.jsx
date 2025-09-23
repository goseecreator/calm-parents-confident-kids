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
    <div>
      <Section fullBleed title="Meet the Creators" subtitle="Select a creator to see details.">
        <div className="relative mx-auto w-[320px] sm:w-[480px] md:w-[600px] lg:w-[800px]">
          {prevSlug && (
            <Link
              to={`/${prevSlug}`}
              aria-label="Previous creator"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border bg-white/90 backdrop-blur shadow-sm"
            >
              ←
            </Link>
          )}
          {nextSlug && (
            <Link
              to={`/${nextSlug}`}
              aria-label="Next creator"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border bg-white/90 backdrop-blur shadow-sm"
            >
              →
            </Link>
          )}

          <div
            ref={listRef}
            className="flex gap-4 overflow-x-auto py-3 px-12 snap-x snap-mandatory scrollbar-thin bg-white rounded-xl shadow-card"
            role="listbox"
            aria-label="Creators"
          >
            {list.map((c, i) => (
              <Link
                key={c.slug}
                data-idx={i}
                to={`/${c.slug}`}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full border bg-gray-50 shrink-0 overflow-hidden ring-offset-2 snap-start
                  ${i === index ? "ring-2 ring-brand" : ""}`}
                title={c.name}
              >
                <img src={c.headshot} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-[380px,1fr] gap-8 items-start shadow-card rounded-2xl p-6 bg-white">
          <div className="aspect-auto rounded-full border bg-gray-50 overflow-hidden">
            <img src={current.headshot} alt={`${current.name} headshot`} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-heading text-ink">{current.name}</h3>
            <p className="text-sm text-mist italic">{current.role}</p>
            <div className="max-w-[70ch] leading-relaxed mt-6">
              <ExpandableText collapsedLines={10}>
                <p>{current.bio}</p>
              </ExpandableText>
            </div>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <Link
                to="https://www.amazon.com/Calm-Parents-Confident-Kids-Resilient/dp/1733822402"
                className="inline-flex items-center justify-center rounded-md bg-brand text-white px-5 py-2 text-sm font-medium shadow-md hover:bg-brand-dark transition"
              >
                Buy the Book
              </Link>
              {current.links?.site && (
                <a className="underline text-sm" href={current.links.site} target="_blank" rel="noreferrer">
                  Website
                </a>
              )}
              {current.links?.instagram && (
                <a className="underline text-sm" href={current.links.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              )}
              {current.links?.facebook && (
                <a className="underline text-sm" href={current.links.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}