import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Box } from 'lucide-react';
import { IsometricProcess, NetworkDiagram } from './Diagrams';

export function FeatureSectionOne() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-20 flex items-center"
        >
          全栈技术优势 <span className="text-[#0066FF] ml-2 text-4xl font-light">/</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-[#0066FF] mb-4">
              <Hexagon size={16} />
              <span className="font-medium text-sm tracking-wide">端到端解决方案</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">全链路架构设计</h3>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-lg">
              打通物理世界与数字世界的边界。无论是低功耗传感器网络，还是高并发云端集群，我们确保每一比特数据的精确传输与处理。从采集到呈现，无缝衔接。
            </p>
            <a href="#" className="bg-white text-black px-6 py-2 rounded-[4px] text-sm font-bold hover:bg-gray-200 transition-colors inline-block">
              了解更多
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="border border-white/5 bg-white/[0.02] rounded-xl p-8 hover:bg-white/[0.05] transition-colors shadow-2xl shadow-black/50"
          >
            <IsometricProcess />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeatureSectionTwo() {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 border border-white/5 bg-white/[0.02] rounded-xl p-8 hover:bg-white/[0.05] transition-colors shadow-2xl shadow-black/50"
          >
            <NetworkDiagram />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 lg:pl-12"
          >
            <div className="flex items-center gap-2 text-[#0066FF] mb-4">
              <Box size={16} />
              <span className="font-medium text-sm tracking-wide">软硬一体化开发</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">极致性能优化</h3>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-lg">
              我们深入理解硬件特性。在嵌入式端，我们直接操作寄存器以榨干每一分算力；在云端，我们使用 Rust 和 Go 构建高吞吐微服务。让软件像硬件一样坚固。
            </p>
            <ul className="space-y-4 mb-8">
              {['RTOS 实时操作系统定制', 'FPGA 异构加速算法', '私有化部署 & 容器编排'].map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-[#0066FF]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
