import React from 'react';
import OptimizedHeroSection from '@/components/sections/OptimizedHeroSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import TechnicalExpertiseSection from '@/components/sections/TechnicalExpertiseSection';
import CertificationShowcase from '@/components/sections/CertificationShowcase';
import ExperienceSection from '@/components/sections/ExperienceSection';
import OptimizedContactSection from '@/components/sections/OptimizedContactSection';

const OptimizedHomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - First impression */}
      <OptimizedHeroSection />
      
      {/* Value Proposition - What I offer */}
      <ValuePropositionSection />
      
      {/* Technical Skills - Core competencies */}
      <TechnicalExpertiseSection />
      
      {/* Certifications - Credibility */}
      <CertificationShowcase />
      
      {/* Experience - Professional background */}
      <ExperienceSection />
      
      {/* Contact - Call to action */}
      <OptimizedContactSection />
    </div>
  );
};

export default OptimizedHomePage;