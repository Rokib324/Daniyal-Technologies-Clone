import React from 'react';

const TechWeMaster = () => {
  const technologies = [
    'Python',
    'GitHub', 
    'AWS',
    'React Native',
    'MongoDB',
    'RESTful API',
    'Tailwind CSS',
    'Next.js',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MySQL',
    'Nest.js'
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-5 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center py-5">
          <h2 className="text-md md:text-lg font-semibold text-gray-300 uppercase tracking-wide">
            Technologies We Master
          </h2>
        </div>

        {/* Continuous Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-6 py-3 rounded-full text-white font-medium text-lg md:text-xl whitespace-nowrap cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechWeMaster;