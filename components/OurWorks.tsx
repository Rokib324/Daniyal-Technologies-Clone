"use client";

import React, { useState } from 'react';
import { LuSparkles, LuBrain, LuTarget, LuSettings } from 'react-icons/lu';

const OurWorks = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = {
    all: [
      {
        id: 1,
        title: "Predictive Analytics SaaS",
        description: "AI-powered SaaS platform for real-time business forecasting and data insights.",
        image: "/api/placeholder/400/250",
        technologies: ["Next.js", "Python", "AWS", "MongoDB"],
        category: "ai-saas"
      },
      {
        id: 2,
        title: "Automated Marketing Suite",
        description: "AI-driven marketing suite for automated campaigns and customer journey personalization.",
        image: "/api/placeholder/400/250",
        technologies: ["React Native", "NestJS", "RESTful API", "AWS"],
        category: "marketing-suites"
      },
      {
        id: 3,
        title: "AI-Powered Mobile App",
        description: "Custom mobile app with an AI recommendation engine and personalized user feeds.",
        image: "/api/placeholder/400/250",
        technologies: ["React Native", "Python", "MongoDB", "RESTful API"],
        category: "custom-ai"
      },
      {
        id: 4,
        title: "AI-Powered CRM Platform",
        description: "Intelligent customer relationship management with predictive lead scoring and automation.",
        image: "/api/placeholder/400/250",
        technologies: ["React", "Node.js", "PostgreSQL", "TensorFlow"],
        category: "ai-saas"
      },
      {
        id: 5,
        title: "Smart Inventory Management",
        description: "AI-driven inventory optimization and demand forecasting for e-commerce businesses.",
        image: "/api/placeholder/400/250",
        technologies: ["Vue.js", "Python", "Redis", "Scikit-learn"],
        category: "ai-saas"
      },
      {
        id: 6,
        title: "Customer Data Platform",
        description: "Unified customer data platform with AI-powered segmentation and personalization.",
        image: "/api/placeholder/400/250",
        technologies: ["Angular", "Java", "Kafka", "Elasticsearch"],
        category: "marketing-suites"
      },
      {
        id: 7,
        title: "Lead Generation Suite",
        description: "Intelligent lead generation and qualification platform with automated outreach.",
        image: "/api/placeholder/400/250",
        technologies: ["Next.js", "Python", "PostgreSQL", "OpenAI API"],
        category: "marketing-suites"
      },
      {
        id: 8,
        title: "Computer Vision Solution",
        description: "Custom AI solution for object detection and image analysis in manufacturing.",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "OpenCV", "TensorFlow", "Docker"],
        category: "custom-ai"
      },
      {
        id: 9,
        title: "Natural Language Processor",
        description: "Custom NLP solution for document analysis and content summarization.",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "Transformers", "FastAPI", "PostgreSQL"],
        category: "custom-ai"
      }
    ],
    'ai-saas': [
      {
        id: 1,
        title: "Predictive Analytics SaaS",
        description: "AI-powered SaaS platform for real-time business forecasting and data insights.",
        image: "/api/placeholder/400/250",
        technologies: ["Next.js", "Python", "AWS", "MongoDB"],
        category: "ai-saas"
      },
      {
        id: 4,
        title: "AI-Powered CRM Platform",
        description: "Intelligent customer relationship management with predictive lead scoring and automation.",
        image: "/api/placeholder/400/250",
        technologies: ["React", "Node.js", "PostgreSQL", "TensorFlow"],
        category: "ai-saas"
      },
      {
        id: 5,
        title: "Smart Inventory Management",
        description: "AI-driven inventory optimization and demand forecasting for e-commerce businesses.",
        image: "/api/placeholder/400/250",
        technologies: ["Vue.js", "Python", "Redis", "Scikit-learn"],
        category: "ai-saas"
      }
    ],
    'marketing-suites': [
      {
        id: 2,
        title: "Automated Marketing Suite",
        description: "AI-driven marketing suite for automated campaigns and customer journey personalization.",
        image: "/api/placeholder/400/250",
        technologies: ["React Native", "NestJS", "RESTful API", "AWS"],
        category: "marketing-suites"
      },
      {
        id: 6,
        title: "Customer Data Platform",
        description: "Unified customer data platform with AI-powered segmentation and personalization.",
        image: "/api/placeholder/400/250",
        technologies: ["Angular", "Java", "Kafka", "Elasticsearch"],
        category: "marketing-suites"
      },
      {
        id: 7,
        title: "Lead Generation Suite",
        description: "Intelligent lead generation and qualification platform with automated outreach.",
        image: "/api/placeholder/400/250",
        technologies: ["Next.js", "Python", "PostgreSQL", "OpenAI API"],
        category: "marketing-suites"
      }
    ],
    'custom-ai': [
      {
        id: 3,
        title: "AI-Powered Mobile App",
        description: "Custom mobile app with an AI recommendation engine and personalized user feeds.",
        image: "/api/placeholder/400/250",
        technologies: ["React Native", "Python", "MongoDB", "RESTful API"],
        category: "custom-ai"
      },
      {
        id: 8,
        title: "Computer Vision Solution",
        description: "Custom AI solution for object detection and image analysis in manufacturing.",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "OpenCV", "TensorFlow", "Docker"],
        category: "custom-ai"
      },
      {
        id: 9,
        title: "Natural Language Processor",
        description: "Custom NLP solution for document analysis and content summarization.",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "Transformers", "FastAPI", "PostgreSQL"],
        category: "custom-ai"
      }
    ]
  };

  const filters = [
    { id: 'all', label: 'All Projects', icon: <LuSparkles />, count: projects.all.length },
    { id: 'ai-saas', label: 'AI SaaS', icon: <LuBrain />, count: projects['ai-saas'].length },
    { id: 'marketing-suites', label: 'Marketing Suites', icon: <LuTarget />, count: projects['marketing-suites'].length },
    { id: 'custom-ai', label: 'Custom AI', icon: <LuSettings />, count: projects['custom-ai'].length }
  ];

  const currentProjects = projects[activeFilter as keyof typeof projects] || projects.all;
  
  // Handle pagination for "all" category
  const paginatedProjects = activeFilter === 'all' 
    ? currentProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
    : currentProjects;
    
  const totalPages = activeFilter === 'all' 
    ? Math.ceil(currentProjects.length / projectsPerPage)
    : 1;

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1); // Reset to first page when changing filters
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Our Work Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-500/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <LuSparkles className="text-white" />
            <span>Our Work</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Featured</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
              <span className="text-sm opacity-70">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl overflow-hidden hover:border-gray-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 flex items-center justify-center">
                <div className="text-blue-300 text-sm">Project Screenshot</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 border border-gray-500/30 rounded-full text-white text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Only show for "all" category when there are multiple pages */}
        {activeFilter === 'all' && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {/* Previous Page Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-600/30 text-white hover:bg-white/10 hover:border-gray-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-gray-600/30"
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      currentPage === pageNumber
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'border border-gray-600/30 text-white hover:bg-white/10 hover:border-gray-500/50'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            {/* Next Page Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-600/30 text-white hover:bg-white/10 hover:border-gray-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-gray-600/30"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurWorks;