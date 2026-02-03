import React from 'react';
import { useScrollProgress } from '../../hooks';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div 
      className="fixed top-0 left-0 h-[2px] bg-[#0066FF] z-[9999] origin-left"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}
