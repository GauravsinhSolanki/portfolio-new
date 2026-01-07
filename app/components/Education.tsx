"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap,
  FaUniversity,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBook,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaCode,
  FaUsers,
  FaTrophy,
  FaStar,
  FaChevronRight,
  FaBookOpen,
  FaLightbulb,
  FaCertificate
} from 'react-icons/fa';

const Education = () => {
  const [activeCourse, setActiveCourse] = useState<number | null>(null);

  const educationData = [
    {
      id: 1,
      institution: "Dalhousie University",
      location: "Halifax, NS, Canada",
      degree: "Master of Applied Computer Science",
      period: "Jan 2023 – Sep 2024",
      grade: "GPA: 3.9/4.3",
      icon: <FaUniversity className="text-white" />,
      color: "bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      courses: [
        {
          category: "Software Development Core",
          icon: <FaCode className="text-blue-400" />,
          items: ["Arrays & Linked Lists", "Java Programming", "SOLID Design Principles", "Test-Driven Development (TDD)", "Spring Boot Implementation"],
          projects: "Built enterprise applications using Spring Boot & TDD"
        },
        {
          category: "Web & Data Technologies",
          icon: <FaDatabase className="text-cyan-400" />,
          items: ["MERN Stack Proficiency", "Full Stack Project Development", "SQL Query Expertise", "Big Data (GCP, Neo4j)", "Core Database Concepts"],
          projects: "Developed full-stack applications with MERN stack"
        },
        {
          category: "Cloud Computing",
          icon: <FaCloud className="text-sky-400" />,
          items: ["AWS Services Basics", "Well-framed Architectures", "Six Pillars of Cloud Excellence", "Serverless AWS Services (Lex, Lambda)", "Cloud Architecture"],
          projects: "Implemented serverless architectures on AWS"
        }
      ],
      highlights: [
        { icon: <FaStar />, text: "Achieved exceptional GPA of 3.9/4.3" },
        { icon: <FaCertificate />, text: "Comprehensive cloud computing specialization" },
        { icon: <FaLightbulb />, text: "Advanced software engineering practices" },
        { icon: <FaBookOpen />, text: "Hands-on full-stack project experience" }
      ],
      description: "Advanced studies focusing on modern software development, cloud computing, and full-stack web technologies with practical, project-based learning."
    },
    {
      id: 2,
      institution: "Gujarat Technological University",
      location: "India",
      degree: "Bachelor of Computer Engineering",
      period: "Jul 2017 – Aug 2021",
      grade: "CGPA: 9.2/10",
      icon: <FaGraduationCap className="text-white" />,
      color: "bg-gradient-to-br from-emerald-600 via-green-700 to-teal-600",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      courses: [
        {
          category: "Core Computer Science",
          icon: <FaBook className="text-emerald-400" />,
          items: ["Calculus and Physics Fundamentals", "Computer Networks and Databases", "Data Structures and Compiler Design", "Theory of Computation", "Algorithm Analysis & Design"],
          projects: "Implemented complex algorithms and data structures"
        },
        {
          category: "Programming & Systems",
          icon: <FaCode className="text-green-400" />,
          items: ["C++ System Programming", "Operating Systems", "Computer Organization", "Object-Oriented Programming in Java", "Advanced Java Programming"],
          projects: "Developed system-level applications in C++ and Java"
        },
        {
          category: "Software Engineering & Web",
          icon: <FaLaptopCode className="text-teal-400" />,
          items: ["Software Engineering", "Web Technology Expertise", "Web Designing and Development", "Project Management", "System Analysis"],
          projects: "Built web applications with modern technologies"
        }
      ],
      highlights: [
        { icon: <FaTrophy />, text: "Outstanding academic performance (9.2/10 CGPA)" },
        { icon: <FaUsers />, text: "Selected for Gujarat Industrial HACKATHON 2019 finals" },
        { icon: <FaCertificate />, text: "Participated in Ethical Hacking workshop (HACKTRACK)" },
        { icon: <FaLightbulb />, text: "Strong foundation in computer engineering principles" }
      ],
      activities: [
        "Took part in Gujarat Industrial HACKATHON 2019 with team of 8 students, selected for final round",
        "Participated in HACKTRACK workshop on Ethical Hacking and Information Security",
        "Active in technical competitions and coding challenges"
      ],
      description: "Comprehensive computer engineering education with emphasis on fundamentals, software development, and practical problem-solving skills."
    }
  ];

  return (
    <section id="education" className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50">
              <FaBookOpen className="text-blue-400" />
              <span className="text-blue-300 font-medium">Academic Journey</span>
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
              Education & Learning
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Building strong foundations through academic excellence and continuous learning
          </motion.p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Main Card */}
              <div className={`relative rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm bg-slate-900/40 transition-all duration-500 group-hover:border-blue-500/30`}>
                {/* Header with gradient */}
                <div className={`${edu.color} p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FaMapMarkerAlt className="text-white/80 text-sm" />
                          <span className="text-white/90">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full ${edu.badgeColor} border backdrop-blur-sm`}>
                      <span className="font-bold">{edu.grade}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-slate-400">
                        <FaCalendarAlt className="text-blue-400" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      Key Highlights
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                          <div className="text-blue-400">
                            {highlight.icon}
                          </div>
                          <span className="text-slate-300 text-sm">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Course Categories */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-4">Course Categories</h5>
                    <div className="space-y-3">
                      {edu.courses.map((course, cIndex) => (
                        <div 
                          key={cIndex}
                          className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                            activeCourse === cIndex + edu.id * 10
                              ? 'border-blue-500/50 bg-blue-900/10'
                              : 'border-slate-700/30 bg-slate-800/20 hover:border-blue-500/30 hover:bg-slate-800/30'
                          }`}
                          onClick={() => setActiveCourse(
                            activeCourse === cIndex + edu.id * 10 
                              ? null 
                              : cIndex + edu.id * 10
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                                {course.icon}
                              </div>
                              <div>
                                <h6 className="font-semibold text-white">{course.category}</h6>
                                <p className="text-slate-400 text-sm mt-1">{course.projects}</p>
                              </div>
                            </div>
                            <FaChevronRight className={`text-blue-400 transition-transform duration-300 ${
                              activeCourse === cIndex + edu.id * 10 ? 'rotate-90' : ''
                            }`} />
                          </div>
                          
                          {/* Course Items - Expandable */}
                          {activeCourse === cIndex + edu.id * 10 && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-4"
                            >
                              <div className="pl-4 border-l border-blue-500/30">
                                <ul className="space-y-2">
                                  {course.items.map((item, iIndex) => (
                                    <li key={iIndex} className="flex items-center gap-2 text-slate-300">
                                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activities for Bachelor's */}
                  {edu.activities && (
                    <div className="mt-6 p-4 rounded-xl bg-emerald-900/10 border border-emerald-500/20">
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FaTrophy className="text-yellow-500" />
                        Activities & Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.activities.map((activity, aIndex) => (
                          <li key={aIndex} className="text-slate-300 text-sm leading-relaxed">
                            • {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default Education;