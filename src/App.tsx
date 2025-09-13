import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/OptimizedHomePage'))
const ResumePage = lazy(() => import('@/pages/ResumePage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const CertificatesPage = lazy(() => import('@/pages/CertificatesPage'))
const AppointmentPage = lazy(() => import('@/pages/AppointmentPage'))
const BlogsPage = lazy(() => import('@/pages/BlogsPage'))

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Abhik Ghosh | Cloud Architect | Cloud services | Machine learning | AI</title>
        <meta 
          name="description" 
          content="Providing solutions for IoT infrastructure, machine learning and data analytics.The frontend, backend software and hardware solutions are provided. Cloud solution based on Azure and AWS platform." 
        />
        <meta name="keywords" content="Learn., Discover., Explore." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#E91E63" />
        <meta name="google-site-verification" content="Htp9RI-m8y5W5K4Y-lWoNDq3zcN6bacAmqp4VCl0GP0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Abhik Ghosh | Cloud Architect | Cloud services | Machine learning | AI" />
        <meta property="og:description" content="Providing solutions for IoT infrastructure, machine learning and data analytics.The frontend, backend software and hardware solutions are provided. Cloud solution based on Azure and AWS platform." />
        <meta property="og:image" content="https://static.wixstatic.com/media/9d2000_65f7b33e77f44abfb69303edcbae1896~mv2.jpg/v1/fill/w_960,h_960,al_c/9d2000_65f7b33e77f44abfb69303edcbae1896~mv2.jpg" />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="960" />
        <meta property="og:url" content="https://abhik.cloud" />
        <meta property="og:site_name" content="Abhik Ghosh" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhik Ghosh | Cloud Architect | Cloud services | Machine learning | AI" />
        <meta name="twitter:description" content="Providing solutions for IoT infrastructure, machine learning and data analytics.The frontend, backend software and hardware solutions are provided. Cloud solution based on Azure and AWS platform." />
        <meta name="twitter:image" content="https://static.wixstatic.com/media/9d2000_65f7b33e77f44abfb69303edcbae1896~mv2.jpg/v1/fill/w_960,h_960,al_c/9d2000_65f7b33e77f44abfb69303edcbae1896~mv2.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.abhik-ghosh.com/",
            "name": "Abhik Ghosh",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49 17665979446",
              "contactType": "Customer service"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "Abhik Ghosh",
            "url": "https://abhik.cloud",
            "image": "https://static.wixstatic.com/media/a27d24_5ee66533b092467abfb5d1a99967715b~mv2.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE"
            },
            "telephone": "4917665979446"
          })}
        </script>
        
        <link rel="canonical" href="https://abhik.cloud" />
        <link rel="alternate" href="https://abhik.cloud/blog-feed.xml" type="application/rss+xml" title="Abhik Ghosh - RSS" />
      </Helmet>

      <Navbar />
      
      <main className="main-content">
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
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App