'use client';

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import styles from './ParticleBackground.module.css';

const THICKNESS = 80 ** 2;
const SPACING = 8;
const COLOR = 115;
const DRAG = 1;
const EASE = 0.15;

interface Particle {
  vx: number;
  vy: number;
  x: number;
  y: number;
  ox: number;
  oy: number;
}

interface ParticleBackgroundProps {}

const ParticleBackground = forwardRef((props: ParticleBackgroundProps, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]); //reset particles ref

  useImperativeHandle(ref, () => ({
    resetParticles: () => {
      particlesRef.current.forEach((p) => {
        p.x = p.ox;
        p.y = p.oy;
        p.vx = 0;
        p.vy = 0;
      });
    },
  }));

  useEffect(() => {
    console.log('ParticleBackground rendered');
    if (typeof window === 'undefined') return;

    let w: number, h: number;
    let mx = 0,
      my = 0,
      man = false;
    let ctx: CanvasRenderingContext2D | null = null;
    let tog = true;

    const particle: Particle = { vx: 0, vy: 0, x: 0, y: 0, ox: 0, oy: 0 };

    const resizeCanvas = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      w = canvas.width;
      h = canvas.height;

      const ROWS = Math.floor(h / SPACING);
      const COLS = Math.floor(w / SPACING);
      const NUM_PARTICLES = ROWS * COLS;

      //reset particles array
      particlesRef.current = [];
      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p: Particle = { ...particle };
        p.x = p.ox = SPACING * (i % COLS);
        p.y = p.oy = SPACING * Math.floor(i / COLS);
        particlesRef.current.push(p);
      }
    };

    const init = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      ctx = canvas.getContext('2d');

      resizeCanvas();

      const container = containerRef.current;

      container?.addEventListener('mousemove', (e) => {
        const bounds = container?.getBoundingClientRect();
        if (!bounds) return;
        mx = e.clientX - bounds.left;
        my = e.clientY - bounds.top;
        man = true;
      });

      window.addEventListener('resize', resizeCanvas);

      requestAnimationFrame(step);
    };

    const step = () => {
      //automatically plays particle animation before cursor is detected
      if (!ctx) return;

      if ((tog = !tog)) {
        if (!man) {
          const t = +new Date() * 0.001; //speed
          mx = w * 0.5 + Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45;
          my =
            h * 0.5 +
            Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45;
        }

        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          const dx = mx - p.x;
          const dy = my - p.y;
          const d = dx * dx + dy * dy;
          const f = -THICKNESS / d;

          if (d < THICKNESS) {
            const t = Math.atan2(dy, dx);
            p.vx += f * Math.cos(t);
            p.vy += f * Math.sin(t);
          }

          p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
          p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
        }
      } else {
        const a = ctx.createImageData(w, h);
        const b = a.data;

        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          const n = (~~p.x + ~~p.y * w) * 4;
          b[n] = b[n + 1] = b[n + 2] = COLOR;
          b[n + 3] = 255;
        }

        ctx.putImageData(a, 0, 0);
      }

      requestAnimationFrame(step);
    };

    init();
    const container = containerRef.current;

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container?.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
