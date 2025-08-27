import React from 'react';
import { GoArrowRight } from 'react-icons/go';
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
        <div className=" absolute text-purple-500 left-30 bottom-30 lg:bottom-25 lg:left-10 animate-bounce delay-300">
                <RiRobot2Line className="text-2xl font-bold" />
        </div>

      <div className="absolute top-1/5 left-1/4 w-1/2 h-1/2 bg-blue-200/50 dark:bg-amber-500 blur-3xl opacity-20 rounded-full">
      </div>
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-32 mt-22">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pre-title label */}
          <div className="inline-flex items-center border border-blue-500/20 gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <LuBrainCircuit className='w-4 h-4' />
            <span>A Premium AI Technology Company</span>
          </div>

          {/* Main title */}
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-4xl md:text-7xl font-bold leading-wider bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              AI-Forward
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold tracking-normal text-blue-100 drop-shadow-lg relative">
              Technology Solutions
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We build intelligent SaaS products, AI-powered marketing suites, and custom applications that redefine industries and drive unprecedented growth.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 fade-in-up max-w-4xl mx-auto">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 rounded-md w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 md:px-9 py-4 md:py-6 text-base md:text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
              Start Your Project
              <GoArrowRight className="w-4 h-4 " />
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold">
              View Our Work
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;