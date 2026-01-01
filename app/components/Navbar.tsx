'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaEnvelope, FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home', icon: <FaHome /> },
  { name: 'About', href: '#about', icon: <FaUser /> },
  { name: 'Skills', href: '#skills', icon: <FaCode /> },
  { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
  { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const scrollPosition = window.scrollY + 150;
      
      for (const item of navItems) {
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveLink(item.href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-xl border-b border-blue-800/30' 
            : 'bg-gray-900/90 py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo/Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">G</span>
              </div>
              <div>
                <button 
                  onClick={() => handleClick('#home')}
                  className="text-xl md:text-2xl font-bold name-gradient hover:opacity-90 transition-opacity text-left"
                >
                  Gaurav
                </button>
                <p className="text-xs specialization-gradient mt-0.5">Full Stack Developer</p>
              </div>
            </motion.div>

            {/* Desktop Navigation with Traveling Dot */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeLink === item.href.replace('#', '');
                const isHovered = hoveredIndex === index;
                
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <button
                      onClick={() => handleClick(item.href)}
                      className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-300 relative z-10 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="text-lg mb-1">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </button>
                    
                    {/* Underline Container */}
                    <div className="absolute -bottom-1 left-0 right-0 h-2 overflow-visible">
                      {/* Underline Line - Full width when hovered/active */}
                      <div 
                        className={`absolute top-1 left-0 right-0 h-0.5 transition-all duration-300 ${
                          isHovered || isActive ? 'bg-blue-500/30 w-full' : 'bg-transparent w-0'
                        }`}
                      />
                      
                      
                      
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/GauravsinhSolanki"
                target="_blank"
                className="hidden md:block text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/gauravsinh-solanki/"
                target="_blank"
                className="hidden md:block text-gray-400 hover:text-blue-400 p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick('#contact')}
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold text-white hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                Hire Me
              </motion.button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white text-2xl p-2"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-blue-800/30 mt-2"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeLink === item.href.replace('#', '');
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleClick(item.href)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/30 to-blue-800/30 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-800">
                <a href="https://github.com/GauravsinhSolanki" target="_blank" className="text-gray-400 hover:text-white">
                  <FaGithub className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/gauravsinh-solanki/" target="_blank" className="text-gray-400 hover:text-blue-400">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <div className="h-16 md:h-20"></div>
    </>
  );
}