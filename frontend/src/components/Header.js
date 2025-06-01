import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Search } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Shield },
    { id: 'threats', label: 'AI Threats', icon: Brain },
    { id: 'detection', label: 'Detection Tool', icon: Search },
    { id: 'mitigation', label: 'Mitigation', icon: Shield },
    { id: 'resources', label: 'Resources', icon: Brain }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AI CyberGuard</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-cyan-400 bg-slate-800/50' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </nav>
          
          <motion.button 
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;