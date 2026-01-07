'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown, FaFileDownload } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const dynamicTitles = [
  "Full Stack Developer",
  "Cloud Enthusiast",
  "Software Engineer", 
  "Web Developer",
  "SaaS Developer",
  "Cloud Solutions Architect",  
  "Frontend Specialist"
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Dynamic text typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = dynamicTitles[loopNum % dynamicTitles.length];
      const updatedText = isDeleting 
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        // Pause at end of word
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const handleDownloadResume = () => {
    // TODO: Replace with actual resume URL
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Gaurav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Smooth scroll with offset function
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
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-24 overflow-hidden pt-20 md:pt-0">
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-700/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-400/3 rounded-full blur-2xl"></div>
        
        {/* Subtle circuit pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8">
        
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 md:mb-4 mt-8 md:mt-0"
        >
          <p className="text-2xl sm:text-2xl md:text-xl greeting-text font-light">
            Hey there! 👋 I'm
          </p>
        </motion.div>

        {/* Name with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 md:mb-4"
        >
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="name-gradient block">
              Gaurav
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-8"
        >
          <div className="min-h-[4rem] sm:min-h-[4rem] md:min-h-[4rem] flex items-center">
            <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl text-gray-300 font-medium">
              <span className="text-blue-400 font-semibold">
                {displayText}
              </span>
              <span className="ml-1 animate-pulse">|</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-blue-300/70 mt-2 md:mt-2">
            {dynamicTitles.length} specializations and counting...
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 md:mb-10"
        >
          <p className="text-base sm:text-lg md:text-lg text-slate-300 leading-relaxed">
            Software Engineer with 2+ years of experience building and scaling production-grade web platforms.
            Specializing in full-stack development, cloud-native systems, and owning features end-to-end from product discovery 
            to production in regulated domains.
          </p>
          <span className="block mt-3 md:mt-4 text-blue-300 font-medium text-base sm:text-base">
            Open for exciting opportunities to contribute my expertise.
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 w-full"
        >
          {/* View My Work Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => smoothScrollTo('projects')}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold text-base md:text-lg text-white shadow-lg hover:shadow-blue-500/30 transition-all flex-1 text-center min-w-[200px]"
          >
            View My Work
          </motion.button>
          
          {/* Contact Me Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => smoothScrollTo('contact')}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border-2 border-blue-500 text-blue-300 rounded-full font-semibold text-base md:text-lg hover:bg-blue-900/20 transition-colors flex-1 text-center min-w-[200px]"
          >
            Contact Me
          </motion.button>
          
          {/* Download Resume Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownloadResume}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold text-base md:text-lg hover:bg-gray-800/30 transition-colors flex items-center justify-center gap-2 flex-1 min-w-[200px] group relative overflow-hidden"
          >
            <FaFileDownload className="text-lg" />
            <span>Download Resume</span>
            {/* animation on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 md:mb-0"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-gray-400 text-base sm:text-base md:text-lg whitespace-nowrap">Connect with me:</p>
            <div className="flex gap-4 sm:gap-6 flex-wrap">
              {[
                { 
                  icon: <FaGithub />, 
                  color: "hover:text-white", 
                  label: "GitHub",
                  href: "https://github.com/GauravsinhSolanki"
                },
                { 
                  icon: <FaLinkedin />, 
                  color: "hover:text-blue-400", 
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/gauravsinh-solanki/"
                },
                { 
                  icon: <FaX />, 
                  color: "hover:text-sky-400", 
                  label: "X",
                  href: "https://x.com/Gauravsinh07"
                },
                { 
                  icon: <FaEnvelope />, 
                  color: "hover:text-red-400", 
                  label: "Email",
                  href: "mailto:solankigbs11@gmail.com"
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-2xl sm:text-2xl text-gray-500 ${social.color} transition-colors relative group p-2 rounded-lg hover:bg-slate-800/30`}
                  title={social.label}
                  aria-label={social.label}
                >
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-slate-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 border border-slate-700">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-blue-300 hover:text-blue-400 transition-colors cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-900/10"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('about');
          }}
        >
          <span className="text-sm sm:text-sm mb-1">Discover More</span>
          <FaArrowDown className="text-lg sm:text-lg" />
        </motion.a>
      </motion.div>
      <div className="h-16 sm:hidden"></div>
    </section>
  );
}