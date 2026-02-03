import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

// 系统 HUD 装饰
export function SystemHUD() {
  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Top Left Corner */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg"></div>
      <div className="absolute top-12 left-12 text-[10px] font-mono text-white/30 tracking-widest">SYS.READY</div>

      {/* Top Right Corner */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-lg"></div>
      <div className="absolute top-12 right-12 text-[10px] font-mono text-white/30 tracking-widest">
        <span className="animate-pulse text-[#0066FF]">●</span> REC
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-lg"></div>
      <div className="absolute bottom-12 left-12 text-[10px] font-mono text-white/30 tracking-widest">COORDS: 44.22.91</div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg"></div>

      {/* Center Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/30"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/30"></div>
      </div>
    </div>
  );
}

// 代码片段背景
export function CodeFragments() {
  const snippets = [
    "initializing core systems...",
    "loading modules [Ok]",
    "alloc_mem(0x2884)",
    "connecting to neuron net...",
    "bypass_security: true",
    "render_frame.ts:42",
    "await signal_response()",
    "Target: locked",
    "Ping: 12ms",
    "Trace complete."
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {snippets.map((text, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-[#0066FF]/40 whitespace-nowrap"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            opacity: 0
          }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [null, Math.random() * -50 - 20]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}

// 赛博朋克网格背景
export function CyberGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 动态网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Code Fragments Background Layer */}
      <CodeFragments />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating Particles */}
      <FloatingParticles />
    </div>
  );
}

// 漂浮粒子
function FloatingParticles() {
  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#0066FF] rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// 中央陀螺仪动画
export function CentralGyro() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
      {/* Orbiting Status Panels */}
      <div className="absolute inset-0 z-20">
        {/* Panel 1: System Scan */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 p-3 bg-black/40 border border-[#0066FF]/30 backdrop-blur-sm rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ originX: "0px", originY: "180px" }}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-gray-400 font-mono">SYS_SCAN</span>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#0066FF]"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="text-[9px] text-[#0066FF] mt-1 font-mono">Process: 98%</div>
        </motion.div>

        {/* Panel 2: Net Traffic */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 p-2 bg-black/40 border border-white/10 backdrop-blur-sm rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ originX: "0px", originY: "-240px" }}
        >
          <div className="text-[9px] text-gray-400 font-mono mb-1">NET_TRAFFIC</div>
          <div className="flex justify-between items-end h-6 gap-0.5">
            {[40, 70, 30, 80, 50, 90, 60].map((h, i) => (
              <motion.div
                key={i}
                className="bg-[#0066FF]/50 w-full rounded-t-sm"
                animate={{ height: [`${h / 2}%`, `${h}%`, `${h / 2}%`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Panel 3: Power Level */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-28 p-2 bg-black/40 border border-white/10 backdrop-blur-sm rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "-200px", originY: "0px" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="border border-white/30 rounded p-0.5">
              <ZapIcon />
            </div>
            <span className="text-[9px] text-white">PWR_LVL</span>
          </div>
          <div className="text-xl font-mono text-white font-bold tracking-tighter">98.4<span className="text-xs text-gray-400">%</span></div>
        </motion.div>
      </div>

      {/* Core Rings */}
      <motion.div
        className="absolute rounded-full border border-dashed border-[#0066FF] w-[400px] h-[400px] opacity-60 shadow-[0_0_15px_#0066FF40]"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute rounded-full border border-white/20 w-[600px] h-[600px] shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white/50 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </motion.div>

      <motion.div
        className="absolute rounded-full border-2 border-[#0066FF]/20 w-[800px] h-[800px]"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// 小型闪电图标
function ZapIcon() {
  return (
    <svg className="w-3 h-3 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
