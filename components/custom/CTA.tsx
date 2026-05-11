"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Marquee from "./Marquee";

const CTA = () => {
  return (
    <section id="contact" className="w-full py-20 px-4">
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5227FF]/70">
          Ready to Start?
        </p>
        <h2 className="text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-tight">
          Let&apos;s build something{" "}
          <span className="italic">extraordinary</span> together
        </h2>
        <p className="text-base md:text-lg text-foreground/55 leading-relaxed max-w-xl">
          Have an idea, a product to scale, or a workflow to automate? I&apos;d
          love to hear about it. Let&apos;s turn your vision into reality.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <a
            href="mailto:udaykumardhokia@gmail.com"
            className="button-dark"
          >
            Get in Touch &nbsp;
            <ArrowUpRightIcon />
          </a>
          <a
            href="https://linkedin.com/in/udthedeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="button-light"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
      <Marquee/>
    </section>
  );
};

export default CTA;
