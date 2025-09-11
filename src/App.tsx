import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'))
const ResumePage = lazy(() => import('@/pages/ResumePage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const CertificatesPage = lazy(() => import('@/pages/CertificatesPage'))
const AppointmentPage = lazy(() => import('@/pages/AppointmentPage'))
const BlogsPage = lazy(() => import('@/pages/BlogsPage'))
const GalleryPage = lazy(() => import('@/pages/GalleryPage'))
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'))

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white">
      <Helmet>
        <title>Abhik Ghosh | Cloud Architect | AI/ML Expert</title>
        <meta 
          name="description" 
          content="Cloud Architect at Capgemini specializing in DevSecOps, AI/ML, and cloud transformation. Expert in AWS, Azure, GCP, and modern development practices." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#E91E63" />
        <link rel="canonical" href="https://abhik.cloud" />
      </Helmet>

      <Navbar />
      
      <main>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="spinner"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App