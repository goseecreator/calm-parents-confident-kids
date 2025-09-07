// src/pages/Book.jsx
import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import Tabs from "../components/Tabs.jsx";
import Modal from "../components/Modal.jsx";
import { chapters as rawChapters } from "../data/chapters.js";

export default function Book() {
  // Single source of truth for ordering (add .order if needed, like with creators)
  const chapters = useMemo(() => {
    return [...rawChapters]; // .sort((a,b) => (a.order ?? 0) - (b.order ?? 0))
  }, []);

  const [activeId, setActiveId] = useState(chapters[0]?.id);
  const active = chapters.find(c => c.id === activeId) || chapters[0];

  const [showModal, setShowModal] = useState(false);
  const hasTestimonials = (active?.testimonials?.length ?? 0) > 0;

  return (
    <div>
      {/* HERO / OVERVIEW */}
      <Section fullBleed className="bg-white" title="The Book"
        subtitle="A 21st-century essential reference manual for creating peace in your hearts, peace in the home, and more peace on Earth">
        <div className="grid gap-8 md:grid-cols-[360px,1fr] items-start mt-12">
          {/* Cover (you can swap src) */}
          <div className="rounded-xl border bg-gray-50 shadow-sm overflow-hidden max-w-xs md:max-w-sm">
            <img
              src="https://calm-parents-confident-kids-bucket.s3.us-east-2.amazonaws.com/backcover.png"
              alt="Book cover"
              className="w-full h-auto"
            />
          </div>

          {/* Overview text + CTA */}
          <div className="space-y-4 max-w-[70ch]">
            <p className="mb-4">Tara Davis, Incredibly Relatable and Informative</p>
            <q>Calm Parents Confident Kids had me hooked right from the start! Originally, I sat down to read just a Chapter, and before I knew it, I was more than halfway done with the book. As a mother of four myself, it is refreshing to hear other moms being transparent about what they have been through. Even better when each chapter then shows us easily how using the brain training techniques really help change parenting habits, leading to happier and healthier children. Personally, I am stoked to really dig in and learn more about these techniques. I am also very much going to keep this book handy to refer back to often! Highly recommend this fun, informative and easy to read book for everyone!</q>
            <p>Find out what others are saying and read snippets from each chapter below.</p>
            <div className="flex gap-3">
              <a
                href="https://www.amazon.com/Calm-Parents-Confident-Kids-Resilient/dp/1733822410/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.tUmvtg3xS55MqAW0AfaFWFiNF6PKDOJLCU5U1NCpARUo3fuPwmKN-YIWtbL67LPu6qsYwoiQpMWqE_HgwYLOcFgaoIpZHBLPqVwnJzIGWP8.566x-Exv-ElfNYuJmDvy0A3wut3o67fubxjRVH41RXs&qid=1756245651&sr=8-1"
                className="inline-flex items-center justify-center rounded-md px-5 py-2 border text-sm font-medium hover:shadow
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                BUY THE BOOK
              </a>
              {hasTestimonials && (
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center rounded-md px-5 py-2 border text-sm font-medium hover:bg-gray-50"
                >
                  Read More Testimonials
                </button>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* CHAPTERS */}
      <Section className="bg-white">
        <h2 className="text-center text-2xl font-bold mb-2">Chapter Snippets</h2>
        <Tabs items={chapters} activeId={activeId} onChange={setActiveId} />

        <article className="mt-8 grid gap-8 md:grid-cols-[1fr,320px]">
          {/* Content */}
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold">{active.title}</h2>
            <p className="text-gray-600 mt-1">{active.summary}</p>

            <div className="mt-6 space-y-4 leading-relaxed max-w-[70ch]">
              {active.content?.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Sidebar — key takeaways / action steps */}
          <aside className="rounded-xl border bg-gray-50 p-4 h-max">
            <h3 className="font-semibold">The Brain Training Formula</h3>
            <ol className="mt-3 list-decimal list-inside">
              <li>Be aware of your thoughts</li>
              <li>Decide - do you want your RAS to keep matching this up?</li>
              <li>Talk about the current situation in a way that feels good</li>
              <li>Cultivate positive emotions</li>
            </ol>
          </aside>
        </article>
      </Section>

      {/* TESTIMONIALS MODAL */}
      <Modal open={showModal} onClose={() => setShowModal(false)} title={`${active.title} — Testimonials`}>
        {active.testimonials?.length
          ? (
            <div className="space-y-4">
              {active.testimonials.map((t, i) => (
                <figure key={i} className="border rounded-lg p-3">
                  <blockquote className="italic">“{t.quote}”</blockquote>
                  <figcaption className="mt-1 text-sm text-gray-600">— {t.by}</figcaption>
                </figure>
              ))}
            </div>
          )
          : <p className="text-sm text-gray-600">No testimonials for this chapter yet.</p>
        }
      </Modal>
    </div>
  );
}
