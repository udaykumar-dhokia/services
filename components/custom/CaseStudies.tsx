"use client";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { caseStudies, type CaseStudy } from "@/data/case-studies";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
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
    </Link>
  );
};

const CaseStudies = () => {
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
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
