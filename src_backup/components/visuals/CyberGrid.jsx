import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const SystemHUD = () => (
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
            <SystemHUD />

            {/* Ambient Glow Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>


            {/* 漂浮粒子 (Interactive) */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => {
                    // Random initial positions
                    const initialX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000);
                    const initialY = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000);

                    // Create transformation based on mouse proximity
                    const x = useTransform(mouseX, [0, window.innerWidth], [initialX - 20, initialX + 20]);
                    const y = useTransform(mouseY, [0, window.innerHeight], [initialY - 20, initialY + 20]);

                    return (
                        <motion.div
                            key={i}
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
                })}
            </div>
        </div>
    );
};

export default CyberGrid;
