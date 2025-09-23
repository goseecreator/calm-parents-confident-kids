// src/components/Tabs.jsx
import { useEffect, useId, useRef } from "react";

export default function Tabs({ items = [], activeId, onChange }) {
  const listRef = useRef(null);
  const baseId = useId();

  useEffect(() => {
    const active = listRef.current?.querySelector(`[data-tab="${activeId}"]`);
    active?.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  }, [activeId]);

  return (
    <div className="w-full">
      <div
        ref={listRef}
        className="flex overflow-x-auto gap-2 py-3 px-2 scrollbar-thin snap-x snap-mandatory"
        role="tablist"
        aria-label="Chapters"
      >
        {items.map((it) => {
          const selected = it.id === activeId;
          return (
            <button
              key={it.id}
              data-tab={it.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-${it.id}`}
              id={`${baseId}-${it.id}-tab`}
              onClick={() => onChange?.(it.id)}
              className={`shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  selected
                    ? "bg-brand text-white shadow-card"
                    : "bg-white text-ink border hover:bg-gray-50"
                }`}
            >
              {it.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
