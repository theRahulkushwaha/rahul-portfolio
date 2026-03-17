"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { achievements } from "@/data/achievements";
import AnimatedCard from "../shared/AnimatedCard";

export default function Achievements() {
  return (
    <section className="py-16 md:py-24" id="achievements">

      <Container>

        <SectionTitle
          title="Achievements"
          subtitle="Recognitions and certifications."
        />
        <AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-5 md:p-6 bg-white shadow-sm"
            >

              <div className="flex justify-between items-start gap-3">

                <h3 className="font-semibold text-base md:text-lg">
                  {item.title}
                </h3>

                <span className="text-sm text-slate-500 shrink-0">
                  {item.year}
                </span>

              </div>

              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>
        </AnimatedCard>

      </Container>

    </section>
  );
}