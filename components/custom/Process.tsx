"use client";

import {
  MagnifyingGlassIcon,
  MapTrifoldIcon,
  PencilRulerIcon,
  BugDroidIcon,
  RocketLaunchIcon,
} from "@phosphor-icons/react";
import CardSwap, { Card } from "../CardSwap";

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Understanding your business goals, pain points, users, and technical requirements.",
    icon: MagnifyingGlassIcon,
  },
  {
    step: 2,
    title: "Strategy & Planning",
    description:
      "Defining architecture, workflows, timelines, and product roadmap before development starts.",
    icon: MapTrifoldIcon,
  },
  {
    step: 3,
    title: "Design & Development",
    description:
      "Building clean, scalable, and high-performance solutions with continuous feedback loops.",
    icon: PencilRulerIcon,
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description:
      "Ensuring reliability, performance, responsiveness, and smooth user experience across platforms.",
    icon: BugDroidIcon,
  },
  {
    step: 5,
    title: "Launch & Support",
    description:
      "Deployment, monitoring, iteration, and long-term support for continuous product growth.",
    icon: RocketLaunchIcon,
  },
];

const Process = () => {
  return (
    <section id="process" className="w-full py-16 px-4">
      <div className="flex flex-col gap-3 mb-12">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5227FF]/70">
          How I Work
        </p>
        <h2 className="text-3xl md:text-4xl font-heading tracking-tight text-foreground">
          Process
        </h2>
        <p className="text-base text-foreground/60 max-w-2xl leading-relaxed">
          A structured, transparent approach to building products — from first
          conversation to long-term growth.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 flex-1 w-full">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-4 group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#5227FF]/10 to-[#B497CF]/15 text-[#5227FF] flex-shrink-0 mt-0.5">
                <step.icon size={20} weight="duotone" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#5227FF]/50">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 w-full flex items-center justify-center">
          <div style={{ height: "420px", width: "100%", maxWidth: "380px", position: "relative" }}>
            <CardSwap
              cardDistance={40}
              verticalDistance={50}
              delay={4000}
              pauseOnHover={false}
              width="100%"
              height={320}
              skewAmount={4}
            >
              {processSteps.map((step) => (
                <Card
                  key={step.step}
                  className="flex flex-col justify-between p-6"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#5227FF]/10 to-[#B497CF]/15 text-[#5227FF]">
                      <step.icon size={24} weight="duotone" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[#5227FF]/50">
                      Step {step.step}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed mt-4">
                    {step.description}
                  </p>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
