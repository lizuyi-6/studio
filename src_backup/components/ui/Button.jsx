import React from 'react';
import { motion } from 'framer-motion';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'right'
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-[#0066FF] hover:text-white',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10',
    outline: 'border border-white/20 text-white hover:border-[#0066FF] hover:text-[#0066FF]',
    ghost: 'text-white/50 hover:text-white',
    danger: 'bg-[#0066FF] text-white hover:bg-[#0052cc]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
