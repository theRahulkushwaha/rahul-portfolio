"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="contact">

      <Container>

        <SectionTitle
          title="Contact"
          subtitle="Let's connect and build something great."
        />

        <div className="mt-8 md:mt-12 max-w-xl">

          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            I'm always open to discussing new opportunities, internships,
            or interesting projects. Feel free to reach out.
          </p>

          <div className="mt-6 md:mt-8 space-y-4 text-sm">

            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:therahulkushwaha16@gmail.com"
                className="text-indigo-500 hover:underline break-all"
              >
                therahulkushwaha16@gmail.com
              </a>
            </p>

            <p>
              <span className="font-medium">GitHub:</span>{" "}
              <a
                href="https://github.com/theRahulkushwaha"
                target="_blank"
                className="text-indigo-500 hover:underline break-all"
              >
                github.com/theRahulkushwaha
              </a>
            </p>

            <p>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/rahulkushwaha16"
                target="_blank"
                className="text-indigo-500 hover:underline break-all"
              >
                linkedin.com/in/rahulkushwaha16
              </a>
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}