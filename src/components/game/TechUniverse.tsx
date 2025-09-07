// src/components/game/TechUniverse.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

export default function TechUniverse() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas || !ctx) return
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resizeCanvas()
    
    // Get canvas dimensions safely
    const getCanvasWidth = () => canvas?.offsetWidth || 800
    const getCanvasHeight = () => canvas?.offsetHeight || 400
    
    // Particle system
    class TechParticle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      connections: number[]
      pulsePhase: number
      
      constructor() {
        this.x = Math.random() * getCanvasWidth()
        this.y = Math.random() * getCanvasHeight()
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.color = ['#a855f7', '#ec4899', '#3b82f6', '#06b6d4'][Math.floor(Math.random() * 4)]
        this.connections = []
        this.pulsePhase = Math.random() * Math.PI * 2
      }
      
      update() {
        // Move particle
        this.x += this.vx
        this.y += this.vy
        
        // Bounce off walls
        const width = getCanvasWidth()
        const height = getCanvasHeight()
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
        
        // Pulse
        this.pulsePhase += 0.02
        
        // Mouse interaction
        const dx = mousePos.x - this.x
        const dy = mousePos.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          this.vx += dx * 0.0001
          this.vy += dy * 0.0001
        }
      }
      
      draw(context: CanvasRenderingContext2D) {
        // Glowing particle
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 1.5
        
        // Outer glow
        const gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * pulse * 4)
        gradient.addColorStop(0, this.color + '40')
        gradient.addColorStop(1, this.color + '00')
        context.fillStyle = gradient
        context.beginPath()
        context.arc(this.x, this.y, this.radius * pulse * 4, 0, Math.PI * 2)
        context.fill()
        
        // Core
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2)
        context.fill()
      }
    }
    
    // Create particles
    const particles: TechParticle[] = []
    for (let i = 0; i < 50; i++) {
      particles.push(new TechParticle())
    }
    
    // Digital grid lines
    class GridLine {
      points: { x: number; y: number }[]
      color: string
      
      constructor() {
        this.points = []
        this.color = '#a855f740'
        
        // Create random tech pattern
        const startX = Math.random() * getCanvasWidth()
        const startY = Math.random() * getCanvasHeight()
        const segments = 3 + Math.floor(Math.random() * 3)
        
        for (let i = 0; i < segments; i++) {
          this.points.push({
            x: startX + (Math.random() - 0.5) * 200,
            y: startY + (Math.random() - 0.5) * 200
          })
        }
      }
      
      draw(context: CanvasRenderingContext2D) {
        context.strokeStyle = this.color
        context.lineWidth = 1
        context.beginPath()
        
        this.points.forEach((point, i) => {
          if (i === 0) {
            context.moveTo(point.x, point.y)
          } else {
            context.lineTo(point.x, point.y)
          }
        })
        
        context.stroke()
        
        // Draw nodes
        this.points.forEach(point => {
          context.fillStyle = '#a855f7'
          context.beginPath()
          context.arc(point.x, point.y, 2, 0, Math.PI * 2)
          context.fill()
        })
      }
    }
    
    const gridLines: GridLine[] = []
    for (let i = 0; i < 10; i++) {
      gridLines.push(new GridLine())
    }
    
    // Animation loop
    let animationId: number
    
    function animate() {
      if (!ctx || !canvas) return
      
      // Clear with fade effect
      ctx.fillStyle = 'rgba(10, 10, 21, 0.05)'
      ctx.fillRect(0, 0, getCanvasWidth(), getCanvasHeight())
      
      // Draw grid lines
      gridLines.forEach(line => line.draw(ctx))
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
      })
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.5
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })
      
      // Draw particles on top
      particles.forEach(particle => particle.draw(ctx))
      
      // Tech text overlay
      ctx.font = 'bold 12px Audiowide'
      ctx.fillStyle = '#a855f720'
      const techTexts = ['GAME', 'DESIGN', 'CREATE', 'BUILD', 'PLAY']
      techTexts.forEach((text, i) => {
        const x = (getCanvasWidth() / 5) * i + 50
        const y = Math.sin(Date.now() * 0.001 + i) * 20 + getCanvasHeight() / 2
        ctx.fillText(text, x, y)
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
    
    window.addEventListener('resize', resizeCanvas)
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove)
    }
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove)
      }
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [mousePos])
  
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-purple-500/20">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, #1a0a2e 0%, #0a0a15 100%)' }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 text-purple-400 font-mono text-xs uppercase tracking-wider">
          <span className="opacity-60">System</span> <span className="text-pink-400">Online</span>
        </div>
        <div className="absolute bottom-4 right-4 text-blue-400 font-mono text-xs uppercase tracking-wider">
          <span className="opacity-60">Neural</span> <span className="text-cyan-400">Active</span>
        </div>
      </div>
    </div>
  )
}