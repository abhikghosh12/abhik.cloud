import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import ContactSection from '@/components/sections/ContactSection'

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <Helmet>
        <title>Contact | Abhik Ghosh</title>
        <meta name="description" content="Get in touch with Abhik Ghosh for cloud architecture and DevSecOps projects" />
      </Helmet>
      
      <ContactSection />
    </motion.div>
  )
}