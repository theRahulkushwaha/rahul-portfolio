"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { achievements } from "@/data/achievements";
import AnimatedCard from "../shared/AnimatedCard";

export default function Achievements() {
  return (
    <section className="py-24" id="achievements">

      <Container>

        <SectionTitle
          title="Achievements"
          subtitle="Recognitions and certifications."
        />
        <AnimatedCard>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm"
            >

              <div className="flex justify-between items-start">

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <span className="text-sm text-slate-500">
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