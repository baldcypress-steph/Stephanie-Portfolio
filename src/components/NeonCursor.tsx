'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'motion/react';
import './NeonCursor.css';

const NeonCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 0,
  });

  const trailControls = useAnimation();
  const glowControls = useAnimation();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
      scale: 1,
      opacity: 1,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  useEffect(() => {
    if (position.opacity === 1) {
      trailControls.start({
        x: position.x,
        y: position.y,
        transition: { type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }
      });
      
      glowControls.start({
        x: position.x,
        y: position.y,
        transition: { type: 'spring', damping: 30, stiffness: 150, mass: 0.8 }
      });
    }
  }, [position, trailControls, glowControls]);

  // Don't render on the server
  if (typeof window === 'undefined') return null;

  return (
    <div className="neon-cursor-container">
      <motion.div 
        className="cursor-main"
        animate={{
          x: position.x,
          y: position.y,
          scale: position.scale,
          opacity: position.opacity
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
      />
      
      <motion.div 
        className="cursor-trail"
        animate={trailControls}
        style={{ opacity: position.opacity }}
      />
      
      <motion.div 
        className="cursor-glow"
        animate={glowControls}
        style={{ opacity: position.opacity }}
      />
    </div>
  );
};

export default NeonCursor;