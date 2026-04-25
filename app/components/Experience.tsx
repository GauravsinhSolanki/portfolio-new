'use client';

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
  FaCheckCircle,
  FaLightbulb,
  FaCogs,
  FaChevronRight,
  FaBriefcase,
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
      icon: <FaRocket />,
      achievements: [
        {
          title: "Built insurance products from scratch",
          description: "Created 8 full-stack insurance products that are actually used by insurance consultants in the US. Started with nothing but requirements and built them into working products using React, FastAPI, MongoDB, and AWS.",
          icon: <FaCode />,
          impact: "6 products live in production",
          metrics: ["React.js", "FastAPI", "MongoDB", "AWS"]
        },
        {
          title: "Made policy configuration 30% faster",
          description: "Built the Bundle Policies feature that lets customers combine multiple coverages into one policy. Insurance agents used to do this manually - now it's automated and saves them time on every quote.",
          icon: <FaLightbulb />,
          impact: "Saves time on every policy",
          metrics: ["Process Automation", "Time Savings"]
        },
        {
          title: "Automated insurance certificates",
          description: "Built the system that automatically generates and manages Certificates of Insurance. Before this, policyholders had to request certificates manually. Now they get them instantly whenever contracts require proof of coverage.",
          icon: <FaCheckCircle />,
          impact: "Instant compliance documents",
          metrics: ["Compliance", "Document Automation"]
        },
        {
          title: "Owned a major client's product",
          description: "Was the main developer responsible for one of our largest US clients. Handled everything from discussing what they needed, to building it, testing it, and making sure it worked correctly in production.",
          icon: <FaCogs />,
          impact: "Single point of ownership",
          metrics: ["Client Delivery", "Full Responsibility"]
        },
        {
          title: "Fixed production issues faster",
          description: "When things went wrong in production, I tracked down the problems using MongoDB and AWS CloudWatch logs. Got good at finding and fixing issues quickly, cutting resolution time almost in half.",
          icon: <FaChartLine />,
          impact: "Much faster problem solving",
          metrics: ["Debugging", "AWS CloudWatch", "Performance"]
        }
      ],
      highlights: [
        { icon: <FaTrophy />, text: "Built 8 products from zero to production" },
        { icon: <FaChartBar />, text: "Made policy setup 30% faster" },
        { icon: <FaServer />, text: "Cut issue resolution time by 40%" },
        { icon: <FaUsers />, text: "Main developer for key US client" }
      ],
      description: "Building insurance software that actual businesses use every day. I take ideas and turn them into working products that solve real problems for insurance professionals."
    },
    {
      id: 2,
      company: "BrokerLift Inc.",
      location: "Canada",
      role: "Software Developer Co-op",
      period: "Jun 2024 – Sep 2024",
      type: "Co-op",
      icon: <FaTools />,
      achievements: [
        {
          title: "Got up to speed quickly",
          description: "Jumped into a complex insurance software platform and figured out how it worked. Learned about insurance policies, renewals, coverages, and all the moving parts of a real SaaS product.",
          icon: <FaRocket />,
          impact: "Learned fast, delivered quickly",
          metrics: ["Insurance Domain", "SaaS", "Quick Learning"]
        },
        {
          title: "Built foundation pieces",
          description: "Worked on both frontend and backend pieces that became part of the main product. Not just practice code - actual features that customers use today.",
          icon: <FaCode />,
          impact: "Code still in production",
          metrics: ["React.js", "FastAPI", "Production Code"]
        },
        {
          title: "Earned a full-time offer",
          description: "After showing I could handle real work and take ownership, they asked me to stay on full-time. Went from co-op to full engineer in four months.",
          icon: <FaChartLine />,
          impact: "Promoted based on performance",
          metrics: ["Full-time Offer", "Ownership", "Quality Work"]
        }
      ],
      highlights: [
        { icon: <FaRocket />, text: "Mastered complex insurance software quickly" },
        { icon: <FaBuilding />, text: "Built parts of the production platform" },
        { icon: <FaTrophy />, text: "Converted co-op to full-time role" },
        { icon: <FaDatabase />, text: "Learned real-world SaaS development" }
      ],
      description: "Started as a co-op and learned how enterprise software actually gets built. Proved I could contribute to real products and earned a permanent spot on the team."
    },
    {
      id: 3,
      company: "Desai Software",
      location: "Surat, Gujarat, India",
      role: "Software Engineer",
      period: "Aug 2021 – Apr 2022",
      type: "Full-time",
      icon: <FaBriefcase />,
      achievements: [
        {
          title: "Learned full-stack development",
          description: "Got my hands dirty with real JavaScript, React, and Node.js projects. Built both frontend interfaces and backend APIs, learning how all the pieces fit together.",
          icon: <FaCode />,
          impact: "Solid full-stack foundation",
          metrics: ["JavaScript", "React", "Node.js", "MongoDB"]
        },
        {
          title: "Made tasks update in real-time",
          description: "Built a system where task updates showed up immediately for everyone. No more refreshing the page to see what changed.",
          icon: <FaInfinity />,
          impact: "Instant updates for teams",
          metrics: ["Real-time", "Task Management", "User Experience"]
        },
        {
          title: "Made things run faster",
          description: "Optimized some slow APIs and improved frontend performance. Everything just worked a bit better and faster after I was done.",
          icon: <FaChartLine />,
          impact: "Noticeable speed improvement",
          metrics: ["Performance", "Optimization", "Frontend"]
        },
        {
          title: "Helped ship real features",
          description: "Worked on database designs, built APIs, fixed bugs, reviewed code, and helped deploy to AWS. Got experience with the whole process of shipping software.",
          icon: <FaAws />,
          impact: "Shipped actual features",
          metrics: ["APIs", "Database Design", "AWS", "Code Reviews"]
        }
      ],
      highlights: [
        { icon: <FaCode />, text: "Built my first real web applications" },
        { icon: <FaChartLine />, text: "Improved system performance by 10%" },
        { icon: <FaServer />, text: "Deployed to AWS for the first time" },
        { icon: <FaUsers />, text: "Worked on a real development team" }
      ],
      description: "My first real software job. Learned how to build things that actual people use, and discovered I really enjoy solving problems with code."
    }
  ];

  return (
    <section id="experience" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#222831]">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-56 h-56 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section header - Matching other sections */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-px w-12 sm:w-16 bg-[#76ABAE]/30"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EEEEEE] tracking-tight">
            Work Experience
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-[#76ABAE]/30 to-transparent"></div>
        </div>

        {/* Section description */}
        <p className="text-[#a0a8b8] text-sm sm:text-base text-center mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Building software that solves real problems. From my first job to leading product development.
        </p>

        {/* Experience Cards */}
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              ref={(el) => {
                experienceRefs.current[index] = el;
              }}
            >
              <div 
                className={`relative rounded-2xl overflow-hidden border border-[#4a505a] bg-[#31363F]/30 backdrop-blur-sm transition-all duration-300 hover:border-[#76ABAE]/50 cursor-pointer ${
                  activeExp === exp.id ? 'ring-2 ring-[#76ABAE]/50' : ''
                }`}
                onClick={() => setActiveExp(activeExp === exp.id ? null : exp.id)}
              >
                {/* Header */}
                <div className="p-5 sm:p-6 border-b border-[#4a505a]">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-xl bg-[#222831] border border-[#4a505a] text-[#76ABAE] text-lg sm:text-xl">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#EEEEEE]">{exp.company}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          <div className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="text-[#76ABAE] text-xs" />
                            <span className="text-[#a0a8b8] text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <FaCalendarAlt className="text-[#76ABAE] text-xs" />
                            <span className="text-[#a0a8b8] text-sm">{exp.period}</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-[#76ABAE]/20 text-[#76ABAE] text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#222831] border border-[#4a505a] self-start">
                      <span className="font-semibold text-[#76ABAE] text-sm">{exp.role}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-[#a0a8b8] text-sm sm:text-base leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Quick Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#EEEEEE] mb-3 flex items-center gap-2">
                      <FaTrophy className="text-[#76ABAE] text-sm" />
                      Key Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#222831]/50 border border-[#4a505a]">
                          <div className="text-[#76ABAE] text-sm flex-shrink-0">
                            {highlight.icon}
                          </div>
                          <span className="text-[#a0a8b8] text-sm">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-[#EEEEEE]">What I Built</h4>
                      <span className="text-[#a0a8b8] text-xs">{exp.achievements.length} projects</span>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, aIndex) => (
                        <div 
                          key={aIndex}
                          className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                            activeAchievement === aIndex + exp.id * 10
                              ? 'border-[#76ABAE]/50 bg-[#76ABAE]/5'
                              : 'border-[#4a505a] bg-[#222831]/30 hover:border-[#76ABAE]/30'
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
                            <div className="flex items-center gap-2.5 flex-1 min-w-0">
                              <div className="p-1.5 rounded-lg bg-[#222831] border border-[#4a505a] text-[#76ABAE] text-sm flex-shrink-0">
                                {achievement.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-semibold text-[#EEEEEE] text-sm break-words">{achievement.title}</h5>
                                <p className="text-[#76ABAE] text-xs mt-0.5">{achievement.impact}</p>
                              </div>
                            </div>
                            <FaChevronRight className={`text-[#76ABAE] text-xs transition-transform duration-300 flex-shrink-0 ${
                              activeAchievement === aIndex + exp.id * 10 ? 'rotate-90' : ''
                            }`} />
                          </div>
                          
                          {/* Achievement Details */}
                          {activeAchievement === aIndex + exp.id * 10 && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-3"
                            >
                              <div className="pl-6 border-l border-[#76ABAE]/30">
                                <p className="text-[#a0a8b8] text-xs sm:text-sm leading-relaxed mb-2">
                                  {achievement.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {achievement.metrics.map((metric, mIndex) => (
                                    <span
                                      key={mIndex}
                                      className="px-2 py-0.5 rounded-full bg-[#76ABAE]/20 text-[#76ABAE] text-xs"
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 p-5 sm:p-6 rounded-2xl bg-[#31363F]/20 border border-[#4a505a]"
        >
          <h3 className="text-lg sm:text-xl font-bold text-[#EEEEEE] mb-5 text-center">Impact by the Numbers</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center p-3 rounded-xl bg-[#222831]/50 border border-[#4a505a]">
              <div className="text-xl sm:text-2xl font-bold text-[#76ABAE] mb-1">2+</div>
              <div className="text-[#a0a8b8] text-xs sm:text-sm">Years Building</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-[#222831]/50 border border-[#4a505a]">
              <div className="text-xl sm:text-2xl font-bold text-[#76ABAE] mb-1">8</div>
              <div className="text-[#a0a8b8] text-xs sm:text-sm">Products Built</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-[#222831]/50 border border-[#4a505a]">
              <div className="text-xl sm:text-2xl font-bold text-[#76ABAE] mb-1">30%</div>
              <div className="text-[#a0a8b8] text-xs sm:text-sm">Time Saved</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-[#222831]/50 border border-[#4a505a]">
              <div className="text-xl sm:text-2xl font-bold text-[#76ABAE] mb-1">40%</div>
              <div className="text-[#a0a8b8] text-xs sm:text-sm">Faster Fixes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;