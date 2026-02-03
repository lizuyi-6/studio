import React, { memo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// 性能优化：预渲染SVG为图像缓存
const SVGCached = memo(({ children, className, width, height }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // 强制创建合成层，提升GPU渲染
    const svg = svgRef.current;
    if (svg) {
      // 预热渲染层
      svg.style.transform = 'translateZ(0)';
      svg.style.willChange = 'transform, opacity';
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      style={{
        // 提前创建合成层
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        // 使用CSS变量减少重绘
        isolation: 'isolate'
      }}
    >
      {children}
    </svg>
  );
});

// 星球组件（极致性能优化版）
const Planet = memo(({ color, size, ring, delay = 0, duration = 20 }) => {
  const planetRef = useRef(null);

  useEffect(() => {
    // 预热GPU合成层
    if (planetRef.current) {
      planetRef.current.style.transform = 'translateZ(0)';
    }
  }, []);

  return (
    <motion.div
      ref={planetRef}
      className="absolute"
      style={{
        // 提前创建合成层
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        // 提示浏览器优化
        willChange: 'transform',
        // 隔离合成层
        isolation: 'isolate'
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        y: {
          duration: 6 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        },
      }}
    >
      <SVGCached width={size} height={size}>
        <style>
          {`
            @keyframes planet-rotate-${color.replace(/[^a-zA-Z0-9]/g, '')} {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .planet-rotate-${color.replace(/[^a-zA-Z0-9]/g, '')} {
              transform-origin: center center;
              animation: planet-rotate-${color.replace(/[^a-zA-Z0-9]/g, '')} ${duration}s linear infinite;
              /* 强制GPU加速 */
              transform: translateZ(0) rotate(0deg);
              will-change: transform;
            }
          `}
        </style>
        <defs>
          <radialGradient id={`planet-${color}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* 星球主体 */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill={`url(#planet-${color})`}
          className={`planet-rotate-${color.replace(/[^a-zA-Z0-9]/g, '')}`}
          style={{
            // 使用content-visibility优化屏幕外渲染
            contentVisibility: 'auto',
            // 提示浏览器
            willChange: 'transform'
          }}
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
            style={{
              transform: 'translateZ(0) rotate(-20 50 50)',
              willChange: 'transform'
            }}
          />
        )}
      </SVGCached>
    </motion.div>
  );
});

Planet.displayName = 'Planet';

// 星星组件（极致性能优化版）
const Star = memo(({ x, y, size, delay }) => {
  const starRef = useRef(null);

  useEffect(() => {
    // 预热GPU合成层
    if (starRef.current) {
      starRef.current.style.transform = 'translateZ(0)';
    }
  }, []);

  return (
    <motion.div
      ref={starRef}
      className="absolute"
      style={{
        left: x,
        top: y,
        // 强制GPU合成
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        // 提升为合成层
        willChange: 'transform, opacity',
        // 隔离重排
        contain: 'layout style paint',
        // 独立合成层
        isolation: 'isolate'
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
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        style={{
          // 预渲染SVG
          transform: 'translateZ(0)',
          shapeRendering: 'optimizeSpeed' // 优化渲染速度
        }}
      >
        <circle cx="6" cy="6" r="1.5" fill="white" />
      </svg>
    </motion.div>
  );
});

Star.displayName = 'Star';

// 流星组件（极致性能优化版）
const ShootingStar = memo(({ delay }) => {
  const shootingStarRef = useRef(null);

  useEffect(() => {
    if (shootingStarRef.current) {
      shootingStarRef.current.style.transform = 'translateZ(0)';
    }
  }, []);

  return (
    <motion.div
      ref={shootingStarRef}
      className="absolute"
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        willChange: 'transform, opacity',
        contain: 'layout style paint',
        isolation: 'isolate'
      }}
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
      <svg
        width="200"
        height="2"
        viewBox="0 0 200 2"
        style={{
          transform: 'translateZ(0)',
          shapeRendering: 'optimizeSpeed'
        }}
      >
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

// 主背景组件（完整动画 + 极致性能优化）
export const SpaceBackground = memo(() => {
  // 完整的30个星星
  const stars = Array.from({ length: 30 }, (_, i) => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: 8 + Math.random() * 12,
    delay: Math.random() * 3
  }));

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        // 提升整个背景为合成层
        transform: 'translateZ(0)',
        willChange: 'transform',
        // 隔离渲染
        contain: 'strict'
      }}
    >
      {/* 30个星星 */}
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}

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

// 简化版 - 用于页面内部区域（完整动画 + 极致性能优化）
export const SpaceElements = memo(({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      style={{
        transform: 'translateZ(0)',
        contain: 'strict'
      }}
    >
      {/* 单个装饰星球 */}
      <motion.div
        className="absolute right-10 top-10 opacity-20"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform',
          isolation: 'isolate'
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          style={{
            transform: 'translateZ(0)',
            shapeRendering: 'optimizeSpeed'
          }}
        >
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
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            contain: 'layout style paint',
            willChange: 'opacity',
            isolation: 'isolate'
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
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            style={{
              transform: 'translateZ(0)',
              shapeRendering: 'optimizeSpeed'
            }}
          >
            <circle cx="6" cy="6" r="2" fill="white" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
});

SpaceElements.displayName = 'SpaceElements';
