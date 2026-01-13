'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaEnvelope, FaGithub, FaLinkedin, FaBars, FaComments } from 'react-icons/fa';
import Image from "next/image";

const navItems = [
  { name: 'Home', href: '#home', icon: <FaHome className="text-lg" /> },
  { name: 'About', href: '#about', icon: <FaUser className="text-lg" /> },
  { name: 'Skills', href: '#skills', icon: <FaCode className="text-lg" /> },
  { name: 'Experience', href: '#experience', icon: <FaBriefcase className="text-lg" /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram className="text-lg" /> },
  { name: 'Education', href: '#education', icon: <FaGraduationCap className="text-lg" /> },
  { name: 'Testimonials', href: '#testimonials', icon: <FaComments className="text-lg" /> },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope className="text-lg" /> },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-primary/95 backdrop-blur-sm py-3 shadow-md border-b border-border' 
            : 'bg-dark-primary py-4'
        }`}
      >
        {/* Navbar Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo/Name */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Gaurav Logo"
                  width={40}
                  height={40}
                  className="rounded-full border border-border"
                />
              </div>  
              <div>
                <button 
                  onClick={() => handleClick('#home')}
                  className="text-xl md:text-2xl font-bold text-text hover:text-primary transition-colors text-left"
                >
                  Gaurav
                </button>
                <p className="text-xs text-text-muted mt-0.5">Full Stack Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeLink === item.href.replace('#', '');
                
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                  >
                    <button
                      onClick={() => handleClick(item.href)}
                      className={`flex flex-col items-center px-4 py-2 transition-colors duration-200 relative z-10 ${
                        isActive
                          ? 'text-primary'
                          : 'text-text-light hover:text-text'
                      }`}
                    >
                      <span className="mb-1">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </button>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/GauravsinhSolanki"
                target="_blank"
                className="hidden md:block text-text-muted hover:text-text p-2 rounded-full hover:bg-background-light transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/gauravsinh-solanki/"
                target="_blank"
                className="hidden md:block text-text-muted hover:text-primary p-2 rounded-full hover:bg-background-light transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              
              <button
                onClick={() => handleClick('#contact')}
                className="px-5 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                Hire Me
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-text-light hover:text-text text-2xl p-2"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden bg-background-light border-t border-border mt-2"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeLink === item.href.replace('#', '');
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleClick(item.href)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-text-light hover:text-text hover:bg-background-lighter'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-border">
                <a 
                  href="https://github.com/GauravsinhSolanki" 
                  target="_blank" 
                  className="text-text-muted hover:text-text p-2"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gauravsinh-solanki/" 
                  target="_blank" 
                  className="text-text-muted hover:text-primary p-2"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-16 md:h-20"></div>
    </>
  );
}