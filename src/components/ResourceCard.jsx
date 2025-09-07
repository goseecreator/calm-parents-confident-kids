// src/components/ResourceCard.jsx
export default function ResourceCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border overflow-hidden hover:shadow transition bg-white"
    >
      <div className="aspect-video bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        {item.description && (
          <p className="mt-2 text-sm text-gray-700">{item.description}</p>
        )}
      </div>
    </a>
  );
}
