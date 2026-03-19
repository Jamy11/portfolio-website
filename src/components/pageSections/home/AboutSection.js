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
          My background blends software engineering with machine learning,
          which means I like both structured product work and exploratory
          problem solving. I care about interfaces that are easy to use, code
          that stays maintainable, and projects that teach me something new.
        </p>
        <p className="mt-5">
          Whether I&apos;m improving a frontend, supporting users, or
          experimenting with models, I try to bring the same mindset:
          thoughtful execution, steady iteration, and attention to detail.
        </p>
      </div>
    </motion.section>
  );
}
