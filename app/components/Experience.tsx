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
      type: "Full-time (1+ Year Ongoing)",
      icon: <FaRocket className="text-[#EEEEEE]" />,
      color: "bg-gradient-to-br from-[#76ABAE] via-[#31363F] to-[#222831]",
      badgeColor: "bg-[#76ABAE]/20 text-[#76ABAE] border-[#76ABAE]/40",
      achievements: [
        {
          title: "Built insurance products from scratch",
          description: "Created 8 full-stack insurance products that are actually used by insurance consultants in the US. Started with nothing but requirements and built them into working products using React, FastAPI, MongoDB, and AWS.",
          icon: <FaCode className="text-[#76ABAE]" />,
          impact: "6 products live in production",
          metrics: ["React.js", "FastAPI", "MongoDB", "AWS"]
        },
        {
          title: "Made policy configuration 30% faster",
          description: "Built the Bundle Policies feature that lets customers combine multiple coverages into one policy. Insurance agents used to do this manually - now it's automated and saves them time on every quote.",
          icon: <FaLightbulb className="text-[#76ABAE]" />,
          impact: "Saves time on every policy",
          metrics: ["Process Automation", "Time Savings"]
        },
        {
          title: "Automated insurance certificates",
          description: "Built the system that automatically generates and manages Certificates of Insurance. Before this, policyholders had to request certificates manually. Now they get them instantly whenever contracts require proof of coverage.",
          icon: <FaCheckCircle className="text-[#76ABAE]" />,
          impact: "Instant compliance documents",
          metrics: ["Compliance", "Document Automation"]
        },
        {
          title: "Owned a major client's product",
          description: "Was the main developer responsible for one of our largest US clients. Handled everything from discussing what they needed, to building it, testing it, and making sure it worked correctly in production.",
          icon: <FaCogs className="text-[#76ABAE]" />,
          impact: "Single point of ownership",
          metrics: ["Client Delivery", "Full Responsibility"]
        },
        {
          title: "Fixed production issues faster",
          description: "When things went wrong in production, I tracked down the problems using MongoDB and AWS CloudWatch logs. Got good at finding and fixing issues quickly, cutting resolution time almost in half.",
          icon: <FaChartLine className="text-[#76ABAE]" />,
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
      type: "Co-op (4 Months)",
      icon: <FaTools className="text-[#EEEEEE]" />,
      color: "bg-gradient-to-br from-[#708993] via-[#3f444d] to-[#31363F]",
      badgeColor: "bg-[#76ABAE]/20 text-[#76ABAE] border-[#76ABAE]/40",
      achievements: [
        {
          title: "Got up to speed quickly",
          description: "Jumped into a complex insurance software platform and figured out how it worked. Learned about insurance policies, renewals, coverages, and all the moving parts of a real SaaS product.",
          icon: <FaRocket className="text-[#76ABAE]" />,
          impact: "Learned fast, delivered quickly",
          metrics: ["Insurance Domain", "SaaS", "Quick Learning"]
        },
        {
          title: "Built foundation pieces",
          description: "Worked on both frontend and backend pieces that became part of the main product. Not just practice code - actual features that customers use today.",
          icon: <FaCode className="text-[#76ABAE]" />,
          impact: "Code still in production",
          metrics: ["React.js", "FastAPI", "Production Code"]
        },
        {
          title: "Earned a full-time offer",
          description: "After showing I could handle real work and take ownership, they asked me to stay on full-time. Went from co-op to full engineer in four months.",
          icon: <FaChartLine className="text-[#76ABAE]" />,
          impact: "Promoted based on performance",
          metrics: ["Full-time Offer", "Ownership", "Quality Work"]
        }
      ],
      highlights: [
        { icon: <FaRocket />, text: "Mastered complex insurance software quickly" },
        { icon: <FaBuilding />, text: "Built parts of the production platform" },
        { icon: <FaTrophy />, text: "Converted co-op to full-time role" },
        { icon: <FaIndustry />, text: "Learned real-world SaaS development" }
      ],
      description: "Started as a co-op and learned how enterprise software actually gets built. Proved I could contribute to real products and earned a permanent spot on the team."
    },
    {
      id: 3,
      company: "Desai Software",
      location: "Surat, Gujarat, India",
      role: "Software Engineer",
      period: "Aug 2021 – Apr 2022",
      type: "Full-time + Internship (9 Months)",
      icon: <FaBriefcase className="text-[#EEEEEE]" />,
      color: "bg-gradient-to-br from-[#708993] via-[#3f444d] to-[#2a2f37]",
      badgeColor: "bg-[#76ABAE]/20 text-[#76ABAE] border-[#76ABAE]/40",
      achievements: [
        {
          title: "Learned full-stack development",
          description: "Got my hands dirty with real JavaScript, React, and Node.js projects. Built both frontend interfaces and backend APIs, learning how all the pieces fit together.",
          icon: <FaCode className="text-[#76ABAE]" />,
          impact: "Solid full-stack foundation",
          metrics: ["JavaScript", "React", "Node.js", "MongoDB"]
        },
        {
          title: "Made tasks update in real-time",
          description: "Built a system where task updates showed up immediately for everyone. No more refreshing the page to see what changed.",
          icon: <FaInfinity className="text-[#76ABAE]" />,
          impact: "Instant updates for teams",
          metrics: ["Real-time", "Task Management", "User Experience"]
        },
        {
          title: "Made things run faster",
          description: "Optimized some slow APIs and improved frontend performance. Everything just worked a bit better and faster after I was done.",
          icon: <FaChartLine className="text-[#76ABAE]" />,
          impact: "Noticeable speed improvement",
          metrics: ["Performance", "Optimization", "Frontend"]
        },
        {
          title: "Helped ship real features",
          description: "Worked on database designs, built APIs, fixed bugs, reviewed code, and helped deploy to AWS. Got experience with the whole process of shipping software.",
          icon: <FaAws className="text-[#76ABAE]" />,
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
    <section id="experience" className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#222831] via-[#2a313a] to-[#222831] mobile-padding">
      {/* background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#76ABAE]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#76ABAE]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#76ABAE]/5 rounded-full blur-3xl"></div>
        
        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(118, 171, 174, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 mobile-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#31363F]/50 border border-[#76ABAE]/30">
              <FaBriefcase className="text-[#76ABAE]" />
              <span className="text-[#76ABAE] font-medium">Where I've Worked</span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#76ABAE] via-[#8dbdc0] to-[#76ABAE] bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#EEEEEE]/70 text-lg max-w-2xl mx-auto"
          >
            Building software that solves real problems. From my first job to leading product development.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="relative experience-timeline">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-[#76ABAE]/30 to-transparent"></div>
          
          {/* Experience Cards */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
                ref={(el) => {
                  experienceRefs.current[index] = el;
                }}
              >

                {/* Experience Card */}
                <motion.div
                  className={`relative rounded-2xl overflow-hidden border border-[#31363F] backdrop-blur-sm bg-[#31363F]/40 transition-all duration-500 hover:border-[#76ABAE]/50 cursor-pointer ${
                    activeExp === exp.id ? 'ring-2 ring-[#76ABAE]/50' : ''
                  }`}
                  onClick={() => setActiveExp(activeExp === exp.id ? null : exp.id)}
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className={`${exp.color} p-6`}>
                    <div className="flex flex-col gap-4">
                      {/* Top row: Icon, Company, and Role */}
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="p-3 rounded-xl bg-[#222831]/30 backdrop-blur-sm border border-[#EEEEEE]/20 flex-shrink-0">
                            {exp.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-bold text-[#EEEEEE] break-words">{exp.company}</h3>
                          </div>
                        </div>
                        {/* Role badge */}
                        <div className="px-4 py-2 rounded-lg bg-[#222831]/30 backdrop-blur-sm border border-[#EEEEEE]/20 sm:self-start break-words max-w-full">
                          <span className="font-bold text-[#EEEEEE] text-sm sm:text-base">{exp.role}</span>
                        </div>
                      </div>
                      
                      {/* Second row: Location, Period, and Type badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-[#EEEEEE]/80 flex-shrink-0" />
                            <span className="text-[#EEEEEE]/90">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-[#EEEEEE]/80 flex-shrink-0" />
                            <span className="text-[#EEEEEE]/90">{exp.period}</span>
                          </div>
                        </div>
                        {/* Type badge */}
                        <div className={`px-3 py-1 rounded-full ${exp.badgeColor} border backdrop-blur-sm text-sm break-words w-fit`}>
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <p className="text-[#EEEEEE]/80 leading-relaxed mb-6 text-sm md:text-base">{exp.description}</p>

                    {/* Quick Highlights */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-[#EEEEEE] mb-3 flex items-center gap-2">
                        <FaTrophy className="text-[#76ABAE]" />
                        Quick Look
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-[#222831]/50 border border-[#31363F]">
                            <div className="text-[#76ABAE] flex-shrink-0">
                              {highlight.icon}
                            </div>
                            <span className="text-[#EEEEEE]/80 text-sm">{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What I Actually Did */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg font-semibold text-[#EEEEEE]">What I Worked On</h5>
                        <span className="text-[#EEEEEE]/60 text-sm">
                          {exp.achievements.length} key projects
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        {exp.achievements.map((achievement, aIndex) => (
                          <div 
                            key={aIndex}
                            className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                              activeAchievement === aIndex + exp.id * 10
                                ? 'border-[#76ABAE]/50 bg-[#76ABAE]/10'
                                : 'border-[#31363F] bg-[#222831]/40 hover:border-[#76ABAE]/30 hover:bg-[#222831]/60'
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
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="p-2 rounded-lg bg-[#31363F]/50 border border-[#31363F] flex-shrink-0">
                                  {achievement.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h6 className="font-semibold text-[#EEEEEE] break-words">{achievement.title}</h6>
                                  <p className="text-[#76ABAE] text-sm mt-1 truncate">{achievement.impact}</p>
                                </div>
                              </div>
                              <FaChevronRight className={`text-[#76ABAE] transition-transform duration-300 flex-shrink-0 ${
                                activeAchievement === aIndex + exp.id * 10 ? 'rotate-90' : ''
                              }`} />
                            </div>
                            
                            {/* Achievement Details - Expandable */}
                            <AnimatePresence>
                              {activeAchievement === aIndex + exp.id * 10 && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden mt-4"
                                >
                                  <div className="pl-4 border-l border-[#76ABAE]/30">
                                    <p className="text-[#EEEEEE]/80 text-sm leading-relaxed mb-3">
                                      {achievement.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {achievement.metrics.map((metric, mIndex) => (
                                        <span
                                          key={mIndex}
                                          className="px-3 py-1 rounded-full bg-[#76ABAE]/20 text-[#76ABAE] text-xs border border-[#76ABAE]/30 whitespace-nowrap"
                                        >
                                          {metric}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-6 md:p-8 rounded-2xl border border-[#31363F] bg-gradient-to-br from-[#31363F]/50 to-[#222831]/50 mobile-full-width"
        >
          <h3 className="text-2xl font-bold text-[#EEEEEE] mb-8 text-center">By the Numbers</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="text-center p-4 rounded-xl bg-[#76ABAE]/20 border border-[#76ABAE]/30">
              <div className="text-2xl md:text-3xl font-bold text-[#76ABAE] mb-2">2+</div>
              <div className="text-[#EEEEEE]/90 font-medium text-sm md:text-base">Years Building</div>
              <div className="text-[#EEEEEE]/60 text-xs md:text-sm">Real Software</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#76ABAE]/20 border border-[#76ABAE]/30">
              <div className="text-2xl md:text-3xl font-bold text-[#76ABAE] mb-2">8</div>
              <div className="text-[#EEEEEE]/90 font-medium text-sm md:text-base">Products Built</div>
              <div className="text-[#EEEEEE]/60 text-xs md:text-sm">From Idea to Live</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#76ABAE]/20 border border-[#76ABAE]/30">
              <div className="text-2xl md:text-3xl font-bold text-[#76ABAE] mb-2">30%</div>
              <div className="text-[#EEEEEE]/90 font-medium text-sm md:text-base">Time Saved</div>
              <div className="text-[#EEEEEE]/60 text-xs md:text-sm">On Every Policy</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#76ABAE]/20 border border-[#76ABAE]/30">
              <div className="text-2xl md:text-3xl font-bold text-[#76ABAE] mb-2">40%</div>
              <div className="text-[#EEEEEE]/90 font-medium text-sm md:text-base">Faster Fixes</div>
              <div className="text-[#EEEEEE]/60 text-xs md:text-sm">When Issues Arise</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;