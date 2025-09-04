'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Sphere, Html } from '@react-three/drei'
import * as THREE from 'three'

// Enhanced 3D Hero with Interactive Particles
export function HeroVisualization() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <Environment preset="studio" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      
      <AIBrainCenter />
      <OrbitingAgents />
      <ParticleConnections />
      <FloatingMetrics />
      
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
    </Canvas>
  )
}

// Central AI Brain
function AIBrainCenter() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.9}
          roughness={0.1}
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  )
}

// Orbiting Agent Nodes
function OrbitingAgents() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const agents = useMemo(() => {
    const colors = ['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316']
    return colors.map((color, i) => ({
      color,
      position: [
        Math.cos((i * Math.PI * 2) / 8) * 4,
        Math.sin((i * Math.PI * 4) / 8) * 0.8,
        Math.sin((i * Math.PI * 2) / 8) * 4
      ] as [number, number, number],
      speed: 1.8 + i * 0.3
    }))
  }, [])

  return (
    <group ref={groupRef}>
      {agents.map((agent, i) => (
        <Float key={i} speed={agent.speed} rotationIntensity={0.4}>
          <Sphere args={[0.4, 32, 32]} position={agent.position}>
            <meshStandardMaterial
              color={agent.color}
              metalness={0.8}
              roughness={0.2}
              emissive={agent.color}
              emissiveIntensity={0.1}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

// Particle Connection System
function ParticleConnections() {
  const particlesRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      // Update particle positions for dynamic effect
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  const { positions, colors } = useMemo(() => {
    const particleCount = 150
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      // Create particles in a sphere around the center
      const radius = 2 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      // Random colors with purple/pink theme
      const colorChoice = Math.random()
      if (colorChoice < 0.5) {
        colors[i * 3] = 0.54 // Purple-ish
        colors[i * 3 + 1] = 0.36
        colors[i * 3 + 2] = 0.96
      } else {
        colors[i * 3] = 0.92 // Pink-ish
        colors[i * 3 + 1] = 0.30
        colors[i * 3 + 2] = 0.60
      }
    }
    
    return { positions, colors }
  }, [])
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} transparent opacity={0.8} vertexColors />
    </points>
  )
}

// Floating UI Metrics
function FloatingMetrics() {
  return (
    <>
      {/* AI Learning Indicator */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <Html
          position={[-3, 2, 2]}
          transform
          occlude
          distanceFactor={8}
        >
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl p-3 border border-white/20 min-w-[160px]">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">AI Learning...</span>
            </div>
            <div className="mt-1 text-[10px] text-gray-600 dark:text-gray-400">Processing 1,247 patterns</div>
          </div>
        </Html>
      </Float>

      {/* Performance Metric */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <Html
          position={[3, -2, 1]}
          transform
          occlude
          distanceFactor={6}
        >
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl p-3 text-white min-w-[120px] text-center">
            <div className="text-xl font-bold">75%</div>
            <div className="text-[10px] opacity-90">Cost Savings</div>
            <div className="text-[8px] opacity-75 mt-0.5">vs. competitors</div>
          </div>
        </Html>
      </Float>

      {/* Active Users */}
      <Float speed={2.2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Html
          position={[0, 3, -2]}
          transform
          occlude
          distanceFactor={10}
        >
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-2xl p-3 text-white text-center w-16 h-16 flex flex-col items-center justify-center">
            <div className="text-xs font-bold">12K+</div>
            <div className="text-[8px] opacity-90">Users</div>
          </div>
        </Html>
      </Float>
    </>
  )
}