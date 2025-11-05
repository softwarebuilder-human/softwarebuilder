'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  driftX: number;
  twinkleSpeed: number;
}

interface StarrySkyProps {
  className?: string;
}

const StarrySky: React.FC<StarrySkyProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const stars: Star[] = [];
    const numStars = 300;
    const driftSpeed = 0.5;

    // Resize canvas to full window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize stars
    const initStars = () => {
      stars.length = 0; // Clear existing
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
          driftX: (Math.random() - 0.5) * driftSpeed,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    resize();
    initStars();

    window.addEventListener('resize', () => {
      resize();
      initStars(); // Recreate stars on resize
    });

    // Animation loop
    const animate = () => {
      // Subtle trail effect
      ctx.fillStyle = 'rgba(0, 0, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Drift movement
        star.x += star.driftX;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;

        // Twinkle
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.3) {
          star.twinkleSpeed *= -1;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
      style={{ background: '#000011' }}
    />
  );
};

export default StarrySky;