import React, { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const AIHeroSection: React.FC = () => {
  const [detectionAccuracy, setDetectionAccuracy] = useState(0);
  const [isDetecting, setIsDetecting] = useState(false);

  // Simulate AI detection process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDetecting(true);
      const accuracyTimer = setInterval(() => {
        setDetectionAccuracy((prev) => {
          if (prev >= 99) {
            clearInterval(accuracyTimer);
            return 99;
          }
          return prev + 1;
        });
      }, 30);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    'Cloud Architect',
    'DevSecOps',
    'Artificial Intelligence',
    'Machine learning',
    'Cyber security',
    'FinOps',
    'Cloud services',
    'Microservices',
    'Kubernetes',
    'Azure',
    'AWS',
    'GCP',
    'Terraform',
    'GitLab/GitHub',
    'Jenkins',
    'Ansible',
    'Docker/Podman',
    'Python'
  ];

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#673AB7]">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Pink Gradient Side Panels */}
      <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-[#E91E63] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#E91E63] to-transparent z-10"></div>

      <div className="container relative z-20 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side - AI Demo */}
          <div className="flex justify-center">
            <div className="ai-demo-container w-full max-w-2xl">
              <div className="bg-black rounded-lg p-8 relative">
                {/* Baby Face Images with Detection Boxes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img 
                      src="/api/placeholder/300/400" 
                      alt="Baby face 1" 
                      className="w-full h-auto rounded-lg grayscale"
                    />
                    {isDetecting && (
                      <div className="face-detection-box top-8 left-8 w-48 h-48 animate-pulse">
                        <div className="absolute -top-6 -left-2 text-[#4CAF50] text-xs font-bold">
                          FACE DETECTED
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <img 
                      src="/api/placeholder/300/400" 
                      alt="Baby face 2" 
                      className="w-full h-auto rounded-lg grayscale"
                    />
                    {isDetecting && (
                      <div className="face-detection-box top-8 left-8 w-48 h-48 animate-pulse">
                        <div className="absolute -top-6 -left-2 text-[#4CAF50] text-xs font-bold">
                          FACE DETECTED
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - AI Information */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-white">
                Artificial<br />
                intelligence
              </h1>
              <h2 className="text-4xl font-bold text-white">
                Object<br />
                detection
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-white">Accuracy up to</p>
              <div className="flex items-center space-x-4">
                <span className="detection-accuracy text-8xl font-bold">
                  {detectionAccuracy}%
                </span>
                <ChevronRightIcon className="w-12 h-12 text-white" />
              </div>
            </div>

            <button className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#E91E63] px-8 py-3 rounded-none">
              Contact now
            </button>
          </div>
        </div>
      </div>

      {/* Skills Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-8">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="btn-secondary">
              Contact me!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHeroSection;