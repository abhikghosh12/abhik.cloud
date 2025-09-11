import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#E91E63] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#E91E63] to-transparent z-10"></div>

      <div className="container relative z-20 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side - AI Demo */}
          <div className="flex justify-center">
            <div className="ai-demo-container w-full max-w-md">
              <div className="bg-black rounded-lg p-6 relative">
                {/* Simplified AI Detection Demo */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                      Face Image 1
                    </div>
                    {isDetecting && (
                      <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-[#4CAF50] rounded animate-pulse">
                        <div className="absolute -top-5 left-0 text-[#4CAF50] text-xs font-bold">
                          DETECTED
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                      Face Image 2
                    </div>
                    {isDetecting && (
                      <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-[#4CAF50] rounded animate-pulse">
                        <div className="absolute -top-5 left-0 text-[#4CAF50] text-xs font-bold">
                          DETECTED
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - AI Information */}
          <div className="text-white space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                Artificial<br />
                intelligence
              </h1>
              <h2 className="text-3xl font-bold text-white">
                Object<br />
                detection
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-lg text-white">Accuracy up to</p>
              <div className="flex items-center space-x-3">
                <span className="detection-accuracy text-6xl font-bold">
                  {detectionAccuracy}%
                </span>
                <ChevronRightIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            <Link 
              to="/appointment"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#E91E63] px-6 py-3 rounded transition-all duration-300"
            >
              Contact now
            </Link>
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
            <Link 
              to="/appointment"
              className="bg-[#E91E63] text-white px-6 py-3 rounded-full font-medium hover:bg-[#AD1457] transition-colors inline-block"
            >
              Contact me!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHeroSection;