// 动画变体配置

// 基础淡入
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// 淡入上浮
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

// 淡入下沉
export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

// 淡入左滑
export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

// 淡入右滑
export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

// 缩放淡入
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } // 弹性效果
};

// 旋转淡入
export const rotateIn = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// 模糊淡入
export const blurIn = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" }
};

// 错开容器
export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  viewport: { once: true, margin: "-100px" }
};

// 快速错开
export const staggerFast = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// 慢速错开
export const staggerSlow = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

// 子元素动画
export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// 子元素缩放
export const staggerItemScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  }
};

// 子元素滑入
export const staggerItemSlide = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// 页面过渡
export const pageTransition = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.98,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

// 卡片悬停
export const cardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    boxShadow: "0 0 0 rgba(0, 102, 255, 0)"
  },
  hover: { 
    scale: 1.02, 
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 102, 255, 0.15)",
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// 按钮悬停
export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { scale: 0.95 }
};

// 图片悬停
export const imageHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// 文字滑动
export const textSlide = {
  rest: { y: 0 },
  hover: { 
    y: -3,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// 发光脉冲
export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(0, 102, 255, 0.2)",
      "0 0 40px rgba(0, 102, 255, 0.4)",
      "0 0 20px rgba(0, 102, 255, 0.2)"
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

// 呼吸效果
export const breathe = {
  animate: {
    scale: [1, 1.02, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

// 浮动效果
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

// 摇摆效果
export const wobble = {
  animate: {
    rotate: [-2, 2, -2],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

// 视差滚动配置
export const parallaxConfig = {
  slow: { y: [0, -30] },
  medium: { y: [0, -60] },
  fast: { y: [0, -100] }
};

// 滚动触发动画配置
export const scrollTriggerConfig = {
  once: true,
  amount: 0.3,
  margin: "-100px"
};

// 弹簧动画配置
export const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 20
};

// 弹性配置
export const bounceConfig = {
  type: "spring",
  stiffness: 400,
  damping: 10
};

// 平滑配置
export const smoothConfig = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.6
};
