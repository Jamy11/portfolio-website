"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/common/animations";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      {...fadeUp}
      className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"
    >
      <div>
        <p className="section-label">About</p>
        <h2 className="section-title">
          A developer who likes building things that feel clear and useful.
        </h2>
      </div>
      <div className="glass-panel rounded-[2rem] p-8 text-base leading-8 text-slate-300">
        <p>
          My background combines modern frontend development with machine
          learning, with a strong focus on building systems that are scalable,
          efficient, and well-structured. I’ve worked extensively with React and
          Next.js to develop production-level applications, while also designing
          and experimenting with ML models.
        </p>
        <p className="mt-5">
          comfortable working across both product-driven development and
          data-focused problem solving — from crafting clean, responsive
          interfaces to improving model performance. My approach is simple:
          write maintainable code, avoid unnecessary complexity, and focus on
          solutions that actually work.
        </p>
      </div>
    </motion.section>
  );
}
