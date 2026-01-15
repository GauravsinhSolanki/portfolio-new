'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  imageColor: string; // For placeholder avatar
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
      imageColor: "bg-primary/20"
    },
    {
      id: 2,
      name: "Frosina Kuzmanovska",
      role: "Product Manager",
      company: "Brokerlift Inc.",
      content: "Working with Gaurav on our insurance SaaS platform was a game-changer. He doesn't just write code; he understands business requirements and delivers solutions that drive real value. His full-stack expertise is impressive.",
      rating: 5,
      imageColor: "bg-primary/20"
    },
    {
      id: 3,
      name: "Thomas Accardo",
      role: "CEO",
      company: "Brokerlift Inc.",
      content: "Gaurav joined us as a co-op and quickly became our go-to developer for complex features. His ownership mentality and production-focused approach earned him a full-time position within months.",
      rating: 5,
      imageColor: "bg-primary/20"
    },
    {
      id: 4,
      name: "Harsh Shah",
      role: "Software Engineer",
      company: "Brokerlift Inc.",
      content: "I've collaborated with Gaurav on multiple production systems. His attention to testing and system design principles ensures the code he delivers is reliable, maintainable, and scalable.",
      rating: 5,
      imageColor: "bg-primary/20"
    },
    {
      id: 5,
      name: "Nilesh Desai",
      role: "CEO",
      company: "Desai Software",
      content: "Gaurav's cloud infrastructure work saved us significant costs while improving performance. His AWS and DevOps expertise is at a senior level, and he communicates complex technical concepts clearly.",
      rating: 5,
      imageColor: "bg-primary/20"
    },
   {
  id: 5,
  name: "Brent Stencill",
  role: "CTO",
  company: "Brokerlift Inc.",
  content: "A quick learner who was always available during critical moments. His reliability and dedication to supporting the team made a significant difference in our projects.",
  rating: 5,
  imageColor: "bg-primary/20"
}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Calculate visible testimonials for desktop
  const visibleTestimonials = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      // Show 3 cards on desktop
      const cards = [];
      for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + testimonials.length) % testimonials.length;
        cards.push(testimonials[index]);
      }
      return cards;
    } else {
      // Show current card only on mobile
      return [testimonials[currentIndex]];
    }
  };

  const visibleCards = visibleTestimonials();

  return (
    <section id="testimonials" className="relative py-20 px-4 md:px-8 bg-dark-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Professional Endorsements</h2>
          <p className="text-text-light text-lg max-w-3xl mx-auto">
            What colleagues and leaders say about working with me
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Cards Grid */}
          <div className="flex justify-center items-center gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {visibleCards.map((testimonial, index) => {
                const isCenter = index === 1 || (typeof window !== 'undefined' && window.innerWidth < 768);
                
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ 
                      opacity: isCenter ? 1 : 0.7,
                      y: 0,
                      scale: isCenter ? 1 : 0.9
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-full md:w-[380px] ${
                      isCenter ? 'z-10' : 'hidden md:block'
                    }`}
                  >
                    <div className={`bg-background-light rounded-2xl border border-border p-6 md:p-8 h-full transition-all duration-300 ${
                      isCenter ? 'shadow-lg' : 'shadow-md'
                    }`}>
                      {/* Quote marks */}
                      <div className="mb-4">
                        <FaQuoteLeft className="text-primary/30 text-2xl" />
                      </div>

                      {/* Content */}
                      <p className="text-text-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        {testimonial.content}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`text-sm md:text-base ${i < testimonial.rating ? 'text-yellow-500' : 'text-text-muted'}`}
                          />
                        ))}
                      </div>

                      {/* Person Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <div className={`w-12 h-12 rounded-full ${testimonial.imageColor} flex items-center justify-center`}>
                          <span className="text-primary font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-text">{testimonial.name}</h4>
                          <div className="text-text-light text-sm">
                            <p>{testimonial.role}</p>
                            <p className="text-text-muted">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-background-light text-primary border border-border rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-background-light text-primary border border-border rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors z-20"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-border hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play status */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 text-text-muted text-sm">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-border'}`} />
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="ml-2 text-primary hover:text-primary-light text-sm"
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;