"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white">

      <Container>

        <SectionTitle
          title="Resume"
          subtitle="A quick overview of my experience and skills."
        />

        <div className="mt-12 flex justify-center">

          <div className="max-w-xl w-full border border-slate-200 rounded-2xl p-8 shadow-sm text-center">

            <h3 className="text-xl font-semibold">
              Rahul Kushwaha Resume
            </h3>

            <p className="text-slate-600 mt-4 leading-relaxed">
              Download my resume to get a detailed overview of my skills,
              projects, and experience in React Native and modern web
              development.
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">

              <a
                href="/resume/rahul-kushwaha-resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              >
                Download Resume
              </a>

              <a
                href="/resume/rahul-kushwaha-resume.pdf"
                target="_blank"
                className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
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