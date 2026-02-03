// 主题颜色
export const COLORS = {
  primary: '#0066FF',
  primaryDark: '#0033CC',
  primaryGlow: 'rgba(0, 102, 255, 0.4)',
  background: '#000000',
  surface: 'rgba(20, 20, 20, 0.6)',
  border: 'rgba(255, 255, 255, 0.1)',
  text: '#FFFFFF',
  textMuted: 'rgba(255, 255, 255, 0.5)',
  textSubtle: 'rgba(255, 255, 255, 0.4)',
};

// 导航配置
export const NAV_LINKS = [
  { name: '首页', id: 'home' },
  { name: '解决方案', id: 'solutions' },
  { name: '技术栈', id: 'tech' },
  { name: '关于', id: 'about' },
  { name: '企业团队', id: 'team' },
];

// 团队数据
export const TEAM_MEMBERS = [
  {
    name: 'Abraham Valerio',
    role: '创始架构师',
    title: 'Founding Architect',
    bio: '在数字荒原中寻找实体感。致力于 Next-Gen Web 架构与高保真交互的融合。',
    image: 'https://github.com/lizuyi-6.png',
    social: { 
      linkedin: '#', 
      email: 'abraham@aether.io', 
      github: 'https://github.com/lizuyi-6' 
    },
  },
  {
    name: '林雅婷',
    role: '技术总监',
    title: 'CTO',
    bio: '15年技术架构经验，专注于分布式系统与云原生技术。前阿里巴巴技术专家。',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yating&backgroundColor=b6e3f4',
    social: { linkedin: '#', email: 'yating@aether.io' },
  },
  {
    name: '陈思远',
    role: '产品总监',
    title: 'Product Director',
    bio: '深耕产品设计领域10年，擅长将复杂业务转化为优雅的产品体验。',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siyuan&backgroundColor=ffd5dc',
    social: { linkedin: '#', email: 'siyuan@aether.io' },
  },
];

export const TEAM_STATS = [
  { label: '技术研发', value: '25' },
  { label: '产品设计', value: '12' },
  { label: '项目交付', value: '8' },
  { label: '质量保障', value: '6' },
];

// 项目数据
export const PROJECTS = [
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

// 服务数据
export const SERVICES = [
  { icon: 'Code2', title: 'Web 开发', subtitle: 'Development', description: '高性能前端与全栈开发服务' },
  { icon: 'Palette', title: 'UI/UX 设计', subtitle: 'Design', description: '以用户为中心的产品设计服务' },
  { icon: 'Box', title: '创意开发', subtitle: 'Creative', description: 'WebGL 与沉浸式交互开发' },
  { icon: 'Gauge', title: '性能优化', subtitle: 'Performance', description: '核心指标诊断与优化服务' },
  { icon: 'Database', title: 'CMS 集成', subtitle: 'Integration', description: '内容管理与无头架构服务' },
  { icon: 'Lightbulb', title: '技术咨询', subtitle: 'Consulting', description: '技术架构与顾问服务' },
];

// 技术优势
export const CORE_VALUES = [
  {
    icon: 'Layers',
    title: '全链路架构',
    description: '打通物理与数字世界边界，确保每一比特数据的精确传输与处理。从采集到呈现，无缝衔接。',
    features: ['端到端方案', '全栈架构', '无缝集成'],
  },
  {
    icon: 'Cpu',
    title: '极致性能',
    description: '深入理解硬件特性，直接操作寄存器，在云端使用 Rust 和 Go 构建高吞吐微服务。',
    features: ['RTOS 实时系统', 'FPGA 加速', '容器编排'],
  },
  {
    icon: 'Shield',
    title: '核心掌控',
    description: '从 Bootloader 到渲染引擎，坚持自主研发关键组件，确保系统的绝对可控与安全。',
    features: ['工业物联网', '边缘计算', '极致性能'],
  },
];

// DNA 特性
export const DNA_ITEMS = [
  { icon: 'Target', title: '精准交付', description: '像素级校准，追求极致的视觉纯净度。' },
  { icon: 'Zap', title: '性能优先', description: 'Rust + WASM 底层异构加速。' },
  { icon: 'Compass', title: '持续创新', description: '重新定义 Web 的交互边界。' },
];

// 服务流程
export const PROCESS_STEPS = [
  { num: '01', title: '需求分析', desc: '需求剖析与技术定调' },
  { num: '02', title: '架构设计', desc: '系统设计与原子组件' },
  { num: '03', title: '开发实施', desc: '工业级构建与测试' },
  { num: '04', title: '交付运维', desc: '全球化分发与监控' },
];

// 页脚链接
export const FOOTER_LINKS = {
  navigation: [
    { label: '关于', href: '#about' },
    { label: '优势', href: '#values' },
    { label: '方案', href: '#solutions' },
    { label: '团队', href: '#team' },
  ],
  services: ['Web 开发', 'UI/UX 设计', '技术咨询', '性能优化'],
  social: [
    { icon: 'Github', href: 'https://github.com/lizuyi-6', label: 'GitHub' },
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Mail', href: 'mailto:hello@aether.io', label: 'Email' },
  ],
};
