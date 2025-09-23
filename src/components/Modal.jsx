// src/components/Modal.jsx
import { useEffect } from "react";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative w-full max-w-lg rounded-xl bg-white shadow-xl border">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-base font-semibold">{title}</h3>
<button
  onClick={onClose}
  className="absolute top-3 right-3 z-10 text-white text-xl bg-black/50 hover:bg-white hover:text-black transition-all duration-200 rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
  aria-label="Close"
>
  <span className="sr-only">Close</span>
  ×
</button>


        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
