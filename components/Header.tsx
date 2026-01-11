"use client";


import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-50/80 backdrop-blur border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-6">


        <a
          href="#top"
          className="font-semibold text-neutral-800 hover:text-neutral-700 transition"
        >
          Ana Manuella Ribeiro
        </a>


        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#projects" className="hover:text-neutral-900 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-neutral-900 transition">
            About
          </a>
          <a href="#contact" className="hover:text-neutral-900 transition">
            Contact
          </a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
