"use client";

import Link from "next/link";
import { ArrowUpRightIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import type { CaseStudy } from "@/data/case-studies";
import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";
import { Separator } from "@/components/ui/separator";

const CaseStudyDetail = ({ study }: { study: CaseStudy }) => {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto border-x border-[#5227FF]/10 min-h-screen">
      <Navbar />

      <div className="pt-28 md:pt-32 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-[#5227FF] transition-colors duration-200 mb-8"
          >
            <ArrowLeftIcon size={14} />
            Back to Case Studies
          </Link>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#5227FF]/5 to-[#B497CF]/10 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.thumbnail}
              alt={study.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-wider uppercase text-[#5227FF]/60 bg-[#5227FF]/5 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground mb-2 leading-tight">
            {study.title}
          </h1>
          <p className="text-base md:text-lg text-foreground/50 mb-8 max-w-3xl">
            {study.tagline}
          </p>

          {study.url && (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-dark inline-flex items-center gap-2 mb-12"
            >
              Visit Live Project
              <ArrowUpRightIcon size={16} />
            </a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-12 pb-16"
        >
          <div className="rounded-2xl border border-[#5227FF]/8 bg-white/40 backdrop-blur-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-red-500/70">
                The Problem
              </h2>
            </div>
            <p className="text-base text-foreground/70 leading-relaxed">
              {study.problem}
            </p>
          </div>

          <div className="rounded-2xl border border-[#5227FF]/8 bg-white/40 backdrop-blur-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#5227FF]" />
              <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5227FF]/70">
                The Solution
              </h2>
            </div>
            <p className="text-base text-foreground/70 leading-relaxed">
              {study.solution}
            </p>
          </div>

          <div className="rounded-2xl border border-[#5227FF]/8 bg-white/40 backdrop-blur-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald-600/70">
                The Impact
              </h2>
            </div>
            <ul className="space-y-3">
              {study.impact.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-foreground/70 leading-relaxed"
                >
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0 text-lg">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <Separator className="bg-[#5227FF]/10" />
      <CTA />
      <Separator className="bg-[#5227FF]/10" />
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
