import React from 'react';
import OptimizedHeroSection from '@/components/sections/OptimizedHeroSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import CertificationShowcase from '@/components/sections/CertificationShowcase';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import TechnicalExpertiseSection from '@/components/sections/TechnicalExpertiseSection';
import OptimizedContactSection from '@/components/sections/OptimizedContactSection';
import SocialProofSection from '@/components/sections/SocialProofSection';

const OptimizedHomePage: React.FC = () => {
  return (
    <div>
      {/* Phase 1: Foundation - Value proposition above the fold */}
      <OptimizedHeroSection />
      
      {/* Strategic certification display with visual badges */}
      <CertificationShowcase />
      
      {/* Social proof positioning */}
      <SocialProofSection />
      
      {/* Value proposition framework */}
      <ValuePropositionSection />
      
      {/* Technical expertise presentation */}
      <TechnicalExpertiseSection />
      
      {/* Client testimonials with quantified results */}
      <ClientTestimonialsSection />
      
      {/* Optimized contact form (4 fields maximum) */}
      <OptimizedContactSection />
    </div>
  );
};

export default OptimizedHomePage;