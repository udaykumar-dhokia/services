import fs from "fs";
import path from "path";
import CaseStudies from "@/components/custom/CaseStudies";
import CTA from "@/components/custom/CTA";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Process from "@/components/custom/Process";
import Services from "@/components/custom/Services";
import TechStack from "@/components/custom/TechStack";
import { Separator } from "@/components/ui/separator";

function getTechStackIcons() {
  const techStackDir = path.join(process.cwd(), "public", "tech-stack");
  const categories = fs
    .readdirSync(techStackDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const icons: { name: string; src: string; category: string }[] = [];

  for (const category of categories) {
    const categoryPath = path.join(techStackDir, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((f) => /\.(png|svg|webp|jpg|jpeg)$/i.test(f));

    for (const file of files) {
      const name = file
        .replace(/^icons8-/, "")
        .replace(/-\d+\.(png|svg|webp|jpg|jpeg)$/i, "")
        .replace(/\.(png|svg|webp|jpg|jpeg)$/i, "")
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      icons.push({
        name,
        src: `/services/tech-stack/${category}/${file}`,
        category,
      });
    }
  }

  return icons;
}

const Page = () => {
  const techIcons = getTechStackIcons();

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto border-x border-[#5227FF]/10 min-h-screen">
      <Navbar />
      <Hero />
      <Separator className="bg-[#5227FF]/10" />
      <Services />
      <Separator className="bg-[#5227FF]/10" />
      <TechStack icons={techIcons} />
      <Separator className="bg-[#5227FF]/10" />
      <CaseStudies />
      <Separator className="bg-[#5227FF]/10" />
      <Process />
      <Separator className="bg-[#5227FF]/10" />
      <CTA />
      <Separator className="bg-[#5227FF]/10" />
      <Footer />
    </div>
  );
};

export default Page;
