"use client"
import {
  LinkedinLogo,
  GithubLogo,
  XLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-semibold text-foreground tracking-tight">
            udthedeveloper
          </p>
          <p className="text-xs text-foreground/40">
            © {currentYear} · All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:udaykumardhokia@gmail.com"
            aria-label="Email"
            className="text-foreground/40 hover:text-[#5227FF] transition-colors duration-200"
          >
            <EnvelopeSimple size={18} weight="regular" />
          </a>
          <a
            href="https://linkedin.com/in/udthedeveloper"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/40 hover:text-[#5227FF] transition-colors duration-200"
          >
            <LinkedinLogo size={18} weight="regular" />
          </a>
          <a
            href="https://github.com/udaykumar-dhokia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/40 hover:text-[#5227FF] transition-colors duration-200"
          >
            <GithubLogo size={18} weight="regular" />
          </a>
          <a
            href="https://x.com/udaykumardhokia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-foreground/40 hover:text-[#5227FF] transition-colors duration-200"
          >
            <XLogo size={18} weight="regular" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
