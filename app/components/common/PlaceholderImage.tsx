'use client'

interface PlaceholderImageProps {
  width?: number
  height?: number
  text?: string
  className?: string
}

export default function PlaceholderImage({ 
  width = 400, 
  height = 300, 
  text = 'Image', 
  className = '' 
}: PlaceholderImageProps) {
  return (
    <div 
      className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
      style={{ width, height }}
    >
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}