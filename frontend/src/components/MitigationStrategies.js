import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, FileCheck, Zap, CheckCircle } from 'lucide-react';

const MitigationStrategies = () => {
  const strategies = [
    {
      icon: Shield,
      title: "Robust Authentication",
      description: "Implement multi-factor authentication and biometric verification to prevent unauthorized access.",
      techniques: [
        "Multi-factor authentication (MFA)",
        "Biometric verification systems",
        "Zero-trust security architecture",
        "Continuous authentication monitoring"
      ],
      effectiveness: 95
    },
    {
      icon: Eye,
      title: "AI Model Monitoring",
      description: "Continuous monitoring of AI models for anomalous behavior and adversarial attacks.",
      techniques: [
        "Real-time model performance tracking",
        "Adversarial example detection",
        "Data drift monitoring",
        "Model integrity verification"
      ],
      effectiveness: 88
    },
    {
      icon: Lock,
      title: "Data Encryption & Privacy",
      description: "Advanced encryption techniques and privacy-preserving AI methods to protect sensitive data.",
      techniques: [
        "End-to-end encryption",
        "Differential privacy",
        "Homomorphic encryption",
        "Secure multi-party computation"
      ],
      effectiveness: 92
    },
    {
      icon: Users,
      title: "Human-in-the-Loop Systems",
      description: "Integrate human oversight in critical AI decision-making processes to prevent automated threats.",
      techniques: [
        "Human verification checkpoints",
        "Expert review processes",
        "Escalation protocols",
        "Manual override capabilities"
      ],
      effectiveness: 85
    },
    {
      icon: FileCheck,
      title: "Regular Security Audits",
      description: "Comprehensive security assessments and vulnerability testing for AI systems.",
      techniques: [
        "Penetration testing",
        "Code security reviews",
        "Threat modeling exercises",
        "Compliance assessments"
      ],
      effectiveness: 90
    },
    {
      icon: Zap,
      title: "Incident Response Planning",
      description: "Prepare and implement rapid response strategies for AI-related security incidents.",
      techniques: [
        "Automated threat detection",
        "Incident response protocols",
        "Recovery procedures",
        "Stakeholder communication plans"
      ],
      effectiveness: 87
    }
  ];

  const bestPractices = [
    "Implement defense-in-depth security architecture",
    "Regular training and awareness programs",
    "Establish clear AI governance policies",
    "Maintain up-to-date threat intelligence",
    "Foster collaboration between security teams",
    "Continuous improvement of security measures"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc0ODc1OTcyOHww&ixlib=rb-4.1.0&q=85)',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mitigation <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Strategies</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Evidence-based strategies and best practices for defending against AI-powered cyber threats.
          </p>
        </motion.div>

        {/* Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Effectiveness Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{strategy.effectiveness}%</div>
                    <div className="text-xs text-slate-400">Effectiveness</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${strategy.effectiveness}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {strategy.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {strategy.description}
                </p>
                
                {/* Techniques */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-cyan-400">Key Techniques:</h4>
                  <ul className="space-y-2">
                    {strategy.techniques.map((technique, idx) => (
                      <li key={idx} className="text-sm text-slate-400 flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Best Practices Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Implementation <span className="text-cyan-400">Best Practices</span>
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Essential guidelines for successful deployment of AI security measures in academic and research environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white font-medium">{practice}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Implementation Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MitigationStrategies;