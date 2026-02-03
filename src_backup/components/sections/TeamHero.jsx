import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { AnimatedCounter, FloatingElement } from '../ui';

export function TeamHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: 120, suffix: '+', label: '成功项目' },
    { value: 98, suffix: '%', label: '客户满意度' },
    { value: 8, suffix: '年', label: '行业经验' }
  ];

  const titleChars = "以技术创新".split('');
  const subtitleChars = "驱动企业数字化转型".split('');

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-transparent to-purple-900/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <FloatingElement
            key={i}
            className="absolute"
            duration={3 + i * 0.5}
            distance={15 + i * 5}
            delay={i * 0.2}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          >
            <div className="w-2 h-2 bg-[#0066FF]/30 rounded-full"></div>
          </FloatingElement>
        ))}
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.span 
              className="text-[#0066FF] font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Aether Studio
            </motion.span>
            <motion.span 
              className="w-12 h-px bg-white/20"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <span className="text-white/40">技术解决方案</span>
          </motion.div>

          {/* Main Title with Character Animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            <span className="block overflow-hidden">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 80, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + i * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden mt-2">
              {subtitleChars.map((char, i) => (
                <motion.span
                  key={i}
                  className={`inline-block ${char === '数' || char === '字' || char === '化' || char === '转' || char === '型' ? 'text-[#0066FF]' : ''}`}
                  initial={{ y: 80, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + i * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg text-white/60 mb-12 max-w-xl leading-relaxed"
          >
            专注于高性能 Web 架构与工业级交互设计，为企业提供端到端的数字化解决方案。
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a 
              href="#contact" 
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-medium overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-[#0066FF]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors">开始合作</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-white transition-colors group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a 
              href="#solutions" 
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 102, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              了解方案
            </motion.a>
          </motion.div>

          {/* Stats with Animated Counter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex gap-12 mt-20 pt-8 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-xs text-white/40 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
