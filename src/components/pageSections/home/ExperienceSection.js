"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/common/animations";

export default function ExperienceSection({ experience }) {
  return (
    <motion.section
      id="experience"
      {...fadeUp}
      className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8"
    >
      <p className="section-label">Experience</p>
      <h2 className="section-title mb-8">
        Work that sharpened both product thinking and technical execution.
      </h2>

      <div className="grid gap-6">
        {experience.map(({ title, company, period, summary }) => (
          <article
            key={`${company}-${title}`}
            className="glass-panel rounded-[1.75rem] p-7"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-1 text-base text-[var(--accent-soft)]">
                  {company}
                </p>
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                {period}
              </p>
            </div>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              {summary}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
