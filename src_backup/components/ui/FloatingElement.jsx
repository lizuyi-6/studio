import React from 'react';
import { motion } from 'framer-motion';

export function FloatingElement({ 
  children, 
  className = '',
  duration = 3,
  distance = 10,
  delay = 0 
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

export function RotatingElement({ 
  children, 
  className = '',
  duration = 20,
  reverse = false 
}) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: reverse ? -360 : 360
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  );
}

export function PulsingElement({ 
  children, 
  className = '',
  duration = 2,
  scale = 1.05
}) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, scale, 1],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
