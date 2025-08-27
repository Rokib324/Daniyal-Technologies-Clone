import React from 'react';
import { LuBrain, LuSparkles, LuLayers, LuTarget, LuRocket, LuTrendingUp } from 'react-icons/lu';

const OurExpertise = () => {
  const expertiseCards = [
    {
      icon: <LuBrain className="text-blue-400 text-2xl" />,
      title: "Custom AI Development",
      description: "Bespoke AI solutions, from machine learning models to intelligent automation, tailored to your unique business challenges.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation"],
      iconBg: "bg-blue-500/20 border-blue-500/30"
    },
    {
      icon: <LuLayers className="text-purple-400 text-2xl" />,
      title: "AI-Powered SaaS Products",
      description: "Developing and scaling market-leading SaaS platforms with AI at their core for unparalleled performance and features.",
      features: ["Multi-Tenant Architecture", "Scalable Infrastructure", "API Integrations", "Subscription Models"],
      iconBg: "bg-purple-500/20 border-purple-500/30"
    },
    {
      icon: <LuTarget className="text-green-400 text-2xl" />,
      title: "AI Marketing Suites",
      description: "Intelligent marketing suites that leverage AI for hyper-personalization, customer segmentation, and campaign optimization.",
      features: ["Customer Data Platforms", "Automated Campaigns", "Lead Scoring", "Performance Analytics"],
      iconBg: "bg-green-500/20 border-green-500/30"
    },
    {
      icon: <LuRocket className="text-orange-400 text-2xl" />,
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent automation systems that learn, adapt, and optimize your business processes.",
      features: ["Process Automation", "Workflow Optimization", "Smart Scheduling", "Resource Management"],
      iconBg: "bg-orange-500/20 border-orange-500/30"
    },
    {
      icon: <LuTrendingUp className="text-cyan-400 text-2xl" />,
      title: "AI Analytics & Insights",
      description: "Transform raw data into actionable insights with advanced AI-powered analytics and predictive modeling.",
      features: ["Data Mining", "Predictive Modeling", "Real-time Analytics", "Business Intelligence"],
      iconBg: "bg-cyan-500/20 border-cyan-500/30"
    },
    {
      icon: <LuSparkles className="text-pink-400 text-2xl" />,
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities into existing systems and workflows for enhanced functionality.",
      features: ["API Development", "System Integration", "Legacy Modernization", "Cloud Migration"],
      iconBg: "bg-pink-500/20 border-pink-500/30"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Our Expertise Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
            <LuSparkles className="text-blue-400" />
            <span>Our Expertise</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">AI-Powered</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We deliver comprehensive AI solutions that empower businesses to innovate and lead in the digital era.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertiseCards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-gray-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border ${card.iconBg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {card.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {card.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                    <span className="text-blue-400 text-sm">→</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;