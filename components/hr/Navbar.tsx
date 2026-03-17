"use client";

import ModeToggle from "../toggle/ModeToggle";

type Props = {
  devMode: boolean;
  setDevMode: (v: boolean) => void;
};

export default function Navbar({ devMode, setDevMode }: Props) {

  const navLinks = [
    { name: "About", id: "hero" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`w-full border-b
      ${
        devMode
          ? "bg-black text-green-400 border-green-900 font-mono"
          : "bg-white text-slate-800 border-slate-200"
      }`}
    >
      {/* ── DESKTOP layout (md and above) ── */}
      <div className="hidden md:flex px-8 py-4 justify-between items-center">
        <h1 className="font-semibold text-lg">Rahul Kushwaha</h1>

        {!devMode && (
          <div className="flex gap-6 text-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-indigo-500 transition"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}

        <ModeToggle devMode={devMode} setDevMode={setDevMode} />
      </div>

      {/* ── MOBILE layout (below md) ── */}
      <div className="flex md:hidden flex-col items-center gap-4 px-4 pt-3 pb-3">
        {/* Row 1: Toggle centered */}
        <div className="flex justify-center w-full">
          <ModeToggle devMode={devMode} setDevMode={setDevMode} />
        </div>

        {/* Row 2: Nav links (HR mode only) */}
        {!devMode && (
          <div className="flex justify-center gap-5 text-base font-medium w-full flex-wrap pb-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-indigo-500 transition"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}