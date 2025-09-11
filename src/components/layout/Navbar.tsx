import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Mail, Sun, Moon, Monitor } from 'lucide-react'
import { useAppStore } from '@/stores/appStore'
import { cn } from '@/utils/cn'

const navItems = [
  { id: 'home', label: 'Home', href: '#home', icon: Home },
  { id: 'about', label: 'About', href: '#about', icon: User },
  { id: 'skills', label: 'Skills', href: '#skills', icon: Code },
  { id: 'experience', label: 'Experience', href: '#experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', href: '#projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
]

const themeOptions = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  
  const { 
    theme, 
    setTheme, 
    isMobileMenuOpen, 
    toggleMobileMenu, 
    setCurrentSection 
  } = useAppStore()

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id.replace('#', '')))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          const sectionId = navItems[i].id
          if (sectionId !== activeSection) {
            setActiveSection(sectionId)
            setCurrentSection(sectionId)
          }
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, setCurrentSection])

  const handleNavClick = (_href: string, id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setActiveSection(id)
    setCurrentSection(id)
    
    if (isMobileMenuOpen) {
      toggleMobileMenu()
    }
  }

  const getCurrentThemeIcon = () => {
    const themeOption = themeOptions.find(option => option.value === theme)
    return themeOption?.icon || Monitor
  }

  const ThemeIcon = getCurrentThemeIcon()

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg' 
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AG</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-heading font-bold text-xl">
                  Abhik <span className="text-primary-400">Ghosh</span>
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
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    activeSection === item.id
                      ? 'text-primary-400 bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-lg border border-primary-400/30"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Theme Selector & Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              {/* Theme Selector */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className="p-2 rounded-lg bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <ThemeIcon className="w-5 h-5" />
                </motion.button>

                <AnimatePresence>
                  {showThemeMenu && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 top-12 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-xl py-2 min-w-[120px]"
                    >
                      {themeOptions.map((option) => {
                        const OptionIcon = option.icon
                        return (
                          <motion.button
                            key={option.value}
                            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            onClick={() => {
                              setTheme(option.value as any)
                              setShowThemeMenu(false)
                            }}
                            className={cn(
                              'flex items-center space-x-2 w-full px-3 py-2 text-sm transition-colors',
                              theme === option.value 
                                ? 'text-primary-400' 
                                : 'text-white/80 hover:text-white'
                            )}
                          >
                            <OptionIcon className="w-4 h-4" />
                            <span>{option.label}</span>
                          </motion.button>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
                  <h2 className="text-white font-heading font-bold text-xl">
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
                        className={cn(
                          'flex items-center space-x-3 w-full px-6 py-4 text-left transition-all duration-200',
                          activeSection === item.id
                            ? 'text-primary-400 bg-white/10 border-r-2 border-primary-400'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        )}
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

      {/* Click outside handler for theme menu */}
      {showThemeMenu && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowThemeMenu(false)}
        />
      )}
    </>
  )
}
