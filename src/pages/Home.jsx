// src/pages/Home.jsx
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Modal from "../components/Modal.jsx";
import SageWave from "../components/SageWave.jsx";

export default function Home() {

  const [showCoverModal, setShowCoverModal] = useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-warm-white text-ink">
        {/* Watercolor background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(233,122,103,.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(169,193,168,.18),transparent_35%)]" />

        <div className="absolute -top-24 -left-24 z-0 h-72 w-72 rounded-full bg-peach/30 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 z-0 h-80 w-80 rounded-full bg-soft-sage/40 blur-[120px]" />

        <img
          src="/art/watercolor-coral.svg"
          className="absolute top-0 left-0 w-80 opacity-60"
        />

        <img
          src="/art/watercolor-sage.svg"
          className="absolute bottom-0 right-0 w-96 opacity-70"
        />

        <img
          src="/art/leaf-corner.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 bottom-24 z-0 w-44 opacity-50 md:w-56"
        />

        <div className="container relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-12 pb-32 pt-20 md:grid-cols-2">    {/* LEFT */}

          <div className="text-center md:text-left">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-coral">
              Brain Training for Families
            </p>

            <h1 className="font-heading text-5xl leading-tight md:text-7xl">        Calm Parents.
              <span className="block text-coral">
                Confident Kids.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-body text-mist">
              Stories from real parents discovering new ways to create connection,
              confidence, and cooperation.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">

              <a
                href="https://a.co/d/gUlUB0S"
                className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-dark"
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

          {/* RIGHT */}

          <div className="relative mx-auto max-w-sm">

            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-peach/30 blur-2xl" />

            <div className="absolute -right-8 bottom-10 h-36 w-36 rounded-full bg-soft-sage/70 blur-2xl" />

            <img
              src="/CalmParentsFrontCoverFIN.png"
              alt="Calm Parents Confident Kids"
              className="relative rounded-3xl shadow-card"
            />

          </div>

        </div>

        <div className="absolute bottom-0 left-0 z-[1] w-full leading-none">
          <SageWave />
        </div>

      </section>

      {/* PAIN */}

      <section className="relative bg-cream pt-2 pb-section-lg">

        <div className="container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-coral">
                Parenting Can Feel Hard
              </p>

              <div className="mb-8 h-[2px] w-16 bg-coral" />

              <h2 className="font-heading text-5xl leading-tight text-ink md:text-7xl">
                You’re not alone.
              </h2>

              <p className="mt-6 max-w-2xl font-body text-body text-mist">
                Many parents come to this book feeling overwhelmed, frustrated,
                and unsure of what to do next.
              </p>

              <p className="mt-5 font-body text-xl font-semibold text-coral">
                Maybe this sounds familiar.
              </p>
            </div>

            <div className="relative hidden lg:block">
              <img
                src="/vitaly-gariev-9Ky5rMsDfo8-unsplash.jpg"
                alt="Parent and child sitting apart during a difficult parenting moment"
                className="h-[420px] w-full rounded-[2rem] object-cover shadow-card"
              />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-l from-transparent to-cream/50" />
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "〰️",
                title: "Constant Resistance",
                text: "Everything feels like a battle. You’re met with pushback all day, every day.",
              },
              {
                icon: "📣",
                title: "They Won’t Listen",
                text: "No matter how you ask, remind, or explain, your child just doesn’t seem to hear you.",
              },
              {
                icon: "⛈️",
                title: "Endless Power Struggles",
                text: "It feels like a fight for control that leaves everyone exhausted and frustrated.",
              },
              {
                icon: "☹️",
                title: "Fear of Getting It Wrong",
                text: "You worry that you’re causing harm or missing something important.",
              },
              {
                icon: "💔",
                title: "Disconnection",
                text: "You long for closeness, but something feels in the way of truly connecting.",
              },
              {
                icon: "🌀",
                title: "Overwhelmed & Exhausted",
                text: "By the end of the day, you feel drained, guilty, and like you’re never doing enough.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-soft-sage/70 bg-warm-white/85 p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-peach/45 text-3xl">
                  {item.icon}
                </div>

                <h3 className="font-heading text-xl md:text-2xl leading-tight text-ink">
                  {item.title}
                </h3>

                <p className="mt-4 font-body text-body text-mist">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-soft-sage/75 px-6 py-6 text-center shadow-card md:flex md:items-center md:justify-center md:gap-8 md:text-left">
            <div className="text-4xl text-coral">♡</div>

            <p className="font-heading text-2xl text-ink">
              You are not failing.
            </p>

            <div className="hidden h-10 w-px bg-coral/40 md:block" />

            <p className="mt-3 font-body text-body text-mist md:mt-0">
              You’re doing the best you can with what you know.{" "}
              <span className="font-semibold text-coral">
                And things can get better.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-warm-white py-section-lg">

        {/* Decorative watercolor */}

        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-peach/20 blur-[120px]" />

        <div className="container relative z-10">

          <div className="text-center">

            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-coral">
              Reader Testimonials
            </p>

            <h2 className="font-heading text-4xl md:text-5xl text-ink">
              Why Readers Love It
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-body text-body text-mist">              Parents, educators, and caregivers are discovering practical
              tools that create more peace, confidence, and connection.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <figure className="relative rounded-[28px] bg-white p-8 shadow-card overflow-hidden">
              <div className=" absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-coral to-peach" />

              <div className="text-gold text-xl">
                ★★★★★
              </div>

              <blockquote className="mt-4 font-body text-body italic text-ink">
                "I highly recommend this book to parents and future parents. I wish I had read this when my children were little."
              </blockquote>

              <figcaption className="mt-6 text-sm text-mist">
                WinterSnow, Amazon Reviewer
              </figcaption>

            </figure>
            <figure className="relative rounded-[28px] bg-white p-8 shadow-card overflow-hidden">
              <div className=" absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-coral to-peach" />
              <div className="text-gold text-xl">
                ★★★★★
              </div>
              <blockquote className="mt-4 font-body text-body italic text-ink">                "It simply, generously, and lightheartedly offers a path to view yourself and your world in a new way."              </blockquote>

              <figcaption className="mt-6 text-sm text-mist">
                SoPoPoet, Amazon Reviewer
              </figcaption>

            </figure>


            <figure className="relative rounded-[28px] bg-white p-8 shadow-card overflow-hidden">
              <div className=" absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-coral to-peach" />



              <blockquote className="mt-4 font-body text-body italic text-ink">    
                            "An easy, simple read that has you knowing how to love yourself more and so, with loving tenderness and fierce compassion, how to model for the children in your care, how natural self-love really is."
              </blockquote>

              <figcaption className="mt-6 text-sm text-mist">
                Dee Wallace, actor & author "Born Giving Birth to a New You"
              </figcaption>

            </figure>

          </div>

        </div>
      </section>

      {/* ANIMATED SECTION */}
      <div className="relative z-10">        {/* DISCOVER WHAT'S INSIDE */}
        <section className="relative overflow-hidden bg-warm-white py-section-lg text-ink">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-peach/20 blur-[120px]" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-soft-sage/40 blur-[130px]" />

          <div className="container relative z-10 grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center">
            <div className="mx-auto max-w-sm rounded-[2rem] border border-peach/40 bg-white p-3 shadow-card overflow-hidden">

              <button
                type="button"
                onClick={() => setShowCoverModal(true)}
                className="block w-full cursor-zoom-in"
                aria-label="View back cover larger"
              >

                <img
                  src="/backcover.png"
                  alt="Calm Parents Confident Kids back cover"
                  className="rounded-[1.5rem] transition-transform duration-300 hover:scale-[1.02]"
                />

              </button>

            </div>

            <div className="text-center md:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-coral">
                Discover What's Inside
              </p>

              <h2 className="font-heading text-4xl leading-tight md:text-5xl">
                Practical tools for calmer, more confident parenting
              </h2>

              <p className="mt-5 max-w-xl text-body text-mist">
                This book helps parents move from reacting in fear toward responding with greater confidence, connection, and calm.              </p>

              <ul className="mt-8 grid gap-4 text-left">
                {[
                  "Brain Training for Parents",
                  "Raise Confident, Resilient Kids",
                  "Create Connection & Cooperation",
                  "Shift Your Story. Change Your Life.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-sage text-sm text-ink">
                      ✓
                    </span>
                    <span className="font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  Explore Chapters
                </a>

                <a
                  href="https://read.amazon.com/sample/1733822402?clientId=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-coral bg-white/70 px-6 py-3 text-sm font-semibold text-coral transition hover:-translate-y-0.5 hover:bg-cream"
                >
                  Read a Sample
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal
        open={showCoverModal}
        onClose={() => setShowCoverModal(false)}
        title="Calm Parents Confident Kids — Back Cover"
      >
        <img
          src="/backcover.png"
          alt="Calm Parents Confident Kids back cover enlarged"
          className="w-full h-auto rounded-lg"
        />
      </Modal>
    </div>

  );
}
