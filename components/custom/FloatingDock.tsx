"use client";

import {
  Phone,
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  XLogo,
} from "@phosphor-icons/react";
import Dock from "../Dock";

export default function FloatingDock() {
  const items = [
    {
      icon: <Phone size={22} weight="duotone" />,
      label: "Phone",
      onClick: () => window.open("tel:+919537527143"),
    },
    {
      icon: <EnvelopeSimple size={22} weight="duotone" />,
      label: "Email",
      onClick: () => window.open("mailto:udaykumardhokia@gmail.com"),
    },
    {
      icon: <LinkedinLogo size={22} weight="duotone" />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://linkedin.com/in/udthedeveloper", "_blank"),
    },
    {
      icon: <GithubLogo size={22} weight="duotone" />,
      label: "GitHub",
      onClick: () =>
        window.open("https://github.com/udaykumar-dhokia", "_blank"),
    },
    {
      icon: <XLogo size={22} weight="duotone" />,
      label: "X (Twitter)",
      onClick: () => window.open("https://x.com/udaykumardhokia", "_blank"),
    },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 pointer-events-none mb-6">
      <div className="pointer-events-auto">
        <Dock
          items={items}
          panelHeight={64}
          baseItemSize={48}
          magnification={68}
        />
      </div>
    </div>
  );
}
