"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode, 
  FaRocket,
  FaChartLine,
  FaTools,
  FaAws,
  FaDatabase,
  FaReact,
  FaPython,
  FaCheckCircle,
  FaLightbulb,
  FaCogs,
  FaChevronRight,
  FaBriefcase,
  FaIndustry,
  FaBuilding,
  FaTrophy,
  FaChartBar,
  FaUsers,
  FaServer,
  FaInfinity
} from 'react-icons/fa';

const Experience = () => {
  const [activeExp, setActiveExp] = useState<number | null>(0);
  const [activeAchievement, setActiveAchievement] = useState<number | null>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      id: 1,
      company: "BrokerLift Inc.",
      location: "Canada",
      role: "Software Development Engineer",
      period: "Oct 2024 – Present",
      type: "Full-time",
      icon: <FaRocket className="text-white" />,
      color: "bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      achievements: [
        {
          title: "Full-Stack Product Development",
          description: "Designed, developed, and deployed 8 full-stack insurance products from scratch using React.js, FastAPI, MongoDB, and AWS, with 6 live in production and actively supporting U.S. insurance consultants.",
          icon: <FaCode className="text-blue-400" />,
          impact: "8 products built, 6 in production",
          metrics: ["React.js", "FastAPI", "MongoDB", "AWS"]
        },
        {
          title: "Bundle Policies Feature",
          description: "Led the development of the first ever Bundle Policies feature, enabling customers to attach multiple optional coverages to a primary policy, reducing configuration time by 30%.",
          icon: <FaLightbulb className="text-yellow-400" />,
          impact: "30% faster configuration",
          metrics: ["Feature Leadership", "Process Optimization"]
        },
        {
          title: "Certificates of Insurance Module",
          description: "Implemented the complete Certificates of Insurance (COI) module, allowing policyholders to generate and manage certificates according to contractual and compliance requirements.",
          icon: <FaCheckCircle className="text-green-400" />,
          impact: "Full compliance automation",
          metrics: ["Compliance", "Document Generation"]
        },
        {
          title: "End-to-End Product Ownership",
          description: "Acted as the primary developer for a major U.S. client, owning end-to-end product delivery including requirement discussions, full-stack development, QA, code reviews, and test suite implementation across all critical workflows.",
          icon: <FaCogs className="text-purple-400" />,
          impact: "Full ownership delivery",
          metrics: ["Client Delivery", "Full Ownership"]
        },
        {
          title: "Production Excellence",
          description: "Managed production releases and resolved Priority issues using MongoDB, AWS CloudWatch, and application debugging, reducing average resolution time by 40%.",
          icon: <FaChartLine className="text-cyan-400" />,
          impact: "40% faster resolution",
          metrics: ["AWS CloudWatch", "Debugging", "Performance"]
        }
      ],
      highlights: [
        { icon: <FaTrophy />, text: "Led development of 8 production products" },
        { icon: <FaChartBar />, text: "Reduced configuration time by 30%" },
        { icon: <FaServer />, text: "40% faster issue resolution" },
        { icon: <FaUsers />, text: "Primary developer for major U.S. client" }
      ],
      description: "Building and maintaining production-grade insurance SaaS platforms with end-to-end ownership from concept to deployment."
    },
    {
      id: 2,
      company: "BrokerLift Inc.",
      location: "Canada",
      role: "Software Developer Co-op",
      period: "Jun 2024 – Sep 2024",
      type: "Co-op",
      icon: <FaTools className="text-white" />,
      color: "bg-gradient-to-br from-cyan-600 via-blue-700 to-sky-700",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      achievements: [
        {
          title: "Rapid Platform Onboarding",
          description: "Onboarded into a large-scale insurance SaaS platform serving a major U.S. client, quickly understanding policy lifecycles, coverages, endorsements, renewals, and COI requirements.",
          icon: <FaRocket className="text-cyan-400" />,
          impact: "Fast domain knowledge acquisition",
          metrics: ["SaaS", "Insurance Domain", "Fast Learning"]
        },
        {
          title: "Foundation Module Development",
          description: "Delivered several frontend and backend modules using React.js, FastAPI, and MongoDB that formed the foundation for full-time production features.",
          icon: <FaCode className="text-blue-400" />,
          impact: "Built foundational components",
          metrics: ["React.js", "FastAPI", "Foundation Work"]
        },
        {
          title: "Full-time Promotion",
          description: "Promoted to full-time role based on strong ownership, fast learning, and ability to deliver production-quality features.",
          icon: <FaChartLine className="text-green-400" />,
          impact: "Successfully promoted to full-time",
          metrics: ["Promotion", "Ownership", "Quality Delivery"]
        }
      ],
      highlights: [
        { icon: <FaRocket />, text: "Rapid onboarding to complex SaaS platform" },
        { icon: <FaBuilding />, text: "Built foundation for production features" },
        { icon: <FaTrophy />, text: "Earned full-time promotion" },
        { icon: <FaIndustry />, text: "Insurance domain expertise" }
      ],
      description: "Co-op position focused on learning enterprise SaaS development and contributing to core platform features."
    },
    {
      id: 3,
      company: "Desai Software",
      location: "Surat, Gujarat, India",
      role: "Software Engineer",
      period: "Aug 2021 – Apr 2022",
      type: "Full-time + Internship",
      icon: <FaBriefcase className="text-white" />,
      color: "bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-400",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      achievements: [
        {
          title: "Full-Stack Development",
          description: "Gained hands-on experience in full-stack development using JavaScript, React, Node.js, and MongoDB, delivering both frontend and backend modules.",
          icon: <FaCode className="text-emerald-400" />,
          impact: "Full-stack skill development",
          metrics: ["JavaScript", "React", "Node.js", "MongoDB"]
        },
        {
          title: "Real-time Task System",
          description: "Implemented real-time task updates and prioritization, improving responsiveness for concurrent workflows.",
          icon: <FaInfinity className="text-cyan-400" />,
          impact: "Improved workflow responsiveness",
          metrics: ["Real-time", "Task Management", "Optimization"]
        },
        {
          title: "Performance Optimization",
          description: "Optimized backend APIs, improving system performance by 10%, and refined frontend components to enhance user experience.",
          icon: <FaChartLine className="text-yellow-400" />,
          impact: "10% performance improvement",
          metrics: ["API Optimization", "Performance", "Frontend"]
        },
        {
          title: "Architecture & Deployment",
          description: "Assisted in REST API development, database schema design, and ensured scalable backend architecture. Supported senior engineers with bug fixes, feature refinements, and code reviews, while deploying and managing applications on AWS.",
          icon: <FaAws className="text-orange-400" />,
          impact: "Architecture and deployment skills",
          metrics: ["REST API", "Database Design", "AWS", "Code Reviews"]
        }
      ],
      highlights: [
        { icon: <FaCode />, text: "Full-stack development foundations" },
        { icon: <FaChartLine />, text: "10% system performance improvement" },
        { icon: <FaServer />, text: "AWS deployment experience" },
        { icon: <FaUsers />, text: "Team collaboration and code reviews" }
      ],
      description: "Early career experience building full-stack applications and learning software engineering best practices."
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-indigo-950/40 to-slate-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Circuit/network pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with new style */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50">
              <FaBriefcase className="text-blue-400" />
              <span className="text-blue-300 font-medium">Career Timeline</span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Building production-grade software systems with measurable impact and continuous growth
          </motion.p>
        </div>

        {/* Experience Timeline - New Design */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
          
          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                ref={(el) => {
                  experienceRefs.current[index] = el;
                }}
              >
                
                {/* Date Badge - Desktop */}
                <div className={`hidden md:block w-1/3 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                    <FaCalendarAlt className="text-blue-400" />
                    <span className="text-slate-300 font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="w-full md:w-2/3 ml-8 md:ml-0">
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm bg-slate-900/40 transition-all duration-500 hover:border-blue-500/30 cursor-pointer ${
                      activeExp === exp.id ? 'ring-2 ring-blue-500/30' : ''
                    }`}
                    onClick={() => setActiveExp(activeExp === exp.id ? null : exp.id)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Header with gradient */}
                    <div className={`${exp.color} p-6`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                            {exp.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                              <span className={`px-3 py-1 rounded-full ${exp.badgeColor} border backdrop-blur-sm text-sm`}>
                                {exp.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-white/80" />
                                <span className="text-white/90">{exp.location}</span>
                              </div>
                              <div className="md:hidden flex items-center gap-2">
                                <FaCalendarAlt className="text-white/80" />
                                <span className="text-white/90">{exp.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20`}>
                          <span className="font-bold text-white">{exp.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate-300 leading-relaxed mb-6">{exp.description}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <FaTrophy className="text-yellow-400" />
                          Key Highlights
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {exp.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                              <div className="text-blue-400">
                                {highlight.icon}
                              </div>
                              <span className="text-slate-300 text-sm">{highlight.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements - Expandable */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="text-lg font-semibold text-white">Key Achievements</h5>
                          <span className="text-slate-400 text-sm">
                            {exp.achievements.length} achievements
                          </span>
                        </div>
                        
                        <div className="space-y-4">
                          {exp.achievements.map((achievement, aIndex) => (
                            <div 
                              key={aIndex}
                              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                                activeAchievement === aIndex + exp.id * 10
                                  ? 'border-blue-500/50 bg-blue-900/10'
                                  : 'border-slate-700/30 bg-slate-800/20 hover:border-blue-500/30 hover:bg-slate-800/30'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveAchievement(
                                  activeAchievement === aIndex + exp.id * 10 
                                    ? null 
                                    : aIndex + exp.id * 10
                                );
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                                    {achievement.icon}
                                  </div>
                                  <div>
                                    <h6 className="font-semibold text-white">{achievement.title}</h6>
                                    <p className="text-blue-300 text-sm mt-1">{achievement.impact}</p>
                                  </div>
                                </div>
                                <FaChevronRight className={`text-blue-400 transition-transform duration-300 ${
                                  activeAchievement === aIndex + exp.id * 10 ? 'rotate-90' : ''
                                }`} />
                              </div>
                              
                              {/* Achievement Details - Expandable */}
                              {activeAchievement === aIndex + exp.id * 10 && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden mt-4"
                                >
                                  <div className="pl-4 border-l border-blue-500/30">
                                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                      {achievement.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {achievement.metrics.map((metric, mIndex) => (
                                        <span
                                          key={mIndex}
                                          className="px-3 py-1 rounded-full bg-blue-900/20 text-blue-300 text-xs border border-blue-500/30"
                                        >
                                          {metric}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl glass-card border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-indigo-950/30"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Career Progress & Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 rounded-xl bg-blue-900/20 border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-slate-300 font-medium">Years Experience</div>
              <div className="text-slate-500 text-sm">Software Engineering</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-purple-900/20 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-slate-300 font-medium">Products Built</div>
              <div className="text-slate-500 text-sm">From Scratch</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-cyan-900/20 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
              <div className="text-slate-300 font-medium">Process Improvement</div>
              <div className="text-slate-500 text-sm">Configuration Time</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-emerald-900/20 border border-emerald-500/30">
              <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
              <div className="text-slate-300 font-medium">Faster Resolution</div>
              <div className="text-slate-500 text-sm">Issue Resolution</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;