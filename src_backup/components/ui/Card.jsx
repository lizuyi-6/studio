import React from 'react';
import { motion } from 'framer-motion';

export function Card({ 
  children, 
  className = '',
  hover = true,
  padding = 'normal',
  variant = 'default'
}) {
  const baseStyles = 'border transition-all duration-300';
  
  const variants = {
    default: 'border-white/10 bg-white/[0.02]',
    elevated: 'border-white/10 bg-white/[0.04] shadow-lg',
    highlighted: 'border-[#0066FF]/30 bg-[#001133]/50',
    ghost: 'border-transparent bg-transparent'
  };

  const paddings = {
    none: '',
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8',
    xl: 'p-10'
  };

  const hoverStyles = hover ? 'hover:border-white/20 hover:bg-white/[0.04]' : '';

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-6 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }) {
  return <h3 className={`text-xl font-semibold text-white ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }) {
  return <p className={`text-white/50 mt-2 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return <div className={`mt-6 pt-6 border-t border-white/10 ${className}`}>{children}</div>;
}
