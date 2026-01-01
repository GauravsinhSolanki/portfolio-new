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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree for form submission (free tier)
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
      icon: <FaEnvelope className="text-blue-400" />,
      title: "Email",
      value: "solankigbs11@gmail.com",
      link: "mailto:solankigbs11@gmail.com"
    },
    {
      icon: <FaMapPin className="text-red-400" />,
      title: "Location",
      value: "Toronto, On, Canada",
      link: "https://maps.google.com/?q=Toronto+Ontario+Canada"
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
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
      color: "hover:text-white hover:bg-gray-800"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gauravsinh-solanki/",
      color: "hover:text-blue-400 hover:bg-blue-900/30"
    },
    {
      icon: <FaXTwitter />,
      label: "X (Twitter)",
      link: "https://x.com/Gauravsinh07",
      color: "hover:text-sky-400 hover:bg-sky-900/30"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      link: "mailto:solankigbs11@gmail.com",
      color: "hover:text-red-400 hover:bg-red-900/30"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 overflow-hidden">
      
      {/* Hero-like Background */}
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section header matching Hero style */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-black/20 border border-blue-500/20 backdrop-blur-sm">
              <FaEnvelope className="text-blue-400" />
              <span className="text-blue-300 font-medium">Let's Connect</span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-2xl h-full bg-black/20 backdrop-blur-sm border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-black/20 border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-900/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-black/30 border border-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-slate-300 group-hover:text-blue-300 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-black/30 border border-blue-500/20 text-2xl text-slate-400 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 rounded-xl bg-blue-900/10 border border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-white">Currently Available</h4>
                    <p className="text-slate-300 text-sm">Open for new opportunities and collaborations</p>
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
            <div className="glass-card p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaPaperPlane className="text-blue-400" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2 flex items-center gap-2">
                      <FaUserAlt className="text-blue-400" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-blue-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2 flex items-center gap-2">
                      <FaEnvelope className="text-blue-400" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-blue-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-blue-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                    placeholder="Project discussion or opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 flex items-center gap-2">
                    <FaMessage className="text-blue-400" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-blue-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-900/20 border border-green-500/30"
                  >
                    <p className="text-green-300">Thank you! Your message has been sent successfully. I'll get back to you soon!</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-900/20 border border-red-500/30"
                  >
                    <p className="text-red-300">Oops! Something went wrong. Please try again or email me directly.</p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-blue-800/30 cursor-not-allowed border border-blue-500/20'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-blue-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-white">Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span className="text-white">Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-slate-500 text-sm text-center">
                  I typically respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            © {new Date().getFullYear()} Gauravsinh Solanki. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;