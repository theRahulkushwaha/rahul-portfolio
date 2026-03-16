import { Card } from "@/components/ui/card";

const projects = [
  {
    name: "CityZen",
    desc: "AI powered city monitoring dashboard",
    tech: "React, Flask, Firebase",
    github: "https://github.com/theRahulkushwaha/CityZen-2.0"
  },
  {
    name: "Echo Chat",
    desc: "Real time chat application",
    tech: "React Native, Node.js, Socket.io",
    github: "https://github.com/theRahulkushwaha/Echoo"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-10">

      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((p) => (
          <Card key={p.name} className="p-6">

            <h3 className="text-xl font-semibold">{p.name}</h3>

            <p className="text-gray-400 mt-2">{p.desc}</p>

            <p className="text-sm mt-2">{p.tech}</p>

            <a
              href={p.github}
              target="_blank"
              className="text-blue-400 mt-3 block"
            >
              View Code
            </a>

          </Card>
        ))}

      </div>

    </section>
  );
}