import React from 'react';
import { motion } from 'framer-motion';

const Solutions = () => (
  <div className="pt-32 pb-20 min-h-screen container mx-auto px-6">
    {/* <CyberGrid /> */}
    <div className="relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        精选开源项目 <span className="text-[#0066FF] text-6xl">.</span>
      </motion.h1>

      <div
        id="SOLUTIONS_GRID"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ opacity: 1, visibility: 'visible', minHeight: '100px' }}
      >
        {[
          {
            title: "newide",
            desc: "基于 Web 的轻量级 IDE 实验项目，探索浏览器端代码编辑与前端交互的极限。",
            tags: ["TypeScript", "Web IDE", "Editor"],
            color: "#3178C6"
          },
          {
            title: "aicosplay",
            desc: "Aether 视界：将 AI 生成技术与 Cosplay 文化结合的创新应用，打破次元壁。",
            tags: ["Vue", "AI Art", "Creative"],
            color: "#4FC08D"
          },
          {
            title: "manus",
            desc: "智能流处理自动化工具。提供完整的 run_flow 逻辑与环境配置指南，简化复杂任务。",
            tags: ["Python", "Automation", "Workflow"],
            color: "#3776AB"
          },
          {
            title: "apimiddle",
            desc: "高性能 API 中间件解决方案。专注于底层数据清洗、代理转发与接口聚合。",
            tags: ["JavaScript", "Middleware", "Backend"],
            color: "#F7DF1E"
          },
          {
            title: "xian",
            desc: "TANGandXUE 协作项目。基于 TypeScript 的现代应用开发，探索最佳实践。",
            tags: ["TypeScript", "Collab", "Modern Web"],
            color: "#3178C6"
          },
          {
            title: "More...",
            desc: "访问我的 GitHub 主页查看更多项目，从底层 C++ 到上层前端应用的完整版图。",
            tags: ["GitHub", "Explorer"],
            color: "#ffffff"
          }
        ].map((item, i) => (
          <div
            key={i}
            className="group relative h-[320px] p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] transition-all duration-300 overflow-hidden flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold group-hover:text-[#0066FF] transition-colors">{item.title}</h3>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="text-xs font-mono px-2 py-1 bg-white/5 rounded border border-white/5 text-gray-400 group-hover:border-[#0066FF]/30 group-hover:text-white transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* 装饰性背景 */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#0066FF]/0 to-[#0066FF]/10 rounded-full blur-2xl group-hover:from-[#0066FF]/10 group-hover:to-[#0066FF]/20 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Solutions;
