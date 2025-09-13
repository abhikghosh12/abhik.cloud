import React from 'react';
import OptimizedHeroSection from '@/components/sections/OptimizedHeroSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import TechnicalExpertiseSection from '@/components/sections/TechnicalExpertiseSection';
import CertificationShowcase from '@/components/sections/CertificationShowcase';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import BlogSection from '@/components/sections/BlogSection';
import OptimizedContactSection from '@/components/sections/OptimizedContactSection';

const OptimizedHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Hero Section - Professional introduction */}
      <OptimizedHeroSection />
      
      {/* Value Proposition - What I offer */}
      <ValuePropositionSection />
      
      {/* Technical Skills - Core competencies */}
      <TechnicalExpertiseSection />
      
      {/* Certifications - Professional credentials */}
      <CertificationShowcase />
      
      {/* Experience - Career timeline */}
      <ExperienceSection />
      
      {/* Projects - Featured work */}
      <ProjectsSection />
      
      {/* Blog - Latest insights */}
      <BlogSection />
      
      {/* Contact - Get in touch */}
      <OptimizedContactSection />
    </div>
  );
};

export default OptimizedHomePage;