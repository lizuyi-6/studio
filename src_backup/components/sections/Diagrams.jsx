import React from 'react';
import { motion } from 'framer-motion';

// 等轴侧立方体流程图
export function IsometricProcess() {
  return (
    <div className="w-full aspect-[2/1] flex items-center justify-center">
      <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="iso-cube-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3388FF" />
            <stop offset="100%" stopColor="#0044CC" />
          </linearGradient>
          <filter id="iso-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 连接线 - 动态流动 */}
        <motion.line
          x1="250" y1="200" x2="550" y2="200"
          stroke="#333"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{ strokeDashoffset: -16 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* 移动的数据包 */}
        <motion.circle
          r="4"
          fill="#0066FF"
          filter="url(#iso-glow)"
          animate={{ cx: [250, 550], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          cy="200"
        />

        {/* 左侧：暗色立方体 (传感器/硬件) */}
        <g transform="translate(150, 150)">
          <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="#111" stroke="#333" strokeWidth="1" />
          <path d="M0 25 L50 50 L100 25" fill="none" stroke="#333" strokeWidth="1" />
          <path d="M50 50 L50 100" fill="none" stroke="#333" strokeWidth="1" />
          <motion.circle
            cx="50" cy="25" r="2" fill="#00FF00"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <text x="50" y="-20" textAnchor="middle" fill="#666" fontSize="14" fontWeight="bold">SENSORS</text>
        </g>

        {/* 中间：高亮立方体 (边缘计算) */}
        <motion.g
          transform="translate(350, 130)"
          animate={{ y: [130, 125, 130] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M50 0 L100 25 L50 50 L0 25 Z" fill="#4D9FFF" />
          <path d="M100 25 L100 75 L50 100 L50 50 Z" fill="#0055CC" />
          <path d="M0 25 L50 50 L50 100 L0 75 Z" fill="#0066FF" />
          <circle cx="50" cy="50" r="6" fill="white" filter="url(#iso-glow)" />
          <line x1="50" y1="0" x2="50" y2="-30" stroke="#0066FF" strokeDasharray="2 2" />
          <text x="50" y="-40" textAnchor="middle" fill="#0066FF" fontSize="14" fontWeight="bold">EDGE COMPUTING</text>
        </motion.g>

        {/* 右侧：晶体/结果 (云端) */}
        <g transform="translate(550, 150)">
          <path d="M50 0 L100 25 L50 50 L0 25 Z" fill="none" stroke="#666" strokeWidth="1" />
          <path d="M0 25 L50 100 L100 25" fill="none" stroke="#666" strokeWidth="1" />
          <motion.path
            d="M50 0 L50 100"
            fill="none"
            stroke="#0066FF"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="50" y="-20" textAnchor="middle" fill="#888" fontSize="14" fontWeight="bold">CLOUD & UI</text>
        </g>
      </svg>
    </div>
  );
}

// 拼图/网络图
export function NetworkDiagram() {
  return (
    <div className="w-full aspect-[3/2] flex items-center justify-center">
      <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(300, 200)">
          {/* 底部平台 */}
          <path d="M-120 60 L0 120 L120 60 L0 0 Z" fill="#001133" stroke="#003366" strokeWidth="1" />

          {/* 核心拼图块 */}
          <motion.g
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <g transform="translate(-30, 10)">
              <path d="M-40 20 L0 40 L40 20 L0 0 Z" fill="#0066FF" stroke="white" strokeWidth="0.5" />
              <path d="M-40 20 L0 40 L0 60 L-40 40 Z" fill="#0044CC" />
              <path d="M0 40 L40 20 L40 40 L0 60 Z" fill="#003399" />
            </g>
            <g transform="translate(30, -10)">
              <path d="M-40 20 L0 40 L40 20 L0 0 Z" fill="#3388FF" stroke="white" strokeWidth="0.5" />
              <path d="M-40 20 L0 40 L0 60 L-40 40 Z" fill="#0055DD" />
              <path d="M0 40 L40 20 L40 40 L0 60 Z" fill="#0044BB" />
            </g>
          </motion.g>

          {/* 连接线 */}
          <g stroke="#444" strokeWidth="1">
            <motion.line x1="-70" y1="30" x2="-150" y2="-20" animate={{ strokeOpacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.line x1="70" y1="30" x2="150" y2="-20" animate={{ strokeOpacity: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
            <motion.line x1="0" y1="120" x2="0" y2="160" animate={{ strokeOpacity: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
          </g>

          {/* 标签节点 */}
          <g transform="translate(-150, -20)">
            <motion.circle cx="0" cy="0" r="4" fill="#0066FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
            <text x="0" y="-15" textAnchor="middle" fill="#AAA" fontSize="12">Firmware</text>
          </g>
          <g transform="translate(150, -20)">
            <motion.circle cx="0" cy="0" r="4" fill="#0066FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
            <text x="0" y="-15" textAnchor="middle" fill="#AAA" fontSize="12">Middleware</text>
          </g>
          <g transform="translate(0, 160)">
            <motion.circle cx="0" cy="0" r="4" fill="#0066FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
            <text x="0" y="20" textAnchor="middle" fill="#AAA" fontSize="12">Interface</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
