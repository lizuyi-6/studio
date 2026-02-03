import React from 'react';

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

export default Logo;
