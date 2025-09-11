import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SkillsSection from '@/components/sections/SkillsSection'

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <Helmet>
        <title>Skills | Abhik Ghosh</title>
        <meta name="description" content="Technical skills and expertise of Abhik Ghosh in cloud architecture, DevSecOps, and AI/ML" />
      </Helmet>
      
      <SkillsSection />
    </motion.div>
  )
}