import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home', href: '/', icon: Home },
  { id: 'about', label: 'About', href: '/about', icon: User },
  { id: 'skills', label: 'Skills', href: '/skills', icon: Code },
  { id: 'experience', label: 'Experience', href: '/experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', href: '/projects', icon: Code },
  { id: 'certificates', label: 'Certificates', href: '/certificates', icon: Briefcase },
  { id: 'contact', label: 'Contact', href: '/contact', icon: Mail },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle active section detection based on current path
  useEffect(() => {
    const path = window.location.pathname
    const currentItem = navItems.find(item => item.href === path)
    if (currentItem) {
      setActiveSection(currentItem.id)
    }
  }, [])

  const handleNavClick = (href: string, id: string) => {
    window.location.href = href
    setActiveSection(id)
    
    if (isMobileMenuOpen) {
      toggleMobileMenu()
    }
  }



  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AG</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-xl">
                  Abhik <span className="text-blue-400">Ghosh</span>
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-lg border border-blue-400/30"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Theme Selector & Mobile Menu Button */}
            <div className="flex items-center space-x-2">


              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white/10 backdrop-blur-xl border-l border-white/20 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="text-white font-bold text-xl">
                    Menu
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg bg-white/10 text-white/80 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 py-6">
                  {navItems.map((item, index) => {
                    const ItemIcon = item.icon
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                        onClick={() => handleNavClick(item.href, item.id)}
                        className={`flex items-center space-x-3 w-full px-6 py-4 text-left transition-all duration-200 ${
                          activeSection === item.id
                            ? 'text-blue-400 bg-white/10 border-r-2 border-blue-400'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <ItemIcon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    )
                  })}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                  <p className="text-white/60 text-sm text-center">
                    © 2025 Abhik Ghosh
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </>
  )
}
