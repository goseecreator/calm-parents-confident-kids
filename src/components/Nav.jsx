import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Book", path: "/book", sub: [{ name: "Book Launch Showcase", path: "/showcase" }] },
    { name: "Creators", path: "/creators" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav className="bg-white border-b shadow-sm fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <Link to="/" className="text-xl font-heading text-brand-dark">
            Calm Parents Confident Kids
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) =>
              link.sub ? (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className="text-sm text-ink hover:text-brand transition"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {link.name}
                  </Link>
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow z-20">
                    {link.sub.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className="block px-4 py-2 text-sm text-ink hover:bg-gray-50"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-ink hover:text-brand transition"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-ink hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-ink"></span>
                <span className="block w-6 h-0.5 bg-ink"></span>
                <span className="block w-6 h-0.5 bg-ink"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-4 py-3 space-y-2">
          {navLinks.map((link) =>
            link.sub ? (
              <div key={link.name} className="space-y-1">
                <Link to={link.path} onClick={() => setMobileOpen(false)} className="block text-ink font-medium">
                  {link.name}
                </Link>
                <div className="ml-4 border-l border-gray-200 pl-4">
                  {link.sub.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.path}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-gray-700 py-1"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block text-ink font-medium"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
