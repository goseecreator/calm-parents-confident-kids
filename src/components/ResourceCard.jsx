// src/components/ResourceCard.jsx
export default function ResourceCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-gray-200 overflow-hidden bg-white transition hover:shadow-card hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src="/hairy thought.jpg"
          alt={item.title}
          className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-brand transition-colors">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-2 text-sm text-mist">{item.description}</p>
        )}
      </div>
    </a>
  );
}
