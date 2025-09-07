import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import VideoCard from "../components/VideoCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { showcase as rawShowcase } from "../data/showcase.js";

export default function Showcase() {
  // Optional: sort newest first
  const items = useMemo(() => {
    return [...rawShowcase].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }, []);

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = items.filter((it) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      it.title.toLowerCase().includes(q) ||
      (it.by || "").toLowerCase().includes(q) ||
      (it.description || "").toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <Section fullBleed className="bg-white" title="Book Launch Showcase"
        subtitle="Talks, readings, trailers, and behind-the-scenes.">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            placeholder="Search videos…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-72 px-3 py-2 rounded-md border focus:outline-none focus:ring-2"
          />
        </div>

        {/* Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <VideoCard key={item.id} item={item} onOpen={setActive} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-sm text-gray-600">No videos match your search.</div>
          )}
        </div>

        <Lightbox open={!!active} onClose={() => setActive(null)} item={active} />
      </Section>
    </div>
  );
}
