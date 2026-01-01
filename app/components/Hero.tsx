'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown, FaFileDownload } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const dynamicTitles = [
  "Full Stack Developer",
  "Clound Enthusiast",
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
    // Replace with your actual resume URL
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Gaurav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Blue Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [100, -100, 100],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-lg md:text-xl greeting-text font-light">
            Hey there! 👋 I'm
          </p>
        </motion.div>

        {/* Name with Blue Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-2"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="name-gradient">
              Gaurav
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium h-12 md:h-14 lg:h-16">
            <span className="text-blue-400 font-semibold">
              {displayText}
            </span>
            <span className="ml-1 animate-pulse">|</span>
          </h2>
          <p className="text-sm text-blue-300/70 mt-2 specialization-gradient">
            {dynamicTitles.length} specializations and counting...
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
  Software Engineer with 2+ years of experience building and scaling production-grade web platforms.
  Specializing in full-stack development, cloud-native systems, and owning features end-to-end from product discovery 
  to production in regulated domains.
</p>
<span className="block mt-4 text-blue-300 font-medium">
  Open for exciting opportunities to contribute my expertise.
</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                window.scrollTo({
                  top: projectsSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold text-lg text-white shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="px-8 py-4 border-2 border-blue-500 text-blue-300 rounded-full font-semibold text-lg hover:bg-blue-900/20 transition-colors"
          >
            Contact Me
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold text-lg hover:bg-gray-800/30 transition-colors flex items-center gap-2"
          >
            <FaFileDownload />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="flex items-center gap-8"
>
  <p className="text-gray-400 text-lg">Connect with me:</p>
  <div className="flex gap-6">
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
        whileHover={{ scale: 1.2, y: -3 }}
        className={`text-2xl text-gray-500 ${social.color} transition-colors relative group`}
        title={social.label}
        aria-label={social.label}
      >
        {social.icon}
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {social.label}
        </span>
      </motion.a>
    ))}
  </div>
</motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-blue-300 hover:text-blue-400 transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
        >
          <span className="text-sm mb-2 section">Discover More</span>
          <FaArrowDown className="text-xl section" />
        </motion.a>
      </motion.div>
    </section>
  );
}