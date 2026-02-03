import React from 'react';
import { motion } from 'framer-motion';

const TechStackSection = () => (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
        {/* 背景装饰 */}
        {/* <CyberGrid /> */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#001133] to-transparent opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // FIX: Relaxed viewport requirement
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    不依赖黑盒，<span className="text-highlight">掌控核心代码</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    从引导加载程序 (Bootloader) 到前端渲染引擎，我们坚持自主研发关键组件，确保系统的绝对可控与安全。
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 卡片 1 */}
                <motion.div
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="tech-card p-10 rounded-2xl bg-black/50"
                >
                    <div className="w-14 h-14 bg-white/10 rounded items-center justify-center flex mb-6">
                        {/* <Layers size={28} className="text-white" /> */}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">工业物联网</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        支持 Modbus, CAN, EtherCAT 等多种工业协议的毫秒级数据采集与双向控制。
                    </p>
                    <a href="#" className="text-sm font-bold border-b border-white/20 pb-1 hover:border-white transition-colors">查看架构图</a>
                </motion.div>

                {/* 卡片 2 */}
                <motion.div
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="tech-card p-10 rounded-2xl border-[#0066FF]/30 bg-[#001133]/50 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-3 bg-[#0066FF] text-xs font-bold">CORE</div>
                    <div className="w-14 h-14 bg-[#0066FF] rounded items-center justify-center flex mb-6 shadow-lg shadow-[#0066FF]/30">
                        {/* <Cpu size={28} className="text-white" /> */}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">边缘计算</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        在设备端本地运行 AI 推理模型，减少云端依赖，保护数据隐私，实现零延迟响应。
                    </p>
                    <a href="#" className="text-sm font-bold border-b border-[#0066FF] pb-1 hover:text-[#0066FF] transition-colors">了解边缘盒</a>
                </motion.div>

                {/* 卡片 3 */}
                <motion.div
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="tech-card p-10 rounded-2xl bg-black/50"
                >
                    <div className="w-14 h-14 bg-white/10 rounded items-center justify-center flex mb-6">
                        {/* <Box size={28} className="text-white" /> */}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">极致性能体验</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        利用 Rust、WebAssembly 和原生 WebGL 图形接口，突破传统浏览器的性能瓶颈。
                    </p>
                    <a href="#" className="text-sm font-bold border-b border-white/20 pb-1 hover:border-white transition-colors">查看 Demo</a>
                </motion.div>
            </div>
        </div>
    </section>
);

export default TechStackSection;
