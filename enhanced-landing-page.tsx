'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Sphere, Html, useTexture } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Zap, 
  Brain, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Play, 
  Star, 
  TrendingUp,
  Shield,
  Infinity,
  Palette,
  Code,
  Globe,
  Heart,
  CheckCircle,
  ExternalLink,
  MousePointer,
  Workflow,
  Database,
  Cpu,
  Cloud,
  Lock,
  BarChart3,
  MessageSquare,
  Calendar,
  Mail,
  FileText,
  Image,
  Video,
  Mic,
  Camera,
  Headphones
} from 'lucide-react'
import * as THREE from 'three'

// Enhanced 3D Hero with Interactive Particles
function EnhancedHeroVisualization() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <Environment preset="studio" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      
      <group ref={groupRef}>
        {/* Central AI Brain - Enhanced */}
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
          <Sphere args={[1.8, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#8b5cf6"
              metalness={0.9}
              roughness={0.1}
              emissive="#8b5cf6"
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
        
        {/* Orbiting Agent Nodes - More Dynamic */}
        {[...Array(8)].map((_, i) => (
          <Float key={i} speed={1.8 + i * 0.3} rotationIntensity={0.4}>
            <Sphere
              args={[0.4, 32, 32]}
              position={[
                Math.cos((i * Math.PI * 2) / 8) * 4,
                Math.sin((i * Math.PI * 4) / 8) * 0.8,
                Math.sin((i * Math.PI * 2) / 8) * 4
              ]}
            >
              <meshStandardMaterial
                color={['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'][i]}
                metalness={0.8}
                roughness={0.2}
                emissive={['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'][i]}
                emissiveIntensity={0.1}
              />
            </Sphere>
          </Float>
        ))}
        
        {/* Connecting Particle Lines */}
        <ParticleConnections />
      </group>
      
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
    </Canvas>
  )
}

// Particle Connection System
function ParticleConnections() {
  const particlesRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })
  
  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  )
}

// Interactive Integration Card
function IntegrationCard({ integration, index }: { integration: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [liveMetrics, setLiveMetrics] = useState({ connections: 0, status: 'active' })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        connections: prev.connections + Math.floor(Math.random() * 3),
        status: Math.random() > 0.1 ? 'active' : 'syncing'
      }))
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-12 h-12 rounded-xl ${integration.gradient} flex items-center justify-center shadow-lg`}>
              <integration.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${liveMetrics.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
              <span className="text-xs text-muted-foreground capitalize">{liveMetrics.status}</span>
            </div>
          </div>
          <CardTitle className="text-lg font-bold">{integration.name}</CardTitle>
          <CardDescription className="text-sm">{integration.category}</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Active connections</span>
              <motion.span 
                key={liveMetrics.connections}
                initial={{ scale: 1.2, color: '#10b981' }}
                animate={{ scale: 1, color: '#6b7280' }}
                className="font-semibold"
              >
                {liveMetrics.connections.toLocaleString()}
              </motion.span>
            </div>
            
            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? '100%' : '60%' }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-muted-foreground"
                >
                  Real-time sync • Advanced automation • Enterprise security
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
        
        {/* Hover overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  )
}

// Enhanced CTA Section with Multiple Conversion Paths
function EnhancedCTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }
  
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-sm">
            🚀 Join the Intelligence Revolution
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your AI-Powered
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Future Starts Now
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't just automate tasks. Amplify intelligence. Join 12,500+ visionaries 
            building the future of human-AI collaboration.
          </p>
          
          {/* Multiple CTA Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 text-center shadow-2xl"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Start Creating</h3>
              <p className="text-gray-600 text-sm mb-4">Build your first AI agent in minutes</p>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Create Free Agent
              </Button>
              <p className="text-xs text-gray-500 mt-2">No credit card required</p>
            </motion.div>
            
            {/* Demo CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Watch Demo</h3>
              <p className="text-white/80 text-sm mb-4">See AI agents in action (2 min)</p>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                View Demo
              </Button>
              <p className="text-xs text-white/60 mt-2">No signup needed</p>
            </motion.div>
            
            {/* Enterprise CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-center text-white shadow-2xl"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-white/90 text-sm mb-4">Custom deployment & security</p>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                Contact Sales
              </Button>
              <p className="text-xs text-white/70 mt-2">SOC2 compliant</p>
            </motion.div>
          </div>
          
          {/* Email capture with social proof */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button 
                type="submit"
                className="bg-white text-purple-600 hover:bg-gray-100 px-6"
                disabled={isSubmitted}
              >
                {isSubmitted ? <CheckCircle className="h-4 w-4" /> : 'Join'}
              </Button>
            </form>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-white/70">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
          
          {/* Live counter */}
          <motion.div
            className="mt-8 text-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-white/80">
              <span className="font-bold text-yellow-400">1,247</span> people joined today
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// All.app Unified Platform Section
function AllAppSection() {
  const [activeTab, setActiveTab] = useState('dashboard')
  
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'agents', label: 'AI Agents', icon: Brain },
    { id: 'workflows', label: 'Workflows', icon: Workflow },
    { id: 'integrations', label: 'Integrations', icon: Globe }
  ]
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-6 py-2 text-sm bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 border-purple-200 dark:border-purple-700">
            🎯 The Last App You'll Ever Need
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to the
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Post-App Era
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Stop juggling 47 different apps. All.app unifies your entire digital workspace 
            into one intelligent, AI-powered platform that learns, adapts, and evolves with you.
          </p>
        </motion.div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Mock browser header */}
            <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white dark:bg-gray-600 rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                    all.app/dashboard
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dashboard content based on active tab */}
            <div className="p-8">
              {activeTab === 'dashboard' && <DashboardPreview />}
              {activeTab === 'agents' && <AgentsPreview />}
              {activeTab === 'workflows' && <WorkflowsPreview />}
              {activeTab === 'integrations' && <IntegrationsPreview />}
            </div>
          </div>
        </motion.div>
        
        {/* Key benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Zap,
              title: "10x Faster Workflows",
              description: "AI automatically optimizes your processes, eliminating bottlenecks before they happen."
            },
            {
              icon: Brain,
              title: "Learns Your Patterns", 
              description: "The more you use it, the smarter it gets. Predictive AI that anticipates your needs."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level encryption, SOC2 compliance, and zero-trust architecture built-in."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Dashboard Preview Components
function DashboardPreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Good morning, Sarah! 👋</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>12 agents working</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: "Tasks Automated Today", value: "247", change: "+23%" },
          { label: "Time Saved This Week", value: "18.5h", change: "+12%" },
          { label: "Cost Savings", value: "$2,847", change: "+45%" }
        ].map((metric, i) => (
          <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{metric.value}</div>
            <div className="text-sm text-green-600 dark:text-green-400">{metric.change}</div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
        <h4 className="font-semibold mb-4">Recent Activity</h4>
        <div className="space-y-3">
          {[
            "Email Agent processed 47 customer inquiries",
            "Data Agent updated 3 spreadsheets automatically", 
            "Content Agent published 2 social media posts"
          ].map((activity, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">{activity}</span>
              <span className="text-xs text-gray-500 ml-auto">2 min ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AgentsPreview() {
  const agents = [
    { name: "Email Assistant", status: "active", tasks: 47 },
    { name: "Data Analyzer", status: "learning", tasks: 23 },
    { name: "Content Creator", status: "active", tasks: 12 }
  ]
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Your AI Agents</h3>
        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
          <Sparkles className="h-4 w-4 mr-2" />
          Create New Agent
        </Button>
      </div>
      
      <div className="grid gap-4">
        {agents.map((agent, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium">{agent.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{agent.status}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{agent.tasks}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">tasks today</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WorkflowsPreview() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Active Workflows</h3>
      
      <div className="space-y-4">
        {[
          { name: "Customer Onboarding", steps: 5, completion: 80 },
          { name: "Content Pipeline", steps: 8, completion: 60 },
          { name: "Data Processing", steps: 3, completion: 100 }
        ].map((workflow, i) => (
          <div key={i} className="p-4 border border-gray-200 dark:border-gray-600 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="font-medium">{workflow.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{workflow.steps} steps</div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${workflow.completion}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{workflow.completion}% complete</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntegrationsPreview() {
  const integrations = [
    { name: "Slack", icon: MessageSquare, status: "connected" },
    { name: "Google Calendar", icon: Calendar, status: "connected" },
    { name: "Gmail", icon: Mail, status: "syncing" },
    { name: "Notion", icon: FileText, status: "connected" }
  ]
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Connected Apps</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {integrations.map((integration, i) => (
          <div key={i} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-xl">
            <div className="flex items-center space-x-3">
              <integration.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              <span className="font-medium">{integration.name}</span>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              integration.status === 'connected' 
                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
            }`}>
              {integration.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Main Enhanced Landing Page
export default function EnhancedLandingPage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Integration data
  const integrations = [
    { name: "Slack", icon: MessageSquare, category: "Communication", gradient: "bg-gradient-to-r from-purple-500 to-indigo-500" },
    { name: "Google Workspace", icon: Mail, category: "Productivity", gradient: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "Notion", icon: FileText, category: "Documentation", gradient: "bg-gradient-to-r from-gray-500 to-slate-500" },
    { name: "Salesforce", icon: BarChart3, category: "CRM", gradient: "bg-gradient-to-r from-blue-600 to-indigo-600" },
    { name: "Figma", icon: Palette, category: "Design", gradient: "bg-gradient-to-r from-pink-500 to-rose-500" },
    { name: "GitHub", icon: Code, category: "Development", gradient: "bg-gradient-to-r from-gray-600 to-gray-800" },
    { name: "Zoom", icon: Video, category: "Communication", gradient: "bg-gradient-to-r from-blue-500 to-blue-600" },
    { name: "Spotify", icon: Headphones, category: "Media", gradient: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { name: "Dropbox", icon: Cloud, category: "Storage", gradient: "bg-gradient-to-r from-blue-400 to-blue-500" }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 relative overflow-x-hidden">
      
      {/* Cursor follower effect */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Navigation - Enhanced */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-white/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Spektri.Labs
              </span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Integrations', 'Pricing', 'All.app'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="font-medium">Sign In</Button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Enhanced Content */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 relative z-10"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900 dark:to-pink-900 dark:text-purple-300 border-0 shadow-lg">
                    🚀 Think Different. Work Intelligent.
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    The Future of Work
                  </motion.span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Isn't Coming.
                  </span>
                  <br />
                  <motion.span 
                    className="text-gray-900 dark:text-white"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    It's Here.
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Where <strong>Fear of God's</strong> accessible luxury meets <strong>Rolex's</strong> unwavering precision 
                  and <strong>Apple's</strong> intuitive magic. Create AI agents that don't just automate—they <em>innovate</em>.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <span className="relative z-10 flex items-center">
                      Become Superhuman Today
                      <Sparkles className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-lg"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch the Magic (2min)
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Social Proof */}
              <motion.div 
                className="flex items-center space-x-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-3 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <motion.strong 
                    className="text-purple-600 dark:text-purple-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    12,847+
                  </motion.strong> visionaries building the future
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">4.9/5</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Enhanced 3D Visualization */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[600px] lg:h-[700px] relative"
            >
              <EnhancedHeroVisualization />
              
              {/* Enhanced Floating UI Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-white/20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-sm font-medium">AI Agent Learning...</span>
                </div>
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">Processing 1,247 patterns</div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  x: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl p-4 text-white"
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    75%
                  </motion.div>
                  <div className="text-sm opacity-90">Cost Savings</div>
                  <div className="text-xs opacity-75 mt-1">vs. competitors</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Integrations Section */}
      <section id="integrations" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border-blue-200 dark:border-blue-700">
              🔗 Your Tools. Our Intelligence. Limitless Potential.
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Everything Connected.
              </span>
              <br />
              Everything Intelligent.
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stop managing apps. Start managing dreams. Connect your entire digital ecosystem 
              and watch AI transform chaos into orchestrated brilliance.
            </p>
          </motion.div>

          {/* Integration Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <IntegrationCard key={integration.name} integration={integration} index={index} />
            ))}
          </div>
          
          {/* Live Integration Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Real-Time Integration Power</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Connected Apps", value: "500+" },
                { label: "Data Points Synced", value: "2.3M+" },
                { label: "Automations Running", value: "45K+" },
                { label: "Time Saved Daily", value: "847h" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div 
                    className="text-3xl font-bold mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <EnhancedCTASection />

      {/* All.app Section */}
      <AllAppSection />

      {/* Enhanced Footer */}
      <footer className="py-16 bg-gray-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <motion.div 
                className="flex items-center space-x-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Spektri.Labs</span>
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Where human creativity meets artificial intelligence. 
                Building the future of work, one intelligent agent at a time.
              </p>
              <div className="flex space-x-4">
                {/* Social links would go here */}
              </div>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Integrations", "Pricing", "Enterprise", "API", "Security"]
              },
              {
                title: "Community", 
                links: ["Discord", "GitHub", "Documentation", "Blog", "Tutorials", "Support"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Privacy", "Terms", "Contact", "Press Kit"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <motion.a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 Spektri.Labs. All rights reserved. Built with 🧠 and ❤️ for the future.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <motion.div 
                  className="flex items-center space-x-1"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>All systems operational</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}