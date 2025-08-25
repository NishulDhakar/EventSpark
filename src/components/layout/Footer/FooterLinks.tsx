import React from 'react';

interface FooterSection {
  title: string;
  links: string[];
}

const footerSections: FooterSection[] = [
  {
    title: "Your Account",
    links: ["Sign up", "Log in", "Help"]
  },
  {
    title: "Discover",
    links: ["Topics", "Cities", "Online Events"]
  },
  {
    title: "Events",
    links: ["About", "Blog", "Contact"]
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
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
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