import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function GlowCard({ children, className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 0.8
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-inherit pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 102, 255, 0.5), transparent 50%)`,
          borderRadius: 'inherit'
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {children}
    </motion.div>
  );
}
