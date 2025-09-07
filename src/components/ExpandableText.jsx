// src/components/ExpandableText.jsx
import { useEffect, useLayoutEffect, useRef, useState, useId, useRef as useRefAlias } from "react";

export default function ExpandableText({
  children,
  collapsedLines = 10,
  className = "",
  moreLabel = "Read more",
  lessLabel = "Read less",
}) {
  const id = useId();
  const boxRef = useRef(null);
  const interactedRef = useRefAlias(false);   // tracks if user clicked the toggle
  const [open, setOpen] = useState(true);     // default true; we’ll correct after measuring
  const [needsToggle, setNeedsToggle] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(0);

  // Compute collapsed pixel height from line-height * lines
  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const cs = getComputedStyle(el);
    const fontSize = parseFloat(cs.fontSize || "16");
    const lh = cs.lineHeight === "normal" ? 1.6 * fontSize : parseFloat(cs.lineHeight || "24");
    setCollapsedHeight(Math.ceil(lh * collapsedLines));
  }, [collapsedLines]);

  // Decide if content is long; set default open only once (before user interacts)
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const decide = () => {
      const full = el.scrollHeight;
      const isLong = collapsedHeight > 0 && full > collapsedHeight + 2;
      setNeedsToggle(isLong);

      // Only set the default state if user hasn't clicked yet
      if (!interactedRef.current) {
        setOpen(!isLong); // short = open, long = collapsed
      } else {
        // If content becomes short (e.g., responsive change), force open
        if (!isLong) setOpen(true);
      }
    };

    decide();
    const ro = new ResizeObserver(decide);
    ro.observe(el);
    return () => ro.disconnect();
  }, [collapsedHeight, interactedRef]);

  const toggle = () => {
    interactedRef.current = true;
    setOpen(v => !v);
  };

  return (
    <div className={`relative ${className}`} aria-expanded={open} aria-describedby={id}>
      <div
        ref={boxRef}
        id={id}
        className={open ? "transition-all" : "overflow-hidden relative pr-1 transition-all"}
        style={open ? undefined : { maxHeight: collapsedHeight }}
      >
        {children}

        {!open && needsToggle && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      {needsToggle && (
        <button
          type="button"
          onClick={toggle}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-2
                     hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-controls={id}
        >
          {open ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
