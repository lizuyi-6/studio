import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Hexagon, Layers, Box, Cpu, Menu, X, Github, Globe, Mail, Zap, Compass, GitBranch, Terminal, Figma, Database, Layout, Server, Code, Braces, Cloud, Command, Settings, Linkedin } from 'lucide-react';

// 懒加载 TeamPage
const TeamPage = lazy(() => import('./TeamPage'));

// 导入背景组件
import { SpaceBackground } from './SpaceBackground';
import { SpaceJourney } from './SpaceJourney';

// 导入装饰组件
import {
  DataFlowTop,
  CornerDecoration,
  FloatingTechIcon,
  GridBackground,
  PulseRing,
  HUDIndicator,
  CircuitDecoration,
  RippleEffect
} from './Decorations';

// --- 全局样式注入 ---
const GlobalStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Inter:wght@400;600;700&display=swap');
    
    body {
      font-family: 'Inter', 'Noto Sans SC', sans-serif;
      background-color: #000000;
      color: #FFFFFF;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* --- Scrollbar Hiding --- */
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* 核心蓝色 - 企业级 */
    :root {
      --primary-blue: #0066FF;
      --deep-blue: #0033CC;
      --glow-blue: rgba(0, 102, 255, 0.4);
    }

    /* 底部光晕 */
    .hero-glow {
      background: radial-gradient(circle at 50% 100%, var(--primary-blue) 0%, transparent 70%);
      opacity: 0.6;
      filter: blur(100px);
      pointer-events: none;
    }

    /* 玻璃卡片 */
    .tech-card {
      background: rgba(20, 20, 20, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }

    /* 文本高亮 */
    .text-highlight {
      color: var(--primary-blue);
    }
    
    /* 斜杠装饰 */
    .slash::after {
      content: '/';
      color: var(--primary-blue);
      margin-left: 0.5rem;
      font-weight: 300;
    }

    /* 动画优化 */
    @keyframes shimmer-flow {
      0% { transform: translateY(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(100%); opacity: 0; }
    }
    .animate-flow {
      animation: shimmer-flow 3s infinite linear;
    }
  `}</style>
);

// ... (other components remain unchanged)


// --- SVG 图示组件 (Aether 定制版) ---

// 0. 品牌 Logo (用户定制版 - Center & Brackets)
const Logo = ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#0066FF]">
            <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066FF" />
                    <stop offset="100%" stopColor="#003399" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g transform="translate(20, 20)">
                {/* 1. 中央核心正方形 (Filled Square) */}
                <rect x="-6" y="-6" width="12" height="12" fill="url(#logo-gradient)" filter="url(#glow)" />

                {/* 2. 四角括弧 (Brackets/Frame) */}
                {/* 左上 */}
                <path d="M-14 -6 V-12 H-8" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                {/* 右上 */}
                <path d="M8 -12 H14 V-6" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                {/* 右下 */}
                <path d="M14 6 V12 H8" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                {/* 左下 */}
                <path d="M-8 12 H-14 V 6" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
            </g>
        </svg>
    </div>
);

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
                    <motion.circle r="4" fill="#0066FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                    <text x="0" y="-15" textAnchor="middle" fill="#AAA" fontSize="12">Firmware</text>
                </g>
                <g transform="translate(150, -20)">
                    <motion.circle r="4" fill="#0066FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
                    <text x="0" y="-15" textAnchor="middle" fill="#AAA" fontSize="12">Middleware</text>
                </g>
                <g transform="translate(0, 160)">
                    <motion.circle r="4" fill="#0066FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
                    <text x="0" y="20" textAnchor="middle" fill="#AAA" fontSize="12">Interface</text>
                </g>
            </g>
        </svg>
    </div>
);

// --- 布局组件 ---

// --- 装饰性背景组件 ---
// --- 装饰性背景组件 (Interactive) ---


const CodeFragments = () => {
    // 随机代码片段
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
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
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
};

const CyberParticle = ({ mouseX, mouseY }) => {
    const initialX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000);
    const initialY = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000);

    const x = useTransform(mouseX, [0, window.innerWidth], [initialX - 20, initialX + 20]);
    const y = useTransform(mouseY, [0, window.innerHeight], [initialY - 20, initialY + 20]);

    return (
        <motion.div
            className="absolute bg-[#0066FF] rounded-full opacity-20"
            style={{
                x,
                y,
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
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
    );
};

const CyberGrid = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* 动态网格背景 */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Code Fragments Background Layer */}
            <CodeFragments />

            {/* Ambient Glow Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>


            {/* 漂浮粒子 (Interactive) */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <CyberParticle key={i} index={i} mouseX={mouseX} mouseY={mouseY} />
                ))}
            </div>
        </div>
    );
};

const Navbar = ({ currentView, onViewChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    // 导航配置
    const navLinks = [
        { name: '首页', id: 'home' },
        { name: '解决方案', id: 'solutions' },
        { name: '技术栈', id: 'tech' },
        { name: '关于', id: 'about' },
        { name: '企业团队', id: 'team' }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-16 flex justify-between items-center">
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => onViewChange('home')}
                >
                    <Logo className="h-8 w-8 text-[#0066FF]" />
                    <span className="font-bold text-lg tracking-wide uppercase text-white hover:text-[#0066FF] transition-colors">Aether Studio</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
                    {navLinks.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onViewChange(item.id)}
                            className={`transition-colors hover:text-white ${currentView === item.id ? 'text-white font-bold' : ''}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-medium hover:text-white text-gray-400 transition-colors">
                        加入我们
                    </button>
                    <a href="#" className="bg-white text-black px-5 py-2 rounded-[4px] text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center">
                        联系我们
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Content */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4">
                    {navLinks.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => { onViewChange(item.id); setIsOpen(false); }}
                            className={`text-left py-2 block hover:text-white ${currentView === item.id ? 'text-white' : 'text-gray-400'}`}
                        >
                            {item.name}
                        </button>
                    ))}
                    <a href="#" className="text-gray-400 hover:text-white py-2 block">加入我们</a>
                    <a href="#" className="bg-white text-black px-5 py-3 rounded-[4px] text-sm font-bold w-full text-center block">
                        联系我们
                    </a>
                </div>
            )}
        </nav>
    );
};

// --- 文本乱码解密效果 ---
const ScrambleText = ({ text, className, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

    useEffect(() => {
        let iteration = 0;
        // const maxIterations = 15; // 乱码迭代次数 - Unused
        let interval;

        const startScramble = setTimeout(() => {
            interval = setInterval(() => {
                setDisplayText(
                    text.split('').map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 2; // 控制解密速度
            }, 30);
        }, delay);

        return () => {
            clearTimeout(startScramble);
            clearInterval(interval);
        };
    }, [text, delay]);

    return <span className={className}>{displayText}</span>;
};

const Hero = () => (
    <section className="relative pt-32 pb-20 lg:min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* <CyberGrid /> moved to App level */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

            {/* 左侧文字区 */}
            <div className="text-left order-2 lg:order-1">
                <div className="flex flex-wrap gap-3 mb-8">
                    {/* Aether 专属技术标签 */}
                    {["全栈开发", "嵌入式系统", "工业物联网", "高性能计算", "三维可视化"].map(item => (
                        <span key={item} className="flex items-center gap-2 text-xs text-gray-500 font-mono bg-white/5 px-2 py-1 rounded border border-white/5 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full"></span>
                            {item}
                        </span>
                    ))}
                </div>
                <div className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight min-h-[160px]">
                    <ScrambleText text="构建数字世界的" className="block mb-2" delay={500} />
                    <span className="text-highlight">
                        <ScrambleText text="精密工程" delay={1500} />
                    </span>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="text-gray-400 mb-8 max-w-lg leading-relaxed text-lg"
                >
                    Aether Studio 提供从底层硬件驱动到顶层交互界面的全链路解决方案。拒绝平庸的模板，只做高可用、高扩展的定制化架构。
                </motion.p>
                <div className="flex gap-4">
                    <a href="#" className="bg-white/10 text-white px-6 py-3 rounded-[4px] font-medium hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center">
                        查看案例
                    </a>
                    <a href="#" className="bg-white text-black px-6 py-3 rounded-[4px] font-bold hover:bg-gray-200 transition-colors flex items-center justify-center">
                        启动项目
                    </a>
                </div>
            </div>

            {/* 右侧视觉区 - 数据流光束 (Enhanced) */}
            <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000">
                <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#0066FF] to-transparent opacity-20"></div>

                {/* 复杂数据流群 */}
                <div className="flex gap-2 md:gap-4 h-full items-center justify-center transform rotate-y-12">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-full relative overflow-hidden border border-white/5 rounded-full ${i === 2 ? 'w-4 md:w-6 bg-white/5' : 'w-1 md:w-2 bg-white/5'}`}>
                            {/* 多个光束片段 */}
                            {[...Array(3)].map((_, j) => (
                                <div
                                    key={j}
                                    className={`absolute w-full rounded-full blur-md animate-flow ${i === 2 ? 'bg-white' : 'bg-[#0066FF]'}`}
                                    style={{
                                        height: Math.random() * 20 + 10 + '%',
                                        opacity: Math.random() * 0.5 + 0.5,
                                        animationDuration: Math.random() * 2 + 1.5 + 's',
                                        animationDelay: Math.random() * 2 + 's'
                                    }}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* 装饰性光晕 */}
                <div className="absolute bg-[#0066FF] w-32 h-32 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            </div>
        </div>

        {/* 底部光晕 */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] hero-glow z-[-1]"></div>
    </section>
);

const FeatureSectionOne = () => (
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
                {/* 左侧文字 - Aether 内容 */}
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

                {/* 右侧图示 - 动态浮入 */}
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

const FeatureSectionTwo = () => (
    <section className="py-24 bg-black border-t border-white/5 relative">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* 左侧图示 (移动端在下方) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1 border border-white/5 bg-white/[0.02] rounded-xl p-8 hover:bg-white/[0.05] transition-colors shadow-2xl shadow-black/50"
                >
                    <NetworkDiagram />
                </motion.div>

                {/* 右侧文字 - Aether 内容 */}
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
                        <Layers size={28} className="text-white" />
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
                        <Cpu size={28} className="text-white" />
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
                        <Box size={28} className="text-white" />
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

const Footer = ({ onNavigate }) => {
  const navLinks = [
    { label: '关于', href: '#about' },
    { label: '优势', href: '#values' },
    { label: '方案', href: '#solutions' },
    { label: '团队', href: '#team' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/lizuyi-6', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@aether.io', label: 'Email' },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    if (!onNavigate) return;
    
    if (href === '#about') onNavigate('about');
    else if (href === '#values') onNavigate('home');
    else if (href === '#solutions') onNavigate('solutions');
    else if (href === '#team') onNavigate('team');
  };

  return (
    <footer className="bg-black border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-10 w-10" />
              <span className="text-white font-semibold text-lg">Aether Studio</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              专注于高性能 Web 架构与工业级交互设计，为企业提供端到端的数字化解决方案。
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} aria-label={social.label}
                    className="w-10 h-10 bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#0066FF] hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">导航</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={(e) => handleNav(e, link.href)} className="text-white/40 hover:text-white transition-colors text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">服务</h4>
            <ul className="space-y-3">
              {['Web 开发', 'UI/UX 设计', '技术咨询', '性能优化'].map((service) => (
                <li key={service}>
                  <span className="text-white/40 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">联系</h4>
            <div className="space-y-3 text-sm text-white/40">
              <p>北京市海淀区中关村科技园</p>
              <p>A座 15层</p>
              <p className="pt-2">
                <a href="mailto:hello@aether.io" className="hover:text-[#0066FF] transition-colors">hello@aether.io</a>
              </p>
              <p>
                <a href="tel:+86-400-888-8888" className="hover:text-[#0066FF] transition-colors">400-888-8888</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2025 Aether Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">隐私政策</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- 页面视图组件 ---

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};





const HomeView = ({ onNavigate }) => (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        // Physics Update (Phase XVI): Switching to 'Sticky Stacking'.
        // Removed snap attributes. Kept overflow-y-scroll for the container.
        className="relative h-screen overflow-y-scroll"
    >
        {/* Fixed Background Elements - 动态太空之旅 + 静态背景 */}
        <div className="fixed inset-0 pointer-events-none z-0">
            <SpaceBackground />
            <SpaceJourney />
        </div>

        {/* Stacking Sections (Card Deck Effect) */}
        <div className="relative z-10 text-center">
            {/* Section 1: Hero (Bottom of stack) */}
            <section
                className="sticky top-0 h-screen w-full flex flex-col justify-center relative bg-black z-10"
            >
                <Hero />
            </section>

            {/* Section 2: Slides over Hero */}
            <section
                className="sticky top-0 h-screen w-full flex flex-col justify-center relative bg-black z-20 shadow-[0_-5px_30px_rgba(0,0,0,0.8)]"
            >
                <FeatureSectionOne />
            </section>

            {/* Section 3: Slides over Section 2 */}
            <section
                className="sticky top-0 h-screen w-full flex flex-col justify-center relative bg-black z-30 shadow-[0_-5px_30px_rgba(0,0,0,0.8)]"
            >
                <FeatureSectionTwo />
            </section>

            {/* Section 4: Tech + Footer (Slides over Section 3) */}
            <div
                className="relative min-h-screen w-full flex flex-col relative bg-black z-40 shadow-[0_-5px_30px_rgba(0,0,0,0.8)]"
            >
                {/* TechStack fills at least one screen */}
                <div className="min-h-screen flex flex-col justify-center">
                    <TechStackSection onNavigate={onNavigate} />
                </div>
                <Footer onNavigate={onNavigate} />
            </div>
        </div>
    </motion.div>
);

// 为列表容器定一个 "Stagger" 变体


const SolutionsView = ({ onNavigate }) => (
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

        <Footer onNavigate={onNavigate} />
    </div>
);

// --- 4.0 Enterprise Tech Grid (Minimalist Style) ---

const TechItem = ({ name, level, icon }) => {
    return (
        <div className="group cursor-default relative py-1">
            <div className="flex items-center justify-between mb-2 z-10 relative">
                <div className="flex items-center gap-3">
                    <div className="text-gray-500 group-hover:text-[#0066FF] transition-colors duration-300">
                        {icon}
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors tracking-wide">
                        {name}
                    </span>
                </div>
                <div className="font-mono text-xs font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity text-gray-500 group-hover:text-[#0066FF]">
                    {level}%
                </div>
            </div>

            {/* Minimalist Progress Bar */}
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full absolute top-0 left-0 bg-[#0066FF]"
                />
            </div>
        </div>
    );
};

const TechCard = ({ title, items, icon, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        whileHover={{ y: -5 }}
        className={`bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.04] transition-all duration-300 ${className}`}
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/5 rounded-lg text-white/70">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
                <div className="h-0.5 w-8 bg-[#0066FF] mt-2" />
            </div>
        </div>

        <div className="space-y-6">
            {items.map((item) => (
                <TechItem key={item.name} {...item} />
            ))}
        </div>
    </motion.div>
);

const TechView = ({ onNavigate }) => {
    return (
        <div className="pt-32 pb-20 min-h-screen container mx-auto px-6 relative">
             {/* Header - Minimalist Consistent Style */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12"
            >
                <div className="max-w-2xl">
                     <h2 className="text-3xl font-bold mb-6 flex items-center">
                        工程体系 <span className="text-[#0066FF] ml-2 text-4xl font-light">/</span>
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        技术武器库
                    </h1>
                     <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                        交付全栈式高性能解决方案。
                        从底层硬件优化到像素级交互界面，我们确保每一行代码都精准执行。
                    </p>
                </div>

                {/* Simple Intro - No Stats */}
                <div className="text-right hidden md:block">
                     <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        &quot;工欲善其事，必先利其器。<br/>严选前沿技术，构建极致体验。&quot;
                    </p>
                </div>
            </motion.div>

            {/* Bento Grid Layout - Command Deck Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10">
                {/* Top Row: Strategy & Foundation */}
                {/* 1. Core Foundations (Left, Wide) */}
                <TechCard
                    className="md:col-span-2 lg:col-span-6"
                    title="Core Foundations"
                    icon={<Terminal size={24} />}
                    delay={0}
                    items={[
                        { name: "TypeScript", level: 98, icon: <Code size={16} /> },
                        { name: "JavaScript (ESNext)", level: 99, icon: <Braces size={16} /> },
                        { name: "Python", level: 85, icon: <Command size={16} /> },
                        { name: "Rust / C++", level: 75, icon: <Cpu size={16} /> }
                    ]}
                />

                {/* 2. Design & Architecture (Right, Wide) */}
                <TechCard
                    className="md:col-span-2 lg:col-span-6"
                    title="Design & Architecture"
                    icon={<Figma size={24} />}
                    delay={1}
                    items={[
                        { name: "Figma Design", level: 88, icon: <Figma size={16} /> },
                        { name: "System Design", level: 92, icon: <Layers size={16} /> },
                        { name: "Agile Workflow", level: 95, icon: <Menu size={16} /> },
                        { name: "Tech Writing", level: 88, icon: <Mail size={16} /> }
                    ]}
                />

                {/* Bottom Row: Execution Layer */}
                {/* 3. Frontend UX */}
                <TechCard
                    className="md:col-span-1 lg:col-span-4"
                    title="Frontend UX"
                    icon={<Layout size={24} />}
                    delay={2}
                    items={[
                        { name: "React 19", level: 96, icon: <Box size={16} /> },
                        { name: "Next.js 14", level: 94, icon: <Globe size={16} /> },
                        { name: "Tailwind", level: 98, icon: <Zap size={16} /> },
                        { name: "Framer Motion", level: 92, icon: <Compass size={16} /> }
                    ]}
                />

                {/* 4. Backend Services */}
                <TechCard
                    className="md:col-span-1 lg:col-span-4"
                    title="Backend Services"
                    icon={<Server size={24} />}
                    delay={3}
                    items={[
                        { name: "Node.js", level: 90, icon: <Server size={16} /> },
                        { name: "PostgreSQL", level: 85, icon: <Database size={16} /> },
                        { name: "GraphQL", level: 82, icon: <GitBranch size={16} /> },
                        { name: "Redis", level: 80, icon: <Database size={16} /> }
                    ]}
                />

                {/* 5. Cloud & DevOps */}
                <TechCard
                    className="md:col-span-2 lg:col-span-4"
                    title="Cloud & DevOps"
                    icon={<Cloud size={24} />}
                    delay={4}
                    items={[
                        { name: "Docker/K8s", level: 88, icon: <Box size={16} /> },
                        { name: "AWS Services", level: 82, icon: <Cloud size={16} /> },
                        { name: "GitHub Actions", level: 90, icon: <Settings size={16} /> },
                        { name: "Vercel Edge", level: 94, icon: <Globe size={16} /> }
                    ]}
                />
            </div>
            <Footer onNavigate={onNavigate} />
        </div>
    );
};



const AboutView = ({ onNavigate }) => (
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
                                        <a href="https://github.com/lizuyi-6" target="_blank" className="hover:text-[#0066FF] transition-colors" rel="noreferrer"><Github size={20} /></a>
                                        <a href="https://aetherstudio.top/" target="_blank" className="hover:text-[#0066FF] transition-colors" rel="noreferrer"><Globe size={20} /></a>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-serif italic text-white/80 border-b border-white/5 pb-8">
                                    &quot;在数字荒原中寻找实体感。致力于 Next-Gen Web 架构与高保真交互的融合。&quot;
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
                            viewport={{ once: true }}
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
        <Footer onNavigate={onNavigate} />
    </div>
);

export default function App() {
    const [currentView, setCurrentView] = useState('home');

    // 简单的路由/视图渲染逻辑 (Simple Routing Logic)
    const renderView = () => {
        switch (currentView) {
            case 'home': return <HomeView key="home" onNavigate={setCurrentView} />;
            case 'solutions': return <SolutionsView key="solutions" onNavigate={setCurrentView} />;
            case 'tech': return <TechView key="tech" onNavigate={setCurrentView} />;
            case 'about': return <AboutView key="about" onNavigate={setCurrentView} />;
            case 'team': return (
                <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">加载中...</div>}>
                    <TeamPage onBack={() => setCurrentView('home')} />
                </Suspense>
            );
            default: return <HomeView key="home" />;
        }
    };

    // --- Phase X: Scroll Navigation Hook ---
    useEffect(() => {
        // const views = ['home', 'solutions', 'tech', 'about']; - Unused variable removed
    }, []);

    // User Update: Removed global auto-switching. Now purely manual navigation between views.

    // 1. View Change -> Scroll to Top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [currentView]);


    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#0066FF] selection:text-white overflow-x-hidden">
            <GlobalStyles />
            <CyberGrid />
            {currentView !== 'team' && <Navbar currentView={currentView} onViewChange={setCurrentView} />}

            {/* Home页面的装饰性SVG动画 - 在App级别渲染以避免motion.div的transform影响fixed定位 */}
            {currentView === 'home' && (
                <>
                    {/* 背景装饰 */}
                    <GridBackground opacity={0.3} />

                    {/* 顶部和角落装饰 */}
                    <DataFlowTop />
                    <CornerDecoration position="top-left" />
                    <CornerDecoration position="top-right" />
                    <CornerDecoration position="bottom-left" />
                    <CornerDecoration position="bottom-right" />

                    {/* 浮动技术图标 */}
                    <FloatingTechIcon x="10%" y="20%" size={20} delay={0} />
                    <FloatingTechIcon x="85%" y="15%" size={16} delay={1} />
                    <FloatingTechIcon x="15%" y="70%" size={24} delay={2} />
                    <FloatingTechIcon x="80%" y="75%" size={18} delay={3} />

                    {/* 电路板装饰 */}
                    <CircuitDecoration position="left" />
                    <CircuitDecoration position="right" />

                    {/* HUD指示器 */}
                    <HUDIndicator label="SYS" value="ONLINE" x="20px" y="150px" />
                    <HUDIndicator label="NET" value="CONNECTED" x="20px" y="170px" />

                    {/* 脉冲环效果 */}
                    <PulseRing x="30%" y="25%" size={60} delay={0} />
                    <PulseRing x="70%" y="60%" size={80} delay={2} />

                    {/* 波纹效果 */}
                    <RippleEffect x="50%" y="40%" delay={0} />
                    <RippleEffect x="20%" y="70%" delay={3} />
                </>
            )}

            {/* 页面内容区域 (AnimatePresence 处理离场动画) */}
            <AnimatePresence mode="wait">
                {renderView()}
            </AnimatePresence>

        </div>
    );
}