import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000
  });
  
  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current)
  );
  
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, springValue, hasAnimated]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setDisplayNumber(latest);
    });
    return unsubscribe;
  }, [displayValue]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}{displayNumber}{suffix}
    </motion.span>
  );
}
