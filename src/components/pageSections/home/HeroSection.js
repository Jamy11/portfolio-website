"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24"
    >
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <span className="mb-6 inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--panel-strong)] px-4 py-2 text-sm text-[var(--accent-soft)]">
            Software Engineer • Machine Learning Engineer
          </span>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Clean code, smart systems, and real-world solutions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I&apos;m Jamy Rahman. — working at the intersection of software
            engineering and machine learning. Known for turning ideas into
            solid, scalable systems… and occasionally over-optimizing things
            just for fun.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-[var(--accent-soft)]"
            >
              View Projects
              <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Let&apos;s Connect
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden rounded-[2rem] p-8"
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent-soft)]">
            Snapshot
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-4xl font-semibold text-white">2+</p>
              <p className="mt-2 text-sm text-slate-300">
                roles across product engineering and teaching
              </p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-white">4</p>
              <p className="mt-2 text-sm text-slate-300">
                featured projects spanning web and ML
              </p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-white">1M+</p>
              <p className="mt-2 text-sm text-slate-300">
                plugin installations impacted during product work
              </p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-white">100%</p>
              <p className="mt-2 text-sm text-slate-300">
                focus on clean UI, reliability, and growth
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
