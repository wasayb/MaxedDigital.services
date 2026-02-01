import React, { useEffect, useRef } from 'react';

const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const targetMouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width: number, height: number;
    let particles: Particle[] = [];
    const particleCount = 55; // Slightly reduced for cleaner visual
    const connectionDist = 150; // Tighter connections
    const mouseRadius = 200; // Focused mouse interaction

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      size: number = 0;
      z: number = 0; 
      opacity: number = 0;
      parallaxFactor: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 0.8 + 0.6; 
        this.vx = (Math.random() - 0.5) * 0.1; // Reduced base velocity
        this.vy = (Math.random() - 0.5) * 0.1; // Reduced base velocity
        this.size = (Math.random() * 1.2 + 0.3) * this.z;
        this.opacity = (this.z - 0.4) * 0.08; // Lowered opacity for subtlety
        this.parallaxFactor = 0.01 + (this.z * 0.04); 
      }

      update(time: number, mouse: { x: number, y: number }) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        const currentY = this.y - scrollRef.current * this.parallaxFactor;
        const dx = this.x - mouse.x;
        const dy = currentY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          // Significantly reduced influence for a more "viscous" feel
          const influence = force * 0.03 * this.z; 
          this.vx += Math.cos(angle) * influence;
          this.vy += Math.sin(angle) * influence;
        }

        // Higher damping factor for smoother, less jittery movement
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Slowed down the global drift oscillation
        this.vx += Math.sin(time * 0.0003 + this.x * 0.002) * 0.0015;
        this.vy += Math.cos(time * 0.0003 + this.y * 0.002) * 0.0015;
      }

      getRenderY() {
        return this.y - scrollRef.current * this.parallaxFactor;
      }

      draw() {
        const drawY = this.getRenderY();
        if (drawY < -50 || drawY > height + 50) return;

        ctx!.beginPath();
        ctx!.arc(this.x, drawY, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx!.fill();
      }
    }

    const initParticles = () => {
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Slower interpolation for mouse movement for a more premium lag-free feel
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;

      particles.forEach(p => p.update(time, mouseRef.current));

      ctx.lineWidth = 0.3;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const p1Y = p1.getRenderY();
        if (p1Y < -100 || p1Y > height + 100) continue;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (Math.abs(p1.z - p2.z) > 0.3) continue;

          const dx = p1.x - p2.x;
          const p2Y = p2.getRenderY();
          const dy = p1Y - p2Y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            // Faded connection lines
            const alpha = (1 - dist / connectionDist) * 0.04 * p1.z;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1Y);
            ctx.lineTo(p2.x, p2Y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => p.draw());
      requestAnimationFrame(animate);
    };

    const handleInput = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        targetMouseRef.current = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        };
      } else {
        targetMouseRef.current = { 
          x: e.clientX, 
          y: e.clientY 
        };
      }
    };

    let scrollTicking = false;
    const handleScroll = () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          scrollRef.current = window.scrollY;
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleInput);
    window.addEventListener('touchstart', handleInput, { passive: true });
    window.addEventListener('touchmove', handleInput, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    resize();
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleInput);
      window.removeEventListener('touchstart', handleInput);
      window.removeEventListener('touchmove', handleInput);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen', opacity: 0.6 }}
    />
  );
};

export default HeroVisual;