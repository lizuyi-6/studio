import React from 'react';
import { motion } from 'framer-motion';

export function Logo({ className = '', size = 40, animate = false }) {
  const logoContent = (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full text-[#0066FF]"
        style={{ width: size, height: size }}
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#003399" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g transform="translate(20, 20)">
          <rect x="-6" y="-6" width="12" height="12" fill="url(#logo-gradient)" filter="url(#glow)" />
          <path d="M-14 -6 V-12 H-8" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
          <path d="M8 -12 H14 V-6" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
          <path d="M14 6 V12 H8" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
          <path d="M-8 12 H-14 V 6" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        </g>
      </svg>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {logoContent}
      </motion.div>
    );
  }

  return logoContent;
}

export function LogoText({ className = '', showText = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 bg-[#0066FF] flex items-center justify-center">
        <span className="text-white font-bold text-lg">A</span>
      </div>
      {showText && (
        <span className="text-white font-semibold text-lg tracking-tight">
          Aether
        </span>
      )}
    </div>
  );
}
