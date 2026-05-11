"use client";

import {
  BrainIcon,
  CodeIcon,
  DeviceMobileIcon,
  GearSixIcon,
  RocketLaunchIcon,
  PlugsConnectedIcon,
} from "@phosphor-icons/react";
import MagicBento, { type BentoCardProps } from "../MagicBento";

const servicesData: BentoCardProps[] = [
  {
    title: "AI Product Development",
    description:
      "Custom AI-powered applications using LLMs, automation workflows, intelligent agents, and business-focused AI systems.",
    label: "Artificial Intelligence",
    icon: <BrainIcon size={20} weight="duotone" />,
    color: "rgba(255, 255, 255, 0.55)",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Modern, scalable web applications with responsive UI, secure backend systems, and seamless integrations.",
    label: "Web Development",
    icon: <CodeIcon size={20} weight="duotone" />,
    color: "rgba(255, 255, 255, 0.55)",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with performance, usability, and scalability in mind.",
    label: "Mobile",
    icon: <DeviceMobileIcon size={20} weight="duotone" />,
    color: "rgba(255, 255, 255, 0.55)",
  },
  {
    title: "Automation & Internal Tools",
    description:
      "Business workflow automation, dashboards, admin panels, CRM systems, and operational tooling that saves time and reduces manual work.",
    label: "Automation",
    icon: <GearSixIcon size={20} weight="duotone" />,
    color: "rgba(255, 255, 255, 0.55)",
  },
  {
    title: "MVP Development",
    description:
      "Rapid development for startups and founders to validate ideas quickly with production-ready architecture.",
    label: "Startups",
    icon: <RocketLaunchIcon size={20} weight="duotone" />,
    color: "rgba(255, 255, 255, 0.55)",
  },
  {
    title: "API & System Integration",
    description:
      "Third-party API integrations, payment systems, authentication, cloud services, and custom backend infrastructure.",
    label: "Integration",
    icon: <PlugsConnectedIcon size={20} weight="duotone" />,
    color: "rgba(255, 255, 255, 0.55)",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-16 px-4">
      <div className="flex flex-col gap-3 mb-10">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5227FF]/70">
          What I Do
        </p>
        <h2 className="text-3xl md:text-4xl font-heading tracking-tight text-foreground">
          Services
        </h2>
        <p className="text-base text-foreground/60 max-w-2xl leading-relaxed">
          End-to-end development services to help you build, ship, and scale
          your digital products with confidence.
        </p>
      </div>

      <MagicBento
        cards={servicesData}
        textAutoHide={true}
        enableStars={false}
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={300}
        particleCount={12}
        glowColor="82, 39, 255"
        disableAnimations={false}
      />
    </section>
  );
};

export default Services;
