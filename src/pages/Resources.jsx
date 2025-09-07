// src/pages/Resources.jsx
import Section from "../components/Section.jsx";
import ResourceCard from "../components/ResourceCard.jsx";
import { resources } from "../data/resources.js";

export default function Resources() {
  return (
    <Section
      fullBleed
      className="bg-white"
      title="Resources"
      subtitle="Helpful tools and downloads to support calm, confident parenting."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
