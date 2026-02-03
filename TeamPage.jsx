import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu, X, ArrowRight, Github, ExternalLink, Star,
  Linkedin, Mail, Phone, MapPin, Send,
  Layers, Cpu, Shield, Code2, Palette, Box, Gauge, Database, Lightbulb,
  Target, Zap, Compass
} from 'lucide-react';

// 导入 SpaceBackground
import { SpaceBackground } from './SpaceBackground';

// 品牌 Logo 组件
const Logo = ({ className }) => (
  <div className={`${className} flex items-center justify-center`}>
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#0066FF]">
      <defs>
        <linearGradient id="logo-gradient-team" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#003399" />
        </linearGradient>
        <filter id="glow-team">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(20, 20)">
        {/* 中央核心正方形 */}
        <rect x="-6" y="-6" width="12" height="12" fill="url(#logo-gradient-team)" filter="url(#glow-team)" />
        {/* 四角括弧 */}
        <path d="M-14 -6 V-12 H-8" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        <path d="M8 -12 H14 V-6" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        <path d="M14 6 V12 H8" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        <path d="M-8 12 H-14 V 6" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      </g>
    </svg>
  </div>
);

// --- 动画变体 ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// --- 数据 ---


const values = [
  {
    icon: Layers,
    title: '全链路架构',
    description: '打通物理与数字世界边界，确保每一比特数据的精确传输与处理。从采集到呈现，无缝衔接。',
    features: ['端到端方案', '全栈架构', '无缝集成'],
  },
  {
    icon: Cpu,
    title: '极致性能',
    description: '深入理解硬件特性，直接操作寄存器，在云端使用 Rust 和 Go 构建高吞吐微服务。',
    features: ['RTOS 实时系统', 'FPGA 加速', '容器编排'],
  },
  {
    icon: Shield,
    title: '核心掌控',
    description: '从 Bootloader 到渲染引擎，坚持自主研发关键组件，确保系统的绝对可控与安全。',
    features: ['工业物联网', '边缘计算', '极致性能'],
  },
];

const projects = [
  {
    name: 'newide',
    description: '基于 Web 的轻量级 IDE，探索浏览器端代码编辑与前端交互的极限。',
    tags: ['TypeScript', 'Web IDE'],
    stars: 1280,
    github: '#',
    demo: '#',
  },
  {
    name: 'aicosplay',
    description: 'AI 生成技术与 Cosplay 文化结合的创新应用，打破次元壁。',
    tags: ['Vue', 'AI Art'],
    stars: 892,
    github: '#',
    demo: '#',
  },
  {
    name: 'manus',
    description: '智能流处理自动化工具，简化复杂任务流程。',
    tags: ['Python', 'Automation'],
    stars: 2156,
    github: '#',
  },
  {
    name: 'apimiddle',
    description: '高性能 API 中间件，专注数据清洗与接口聚合。',
    tags: ['JavaScript', 'Middleware'],
    stars: 567,
    github: '#',
  },
];

const services = [
  { icon: Code2, title: 'Web 开发', subtitle: 'Development', description: '高性能前端与全栈开发服务' },
  { icon: Palette, title: 'UI/UX 设计', subtitle: 'Design', description: '以用户为中心的产品设计服务' },
  { icon: Box, title: '创意开发', subtitle: 'Creative', description: 'WebGL 与沉浸式交互开发' },
  { icon: Gauge, title: '性能优化', subtitle: 'Performance', description: '核心指标诊断与优化服务' },
  { icon: Database, title: 'CMS 集成', subtitle: 'Integration', description: '内容管理与无头架构服务' },
  { icon: Lightbulb, title: '技术咨询', subtitle: 'Consulting', description: '技术架构与顾问服务' },
];

const dna = [
  { icon: Target, title: '精准交付', description: '像素级校准，追求极致的视觉纯净度。' },
  { icon: Zap, title: '性能优先', description: 'Rust + WASM 底层异构加速。' },
  { icon: Compass, title: '持续创新', description: '重新定义 Web 的交互边界。' },
];

const steps = [
  { num: '01', title: '需求分析', desc: '需求剖析与技术定调' },
  { num: '02', title: '架构设计', desc: '系统设计与原子组件' },
  { num: '03', title: '开发实施', desc: '工业级构建与测试' },
  { num: '04', title: '交付运维', desc: '全球化分发与监控' },
];

// --- 组件 ---

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 h-[2px] bg-[#0066FF] z-[9999] origin-left" style={{ transform: `scaleX(${progress / 100})` }} />
  );
};

const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
    }}
  />
);

const Navigation = ({ onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '关于', href: '#about' },
    { label: '优势', href: '#values' },
    { label: '方案', href: '#solutions' },
    { label: '团队', href: '#team' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={onBack} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo className="h-8 w-8" />
            <span className="text-white font-semibold text-lg tracking-tight">Aether Studio</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button key={link.label} onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => scrollToSection('#contact')} className="text-sm text-white/50 hover:text-white transition-colors">
              联系我们
            </button>
            <button onClick={() => scrollToSection('#contact')} className="bg-white text-black px-5 py-2 text-sm font-bold hover:bg-[#0066FF] hover:text-white transition-all">
              开始合作
            </button>
          </div>

          <button className="lg:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button key={link.label} onClick={() => scrollToSection(link.href)}
                className="block text-white/70 hover:text-white py-2 w-full text-left">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('#contact')} className="w-full bg-white text-black px-5 py-3 font-bold text-center">
              开始合作
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
      <div className="max-w-2xl">
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-8">
          <span className="text-[#0066FF] font-medium">Aether Studio</span>
          <span className="w-12 h-px bg-white/20" />
          <span className="text-white/40">技术解决方案</span>
        </motion.div>

        <motion.h1 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          以技术创新
          <br />
          驱动企业<span className="text-[#0066FF]">数字化转型</span>
        </motion.h1>

        <motion.p {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="text-lg text-white/60 mb-12 max-w-xl leading-relaxed">
          专注于高性能 Web 架构与工业级交互设计，为企业提供端到端的数字化解决方案。
        </motion.p>

        <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }} className="flex flex-wrap items-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-[#0066FF] hover:text-white transition-all">
            开始合作
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#solutions" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-all">
            了解方案
          </a>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.5 }} className="flex gap-12 mt-20 pt-8 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-white">120+</div>
            <div className="text-sm text-white/40 mt-1">成功项目</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-white/40 mt-1">客户满意度</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">8年</div>
            <div className="text-sm text-white/40 mt-1">行业经验</div>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    </div>
  </section>
);

const ValueProps = () => (
  <section id="values" className="py-24 lg:py-32 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <motion.div {...fadeInUp}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#0066FF]" />
            <span className="text-[#0066FF] text-sm font-medium">核心优势</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            为什么选择 <span className="text-[#0066FF]">Aether</span>
          </h2>
        </motion.div>
        <motion.p {...fadeInUp} className="text-lg text-white/60 max-w-md">
          从架构到交付，我们用工程思维处理每一个像素，构建可靠、高性能的数字体验。
        </motion.p>
      </div>

      <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid lg:grid-cols-3 gap-6">
        {values.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} variants={staggerItem} 
              className="group border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 bg-[#0066FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#0066FF] transition-colors">
                <Icon className="w-6 h-6 text-[#0066FF] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-white/50 mb-6 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {item.features.map((feature) => (
                  <span key={feature} className="inline-flex items-center px-3 py-1 text-xs font-medium border border-white/10 text-white/50">
                    {feature}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-[#0066FF] text-sm transition-colors">
                了解更多 <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <section id="solutions" className="py-24 lg:py-32 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <motion.div {...fadeInUp}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#0066FF]" />
            <span className="text-[#0066FF] text-sm font-medium">开源项目</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            技术方案与<span className="text-[#0066FF]">开源贡献</span>
          </h2>
        </motion.div>
        <motion.a {...fadeInUp} href="#" className="text-white/50 hover:text-[#0066FF] text-sm transition-colors flex items-center gap-2">
          查看全部项目 <Github className="w-4 h-4" />
        </motion.a>
      </div>

      <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div key={project.name} variants={staggerItem}
            className="group border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 text-xs font-medium border border-white/10 text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-white/30 text-sm">
                <Star className="w-4 h-4" /> {project.stars.toLocaleString()}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#0066FF] transition-colors">{project.name}</h3>
            <p className="text-white/50 mb-6">{project.description}</p>
            <div className="flex items-center gap-4">
              <a href={project.github} className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
                <Github className="w-4 h-4" /> 源码
              </a>
              {project.demo && (
                <a href={project.demo} className="flex items-center gap-2 text-white/40 hover:text-[#0066FF] text-sm transition-colors">
                  <ExternalLink className="w-4 h-4" /> 演示
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 lg:py-32 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#0066FF]" />
          <span className="text-[#0066FF] text-sm font-medium">服务范围</span>
          <span className="w-8 h-px bg-[#0066FF]" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          我们的<span className="text-[#0066FF]">专业服务</span>
        </h2>
        <p className="text-lg text-white/60">从策略到上线，提供端到端的技术与创意交付服务。</p>
      </motion.div>

      <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} variants={staggerItem}
              className="group bg-black p-8 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-[#0066FF]/10 flex items-center justify-center group-hover:bg-[#0066FF] transition-colors">
                  <Icon className="w-6 h-6 text-[#0066FF] group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs text-white/30 uppercase tracking-wider">{service.subtitle}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-white/50">{service.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 lg:py-32 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
        <motion.div {...fadeInUp}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#0066FF]" />
            <span className="text-[#0066FF] text-sm font-medium">关于我们</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            专业团队，<br /><span className="text-[#0066FF]">卓越品质</span>
          </h2>
          <p className="text-lg text-white/60 mb-6 leading-relaxed">
            Aether Studio 成立于 2025 年，是一家专注于高性能 Web 架构与工业级交互设计的数字技术公司。
          </p>
          <p className="text-white/50 mb-8 leading-relaxed">
            我们不追求规模，而追求每一个项目的可度量成功——从加载速度到用户留存，从代码质量到设计精度，我们始终坚持最高标准。
          </p>
          <div className="flex items-center gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-white">ISO 9001</div>
              <div className="text-sm text-white/40">质量管理体系</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">ISO 27001</div>
              <div className="text-sm text-white/40">信息安全管理</div>
            </div>
          </div>
          <a href="#team" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-[#0066FF] hover:text-white transition-all">
            认识我们的团队 <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-4">
          {dna.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={staggerItem}
                className="border border-white/10 bg-white/[0.02] p-6 flex items-start gap-4 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                <div className="w-10 h-10 bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-2">服务流程</h3>
          <p className="text-white/50">标准化交付流程</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((step) => (
            <div key={step.num} className="bg-black p-6 group hover:bg-white/[0.02] transition-colors">
              <span className="text-4xl font-bold text-white/5 group-hover:text-[#0066FF]/10 transition-colors">{step.num}</span>
              <h4 className="text-lg font-semibold text-white mt-2 mb-1">{step.title}</h4>
              <p className="text-sm text-white/40">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);



const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#0066FF]" />
            <span className="text-[#0066FF] text-sm font-medium">联系我们</span>
            <span className="w-8 h-px bg-[#0066FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            开始您的<span className="text-[#0066FF]">数字化之旅</span>
          </h2>
          <p className="text-lg text-white/60">告诉我们您的项目需求，专业团队将在 24 小时内与您联系</p>
        </motion.div>

        <motion.div {...fadeInUp} className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="border border-white/10 bg-white/[0.02] p-8 h-full hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-8">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 mb-1">商务邮箱</div>
                    <a href="mailto:hello@aether.io" className="text-white hover:text-[#0066FF] transition-colors">hello@aether.io</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 mb-1">联系电话</div>
                    <a href="tel:+86-400-888-8888" className="text-white hover:text-[#0066FF] transition-colors">400-888-8888</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 mb-1">公司地址</div>
                    <p className="text-white">北京市海淀区中关村科技园<br />A座 15层</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-sm text-white/40 mb-2">工作时间</div>
                <p className="text-white">周一至周五 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-8">项目咨询</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">姓名 <span className="text-[#0066FF]">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF] transition-colors"
                      placeholder="您的姓名" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">邮箱 <span className="text-[#0066FF]">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF] transition-colors"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-white/60 mb-2">公司名称</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF] transition-colors"
                    placeholder="您的公司" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-white/60 mb-2">项目需求 <span className="text-[#0066FF]">*</span></label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF] transition-colors resize-none"
                    placeholder="请描述您的项目需求..." />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-[#0066FF] hover:text-white transition-all disabled:opacity-50">
                  {isSubmitting ? (
                    <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> 发送中...</>
                  ) : (
                    <>提交咨询 <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            ) : (
              <div className="border border-white/10 bg-white/[0.02] p-10 text-center">
                <div className="w-16 h-16 bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">提交成功！</h3>
                <p className="text-white/50">感谢您的咨询，我们的专业团队将在 24 小时内与您联系。</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
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

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5">
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
                  <button onClick={() => scrollToSection(link.href)} className="text-white/40 hover:text-white transition-colors text-sm">
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

// --- 主页面 ---
export default function TeamPage({ onBack }) {
  return (
    <div className="min-h-screen bg-transparent text-white relative">
      {/* 太空背景动画 */}
      <SpaceBackground />

      <ScrollProgress />
      <NoiseOverlay />
      <Navigation onBack={onBack} />
      <main>
        <Hero />
        <ValueProps />
        <Projects />
        <Services />
        <About />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
