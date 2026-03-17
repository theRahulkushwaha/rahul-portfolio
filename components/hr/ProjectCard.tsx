"use client";

import { Github, ExternalLink, FileText } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  type: "Personal" | "Freelance";
  status: "Completed" | "In Progress";
  github: string;
  live: string;
  readme: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white p-6 h-full flex flex-col justify-between ">

      {/* TOP ROW: Title | Type | Status */}
      <div className="flex items-center justify-between gap-3 flex-wrap">

        {/* Title */}
        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        {/* Right side badges */}
        <div className="flex items-center gap-2">

          {/* Type */}
          <span className="text-xs px-2 py-1 rounded-full border text-slate-600">
            {project.type}
          </span>

          {/* Status */}
          <span
            className={`text-xs px-2 py-1 rounded-full text-white ${
              project.status === "Completed"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          >
            {project.status}
          </span>

        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 mt-3 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-slate-100 px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 mt-6">

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-sm px-4 py-2 bg-slate-900 text-white rounded-lg hover:opacity-90 transition"
        >
          <Github size={16} />
          Code
        </a>

        {/* Live */}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 text-sm px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}

        {/* Readme */}
        <a
          href={project.readme}
          target="_blank"
          className="flex items-center gap-2 text-sm text-indigo-500 hover:underline"
        >
          <FileText size={16} />
          Readme
        </a>

      </div>
    </div>
  );
}