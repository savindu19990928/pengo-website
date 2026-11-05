import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

type SnowParticlesProps = {className?: string;density?: number;};

type Particle = {x: number;y: number;r: number;vy: number;vx: number;a: number;phase: number;};

export function SnowParticles({ className = '', density = 70 }: SnowParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let particles: Particle[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(18, Math.round(density * Math.min(1, width / 1200)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.4,
        vy: Math.random() * 0.32 + 0.1,
        vx: Math.random() * 0.2 - 0.1,
        a: Math.random() * 0.45 + 0.15,
        phase: Math.random() * Math.PI * 2
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        if (!reduce) {
          p.y += p.vy;
          p.x += p.vx + Math.sin(t / 2200 + p.phase) * 0.12;
          if (p.y > height + 4) {
            p.y = -4;
            p.x = Math.random() * width;
          }
          if (p.x > width + 4) p.x = -4;
          if (p.x < -4) p.x = width + 4;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(238, 244, 248, ${p.a})`;
        ctx.fill();
      }
      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw(0);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0);
    });
    resizeObserver.observe(canvas);

    const visibility = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (running && !reduce) raf = requestAnimationFrame(draw);
    });
    visibility.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibility.disconnect();
    };
  }, [density, reduce]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}