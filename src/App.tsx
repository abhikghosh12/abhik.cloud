import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/layout/Navbar'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'))
const CertificatesPage = lazy(() => import('@/pages/CertificatesPage'))

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#0a192f] bg-pattern">
      <Helmet>
        <title>Abhik Ghosh | Cloud Architect | AI/ML Expert</title>
        <meta 
          name="description" 
          content="Cloud Architect at Capgemini specializing in DevSecOps, AI/ML, and cloud transformation. Expert in AWS, Azure, GCP, and modern development practices." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="canonical" href="https://abhik.cloud" />
      </Helmet>

      <Navbar />
      
      <main>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
