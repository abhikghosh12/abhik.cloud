import React from 'react';
import AIHeroSection from '@/components/sections/AIHeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CertificatesSection from '@/components/sections/CertificatesSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <AIHeroSection />
      <AboutSection />
      <CertificatesSection />
    </div>
  );
};

export default HomePage;