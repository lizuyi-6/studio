import { memo } from 'react';
import { motion } from 'framer-motion';

// 顶部数据流动画
export const DataFlowTop = memo(() => (
  <div className="fixed top-20 left-0 right-0 z-20 pointer-events-none">
    <svg width="100%" height="3" className="overflow-visible">
      <defs>
        <linearGradient id="data-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#0066FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 数据流线条 */}
      <motion.line
        x1="0" y1="1" x2="100%" y2="1"
        stroke="url(#data-flow-gradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* 移动的数据点 */}
      {[...Array(3)].map((_, i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#00D4FF"
          initial={{ cx: 0, cy: 1 }}
          animate={{
            cx: [0, '100%'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear"
          }}
        />
      ))}
    </svg>
  </div>
));

DataFlowTop.displayName = 'DataFlowTop';

// 角落装饰 - 左上角
export const CornerDecoration = memo(({ position = 'top-left' }) => {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };

  return (
    <div className={`fixed ${positions[position]} z-20 pointer-events-none`}>
      <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-60">
        {/* 角落括号 */}
        <motion.path
          d="M 10 30 L 10 10 L 30 10"
          stroke="#0066FF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* 扫描线 */}
        <motion.line
          x1="10" y1="10" x2="40" y2="40"
          stroke="#00D4FF"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* 装饰点 */}
        <circle cx="10" cy="10" r="3" fill="#0066FF" opacity="0.6" />
      </svg>
    </div>
  );
});

CornerDecoration.displayName = 'CornerDecoration';

// 浮动的技术图标
export const FloatingTechIcon = memo(({ x, y, size = 24, delay = 0 }) => {
  // 使用函数返回图标而不是数组，避免 lint 警告
  const getRandomIcon = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return <rect x="-8" y="-8" width="16" height="16" rx="2" fill="none" stroke="#0066FF" strokeWidth="1.5" />;
    } else if (random === 1) {
      return <circle cx="0" cy="0" r="6" fill="none" stroke="#00D4FF" strokeWidth="1.5" />;
    } else {
      return <circle cx="0" cy="0" r="3" fill="#0066FF" />;
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-none z-20"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.7, 0.7, 0],
        scale: [0, 1, 1, 0],
        y: [0, -20, -20]
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width={size} height={size} viewBox="-12 -12 24 24">
        {getRandomIcon()}
      </svg>
    </motion.div>
  );
});

FloatingTechIcon.displayName = 'FloatingTechIcon';

// 网格背景
export const GridBackground = memo(({ className = '', opacity = 0.3 }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern-enhanced" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#0066FF"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid-pattern-enhanced)" />

        {/* 扫描线效果 */}
        <motion.line
          x1="0" y1="0" x2="100%" y2="0"
          stroke="#00D4FF"
          strokeWidth="2"
          opacity="0.3"
          animate={{
            y: [0, '100vh', '100vh']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
});

GridBackground.displayName = 'GridBackground';

// 脉冲环
export const PulseRing = memo(({ x, y, size = 100, delay = 0 }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-20"
      style={{ left: x, top: y }}
      animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#0066FF"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
    </motion.div>
  );
});

PulseRing.displayName = 'PulseRing';

// 数据传输动画
export const DataTransmission = memo(({ direction = 'horizontal' }) => {
  return (
    <div className="absolute pointer-events-none" style={{
      width: direction === 'horizontal' ? '200px' : '2px',
      height: direction === 'horizontal' ? '2px' : '200px'
    }}>
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, #0066FF, transparent)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
});

DataTransmission.displayName = 'DataTransmission';

// HUD指示器
export const HUDIndicator = memo(({ label, value, x, y }) => (
  <div
    className="absolute pointer-events-none font-mono text-xs z-30"
    style={{ left: x, top: y }}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-[#0066FF]">{label}:</span>
      <span className="text-white/60 ml-2">{value}</span>
    </motion.div>
  </div>
));

HUDIndicator.displayName = 'HUDIndicator';

// 粒子效果
export const ParticleField = memo(({ count = 20, className = '' }) => {
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5
  }));

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, #0066FF, transparent)'
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
});

ParticleField.displayName = 'ParticleField';

// 六边形装饰
export const HexagonPattern = memo(({ className = '' }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-pattern" x="0" y="0" width="60" height="104" patternUnits="userSpaceOnUse">
            <polygon
              points="30 0 60 17 60 52 30 69 0 52 0 17"
              fill="none"
              stroke="#0066FF"
              strokeWidth="0.5"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>
    </div>
  );
});

HexagonPattern.displayName = 'HexagonPattern';

// 电路板装饰
export const CircuitDecoration = memo(({ position = 'left' }) => {
  return (
    <div className={`fixed ${position}-0 top-1/4 z-20 pointer-events-none`}>
      <svg width="80" height="300" viewBox="0 0 80 300" className="opacity-50">
        {/* 垂直主线 */}
        <line x1="40" y1="0" x2="40" y2="300" stroke="#0066FF" strokeWidth="1" />

        {/* 分支电路 */}
        {[50, 100, 150, 200, 250].map((y, i) => (
          <g key={i}>
            <line x1="40" y1={y} x2="70" y2={y} stroke="#00D4FF" strokeWidth="1" />
            <circle cx="70" cy={y} r="3" fill="#0066FF" opacity="0.5" />
          </g>
        ))}

        {/* 动画信号 */}
        {[50, 150, 250].map((y, i) => (
          <motion.circle
            key={i}
            cx="40"
            cy={y}
            r="4"
            fill="#00D4FF"
            animate={{
              cy: [y, y + 20, y],
              opacity: [1, 0.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
});

CircuitDecoration.displayName = 'CircuitDecoration';

// 波纹效果
export const RippleEffect = memo(({ x, y, delay = 0 }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-20"
      style={{ left: x, top: y }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.circle
          key={i}
          r="20"
          fill="none"
          stroke="#0066FF"
          strokeWidth="1.5"
          opacity={0.7 - i * 0.2}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            scale: [0, 2, 2],
            opacity: [0.5, 0, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay + i * 0.5,
            ease: "easeOut"
          }}
          style={{ transformOrigin: 'center' }}
        />
      ))}
    </motion.div>
  );
});

RippleEffect.displayName = 'RippleEffect';

// 综合装饰包 - 导出所有
export const Decorations = {
  DataFlowTop,
  CornerDecoration,
  FloatingTechIcon,
  GridBackground,
  PulseRing,
  DataTransmission,
  HUDIndicator,
  ParticleField,
  HexagonPattern,
  CircuitDecoration,
  RippleEffect
};
