import React from 'react';

interface FooterSection {
  title: string;
  links: { text: string; url: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Your Account",
    links: [
      { text: "Register", url: "/register" },
      { text: "Log in", url: "/login" },
      { text: "Help", url: "#" },
    ],
  },
  {
    title: "Discover",
    links: [
      { text: "Topics", url: "#" }, 
      { text: "Cities", url: "#" },
      { text: "Online Events", url: "#" }, 
    ],
  },
  {
    title: "Events",
    links: [
      { text: "About", url: "#" }, 
      { text: "Blog", url: "#" }, 
      { text: "Contact", url: "#" }, 
    ],
  },
];

export const FooterLinks: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium text-gray-300 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};