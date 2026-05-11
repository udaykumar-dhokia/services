import CaseStudies from "@/components/custom/CaseStudies";
import CTA from "@/components/custom/CTA";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Process from "@/components/custom/Process";
import Services from "@/components/custom/Services";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto border-x border-[#5227FF]/10 min-h-screen">
      <Navbar />
      <Hero />
      <Separator className="bg-[#5227FF]/10" />
      <Services />
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
