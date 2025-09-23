import { useMemo, useState } from "react";

export default function VideoCard({ item, onOpen }) {
  const id = (item.videoId || "").trim();

  const sources = useMemo(
    () => [
      `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    ],
    [id]
  );

  const [thumbIdx, setThumbIdx] = useState(0);
  const thumb = sources[Math.min(thumbIdx, sources.length - 1)];

  const handleImgError = () => {
    setThumbIdx((i) => (i < sources.length - 1 ? i + 1 : i));
  };

  return (
    <button
      onClick={() => onOpen?.(item)}
      className="text-left rounded-2xl border bg-white hover:shadow-lg transition-all duration-200 overflow-hidden 
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-video bg-gray-100">
        <img
          src={thumb}
          alt={item.title}
          onError={handleImgError}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/25">
          <span className="inline-flex items-center justify-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold border shadow">
            ▶︎ Watch
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-ink leading-snug">{item.title}</h3>
        {item.by && <p className="mt-1 text-sm text-mist">{item.by}</p>}
        {item.date && (
          <p className="mt-1 text-xs text-gray-400">
            {new Date(item.date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}
        {item.description && (
          <p className="mt-2 text-sm text-gray-700 line-clamp-2">{item.description}</p>
        )}
      </div>
    </button>
  );
}
