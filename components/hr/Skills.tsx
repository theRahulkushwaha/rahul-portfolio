"use client";

import { skills } from "@/data/skills";
import SectionTitle from "@/components/shared/SectionTitle";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="py-16 md:py-24" id="skills">

      <Container>

        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies I use to build modern applications."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200 rounded-xl p-4 md:p-5 bg-white shadow-sm hover:shadow-md text-sm md:text-base"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </Container>

    </section>
  );
}