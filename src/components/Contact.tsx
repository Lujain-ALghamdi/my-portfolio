"use client";

import { profile } from "@/data/profile";
import { SectionLabel } from "./About";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-panel pb-32">
      <SectionLabel n="05" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 max-w-2xl"
      >
        <p className="text-slate-300 mb-8 leading-relaxed">
          I&apos;m open to software development opportunities, technical collaborations, and
          projects where I can continue learning, building, and creating meaningful digital
          solutions.
        </p>

        <div className="space-y-4 font-mono text-sm">
          <ContactLink
            label="Email"
            href="mailto:lujain.a.a.alghamdi@gmail.com"
            value="lujain.a.a.alghamdi@gmail.com"
            />
          <ContactLink
            label="Phone"
            href="tel:+966556330979"
            value="0556330979"
            />
          <ContactLink 
            label="GitHub" 
            href={profile.github} 
            value="Lujain-ALghamdi" 
            external 
            />
          <ContactLink
            label="LinkedIn"
            href={profile.linkedin}
            value="Lujain A. Alghamdi"
            external
          />
          
        </div>
      </motion.div>

      <footer className="mt-16 text-center text-xs text-slate-600 font-mono">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js & Three.js
      </footer>
    </section>
  );
}

function ContactLink({
  label,
  href,
  value,
  external,
}: {
  label: string;
  href?: string;
  value: string;
  external?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      <span className="text-cyan-500/70 w-20 uppercase text-xs tracking-wider">{label}</span>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-slate-200 hover:text-cyan-300 transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-slate-200">{value}</span>
      )}
    </div>
  );
}
