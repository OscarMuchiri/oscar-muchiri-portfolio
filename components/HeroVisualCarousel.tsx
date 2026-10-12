"use client";

import { useEffect, useState } from "react";
import {
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Layers3,
  MapPin
} from "lucide-react";

type Slide = {
  id: string;
  label: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    id: "software",
    label: "01",
    title: "Software Engineering",
    description: "From ideas to reliable, deployable systems."
  },
  {
    id: "ai",
    label: "02",
    title: "Machine Learning",
    description: "Models, evaluation and intelligent decision systems."
  },
  {
    id: "geo",
    label: "03",
    title: "Geospatial Systems",
    description: "Spatial analysis, mapping and location-aware technology."
  }
];

export default function HeroVisualCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () =>
    setActive((current) => (current - 1 + slides.length) % slides.length);

  const next = () =>
    setActive((current) => (current + 1) % slides.length);

  return (
    <div
      className="relative mx-auto w-full max-w-[430px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-400/10 to-blue-600/5 blur-3xl" />

      <div className="tech-carousel relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-ink-850">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={[
                "absolute inset-0 transition-[opacity,transform,filter] duration-[1100ms] ease-in-out",
                index === active
                  ? "scale-100 opacity-100 blur-0"
                  : "pointer-events-none scale-[1.025] opacity-0 blur-[1px]"
              ].join(" ")}
              aria-hidden={index !== active}
            >
              {slide.id === "software" && <SoftwareVisual />}
              {slide.id === "ai" && <AiVisual />}
              {slide.id === "geo" && <GeoVisual />}

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-ink-950/78 p-4 backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs font-semibold tracking-[0.18em] text-accent-300">
                    {slide.label}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{slide.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={previous}
            aria-label="Previous technology focus"
            className="absolute left-3 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink-950/65 text-slate-300 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-accent-400/35 hover:text-white"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next technology focus"
            className="absolute right-3 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink-950/65 text-slate-300 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-accent-400/35 hover:text-white"
          >
            <ChevronRight size={17} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 py-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={"Show " + slide.title}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                active === index
                  ? "w-7 bg-accent-300"
                  : "w-1.5 bg-slate-700 hover:bg-slate-500"
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SoftwareVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_68%_18%,rgba(34,211,238,.18),transparent_32%),linear-gradient(145deg,#07111a,#05070b_70%)]">
      <div className="tech-grid absolute inset-0 opacity-45" />

      <div className="absolute left-5 top-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100/70">
        <Code2 size={15} className="text-accent-300" />
        Build / Ship
      </div>

      <div className="absolute left-[12%] right-[9%] top-[20%] overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#07101a]/90 shadow-[0_24px_70px_rgba(0,0,0,.38)]">
        <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.06] px-4">
          <span className="h-2 w-2 rounded-full bg-slate-600" />
          <span className="h-2 w-2 rounded-full bg-slate-700" />
          <span className="h-2 w-2 rounded-full bg-slate-800" />
          <span className="ml-auto text-[9px] text-slate-600">system.ts</span>
        </div>

        <div className="space-y-3 p-4 font-mono text-[9px] leading-4 sm:text-[10px]">
          <CodeLine width="72%" accent />
          <CodeLine width="84%" />
          <CodeLine width="58%" />
          <CodeLine width="78%" accent />
          <CodeLine width="65%" />
          <CodeLine width="88%" />
          <CodeLine width="52%" accent />
        </div>
      </div>

      <div className="absolute bottom-[29%] right-[9%] grid h-14 w-14 place-items-center rounded-2xl border border-accent-400/20 bg-accent-400/[0.08] text-accent-300 shadow-[0_0_34px_rgba(34,211,238,.1)]">
        <Cpu size={26} />
      </div>

      <div className="absolute bottom-[32%] left-[11%] flex gap-2">
        <span className="rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-[9px] text-slate-400">
          API
        </span>
        <span className="rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-[9px] text-slate-400">
          TypeScript
        </span>
      </div>
    </div>
  );
}

function AiVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,.17),transparent_34%),linear-gradient(155deg,#06111a,#05070b_72%)]">
      <div className="tech-grid absolute inset-0 opacity-35" />

      <div className="absolute left-5 top-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100/70">
        <BrainCircuit size={15} className="text-accent-300" />
        Learn / Predict
      </div>

      <div className="absolute left-1/2 top-[20%] h-56 w-56 -translate-x-1/2 sm:h-64 sm:w-64">
        <div className="ai-orbit absolute inset-[14%] rounded-full border border-accent-400/15" />
        <div className="ai-orbit-reverse absolute inset-[29%] rounded-full border border-blue-400/20" />
        <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent-400/25 bg-accent-400/[0.08] text-accent-300 shadow-[0_0_45px_rgba(34,211,238,.14)]">
          <BrainCircuit size={34} />
        </div>

        {[
          ["17%", "18%"],
          ["76%", "21%"],
          ["84%", "66%"],
          ["24%", "78%"],
          ["7%", "52%"],
          ["62%", "84%"]
        ].map(([left, top], i) => (
          <span
            key={i}
            className="ai-node absolute h-2.5 w-2.5 rounded-full bg-accent-300 shadow-[0_0_14px_rgba(103,232,249,.85)]"
            style={{ left, top, animationDelay: (i * 180) + "ms" }}
          />
        ))}
      </div>

      <div className="absolute bottom-[30%] left-[10%] right-[10%] grid grid-cols-3 gap-2">
        {[
          ["66.8%", "Accuracy"],
          ["76.4%", "F1"],
          ["12", "Signals"]
        ].map(([value, label]) => (
          <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-2.5 text-center backdrop-blur">
            <p className="text-sm font-semibold text-white">{value}</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GeoVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_62%_27%,rgba(34,211,238,.16),transparent_30%),linear-gradient(150deg,#061019,#05070b_70%)]">
      <div className="geo-grid absolute inset-0 opacity-55" />

      <div className="absolute left-5 top-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100/70">
        <MapPin size={15} className="text-accent-300" />
        Map / Analyse
      </div>

      <div className="absolute left-[10%] right-[10%] top-[18%] h-[48%] overflow-hidden rounded-2xl border border-accent-400/15 bg-[#07111a]/75">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute left-[12%] top-[22%] h-px w-[70%] rotate-[16deg] bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
          <div className="absolute left-[4%] top-[52%] h-px w-[82%] -rotate-[10deg] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
          <div className="absolute left-[28%] top-[12%] h-[76%] w-px rotate-[20deg] bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent" />
        </div>

        <MapDot left="28%" top="34%" />
        <MapDot left="63%" top="29%" />
        <MapDot left="72%" top="62%" />
        <MapDot left="42%" top="67%" />

        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-white/[0.07] bg-ink-950/70 px-2.5 py-1.5 text-[9px] text-slate-400 backdrop-blur">
          <Layers3 size={12} className="text-accent-300" />
          Spatial layers
        </div>
      </div>

      <div className="absolute bottom-[29%] left-[10%] right-[10%] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2">
          <Database size={14} className="text-accent-300" />
          <span className="text-[10px] text-slate-400">Spatial data</span>
        </div>
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-[10px] text-slate-400">
          GIS · GeoJSON
        </div>
      </div>
    </div>
  );
}

function CodeLine({ width, accent = false }: { width: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={accent ? "text-accent-300" : "text-slate-600"}>{accent ? "›" : "·"}</span>
      <span
        className={accent ? "h-1.5 rounded-full bg-accent-400/50" : "h-1.5 rounded-full bg-slate-700/70"}
        style={{ width }}
      />
    </div>
  );
}

function MapDot({ left, top }: { left: string; top: string }) {
  return (
    <span
      className="absolute grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent-300/25 bg-accent-400/[0.08]"
      style={{ left, top }}
    >
      <span className="h-2 w-2 rounded-full bg-accent-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" />
    </span>
  );
}
