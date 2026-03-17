"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimatedCard from "@/components/shared/AnimatedCard";
import { Github } from "lucide-react";

export default function Projects() {
  // PC: first 5 projects + 1 "view all" card = 6 total
  // Mobile: first 3 projects + 1 "view all" card = 4 total
  const pcProjects = projects.slice(0, 5);
  const mobileProjects = projects.slice(0, 3);
  const remainingPC = projects.slice(5);
  const remainingMobile = projects.slice(3);

  return (
    <section className="py-16 md:py-24" id="projects">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Some of the projects I've built."
        />

        {/* ── DESKTOP grid (md+): 5 project cards + 1 view-all card ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {pcProjects.map((project) => (
            <AnimatedCard key={project.title}>
              <div className="h-full">
                <ProjectCard project={project} />
              </div>
            </AnimatedCard>
          ))}

          {/* 6th card: View All */}
          <AnimatedCard>
            <div className="h-full border border-slate-200 rounded-2xl shadow-sm bg-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  More Projects
                </h3>
                <p className="text-slate-500 text-sm mt-2">
                  {remainingPC.length} more projects on GitHub
                </p>
                <ul className="mt-4 space-y-2">
                  {remainingPC.map((p) => (
                    <li
                      key={p.title}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {p.title}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://github.com/theRahulkushwaha"
                target="_blank"
                className="mt-6 flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-700 transition"
              >
                <Github size={16} />
                View All on GitHub
              </a>
            </div>
          </AnimatedCard>
        </div>

        {/* ── MOBILE grid (below md): 3 project cards + 1 view-all card ── */}
        <div className="grid md:hidden grid-cols-1 gap-6 items-stretch">
          {mobileProjects.map((project) => (
            <AnimatedCard key={project.title}>
              <div className="h-full">
                <ProjectCard project={project} />
              </div>
            </AnimatedCard>
          ))}

          {/* 4th card: View All */}
          <AnimatedCard>
            <div className="h-full border border-slate-200 rounded-2xl shadow-sm bg-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  More Projects
                </h3>
                <p className="text-slate-500 text-sm mt-2">
                  {remainingMobile.length} more projects on GitHub
                </p>
                <ul className="mt-4 space-y-2">
                  {remainingMobile.map((p) => (
                    <li
                      key={p.title}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {p.title}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://github.com/theRahulkushwaha"
                target="_blank"
                className="mt-6 flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-700 transition"
              >
                <Github size={16} />
                View All on GitHub
              </a>
            </div>
          </AnimatedCard>
        </div>
      </Container>
    </section>
  );
}
