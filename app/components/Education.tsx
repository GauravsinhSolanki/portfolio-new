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
      icon: <FaUniversity className="text-[#EEEEEE]" />,
      color: "bg-gradient-to-br from-[#708993] via-[#31363F] to-[#222831]",
      badgeColor: "bg-[#76ABAE]/20 text-[#76ABAE] border-[#76ABAE]/40",
      courses: [
        {
          category: "Building Real Software",
          icon: <FaCode className="text-[#76ABAE]" />,
          items: ["Built enterprise applications with Spring Boot", "Practiced test-driven development", "Applied SOLID design principles", "Worked with data structures in Java", "Created scalable software architectures"],
          projects: "Built production-ready applications from scratch"
        },
        {
          category: "Full-Stack Development",
          icon: <FaDatabase className="text-[#76ABAE]" />,
          items: ["Built complete web applications with MERN stack", "Designed and queried databases", "Worked with big data on Google Cloud", "Created full-stack projects end-to-end", "Learned modern web development patterns"],
          projects: "Created full-stack applications deployed and running"
        },
        {
          category: "Cloud & Serverless",
          icon: <FaCloud className="text-[#76ABAE]" />,
          items: ["Designed cloud architectures on AWS", "Built serverless applications with Lambda", "Learned cloud best practices", "Worked with AWS services in projects", "Deployed applications to the cloud"],
          projects: "Deployed serverless applications to AWS"
        }
      ],
      highlights: [
        { icon: <FaStar />, text: "Graduated with excellent grades" },
        { icon: <FaCertificate />, text: "Specialized in cloud computing" },
        { icon: <FaLightbulb />, text: "Built real applications, not just coursework" },
        { icon: <FaBookOpen />, text: "Hands-on project experience throughout" }
      ],
      description: "Focused on practical skills I could use immediately in my career. Built real applications, worked with cloud technologies, and learned modern development practices."
    },
    {
      id: 2,
      institution: "Gujarat Technological University",
      location: "India",
      degree: "Bachelor of Computer Engineering",
      period: "Jul 2017 – Aug 2021",
      grade: "CGPA: 9.2/10",
      icon: <FaGraduationCap className="text-[#EEEEEE]" />,
      color: "bg-gradient-to-br from-[#708993] via-[#31363F] to-[#222831]",
      badgeColor: "bg-[#76ABAE]/20 text-[#76ABAE] border-[#76ABAE]/40",
      courses: [
        {
          category: "Computer Science Fundamentals",
          icon: <FaBook className="text-[#76ABAE]" />,
          items: ["Mastered algorithms and data structures", "Built compilers and interpreters", "Designed computer networks", "Worked with databases from ground up", "Learned theory of computation"],
          projects: "Implemented complex computer science concepts"
        },
        {
          category: "Programming & Systems",
          icon: <FaCode className="text-[#76ABAE]" />,
          items: ["Wrote system-level code in C++", "Built operating system components", "Created Java applications", "Worked with computer architecture", "Developed low-level software"],
          projects: "Built system applications in multiple languages"
        },
        {
          category: "Building Web Applications",
          icon: <FaLaptopCode className="text-[#76ABAE]" />,
          items: ["Designed and built websites", "Learned web development technologies", "Applied software engineering practices", "Managed full software projects", "Built working web applications"],
          projects: "Created complete web applications"
        }
      ],
      highlights: [
        { icon: <FaTrophy />, text: "Graduated with top marks in class" },
        { icon: <FaUsers />, text: "Finalist in Gujarat Hackathon 2019" },
        { icon: <FaCertificate />, text: "Completed ethical hacking workshop" },
        { icon: <FaLightbulb />, text: "Built strong programming foundation" }
      ],
      activities: [
        "Made it to finals in Gujarat Hackathon 2019 with team of 8 students",
        "Completed hands-on ethical hacking and security workshop",
        "Participated in multiple coding competitions and tech events"
      ],
      description: "Built the foundation for my programming career. Learned computer science from the ground up while building my first real software projects."
    }
  ];

  return (
    <section id="education" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#222831] via-[#222831] to-[#2a313a]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-[#76ABAE]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-[#76ABAE]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#31363F]/50 border border-[#76ABAE]/30">
              <FaBookOpen className="text-[#76ABAE] text-sm sm:text-base" />
              <span className="text-[#76ABAE] font-medium text-sm sm:text-base">My Learning Path</span>
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
              Education
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#EEEEEE]/70 text-base sm:text-lg max-w-2xl mx-auto px-4"
          >
            Building skills through education and actually applying them to real projects
          </motion.p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
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
              <div className={`relative rounded-2xl overflow-hidden border border-[#31363F] backdrop-blur-sm bg-[#31363F]/40 transition-all duration-500 group-hover:border-[#76ABAE]/50`}>
                {/* Header with gradient */}
                <div className={`${edu.color} p-4 sm:p-6`}>
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#222831]/30 backdrop-blur-sm border border-[#EEEEEE]/20 flex-shrink-0">
                        {edu.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#EEEEEE] break-words">{edu.institution}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FaMapMarkerAlt className="text-[#EEEEEE]/80 text-xs sm:text-sm flex-shrink-0" />
                          <span className="text-[#EEEEEE]/90 text-sm sm:text-base">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${edu.badgeColor} border backdrop-blur-sm self-start sm:self-auto`}>
                      <span className="font-bold text-sm text-[#EEEEEE] sm:text-base">{edu.grade}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-5 sm:mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-3">
                      <h4 className="text-lg sm:text-xl font-bold text-[#EEEEEE] break-words">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-[#EEEEEE]/60 text-sm sm:text-base">
                        <FaCalendarAlt className="text-[#76ABAE] flex-shrink-0" />
                        <span className="whitespace-nowrap">{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-[#EEEEEE]/80 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                  </div>

                  {/* At a Glance */}
                  <div className="mb-5 sm:mb-6">
                    <h5 className="text-base sm:text-lg font-semibold text-[#EEEEEE] mb-3 flex items-center gap-2">
                      <FaStar className="text-[#76ABAE] text-sm sm:text-base" />
                      <span>At a Glance</span>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg bg-[#222831]/50 border border-[#31363F]">
                          <div className="text-[#76ABAE] flex-shrink-0 text-sm sm:text-base">
                            {highlight.icon}
                          </div>
                          <span className="text-[#EEEEEE]/80 text-xs sm:text-sm leading-snug">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What I Learned */}
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-[#EEEEEE] mb-3 sm:mb-4">What I Learned</h5>
                    <div className="space-y-3">
                      {edu.courses.map((course, cIndex) => (
                        <div 
                          key={cIndex}
                          className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                            activeCourse === cIndex + edu.id * 10
                              ? 'border-[#76ABAE]/50 bg-[#76ABAE]/10'
                              : 'border-[#31363F] bg-[#222831]/40 hover:border-[#76ABAE]/30 hover:bg-[#222831]/60'
                          }`}
                          onClick={() => setActiveCourse(
                            activeCourse === cIndex + edu.id * 10 
                              ? null 
                              : cIndex + edu.id * 10
                          )}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                              <div className="p-1.5 sm:p-2 rounded-lg bg-[#31363F]/50 border border-[#31363F] flex-shrink-0">
                                {course.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h6 className="font-semibold text-[#EEEEEE] text-sm sm:text-base break-words">{course.category}</h6>
                                <p className="text-[#EEEEEE]/60 text-xs sm:text-sm mt-1 break-words">{course.projects}</p>
                              </div>
                            </div>
                            <FaChevronRight className={`text-[#76ABAE] transition-transform duration-300 flex-shrink-0 text-sm sm:text-base ${
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
                              className="overflow-hidden mt-3 sm:mt-4"
                            >
                              <div className="pl-3 sm:pl-4 border-l border-[#76ABAE]/30">
                                <ul className="space-y-2">
                                  {course.items.map((item, iIndex) => (
                                    <li key={iIndex} className="flex items-start gap-2 text-[#EEEEEE]/80 text-xs sm:text-sm">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#76ABAE] flex-shrink-0 mt-1.5"></div>
                                      <span className="leading-relaxed">{item}</span>
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
                    <div className="mt-5 sm:mt-6 p-3 sm:p-4 rounded-xl bg-[#76ABAE]/10 border border-[#76ABAE]/20">
                      <h5 className="text-base sm:text-lg font-semibold text-[#EEEEEE] mb-3 flex items-center gap-2">
                        <FaTrophy className="text-[#76ABAE] text-sm sm:text-base" />
                        <span>Beyond the Classroom</span>
                      </h5>
                      <ul className="space-y-2">
                        {edu.activities.map((activity, aIndex) => (
                          <li key={aIndex} className="text-[#EEEEEE]/80 text-xs sm:text-sm leading-relaxed">
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