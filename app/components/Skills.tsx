'use client';

import React from 'react';
import { 
  FaJava, FaJsSquare, FaPython, FaDatabase,
  FaReact, FaVuejs, FaNodeJs, FaAws,
  FaDocker, FaJenkins, FaJira, FaGithub,
  FaBolt, FaServer, FaCloud, FaCode,
  FaCheckCircle, FaTachometerAlt,
  FaInfoCircle, FaTimes
} from 'react-icons/fa';
import { 
  SiTypescript, SiFastapi, SiMongodb, SiMysql,
  SiAmazoncloudwatch, SiTerraform, SiKubernetes, SiCypress,
  SiJunit5, SiTailwindcss,
  SiAmazondynamodb
} from 'react-icons/si';
import { MdStorage } from 'react-icons/md';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  proficiency: number; // 0-100
  description?: string;
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-primary text-xl" />,
      skills: [
        { name: "Java", icon: <FaJava />, proficiency: 45, description: "Core Java, Spring Boot" },
        { name: "JavaScript", icon: <FaJsSquare />, proficiency: 90, description: "ES6+, Modern JS" },
        { name: "TypeScript", icon: <SiTypescript />, proficiency: 80, description: "Type-safe JS" },
        { name: "SQL", icon: <FaDatabase />, proficiency: 65, description: "Queries, Optimization" },
      ]
    },
    {
      title: "Frontend",
      icon: <FaReact className="text-primary text-xl" />,
      skills: [
        { name: "React.js", icon: <FaReact />, proficiency: 80, description: "Hooks, Context, Redux" },
        { name: "Vue.js", icon: <FaVuejs />, proficiency: 70, description: "Vue 3, Composition API" },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-primary text-xl" />,
      skills: [
        { name: "RESTAPI", icon: <SiFastapi />, proficiency: 82, description: "REST APIs" },
        { name: "Node.js", icon: <FaNodeJs />, proficiency: 55, description: "Express" },
      ]
    },
    {
      title: "Databases",
      icon: <MdStorage className="text-primary text-xl" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 78, description: "NoSQL, Aggregation" },
        { name: "MySQL", icon: <SiMysql />, proficiency: 50, description: "Relational DB design" },
        { name: "DynamoDB", icon: <SiAmazondynamodb />, proficiency: 72, description: "AWS NoSQL" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-primary text-xl" />,
      skills: [
        { name: "AWS", icon: <SiAmazoncloudwatch />, proficiency: 80, description: "EC2, Lambda, CloudWatch" },
        { name: "Docker", icon: <FaDocker />, proficiency: 65, description: "Containerization" },
        { name: "CI/CD", icon: <FaBolt />, proficiency: 62, description: "Pipeline automation" },
        { name: "Terraform", icon: <SiTerraform />, proficiency: 55, description: "Infrastructure as Code" },
        { name: "Kubernetes", icon: <SiKubernetes />, proficiency: 30, description: "Container orchestration" },
      ]
    },
    {
      title: "Testing & Tools",
      icon: <FaCheckCircle className="text-primary text-xl" />,
      skills: [
        { name: "Cypress", icon: <SiCypress />, proficiency: 65, description: "E2E testing" },
        { name: "JUnit", icon: <SiJunit5 />, proficiency: 68, description: "Java unit testing" },
        { name: "Jira", icon: <FaJira />, proficiency: 65, description: "Project management" },
        { name: "Jenkins", icon: <FaJenkins />, proficiency: 70, description: "Automation server" },
      ]
    }
  ];

  const [isMobile, setIsMobile] = React.useState(false);
  const [showMobileTooltip, setShowMobileTooltip] = React.useState(false);

  // Check if on mobile device
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Show mobile tooltip only on mobile and if not dismissed before
    const dismissed = localStorage.getItem('mobileTooltipDismissed');
    if (window.innerWidth <= 768 && dismissed !== 'true') {
      setTimeout(() => {
        setShowMobileTooltip(true);
      }, 500);
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const dismissTooltip = () => {
    setShowMobileTooltip(false);
    localStorage.setItem('mobileTooltipDismissed', 'true');
  };

  return (
    <section id="skills" className="relative py-20 px-4 md:px-8 bg-dark-primary">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Tooltip */}
        {isMobile && showMobileTooltip && (
          <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up">
            <div className="bg-background-light border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <FaInfoCircle className="text-primary text-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-text text-sm">How to View Details</h4>
                    <button 
                      onClick={dismissTooltip}
                      className="text-text-muted hover:text-text p-1"
                      aria-label="Close tooltip"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <p className="text-text-light text-xs">
                    Tap/Click on any skill to see proficiency percentage and level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-20 bg-gradient-to-r from-border via-primary to-border"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Technical Skills
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-border via-primary to-border"></div>
        </div>

        <p className="text-text-light text-lg text-center mb-12 max-w-3xl mx-auto">
          Technologies I work with regularly. {isMobile ? "Tap on any skill to see proficiency details." : "Hover over any skill to see my proficiency level."}
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="bg-background-light p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-background-lighter">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-text">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex-1 space-y-3">
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} isMobile={isMobile} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="mt-12 p-6 rounded-xl bg-background-light border border-border max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <FaTachometerAlt className="text-primary" />
            <h4 className="text-lg font-semibold text-text">Proficiency Scale</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-text-light text-sm">Beginner</span>
              <span className="text-text-light text-sm">Expert</span>
            </div>
            <div className="h-2 w-full bg-gradient-to-r from-primary/20 via-primary/60 to-primary rounded-full"></div>
            <div className="flex justify-between text-xs text-text-muted">
              <span>0-30%</span>
              <span>31-70%</span>
              <span>71-85%</span>
              <span>86-100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem: React.FC<{ skill: any; isMobile: boolean }> = ({ skill, isMobile }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTapped, setIsTapped] = React.useState(false);

  // Get color based on proficiency
  const getProficiencyColor = (percent: number) => {
    if (percent >= 85) return "bg-primary";
    if (percent >= 75) return "bg-primary";
    if (percent >= 65) return "bg-primary/80";
    return "bg-primary/60";
  };

  // Get proficiency label
  const getProficiencyLabel = (percent: number) => {
    if (percent >= 85) return "Expert";
    if (percent >= 75) return "Advanced";
    if (percent >= 65) return "Proficient";
    if (percent >= 50) return "Intermediate";
    if (percent >= 30) return "Familiar";
    return "Beginner";
  };

  // Handle mobile tap
  const handleTap = () => {
    if (isMobile) {
      setIsTapped(!isTapped);
    }
  };

  // Determine if we should show the detailed view
  const showDetails = isMobile ? isTapped : isHovered;

  return (
    <div 
      className="relative min-h-[80px] flex items-center"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleTap}
    >
      <div className={`w-full p-3 rounded-lg ${showDetails ? 'bg-background-lighter' : 'bg-background-light/50'} hover:bg-background-lighter transition-all duration-300 ${isMobile ? 'cursor-pointer active:scale-[0.98] touch-manipulation' : 'cursor-default'}`}>
        <div className="flex items-start gap-3">
          <div className="text-primary text-xl mt-1 flex-shrink-0">
            {skill.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`${showDetails ? 'mb-3' : ''}`}>
              <h4 className="font-semibold text-text text-base mb-1">
                {skill.name}
              </h4>
              {skill.description && (
                <p className="text-text-light text-sm leading-tight">
                  {skill.description}
                </p>
              )}
            </div>

            {/* Proficiency details */}
            <div className={`transition-all duration-300 ${showDetails ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              <div className="pt-2 border-t border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-text-muted">Proficiency Level</span>
                  <span className="text-sm font-medium text-primary">
                    {skill.proficiency}% • {getProficiencyLabel(skill.proficiency)}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 w-full bg-background-lighter rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getProficiencyColor(skill.proficiency)} rounded-full transition-all duration-1000`}
                    style={{ 
                      width: `${skill.proficiency}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS animations
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.2s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slideUp 0.3s ease-out forwards;
  }
  
  @media (max-width: 768px) {
    .touch-manipulation {
      touch-action: manipulation;
    }
  }
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Skills;