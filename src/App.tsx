import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/layout/Navbar'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import SmoothScrolling from '@/components/common/SmoothScrolling'
import ParticleBackground from '@/components/3d/ParticleBackground'
import ErrorBoundary from '@/components/common/ErrorBoundary'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const SkillsPage = lazy(() => import('@/pages/SkillsPage'))
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const CertificatesPage = lazy(() => import('@/pages/CertificatesPage'))

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen relative overflow-x-hidden">
        <Helmet>
          <title>Abhik Ghosh | Cloud Architect | AI/ML Expert</title>
          <meta 
            name="description" 
            content="Cloud Architect at Capgemini specializing in DevSecOps, AI/ML, and cloud transformation. Expert in AWS, Azure, GCP, and modern development practices." 
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#6366f1" />
          <link rel="canonical" href="https://abhik.cloud" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Abhik Ghosh - Cloud Architect" />
          <meta property="og:description" content="Cloud Architect specializing in DevSecOps, AI/ML, and cloud transformation" />
          <meta property="og:image" content="/og-image.jpg" />
          <meta property="og:url" content="https://abhik.cloud" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Abhik Ghosh - Cloud Architect" />
          <meta name="twitter:description" content="Cloud Architect specializing in DevSecOps, AI/ML, and cloud transformation" />
          <meta name="twitter:image" content="/og-image.jpg" />
          
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" 
            rel="stylesheet" 
          />
        </Helmet>

        {/* Background Effects */}
        <ParticleBackground />
        
        {/* Smooth Scrolling */}
        <SmoothScrolling />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
