"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode,
  FaRocket,
  FaLightbulb,
  FaCalendarAlt,
  FaCube,
  FaServer,
  FaCloud,
  FaEnvelope,
  FaLightbulb as FaIdea
} from 'react-icons/fa';

const Projects = () => {

  const upcomingProjects = [
    {
      title: "Insurance SaaS Platform",
      description: "Insurance system with real-time policy management",
      status: "In Development",
      tech: ["React", "FastAPI", "MongoDB", "AWS"]
    },
    {
      title: "Serverless Workflow Engine",
      description: "Event driven automation using AWS Step Functions",
      status: "Planning Phase",
      tech: ["AWS Lambda", "Step Functions", "DynamoDB"]
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Data visualization platform for business intelligence",
      status: "Design Phase",
      tech: ["Next.js", "Supabase", "Chart.js", "WebSockets"]
    }
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#222831]">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Section header - Matching other sections */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-px w-12 sm:w-16 bg-[#76ABAE]/30"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EEEEEE] tracking-tight">
            Projects
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-[#76ABAE]/30 to-transparent"></div>
        </div>

        {/* Section description */}
        <p className="text-[#a0a8b8] text-sm sm:text-base text-center mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Showcasing my work in building scalable, production-ready applications
        </p>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-[#31363F]/30 border border-[#4a505a] text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4 p-3 rounded-full bg-[#76ABAE]/10">
                <FaLightbulb className="text-3xl sm:text-4xl text-[#76ABAE]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#EEEEEE] mb-2">Projects Coming Soon</h3>
              <p className="text-[#a0a8b8] text-sm sm:text-base max-w-2xl mx-auto mb-5 leading-relaxed">
                I'm currently building exciting projects that will be showcased here. 
                Each project is being crafted with attention to detail and real-world usability.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#76ABAE]/20 border border-[#76ABAE]/30">
                <FaCalendarAlt className="text-[#76ABAE] text-sm" />
                <span className="text-[#76ABAE] font-medium text-sm">Launching Q2 2026</span>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Upcoming Projects Preview */}
        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-[#EEEEEE] mb-6 text-center">What's Coming</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative p-5 rounded-2xl bg-[#31363F]/30 border border-[#4a505a] hover:border-[#76ABAE]/50 transition-all duration-300">
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-[#76ABAE]/20 text-[#76ABAE] text-xs">
                    {project.status}
                  </div>
                  
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-[#222831] border border-[#4a505a] text-[#76ABAE]">
                      <FaCube className="text-base" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#EEEEEE] text-sm sm:text-base pr-16">{project.title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-[#a0a8b8] text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 rounded-full bg-[#222831] text-[#76ABAE] text-xs border border-[#4a505a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Have an Idea Section - New */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#31363F]/40 to-[#76ABAE]/5 border border-[#76ABAE]/30 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-4 p-3 rounded-full bg-[#76ABAE]/15">
                <FaIdea className="text-2xl sm:text-3xl text-[#76ABAE]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#EEEEEE] mb-2">Have an Idea?</h3>
              <p className="text-[#a0a8b8] text-sm sm:text-base max-w-2xl mx-auto mb-5 leading-relaxed">
                Got a project in mind or just want to brainstorm? I'm always open to hearing new ideas and seeing how I can help bring them to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="px-5 py-2.5 bg-[#76ABAE] text-[#222831] rounded-lg font-semibold hover:bg-[#8dbdc0] transition-all duration-300 inline-flex items-center gap-2 text-sm"
                >
                  <FaRocket className="text-sm" />
                  <span>Let's Talk</span>
                </motion.button>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:solankigbs11@gmail.com"
                  className="px-5 py-2.5 bg-[#222831] border border-[#76ABAE] text-[#76ABAE] rounded-lg font-semibold hover:bg-[#76ABAE]/10 transition-all duration-300 inline-flex items-center gap-2 text-sm"
                >
                  <FaEnvelope className="text-sm" />
                  <span>Email Me Your Idea</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;