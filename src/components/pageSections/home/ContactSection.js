"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeUp } from "@/components/common/animations";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      {...fadeUp}
      className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8"
    >
      <div className="contact-panel rounded-[2.2rem] p-8 sm:p-10 lg:p-12">
        <p className="section-label">Contact</p>
        <h2 className="section-title max-w-2xl">
          If you&apos;re building something meaningful, I&apos;d love to hear
          about it.
        </h2>
        <p className="mt-5 max-w-2xl leading-8 text-slate-300">
          I&apos;m open to software engineering opportunities, collaborations,
          and conversations around web development and machine learning.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:jamy.rahman@example.com"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-soft)]"
          >
            <FaEnvelope />
            Send an Email
          </a>
          <a
            href="https://github.com/jamy11"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jamy-rahman"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}
