// src/components/Lightbox.jsx
import { useEffect } from "react";

export default function Lightbox({ open, onClose, item }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !item) return null;

  const src = `https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative w-full max-w-5xl rounded-xl bg-black shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 px-2 py-1 rounded bg-white/90 hover:bg-white"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={src}
            title={item.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
