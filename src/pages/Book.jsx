import { useMemo, useState } from "react";
import Modal from "../components/Modal.jsx";
import Tabs from "../components/Tabs.jsx";
import SageWave from "../components/SageWave.jsx";
import { chapters as rawChapters } from "../data/chapters.js";

export default function Book() {
  const chapters = useMemo(() => [...rawChapters], []);
  const [activeId, setActiveId] = useState(chapters[0]?.id);
  const active = chapters.find((c) => c.id === activeId) || chapters[0];
  const [showModal, setShowModal] = useState(false);
  const hasTestimonials = (active?.testimonials?.length ?? 0) > 0;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-warm-white text-ink">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(233,122,103,.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(169,193,168,.18),transparent_35%)]" />
        <div className="absolute -top-24 -left-24 z-0 h-72 w-72 rounded-full bg-peach/30 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 z-0 h-80 w-80 rounded-full bg-soft-sage/40 blur-[120px]" />

        <div className="container relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-12 pb-32 pt-20 md:grid-cols-[0.85fr,1.15fr]">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-peach/30 blur-2xl" />
            <div className="absolute -right-8 bottom-10 h-36 w-36 rounded-full bg-soft-sage/70 blur-2xl" />

            <img
              src="/fullbookcover.jpg"
              alt="Calm Parents Confident Kids book cover"
              className="relative rotate-[-2deg] rounded-3xl shadow-card"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-coral">
              The Book
            </p>

            <h1 className="font-heading text-5xl leading-tight md:text-7xl">
              A practical tool for calmer, more confident parenting.
            </h1>

            <p className="mt-6 max-w-2xl font-body text-body text-mist">
              A 21st-century reference for creating more peace in your heart,
              more connection at home, and more confidence in the way you parent.
            </p>

            <figure className="mt-8 rounded-[2rem] border border-soft-sage/70 bg-white/75 p-6 shadow-card">
              <blockquote className="font-body text-body italic text-ink">
                “Calm Parents Confident Kids had me hooked right from the start!
                Originally, I sat down to read just a chapter, and before I knew
                it, I was more than halfway done with the book.”
              </blockquote>

              <figcaption className="mt-4 font-body text-sm font-semibold text-coral">
                Tara Davis, Incredibly Relatable and Informative
              </figcaption>
            </figure>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="https://www.amazon.com/Calm-Parents-Confident-Kids-Resilient/dp/1733822410"
                className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Buy the Book
              </a>

                 <a
                href="https://read.amazon.com/sample/1733822402?clientId=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-coral bg-white/70 px-6 py-3 text-sm font-semibold text-coral transition hover:bg-cream"
              >
                Read a Sample
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-[1] w-full leading-none">
          <SageWave />
        </div>
      </section>

      {/* CHAPTERS */}
      <section id="chapters" className="relative bg-cream pt-2 pb-section-lg text-ink">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-coral">
              Chapter Snippets
            </p>

            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Discover what’s inside
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-body text-body text-mist">
              Explore the ideas, stories, and practices woven throughout the
              book. Each chapter offers a different doorway into calmer,
              more connected parenting.
            </p>
          </div>

          <div className="mt-10">
            <Tabs items={chapters} activeId={activeId} onChange={setActiveId} />
          </div>

          <article className="mt-10 grid gap-8 lg:grid-cols-[1fr,340px]">
            <div className="rounded-[2rem] bg-warm-white/90 p-6 shadow-card md:p-8">
              <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-coral">
                Selected Chapter
              </p>

              <h3 className="font-heading text-3xl leading-tight text-ink md:text-4xl">
                {active.title}
              </h3>

              <p className="mt-4 font-body text-body text-mist">
                {active.summary}
              </p>

              <div className="mt-6 space-y-4 font-body text-body text-ink">
                {active.content?.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {hasTestimonials && (
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-coral bg-white/70 px-6 py-3 font-body text-sm font-semibold text-coral transition hover:bg-cream"
                >
                  Read More Testimonials
                </button>
              )}
            </div>

            <aside className="rounded-[2rem] border border-soft-sage/70 bg-warm-white/85 p-6 shadow-card">
              <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-coral">
                Toolkit
              </p>

              <h3 className="font-heading text-2xl leading-tight text-ink">
                The Brain Training Formula
              </h3>

              <ol className="mt-5 space-y-4 font-body text-body text-mist">
                {[
                  "Be aware of your thoughts.",
                  "Decide if you want your RAS to keep matching this up.",
                  "Talk about the current situation in a way that feels good.",
                  "Cultivate positive emotions.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-soft-sage text-sm font-semibold text-ink">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </article>
        </div>
      </section>

      {/* TESTIMONIALS MODAL */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={`${active.title} — Testimonials`}
      >
        {active.testimonials?.length ? (
          <div className="space-y-4">
            {active.testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-soft-sage/70 bg-cream p-4"
              >
                <blockquote className="font-body text-body italic text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-2 font-body text-sm text-mist">
                  — {t.by}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="font-body text-sm text-mist">
            No testimonials for this chapter yet.
          </p>
        )}
      </Modal>
    </div>
  );
}