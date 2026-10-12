"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  label: string;
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    label: "01",
    title: "Software Engineering",
    description: "From ideas to reliable, deployable systems.",
    image: "/hero/software-engineering.svg"
  },
  {
    label: "02",
    title: "Machine Learning",
    description: "Models, evaluation and intelligent decision systems.",
    image: "/hero/machine-learning.svg"
  },
  {
    label: "03",
    title: "Geospatial Systems",
    description: "Spatial analysis, mapping and location-aware technology.",
    image: "/hero/geospatial-systems.svg"
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
              key={slide.title}
              className={[
                "absolute inset-0 transition-[opacity,transform,filter] duration-[1200ms] ease-in-out",
                index === active
                  ? "scale-100 opacity-100 blur-0"
                  : "pointer-events-none scale-[1.03] opacity-0 blur-[1px]"
              ].join(" ")}
              aria-hidden={index !== active}
            >
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-ink-950/76 p-4 backdrop-blur-xl">
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
              key={slide.title}
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
