import { motion } from 'framer-motion';

// 1. 等轴侧立方体流程图 (硬件 -> 处理 -> 云端) - 动态版
const IsometricProcess = () => {
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
                    cx="250"
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
                    {/* 传感器闪烁灯 */}
                    <motion.circle
                        cx="50" cy="25" r="2" fill="#00FF00"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <text x="50" y="-20" textAnchor="middle" fill="#666" fontSize="14" fontWeight="bold">SENSORS</text>
                </g>

                {/* 中间：高亮立方体 (边缘计算/核心处理) - 呼吸效果 */}
                <motion.g
                    transform="translate(350, 130)"
                    animate={{ y: [130, 125, 130] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* 顶部面 */}
                    <path d="M50 0 L100 25 L50 50 L0 25 Z" fill="#4D9FFF" />
                    {/* 右侧面 */}
                    <path d="M100 25 L100 75 L50 100 L50 50 Z" fill="#0055CC" />
                    {/* 左侧面 */}
                    <path d="M0 25 L50 50 L50 100 L0 75 Z" fill="#0066FF" />
                    {/* 核心连接点 */}
                    <circle cx="50" cy="50" r="6" fill="white" filter="url(#iso-glow)" />

                    {/* 上方标签 */}
                    <line x1="50" y1="0" x2="50" y2="-30" stroke="#0066FF" strokeDasharray="2 2" />
                    <text x="50" y="-40" textAnchor="middle" fill="#0066FF" fontSize="14" fontWeight="bold">EDGE COMPUTING</text>
                </motion.g>

                {/* 右侧：晶体/结果 (云端/交互) */}
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
};

export default IsometricProcess;
