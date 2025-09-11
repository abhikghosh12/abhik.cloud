import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.2 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
}

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <Helmet>
        <title>404 - Page Not Found | Abhik Ghosh</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="text-center max-w-md">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <AlertTriangle className="w-12 h-12 text-red-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4 font-heading"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/70 mb-8 leading-relaxed"
        >
          Oops! The page you're looking for seems to have wandered off into the digital void. 
          Don't worry, even the best architects sometimes take wrong turns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="btn btn-primary w-full flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="btn btn-outline text-white border-white/30 hover:bg-white hover:text-primary-900 w-full"
          >
            Go Back
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <p className="text-white/50 text-sm">
            Need help? Contact me at{' '}
            <a 
              href="mailto:abhikghosh87@gmail.com" 
              className="text-primary-400 hover:underline"
            >
              abhikghosh87@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-8 h-8 bg-primary-500/20 rounded-lg"
        />
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-16 w-6 h-6 bg-secondary-500/20 rounded-full"
        />
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-4 h-4 bg-accent-500/20 rotate-45"
        />
      </div>
    </motion.div>
  )
}
