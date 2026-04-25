'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaJava, FaJsSquare, FaDatabase,
  FaReact, FaVuejs, FaNodeJs,
  FaDocker, FaJenkins, FaJira,
  FaBolt, FaServer, FaCloud, FaCode,
  FaCheckCircle, FaTachometerAlt,
  FaInfoCircle, FaTimes, FaArrowRight
} from 'react-icons/fa';
import { 
  SiTypescript, SiFastapi, SiMongodb, SiMysql,
  SiAmazon, SiTerraform, SiKubernetes, SiCypress,
  SiJunit5, SiAmazondynamodb
} from 'react-icons/si';
import { MdStorage } from 'react-icons/md';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);

  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-[#76ABAE] text-xl" />,
      skills: [
        { name: "Java", icon: <FaJava />, proficiency: 45, description: "Core Java, Spring Boot" },
        { name: "JavaScript", icon: <FaJsSquare />, proficiency: 90, description: "ES6+, Modern JS" },
        { name: "TypeScript", icon: <SiTypescript />, proficiency: 80, description: "Type-safe JS" },
        { name: "SQL", icon: <FaDatabase />, proficiency: 65, description: "Queries, Optimization" },
      ]
    },
    {
      title: "Frontend",
      icon: <FaReact className="text-[#76ABAE] text-xl" />,
      skills: [
        { name: "React.js", icon: <FaReact />, proficiency: 80, description: "Hooks, Context, Redux" },
        { name: "Vue.js", icon: <FaVuejs />, proficiency: 70, description: "Vue 3, Composition API" },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-[#76ABAE] text-xl" />,
      skills: [
        { name: "REST API", icon: <SiFastapi />, proficiency: 82, description: "REST APIs" },
        { name: "Node.js", icon: <FaNodeJs />, proficiency: 55, description: "Express" },
      ]
    },
    {
      title: "Databases",
      icon: <MdStorage className="text-[#76ABAE] text-xl" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 78, description: "NoSQL, Aggregation" },
        { name: "MySQL", icon: <SiMysql />, proficiency: 50, description: "Relational DB design" },
        { name: "DynamoDB", icon: <SiAmazondynamodb />, proficiency: 72, description: "AWS NoSQL" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-[#76ABAE] text-xl" />,
      skills: [
        { name: "AWS", icon: <SiAmazon />, proficiency: 80, description: "EC2, Lambda, CloudWatch" },
        { name: "Docker", icon: <FaDocker />, proficiency: 65, description: "Containerization" },
        { name: "CI/CD", icon: <FaBolt />, proficiency: 62, description: "Pipeline automation" },
        { name: "Terraform", icon: <SiTerraform />, proficiency: 55, description: "Infrastructure as Code" },
        { name: "Kubernetes", icon: <SiKubernetes />, proficiency: 30, description: "Container orchestration" },
      ]
    },
    {
      title: "Testing & Tools",
      icon: <FaCheckCircle className="text-[#76ABAE] text-xl" />,
      skills: [
        { name: "Cypress", icon: <SiCypress />, proficiency: 65, description: "E2E testing" },
        { name: "JUnit", icon: <SiJunit5 />, proficiency: 68, description: "Java unit testing" },
        { name: "Jira", icon: <FaJira />, proficiency: 65, description: "Project management" },
        { name: "Jenkins", icon: <FaJenkins />, proficiency: 70, description: "Automation server" },
      ]
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const dismissed = localStorage.getItem('skillsTooltipDismissed');
    if (window.innerWidth <= 768 && dismissed !== 'true') {
      setTimeout(() => setShowMobileTooltip(true), 800);
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const dismissTooltip = () => {
    setShowMobileTooltip(false);
    localStorage.setItem('skillsTooltipDismissed', 'true');
  };

  return (
    <section id="skills" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#222831]">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Mobile Tooltip */}
        {isMobile && showMobileTooltip && (
          <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
            <div className="bg-[#31363F] border border-[#76ABAE]/30 rounded-xl p-4 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#76ABAE]/10">
                  <FaInfoCircle className="text-[#76ABAE] text-base" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-[#EEEEEE] text-sm">Tap to View Details</h4>
                    <button 
                      onClick={dismissTooltip}
                      className="text-[#a0a8b8] hover:text-[#EEEEEE] p-1"
                      aria-label="Close"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                  <p className="text-[#a0a8b8] text-xs leading-relaxed">
                    Tap on any skill card to see your proficiency level and detailed description.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-px w-12 sm:w-16 bg-[#76ABAE]/30"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EEEEEE] tracking-tight">
            Technical Skills
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-[#76ABAE]/30 to-transparent"></div>
        </div>

        {/* Section description */}
        <p className="text-[#a0a8b8] text-sm sm:text-base text-center mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Technologies I work with regularly.
          {isMobile && (
            <span className="block text-[#76ABAE] text-xs mt-2">
              👆 Tap any skill to see details
            </span>
          )}
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="bg-[#31363F]/30 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-[#4a505a] hover:border-[#76ABAE]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#4a505a]">
                <div className="p-2 rounded-lg bg-[#222831]">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#EEEEEE]">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} isMobile={isMobile} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="mt-12 p-5 sm:p-6 rounded-xl bg-[#31363F]/20 border border-[#4a505a] max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <FaTachometerAlt className="text-[#76ABAE] text-base" />
            <h4 className="text-sm font-semibold text-[#EEEEEE]">Proficiency Scale</h4>
          </div>
          <div className="flex justify-between text-[10px] sm:text-xs text-[#a0a8b8] mb-2">
            <span>Beginner</span>
            <span>Familiar</span>
            <span>Proficient</span>
            <span>Advanced</span>
            <span>Expert</span>
          </div>
          <div className="h-2 w-full bg-[#1f283e] rounded-full overflow-hidden flex">
            <div className="h-full w-1/5 bg-[#76ABAE]/40"></div>
            <div className="h-full w-1/5 bg-[#76ABAE]/60"></div>
            <div className="h-full w-1/5 bg-[#76ABAE]/75"></div>
            <div className="h-full w-1/5 bg-[#76ABAE]/90"></div>
            <div className="h-full w-1/5 bg-[#76ABAE]"></div>
          </div>
          <div className="flex justify-between mt-1 text-[9px] sm:text-[10px] text-[#a0a8b8]">
            <span>0-30%</span>
            <span>31-50%</span>
            <span>51-70%</span>
            <span>71-85%</span>
            <span>86-100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem: React.FC<{ skill: any; isMobile: boolean }> = ({ skill, isMobile }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getProficiencyColor = (percent: number) => {
    if (percent >= 86) return "bg-[#76ABAE]";
    if (percent >= 71) return "bg-[#76ABAE]/90";
    if (percent >= 51) return "bg-[#76ABAE]/75";
    if (percent >= 31) return "bg-[#76ABAE]/60";
    return "bg-[#76ABAE]/40";
  };

  const getProficiencyLabel = (percent: number) => {
    if (percent >= 86) return "Expert";
    if (percent >= 71) return "Advanced";
    if (percent >= 51) return "Proficient";
    if (percent >= 31) return "Familiar";
    return "Beginner";
  };

  const handleTap = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const showDetails = isMobile ? isExpanded : isExpanded;

  return (
    <div 
      className="relative"
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
    >
      <div 
        className={`w-full p-3 rounded-xl transition-all duration-200 ${
          showDetails 
            ? 'bg-[#222831] border border-[#76ABAE]/20' 
            : 'bg-[#222831]/40 border border-[#4a505a] hover:border-[#76ABAE]/30'
        } ${isMobile ? 'cursor-pointer active:scale-[0.99]' : ''}`}
        onClick={handleTap}
      >
        {/* Skill header - Always visible */}
        <div className="flex items-center gap-3">
          <div className={`text-[#76ABAE] text-lg transition-colors ${showDetails ? 'text-[#8abfc2]' : ''}`}>
            {skill.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-[#EEEEEE] text-sm sm:text-base">
                {skill.name}
              </h4>
              {!showDetails && (
                <span className="text-[10px] text-[#a0a8b8]">
                  {skill.proficiency}%
                </span>
              )}
            </div>
            {skill.description && !showDetails && (
              <p className="text-[#a0a8b8] text-xs mt-0.5 truncate">
                {skill.description}
              </p>
            )}
          </div>
          {isMobile && (
            <div className="text-[#76ABAE] text-xs">
              {showDetails ? <FaTimes size={10} /> : <FaArrowRight size={10} />}
            </div>
          )}
        </div>

        {/* Expanded details */}
        {(showDetails || (!isMobile && isExpanded)) && (
          <div className="mt-3 pt-3 border-t border-[#4a505a] animate-fade-in">
            {skill.description && (
              <p className="text-[#a0a8b8] text-xs sm:text-sm leading-relaxed mb-3">
                {skill.description}
              </p>
            )}
            
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[10px] text-[#a0a8b8]">Proficiency</span>
              <span className="text-xs font-medium text-[#76ABAE]">
                {skill.proficiency}% • {getProficiencyLabel(skill.proficiency)}
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="h-1.5 w-full bg-[#1f283e] rounded-full overflow-hidden">
              <div 
                className={`h-full ${getProficiencyColor(skill.proficiency)} rounded-full transition-all duration-500`}
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Add CSS for animations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(-5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in {
      animation: fade-in 0.2s ease-out forwards;
    }
    .truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      .active\\:scale-\\[0\\.99\\]:active {
        transform: scale(0.99);
      }
    }
  `;
  document.head.appendChild(style);
}

export default Skills;