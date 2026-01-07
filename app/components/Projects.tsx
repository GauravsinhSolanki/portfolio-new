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
      icon: <FaCode className="text-blue-400" />,
      description: "End-to-end web applications with modern frameworks and cloud infrastructure",
      tech: ["React", "FastAPI", "AWS", "MongoDB"]
    },
    {
      title: "Cloud Solutions",
      icon: <FaCloud className="text-cyan-400" />,
      description: "Scalable cloud architectures and serverless implementations",
      tech: ["AWS", "Serverless", "Terraform", "Docker"]
    },
    {
      title: "DevOps Automation",
      icon: <FaTools className="text-green-400" />,
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
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Serverless Workflow Engine",
      description: "Event-driven workflow automation using AWS Step Functions",
      status: "Planning Phase",
      tech: ["AWS Lambda", "Step Functions", "DynamoDB", "EventBridge"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Data visualization platform for business intelligence",
      status: "Design Phase",
      tech: ["Next.js", "Supabase", "Chart.js", "WebSockets"],
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center py-20 px-6 sm:px-8 md:px-8 overflow-hidden">
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
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
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
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-black/20 border border-blue-500/20 backdrop-blur-sm">
              <FaRocket className="text-blue-400" />
              <span className="text-blue-300 font-medium">My Work</span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
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
          className="mb-16"
        >
          <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/30 text-center">
            <div className="flex flex-col items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="mb-4"
              >
                <FaLightbulb className="text-5xl text-yellow-400" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-2">Projects Coming Soon!</h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
                I'm currently working on several exciting projects that I'll be showcasing here soon.
                Meanwhile, you can check out my experience and skills to see what I can build!
              </p>
              <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-blue-900/30 border border-blue-500/30">
                <FaCalendarAlt className="text-blue-400" />
                <span className="text-blue-300 font-medium">Launching Q1 2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Project Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 px-1 sm:px-0">
            {projectCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="glass-card px-5 py-6 sm:p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-blue-500/20 h-full">
                  {/* Inline layout for title and description */}
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-black/30 border border-blue-500/20 flex-shrink-0">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{category.title}</h4>
                        {/* \Descripion in line with the title */}
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {category.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-full bg-blue-900/20 text-blue-300 text-sm border border-blue-500/30"
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
          className="mt-16 text-center"
        >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card px-5 sm:px-6 py-7 sm:p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-blue-500/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 px-2 sm:px-0">Interested in Collaborating?</h3>
            <p className="text-slate-300 mb-6 px-3 sm:px-0 leading-relaxed">
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
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/30 transition-all inline-flex items-center gap-2"
            >
              <FaRocket />
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;