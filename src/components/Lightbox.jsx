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
        // Closes only when clicking the darkened background
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative w-full max-w-5xl rounded-xl bg-black shadow-xl overflow-hidden">
        {/* Close Button */}
<button
  onClick={onClose}
  className="absolute top-3 right-3 z-10 text-white text-xl hover:shadow-lg hover:scale-105
 bg-black/50 hover:bg-white hover:text-black transition-all duration-200 rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
  aria-label="Close"
>
  <span className="sr-only">Close</span>
  ×
</button>


        {/* YouTube iframe */}
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
