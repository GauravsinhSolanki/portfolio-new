"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaCloud,
  FaChevronRight,
  FaBookOpen,
  FaStar,
  FaTrophy
} from 'react-icons/fa';

const Education = () => {
  const [activeCourse, setActiveCourse] = useState<number | null>(null);

  const educationData = [
    {
      id: 1,
      institution: "Dalhousie University",
      location: "Halifax, NS",
      degree: "Master of Applied Computer Science",
      period: "2023 – 2024",
      grade: "GPA: 3.9/4.3",
      icon: <FaUniversity />,
      courses: [
        {
          category: "Software Development",
          items: ["Spring Boot", "Test-Driven Development", "SOLID Principles"],
          details: "Built enterprise apps with modern practices"
        },
        {
          category: "Full-Stack",
          items: ["MERN Stack", "Database Design", "Big Data"],
          details: "Built complete web applications"
        },
        {
          category: "Cloud Computing",
          items: ["AWS Lambda", "Serverless", "Cloud Architecture"],
          details: "Deployed apps to the cloud"
        }
      ],
      highlights: ["Graduated with honors", "Cloud specialization", "Hands-on projects"]
    },
    {
      id: 2,
      institution: "Gujarat Technological University",
      location: "India",
      degree: "Bachelor of Computer Engineering",
      period: "2017 – 2021",
      grade: "CGPA: 9.2/10",
      icon: <FaGraduationCap />,
      courses: [
        {
          category: "Core CS",
          items: ["Algorithms", "Data Structures", "Networks"],
          details: "Strong computer science foundation"
        },
        {
          category: "Programming",
          items: ["C++", "Java", "System Programming"],
          details: "Built system-level applications"
        }
      ],
      highlights: ["Top 5% of class", "Hackathon finalist", "Strong fundamentals"],
      activities: [
        "Gujarat Hackathon 2019 Finalist",
        "Ethical Hacking Workshop"
      ]
    }
  ];

  return (
    <section id="education" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#222831]">
      
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-px w-12 sm:w-16 bg-[#76ABAE]/30"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EEEEEE] tracking-tight">
            Education
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-[#76ABAE]/30 to-transparent"></div>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden border border-[#4a505a] bg-[#31363F]/30 backdrop-blur-sm hover:border-[#76ABAE]/50 transition-all duration-300">
                
                {/* Header */}
                <div className="p-5 border-b border-[#4a505a]">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#222831] border border-[#4a505a] text-[#76ABAE] text-lg">
                      {edu.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-[#EEEEEE]">{edu.institution}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-[#76ABAE] text-xs" />
                          <span className="text-[#a0a8b8] text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-[#76ABAE] text-xs" />
                          <span className="text-[#a0a8b8] text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Degree & Grade */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#4a505a]">
                    <h4 className="font-semibold text-[#EEEEEE] text-base">{edu.degree}</h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#76ABAE]/20 text-[#76ABAE] text-xs font-medium">
                      {edu.grade}
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#222831] text-[#a0a8b8] text-xs border border-[#4a505a]">
                          <FaStar className="text-[#76ABAE] text-[10px]" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What I Learned */}
                  <div>
                    <h5 className="text-sm font-semibold text-[#EEEEEE] mb-3">What I learned</h5>
                    <div className="space-y-2.5">
                      {edu.courses.map((course, cIndex) => (
                        <div 
                          key={cIndex}
                          className={`rounded-xl border transition-all duration-300 ${
                            activeCourse === cIndex + edu.id * 10
                              ? 'border-[#76ABAE]/50 bg-[#76ABAE]/5'
                              : 'border-[#4a505a] bg-[#222831]/30 hover:border-[#76ABAE]/30'
                          }`}
                        >
                          <button
                            className="w-full p-3 text-left flex items-center justify-between gap-2"
                            onClick={() => setActiveCourse(
                              activeCourse === cIndex + edu.id * 10 
                                ? null 
                                : cIndex + edu.id * 10
                            )}
                          >
                            <div>
                              <h6 className="font-medium text-[#EEEEEE] text-sm">{course.category}</h6>
                              <p className="text-[#a0a8b8] text-xs mt-0.5">{course.details}</p>
                            </div>
                            <FaChevronRight className={`text-[#76ABAE] text-xs transition-transform duration-300 ${
                              activeCourse === cIndex + edu.id * 10 ? 'rotate-90' : ''
                            }`} />
                          </button>
                          
                          {/* Expandable items */}
                          {activeCourse === cIndex + edu.id * 10 && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden px-3 pb-3"
                            >
                              <div className="pt-2 border-t border-[#4a505a]">
                                <div className="flex flex-wrap gap-1.5">
                                  {course.items.map((item, iIndex) => (
                                    <span
                                      key={iIndex}
                                      className="px-2 py-0.5 rounded-full bg-[#76ABAE]/20 text-[#76ABAE] text-xs"
                                    >
                                      {item}
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

                  {/* Activities */}
                  {edu.activities && (
                    <div className="mt-3 p-2 rounded-xl bg-[#76ABAE]/5 border border-[#76ABAE]/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FaTrophy className="text-[#76ABAE] text-sm" />
                        <h6 className="text-s font-medium text-[#EEEEEE]">Beyond Academics</h6>
                      </div>
                      <p className="text-[#a0a8b8] text-xs leading-relaxed">
                        {edu.activities.join(" • ")}
                      </p>
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