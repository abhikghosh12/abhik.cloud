'use client'

import { useState, useEffect } from 'react'

export default function ProfileImage() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    // Try multiple image sources
    const imageSources = [
      '/images/profile/profile.png',
      '/images/profile/profile.jpg', 
      '/images/profile/profile.jpeg',
      '/public/images/profile/profile.png', // Alternative path
      '/profile.png' // Fallback in root
    ]

    let currentIndex = 0

    const tryNextImage = () => {
      if (currentIndex >= imageSources.length) {
        console.log('All image sources failed')
        setImageError(true)
        return
      }

      const img = new Image()
      const currentSrc = imageSources[currentIndex]
      
      img.onload = () => {
        console.log(`Profile image loaded successfully: ${currentSrc}`)
        setImageSrc(currentSrc)
        setImageLoaded(true)
        setImageError(false)
      }
      
      img.onerror = () => {
        console.log(`Failed to load: ${currentSrc}`)
        currentIndex++
        tryNextImage()
      }
      
      console.log(`Attempting to load: ${currentSrc}`)
      img.src = currentSrc
    }

    tryNextImage()
  }, [])

  // Show loading state briefly
  if (!imageLoaded && !imageError) {
    return (
      <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-gray-200 mb-4 bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Show fallback if all images failed
  if (imageError || !imageSrc) {
    return (
      <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-gray-200 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
        <span className="text-white font-bold text-4xl">AG</span>
      </div>
    )
  }

  return (
    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-gray-200 mb-4 bg-white">
      <img 
        src={imageSrc}
        alt="Abhik Ghosh - Cloud Architect" 
        className="w-full h-full object-cover"
        onError={() => {
          console.log('Image failed to load in final render')
          setImageError(true)
        }}
      />
    </div>
  )
}
