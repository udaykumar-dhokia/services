import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyDetail from "@/components/custom/CaseStudyDetail";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: "Case Study Not Found" };
    return {
      title: `${study.title} — udthedeveloper`,
      description: study.tagline,
    };
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetail study={study} />;
}
