"use client";

import { motion } from "motion/react";

interface TechIcon {
  name: string;
  src: string;
  category: string;
}

interface TechStackProps {
  icons: TechIcon[];
}

const categoryLabels: Record<string, string> = {
  lang: "Languages",
  framework: "Frameworks",
  tools: "Tools & Platforms",
};

const TechStack = ({ icons }: TechStackProps) => {
  const grouped = icons.reduce<Record<string, TechIcon[]>>((acc, icon) => {
    if (!acc[icon.category]) acc[icon.category] = [];
    acc[icon.category].push(icon);
    return acc;
  }, {});

  const categoryOrder = ["lang", "framework", "tools"];
  const orderedCategories = categoryOrder.filter((c) => grouped[c]);

  return (
    <section id="tech-stack" className="w-full py-16 px-4">
      <div className="flex flex-col gap-3 mb-10">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5227FF]/70">
          Tech Stack
        </p>
        <h2 className="text-3xl md:text-4xl font-heading tracking-tight text-foreground">
          We Work With
        </h2>
        <p className="text-base text-foreground/60 max-w-2xl leading-relaxed">
          Modern, battle-tested technologies to build fast, scalable, and
          reliable products.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {orderedCategories.map((category) => (
          <div key={category} className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-foreground/40">
              {categoryLabels[category] || category}
            </p>

            <div
              className="relative w-full overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    duration: 20 + grouped[category].length * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {[...grouped[category], ...grouped[category]].map(
                  (icon, i) => (
                    <div
                      key={`${icon.name}-${i}`}
                      className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#5227FF]/8 bg-white/50 backdrop-blur-xl shrink-0 transition-all duration-300 hover:border-[#5227FF]/20 hover:bg-white/70 hover:shadow-[0_4px_20px_rgba(82,39,255,0.06)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={icon.src}
                        alt={icon.name}
                        className="w-7 h-7 object-contain"
                      />
                      <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">
                        {icon.name}
                      </span>
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
