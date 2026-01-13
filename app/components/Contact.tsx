"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope,
  FaMapPin,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaPaperPlane,
  FaUser,
  FaMessage
} from 'react-icons/fa6';
import { FaUser as FaUserAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Using Formspree for contact form submission
      const response = await fetch('https://formspree.io/f/xzdbnkvz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-[#76ABAE]" />,
      title: "Email",
      value: "solankigbs11@gmail.com",
      link: "mailto:solankigbs11@gmail.com"
    },
    {
      icon: <FaMapPin className="text-[#76ABAE]" />,
      title: "Location",
      value: "Toronto, On, Canada",
      link: "https://maps.google.com/?q=Toronto+Ontario+Canada"
    },
    {
      icon: <FaLinkedin className="text-[#76ABAE]" />,
      title: "LinkedIn",
      value: "gauravsinh-solanki",
      link: "https://www.linkedin.com/in/gauravsinh-solanki/"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/GauravsinhSolanki",
      color: "hover:text-[#EEEEEE] hover:bg-[#31363F]"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gauravsinh-solanki/",
      color: "hover:text-[#76ABAE] hover:bg-[#76ABAE]/20"
    },
    {
      icon: <FaXTwitter />,
      label: "X (Twitter)",
      link: "https://x.com/Gauravsinh07",
      color: "hover:text-[#76ABAE] hover:bg-[#76ABAE]/20"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      link: "mailto:solankigbs11@gmail.com",
      color: "hover:text-[#76ABAE] hover:bg-[#76ABAE]/20"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#222831]">
      
      {/* Hero */}
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
          className="absolute -top-40 -right-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#76ABAE] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
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
          className="absolute -bottom-40 -left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#76ABAE] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
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
          className="absolute top-1/2 left-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#76ABAE] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section header with Hero style */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#31363F]/50 border border-[#76ABAE]/30 backdrop-blur-sm">
              <FaEnvelope className="text-[#76ABAE] text-sm sm:text-base" />
              <span className="text-[#76ABAE] font-medium text-sm sm:text-base">Let's Connect</span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2"
          >
            <span className="bg-gradient-to-r from-[#76ABAE] via-[#8dbdc0] to-[#76ABAE] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#EEEEEE]/70 text-base sm:text-lg max-w-2xl mx-auto px-4"
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8 rounded-2xl h-full bg-[#31363F]/40 backdrop-blur-sm border border-[#76ABAE]/20">
              <h3 className="text-xl sm:text-2xl font-bold text-[#EEEEEE] mb-5 sm:mb-6 flex items-center gap-2">
                <FaEnvelope className="text-[#76ABAE] text-lg sm:text-xl" />
                <span>Contact Information</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#222831]/50 border border-[#76ABAE]/10 hover:border-[#76ABAE]/30 hover:bg-[#76ABAE]/10 transition-all duration-300 group"
                  >
                    <div className="p-2.5 sm:p-3 rounded-lg bg-[#222831]/50 border border-[#76ABAE]/20 group-hover:border-[#76ABAE]/30 transition-all duration-300 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#EEEEEE] mb-1 text-sm sm:text-base">{info.title}</h4>
                      <p className="text-[#EEEEEE]/70 group-hover:text-[#76ABAE] transition-colors text-sm sm:text-base break-words">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#EEEEEE] mb-3 sm:mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 sm:p-3 rounded-xl bg-[#222831]/50 border border-[#76ABAE]/20 text-xl sm:text-2xl text-[#EEEEEE]/60 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl bg-[#76ABAE]/10 border border-[#76ABAE]/20">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#76ABAE] animate-pulse flex-shrink-0 mt-1 sm:mt-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#EEEEEE] text-sm sm:text-base">Currently Available</h4>
                    <p className="text-[#EEEEEE]/70 text-xs sm:text-sm">Open for new opportunities and collaborations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#31363F]/40 backdrop-blur-sm border border-[#76ABAE]/20">
              <h3 className="text-xl sm:text-2xl font-bold text-[#EEEEEE] mb-5 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
                <FaPaperPlane className="text-[#76ABAE] text-lg sm:text-xl" />
                <span>Send a Message</span>
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#EEEEEE]/80 mb-2 flex items-center gap-2 text-sm sm:text-base">
                      <FaUserAlt className="text-[#76ABAE] text-sm" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#222831]/50 border border-[#76ABAE]/20 text-[#EEEEEE] placeholder-[#EEEEEE]/40 focus:outline-none focus:border-[#76ABAE]/50 focus:ring-1 focus:ring-[#76ABAE]/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#EEEEEE]/80 mb-2 flex items-center gap-2 text-sm sm:text-base">
                      <FaEnvelope className="text-[#76ABAE] text-sm" />
                      <span>Your Email</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#222831]/50 border border-[#76ABAE]/20 text-[#EEEEEE] placeholder-[#EEEEEE]/40 focus:outline-none focus:border-[#76ABAE]/50 focus:ring-1 focus:ring-[#76ABAE]/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#EEEEEE]/80 mb-2 text-sm sm:text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#222831]/50 border border-[#76ABAE]/20 text-[#EEEEEE] placeholder-[#EEEEEE]/40 focus:outline-none focus:border-[#76ABAE]/50 focus:ring-1 focus:ring-[#76ABAE]/30 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Project discussion or opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#EEEEEE]/80 mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <FaMessage className="text-[#76ABAE] text-sm" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#222831]/50 border border-[#76ABAE]/20 text-[#EEEEEE] placeholder-[#EEEEEE]/40 focus:outline-none focus:border-[#76ABAE]/50 focus:ring-1 focus:ring-[#76ABAE]/30 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 rounded-lg bg-[#76ABAE]/20 border border-[#76ABAE]/30"
                  >
                    <p className="text-[#76ABAE] text-sm sm:text-base">Thank you! Your message has been sent successfully. I'll get back to you soon!</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 rounded-lg bg-[#76ABAE]/20 border border-[#76ABAE]/30"
                  >
                    <p className="text-[#76ABAE] text-sm sm:text-base">Oops! Something went wrong. Please try again or email me directly.</p>
                  </motion.div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isSubmitting
                      ? 'bg-[#31363F] cursor-not-allowed border border-[#76ABAE]/20'
                      : 'bg-gradient-to-r from-[#76ABAE] to-[#5a8a8d] hover:from-[#5a8a8d] hover:to-[#76ABAE] hover:shadow-lg hover:shadow-[#76ABAE]/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-[#EEEEEE]/30 border-t-[#EEEEEE] rounded-full animate-spin"></div>
                      <span className="text-[#EEEEEE]">Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm sm:text-base" />
                      <span className="text-[#EEEEEE]">Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[#EEEEEE]/50 text-xs sm:text-sm text-center">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;