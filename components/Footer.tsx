import React from 'react';
import { LuMail, LuPhone, LuMapPin, LuGlobe } from 'react-icons/lu';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    "Home",
    "Services", 
    "Industries",
    "Partners & Integrations",
    "Why Us",
    "About",
    "Contact",
    "Terms & Conditions",
    "Privacy Policy"
  ];

  const services = [
    "Custom AI Development",
    "AI-Powered SaaS",
    "AI Marketing Suites", 
    "Intelligent Applications",
    "Data & Analytics",
    "AI Strategy"
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column - Company Information */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <LuGlobe className="text-slate-900 text-xl" />
              </div>
              <div>
                <div className="text-white font-bold text-xl uppercase">DANIYAL</div>
                <div className="text-gray-400 text-sm uppercase">TECHNOLOGIES</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              A premium AI technology company building intelligent SaaS, marketing suites, and custom applications for a global clientele, including Fortune 5000 companies.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <LuMail className="text-gray-400 text-lg" />
                <span className="text-gray-300">contact@daniyaltechnologies.com</span>
              </div>
              <div className="flex items-center gap-3">
                <LuPhone className="text-gray-400 text-lg" />
                <span className="text-gray-300">855-717-3577</span>
              </div>
              <div className="flex items-center gap-3">
                <LuMapPin className="text-gray-400 text-lg" />
                <span className="text-gray-300">Delaware, USA (Headquarters)</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section - Copyright & Social Media */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright Text */}
          <div className="text-gray-400 text-sm">
            © 2025 Daniyal Technologies. All rights reserved.
          </div>

          {/* Social Media Icon */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-600 hover:border-gray-500 transition-all duration-300"
            >
              <FaLinkedin className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;