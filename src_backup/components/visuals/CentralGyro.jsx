import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Plus } from 'lucide-react';

const CentralGyro = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        {/* Orbiting Status Panels (Active) */}
        <div className="absolute inset-0 z-20">
            {/* Panel 1: System Scan */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-40 p-3 bg-black/40 border border-[#0066FF]/30 backdrop-blur-sm rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ originX: "0px", originY: "180px" }} // Orbit radius hack
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
                style={{ originX: "0px", originY: "-240px" }} // Orbit radius hack
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

            {/* Panel 3: Core Security */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-28 p-2 bg-black/40 border border-white/10 backdrop-blur-sm rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ originX: "-200px", originY: "0px" }} // Orbit radius hack
            >
                <div className="flex items-center gap-2 mb-1">
                    <div className="border border-white/30 rounded p-0.5"><Zap size={8} className="text-yellow-400" /></div>
                    <span className="text-[9px] text-white">PWR_LVL</span>
                </div>
                <div className="text-xl font-mono text-white font-bold tracking-tighter">98.4<span className="text-xs text-gray-400">%</span></div>
            </motion.div>
        </div>
        {/* Core Ring 1 - Fast Rotate */}
        <motion.div
            className="absolute rounded-full border border-dashed border-[#0066FF] w-[400px] h-[400px] opacity-60 shadow-[0_0_15px_#0066FF40]"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Core Ring 2 - Reverse Slower */}
        <motion.div
            className="absolute rounded-full border border-white/20 w-[600px] h-[600px] shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white/50 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </motion.div>

        {/* Outer Ring 3 - Pulse & Scale */}
        <motion.div
            className="absolute rounded-full border-2 border-[#0066FF]/20 w-[800px] h-[800px]"
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Crosshairs inside */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Plus size={64} className="text-[#0066FF] opacity-80 drop-shadow-[0_0_8px_#0066FF]" strokeWidth={1} />
        </div>
    </div>
);

export default CentralGyro;
