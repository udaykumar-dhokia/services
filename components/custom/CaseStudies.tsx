"use client";

import { useState } from "react";
import { ArrowUpRightIcon, XIcon } from "@phosphor-icons/react";
import { caseStudies, type CaseStudy } from "@/data/case-studies";
import { AnimatePresence, motion } from "motion/react";


const CaseStudyCard = ({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col rounded-2xl border border-[#5227FF]/8 bg-white/55 backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:border-[#5227FF]/15 hover:shadow-[0_8px_30px_rgba(82,39,255,0.06)] hover:-translate-y-1 text-left w-full"
    >
      <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#5227FF]/5 to-[#B497CF]/10 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={study.thumbnail}
          alt={study.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex flex-wrap gap-1.5">
          {study.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-wider uppercase text-[#5227FF]/60 bg-[#5227FF]/5 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-foreground leading-snug">
          {study.title}
        </h3>
        <p className="text-sm text-foreground/50 leading-relaxed line-clamp-2">
          {study.tagline}
        </p>
        <div className="flex items-center gap-1 text-xs font-semibold text-[#5227FF] mt-auto pt-2">
          Read Case Study
          <ArrowUpRightIcon size={12} />
        </div>
      </div>
    </button>
  );
};

const CaseStudyModal = ({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#5227FF]/10 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="sticky top-4 float-right mr-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur border border-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
        >
          <XIcon size={16} weight="bold" />
        </button>

        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#5227FF]/5 to-[#B497CF]/10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.thumbnail}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-wider uppercase text-[#5227FF]/60 bg-[#5227FF]/5 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-heading tracking-tight text-foreground mb-1">
            {study.title}
          </h2>
          <p className="text-base text-foreground/50 mb-8">{study.tagline}</p>

          {study.url && (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5227FF] hover:underline mb-8"
            >
              Visit Live Project
              <ArrowUpRightIcon size={14} />
            </a>
          )}

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-red-500/70 mb-3">
                Problem
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {study.problem}
              </p>
            </div>

            <div className="w-full h-px bg-[#5227FF]/8" />

            <div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5227FF]/70 mb-3">
                Solution
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {study.solution}
              </p>
            </div>

            <div className="w-full h-px bg-[#5227FF]/8" />

            <div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald-600/70 mb-3">
                Impact
              </h3>
              <ul className="space-y-2.5">
                {study.impact.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground/70 leading-relaxed"
                  >
                    <span className="text-emerald-500 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="w-full py-16 px-4">
      <div className="flex flex-col gap-3 mb-10">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5227FF]/70">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-4xl font-heading tracking-tight text-foreground">
          Case Studies
        </h2>
        <p className="text-base text-foreground/60 max-w-2xl leading-relaxed">
          Real projects, real impact. Here&apos;s how I helped businesses solve
          complex problems with clean architecture and thoughtful design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.slug}
            study={study}
            onOpen={() => setActiveStudy(study)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeStudy && (
          <CaseStudyModal
            study={activeStudy}
            onClose={() => setActiveStudy(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
