'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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
import { HeroVisualization } from '@/components/3d/hero-visualization'
import { cn, formatNumber } from '@/lib/utils'

// Loading fallback for 3D components
function HeroFallback() {
  return (
    <div className="h-[600px] lg:h-[700px] relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin mx-auto mb-4 flex items-center justify-center">
          <Brain className="h-8 w-8 text-white" />
        </div>
        <p className="text-sm text-muted-foreground">Loading AI Visualization...</p>
      </div>
    </div>
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
  
  return <span>{formatNumber(count)}{suffix}</span>
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, gradient, delay = 0 }: {
  icon: any,
  title: string,
  description: string,
  gradient: string,
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden group">
        <CardHeader className="pb-4">
          <div className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {description}
          </CardDescription>
        </CardContent>
        
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  )
}

// Integration Card Component
function IntegrationCard({ integration, index }: { integration: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [liveMetrics, setLiveMetrics] = useState({ 
    connections: Math.floor(Math.random() * 10000) + 1000,
    status: 'active' 
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        connections: prev.connections + Math.floor(Math.random() * 5),
        status: Math.random() > 0.1 ? 'active' : 'syncing'
      }))
    }, 3000 + index * 500) // Stagger updates
    
    return () => clearInterval(interval)
  }, [index])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-12 h-12 rounded-xl ${integration.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <integration.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${liveMetrics.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
              <span className="text-xs text-muted-foreground capitalize">{liveMetrics.status}</span>
            </div>
          </div>
          <CardTitle className="text-lg font-bold group-hover:text-purple-600 transition-colors">
            {integration.name}
          </CardTitle>
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
                {formatNumber(liveMetrics.connections)}
              </motion.span>
            </div>
            
            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: '0%' }}
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
                  className="text-xs text-muted-foreground bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg"
                >
                  ✨ Real-time sync • 🚀 Advanced automation • 🔒 Enterprise security
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
        
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  )
}

// Main Landing Page
export default function LandingPage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
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
      
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
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
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient"
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
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch the Magic (2min)
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Social Proof */}
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
                    <AnimatedCounter end={12847} />+
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
            
            {/* Right Side - 3D Visualization */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[600px] lg:h-[700px] relative"
            >
              <Suspense fallback={<HeroFallback />}>
                <HeroVisualization />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
                { label: "Connected Apps", value: 500 },
                { label: "Data Points Synced", value: 2300000, suffix: "" },
                { label: "Automations Running", value: 45000 },
                { label: "Hours Saved Daily", value: 847, suffix: "h" }
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
                    <AnimatedCounter end={stat.value} suffix={stat.suffix || "+"} />
                  </motion.div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              delay={0}
            />
            
            <FeatureCard
              icon={Heart}
              title="Accessible Luxury"
              description="Premium AI capabilities for everyone. No coding required, just pure creative expression amplified by artificial intelligence."
              gradient="bg-gradient-to-r from-pink-500 to-rose-500"
              delay={0.1}
            />
            
            <FeatureCard
              icon={TrendingUp}
              title="Viral Growth Engine"
              description="Your best agents become trending content. Earn recognition, build following, and monetize your AI creativity."
              gradient="bg-gradient-to-r from-purple-500 to-indigo-500"
              delay={0.2}
            />
            
            {/* Rolex DNA */}
            <FeatureCard
              icon={Shield}
              title="Enterprise-Grade Security"
              description="Swiss-level precision in security. SSO integration, audit logs, and compliance that Fortune 500 companies trust."
              gradient="bg-gradient-to-r from-emerald-500 to-teal-500"
              delay={0.3}
            />
            
            <FeatureCard
              icon={Zap}
              title="Multi-Model Orchestration"
              description="Our AI router selects the optimal model for each task, delivering 75% cost savings while maintaining peak performance."
              gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
              delay={0.4}
            />
            
            <FeatureCard
              icon={Infinity}
              title="Perpetual Reliability"
              description="Built to last generations. 99.9% uptime, predictable pricing, and architecture that scales with your ambitions."
              gradient="bg-gradient-to-r from-slate-500 to-gray-500"
              delay={0.5}
            />
            
            {/* Apple DNA */}
            <FeatureCard
              icon={Sparkles}
              title="Intuitive Magic"
              description="Drag, drop, done. Natural language commands. 3D visualizations. Technology that feels like magic, works like clockwork."
              gradient="bg-gradient-to-r from-violet-500 to-purple-500"
              delay={0.6}
            />
            
            <FeatureCard
              icon={Brain}
              title="Meta-Intelligence"
              description="AI that learns from you, anticipates your needs, and amplifies your creative potential. The future of human-AI collaboration."
              gradient="bg-gradient-to-r from-fuchsia-500 to-pink-500"
              delay={0.7}
            />
            
            <FeatureCard
              icon={Globe}
              title="Ecosystem Integration"
              description="Seamlessly connects with your existing tools. One platform, infinite possibilities, zero friction."
              gradient="bg-gradient-to-r from-green-500 to-emerald-500"
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  Start Building Now
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                >
                  Schedule Demo
                </Button>
              </motion.div>
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
                <div className="text-center">
                  <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Demo video coming soon...</p>
                </div>
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