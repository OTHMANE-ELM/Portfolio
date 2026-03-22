import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Parcours" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-ink-950 text-ink-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-ink-800/60 backdrop-blur-md bg-ink-950/80">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            className="font-display text-lg font-semibold tracking-tight text-white hover:text-accent transition-colors duration-200"
          >
            <span className="text-accent font-bold">O.</span>El Matlini
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-white" : "text-ink-400 hover:text-ink-100"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-ink-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-ink-800 bg-ink-950/95 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-body font-medium py-1.5 transition-colors duration-200 ${
                      isActive ? "text-white" : "text-ink-400 hover:text-ink-100"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-ink-800 mt-20 py-8 text-center">
        <p className="text-sm text-ink-500 font-body">
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </p>
        <p className="text-xs text-ink-700 mt-1 font-mono">
          Built with React + TypeScript + Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
