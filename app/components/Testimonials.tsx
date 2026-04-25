'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initial: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jasmeet Singh",
      role: "Software Engineering",
      company: "Brokerlift Inc.",
      content: "Gaurav's ability to architect scalable systems is exceptional. He led the migration of our core platform to microservices, improving performance by 40% while maintaining 99.9% uptime throughout the transition.",
      rating: 5,
      initial: "J"
    },
    {
      id: 2,
      name: "Frosina Kuzmanovska",
      role: "Product Manager",
      company: "Brokerlift Inc.",
      content: "Working with Gaurav on our insurance SaaS platform was a game-changer. He doesn't just write code; he understands business requirements and delivers solutions that drive real value.",
      rating: 5,
      initial: "F"
    },
    {
      id: 3,
      name: "Thomas Accardo",
      role: "CEO",
      company: "Brokerlift Inc.",
      content: "Gaurav joined us as a co-op and quickly became our go-to developer for complex features. His ownership mentality earned him a full-time position within months.",
      rating: 5,
      initial: "T"
    },
    {
      id: 4,
      name: "Harsh Shah",
      role: "Software Engineer",
      company: "Brokerlift Inc.",
      content: "His attention to testing and system design ensures the code he delivers is reliable, maintainable, and scalable. A pleasure to work with.",
      rating: 5,
      initial: "H"
    },
    {
      id: 5,
      name: "Nilesh Desai",
      role: "CEO",
      company: "Desai Software",
      content: "Gaurav's cloud infrastructure work saved us significant costs while improving performance. His AWS expertise is at a senior level.",
      rating: 5,
      initial: "N"
    },
    {
      id: 6,
      name: "Brent Stencill",
      role: "CTO",
      company: "Brokerlift Inc.",
      content: "A quick learner who was always available during critical moments. His reliability made a significant difference in our projects.",
      rating: 5,
      initial: "B"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#222831]">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Section header - Matching other sections */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-px w-12 sm:w-16 bg-[#76ABAE]/30"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EEEEEE] tracking-tight">
            What People Say
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-[#76ABAE]/30 to-transparent"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Main Card */}
          <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-2xl"
              >
                <div className="rounded-2xl border border-[#4a505a] bg-[#31363F]/30 backdrop-blur-sm p-6 sm:p-8">
                  
                  {/* Quote Icon */}
                  <div className="mb-5">
                    <FaQuoteLeft className="text-[#76ABAE]/40 text-2xl sm:text-3xl" />
                  </div>

                  {/* Content */}
                  <p className="text-[#a0a8b8] leading-relaxed mb-6 text-sm sm:text-base">
                    {testimonials[currentIndex].content}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-sm ${i < testimonials[currentIndex].rating ? 'text-[#76ABAE]' : 'text-[#4a505a]'}`}
                      />
                    ))}
                  </div>

                  {/* Person Info */}
                  <div className="flex items-center gap-4 pt-5 border-t border-[#4a505a]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#76ABAE]/20 flex items-center justify-center border border-[#76ABAE]/30">
                      <span className="text-[#76ABAE] font-bold text-base sm:text-lg">
                        {testimonials[currentIndex].initial}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#EEEEEE] text-sm sm:text-base">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-[#a0a8b8] text-xs sm:text-sm">
                        {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Cleaner design */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-[#222831] border border-[#4a505a] text-[#76ABAE] rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#76ABAE]/10 hover:border-[#76ABAE] transition-all duration-300 z-20"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-[#222831] border border-[#4a505a] text-[#76ABAE] rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#76ABAE]/10 hover:border-[#76ABAE] transition-all duration-300 z-20"
            aria-label="Next"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>
        </div>

        {/* Dots Indicator - Clean */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#76ABAE] w-6' 
                  : 'bg-[#4a505a] w-1.5 hover:bg-[#76ABAE]/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle - Subtle */}
        <div className="text-center mt-5">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inline-flex items-center gap-2 text-[#a0a8b8] text-xs hover:text-[#76ABAE] transition-colors"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-[#76ABAE] animate-pulse' : 'bg-[#4a505a]'}`} />
            <span>{isAutoPlaying ? 'Auto-rotating' : 'Paused'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;