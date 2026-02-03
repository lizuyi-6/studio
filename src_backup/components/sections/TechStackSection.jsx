import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Box } from 'lucide-react';
import { CyberGrid } from './Backgrounds';

const techCards = [
  {
    icon: Layers,
    title: '工业物联网',
    description: '支持 Modbus, CAN, EtherCAT 等多种工业协议的毫秒级数据采集与双向控制。',
    link: '查看架构图',
    variant: 'default'
  },
  {
    icon: Cpu,
    title: '边缘计算',
    description: '在设备端本地运行 AI 推理模型，减少云端依赖，保护数据隐私，实现零延迟响应。',
    link: '了解边缘盒',
    variant: 'highlighted',
    badge: 'CORE'
  },
  {
    icon: Box,
    title: '极致性能体验',
    description: '利用 Rust、WebAssembly 和原生 WebGL 图形接口，突破传统浏览器的性能瓶颈。',
    link: '查看 Demo',
    variant: 'default'
  }
];

export function TechStackSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <CyberGrid />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#001133] to-transparent opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            不依赖黑盒，<span className="text-[#0066FF]">掌控核心代码</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            从引导加载程序 (Bootloader) 到前端渲染引擎，我们坚持自主研发关键组件，确保系统的绝对可控与安全。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCards.map((card, index) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-2xl relative overflow-hidden ${
                card.variant === 'highlighted' 
                  ? 'border border-[#0066FF]/30 bg-[#001133]/50' 
                  : 'bg-white/[0.02] border border-white/10'
              }`}
            >
              {card.badge && (
                <div className="absolute top-0 right-0 p-3 bg-[#0066FF] text-xs font-bold text-white">
                  {card.badge}
                </div>
              )}
              <div className={`w-14 h-14 rounded flex items-center justify-center mb-6 ${
                card.variant === 'highlighted' 
                  ? 'bg-[#0066FF] shadow-lg shadow-[#0066FF]/30' 
                  : 'bg-white/10'
              }`}>
                <card.icon size={28} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">{card.title}</h3>
              <p className={`leading-relaxed mb-8 ${
                card.variant === 'highlighted' ? 'text-gray-300' : 'text-gray-400'
              }`}>
                {card.description}
              </p>
              <a href="#" className={`text-sm font-bold border-b pb-1 transition-colors ${
                card.variant === 'highlighted' 
                  ? 'border-[#0066FF] hover:text-[#0066FF]' 
                  : 'border-white/20 hover:border-white'
              }`}>
                {card.link}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
