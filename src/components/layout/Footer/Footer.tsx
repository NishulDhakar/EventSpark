import React from 'react';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="border-b border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-lg mb-4 sm:mb-0">Join or organize Event</p>
            <button onClick={() => window.location.href = "/register"} className="border border-gray-400 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <FooterLinks />
      <FooterSocial />
    </footer>
  );
};