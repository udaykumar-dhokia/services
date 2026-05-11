"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import CountUp from "../CountUp";
import RotatingText from "../RotatingText";

const Hero = () => {
  return (
    <div className="flex flex-col justify-end-safe items-center h-[75vh] w-full">
      <div className="flex flex-col gap-6 items-center max-w-5xl px-4">
        <h1 className="text-5xl md:text-7xl font-heading text-center leading-tight tracking-tight">
          Helping people to{" "}
          <span className="inline-flex translate-y-2">
            <RotatingText
              texts={[
                "ship faster",
                "build smarter",
                "launch products",
                "automate workflows",
                "scale with AI",
              ]}
              mainClassName="bg-black text-white px-4 md:px-5 rounded-2xl overflow-hidden shadow-2xl"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
              }}
              rotationInterval={2200}
              splitBy="characters"
              auto
              loop
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl opacity-75 text-foreground text-center max-w-3xl leading-relaxed">
          I help startups, founders, and businesses build scalable AI tools,
          SaaS platforms, automation systems, and modern applications with clean
          architecture and exceptional user experience.
        </p>

        <div className="flex items-center gap-4 pt-2">
          <button type="button" className="button-dark">
            Let’s Build Your Product &nbsp;
            <ArrowUpRightIcon />
          </button>

          <button className="button-light">See My Work</button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-12 md:mt-16 w-full max-w-4xl px-4 pb-6">
        <div className="flex flex-col items-center gap-1.5">
          <h3 className="text-4xl md:text-5xl font-heading text-foreground flex items-center">
            <CountUp
              from={0}
              to={6}
              direction="up"
              duration={1}
              className="count-up-text"
              delay={0.1}
            />
            +
          </h3>
          <p className="text-xs md:text-sm text-foreground/50 font-semibold uppercase tracking-widest">
            Services
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <h3 className="text-4xl md:text-5xl font-heading text-foreground flex items-center">
            <CountUp
              from={0}
              to={4}
              direction="up"
              duration={1}
              className="count-up-text"
              delay={0.2}
            />
            +
          </h3>
          <p className="text-xs md:text-sm text-foreground/50 font-semibold uppercase tracking-widest">
            Happy Clients
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <h3 className="text-4xl md:text-5xl font-heading text-foreground flex items-center">
            <CountUp
              from={0}
              to={100}
              direction="up"
              duration={1.5}
              className="count-up-text"
              delay={0.3}
            />
            %
          </h3>
          <p className="text-xs md:text-sm text-foreground/50 font-semibold uppercase tracking-widest">
            Satisfactory Rate
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <h3 className="text-4xl md:text-5xl font-heading text-foreground flex items-center">
            <CountUp
              from={0}
              to={115}
              direction="up"
              duration={1.5}
              separator=","
              className="count-up-text"
              delay={0.4}
            />
            k+
          </h3>
          <p className="text-xs md:text-sm text-foreground/50 font-semibold uppercase tracking-widest">
            Lines of Code
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
