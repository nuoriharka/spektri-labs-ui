'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Text3D, Sphere } from '@react-three/drei'
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
  Heart
} from 'lucide-react'

// 3D Hero Animation Component
function HeroVisualization() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <Environment preset="studio" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      
      {/* Central AI Brain */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.8}
            roughness={0.2}
            emissive="#8b5cf6"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>
      
      {/* Orbiting Agent Nodes */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.3}>
          <Sphere
            args={[0.3, 32, 32]}
            position={[
              Math.cos((i * Math.PI * 2) / 6) * 3,
              Math.sin((i * Math.PI * 2) / 6) * 0.5,
              Math.sin((i * Math.PI * 2) / 6) * 3
            ]}
          >
            <meshStandardMaterial
              color={['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'][i]}
              metalness={0.6}
              roughness={0.3}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* Connecting Lines */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </Canvas>
  )
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])
  
  return <span>{count.toLocaleString()}{suffix}</span>
}

// Feature Card Component with Hover Effects
function FeatureCard({ icon: Icon, title, description, gradient }: {
  icon: any,
  title: string,
  description: string,
  gradient: string
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <CardHeader>
          <div className={`w-12 h-12 rounded-lg ${gradient} flex items-center justify-center mb-4`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Social Proof Component
function SocialProof() {
  const metrics = [
    { label: "Active Creators", value: 12500, suffix: "+" },
    { label: "Agents Created", value: 45000, suffix: "+" },
    { label: "Tasks Automated", value: 2300000, suffix: "+" },
    { label: "Cost Savings", value: 75, suffix: "%" }
  ]
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            <AnimatedCounter end={metric.value} suffix={metric.suffix} />
          </div>
          <div className="text-muted-foreground font-medium">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

// Main Landing Page Component
export default function LandingPage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Spektri.Labs
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
                Features
              </a>
              <a href="#community" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
                Community
              </a>
              <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
                Pricing
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  🚀 The Future of Work is Here
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                    Digital Workforce
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    On Your Terms
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Spektri.Labs combines the luxury of <strong>Fear of God</strong>, 
                  the precision of <strong>Rolex</strong>, and the magic of <strong>Apple</strong> 
                  to create AI agents that amplify human creativity and intelligence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start Creating Agents
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Social Proof Mini */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white dark:border-gray-900" />
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>12,500+</strong> creators building the future
                </div>
              </div>
            </motion.div>
            
            {/* Right Side - 3D Visualization */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[500px] lg:h-[600px] relative"
            >
              <HeroVisualization />
              
              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Agent Active</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">75%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Innovators Worldwide
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Join the community that's reshaping how humans and AI collaborate
            </p>
          </motion.div>
          
          <SocialProof />
        </div>
      </section>

      {/* Features Section - FOG + Rolex + Apple DNA */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Three Iconic DNA Combined
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Where Luxury Meets Precision Meets Magic
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              We've combined the community-driven luxury of Fear of God, 
              the unwavering reliability of Rolex, and the intuitive magic of Apple
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fear of God DNA */}
            <FeatureCard
              icon={Users}
              title="Community-Driven Creation"
              description="Remix culture meets AI. Fork any agent, make it yours, and share with the community. Build your reputation in the creator economy."
              gradient="bg-gradient-to-r from-amber-500 to-orange-500"
            />
            
            <FeatureCard
              icon={Heart}
              title="Accessible Luxury"
              description="Premium AI capabilities for everyone. No coding required, just pure creative expression amplified by artificial intelligence."
              gradient="bg-gradient-to-r from-pink-500 to-rose-500"
            />
            
            <FeatureCard
              icon={TrendingUp}
              title="Viral Growth Engine"
              description="Your best agents become trending content. Earn recognition, build following, and monetize your AI creativity."
              gradient="bg-gradient-to-r from-purple-500 to-indigo-500"
            />
            
            {/* Rolex DNA */}
            <FeatureCard
              icon={Shield}
              title="Enterprise-Grade Security"
              description="Swiss-level precision in security. SSO integration, audit logs, and compliance that Fortune 500 companies trust."
              gradient="bg-gradient-to-r from-emerald-500 to-teal-500"
            />
            
            <FeatureCard
              icon={Zap}
              title="Multi-Model Orchestration"
              description="Our AI router selects the optimal model for each task, delivering 75% cost savings while maintaining peak performance."
              gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
            />
            
            <FeatureCard
              icon={Infinity}
              title="Perpetual Reliability"
              description="Built to last generations. 99.9% uptime, predictable pricing, and architecture that scales with your ambitions."
              gradient="bg-gradient-to-r from-slate-500 to-gray-500"
            />
            
            {/* Apple DNA */}
            <FeatureCard
              icon={Sparkles}
              title="Intuitive Magic"
              description="Drag, drop, done. Natural language commands. 3D visualizations. Technology that feels like magic, works like clockwork."
              gradient="bg-gradient-to-r from-violet-500 to-purple-500"
            />
            
            <FeatureCard
              icon={Brain}
              title="Meta-Intelligence"
              description="AI that learns from you, anticipates your needs, and amplifies your creative potential. The future of human-AI collaboration."
              gradient="bg-gradient-to-r from-fuchsia-500 to-pink-500"
            />
            
            <FeatureCard
              icon={Globe}
              title="Ecosystem Integration"
              description="Seamlessly connects with your existing tools. One platform, infinite possibilities, zero friction."
              gradient="bg-gradient-to-r from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* How It Works - 3D Interactive */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              From Vision to Reality in Minutes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the Apple-level simplicity of creating AI agents that actually work
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Describe Your Vision",
                description: "Tell us what you want to achieve in natural language. Our AI understands context, intent, and nuance.",
                icon: Palette
              },
              {
                step: "02", 
                title: "Watch Magic Happen",
                description: "Our multi-model orchestration engine builds your agent, optimizing for cost and performance automatically.",
                icon: Code
              },
              {
                step: "03",
                title: "Share & Remix",
                description: "Deploy instantly, share with community, earn recognition. Others can remix your creation, amplifying your impact.",
                icon: Heart
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <item.icon className="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full p-1.5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Creator Spotlight
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the innovators who are reshaping industries with AI agents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Marketing Director",
                agent: "Content Amplifier Pro",
                impact: "300% increase in content output",
                avatar: "SC",
                gradient: "from-pink-400 to-rose-400"
              },
              {
                name: "Marcus Rodriguez", 
                role: "Solo Entrepreneur",
                agent: "Customer Service Oracle",
                impact: "24/7 support, 95% satisfaction",
                avatar: "MR",
                gradient: "from-blue-400 to-cyan-400"
              },
              {
                name: "Dr. Emily Watson",
                role: "Research Scientist",
                agent: "Data Analysis Wizard",
                impact: "Reduced analysis time by 80%",
                avatar: "EW", 
                gradient: "from-green-400 to-emerald-400"
              }
            ].map((creator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${creator.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    {creator.avatar}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">{creator.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{creator.role}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="font-semibold text-purple-600 dark:text-purple-400 mb-1">
                    {creator.agent}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {creator.impact}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                    Remix Agent
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                period: "forever",
                description: "Perfect for exploring AI automation",
                features: [
                  "3 AI agents",
                  "100 tasks/month", 
                  "Community access",
                  "Basic integrations",
                  "Remix unlimited agents"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Pro",
                price: "$29",
                period: "per month",
                description: "For serious creators and professionals",
                features: [
                  "Unlimited agents",
                  "1,000 tasks/month",
                  "Advanced integrations", 
                  "Priority support",
                  "Analytics dashboard",
                  "Custom branding"
                ],
                cta: "Start Free Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "$299",
                period: "per month",
                description: "For teams and organizations",
                features: [
                  "Everything in Pro",
                  "Unlimited tasks",
                  "SSO integration",
                  "Audit logs",
                  "Dedicated support",
                  "Custom deployment"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white' 
                    : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-purple-600">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                      /{plan.period}
                    </span>
                  </div>
                  <p className={`${plan.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        plan.popular ? 'bg-white/20' : 'bg-purple-100 dark:bg-purple-900'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          plan.popular ? 'bg-white' : 'bg-purple-600'
                        }`} />
                      </div>
                      <span className={plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Amplify Your Intelligence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the revolution where human creativity meets artificial intelligence. 
              Build agents that don't just automate—they innovate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Start Building Now
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
              >
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Spektri.Labs</span>
              </div>
              <p className="text-gray-400 mb-4">
                Where human creativity meets artificial intelligence.
              </p>
              <div className="flex space-x-4">
                {/* Social links would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Spektri.Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Play className="h-16 w-16 text-gray-400" />
              </div>
              <Button 
                variant="ghost" 
                className="mt-4 w-full"
                onClick={() => setIsVideoPlaying(false)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}