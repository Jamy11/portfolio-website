"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { fadeUp } from "@/components/common/animations";

export default function ProjectsSection({ projects }) {
  return (
    <motion.section
      id="projects"
      {...fadeUp}
      className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8"
    >
      <div className="mb-8">
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          A few builds that show how I think, design, and ship.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map(({ name, blurb, stack, github }) => (
          <motion.article
            key={name}
            whileHover={{ y: -8 }}
            className="project-card rounded-[1.9rem] p-7"
          >
            <div className="flex h-full flex-col">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent-soft)]">
                  Featured Project
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {name}
                </h3>
                <p className="mt-4 leading-8 text-slate-300">{blurb}</p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-400">{stack}</p>
              </div>

              <div className="mt-8">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-soft)]"
                >
                  View on GitHub
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
