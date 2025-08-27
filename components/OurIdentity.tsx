import React from 'react';
import { LuSparkles, LuCheck, LuDollarSign, LuUsers, LuGlobe, LuAward } from 'react-icons/lu';

const OurIdentity = () => {
  const achievements = [
    "Over $1 Billion in revenue served by our applications",
    "Trusted by Fortune 5000 companies",
    "Global remote team of top-tier AI experts",
    "Pioneering AI-powered SaaS and Marketing Suites",
    "5+ years of industry leadership in AI",
    "Headquartered in Delaware, USA, with a global reach"
  ];

  const stats = [
    {
      icon: <LuDollarSign className="text-white text-xl" />,
      metric: "$1B+",
      description: "Revenue Served",
      iconBg: "bg-blue-500"
    },
    {
      icon: <LuUsers className="text-white text-xl" />,
      metric: "50+",
      description: "Fortune 5000 Clients",
      iconBg: "bg-blue-500"
    },
    {
      icon: <LuGlobe className="text-white text-xl" />,
      metric: "100+",
      description: "Global Experts",
      iconBg: "bg-blue-500"
    },
    {
      icon: <LuAward className="text-white text-xl" />,
      metric: "5+",
      description: "Years Experience",
      iconBg: "bg-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-indigo-900/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Company Identity */}
          <div className="space-y-8">
            {/* Our Identity Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-500/30 text-white px-4 py-2 rounded-full text-sm font-medium">
              <LuSparkles className="text-white" />
              <span>Our Identity</span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">A Global Leader in AI</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Daniyal Technologies is a premium, AI-first company building the next generation of intelligent SaaS products and marketing suites. With a global team of remote experts and headquarters in Delaware, USA, we empower businesses worldwide—including Fortune 5000 leaders—to achieve digital excellence.
            </p>

            {/* Achievements List */}
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-md flex items-center justify-center mt-0.5">
                    <LuCheck className="text-green-400 text-sm" />
                  </div>
                  <span className="text-gray-300 text-base leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>

            {/* Call-to-Action Button */}
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Partner With Us
            </button>
          </div>

          {/* Right Section - Statistical Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 text-center hover:border-gray-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.iconBg} rounded-lg mb-4`}>
                  {stat.icon}
                </div>

                {/* Metric */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.metric}
                </div>

                {/* Description */}
                <div className="text-gray-300 text-sm font-medium">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIdentity;