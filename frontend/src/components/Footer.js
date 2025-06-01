import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    resources: [
      { name: 'Research Papers', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Technical Reports', href: '#' }
    ],
    tools: [
      { name: 'Threat Detection', href: '#' },
      { name: 'Risk Assessment', href: '#' },
      { name: 'Security Audit', href: '#' },
      { name: 'Incident Response', href: '#' }
    ],
    community: [
      { name: 'Research Community', href: '#' },
      { name: 'Academic Partners', href: '#' },
      { name: 'Expert Network', href: '#' },
      { name: 'Collaboration Hub', href: '#' }
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact Support', href: '#' },
      { name: 'Request Demo', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 md:p-12 text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated on <span className="text-cyan-400">AI Threats</span>
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest research findings, threat intelligence, and security updates delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
            />
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AI CyberGuard</span>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading research platform for AI cybersecurity threats and mitigation strategies in academic environments.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tools</h4>
            <ul className="space-y-3">
              {footerLinks.tools.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/30"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-medium">Email</div>
              <div className="text-slate-400 text-sm">research@aicyberguard.edu</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="text-white font-medium">Phone</div>
              <div className="text-slate-400 text-sm">+1 (555) 123-4567</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="text-white font-medium">Location</div>
              <div className="text-slate-400 text-sm">Academic Research Center</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 AI CyberGuard. All rights reserved. Built for academic research purposes.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <motion.a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;