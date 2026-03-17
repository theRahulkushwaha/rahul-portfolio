"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimatedCard from "@/components/shared/AnimatedCard";

export default function Projects() {
  return (
    <section className="py-24" id="projects">
      <Container>

        <SectionTitle
          title="Projects"
          subtitle="Some of the projects I've built."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {projects.map((project) => (
            <AnimatedCard key={project.title}>
              
              {/* 🔥 THIS FIXES HEIGHT */}
              <div className="h-full">
                <ProjectCard project={project} />
              </div>

            </AnimatedCard>
          ))}

        </div>

      </Container>
    </section>
  );
}