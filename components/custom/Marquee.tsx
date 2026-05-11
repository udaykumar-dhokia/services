"use client";

import {
  ArrowRightIcon,
  ChartLineUpIcon,
  CloudIcon,
  GearIcon,
  LightbulbIcon,
} from "@phosphor-icons/react";

const Marquee = () => {
  return (
    <div
      className="relative w-full overflow-hidden py-6 mt-6"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-6 px-6 text-sm md:text-base font-medium tracking-wide text-black">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="flex items-center justify-center px-6 py-3 backdrop-blur-md border-foreground/10 rounded-[0.7rem] transition-all hover:bg-foreground/10 bg-white/5">
                <LightbulbIcon /> &nbsp;Idea <ArrowRightIcon /> &nbsp; MVP
              </div>
              <span className="text-foreground/30">✦</span>

              <div className="flex items-center justify-center px-6 py-3 backdrop-blur-md border-foreground/10 rounded-[0.7rem] transition-all hover:bg-foreground/10 bg-white/5">
                <GearIcon /> &nbsp; Manual <ArrowRightIcon /> &nbsp; Automated
              </div>
              <span className="text-foreground/30">✦</span>

              <div className="flex items-center justify-center px-6 py-3 backdrop-blur-md border-foreground/10 rounded-[0.7rem] transition-all hover:bg-foreground/10 bg-white/5">
                <CloudIcon /> &nbsp; Prototype <ArrowRightIcon /> &nbsp;
                Production
              </div>
              <span className="text-foreground/30">✦</span>

              <div className="flex items-center justify-center px-6 py-3 backdrop-blur-md border-foreground/10 rounded-[0.7rem] transition-all hover:bg-foreground/10 bg-white/5">
                <ChartLineUpIcon /> &nbsp;Startup <ArrowRightIcon />{" "}
                &nbsp;Scalable
              </div>
              <span className="text-foreground/30">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
