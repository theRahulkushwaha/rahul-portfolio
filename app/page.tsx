"use client";

import Navbar from "@/components/hr/Navbar";
import Hero from "@/components/hr/Hero";
import Skills from "@/components/hr/Skills";
import Projects from "@/components/hr/Projects";
import Experience from "@/components/hr/Experience";
import Terminal from "@/components/dev/Terminal";
import useMode from "@/hooks/useMode";
import Achievements from "@/components/hr/Achievements";
import Contact from "@/components/hr/Contact";
import Resume from "@/components/hr/Resume";

export default function Home() {
  const { devMode, setDevMode } = useMode();

  return (
    <main>

      <Navbar devMode={devMode} setDevMode={setDevMode} />

      {!devMode && (
        <>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Resume />
          <Contact />
        </>
      )}

      {devMode && <Terminal />}

    </main>
  );
}