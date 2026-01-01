'use client';

import React from 'react';
import { 
  FaJava, FaJsSquare, FaPython, FaDatabase,
  FaReact, FaVuejs, FaNodeJs, FaAws,
  FaDocker, FaJenkins, FaJira, FaGithub,
  FaBolt, FaServer, FaCloud, FaCode,
  FaCheckCircle, FaTachometerAlt
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
      icon: <FaCode className="text-blue-400 text-xl" />,
      skills: [
        { name: "Java", icon: <FaJava />, proficiency: 45, description: "Core Java, Spring Boot" },
        { name: "JavaScript", icon: <FaJsSquare />, proficiency: 90, description: "ES6+, Modern JS" },
        { name: "TypeScript", icon: <SiTypescript />, proficiency: 80, description: "Type-safe JS" },
        { name: "SQL", icon: <FaDatabase />, proficiency: 65, description: "Queries, Optimization" },
      ]
    },
    {
      title: "Frontend",
      icon: <FaReact className="text-cyan-400 text-xl" />,
      skills: [
        { name: "React.js", icon: <FaReact />, proficiency: 80, description: "Hooks, Context, Redux" },
        { name: "Vue.js", icon: <FaVuejs />, proficiency: 70, description: "Vue 3, Composition API" },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-green-400 text-xl" />,
      skills: [
        { name: "RESTAPI", icon: <SiFastapi />, proficiency: 82, description: "REST APIs" },
        { name: "Node.js", icon: <FaNodeJs />, proficiency: 55, description: "Express" },
      ]
    },
    {
      title: "Databases",
      icon: <MdStorage className="text-purple-400 text-xl" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 78, description: "NoSQL, Aggregation" },
        { name: "MySQL", icon: <SiMysql />, proficiency: 50, description: "Relational DB design" },
        { name: "DynamoDB", icon: <SiAmazondynamodb />, proficiency: 72, description: "AWS NoSQL" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-orange-400 text-xl" />,
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
      icon: <FaCheckCircle className="text-red-400 text-xl" />,
      skills: [
        { name: "Cypress", icon: <SiCypress />, proficiency: 65, description: "E2E testing" },
        { name: "JUnit", icon: <SiJunit5 />, proficiency: 68, description: "Java unit testing" },
        { name: "Jira", icon: <FaJira />, proficiency: 65, description: "Project management" },
        { name: "Jenkins", icon: <FaJenkins />, proficiency: 70, description: "Automation server" },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-20 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-blue-600 to-cyan-500"></div>
        </div>

        <p className="text-slate-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          Technologies I work with regularly. Hover over any skill to see my proficiency level.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="glass-card p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-800/50">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/50 border border-slate-700/50 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <FaTachometerAlt className="text-blue-400" />
            <h4 className="text-lg font-semibold text-white">Proficiency Scale</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 text-sm">Beginner</span>
              <span className="text-slate-300 text-sm">Expert</span>
            </div>
            <div className="h-2 w-full bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500 rounded-full"></div>
            <div className="flex justify-between text-xs text-slate-400">
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

const SkillItem: React.FC<{ skill: any }> = ({ skill }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Get color based on proficiency
  const getProficiencyColor = (percent: number) => {
    if (percent >= 85) return "from-cyan-500 to-green-500";
    if (percent >= 75) return "from-blue-500 to-cyan-500";
    if (percent >= 65) return "from-indigo-500 to-blue-500";
    return "from-blue-900 to-blue-700";
  };

  // Get proficiency label
  const getProficiencyLabel = (percent: number) => {
    if (percent >= 85) return "Expert";
    if (percent >= 75) return "Advanced";
    if (percent >= 65) return "Proficient";
    return "Familiar";
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 cursor-default group">
        <div className="flex items-center gap-3">
          <div className="text-blue-400 text-xl">
            {skill.icon}
          </div>
          <div>
            <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">
              {skill.name}
            </h4>
            {skill.description && (
              <p className="text-slate-400 text-sm">{skill.description}</p>
            )}
          </div>
        </div>
        
        {/* Percentage indicator */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-300">
            {isHovered ? `${skill.proficiency}%` : getProficiencyLabel(skill.proficiency)}
          </span>
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        </div>
      </div>

      {/* Animated percentage bar on hover */}
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 h-1 mt-1 overflow-hidden rounded-full">
          <div 
            className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} transition-all duration-1000 ease-out`}
            style={{ 
              width: `${skill.proficiency}%`,
              animation: 'expandWidth 0.8s ease-out'
            }}
          ></div>
          {/* Tooltip */}
          <div className="absolute -top-8 right-0 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg shadow-lg">
            {skill.proficiency}% proficient
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-slate-800 rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;