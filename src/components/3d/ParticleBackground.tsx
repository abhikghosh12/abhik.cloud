import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleSystemProps {
  count?: number
}

function ParticleSystem({ count = 2000 }: ParticleSystemProps) {
  const ref = useRef<THREE.Points>(null!)
  
  // Generate random positions for particles
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20 // x
      positions[i3 + 1] = (Math.random() - 0.5) * 20 // y
      positions[i3 + 2] = (Math.random() - 0.5) * 20 // z
    }
    return positions
  }, [count])

  // Generate random colors for particles
  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3)
    const colorArray = [
      new THREE.Color('#6366f1'), // Primary
      new THREE.Color('#8b5cf6'), // Secondary  
      new THREE.Color('#06b6d4'), // Accent
      new THREE.Color('#10b981'), // Success
    ]
    
    for (let i = 0; i < count; i++) {
      const color = colorArray[Math.floor(Math.random() * colorArray.length)]
      const i3 = i * 3
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }
    return colors
  }, [count])

  // Animate particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
      
      // Move particles
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.01 // Move down
        
        // Reset particle when it goes too low
        if (positions[i + 1] < -10) {
          positions[i + 1] = 10
          positions[i] = (Math.random() - 0.5) * 20
          positions[i + 2] = (Math.random() - 0.5) * 20
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Group>(null!)

  // Create floating geometric shapes
  const shapes = useMemo(() => {
    const shapes = []
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.6, 8),
      new THREE.TetrahedronGeometry(0.4),
      new THREE.OctahedronGeometry(0.35)
    ]

    for (let i = 0; i < 12; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6),
        wireframe: Math.random() > 0.5,
        transparent: true,
        opacity: 0.6
      })

      shapes.push({
        geometry,
        material,
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        ],
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        ],
        rotationSpeed: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ]
      })
    }
    return shapes
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.children.forEach((child, index) => {
        const shape = shapes[index]
        child.rotation.x += shape.rotationSpeed[0]
        child.rotation.y += shape.rotationSpeed[1]
        child.rotation.z += shape.rotationSpeed[2]
        
        // Floating motion
        child.position.y = shape.position[1] + Math.sin(state.clock.elapsedTime + index) * 0.5
      })
    }
  })

  return (
    <group ref={meshRef}>
      {shapes.map((shape, index) => (
        <mesh
          key={index}
          geometry={shape.geometry}
          material={shape.material}
          position={shape.position as [number, number, number]}
          rotation={shape.rotation as [number, number, number]}
        />
      ))}
    </group>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleSystem count={1500} />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}
