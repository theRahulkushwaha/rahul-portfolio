"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { experience } from "@/data/experience";
import AnimatedCard from "../shared/AnimatedCard";

export default function Experience() {
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="experience">

      <Container>

        <SectionTitle
          title="Experience"
          subtitle="My professional experience and internships."
        />
        <AnimatedCard>

        <div className="space-y-6 md:space-y-8 mt-12">

          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm"
            >

              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">

                <h3 className="text-base md:text-lg font-semibold">
                  {exp.role}
                </h3>

                <span className="text-sm text-slate-500 shrink-0">
                  {exp.duration}
                </span>

              </div>

              <p className="text-indigo-500 font-medium mt-1 text-sm md:text-base">
                {exp.company}
              </p>

              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-slate-100 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
        </AnimatedCard>

      </Container>

    </section>
  );
}