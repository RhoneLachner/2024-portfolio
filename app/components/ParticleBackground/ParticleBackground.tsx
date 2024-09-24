/**
 * ParticleBackground Component
 * 
 * Renders a particle animation that responds to user interaction (mouse movement) 
 * and animates automatically when inactive. Particles move based on a physics simulation 
 * with adjustable parameters for behavior and appearance.
 * 
 * - Draws particles using the Canvas API.
 * - Resizes automatically to fit the viewport.
 * - Exposes a `resetParticles` function via ref to reset particle positions.
 * 
 * Uses `useRef`, `useImperativeHandle`, and `useEffect` hooks for handling 
 * canvas setup, animation, and cleanup.
 */
'use client';
import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import styles from './ParticleBackground.module.css';

// Configuration for particles
const CONFIG = {
  COLOR: 110,
  DRAG: 1,
  EASE: 0.11,
  SPACING: 8,
  THICKNESS: 80 ** 2, // Default thickness
};

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
  const particlesRef = useRef<Particle[]>([]); // Holds particles array

  // Expose resetParticles function to the parent component
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
    if (typeof window === 'undefined') return;

    let w: number, h: number;
    let mx = 0,
      my = 0,
      man = false;
    let ctx: CanvasRenderingContext2D | null = null;
    let toggleFrame = true;

    // Default particle object
    const defaultParticle: Particle = { vx: 0, vy: 0, x: 0, y: 0, ox: 0, oy: 0 };

    // Current containerRef is saved in a variable to avoid stale closure issues
    const container = containerRef.current;

    // Resize canvas and reinitialize particles
    const resizeCanvas = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      w = canvas.width;
      h = canvas.height;

      const ROWS = Math.floor(h / CONFIG.SPACING);
      const COLS = Math.floor(w / CONFIG.SPACING);
      const NUM_PARTICLES = ROWS * COLS;

      particlesRef.current = [];
      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p: Particle = { ...defaultParticle };
        p.x = p.ox = CONFIG.SPACING * (i % COLS);
        p.y = p.oy = CONFIG.SPACING * Math.floor(i / COLS);
        particlesRef.current.push(p);
      }
    };

    // Event listeners and Initialize Canvas
    const init = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      ctx = canvas.getContext('2d');

      resizeCanvas();

      const handleMouseMove = (e: MouseEvent) => {
        const bounds = container?.getBoundingClientRect();
        if (!bounds) return;
        mx = e.clientX - bounds.left;
        my = e.clientY - bounds.top;
        man = true; // Manually control particles
      };

      const handleTouchMove = (e: TouchEvent) => {
        const bounds = container?.getBoundingClientRect();
        if (!bounds) return;
        const touch = e.touches[0]; // Get the first touch point
        mx = touch.clientX - bounds.left;
        my = touch.clientY - bounds.top;
        man = true; // Manually control particles based on touch
      };

      container?.addEventListener('mousemove', handleMouseMove);
      container?.addEventListener('touchmove', handleTouchMove); // Add touchmove listener
      window.addEventListener('resize', resizeCanvas);

      requestAnimationFrame(step); // Start animation loop
    };

    // Animation step, applies physics and draws particles
    const step = () => {
      if (!ctx) return;

      // Update thickness based on screen width
      const currentThickness =
        window.innerWidth <= 460 ? 36 ** 2 : CONFIG.THICKNESS;

      // Toggle between updating physics and rendering pixels
      if ((toggleFrame = !toggleFrame)) {
        if (!man) {
          const t = +new Date() * 0.001; // Time factor for auto-animation
          mx = w * 0.5 + Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45;
          my =
            h * 0.5 +
            Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45;
        }

        // Update particle physics
        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          const dx = mx - p.x;
          const dy = my - p.y;
          const d = dx * dx + dy * dy;
          const f = -currentThickness / d; // Use dynamic thickness here

          if (d < currentThickness) {
            const t = Math.atan2(dy, dx);
            p.vx += f * Math.cos(t);
            p.vy += f * Math.sin(t);
          }

          // Apply movement based on velocity and drag 
          p.x += (p.vx *= CONFIG.DRAG) + (p.ox - p.x) * CONFIG.EASE;
          p.y += (p.vy *= CONFIG.DRAG) + (p.oy - p.y) * CONFIG.EASE;
        }
      } else {
        // Draw particles on canvas
        const imageData = ctx.createImageData(w, h);
        const buffer = imageData.data;

        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          const index = (~~p.x + ~~p.y * w) * 4;
          buffer[index] = buffer[index + 1] = buffer[index + 2] = CONFIG.COLOR;
          buffer[index + 3] = 255; 
        }

        ctx.putImageData(imageData, 0, 0);
      }

      requestAnimationFrame(step); // Loop the animation
    };

    init();

    // Event listener cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container?.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
