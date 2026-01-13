"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode,
  FaRocket,
  FaExternalLinkAlt,
  FaGithub,
  FaTools,
  FaLightbulb,
  FaCalendarAlt,
  FaCube,
  FaServer,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaDesktop
} from 'react-icons/fa';

const Projects = () => {
  const projectCategories = [
    {
      title: "Full Stack Applications",
      icon: <FaCode className="text-[#76ABAE]" />,
      description: "End-to-end web applications with modern frameworks and cloud infrastructure",
      tech: ["React", "FastAPI", "AWS", "MongoDB"]
    },
    {
      title: "Cloud Solutions",
      icon: <FaCloud className="text-[#76ABAE]" />,
      description: "Scalable cloud architectures and serverless implementations",
      tech: ["AWS", "Serverless", "Terraform", "Docker"]
    },
    {
      title: "DevOps Automation",
      icon: <FaTools className="text-[#76ABAE]" />,
      description: "CI/CD pipelines and infrastructure automation tools",
      tech: ["Jenkins", "GitHub Actions", "Kubernetes", "Monitoring"]
    }
  ];

  const upcomingProjects = [
    {
      title: "Insurance SaaS Platform",
      description: "Modern insurance management system with real-time policy management",
      status: "In Development",
      tech: ["React", "FastAPI", "MongoDB", "AWS"],
      color: "from-[#76ABAE] to-[#5a8a8d]"
    },
    {
      title: "Serverless Workflow Engine",
      description: "Event-driven workflow automation using AWS Step Functions",
      status: "Planning Phase",
      tech: ["AWS Lambda", "Step Functions", "DynamoDB", "EventBridge"],
      color: "from-[#76ABAE] to-[#8dbdc0]"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Data visualization platform for business intelligence",
      status: "Design Phase",
      tech: ["Next.js", "Supabase", "Chart.js", "WebSockets"],
      color: "from-[#5a8a8d] to-[#76ABAE]"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#222831]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#76ABAE] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#76ABAE] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [100, -100, 100],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#76ABAE] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#31363F]/50 border border-[#76ABAE]/30 backdrop-blur-sm">
              <FaRocket className="text-[#76ABAE] text-sm sm:text-base" />
              <span className="text-[#76ABAE] font-medium text-sm sm:text-base">My Work</span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2"
          >
            <span className="bg-gradient-to-r from-[#76ABAE] via-[#8dbdc0] to-[#76ABAE] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#EEEEEE]/70 text-base sm:text-lg max-w-2xl mx-auto px-4"
          >
            Showcasing my work in building scalable, production-ready applications
          </motion.p>
        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-14 md:mb-16"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#31363F]/50 to-[#76ABAE]/10 border border-[#76ABAE]/30 text-center">
            <div className="flex flex-col items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="mb-4"
              >
                <FaLightbulb className="text-4xl sm:text-5xl text-[#76ABAE]" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#EEEEEE] mb-2 px-2">Projects Coming Soon!</h3>
              <p className="text-[#EEEEEE]/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 px-4 leading-relaxed">
                I'm currently working on several exciting projects that I'll be showcasing here soon.
                Meanwhile, you can check out my experience and skills to see what I can build!
              </p>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-[#76ABAE]/20 border border-[#76ABAE]/30">
                <FaCalendarAlt className="text-[#76ABAE] text-sm sm:text-base" />
                <span className="text-[#76ABAE] font-medium text-sm sm:text-base">Launching Q1 2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Categories */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#EEEEEE] mb-6 sm:mb-8 text-center px-2">Project Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-[#31363F]/40 backdrop-blur-sm border border-[#76ABAE]/20 h-full hover:border-[#76ABAE]/40 transition-colors duration-300">
                  {/* Inline layout for title and description */}
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#222831]/50 border border-[#76ABAE]/20 flex-shrink-0">
                        {category.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-[#EEEEEE] mb-2 break-words">{category.title}</h4>
                        {/* Description in line with the title */}
                        <p className="text-[#EEEEEE]/70 text-sm md:text-base leading-relaxed mb-4">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {category.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 sm:px-3 py-1 rounded-full bg-[#76ABAE]/20 text-[#76ABAE] text-xs sm:text-sm border border-[#76ABAE]/30 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 md:mt-16 text-center"
        >
          <div className="px-4 sm:px-6 py-6 sm:py-7 md:p-8 rounded-2xl bg-[#31363F]/40 backdrop-blur-sm border border-[#76ABAE]/20 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#EEEEEE] mb-3 sm:mb-4 px-2">Interested in Collaborating?</h3>
            <p className="text-[#EEEEEE]/70 text-sm sm:text-base mb-5 sm:mb-6 px-2 sm:px-3 md:px-0 leading-relaxed">
              While my project portfolio is being prepared, feel free to reach out if you have 
              a project idea or want to discuss potential collaborations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#76ABAE] to-[#5a8a8d] rounded-full font-semibold text-[#EEEEEE] shadow-lg hover:shadow-[#76ABAE]/30 transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <FaRocket className="text-sm sm:text-base" />
              <span>Start a Conversation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;