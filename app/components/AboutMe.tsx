import React from 'react';
import { FaCode, FaCloud, FaRocket, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#222831]">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section header - Cleaner, matches Hero styling */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-px w-12 sm:w-16 bg-[#76ABAE]/30"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EEEEEE] tracking-tight">
            About Me
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-[#76ABAE]/30 to-transparent"></div>
        </div>

        {/* Main content */}
        <div className="bg-[#31363F]/30 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl border border-[#4a505a] hover:border-[#76ABAE]/30 transition-all duration-300">
          
          {/* Opening statement - Clean and direct */}
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl text-[#EEEEEE] leading-relaxed">
              Master's graduate from <span className="text-[#76ABAE] font-semibold">Dalhousie University</span>, 
              building production software <span className="text-[#76ABAE] font-semibold">@ Brokerlift Inc.</span>
            </p>
          </div>

          {/* Main description - No fluff */}
          <div className="space-y-4 mb-8 sm:mb-10">
            <p className="text-sm sm:text-base text-[#a0a8b8] leading-relaxed">
              I build things that work. Frontend, backend, APIs, databases, cloud. I own the whole picture. 
              From understanding what needs to be built to keeping it running in production.
            </p>
            <p className="text-sm sm:text-base text-[#a0a8b8] leading-relaxed">
              No handoffs. No "not my job." Just code that ships and keeps working.
            </p>
          </div>

          {/* Three focus areas - Clean cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            <div className="group p-4 sm:p-5 rounded-xl bg-[#222831]/50 border border-[#4a505a] hover:border-[#76ABAE] transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center gap-2 mb-2">
                <FaCode className="text-xl sm:text-2xl text-[#76ABAE]" />
                <h3 className="text-[#EEEEEE] font-semibold text-sm sm:text-base">Full Stack</h3>
              </div>
              <p className="text-[#a0a8b8] text-xs sm:text-sm leading-relaxed">
                React, FastAPI, MongoDB whatever solves the problem
              </p>
            </div>
            
            <div className="group p-4 sm:p-5 rounded-xl bg-[#222831]/50 border border-[#4a505a] hover:border-[#76ABAE] transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center gap-2 mb-2">
                <FaCloud className="text-xl sm:text-2xl text-[#76ABAE]" />
                <h3 className="text-[#EEEEEE] font-semibold text-sm sm:text-base">Cloud Native</h3>
              </div>
              <p className="text-[#a0a8b8] text-xs sm:text-sm leading-relaxed">
                AWS, serverless, infrastructure that actually scales
              </p>
            </div>
            
            <div className="group p-4 sm:p-5 rounded-xl bg-[#222831]/50 border border-[#4a505a] hover:border-[#76ABAE] transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center gap-2 mb-2">
                <FaRocket className="text-xl sm:text-2xl text-[#76ABAE]" />
                <h3 className="text-[#EEEEEE] font-semibold text-sm sm:text-base">Own It</h3>
              </div>
              <p className="text-[#a0a8b8] text-xs sm:text-sm leading-relaxed">
                From requirement to deployment. No handoffs
              </p>
            </div>
          </div>

          {/* Philosophy - Minimal, impactful */}
          <div className="relative p-5 sm:p-6 rounded-xl bg-[#76ABAE]/5 border-l-4 border-[#76ABAE] mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <FaLightbulb className="text-[#76ABAE] text-base sm:text-lg mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-[#EEEEEE] font-semibold text-sm sm:text-base mb-1">My Philosophy</h3>
                <p className="text-[#a0a8b8] text-xs sm:text-sm leading-relaxed">
                  Simple {'>'} Complex. Maintainable {'>'} Clever. Done {'>'} Perfect.
                </p>
              </div>
            </div>
          </div>

          {/* Skills - Clean badges */}
          <div className="pt-4 sm:pt-6 border-t border-[#4a505a]">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Full-Stack',
                'AWS',
                'System Design',
                'Production Ready',
                'Clean Code',
                'Problem Solver'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 rounded-full bg-[#222831] border border-[#4a505a] text-[#a0a8b8] text-xs sm:text-sm font-medium hover:border-[#76ABAE] hover:text-[#76ABAE] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Corner accents - Subtle */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-[#76ABAE]/20 rounded-tr-2xl"></div>
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-b border-l border-[#76ABAE]/20 rounded-bl-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;