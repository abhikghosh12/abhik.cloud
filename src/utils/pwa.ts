/**
 * Progressive Web App (PWA) utilities
 * Handles service worker registration and PWA features
 */

let swRegistration: ServiceWorkerRegistration | null = null

/**
 * Register service worker for PWA functionality
 */
export async function registerSW(): Promise<ServiceWorkerRegistration | null> {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('SW registered: ', registration)
      swRegistration = registration

      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New update available
              showUpdateNotification()
            }
          })
        }
      })

      return registration
    } catch (error) {
      console.log('SW registration failed: ', error)
      return null
    }
  }
  return null
}

/**
 * Unregister service worker
 */
export async function unregisterSW(): Promise<boolean> {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready
      await registration.unregister()
      console.log('SW unregistered')
      return true
    } catch (error) {
      console.log('SW unregistration failed: ', error)
      return false
    }
  }
  return false
}

/**
 * Update service worker
 */
export async function updateSW(): Promise<void> {
  if (swRegistration) {
    try {
      await swRegistration.update()
      window.location.reload()
    } catch (error) {
      console.log('SW update failed: ', error)
    }
  }
}

/**
 * Show update notification to user
 */
function showUpdateNotification(): void {
  // Create update notification
  const notification = document.createElement('div')
  notification.className = `
    fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-lg shadow-lg 
    flex items-center space-x-3 z-50 max-w-sm
  `
  notification.innerHTML = `
    <div class="flex-1">
      <p class="font-medium">New version available!</p>
      <p class="text-sm opacity-90">Update to get the latest features.</p>
    </div>
    <button id="update-btn" class="bg-white text-primary-600 px-3 py-1 rounded text-sm font-medium">
      Update
    </button>
    <button id="dismiss-btn" class="text-white/80 hover:text-white">
      ×
    </button>
  `

  document.body.appendChild(notification)

  // Handle update button click
  const updateBtn = notification.querySelector('#update-btn')
  updateBtn?.addEventListener('click', () => {
    updateSW()
    document.body.removeChild(notification)
  })

  // Handle dismiss button click
  const dismissBtn = notification.querySelector('#dismiss-btn')
  dismissBtn?.addEventListener('click', () => {
    document.body.removeChild(notification)
  })

  // Auto remove after 10 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      document.body.removeChild(notification)
    }
  }, 10000)
}

/**
 * Check if app can be installed (PWA)
 */
export function canInstallPWA(): boolean {
  return 'beforeinstallprompt' in window
}

/**
 * Show PWA install prompt
 */
let deferredPrompt: any = null

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  deferredPrompt = e
  showInstallButton()
})

function showInstallButton(): void {
  const installBtn = document.createElement('button')
  installBtn.className = `
    fixed bottom-4 left-4 bg-secondary-600 text-white p-3 rounded-full shadow-lg
    hover:bg-secondary-700 transition-colors z-50 flex items-center space-x-2
  `
  installBtn.innerHTML = `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 8m4-4v12">
      </path>
    </svg>
    <span class="text-sm font-medium">Install App</span>
  `

  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)
      deferredPrompt = null
      document.body.removeChild(installBtn)
    }
  })

  document.body.appendChild(installBtn)

  // Auto hide after 15 seconds
  setTimeout(() => {
    if (document.body.contains(installBtn)) {
      document.body.removeChild(installBtn)
    }
  }, 15000)
}

/**
 * Check if app is running as PWA
 */
export function isPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true
}

/**
 * Get PWA display mode
 */
export function getPWADisplayMode(): string {
  if (isPWA()) {
    return 'standalone'
  }
  if (window.matchMedia('(display-mode: minimal-ui)').matches) {
    return 'minimal-ui'
  }
  if (window.matchMedia('(display-mode: fullscreen)').matches) {
    return 'fullscreen'
  }
  return 'browser'
}

/**
 * Check if device supports PWA features
 */
export function supportsPWA(): boolean {
  return 'serviceWorker' in navigator && 
         'PushManager' in window && 
         'Notification' in window
}
