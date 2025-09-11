import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8
}

export default function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
    >
      <Helmet>
        <title>Abhik Ghosh | Cloud Architect | AI/ML Expert | DevSecOps Specialist</title>
        <meta 
          name="description" 
          content="Abhik Ghosh is a Cloud Architect at Capgemini specializing in DevSecOps, AI/ML, and cloud transformation. Expert in AWS, Azure, GCP, Kubernetes, and modern development practices with 5+ years of experience." 
        />
        <meta 
          name="keywords" 
          content="Cloud Architect, DevSecOps, AI/ML, AWS, Azure, GCP, Kubernetes, Docker, Terraform, Python, Machine Learning, Cloud Transformation, Capgemini" 
        />
        <link rel="canonical" href="https://abhik.cloud" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abhik Ghosh",
            "jobTitle": "Cloud Architect",
            "worksFor": {
              "@type": "Organization",
              "name": "Capgemini"
            },
            "url": "https://abhik.cloud",
            "sameAs": [
              "https://linkedin.com/in/abhikghosh",
              "https://github.com/abhikghosh12"
            ],
            "knowsAbout": [
              "Cloud Architecture",
              "DevSecOps",
              "AI/ML",
              "AWS",
              "Azure",
              "Google Cloud Platform",
              "Kubernetes",
              "Docker",
              "Terraform",
              "Python",
              "Machine Learning"
            ],
            "description": "Cloud Architect specializing in DevSecOps, AI/ML, and cloud transformation with expertise in AWS, Azure, and GCP."
          })}
        </script>
      </Helmet>

      {/* Main Content */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </motion.div>
  )
}
