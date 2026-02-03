import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Cpu, Shield } from 'lucide-react';
import { SectionHeader, GlowCard } from '../ui';
import { staggerContainer, staggerItem, cardHover } from '../../utils/animations';
import { CORE_VALUES } from '../../utils/constants';

const iconMap = { Layers, Cpu, Shield };

export function ValueProps() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="values" className="py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.span 
                className="w-8 h-px bg-[#0066FF]"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span className="text-[#0066FF] text-sm font-medium">核心优势</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              为什么选择 <span className="text-[#0066FF]">Aether</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/60 max-w-md"
          >
            从架构到交付，我们用工程思维处理每一个像素，构建可靠、高性能的数字体验。
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {CORE_VALUES.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div 
                key={index}
                variants={staggerItem}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <GlowCard className="h-full">
                  <motion.div 
                    className="h-full border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden"
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    animate={isHovered ? "hover" : "rest"}
                  >
                    {/* Background Glow */}
                    <motion.div
                      className="absolute -top-20 -right-20 w-40 h-40 bg-[#0066FF]/20 rounded-full blur-3xl"
                      animate={{
                        scale: isHovered ? 1.5 : 1,
                        opacity: isHovered ? 0.5 : 0
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Icon */}
                    <motion.div 
                      className="w-14 h-14 bg-[#0066FF]/10 flex items-center justify-center mb-6 relative z-10"
                      animate={{
                        rotate: isHovered ? [0, -10, 10, 0] : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-[#0066FF]" />
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className="text-2xl font-semibold text-white mb-4 relative z-10"
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <p className="text-white/50 mb-6 leading-relaxed relative z-10">{item.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                      {item.features.map((feature, i) => (
                        <motion.span 
                          key={feature} 
                          className="inline-flex items-center px-3 py-1 text-xs font-medium border border-white/10 text-white/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          whileHover={{ 
                            borderColor: 'rgba(0, 102, 255, 0.5)',
                            color: 'rgba(255, 255, 255, 0.8)'
                          }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Link */}
                    <motion.a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-white/50 hover:text-[#0066FF] text-sm transition-colors relative z-10"
                      animate={{ x: isHovered ? 10 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      了解更多 
                      <motion.span
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
