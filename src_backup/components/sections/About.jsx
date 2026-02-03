import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Compass } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { DNA_ITEMS, PROCESS_STEPS } from '../../utils/constants';

const iconMap = { Target, Zap, Compass };

export function About() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section id="about" className="py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="w-8 h-px bg-[#0066FF]"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <span className="text-[#0066FF] text-sm font-medium">关于我们</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              专业团队，<br /><span className="text-[#0066FF]">卓越品质</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/60 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Aether Studio 成立于 2018 年，是一家专注于高性能 Web 架构与工业级交互设计的数字技术公司。
            </motion.p>
            
            <motion.p 
              className="text-white/50 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              我们不追求规模，而追求每一个项目的可度量成功——从加载速度到用户留存，从代码质量到设计精度，我们始终坚持最高标准。
            </motion.p>
            
            {/* ISO Certs */}
            <motion.div 
              className="flex items-center gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {[
                { code: 'ISO 9001', label: '质量管理体系' },
                { code: 'ISO 27001', label: '信息安全管理' }
              ].map((cert, index) => (
                <motion.div 
                  key={cert.code}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-white">{cert.code}</div>
                  <div className="text-sm text-white/40">{cert.label}</div>
                </motion.div>
              ))}
              <div className="w-px h-12 bg-white/10" />
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {DNA_ITEMS.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div 
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                  className="group border border-white/10 bg-white/[0.02] p-6 flex items-start gap-4 transition-all cursor-pointer"
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, backgroundColor: '#0066FF' }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-[#0066FF] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-lg font-semibold text-white mb-1"
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-white/50">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Process Steps */}
        <div>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">服务流程</h3>
            <p className="text-white/50">标准化交付流程，确保项目高质量完成</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={step.num}
                variants={staggerItem}
                className="group relative bg-black p-6 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                {/* Hover Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#0066FF]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredStep === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.span 
                  className="text-5xl font-bold text-white/5 group-hover:text-[#0066FF]/10 transition-colors block"
                  animate={{ 
                    scale: hoveredStep === index ? 1.2 : 1,
                    x: hoveredStep === index ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.num}
                </motion.span>
                
                <motion.h4 
                  className="text-lg font-semibold text-white mt-2 mb-1"
                  animate={{ x: hoveredStep === index ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.title}
                </motion.h4>
                
                <p className="text-sm text-white/40">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
