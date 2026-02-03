import React, { memo, useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 动态星球组件 - 随滚动位置运动
const DynamicPlanet = memo(({
  baseX,
  baseY,
  size,
  color,
  scrollSpeed = 1,
  parallaxX = 0,
  parallaxY = 0,
  rotationDuration = 30,
  hasGlow = true,
  hasRing = false
}) => {
  const { scrollY } = useScroll();
  const planetRef = useRef(null);

  // 根据滚动位置计算变换
  const y = useTransform(scrollY, [0, 2000], [baseY, baseY - 800 * scrollSpeed]);
  const x = useTransform(scrollY, [0, 2000], [baseX, baseX + parallaxX]);
  const scale = useTransform(scrollY, [0, 1000, 2000], [1, 1.2, 0.8]);
  const opacity = useTransform(scrollY, [0, 500, 1500, 2000], [0.9, 1, 0.8, 0.5]);

  const safeColorName = color.replace(/[^a-zA-Z0-9]/g, '');

  return (
    <motion.div
      ref={planetRef}
      className="absolute"
      style={{
        x,
        y,
        scale,
        opacity,
        willChange: 'transform',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{
          overflow: 'visible',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <style>
          {`
            @keyframes dynamic-planet-rotate-${safeColorName} {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .dynamic-planet-rotate-${safeColorName} {
              transform-origin: center center;
              animation: dynamic-planet-rotate-${safeColorName} ${rotationDuration}s linear infinite;
            }
          `}
        </style>

        <defs>
          {/* 主渐变 */}
          <radialGradient id={`dynamic-planet-${safeColorName}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.7" />
            <stop offset="100%" stopColor={color} stopOpacity="0.2" />
          </radialGradient>

          {/* 发光效果 */}
          {hasGlow && (
            <filter id={`dynamic-glow-${safeColorName}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          )}
        </defs>

        {/* 外发光（如果启用） */}
        {hasGlow && (
          <circle
            cx="50"
            cy="50"
            r="42"
            fill={color}
            opacity="0.2"
            filter={`url(#dynamic-glow-${safeColorName})`}
          />
        )}

        {/* 星球主体 */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill={`url(#dynamic-planet-${safeColorName})`}
          className={`dynamic-planet-rotate-${safeColorName}`}
          filter={hasGlow ? `url(#dynamic-glow-${safeColorName})` : undefined}
        />

        {/* 内部高光 */}
        <circle
          cx="40"
          cy="40"
          r="12"
          fill="white"
          opacity="0.3"
        />

        {/* 光环（如果启用） */}
        {hasRing && (
          <ellipse
            cx="50"
            cy="50"
            rx="50"
            ry="12"
            fill="none"
            stroke={color}
            strokeWidth="2"
            opacity="0.4"
            transform="rotate(-20 50 50)"
            style={{ transform: 'translateZ(0) rotate(-20 50 50)' }}
          />
        )}
      </svg>
    </motion.div>
  );
});

DynamicPlanet.displayName = 'DynamicPlanet';

// 星云效果组件
const Nebula = memo(({ x, y, size, color, scrollSpeed = 0.5 }) => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 1000, 2000], [0.3, 0.5, 0.1]);
  const scale = useTransform(scrollY, [0, 2000], [1, 1.5]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        opacity,
        scale,
        willChange: 'transform, opacity',
      }}
    >
      <div
        className="rounded-full blur-3xl"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
});

Nebula.displayName = 'Nebula';

// 主组件：太空之旅
export const SpaceJourney = memo(({ className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 鼠标跟随效果
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* 背景星云 */}
      <Nebula x="-10%" y="20%" size="600px" color="#0066FF15" scrollSpeed={0.3} />
      <Nebula x="60%" y="80%" size="500px" color="#8b5cf615" scrollSpeed={0.4} />
      <Nebula x="30%" y="50%" size="400px" color="#ec489910" scrollSpeed={0.2} />

      {/* 大星球 - 左侧可见区域，向上移动 */}
      <DynamicPlanet
        baseX="5%"
        baseY="60%"
        size="350"
        color="#0066FF"
        scrollSpeed={0.5}
        parallaxX={100}
        parallaxY={-400}
        rotationDuration={40}
        hasGlow={true}
        hasRing={true}
      />

      {/* 中等星球 - 右侧可见区域，向左上方移动 */}
      <DynamicPlanet
        baseX="80%"
        baseY="40%"
        size="280"
        color="#8b5cf6"
        scrollSpeed={0.4}
        parallaxX={-200}
        parallaxY={-300}
        rotationDuration={35}
        hasGlow={true}
      />

      {/* 小星球 - 右下方向上移动 */}
      <DynamicPlanet
        baseX="70%"
        baseY="80%"
        size="180"
        color="#ec4899"
        scrollSpeed={0.7}
        parallaxX={-100}
        parallaxY={-500}
        rotationDuration={25}
        hasGlow={true}
      />

      {/* 微型星球 - 左侧背景 */}
      <DynamicPlanet
        baseX="15%"
        baseY="30%"
        size="100"
        color="#00D4FF"
        scrollSpeed={0.3}
        parallaxX={50}
        parallaxY={-200}
        rotationDuration={20}
        hasGlow={true}
      />

      {/* 微型星球 - 右上侧 */}
      <DynamicPlanet
        baseX="85%"
        baseY="20%"
        size="120"
        color="#FF6B9D"
        scrollSpeed={0.35}
        parallaxX={-80}
        parallaxY={-150}
        rotationDuration={28}
        hasGlow={true}
      />

      {/* 流星效果 */}
      <motion.div
        className="absolute"
        initial={{ x: '-10%', y: '20%', opacity: 0 }}
        animate={{
          x: '110%',
          y: '80%',
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 10,
          ease: "easeOut"
        }}
      >
        <svg width="300" height="3" viewBox="0 0 300 3">
          <defs>
            <linearGradient id="shooting-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#0066FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <line x1="0" y1="1.5" x2="300" y2="1.5" stroke="url(#shooting-star-gradient)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
});

SpaceJourney.displayName = 'SpaceJourney';
