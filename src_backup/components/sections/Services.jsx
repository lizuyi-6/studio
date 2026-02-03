import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Box, Gauge, Database, Lightbulb } from 'lucide-react';
import { SectionHeader } from '../ui';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { SERVICES } from '../../utils/constants';

const iconMap = { Code2, Palette, Box, Gauge, Database, Lightbulb };

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="服务范围"
            title={<>
              我们的<span className="text-[#0066FF]">专业服务</span>
            </>}
            subtitle="从策略到上线，提供端到端的技术与创意交付服务。"
            className="mb-16"
          />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div 
                key={service.title}
                variants={staggerItem}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <motion.div 
                  className="group bg-black p-8 h-full relative overflow-hidden"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Corner Border Animation */}
                  <motion.div
                    className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#0066FF]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0066FF]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className="w-14 h-14 bg-[#0066FF]/10 flex items-center justify-center"
                        animate={{
                          backgroundColor: isHovered ? '#0066FF' : 'rgba(0, 102, 255, 0.1)',
                          rotate: isHovered ? 5 : 0,
                          scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={`w-7 h-7 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#0066FF]'}`} />
                      </motion.div>
                      
                      <motion.span 
                        className="text-xs text-white/30 uppercase tracking-wider"
                        animate={{ 
                          opacity: isHovered ? 1 : 0.3,
                          y: isHovered ? 0 : -10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.subtitle}
                      </motion.span>
                    </div>

                    {/* Title */}
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-3"
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-white/50"
                      animate={{ opacity: isHovered ? 0.8 : 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Number Indicator */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 text-8xl font-bold text-white/[0.02] pointer-events-none"
                    animate={{
                      opacity: isHovered ? 0.05 : 0.02,
                      scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    0{index + 1}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
