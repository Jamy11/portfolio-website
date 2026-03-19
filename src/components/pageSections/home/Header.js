"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,18,32,0.72)] backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#top"
          className="text-lg font-semibold uppercase tracking-[0.3em] text-[var(--accent)]"
        >
          Jamy Rahman
        </a>

        <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navigation.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="transition hover:text-white"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-3 text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm text-slate-200">
            {navigation.map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="block rounded-2xl border border-white/10 px-4 py-3 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
