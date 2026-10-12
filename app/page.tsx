import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Github,
  GraduationCap,
  Mail,
  Map,
  MapPin,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import HeroVisualCarousel from "@/components/HeroVisualCarousel";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const skillGroups = [
  {
    title: "Machine Learning & AI",
    icon: Sparkles,
    skills: ["Python", "scikit-learn", "YOLOv8", "TensorFlow Lite", "Model Evaluation", "Time-Series ML"]
  },
  {
    title: "Software & Data",
    icon: Code2,
    skills: ["TypeScript", "Next.js", "REST APIs", "SQL", "pandas", "Power BI"]
  },
  {
    title: "Geospatial Systems",
    icon: Map,
    skills: ["GIS", "Spatial Analysis", "Surveying", "Drone Mapping", "GeoJSON", "Web Mapping"]
  },
  {
    title: "Platforms & Tools",
    icon: Database,
    skills: ["Git/GitHub", "Streamlit", "Jupyter", "Google Colab", "Power BI Desktop", "Linux"]
  }
];

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-ink-950 text-slate-100">
      <Navbar />

      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden border-b border-white/[0.06] pt-20">
        <div className="ambient-grid absolute inset-0 -z-20 opacity-50" />
        <div className="orb-float absolute left-[8%] top-[18%] -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute bottom-[15%] right-[8%] -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 md:px-8 lg:grid-cols-[1.18fr_.82fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-100">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent-300" />
              Computer Science × Geospatial Engineering
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Oscar Muchiri
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl">
              Building intelligent systems from{" "}
              <span className="text-gradient">data, code and location.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              Computer Scientist working across machine learning, software engineering
              and geospatial systems, turning complex data into useful, deployable products.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_12px_30px_rgba(34,211,238,0.18)] active:translate-y-0"
              >
                View projects <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href="mailto:oscarmuchiri9@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/25 hover:bg-white/[0.07] hover:text-white active:translate-y-0"
              >
                <Mail size={16} className="transition-transform duration-300 group-hover:scale-110" /> Get in touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Nairobi, Kenya</span>
              <span>MSc Computer Science</span>
              <span>BSc Geospatial Engineering</span>
            </div>
          </div>

          <HeroVisualCarousel />
        </div>
      </section>

      <section id="about" className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A multidisciplinary approach to technology."
          body="My background combines computer science with geospatial engineering, giving me a practical way to think about software, data and the physical world as one connected system."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="panel lg:col-span-2">
            <p className="text-lg leading-8 text-slate-300">
              I build data-driven systems using machine learning, software engineering,
              computer vision and geospatial technology. My work ranges from financial
              forecasting and object detection to business intelligence, IoT and spatial-data workflows.
            </p>
            <p className="mt-5 leading-7 text-slate-400">
              I am especially interested in projects where technical depth translates into a
              clear operational outcome: better decisions, automation, infrastructure visibility,
              or tools that make complex information easier to use.
            </p>
          </div>

          <div className="panel">
            <GraduationCap className="text-accent-300" size={25} />
            <p className="mt-5 text-sm font-semibold text-white">Education</p>
            <div className="mt-4 space-y-5 text-sm">
              <div>
                <p className="font-medium text-slate-200">MSc Computer Science</p>
                <p className="mt-1 text-slate-500">University of Nairobi</p>
              </div>
              <div>
                <p className="font-medium text-slate-200">BSc Geospatial Engineering</p>
                <p className="mt-1 text-slate-500">University of Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell border-y border-white/[0.06] bg-white/[0.012]">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built to solve real problems."
          body="A curated selection spanning machine learning, computer vision, business intelligence and intelligent systems."
        />

        <div className="space-y-7">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {supporting.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit across intelligence, software and space."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div key={title} className="panel group">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent-400/15 bg-accent-400/[0.06] text-accent-300 transition-all duration-300 group-hover:scale-105 group-hover:border-accent-400/30 group-hover:bg-accent-400/[0.10]">
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-sm text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/20 hover:bg-accent-400/[0.05] hover:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="contact-panel relative overflow-hidden rounded-[2rem] border border-accent-400/15 bg-gradient-to-br from-cyan-400/[0.09] via-white/[0.025] to-blue-500/[0.05] p-8 md:p-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">Contact</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Interested in building something useful together?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                I am interested in challenging work across machine learning, software systems,
                geospatial technology and data-driven products.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:oscarmuchiri9@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_12px_30px_rgba(34,211,238,0.18)] active:translate-y-0"
              >
                <Mail size={16} className="transition-transform duration-300 group-hover:scale-110" /> Email me
              </a>
              <a
                href="https://github.com/OscarMuchiri"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-950/40 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/25 hover:bg-ink-950/70 active:translate-y-0"
              >
                <Github size={16} className="transition-transform duration-300 group-hover:rotate-6" /> GitHub <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© 2026 Oscar Muchiri.</p>
          <a href="#top" className="transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-300">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
