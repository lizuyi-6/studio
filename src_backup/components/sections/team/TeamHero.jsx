import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function TeamHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: '120+', label: '成功项目' },
    { value: '98%', label: '客户满意度' },
    { value: '8年', label: '行业经验' }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block opacity-30">
        <div className="w-full h-full bg-gradient-to-l from-[#0066FF]/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-[#0066FF] font-medium">Aether Studio</span>
            <span className="w-12 h-px bg-white/20" />
            <span className="text-white/40">技术解决方案</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            以技术创新
            <br />
            驱动企业<span className="text-[#0066FF]">数字化转型</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/60 mb-12 max-w-xl leading-relaxed"
          >
            专注于高性能 Web 架构与工业级交互设计，为企业提供端到端的数字化解决方案。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-[#0066FF] hover:text-white transition-all">
              开始合作
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#solutions" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-all">
              了解方案
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-12 mt-20 pt-8 border-t border-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
