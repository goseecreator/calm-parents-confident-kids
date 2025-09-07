import { useId } from "react";
import { Link } from "react-router-dom";

export default function NavItem({ label, href = "#", children }) {
  const id = useId();
  const hasMenu = !!children;

  return (
    <div className={`relative ${hasMenu ? "group" : ""} flex items-center`}>
      <Link
        to={href}
        className="px-3 py-2 rounded-md text-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-haspopup={hasMenu ? "menu" : undefined}
        aria-expanded={hasMenu ? "false" : undefined}
        aria-controls={hasMenu ? `menu-${id}` : undefined}
      >
        {label}
      </Link>

      {hasMenu && (
<div
  id={`menu-${id}`}
  role="menu"
  className="absolute left-0 top-full mt-1 hidden group-hover:block group-focus-within:block
             bg-white border rounded-md shadow-md min-w-48 z-20"
>
          <div className="p-1">
            <Link
              role="menuitem"
              to="/showcase"
              className="block px-4 py-2 text-sm rounded hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Book Launch Showcase
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
