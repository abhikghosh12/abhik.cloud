import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import ExperienceSection from '@/components/sections/ExperienceSection'

export default function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <Helmet>
        <title>Experience | Abhik Ghosh</title>
        <meta name="description" content="Professional experience and career history of Abhik Ghosh" />
      </Helmet>
      
      <ExperienceSection />
    </motion.div>
  )
}