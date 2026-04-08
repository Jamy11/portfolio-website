"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaBrain, FaLaptopCode } from "react-icons/fa";
import { fadeUp } from "@/components/common/animations";

const icons = {
  laptop: FaLaptopCode,
  brain: FaBrain,
  arrow: FaArrowRight,
};

export default function SkillsSection({ skillGroups }) {
  return (
    <motion.section
      id="skills"
      {...fadeUp}
      className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8"
    >
      <div className="mb-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            Tools I use to turn ideas into working products.
          </h2>
        </div>
        <div className="glass-panel flex rounded-[2rem] p-8 text-base leading-8 text-slate-300 lg:items-center">
          <p>
            A mix of frontend, backend, and machine learning tooling that lets
            me move from concept to implementation without losing momentum.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map(({ title, items, icon }) => {
          const Icon = icons[icon];

          return (
            <motion.article
              key={title}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-[1.75rem] p-6"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 text-[var(--accent)]">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
