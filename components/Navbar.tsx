import { Github } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"]
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent-400/20 bg-accent-400/[0.08] text-sm font-black text-accent-300 transition-all duration-300 group-hover:scale-105 group-hover:border-accent-400/40 group-hover:bg-accent-400/[0.12] group-hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]">
            OM
          </span>
          <span className="hidden text-sm font-semibold text-slate-200 sm:block">Oscar Muchiri</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm text-slate-400 transition duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent-300 after:transition-all after:duration-300 hover:text-white hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/OscarMuchiri"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/30 hover:bg-white/[0.06] hover:text-accent-300 hover:shadow-[0_8px_24px_rgba(34,211,238,0.08)]"
        >
          <Github size={16} className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  );
}
