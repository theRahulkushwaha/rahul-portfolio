"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-white">

      <Container>

        <SectionTitle
          title="Resume"
          subtitle="A quick overview of my experience and skills."
        />

        <div className="mt-8 md:mt-12 flex justify-center">

          <div className="max-w-xl w-full border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm text-center">

            <h3 className="text-lg md:text-xl font-semibold">
              Rahul Kushwaha Resume
            </h3>

            <p className="text-slate-600 mt-4 leading-relaxed text-sm md:text-base">
              Download my resume to get a detailed overview of my skills,
              projects, and experience in React Native and modern web
              development.
            </p>

            <div className="mt-6 md:mt-8 flex justify-center gap-3 flex-wrap">

              <a
                href="/resume/rahul-kushwaha-resume.pdf"
                target="_blank"
                className="px-5 py-2.5 md:px-6 md:py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition text-sm md:text-base"
              >
                Download Resume
              </a>

              <a
                href="/resume/rahul-kushwaha-resume.pdf"
                target="_blank"
                className="px-5 py-2.5 md:px-6 md:py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition text-sm md:text-base"
              >
                Preview
              </a>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}