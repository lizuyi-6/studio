import React from 'react';

export function Badge({ 
  children, 
  variant = 'default',
  size = 'md',
  className = ''
}) {
  const variants = {
    default: 'border-white/10 text-white/50 bg-white/5',
    primary: 'border-[#0066FF]/30 text-[#0066FF] bg-[#0066FF]/10',
    success: 'border-green-500/30 text-green-500 bg-green-500/10',
    warning: 'border-yellow-500/30 text-yellow-500 bg-yellow-500/10',
    danger: 'border-red-500/30 text-red-500 bg-red-500/10'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm'
  };

  return (
    <span className={`inline-flex items-center border font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
