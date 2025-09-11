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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#673AB7]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Pink Gradient Side Panels */}
      <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-[#E91E63] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#E91E63] to-transparent z-10"></div>

      <div className="container relative z-20 flex items-center justify-center min-h-screen py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
          
          {/* Left Side - AI Demo */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div className="bg-black rounded-lg p-6 relative">
                {/* Simplified AI Demo */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs">AI Detection</p>
                    </div>
                    {isDetecting && (
                      <div className="absolute inset-2 border-2 border-[#4CAF50] rounded animate-pulse">
                        <div className="absolute -top-6 left-0 text-[#4CAF50] text-xs font-bold">
                          FACE DETECTED
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs">Object Recognition</p>
                    </div>
                    {isDetecting && (
                      <div className="absolute inset-2 border-2 border-[#4CAF50] rounded animate-pulse">
                        <div className="absolute -top-6 left-0 text-[#4CAF50] text-xs font-bold">
                          OBJECT DETECTED
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
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Artificial<br />
                intelligence
              </h1>
              <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                Object<br />
                detection
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-white">Accuracy up to</p>
              <div className="flex items-center space-x-4">
                <span className="text-6xl lg:text-8xl font-bold text-[#4CAF50]">
                  {detectionAccuracy}%
                </span>
                <ChevronRightIcon className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
              </div>
            </div>

            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#E91E63] px-6 py-3 rounded transition-all duration-300">
              Contact now
            </button>
          </div>
        </div>
      </div>

      {/* Skills Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-6">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <span key={index} className="bg-[#9C27B0] text-white px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="bg-[#E91E63] text-white px-6 py-3 rounded-full hover:bg-[#AD1457] transition-colors duration-300">
              Contact me!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHeroSection;