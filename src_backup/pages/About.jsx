import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Globe, Figma, Zap, Compass, Layers, Cpu, GitBranch } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen container mx-auto px-6 relative">
      {/* <CyberGrid /> */}
      <div className="relative z-10">
        {/* --- Header: Editorial Style --- */}
        <div className="mb-32 border-b border-white/10 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
              CRAFTING  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-white/50">DIGITAL REALITY.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mt-8 border-l-2 border-[#0066FF] pl-6">
              Aether Studio 是一个探索代码、设计与数字哲学边界的实验场。
              我们不生产平庸的代码，只构建有灵魂的数字体验。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          {/* --- Left Column: DNA / Philosophy --- */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold text-[#0066FF] tracking-[0.2em] mb-8 uppercase">Our DNA</h2>
            <div className="space-y-12">
              {[
                { title: "Pixel Perfect", icon: <Figma size={24} />, desc: "像素级校准。拒绝粗制滥造，追求 Retina 级的视觉纯净度。" },
                { title: "Performance First", icon: <Zap size={24} />, desc: "速度即正义。基于 Rust 与 WASM 的底层异构加速。" },
                { title: "Boundary Pushers", icon: <Compass size={24} />, desc: "不重复造轮子。我们致力于重新定义 Web 的交互边界。" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="text-white/50 mb-3 group-hover:text-[#0066FF] transition-colors">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- Right Column: The Architect (Profile) --- */}
          <div className="lg:col-span-8">
            <div className="h-full bg-[#0A0A0A] border border-white/5 rounded-none md:rounded-r-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Terminal size={120} strokeWidth={0.5} />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-800 shrink-0 bg-[url('https://github.com/lizuyi-6.png')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"></div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-3xl font-bold text-white">Abraham Valerio</h3>
                      <p className="text-[#0066FF] font-mono text-sm mt-1">Founding Architect / @lizuyi-6</p>
                    </div>
                    <div className="flex gap-3">
                      <a href="https://github.com/lizuyi-6" target="_blank" rel="noreferrer" className="hover:text-[#0066FF] transition-colors"><Github size={20} /></a>
                      <a href="https://aetherstudio.top/" target="_blank" rel="noreferrer" className="hover:text-[#0066FF] transition-colors"><Globe size={20} /></a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed mb-8 font-serif italic text-white/80 border-b border-white/5 pb-8">
                    "在数字荒原中寻找实体感。致力于 Next-Gen Web 架构与高保真交互的融合。"
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 uppercase">Focus</div>
                      <div className="text-sm font-bold text-white">React Server Components</div>
                      <div className="text-sm font-bold text-white">System Architecture</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 uppercase">Role</div>
                      <div className="text-sm font-bold text-white">Full Stack Engineer</div>
                      <div className="text-sm font-bold text-white">Open Source Maintainer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Pipeline (Workflow) --- */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold tracking-tight">The <span className="text-[#0066FF]">Pipeline</span></h2>
            <div className="font-mono text-xs text-gray-500">EST. 2026</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-white/10">
            {[
              { step: "01", title: "Discovery", icon: <Compass size={20} />, desc: "需求剖析与技术定调" },
              { step: "02", title: "Architecture", icon: <Layers size={20} />, desc: "系统设计与原子组件" },
              { step: "03", title: "Development", icon: <Cpu size={20} />, desc: "工业级构建与测试" },
              { step: "04", title: "Deployment", icon: <GitBranch size={20} />, desc: "全球化分发与监控" }
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} // FIX: Ensure consistency
                transition={{ delay: i * 0.1 }}
                className="group relative border-r border-b md:border-b-0 border-white/10 p-8 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex justify-between items-start mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-xl">{phase.step}</span>
                  <span className="text-[#0066FF]">{phase.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-500">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
