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
    <section id="hero" className="pt-16 pb-24">

      <Container>

        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <p className="text-slate-500 text-sm font-medium">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-2">
              Rahul Kushwaha
            </h1>

            <h2 className="text-xl md:text-2xl text-indigo-500 mt-3">
              React Native Developer
            </h2>

            <p className="mt-6 text-slate-600 max-w-lg leading-relaxed mx-auto md:mx-0">
              I build scalable mobile applications using React Native and modern
              technologies. I enjoy exploring new tech and turning ideas into
              real products.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
              >
                View Projects
              </button>

              <a
                href="/resume/rahul-kushwaha-resume.pdf"
                className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
              >
                Download Resume
              </a>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >

            <Image
              src="/images/profile.png"
              alt="Rahul Kushwaha"
              width={320}
              height={320}
              priority
              className="rounded-2xl shadow-lg border border-slate-200"
            />

          </motion.div>

        </div>

      </Container>

    </section>
  );
}