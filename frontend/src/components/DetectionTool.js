import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Search, FileText, Image, Link, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const DetectionTool = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const tabs = [
    { id: 'text', label: 'Text Analysis', icon: FileText, description: 'Detect AI-generated content and suspicious patterns' },
    { id: 'image', label: 'Image Analysis', icon: Image, description: 'Identify deepfakes and AI-generated images' },
    { id: 'url', label: 'URL Analysis', icon: Link, description: 'Check for malicious AI-powered threats' }
  ];

  // Simulated AI detection database
  const threatDatabase = {
    text: [
      { pattern: /artificial intelligence|machine learning|neural network/i, threat: 'AI-generated content', confidence: 85 },
      { pattern: /phishing|urgent|act now|limited time/i, threat: 'AI-powered phishing', confidence: 75 },
      { pattern: /deepfake|synthetic|generated/i, threat: 'Deepfake reference', confidence: 90 },
    ],
    url: [
      { pattern: /bit\.ly|tinyurl|suspicious/i, threat: 'Suspicious shortened URL', confidence: 70 },
      { pattern: /phishing|fake|malicious/i, threat: 'Potential phishing site', confidence: 85 },
    ]
  };

  const analyzeInput = async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    let result = {
      type: activeTab,
      input: inputValue,
      threats: [],
      overallRisk: 'Low',
      confidence: 0
    };

    if (activeTab === 'text' || activeTab === 'url') {
      const patterns = threatDatabase[activeTab] || threatDatabase.text;
      
      patterns.forEach(pattern => {
        if (pattern.pattern.test(inputValue)) {
          result.threats.push({
            type: pattern.threat,
            confidence: pattern.confidence,
            severity: pattern.confidence > 80 ? 'High' : pattern.confidence > 60 ? 'Medium' : 'Low'
          });
        }
      });
    }

    // Calculate overall risk
    if (result.threats.length > 0) {
      const avgConfidence = result.threats.reduce((sum, threat) => sum + threat.confidence, 0) / result.threats.length;
      result.confidence = Math.round(avgConfidence);
      result.overallRisk = avgConfidence > 80 ? 'High' : avgConfidence > 60 ? 'Medium' : 'Low';
    } else {
      result.confidence = 95;
      result.overallRisk = 'Low';
    }

    setAnalysisResult(result);
    setIsAnalyzing(false);
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-slate-400 bg-slate-500/20 border-slate-500/30';
    }
  };

  const getRiskIcon = (risk) => {
    switch (risk) {
      case 'High': return XCircle;
      case 'Medium': return AlertTriangle;
      case 'Low': return CheckCircle;
      default: return Shield;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="detection-tool">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxuZXVyYWwlMjBuZXR3b3JrcyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ4NzU5NzMyfDA&ixlib=rb-4.1.0&q=85)',
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Threat <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Detection Tool</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced detection system to identify and analyze potential AI-powered cyber threats in real-time.
          </p>
        </motion.div>

        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  data-tab={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setAnalysisResult(null);
                    setInputValue('');
                  }}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-400'
                      : 'bg-slate-700/50 border border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">{tab.label}</div>
                    <div className="text-xs opacity-70">{tab.description}</div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Input Area */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'text' && (
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Enter text content to analyze:
                    </label>
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Paste suspicious text, email content, or any text you want to analyze for AI-generated patterns..."
                      className="w-full h-40 bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none resize-none"
                    />
                  </div>
                )}

                {activeTab === 'image' && (
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Upload image for deepfake detection:
                    </label>
                    <div className="border-2 border-dashed border-slate-600 rounded-xl p-12 text-center hover:border-cyan-400/50 transition-colors duration-300">
                      <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-300 mb-2">Drag and drop an image here, or click to browse</p>
                      <p className="text-slate-400 text-sm">Supports JPG, PNG, GIF up to 10MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files[0]) {
                            setInputValue(`Image uploaded: ${e.target.files[0].name}`);
                          }
                        }}
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'url' && (
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Enter URL to check for threats:
                    </label>
                    <input
                      type="url"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Analyze Button */}
            <motion.button
              onClick={analyzeInput}
              disabled={!inputValue.trim() || isAnalyzing}
              data-analyze="true"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 rounded-xl font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Analyze for Threats</span>
                </div>
              )}
            </motion.button>
          </div>

          {/* Results */}
          <AnimatePresence>
            {analysisResult && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 bg-slate-700/30 rounded-2xl border border-slate-600"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-2" />
                  Analysis Results
                </h3>

                {/* Overall Risk */}
                <div className={`inline-flex items-center px-4 py-2 rounded-lg border mb-6 ${getRiskColor(analysisResult.overallRisk)}`}>
                  {React.createElement(getRiskIcon(analysisResult.overallRisk), { className: "w-5 h-5 mr-2" })}
                  <span className="font-medium">{analysisResult.overallRisk} Risk Level</span>
                  <span className="ml-2 text-sm">({analysisResult.confidence}% confidence)</span>
                </div>

                {/* Threats Found */}
                {analysisResult.threats.length > 0 ? (
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-white">Threats Detected:</h4>
                    {analysisResult.threats.map((threat, index) => (
                      <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-600">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-white">{threat.type}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(threat.severity)}`}>
                            {threat.severity}
                          </span>
                        </div>
                        <div className="text-slate-400 text-sm">
                          Confidence: {threat.confidence}%
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <p className="text-white font-medium">No threats detected</p>
                    <p className="text-slate-400 text-sm">The analyzed content appears to be safe</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DetectionTool;