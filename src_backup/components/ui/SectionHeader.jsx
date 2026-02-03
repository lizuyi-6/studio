import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export function SectionHeader({ 
  label,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const alignFlex = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  return (
    <motion.div 
      {...fadeInUp}
      className={`${alignStyles[align]} ${className}`}
    >
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${alignFlex[align]}`}>
          {align !== 'right' && <span className="w-8 h-px bg-[#0066FF]" />}
          <span className="text-[#0066FF] text-sm font-medium">{label}</span>
          {align !== 'left' && <span className="w-8 h-px bg-[#0066FF]" />}
        </div>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg text-white/60 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
