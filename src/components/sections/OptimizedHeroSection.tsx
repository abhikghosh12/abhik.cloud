import React from 'react';
import { Link } from 'react-router-dom';

const OptimizedHeroSection: React.FC = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#673AB7]">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      <div className="container relative z-20 flex items-center justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Professional headshot and credentials */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img 
                src="/api/placeholder/400/400" 
                alt="Abhik Ghosh - Cloud Architect" 
                className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl mx-auto lg:mx-0"
              />
            </div>
            
            {/* Prominent certification badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <img src="/api/placeholder/80/80" alt="AWS Solutions Architect Professional" className="w-16 h-16 rounded-lg bg-white p-1" />
              <img src="/api/placeholder/80/80" alt="Azure Solutions Architect Expert" className="w-16 h-16 rounded-lg bg-white p-1" />
              <img src="/api/placeholder/80/80" alt="Google Cloud Professional Architect" className="w-16 h-16 rounded-lg bg-white p-1" />
              <img src="/api/placeholder/80/80" alt="Kubernetes CKA" className="w-16 h-16 rounded-lg bg-white p-1" />
            </div>
          </div>

          {/* Value proposition framework */}
          <div className="text-white space-y-8">
            {/* Three-tier messaging structure */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Expert Cloud Architecture Solutions for Enterprise Transformation
              </h1>
              
              {/* Quantifiable outcomes */}
              <p className="text-xl lg:text-2xl text-pink-100 mb-4">
                Helping businesses achieve <span className="text-yellow-300 font-bold">40% cost reduction</span> through optimized cloud infrastructure
              </p>
              
              {/* Partnership positioning */}
              <p className="text-lg text-pink-100">
                Your trusted partner for AWS, Azure, and multi-cloud success at Capgemini
              </p>
            </div>

            {/* Benefit-focused CTAs */}
            <div className="space-y-4">
              <Link 
                to="/appointment"
                className="inline-block bg-white text-[#E91E63] hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 mr-4 btn-animate"
              >
                Schedule Your Cloud Strategy Session
              </Link>
              <Link 
                to="/projects"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#E91E63] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 btn-animate"
              >
                Get Your Custom Architecture Plan
              </Link>
            </div>

            {/* Key business problems addressed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                <h3 className="font-bold mb-2">Scalable Infrastructure</h3>
                <p className="text-sm text-pink-100">Reduces costs and increases performance</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                <h3 className="font-bold mb-2">DevSecOps Excellence</h3>
                <p className="text-sm text-pink-100">Accelerated delivery with security built-in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;