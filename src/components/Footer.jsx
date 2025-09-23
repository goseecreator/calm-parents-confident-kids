// src/components/Footer.jsx

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Brand name / Logo */}
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-xl font-heading text-brand-light hover:text-white transition">
            Calm Parents Confident Kids
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4 md:mb-0">
          <Link to="/book" className="text-sm text-brand-light hover:text-white transition">
            Book
          </Link>
          <Link to="/creators" className="text-sm text-brand-light hover:text-white transition">
            Creators
          </Link>
          <Link to="/resources" className="text-sm text-brand-light hover:text-white transition">
            Resources
          </Link>
          <Link to="/showcase" className="text-sm text-brand-light hover:text-white transition">
            Showcase
          </Link>
        </div>

        {/* Right side: Copyright / Social */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-xs text-brand-light mt-2">&copy; {new Date().getFullYear()} Calm Parents Confident Kids. All rights reserved. </p>
            <p className="text-xs text-brand-light mt-2">Created by Go See Online Stellar Designs LLC</p>
        </div>
      </div>
    </footer>
  );
}
