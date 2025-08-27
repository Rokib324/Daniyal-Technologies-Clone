import React from 'react';
import { FaRocket, FaArrowRight } from 'react-icons/fa';
import { LuBrainCircuit, LuSparkles } from 'react-icons/lu';
import { RiRobot2Line } from 'react-icons/ri';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className=" absolute right-20 top-30 lg:top-35 lg:right-15 animate-bounce delay-300">
                <LuBrainCircuit className="text-blue-500 text-2xl font-bold" />
        </div>
        <div className=" absolute left-10 top-30 lg:top-25 lg:left-10 animate-bounce delay-300">
                <LuSparkles className="text-blue-500 text-2xl font-bold" />
        </div>
        <div className=" absolute left-30 bottom-30 lg:bottom-25 lg:left-10 animate-bounce delay-300">
                <RiRobot2Line className="text-blue-500 text-2xl font-bold" />
        </div>

      <div className="absolute top-1/5 left-1/4 w-1/2 h-1/2 bg-blue-200/50 dark:bg-amber-500 blur-3xl opacity-20 rounded-full">
      </div>
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-32 mt-22">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pre-title label */}
          <div className="inline-flex items-center border border-blue-500/20 gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <LuBrainCircuit />
            <span>A Premium AI Technology Company</span>
          </div>

          {/* Main title */}
          <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
              AI-Forward
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-blue-100 drop-shadow-lg relative">
              Technology Solutions
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-full"></div>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We build intelligent SaaS products, AI-powered marketing suites, and custom applications that redefine industries and drive unprecedented growth.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Start Your Project</span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              <span>View Our Work</span>
              <FaRocket className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;