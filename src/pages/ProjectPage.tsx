import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react'
import { getProjectById } from '@/data/projects'
import { cn } from '@/utils/cn'

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
}

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = id ? getProjectById(id) : null

  if (!project) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen pt-32 pb-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-white/70 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen pt-32 pb-20"
    >
      <Helmet>
        <title>{project.title} | Abhik Ghosh Portfolio</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.technologies.join(', ')} />
        <link rel="canonical" href={`https://abhik.cloud/project/${project.id}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${project.title} | Abhik Ghosh`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:url" content={`https://abhik.cloud/project/${project.id}`} />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="btn btn-ghost mb-8 text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
              project.status === 'in_progress' ? 'bg-blue-500/20 text-blue-400' :
              'bg-yellow-500/20 text-yellow-400'
            )}>
              {project.status.replace('_', ' ')}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-500/20 text-primary-400">
              {project.category}
            </span>
          </div>

          <h1 className="heading-1 text-white mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
            {project.longDescription || project.description}
          </p>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            {project.links.demo && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Demo
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </motion.a>
            )}
            {project.links.case_study && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.links.case_study}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Case Study
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Project Image */}
            <div className="card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Technologies */}
            <div className="card">
              <h3 className="heading-3 text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-white/10 rounded-lg text-white/90 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            {project.details.challenges && project.details.solutions && (
              <div className="card">
                <h3 className="heading-3 text-white mb-6">Challenges & Solutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Challenges</h4>
                    <ul className="space-y-2">
                      {project.details.challenges.map((challenge, index) => (
                        <li key={index} className="text-white/80 text-sm">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Solutions</h4>
                    <ul className="space-y-2">
                      {project.details.solutions.map((solution, index) => (
                        <li key={index} className="text-white/80 text-sm">
                          • {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Project Timeline */}
            {project.timeline && (
              <div className="card">
                <h3 className="heading-3 text-white mb-6">Project Timeline</h3>
                <div className="space-y-4">
                  {project.timeline.map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={cn(
                        "w-4 h-4 rounded-full mt-1 flex-shrink-0",
                        phase.completed ? 'bg-green-400' : 'bg-gray-400'
                      )} />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-white">{phase.phase}</h4>
                          <span className="text-sm text-white/60">({phase.duration})</span>
                        </div>
                        <p className="text-white/80 text-sm">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Project Info */}
            <div className="card">
              <h3 className="heading-3 text-white mb-4">Project Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.details.duration}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{project.details.team_size}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">{project.details.impact}</span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="card">
                <h3 className="heading-3 text-white mb-4">Key Metrics</h3>
                <div className="space-y-3">
                  {project.metrics.performance && (
                    <div>
                      <div className="text-sm text-white/60">Performance</div>
                      <div className="font-semibold text-primary-400">
                        {project.metrics.performance}
                      </div>
                    </div>
                  )}
                  {project.metrics.users && (
                    <div>
                      <div className="text-sm text-white/60">Users</div>
                      <div className="font-semibold text-secondary-400">
                        {project.metrics.users}
                      </div>
                    </div>
                  )}
                  {project.metrics.satisfaction && (
                    <div>
                      <div className="text-sm text-white/60">Satisfaction</div>
                      <div className="font-semibold text-green-400">
                        {project.metrics.satisfaction}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Role */}
            {project.details.role && (
              <div className="card">
                <h3 className="heading-3 text-white mb-2">My Role</h3>
                <p className="text-white/80 text-sm">{project.details.role}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
