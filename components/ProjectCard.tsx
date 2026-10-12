"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  featured = false
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={[
        "group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-glow transition duration-300 hover:-translate-y-1 hover:border-accent-400/30 hover:bg-white/[0.055]",
        featured ? "grid min-h-[420px] lg:grid-cols-[1.08fr_.92fr]" : ""
      ].join(" ")}
    >
      {project.image && (
        <div
          className={[
            "relative overflow-hidden bg-ink-850",
            featured ? "min-h-[280px] lg:min-h-full" : "aspect-[16/10]"
          ].join(" ")}
        >
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            unoptimized
            className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
            sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
        </div>
      )}

      <div className={featured ? "flex flex-col justify-between p-7 md:p-9" : "p-6 md:p-7"}>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            {project.eyebrow}
          </p>
          <h3 className={featured ? "text-2xl font-semibold text-white md:text-3xl" : "text-xl font-semibold text-white"}>
            {project.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

          {project.metrics && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-accent-400/15 bg-accent-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-100"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md bg-white/[0.055] px-2.5 py-1 text-xs text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-cyan-200"
            >
              Live demo <ArrowUpRight size={16} />
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <Github size={16} /> Source
          </a>
        </div>
      </div>
    </article>
  );
}
