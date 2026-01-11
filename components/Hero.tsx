"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        {/* TÍTULO — shimmer executivo (1x, sutil) */}
        <motion.h1
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{
            duration: 4.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="
            text-4xl md:text-5xl font-semibold tracking-tight mb-6
            bg-linear-to-r
            from-neutral-900
            via-slate-500
            to-neutral-900
            bg-size-[300%_300%]
            bg-clip-text text-transparent
            drop-shadow-[0_1px_8px_rgba(160,160,160,0.18)]
          "
        >
          Finance Professional Leveraging Technology & AI
        </motion.h1>

        {/* SUBTÍTULO — fade + translate */}
        <FadeIn>
          <p className="text-lg text-neutral-600 mb-10">
            I design practical, data-driven and automation-focused solutions to
            reduce risk and improve decision-making.
          </p>
        </FadeIn>

        {/* CTAs — sem animação (estabilidade visual) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-neutral-300 text-sm font-medium hover:bg-neutral-100 transition"
          >
            Work With Me
          </a>
        </div>

      </div>
    </section>
  );
}
