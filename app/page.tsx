"use client";

import { useState } from "react";
import ModeToggle from "@/components/toggle/ModeToggle";

import Hero from "@/components/hr/Hero";
import Projects from "@/components/hr/Projects";
import Experience from "@/components/hr/Experience";

import Terminal from "@/components/dev/Terminal";

export default function Home() {
  const [mode, setMode] = useState("hr");

  return (
    <main className="min-h-screen">

      <div className="p-6 flex justify-end">
        <ModeToggle setMode={setMode} />
      </div>

      {mode === "hr" ? (
        <>
          <Hero />
          <Projects />
          <Experience />
        </>
      ) : (
        <Terminal />
      )}

    </main>
  );
}