'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFileDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const dynamicTitles = [
  "Full Stack Developer",
  "Cloud Enthusiast",
  "Frontend Developer", 
  "Cloud Solution Architect",
  "SaaS Developer"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % dynamicTitles.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Gaurav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center bg-[#222831] relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 md:w-64 md:h-64 bg-[#76ABAE]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 md:w-80 md:h-80 bg-[#76ABAE]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-responsive relative z-10 w-full">
        
        {/* Greeting */}
        <div className="mb-3">
          <p className="text-base md:text-lg text-[#76ABAE] font-medium tracking-wide">
            Hello, I'm
          </p>
        </div>

        {/* Name */}
        <div className="mb-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#EEEEEE] mb-3">
            Gaurav
          </h1>
          <div className="h-0.5 w-16 md:w-20 bg-[#76ABAE] rounded-full"></div>
        </div>

        {/* Dynamic Title - Fixed font size to match "I'm a" */}
        <div className="mb-6">
          <div className="min-h-[3rem] md:min-h-[4rem]">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#a0a8b8]">
              I'm a{' '}
              <span 
                className={`text-[#76ABAE] font-semibold transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ fontSize: 'inherit' }}
              >
                {dynamicTitles[currentIndex]}
              </span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 max-w-2xl">
          <p className="text-sm md:text-base text-[#a0a8b8] leading-relaxed">
            Building production-grade web applications with modern technologies. 
            <span className="text-[#76ABAE] font-semibold"> 2+ years</span> of experience delivering 
            scalable solutions from concept to deployment.
          </p>
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2 mt-4">
            <div className="relative">
              <div className="w-2 h-2 bg-[#76ABAE] rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs md:text-sm text-[#76ABAE] font-medium">
              Open for opportunities
            </p>
          </div>
        </div>

        {/* CTA Buttons - Redesigned for rich, simple look */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Primary Button - View My Work */}
          <button
            onClick={() => smoothScrollTo('projects')}
            className="group relative px-6 py-3 md:px-8 md:py-3.5 bg-[#76ABAE] text-[#222831] font-semibold rounded-lg transition-all duration-300 hover:bg-[#8abfc2] hover:shadow-lg hover:shadow-[#76ABAE]/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <span>View My Work</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          {/* Secondary Button - Contact Me */}
          <button
            onClick={() => smoothScrollTo('contact')}
            className="group px-6 py-3 md:px-8 md:py-3.5 bg-transparent border-2 border-[#76ABAE] text-[#76ABAE] font-semibold rounded-lg transition-all duration-300 hover:bg-[#76ABAE]/10 hover:border-[#8abfc2] hover:text-[#8abfc2] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <span>Contact Me</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          {/* Outline Button - Resume */}
          <button
            onClick={handleDownloadResume}
            className="group px-6 py-3 md:px-8 md:py-3.5 bg-[#31363F] border border-[#4a505a] text-[#EEEEEE] font-semibold rounded-lg transition-all duration-300 hover:bg-[#3a404a] hover:border-[#76ABAE] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <FaFileDownload className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Social Links - Refined */}
        <div className="flex items-center gap-4">
          <span className="text-xs md:text-sm text-[#a0a8b8] tracking-wide">CONNECT WITH ME</span>
          <div className="h-px w-8 bg-[#4a505a]"></div>
          <div className="flex gap-4">
            <a
              href="https://github.com/GauravsinhSolanki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a8b8] hover:text-[#76ABAE] transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravsinh-solanki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a8b8] hover:text-[#76ABAE] transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/Gauravsinh07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a8b8] hover:text-[#76ABAE] transition-all hover:scale-110"
              aria-label="X"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="mailto:solankigbs11@gmail.com"
              className="text-[#a0a8b8] hover:text-[#76ABAE] transition-all hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Clean & Minimal */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => smoothScrollTo('about')}
          className="flex flex-col items-center gap-1 group cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-[9px] md:text-[10px] text-[#a0a8b8] tracking-wider group-hover:text-[#76ABAE] transition-colors">
            EXPLORE
          </span>
          <div className="w-5 h-5 rounded-full border border-[#4a505a] flex items-center justify-center group-hover:border-[#76ABAE] group-hover:bg-[#76ABAE]/10 transition-all">
            <FaArrowDown className="text-[8px] text-[#a0a8b8] group-hover:text-[#76ABAE] group-hover:translate-y-0.5 transition-all" />
          </div>
        </button>
      </div>
    </section>
  );
}