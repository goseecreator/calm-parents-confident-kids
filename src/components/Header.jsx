// src/components/Header.jsx
import { Link } from "react-router-dom";
import NavItem from "./NavItem.jsx";
import { creators } from "../data/creators.js";

export default function Header() {
  const defaultCreator = creators[0]?.slug || "angela-humburg";

  return (
    <header className="w-full bg-white/90 border-b backdrop-blur relative z-30">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo / site title */}
        <Link to="/" className="text-base font-semibold">
          Calm Parents Confident Kids
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <NavItem label="Meet the Creators" href={`/${defaultCreator}`} />

          <NavItem label="The Book" href="/book">
            {/* Dropdown item — Showcase link */}
            <Link
              role="menuitem"
              to="/showcase"
              className="block px-4 py-2 text-sm rounded hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Book Launch Showcase
            </Link>
          </NavItem>

          <NavItem label="Resources" href="/resources" />
        </nav>
      </div>
    </header>
  );
}
