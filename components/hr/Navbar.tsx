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
      className={`w-full px-8 py-4 flex justify-between items-center border-b
      ${
        devMode
          ? "bg-black text-green-400 border-green-900 font-mono"
          : "bg-white text-slate-800 border-slate-200"
      }`}
    >
      <h1 className="font-semibold text-lg">
        Rahul Kushwaha
      </h1>

      {/* Navigation Links (HR mode only) */}
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

    </nav>
  );
}