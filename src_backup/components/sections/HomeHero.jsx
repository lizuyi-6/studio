import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrambleText } from '../ui';
import { CyberGrid } from './Backgrounds';

export function HomeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const techTags = ["全栈开发", "嵌入式系统", "工业物联网", "高性能计算", "三维可视化"];

  return (
    <section className="relative pt-32 pb-20 lg:min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <CyberGrid />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* 左侧文字区 */}
        <div className="text-left order-2 lg:order-1">
          <div className="flex flex-wrap gap-3 mb-8">
            {techTags.map(item => (
              <span key={item} className="flex items-center gap-2 text-xs text-gray-500 font-mono bg-white/5 px-2 py-1 rounded border border-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full"></span>
                {item}
              </span>
            ))}
          </div>
          
          <div className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight min-h-[160px]">
            <ScrambleText text="构建数字世界的" className="block mb-2" delay={500} />
            <span className="text-[#0066FF]">
              <ScrambleText text="精密工程" delay={1500} />
            </span>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-gray-400 mb-8 max-w-lg leading-relaxed text-lg"
          >
            Aether Studio 提供从底层硬件驱动到顶层交互界面的全链路解决方案。拒绝平庸的模板，只做高可用、高扩展的定制化架构。
          </motion.p>
          
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 text-white px-6 py-3 rounded-[4px] font-medium hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center">
              查看案例
            </a>
            <a href="#" className="bg-white text-black px-6 py-3 rounded-[4px] font-bold hover:bg-gray-200 transition-colors flex items-center justify-center">
              启动项目
            </a>
          </div>
        </div>

        {/* 右侧视觉区 - 数据流光束 */}
        <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000">
          <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#0066FF] to-transparent opacity-20"></div>
          
          <div className="flex gap-2 md:gap-4 h-full items-center justify-center transform rotate-y-12">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`h-full relative overflow-hidden border border-white/5 rounded-full ${i === 2 ? 'w-4 md:w-6 bg-white/5' : 'w-1 md:w-2 bg-white/5'}`}>
                {[...Array(3)].map((_, j) => (
                  <div
                    key={j}
                    className={`absolute w-full rounded-full blur-md animate-flow ${i === 2 ? 'bg-white' : 'bg-[#0066FF]'}`}
                    style={{
                      height: `${Math.random() * 20 + 10}%`,
                      opacity: Math.random() * 0.5 + 0.5,
                      animationDuration: `${Math.random() * 2 + 1.5}s`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="absolute bg-[#0066FF] w-32 h-32 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
        </div>
      </div>

      {/* 底部光晕 */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-[radial-gradient(circle_at_50%_100%,_#0066FF_0%,_transparent_70%)] opacity-60 blur-[100px] pointer-events-none z-[-1]"></div>
    </section>
  );
}
