import CardNav from "../CardNav";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/udthedeveloper",
          ariaLabel: "LinkedIn Profile",
        },
        {
          label: "GitHub",
          href: "https://github.com/udaykumar-dhokia",
          ariaLabel: "GitHub Profile",
        },
        {
          label: "X (Twitter)",
          href: "https://x.com/udaykumardhokia",
          ariaLabel: "X Profile",
        },
      ],
    },
    {
      label: "Work",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        {
          label: "Services",
          href: "#services",
          ariaLabel: "View Services",
        },
        {
          label: "Case Studies",
          href: "#case-studies",
          ariaLabel: "View Case Studies",
        },
        {
          label: "Process",
          href: "#process",
          ariaLabel: "View Process",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          href: "mailto:udaykumardhokia@gmail.com",
          ariaLabel: "Send Email",
        },
        {
          label: "Phone",
          href: "tel:+919537527143",
          ariaLabel: "Call Phone",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/udthedeveloper",
          ariaLabel: "Connect on LinkedIn",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo="/udthedeveloper/logo.svg"
      logoAlt="udthedeveloper"
      items={items}
      baseColor="rgba(255, 255, 255, 0.4)"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
