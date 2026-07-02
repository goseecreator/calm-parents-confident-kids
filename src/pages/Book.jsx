// src/pages/Book.jsx
import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import Tabs from "../components/Tabs.jsx";
import Modal from "../components/Modal.jsx";
import { chapters as rawChapters } from "../data/chapters.js";

export default function Book() {
  const chapters = useMemo(() => [...rawChapters], []);
  const [activeId, setActiveId] = useState(chapters[0]?.id);
  const active = chapters.find((c) => c.id === activeId) || chapters[0];
  const [showModal, setShowModal] = useState(false);
  const hasTestimonials = (active?.testimonials?.length ?? 0) > 0;

  return (
    <div>
      {/* HERO / OVERVIEW */}
      <Section
        fullBleed
        className="bg-white text-ink"
        title="The Book"
        subtitle="A 21st-century essential reference manual for creating peace in your hearts, peace in the home, and more peace on Earth"
        image="https://calm-parents-confident-kids-bucket.s3.us-east-2.amazonaws.com/mock-00180_edited.png"
      >
        <div className="grid gap-8 md:grid-cols-[360px,1fr] items-start mt-12">
          {/* Book Cover */}
          <div className="rounded-xl border border-brand bg-brand-light shadow-card overflow-hidden max-w-xs md:max-w-sm">
            <img
              src="/fullbookcover.jpg"
              alt="Book cover"
              className="w-full h-auto"
            />
          </div>

          {/* Overview + CTA */}
          <div className="space-y-5 max-w-[70ch] text-body">
            <p className="font-semibold text-accent">
              Tara Davis, Incredibly Relatable and Informative
            </p>
            <blockquote className="italic text-mist">
              “Calm Parents Confident Kids had me hooked right from the start! Originally, I sat down to read just a Chapter, and before I knew it, I was more than halfway done with the book... Highly recommend this fun, informative and easy to read book for everyone!”
            </blockquote>
            <p>
              Find out what others are saying and read snippets from each chapter below.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.amazon.com/Calm-Parents-Confident-Kids-Resilient/dp/1733822410"
                className="inline-flex items-center justify-center rounded-md bg-brand text-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                BUY THE BOOK
              </a>
              {hasTestimonials && (
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center rounded-md border border-brand px-5 py-2 text-sm font-medium text-brand hover:bg-brand-light"
                >
                  Read More Testimonials
                </button>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* CHAPTERS */}
      <Section className="bg-brand-light text-ink">
        <h2 className="text-center text-2xl font-bold mb-6">Chapter Snippets</h2>
        <Tabs items={chapters} activeId={activeId} onChange={setActiveId} />

        <article className="mt-10 grid gap-8 md:grid-cols-[1fr,320px]">
          {/* Main Content */}
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-2">{active.title}</h2>
            <p className="text-mist mb-4">{active.summary}</p>
            <div className="space-y-4 leading-relaxed">
              {active.content?.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="rounded-xl border border-accent-soft bg-white p-5 shadow-card">
            <h3 className="font-semibold text-accent">The Brain Training Formula</h3>
            <ol className="mt-3 list-decimal list-inside text-sm text-mist space-y-1">
              <li>Be aware of your thoughts</li>
              <li>Decide — do you want your RAS to keep matching this up?</li>
              <li>Talk about the current situation in a way that feels good</li>
              <li>Cultivate positive emotions</li>
            </ol>
          </aside>
        </article>
      </Section>

      {/* TESTIMONIALS MODAL */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={`${active.title} — Testimonials`}
      >
        {active.testimonials?.length ? (
          <div className="space-y-4">
            {active.testimonials.map((t, i) => (
              <figure key={i} className="border rounded-lg p-3 bg-brand-light">
                <blockquote className="italic text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-1 text-sm text-mist">— {t.by}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="text-sm text-mist">No testimonials for this chapter yet.</p>
        )}
      </Modal>
    </div>
  );
}
