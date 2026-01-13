'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFileDownload } from 'react-icons/fa';

const dynamicTitles = [
  "Full Stack Developer",
  "Frontend Developer", 
  "SaaS Developer",
  "Cloud Enthusiast",
  "Cloud Solution Architect"
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
        <div className="mb-6 md:mb-8">
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
          <p className="text-sm sm:text-base text-[#EEEEEE]/60 mt-2 font-medium">
            Building scalable, production-ready software systems
          </p>
        </div>

        {/* Professional Summary - Compact Card */}
        <div className="mb-6 md:mb-8">
          <div className="w-full p-4 sm:p-5 md:p-6 bg-gradient-to-br from-[#31363F]/60 via-[#31363F]/40 to-[#31363F]/20 border border-[#76ABAE]/20 rounded-xl shadow-2xl backdrop-blur-sm relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#76ABAE]/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#76ABAE]/5 rounded-tr-full"></div>
            
            <div className="relative z-10">
              {/* Main Content - Compact */}
              <div className="space-y-3">
                <p className="text-base sm:text-lg md:text-xl text-[#EEEEEE] leading-snug font-medium">
                  <span className="text-[#76ABAE] font-bold">2+ years</span> building production systems that real businesses rely on. 
                  Full-stack engineer who ships features from idea to deployment.
                </p>

                {/* Status Banner - Compact */}
                <div className="flex items-center gap-2.5 p-2.5 sm:p-3 bg-[#76ABAE]/15 border border-[#76ABAE]/40 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-2.5 h-2.5 bg-[#76ABAE] rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-[#EEEEEE] font-semibold text-sm sm:text-base">
                    Available for new opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Compact */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mb-20 sm:mb-24 md:mb-20 w-full">
          {/* View My Work Button */}
          <button
            onClick={() => smoothScrollTo('projects')}
            className="w-full sm:flex-1 sm:min-w-[170px] sm:max-w-[220px] px-5 py-3 md:px-6 md:py-3.5 bg-gradient-to-r from-[#76ABAE] to-[#5a8a8d] text-[#EEEEEE] rounded-xl font-semibold hover:from-[#5a8a8d] hover:to-[#76ABAE] transition-all duration-300 shadow-lg hover:shadow-[#76ABAE]/30 hover:-translate-y-0.5 text-center text-sm sm:text-base"
          >
            View My Work
          </button>
          
          {/* Contact Me Button */}
          <button
            onClick={() => smoothScrollTo('contact')}
            className="w-full sm:flex-1 sm:min-w-[170px] sm:max-w-[220px] px-5 py-3 md:px-6 md:py-3.5 bg-transparent text-[#76ABAE] border-2 border-[#76ABAE] rounded-xl font-semibold hover:bg-[#76ABAE]/10 transition-all duration-300 text-center text-sm sm:text-base"
          >
            Contact Me
          </button>
          
          {/* Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="w-full sm:flex-1 sm:min-w-[170px] sm:max-w-[220px] px-5 py-3 md:px-6 md:py-3.5 bg-[#31363F] text-[#EEEEEE] border border-[#76ABAE]/30 rounded-xl font-semibold hover:bg-[#31363F]/80 hover:border-[#76ABAE]/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <FaFileDownload className="text-base" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Highly Visible */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-20 opacity-70">
        <button
          onClick={() => smoothScrollTo('about')}
          className="flex flex-col items-center transition-all duration-300 cursor-pointer group"
        >
          <span className="text-base sm:text-lg font-bold mb-2 tracking-wide text-[#76ABAE] drop-shadow-[0_2px_8px_rgba(118,171,174,0.5)]">
            Discover More
          </span>
          <div className="animate-bounce bg-[#76ABAE] p-0 .5 sm:p-0.5 rounded-full group-hover:bg-[#8dbdc0] transition-colors shadow-[0_4px_20px_rgba(118,171,174,0.4)]">
            <FaArrowDown className="text-xl sm:text-2xl text-[#222831]" />
          </div>
        </button>
      </div>
    </section>
  );
}