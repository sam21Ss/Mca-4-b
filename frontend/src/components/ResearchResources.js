import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ExternalLink, Users, Calendar, Star } from 'lucide-react';

const ResearchResources = () => {
  const resources = [
    {
      type: "Research Paper",
      title: "Adversarial Attacks on Neural Networks: A Comprehensive Survey",
      authors: "Smith, J., Johnson, A., & Williams, R.",
      journal: "Journal of AI Security",
      year: "2024",
      downloads: "2.3k",
      rating: 4.8,
      description: "Comprehensive analysis of adversarial attack methods and their implications for AI security.",
      tags: ["Adversarial ML", "Neural Networks", "Security"]
    },
    {
      type: "Whitepaper",
      title: "Deepfake Detection in Academic Research: Methods and Challenges",
      authors: "Chen, L., Davis, M., & Brown, S.",
      journal: "AI Ethics Review",
      year: "2024",
      downloads: "1.8k",
      rating: 4.7,
      description: "Latest techniques for detecting deepfakes and synthetic media in academic contexts.",
      tags: ["Deepfakes", "Detection", "Media Forensics"]
    },
    {
      type: "Case Study",
      title: "University Data Breach: AI-Powered Attack Analysis",
      authors: "Thompson, K. & Lee, H.",
      journal: "Cybersecurity Cases",
      year: "2023",
      downloads: "3.1k",
      rating: 4.9,
      description: "Real-world analysis of an AI-powered cyber attack on a major university.",
      tags: ["Case Study", "Data Breach", "Incident Response"]
    },
    {
      type: "Technical Report",
      title: "Privacy-Preserving AI: Techniques and Implementation",
      authors: "Rodriguez, M., Kim, J., & Patel, A.",
      journal: "Privacy Tech Review",
      year: "2024",
      downloads: "1.5k",
      rating: 4.6,
      description: "Practical guide to implementing privacy-preserving AI techniques in research.",
      tags: ["Privacy", "Implementation", "Best Practices"]
    },
    {
      type: "Survey",
      title: "AI Threat Landscape: Current State and Future Predictions",
      authors: "Anderson, D., Garcia, C., & Wilson, P.",
      journal: "Future Tech Analysis",
      year: "2024",
      downloads: "2.7k",
      rating: 4.8,
      description: "Comprehensive survey of current AI threats and predictions for emerging risks.",
      tags: ["Threat Analysis", "Future Trends", "Risk Assessment"]
    },
    {
      type: "Framework",
      title: "AI Security Assessment Framework for Academic Institutions",
      authors: "Taylor, B. & Martinez, E.",
      journal: "Academic Security",
      year: "2024",
      downloads: "1.9k",
      rating: 4.5,
      description: "Structured framework for assessing AI security risks in academic environments.",
      tags: ["Framework", "Assessment", "Academic"]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Research Paper': return 'from-blue-500 to-indigo-500';
      case 'Whitepaper': return 'from-green-500 to-emerald-500';
      case 'Case Study': return 'from-red-500 to-pink-500';
      case 'Technical Report': return 'from-purple-500 to-violet-500';
      case 'Survey': return 'from-orange-500 to-amber-500';
      case 'Framework': return 'from-cyan-500 to-teal-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/32213423/pexels-photo-32213423.jpeg)',
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
            Research <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Curated collection of academic papers, case studies, and research findings on AI cybersecurity threats.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                {/* Resource Type Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(resource.type)} mb-4`}>
                  <BookOpen className="w-3 h-3 mr-1" />
                  {resource.type}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {resource.title}
                </h3>

                {/* Authors & Journal */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-slate-300 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-slate-400" />
                    {resource.authors}
                  </p>
                  <p className="text-sm text-slate-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {resource.journal} • {resource.year}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/50 text-xs text-slate-300 rounded-md border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <Download className="w-4 h-4 mr-1" />
                      <span className="text-sm">{resource.downloads}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 text-blue-400 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download
                  </motion.button>
                  <motion.button
                    className="bg-slate-700/50 border border-slate-600 text-slate-300 py-2 px-3 rounded-lg hover:bg-slate-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Collaborate on <span className="text-cyan-400">Research</span>
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our research community and contribute to the advancement of AI cybersecurity knowledge. 
            Share your findings and collaborate with fellow researchers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Research
            </motion.button>
            <motion.button
              className="bg-slate-700/50 border border-slate-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-600/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Community
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchResources;