"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Contact() {
  return (
    <section className="py-24 bg-slate-50" id="contact">

      <Container>

        <SectionTitle
          title="Contact"
          subtitle="Let's connect and build something great."
        />

        <div className="mt-12 max-w-xl">

          <p className="text-slate-600 leading-relaxed">
            I'm always open to discussing new opportunities, internships,
            or interesting projects. Feel free to reach out.
          </p>

          <div className="mt-8 space-y-4 text-sm">

            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:therahulkushwaha16@gmail.com"
                className="text-indigo-500 hover:underline"
              >
                therahulkushwaha16@gmail.com
              </a>
            </p>

            <p>
              <span className="font-medium">GitHub:</span>{" "}
              <a
                href="https://github.com/theRahulkushwaha"
                target="_blank"
                className="text-indigo-500 hover:underline"
              >
                github.com/theRahulkushwaha
              </a>
            </p>

            <p>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/rahulkushwaha16"
                target="_blank"
                className="text-indigo-500 hover:underline"
              >
                linkedin.com/in/rahulkushwaha16
              </a>
            </p>

          </div>

          <div className="mt-8">

  

          </div>

        </div>

      </Container>

    </section>
  );
}