/**
 * ParticleBackground Component
 *
 * A physics-based particle animation system that creates an interactive background using
 * the HTML5 Canvas API. The system uses four key Canvas API features:
 *
 * 1. Canvas Context (ctx.getContext('2d')):
 *    - Creates a 2D rendering context for drawing
 *    - Provides the foundation for all canvas operations
 *
 * 2. ImageData Object (ctx.createImageData):
 *    - Creates a blank pixel buffer for direct pixel manipulation
 *    - Each pixel uses 4 bytes (RGBA values)
 *    - Size matches canvas dimensions (width * height * 4 bytes)
 *
 * 3. Pixel Data Array (imageData.data):
 *    - Raw array of pixel values
 *    - Allows direct setting of individual pixel colors
 *    - Format: [R,G,B,A, R,G,B,A, ...] for each pixel
 *
 * 4. putImageData Method:
 *    - Updates the canvas with modified pixel data
 *    - Used to draw all particles simultaneously
 *    - More efficient than drawing individual shapes
 *
 * The animation works by:
 * - Creating a grid of particles
 * - Calculating physics-based movement for each particle
 * - Setting individual pixels in the ImageData buffer
 * - Rendering all changes at once using putImageData
 *
 * Particles respond to mouse/touch input with repulsion forces, and when not
 * being interacted with, they move in an automatic wave-like pattern.
 */

'use client';
import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import styles from './ParticleBackground.module.css';

// Configuration parameters for particle behavior
const CONFIG = {
  COLOR: 107, // Grayscale color value for particles
  DRAG: 1, // Resistance applied to particle movement (1 = no drag)
  EASE: 0.07, // Spring force for returning to original position (higher = faster return)
  SPACING: 8, // Distance between particles in the grid
  THICKNESS: 85 ** 2, // Squared radius of mouse interaction (bigger = larger repulsion area)
};

// Structure for each particle's properties
interface Particle {
  vx: number; // Velocity X component
  vy: number; // Velocity Y component
  x: number; // Current X position
  y: number; // Current Y position
  ox: number; // Original X position (rest position)
  oy: number; // Original Y position (rest position)
}

interface ParticleBackgroundProps {}

const ParticleBackground = forwardRef((props: ParticleBackgroundProps, ref) => {
  // Refs for accessing canvas, container, and particle array
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]); // Stores all particles

  // Expose resetParticles function to parent component
  useImperativeHandle(ref, () => ({
    resetParticles: () => {
      // Reset all particles to their original positions with no velocity
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

    // Canvas dimensions
    let w: number, h: number;
    // Mouse position and interaction flag
    let mx = 0,
      my = 0,
      man = false;
    let ctx: CanvasRenderingContext2D | null = null;
    // Toggle between physics update and render frames
    let toggleFrame = true;

    // Default particle template
    const defaultParticle: Particle = {
      vx: 0,
      vy: 0, // Initial velocity (stationary)
      x: 0,
      y: 0, // Initial position
      ox: 0,
      oy: 0, // Original position
    };

    // Store container ref to avoid stale closure
    const container = containerRef.current;

    // Initialize/resize canvas and create particle grid
    const resizeCanvas = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      w = canvas.width;
      h = canvas.height;

      // Calculate grid dimensions
      const ROWS = Math.floor(h / CONFIG.SPACING);
      const COLS = Math.floor(w / CONFIG.SPACING);
      const NUM_PARTICLES = ROWS * COLS;

      // Create particle grid
      particlesRef.current = [];
      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p: Particle = { ...defaultParticle };
        // Position particles in a grid pattern
        p.x = p.ox = CONFIG.SPACING * (i % COLS);
        p.y = p.oy = CONFIG.SPACING * Math.floor(i / COLS);
        particlesRef.current.push(p);
      }
    };

    // Initialize canvas and event listeners
    const init = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      ctx = canvas.getContext('2d');

      resizeCanvas();

      // Handle mouse movement
      const handleMouseMove = (e: MouseEvent) => {
        const bounds = container?.getBoundingClientRect();
        if (!bounds) return;
        mx = e.clientX - bounds.left;
        my = e.clientY - bounds.top;
        man = true; // Enable manual interaction mode
      };

      // Handle touch movement (mobile)
      const handleTouchMove = (e: TouchEvent) => {
        const bounds = container?.getBoundingClientRect();
        if (!bounds) return;
        const touch = e.touches[0];
        mx = touch.clientX - bounds.left;
        my = touch.clientY - bounds.top;
        man = true; // Enable manual interaction mode
      };

      // Add event listeners
      container?.addEventListener('mousemove', handleMouseMove);
      container?.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('resize', resizeCanvas);

      requestAnimationFrame(step);
    };

    // Main animation loop
    const step = () => {
      if (!ctx) return;

      // Adjust parameters for mobile screens
      const currentThickness =
        window.innerWidth <= 460 ? 38 ** 2 : CONFIG.THICKNESS;
      const currentEase = window.innerWidth <= 460 ? 0.09 : CONFIG.EASE;

      // Alternate between physics updates and rendering
      if ((toggleFrame = !toggleFrame)) {
        // Auto-animation when no manual interaction
        if (!man) {
          const t = +new Date() * 0.001; // Time factor for animation
          // Create circular motion pattern
          mx = w * 0.5 + Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45;
          my =
            h * 0.5 +
            Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45;
        }

        // Update particle physics
        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          // Calculate distance from mouse/touch point
          const dx = mx - p.x;
          const dy = my - p.y;
          const d = dx * dx + dy * dy; // Squared distance
          const f = -currentThickness / d; // Repulsion force (inverse square)

          // Apply repulsion force if within range
          if (d < currentThickness) {
            const t = Math.atan2(dy, dx); // Angle of repulsion
            p.vx += f * Math.cos(t); // Apply force to X velocity
            p.vy += f * Math.sin(t); // Apply force to Y velocity
          }

          // Update position with velocity and spring force
          p.x += (p.vx *= CONFIG.DRAG) + (p.ox - p.x) * currentEase;
          p.y += (p.vy *= CONFIG.DRAG) + (p.oy - p.y) * currentEase;
        }
      } else {
        // Render frame
        const imageData = ctx.createImageData(w, h);
        const buffer = imageData.data;

        // Draw each particle as a single pixel
        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          const index = (~~p.x + ~~p.y * w) * 4; // Calculate buffer position
          // Set pixel color (R,G,B,A)
          buffer[index] = buffer[index + 1] = buffer[index + 2] = CONFIG.COLOR;
          buffer[index + 3] = 255; // Full opacity
        }

        // Update canvas with all particles at once
        ctx.putImageData(imageData, 0, 0);
      }

      requestAnimationFrame(step); // Continue animation loop
    };

    // Start the animation
    init();

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      // Container event listeners are automatically cleaned up when component unmounts
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
