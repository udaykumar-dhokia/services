export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  url?: string;
  thumbnail: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "trackly",
    title: "Trackly",
    tagline: "AI Decision Engine for production AI systems",
    url: "https://www.tracklyai.in",
    thumbnail: "/case-studies/trackly.png",
    tags: ["AI/ML", "SaaS", "Full-Stack", "DevTools"],
    problem:
      "Teams building AI products had no visibility into how their LLM-powered systems performed in production. Debugging agent failures, understanding cost breakdowns across providers like OpenAI, Anthropic, and Gemini, and comparing model efficiency required manual, ad-hoc processes. There was no unified platform to surface actionable insights from AI execution traces.",
    solution:
      'Built Trackly — a full-stack AI observability platform with an SDK that plugs into any LLM provider. The system auto-ingests execution traces, computes real-time costs using live provider pricing, detects critical paths in agent workflows, and surfaces plain-English insights. Features include run comparison with output diffs, "What-If" model swap analysis, feature-level cost attribution, and smart budget alerts. Supports OpenAI, Anthropic, Gemini, Groq, Ollama, Mistral, and more.',
    impact: [
      "Supports 10+ LLM providers with zero-config SDK integration",
      "Auto Insights Engine surfaces findings without manual analysis",
      "Real-time cost intelligence with live model pricing",
      "Critical path detection for agent debugging",
      "Tiered pricing from free to $99/mo for enterprise scale",
    ],
  },
  {
    slug: "agastya-heart-clinic",
    title: "Agastya Heart Clinic",
    tagline: "Digital platform for a Senior Interventional Cardiologist",
    url: "https://www.agastyaheartclinic.com",
    thumbnail: "/case-studies/clinic.png",
    tags: ["Healthcare", "Web Development", "SEO", "CMS"],
    problem:
      "Dr. Arvind Singh, a Senior Interventional & Structural Cardiologist at Apollo CVHF Heart Institute, Ahmedabad, with 11+ years of expertise and 10,000+ procedures, had no professional digital presence. Patients had to rely on word-of-mouth to find him. There was no system for online appointment booking, sharing medical articles, or showcasing patient testimonials — all critical for a modern healthcare practice.",
    solution:
      "Designed and developed a comprehensive medical portfolio and patient engagement platform. The website features an online appointment booking system, a CMS-powered blog for medical articles and cardiac insights, a patient testimonials section, a media gallery, and a resources library. Built with performance, SEO optimization, and mobile responsiveness as priorities to help patients find and connect with Dr. Singh directly.",
    impact: [
      "Professional digital presence established for a leading cardiologist",
      "Online appointment booking eliminates intermediaries",
      "SEO-optimized blog increases organic patient discovery",
      "Patient testimonials build trust and credibility",
      "Mobile-first design serves patients across all devices",
    ],
  },
  {
    slug: "pink-for-purpose",
    title: "Pink for Purpose",
    tagline: "Cancer awareness and community support platform",
    url: "https://saiyette-website-dev.vercel.app",
    thumbnail: "/case-studies/pink.png",
    tags: ["Non-Profit", "Web Development", "Community", "Awareness"],
    problem:
      "Pink for Purpose, a breast cancer awareness initiative operating across the UK, UAE, and India, needed a platform to expand their reach beyond in-person events. They had no centralized hub to share awareness content, manage their donor network, showcase partnerships, or display their impact metrics. Their work — including hair donation campaigns, free screening drives, and corporate partnerships — lacked a digital home.",
    solution:
      "Built a modern, purpose-driven website that serves as the digital hub for the entire initiative. Features include a cancer awareness section with educational content, a donor network page, a partner showcase, an impact gallery with community moments, and clear calls-to-action for involvement. The design uses empathetic branding with a focus on hope, strength, and accessibility to reach women across borders.",
    impact: [
      "Centralized platform for awareness drives across 3 countries",
      "Donor network and partner pages enable community growth",
      "Impact gallery showcases real community moments",
      "Educational cancer awareness content reaches broader audience",
      "Clear CTAs drive volunteer and donor engagement",
    ],
  },
  {
    slug: "gmail-automation",
    title: "Personalised Gmail Automation",
    tagline: "AI-powered email automation for personalized outreach",
    thumbnail: "/case-studies/gmail.webp",
    tags: ["AI/ML", "Automation", "API Integration", "Productivity"],
    problem:
      "Sending personalised emails at scale was a tedious, manual process. Whether for sales outreach, client follow-ups, or marketing campaigns, users had to individually craft each email, manage recipient lists, and track responses — all while trying to maintain a personal touch. Existing tools either lacked customization or required complex setup with no intelligence behind the content generation.",
    solution:
      "Developed an intelligent Gmail automation system that leverages LLMs to generate personalized email content based on recipient context, templates, and user-defined parameters. The system integrates directly with Gmail API, supports bulk operations with individual personalization, handles scheduling and follow-up sequences, and provides delivery tracking. The architecture ensures emails feel genuinely personal while operating at scale.",
    impact: [
      "10x faster email outreach with AI-generated personalization",
      "Direct Gmail API integration — no third-party email tools needed",
      "Automated follow-up sequences reduce manual tracking",
      "Template-based system with LLM customization per recipient",
      "Scalable architecture handles hundreds of personalized emails",
    ],
  },
];
