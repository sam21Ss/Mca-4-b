import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Shield, Zap, Database, FileX, Users, Lock } from 'lucide-react';

const ThreatCategories = () => {
  const threats = [
    {
      icon: Brain,
      title: "Deepfakes & Media Manipulation",
      description: "AI-generated fake videos, images, and audio content designed to deceive and manipulate public opinion.",
      severity: "High",
      examples: ["Fake video calls", "Voice cloning", "Synthetic media"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrcyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ4NzU5NzMyfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Database,
      title: "Data Poisoning Attacks",
      description: "Malicious manipulation of training datasets to compromise AI model integrity and decision-making.",
      severity: "Critical",
      examples: ["Training data corruption", "Model backdoors", "Adversarial samples"],
      image: "https://images.pexels.com/photos/9783812/pexels-photo-9783812.jpeg"
    },
    {
      icon: Eye,
      title: "Adversarial Machine Learning",
      description: "Crafted inputs designed to fool AI systems into making incorrect predictions or classifications.",
      severity: "High",
      examples: ["Evasion attacks", "Model inversion", "Feature collision"],
      image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwYWl8ZW58MHx8fHwxNzQ4NzU5NzIzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Zap,
      title: "AI-Powered Phishing",
      description: "Sophisticated phishing campaigns using AI to create personalized and convincing attack vectors.",
      severity: "Medium",
      examples: ["Spear phishing", "Social engineering", "Automated scams"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrcyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ4NzU5NzMyfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: FileX,
      title: "Model Theft & IP Violation",
      description: "Unauthorized extraction or replication of proprietary AI models and intellectual property.",
      severity: "High",
      examples: ["Model extraction", "API abuse", "Knowledge distillation"],
      image: "https://images.pexels.com/photos/9783812/pexels-photo-9783812.jpeg"
    },
    {
      icon: Users,
      title: "Privacy Inference Attacks",
      description: "Techniques to extract sensitive information from AI models about their training data.",
      severity: "Critical",
      examples: ["Membership inference", "Property inference", "Data reconstruction"],
      image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwYWl8ZW58MHx8fHwxNzQ4NzU5NzIzfDA&ixlib=rb-4.1.0&q=85"
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'from-red-500 to-pink-500';
      case 'High': return 'from-orange-500 to-yellow-500';
      case 'Medium': return 'from-yellow-500 to-amber-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Threat <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive analysis of emerging AI-powered cyber threats and their potential impact on digital security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${threat.image})` }}
                />
                
                <div className="relative p-8">
                  {/* Severity Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getSeverityColor(threat.severity)} mb-4`}>
                    {threat.severity} Risk
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {threat.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {threat.description}
                  </p>
                  
                  {/* Examples */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-cyan-400">Common Examples:</h4>
                    <ul className="space-y-1">
                      {threat.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Learn More Button */}
                  <motion.button
                    className="mt-6 w-full bg-slate-700/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 text-white py-3 rounded-lg font-medium transition-all duration-300 border border-slate-600 hover:border-cyan-400/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreatCategories;