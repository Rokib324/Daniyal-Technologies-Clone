"use client";

import React, { useState } from 'react';
import { LuSparkles, LuMail, LuPhone, LuMapPin, LuGlobe, LuMessageCircle, LuCheck, LuSend } from 'react-icons/lu';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <LuMail className="text-white text-xl" />,
      label: "Email",
      value: "contact@daniyaltechnologies.com",
      iconBg: "bg-blue-500"
    },
    {
      icon: <LuPhone className="text-white text-xl" />,
      label: "Phone",
      value: "855-717-3577",
      iconBg: "bg-blue-500"
    },
    {
      icon: <LuMapPin className="text-white text-xl" />,
      label: "Headquarters",
      value: "Delaware, USA",
      iconBg: "bg-blue-500"
    },
    {
      icon: <LuGlobe className="text-white text-xl" />,
      label: "Operations",
      value: "Global Remote Team",
      iconBg: "bg-blue-500"
    }
  ];

  const benefits = [
    "Free consultation and project analysis",
    "Transparent pricing and timelines",
    "Ongoing support and maintenance",
    "Cutting-edge technology solutions"
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Contact Us Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-500/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <LuSparkles className="text-white" />
            <span>Contact Us</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Let's Build Your</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Future
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have an idea for an AI-powered product? Let's talk about how we can make it a reality.
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Contact Information & Why Choose Us */}
          <div className="space-y-12">
            
            {/* Contact Information Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-gray-600/30 rounded-lg hover:border-gray-500/50 hover:bg-slate-800/70 transition-all duration-300"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${contact.iconBg} rounded-lg flex items-center justify-center`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm font-medium">{contact.label}</div>
                      <div className="text-white font-semibold">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <LuMessageCircle className="text-blue-400 text-2xl" />
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-md flex items-center justify-center mt-0.5">
                      <LuCheck className="text-green-400 text-sm" />
                    </div>
                    <span className="text-gray-300 text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <LuSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;