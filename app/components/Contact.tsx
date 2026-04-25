'use client';

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
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "solankigbs11@gmail.com",
      link: "mailto:solankigbs11@gmail.com"
    },
    {
      icon: <FaMapPin />,
      title: "Location",
      value: "Toronto, ON, Canada",
      link: "https://maps.google.com/?q=Toronto+Ontario+Canada"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "gauravsinh-solanki",
      link: "https://www.linkedin.com/in/gauravsinh-solanki/"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", link: "https://github.com/GauravsinhSolanki" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/gauravsinh-solanki/" },
    { icon: <FaXTwitter />, label: "X", link: "https://x.com/Gauravsinh07" },
    { icon: <FaEnvelope />, label: "Email", link: "mailto:solankigbs11@gmail.com" }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#222831]">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-[#76ABAE]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Section header - Matching other sections */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-px w-12 sm:w-16 bg-[#76ABAE]/30"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EEEEEE] tracking-tight">
            Get In Touch
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-[#76ABAE]/30 to-transparent"></div>
        </div>

        {/* Section description */}
        <p className="text-[#a0a8b8] text-sm sm:text-base text-center mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Contact Information - Same height as form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="h-full rounded-2xl border border-[#4a505a] bg-[#31363F]/30 backdrop-blur-sm p-6 flex flex-col">
              
              <h3 className="text-lg sm:text-xl font-bold text-[#EEEEEE] mb-5 flex items-center gap-2">
                <FaEnvelope className="text-[#76ABAE] text-lg" />
                <span>Contact Info</span>
              </h3>
              
              {/* Contact items */}
              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#222831]/50 border border-[#4a505a] hover:border-[#76ABAE]/40 hover:bg-[#76ABAE]/5 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-[#222831] border border-[#4a505a] text-[#76ABAE] text-base">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#EEEEEE] text-sm">{info.title}</h4>
                      <p className="text-[#a0a8b8] text-sm group-hover:text-[#76ABAE] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[#a0a8b8] mb-3">Find me on</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-[#222831] border border-[#4a505a] text-[#a0a8b8] hover:text-[#76ABAE] hover:border-[#76ABAE]/40 hover:bg-[#76ABAE]/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-auto p-3 rounded-xl bg-[#76ABAE]/10 border border-[#76ABAE]/20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-[#76ABAE] rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-[#EEEEEE] text-sm font-medium">Available for work</p>
                    <p className="text-[#a0a8b8] text-xs">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Same height */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="h-full rounded-2xl border border-[#4a505a] bg-[#31363F]/30 backdrop-blur-sm p-6 flex flex-col">
              
              <h3 className="text-lg sm:text-xl font-bold text-[#EEEEEE] mb-5 flex items-center gap-2">
                <FaPaperPlane className="text-[#76ABAE] text-lg" />
                <span>Send a Message</span>
              </h3>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#a0a8b8] text-xs mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 rounded-lg bg-[#222831]/50 border border-[#4a505a] text-[#EEEEEE] placeholder-[#a0a8b8]/50 text-sm focus:outline-none focus:border-[#76ABAE]/50 focus:ring-1 focus:ring-[#76ABAE]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#a0a8b8] text-xs mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-[#222831]/50 border border-[#4a505a] text-[#EEEEEE] placeholder-[#a0a8b8]/50 text-sm focus:outline-none focus:border-[#76ABAE]/50 focus:ring-1 focus:ring-[#76ABAE]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#a0a8b8] text-xs mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion or opportunity"
                    className="w-full px-3 py-2 rounded-lg bg-[#222831]/50 border border-[#4a505a] text-[#EEEEEE] placeholder-[#a0a8b8]/50 text-sm focus:outline-none focus:border-[#76ABAE]/50 focus:ring-1 focus:ring-[#76ABAE]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a8b8] text-xs mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-3 py-2 rounded-lg bg-[#222831]/50 border border-[#4a505a] text-[#EEEEEE] placeholder-[#a0a8b8]/50 text-sm focus:outline-none focus:border-[#76ABAE]/50 focus:ring-1 focus:ring-[#76ABAE]/30 transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 rounded-lg bg-[#76ABAE]/20 border border-[#76ABAE]/30">
                    <p className="text-[#76ABAE] text-xs text-center">Thank you! I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-red-900/20 border border-red-500/30">
                    <p className="text-red-400 text-xs text-center">Oops! Something went wrong. Please try again.</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg bg-[#76ABAE] text-[#222831] font-semibold text-sm hover:bg-[#8dbdc0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#222831]/30 border-t-[#222831] rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[#a0a8b8]/50 text-xs text-center">
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