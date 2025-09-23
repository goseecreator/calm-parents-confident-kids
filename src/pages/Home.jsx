// src/pages/Home.jsx
import { motion } from "framer-motion";
import {  useScroll, useTransform } from "framer-motion";
import Section from "../components/Section.jsx";

export default function Home() {
  const { scrollY } = useScroll();

  // Translate upward as scrollY increases (merge effect)
  const y = useTransform(scrollY, [0, 400], [100, 0]);
  const opacity = useTransform(scrollY, [0, 400], [0, 1]);

  return (
    <div>
      {/* HERO */}
   <section className="relative h-screen bg-black text-white">
  {/* Background Image */}
  <img
    src="/CalmParentsFrontCoverFIN1.jpg"
    alt="book cover image"
    className="absolute inset-0 w-full h-full object-cover"
    aria-hidden
  />

  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 bg-black/40 z-0" aria-hidden></div>

  {/* Foreground Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
    <h1 className="text-5xl md:text-7xl font-heading text-white drop-shadow-md">
      Calm Parents Confident Kids.
    </h1>

    <p className="mt-4 max-w-xl text-xl text-white font-body drop-shadow-sm">
      Let your parenting story bloom with tools that power confidence
    </p>

    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://a.co/d/gUlUB0S"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent text-white font-body px-5 py-2 text-sm shadow-sm hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Buy the Book
      </a>

      <a
        href="https://read.amazon.com/sample/1733822402?clientId=share"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md border border-white bg-transparent text-white font-body px-5 py-2 text-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Read a Sample
      </a>
    </div>
  </div>
</section>


      {/* ANIMATED SECTION */}
      <motion.div style={{ y, opacity }} className="relative z-10 -mt-48">
        <Section
fullBleed
className="bg-brand-light text-ink"
title="Calm Parents Confident Kids"
subtitle="How to Use Brain Training to Raise Happy Resilient Children"
>
<div className="flex flex-col justify-center items-center">
<div className="rounded-xl border border-brand bg-white shadow-card overflow-hidden max-w-xs md:max-w-sm">
<img
src="https://calm-parents-confident-kids-bucket.s3.us-east-2.amazonaws.com/Calm+Parents+Confident+Kids+Cover+with+Ribbon.png"
alt="Calm Parents Confident Kids book cover"
className="w-full h-auto object-cover"
/>
</div>


<div className="max-w-xl space-y-4 text-center mt-4 text-body">
<p>Do you want to be more confident as a parent?</p>
<p>Would you like simple tools to raise your child’s — and your own — self-esteem?</p>
<p>
Learn to Train Your Brain to tell a different story and share this learning together.
</p>
<a
href="#book"
className="inline-flex items-center justify-center rounded-md bg-brand text-white px-5 py-2 text-sm font-medium hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
>
BUY THE BOOK
</a>
</div>
</div>
</Section>
      </motion.div>
    </div>
  );
}
