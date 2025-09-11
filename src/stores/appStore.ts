import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { AppState, AppActions } from '@/types'

interface AppStore extends AppState, AppActions {}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // State
      theme: 'system',
      currentSection: 'home',
      isLoading: false,
      isMobileMenuOpen: false,
      isContactModalOpen: false,

      // Actions
      setTheme: (theme) => {
        set({ theme })
        
        // Apply theme to document
        const root = document.documentElement
        if (theme === 'dark') {
          root.classList.add('dark')
        } else if (theme === 'light') {
          root.classList.remove('dark')
        } else {
          // System theme
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          if (prefersDark) {
            root.classList.add('dark')
          } else {
            root.classList.remove('dark')
          }
        }
      },

      setCurrentSection: (section) => {
        set({ currentSection: section })
        
        // Update URL without page reload
        if (section !== 'home') {
          window.history.replaceState(null, '', `#${section}`)
        } else {
          window.history.replaceState(null, '', '/')
        }
      },

      setLoading: (isLoading) => set({ isLoading }),

      toggleMobileMenu: () => {
        const { isMobileMenuOpen } = get()
        set({ isMobileMenuOpen: !isMobileMenuOpen })
        
        // Prevent body scroll when menu is open
        if (!isMobileMenuOpen) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      },

      toggleContactModal: () => {
        const { isContactModalOpen } = get()
        set({ isContactModalOpen: !isContactModalOpen })
        
        // Prevent body scroll when modal is open
        if (!isContactModalOpen) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      },
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        theme: state.theme 
      }),
    }
  )
)

// Initialize theme on app start
if (typeof window !== 'undefined') {
  const { setTheme } = useAppStore.getState()
  const savedTheme = localStorage.getItem('app-store')
  
  if (savedTheme) {
    try {
      const parsedTheme = JSON.parse(savedTheme)
      setTheme(parsedTheme.state?.theme || 'system')
    } catch {
      setTheme('system')
    }
  } else {
    setTheme('system')
  }
}
