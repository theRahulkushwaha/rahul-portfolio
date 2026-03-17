"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function Hero() {

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-10 pb-16 md:pt-16 md:pb-24">

      <Container>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <p className="text-slate-500 text-sm font-medium">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-2">
              Rahul Kushwaha
            </h1>

            <h2 className="text-lg md:text-2xl text-indigo-500 mt-3">
              React Native Developer
            </h2>

            <p className="mt-4 text-slate-600 max-w-lg leading-relaxed mx-auto md:mx-0 text-sm md:text-base">
              I build scalable mobile applications using React Native and modern
              technologies. I enjoy exploring new tech and turning ideas into
              real products.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6 md:mt-8">

              <button
                onClick={scrollToProjects}
                className="px-5 py-2.5 md:px-6 md:py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition text-sm md:text-base"
              >
                View Projects
              </button>

              <a
                href="/resume/rahul-kushwaha-resume.pdf"
                className="px-5 py-2.5 md:px-6 md:py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition text-sm md:text-base"
              >
                Download Resume
              </a>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-center md:flex-1 md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >

            <Image
              src="/images/profile.png"
              alt="Rahul Kushwaha"
              width={220}
              height={220}
              priority
              className="rounded-2xl shadow-lg border border-slate-200 md:w-80 md:h-80"
            />

          </motion.div>

        </div>

      </Container>

    </section>
  );
}