import React from 'react';
import { motion } from 'framer-motion';

// 2. 拼图/网络图 (全栈架构) - 动态版
const NetworkDiagram = () => (
    <div className="w-full aspect-[3/2] flex items-center justify-center">
        <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* 中心节点 */}
            <g transform="translate(300, 200)">
                {/* 底部平台 */}
                <path d="M-120 60 L0 120 L120 60 L0 0 Z" fill="#001133" stroke="#003366" strokeWidth="1" />

                {/* 核心拼图块 - 悬浮动画 */}
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

                {/* 连接线向外发散 - 脉冲效果 */}
                <g stroke="#444" strokeWidth="1">
                    <motion.line x1="-70" y1="30" x2="-150" y2="-20" animate={{ strokeOpacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.line x1="70" y1="30" x2="150" y2="-20" animate={{ strokeOpacity: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
                    <motion.line x1="0" y1="120" x2="0" y2="160" animate={{ strokeOpacity: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
                </g>

                {/* 标签节点 - 呼吸灯 */}
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

export default NetworkDiagram;
