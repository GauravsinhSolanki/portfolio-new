import React from 'react';
import { FaCode, FaCloud, FaRocket, FaLightbulb } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#222831]">
        <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start text-center md:text-left">
          <div className="h-px w-20 bg-gradient-to-r from-border via-primary to-border"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            About Me
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-border via-primary to-border"></div>
        </div>

        {/* Content card */}
        <div className="bg-[#31363F]/40 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl border border-[#76ABAE]/20 relative">
          
          {/* Main intro */}
          <div className="space-y-5 sm:space-y-6 text-[#EEEEEE]/80 text-base sm:text-lg leading-relaxed">
            <p className="text-lg sm:text-xl text-[#EEEEEE]">
              Master's graduate from <span className="text-[#76ABAE] font-semibold">Dalhousie University</span>, 
              now building real software <span className="text-[#76ABAE] font-semibold">@ Brokerlift Inc.</span> that businesses depend on.
            </p>

            <p>
              I work across the entire stack building interfaces users interact with, designing APIs that power them, 
              shaping data models, and deploying on cloud infrastructure. What matters to me is <span className="text-[#76ABAE] font-medium">owning the complete picture</span>: 
              understanding what needs to be built, building it well, and making sure it works in production.
            </p>
          </div>

          {/* Three focus areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 my-8 sm:my-10">
            <div className="p-4 sm:p-5 rounded-xl bg-[#222831]/50 border border-[#76ABAE]/20 hover:border-[#76ABAE]/40 transition-colors">
              <FaCode className="text-2xl sm:text-3xl text-[#76ABAE] mb-3" />
              <h3 className="text-[#EEEEEE] font-semibold mb-2 text-base sm:text-lg">Full Stack</h3>
              <p className="text-[#EEEEEE]/70 text-sm sm:text-base">React, FastAPI, MongoDB ~ whatever gets the job done</p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-[#222831]/50 border border-[#76ABAE]/20 hover:border-[#76ABAE]/40 transition-colors">
              <FaCloud className="text-2xl sm:text-3xl text-[#76ABAE] mb-3" />
              <h3 className="text-[#EEEEEE] font-semibold mb-2 text-base sm:text-lg">Cloud Native</h3>
              <p className="text-[#EEEEEE]/70 text-sm sm:text-base">AWS deployments, serverless, infrastructure that scales</p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-[#222831]/50 border border-[#76ABAE]/20 hover:border-[#76ABAE]/40 transition-colors">
              <FaRocket className="text-2xl sm:text-3xl text-[#76ABAE] mb-3" />
              <h3 className="text-[#EEEEEE] font-semibold mb-2 text-base sm:text-lg">End-to-End</h3>
              <p className="text-[#EEEEEE]/70 text-sm sm:text-base">From requirements to production support</p>
            </div>
          </div>

          {/* Philosophy - Shorter */}
          <div className="relative p-5 sm:p-6 rounded-xl bg-[#76ABAE]/10 border border-[#76ABAE]/30 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <FaLightbulb className="text-[#76ABAE] text-lg sm:text-xl" />
              <h3 className="text-[#EEEEEE] font-semibold text-base sm:text-lg">How I Work</h3>
            </div>
            <p className="text-[#EEEEEE]/80 text-sm sm:text-base leading-relaxed">
              I write maintainable code, test what matters, and keep things simple. 
              Good software doesn't need to be complicated, it needs to solve the right problem and keep working.
            </p>
          </div>

          {/* Compact keywords */}
          <div className="pt-6 sm:pt-8 border-t border-[#76ABAE]/20">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Full-Stack',
                'AWS',
                'System Design',
                'Production Ready',
                'Team Player',
                'Problem Solver'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#31363F]/50 border border-[#76ABAE]/20 hover:border-[#76ABAE]/40 hover:bg-[#76ABAE]/10 transition-colors duration-200 cursor-default text-[#EEEEEE]/80 text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-[#76ABAE]/30 rounded-tr-2xl"></div>
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-b border-l border-[#76ABAE]/30 rounded-bl-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

   