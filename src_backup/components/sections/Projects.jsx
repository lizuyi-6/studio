import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, ArrowUpRight } from 'lucide-react';
import { SectionHeader, GlowCard } from '../ui';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { PROJECTS } from '../../utils/constants';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              <span className="text-[#0066FF] text-sm font-medium">开源项目</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              技术方案与<span className="text-[#0066FF]">开源贡献</span>
            </h2>
          </motion.div>
          
          <motion.a 
            href="#" 
            className="group text-white/50 hover:text-[#0066FF] text-sm transition-colors flex items-center gap-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ x: 5 }}
          >
            查看全部项目 
            <motion.span
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div 
                key={project.name}
                variants={staggerItem}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <GlowCard>
                  <motion.div 
                    className="group border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden"
                    whileHover={{ 
                      borderColor: 'rgba(0, 102, 255, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent"
                      initial={{ opacity: 0, x: '-100%' }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : '-100%'
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div 
                          className="flex gap-2"
                          animate={{ x: isHovered ? 5 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.tags.map((tag, i) => (
                            <motion.span 
                              key={tag} 
                              className="inline-flex items-center px-3 py-1 text-xs font-medium border border-white/10 text-white/50"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ 
                                borderColor: 'rgba(0, 102, 255, 0.5)',
                                color: 'white'
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-1 text-white/30 text-sm"
                          animate={{ 
                            scale: isHovered ? 1.1 : 1,
                            color: isHovered ? 'rgba(0, 102, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star className="w-4 h-4" /> 
                          <span className="tabular-nums">{project.stars.toLocaleString()}</span>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="text-2xl font-semibold text-white mb-3"
                        animate={{ 
                          color: isHovered ? '#0066FF' : '#ffffff',
                          x: isHovered ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.name}
                      </motion.h3>

                      {/* Description */}
                      <p className="text-white/50 mb-8 leading-relaxed">{project.description}</p>

                      {/* Links */}
                      <div className="flex items-center gap-6">
                        <motion.a 
                          href={project.github} 
                          className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Github className="w-4 h-4" /> 
                          <span>源码</span>
                        </motion.a>
                        
                        {project.demo && (
                          <motion.a 
                            href={project.demo} 
                            className="flex items-center gap-2 text-white/40 hover:text-[#0066FF] text-sm transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            <ExternalLink className="w-4 h-4" /> 
                            <span>演示</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <motion.div
                      className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0066FF]/10 rounded-full blur-2xl"
                      animate={{
                        scale: isHovered ? 1.5 : 1,
                        opacity: isHovered ? 0.3 : 0
                      }}
                      transition={{ duration: 0.5 }}
                    />
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
