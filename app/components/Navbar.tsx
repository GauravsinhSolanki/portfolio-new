'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaEnvelope, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home', icon: <FaHome size={16} /> },
  { name: 'About', href: '#about', icon: <FaUser size={16} /> },
  { name: 'Skills', href: '#skills', icon: <FaCode size={16} /> },
  { name: 'Experience', href: '#experience', icon: <FaBriefcase size={16} /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram size={16} /> },
  { name: 'Education', href: '#education', icon: <FaGraduationCap size={16} /> },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope size={16} /> },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const scrollPosition = window.scrollY + 100;
      
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#222831]/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-[#222831] py-3'
      } border-b border-[#3a404a]`}>
        
        <div className="container-responsive">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button 
              onClick={() => handleClick('#home')}
              className="group text-left transition-all hover:scale-105"
            >
              <span className="text-base sm:text-lg md:text-xl font-bold text-[#EEEEEE] group-hover:text-[#76ABAE] transition-colors">
                Gaurav
              </span>
              <p className="text-[9px] sm:text-[10px] text-[#a0a8b8] hidden sm:block">Full Stack Developer</p>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className={`nav-link px-3 py-1.5 rounded-lg transition-all text-sm ${
                    activeLink === item.href.substring(1)
                      ? 'active text-[#76ABAE] bg-[#76ABAE]/5'
                      : 'text-[#a0a8b8] hover:text-[#EEEEEE] hover:bg-[#31363F]'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* Right Section - Redesigned Icons & Button */}
            <div className="flex items-center gap-3">
              {/* GitHub Icon - Rich hover effect */}
              <a
                href="https://github.com/GauravsinhSolanki"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-[#31363F] border border-[#4a505a] text-[#a0a8b8] hover:border-[#76ABAE] hover:text-[#76ABAE] hover:bg-[#76ABAE]/10 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <FaGithub size={16} className="group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] bg-[#31363F] text-[#a0a8b8] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>
              
              {/* LinkedIn Icon - Rich hover effect */}
              <a
                href="https://www.linkedin.com/in/gauravsinh-solanki/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-[#31363F] border border-[#4a505a] text-[#a0a8b8] hover:border-[#76ABAE] hover:text-[#76ABAE] hover:bg-[#76ABAE]/10 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} className="group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] bg-[#31363F] text-[#a0a8b8] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
              
              {/* Hire Me Button - Matching Hero button style */}
              <button
                onClick={() => handleClick('#contact')}
                className="group relative px-4 py-1.5 md:px-5 md:py-2 bg-[#76ABAE] text-[#222831] font-semibold rounded-lg transition-all duration-300 hover:bg-[#8abfc2] hover:shadow-lg hover:shadow-[#76ABAE]/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-xs md:text-sm"
              >
                <span>Hire Me</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-[#EEEEEE] p-2 hover:bg-[#31363F] rounded-lg transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Updated styling */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#31363F] border-t border-[#3a404a] mt-2 shadow-lg">
            <div className="container-responsive py-3">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm ${
                      activeLink === item.href.substring(1)
                        ? 'bg-[#76ABAE]/10 text-[#76ABAE] border-l-2 border-[#76ABAE]'
                        : 'text-[#a0a8b8] hover:bg-[#222831] hover:text-[#EEEEEE]'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                    {activeLink === item.href.substring(1) && (
                      <div className="ml-auto w-1.5 h-1.5 bg-[#76ABAE] rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-[#3a404a]">
                <a 
                  href="https://github.com/GauravsinhSolanki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#222831] border border-[#4a505a] text-[#a0a8b8] hover:border-[#76ABAE] hover:text-[#76ABAE] hover:bg-[#76ABAE]/10 transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gauravsinh-solanki/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#222831] border border-[#4a505a] text-[#a0a8b8] hover:border-[#76ABAE] hover:text-[#76ABAE] hover:bg-[#76ABAE]/10 transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
                <button
                  onClick={() => handleClick('#contact')}
                  className="px-5 py-2 bg-[#76ABAE] text-[#222831] font-semibold rounded-lg hover:bg-[#8abfc2] transition-all duration-300 text-sm"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Reduced spacer for navbar */}
      <div className="h-14 md:h-16"></div>
    </>
  );
}