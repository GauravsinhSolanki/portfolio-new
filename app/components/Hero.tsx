'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFileDownload } from 'react-icons/fa';

const dynamicTitles = [
  "Full Stack Developer",
  "Cloud Enthusiast",
  "Frontend Developer", 
  "Cloud Solution Architect",
  "SaaS Developer"
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % dynamicTitles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

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
    <section
      id="home"
      className="relative min-h-fit flex flex-col justify-center px-4 md:px-8 overflow-hidden bg-[#222831]"
      style={{ paddingTop: '40px' }}
    >
      {/* Navbar Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#76ABAE]/30 to-transparent z-20"></div>
      
      {/* Background */}
      <div className="absolute inset-0">
        {/* Subtle diagonal pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, #76ABAE 1px, transparent 1px),
                             linear-gradient(-45deg, #76ABAE 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#76ABAE]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#76ABAE]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#222831] via-[#222831]/95 to-transparent"></div>
      </div>

      {/* Main Content Container - Full Width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-18 md:pb-16">
        
        {/* Greeting */}
        <div className="mb-2 md:mb-3">
          <p className="text-lg sm:text-xl md:text-xl text-[#EEEEEE]/70 font-light">
            Hey there! 👋 I'm
          </p>
        </div>

        {/* Name */}
        <div className="mb-3 md:mb-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="text-[#EEEEEE] block">
              Gaurav
            </span>
          </h1>
        </div>

        {/* Dynamic Title with Animation */}
        <div className="mb-4 md:mb-5">
          <div className="min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] flex items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#EEEEEE]/80 font-medium">
              <span 
                className={`text-[#76ABAE] font-semibold border-b-2 border-[#76ABAE]/50 pb-1 transition-opacity duration-500 ${
                  isTyping ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {dynamicTitles[currentTitleIndex]}
              </span>
            </h2>
          </div>
        </div>

        <div className="mb-6 md:mb-8 max-w-3xl">
        <div className="mb-8 md:mb-10 max-w-3xl">
          {/* Main Description */}
          <div className="mb-5">
            <p className="text-lg sm:text-xl text-[#EEEEEE] leading-relaxed">
              <span className="text-[#76ABAE] font-semibold">2+ years</span> building production systems that real businesses rely on. 
              Full-stack engineer who ships features from idea to deployment.
            </p>
          </div>

          {/* Sophisticated Status Indicator - Increased font sizes */}
          <div className="flex items-start gap-4">
            {/* Animated status dot - Slightly larger */}
            <div className="flex-shrink-0 mt-1">
              <div className="relative">
                <div className="w-4 h-4 bg-[#76ABAE] rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-4 h-4 bg-[#76ABAE] rounded-full relative"></div>
              </div>
            </div>
            
            {/* Status text - Larger font sizes */}
            <div>
              <p className="text-xl sm:text-xl text-[#EEEEEE] font-semibold mb-1">
                <span className="text-[#76ABAE]">Open to new opportunities</span>
              </p>
              <p className="text-base sm:text-lg text-[#EEEEEE]/70">
                Currently accepting offers for full-time and contract roles
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* CTA Buttons - Clean and Sophisticated */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mb-20 sm:mb-24 md:mb-20 w-full max-w-2xl">
          {/* View My Work Button */}
          <button
            onClick={() => smoothScrollTo('projects')}
            className="w-full sm:flex-1 sm:min-w-[170px] sm:max-w-[220px] px-5 py-3 md:px-6 md:py-3.5 bg-gradient-to-r from-[#76ABAE] to-[#5a8a8d] text-[#EEEEEE] rounded-xl font-semibold hover:from-[#5a8a8d] hover:to-[#76ABAE] transition-all duration-300 shadow-lg hover:shadow-[#76ABAE]/30 hover:-translate-y-0.5 text-center text-sm sm:text-base group"
          >
            <span className="flex items-center justify-center gap-2">
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </button>
          
          {/* Contact Me Button */}
          <button
            onClick={() => smoothScrollTo('contact')}
            className="w-full sm:flex-1 sm:min-w-[170px] sm:max-w-[220px] px-5 py-3 md:px-6 md:py-3.5 bg-transparent text-[#76ABAE] border-2 border-[#76ABAE] rounded-xl font-semibold hover:bg-[#76ABAE]/10 transition-all duration-300 text-center text-sm sm:text-base group"
          >
            <span className="flex items-center justify-center gap-2">
              Contact Me
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </button>
          
          {/* Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="w-full sm:flex-1 sm:min-w-[170px] sm:max-w-[220px] px-5 py-3 md:px-6 md:py-3.5 bg-[#31363F] text-[#EEEEEE] border border-[#76ABAE]/30 rounded-xl font-semibold hover:bg-[#31363F]/80 hover:border-[#76ABAE]/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base group"
          >
            <FaFileDownload className="text-base group-hover:scale-110 transition-transform duration-200" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Clean and Visible */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-20">
        <button
          onClick={() => smoothScrollTo('about')}
          className="flex flex-col items-center transition-all duration-300 cursor-pointer group"
        >
          <span className="text-base sm:text-lg font-bold mb-2 tracking-wide text-[#EEEEEE]/70 group-hover:text-[#76ABAE] transition-colors duration-300">
            Discover More
          </span>
          <div className="animate-bounce group-hover:animate-none transition-all duration-300">
            <div className="p-1.5 sm:p-2 rounded-full bg-[#31363F] border border-[#76ABAE]/30 group-hover:bg-[#76ABAE] group-hover:border-[#76ABAE] transition-all duration-300">
              <FaArrowDown className="text-lg sm:text-xl text-[#EEEEEE]" />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}