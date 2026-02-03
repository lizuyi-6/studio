import { memo } from 'react';
import { motion } from 'framer-motion';

// 星球组件
const Planet = memo(({ color, size, ring, delay = 0, duration = 20 }) => {
  const safeColorName = color.replace(/[^a-zA-Z0-9]/g, '');

  return (
    <motion.div
      className="absolute"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
        <style>
          {`
            @keyframes planet-rotate-${safeColorName} {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .planet-rotate-${safeColorName} {
              transform-origin: center center;
              animation: planet-rotate-${safeColorName} ${duration}s linear infinite;
            }
          `}
        </style>
        <defs>
          <radialGradient id={`planet-${safeColorName}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* 星球主体 */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill={`url(#planet-${safeColorName})`}
          className={`planet-rotate-${safeColorName}`}
        />

        {/* 光环 */}
        {ring && (
          <ellipse
            cx="50"
            cy="50"
            rx="60"
            ry="15"
            fill="none"
            stroke={color}
            strokeWidth="2"
            opacity="0.3"
            transform="rotate(-20 50 50)"
          />
        )}
      </svg>
    </motion.div>
  );
});

Planet.displayName = 'Planet';

// 星星组件
const Star = memo(({ x, y, size, delay }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: x,
        top: y,
      }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <svg width={size} height={size} viewBox="0 0 12 12">
        <circle cx="6" cy="6" r="1.5" fill="white" />
      </svg>
    </motion.div>
  );
});

Star.displayName = 'Star';

// 流星组件
const ShootingStar = memo(({ delay }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ x: '-10%', y: '20%', opacity: 0 }}
      animate={{
        x: '110%',
        y: '60%',
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatDelay: 8 + Math.random() * 7,
        ease: "easeOut"
      }}
    >
      <svg width="200" height="2" viewBox="0 0 200 2">
        <defs>
          <linearGradient id="shooting-star" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#0066FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
        <line x1="0" y1="1" x2="200" y2="1" stroke="url(#shooting-star)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
});

ShootingStar.displayName = 'ShootingStar';

// 主背景组件
export const SpaceBackground = memo(() => {
  // 30个星星
  const stars = Array.from({ length: 30 }, () => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: 8 + Math.random() * 12,
    delay: Math.random() * 3
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 30个星星 */}
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}

      {/* 左上角亮星球 - 新增 */}
      <div className="absolute left-5 top-5 opacity-70">
        <motion.div
          className="absolute"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
            <defs>
              <radialGradient id="bright-planet" cx="35%" cy="35%">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
                <stop offset="40%" stopColor="#0066FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0033CC" stopOpacity="0.3" />
              </radialGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* 外发光效果 */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="url(#bright-planet)"
              filter="url(#glow)"
              style={{
                animation: 'pulse-glow 3s ease-in-out infinite'
              }}
            />

            {/* 核心亮点 */}
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="#00D4FF"
              opacity="0.9"
              filter="url(#glow)"
            />

            {/* 额外的光晕环 */}
            <motion.circle
              cx="50"
              cy="50"
              r="50"
              fill="none"
              stroke="#00D4FF"
              strokeWidth="1"
              opacity="0.3"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>

          <style>{`
            @keyframes pulse-glow {
              0%, 100% {
                opacity: 0.8;
                filter: drop-shadow(0 0 10px #00D4FF) drop-shadow(0 0 20px #0066FF);
              }
              50% {
                opacity: 1;
                filter: drop-shadow(0 0 20px #00D4FF) drop-shadow(0 0 40px #0066FF);
              }
            }
          `}</style>
        </motion.div>
      </div>

      {/* 左侧星球 */}
      <div className="absolute left-10 top-1/4 opacity-40">
        <Planet color="#0066FF" size="180" ring duration={30} delay={0} />
      </div>

      {/* 右侧大星球 */}
      <div className="absolute right-10 top-1/3 opacity-30">
        <Planet color="#8b5cf6" size="220" ring duration={40} delay={2} />
      </div>

      {/* 右侧小星球 */}
      <div className="absolute right-32 top-20 opacity-40">
        <Planet color="#ec4899" size="100" duration={25} delay={1} />
      </div>

      {/* 2个流星 */}
      <ShootingStar delay={0} />
      <ShootingStar delay={8} />
    </div>
  );
});

SpaceBackground.displayName = 'SpaceBackground';

// 简化版 - 用于页面内部区域
export const SpaceElements = memo(({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {/* 单个装饰星球 */}
      <motion.div
        className="absolute right-10 top-10 opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="small-planet" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="35" fill="url(#small-planet)" />
          <ellipse
            cx="50"
            cy="50"
            rx="50"
            ry="12"
            fill="none"
            stroke="#0066FF"
            strokeWidth="1"
            opacity="0.2"
            transform="rotate(-15 50 50)"
          />
        </svg>
      </motion.div>

      {/* 8个星星 */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="2" fill="white" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
});

SpaceElements.displayName = 'SpaceElements';
