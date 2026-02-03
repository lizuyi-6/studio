import React from 'react';
import { Terminal, Code, Braces, Command, Cpu, Layout, Box, Globe, Layers, Zap, Compass, Hexagon, Server, Database, GitBranch, Cloud, Settings, Figma, Menu, Mail } from 'lucide-react';

const TechItem = ({ name, icon, level }) => (
  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
    <div className="flex items-center gap-3">
      <div className="text-gray-400 group-hover:text-white transition-colors">
        {/* {icon} */}
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white">{name}</span>
    </div>
    <div className="flex items-center gap-2">
      <div className={`h-1.5 w-1.5 rounded-full ${level > 90 ? 'bg-emerald-500' : level > 80 ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
      <span className="text-xs font-mono text-gray-500">{level}%</span>
    </div>
  </div>
);

const TechCard = ({ title, icon, items, className = "" }) => (
  <div
    className={`bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-[#0066FF]/30 transition-colors duration-500 ${className}`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-white/5 text-[#0066FF]">
        {/* {icon} */}
      </div>
      <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
    </div>
    <div className="space-y-1">
      {items.map(item => (
        <TechItem key={item.name} {...item} />
      ))}
    </div>
  </div>
);

const Tech = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen container mx-auto px-6">
      {/* Header - Corporate Clean */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-xs font-bold text-[#0066FF] tracking-[0.2em] uppercase mb-4">Technical Proficiency</h2>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Engineering Stack.
          </h1>
        </div>
        <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-sm leading-relaxed">
          A comprehensive overview of the technologies and tools used to build scalable, high-performance digital solutions.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {/* 1. Core (Large) */}
        <TechCard
          className="md:col-span-2"
          title="Core Foundations"
          icon={<Terminal size={20} />}
          items={[
            { name: "TypeScript", level: 95, icon: <Code size={16} /> },
            { name: "JavaScript (ESNext)", level: 98, icon: <Braces size={16} /> },
            { name: "Python", level: 85, icon: <Command size={16} /> },
            { name: "Rust / C++", level: 75, icon: <Cpu size={16} /> }
          ]}
        />

        {/* 2. Frontend (Tall) */}
        <TechCard
          className="md:col-span-1 md:row-span-2"
          title="Frontend Ecosystem"
          icon={<Layout size={20} />}
          items={[
            { name: "React", level: 95, icon: <Box size={16} /> },
            { name: "Next.js", level: 92, icon: <Globe size={16} /> },
            { name: "Vue.js", level: 90, icon: <Layers size={16} /> },
            { name: "Tailwind CSS", level: 98, icon: <Zap size={16} /> },
            { name: "Framer Motion", level: 88, icon: <Compass size={16} /> },
            { name: "Three.js / R3F", level: 70, icon: <Hexagon size={16} /> }
          ]}
        />

        {/* 3. Backend */}
        <TechCard
          className="md:col-span-1"
          title="Backend Services"
          icon={<Server size={20} />}
          items={[
            { name: "Node.js", level: 88, icon: <Server size={16} /> },
            { name: "PostgreSQL", level: 82, icon: <Database size={16} /> },
            { name: "GraphQL", level: 80, icon: <GitBranch size={16} /> },
            { name: "Redis", level: 75, icon: <Database size={16} /> }
          ]}
        />

        {/* 4. Infrastructure */}
        <TechCard
          className="md:col-span-1"
          title="Infra & DevOps"
          icon={<Cloud size={20} />}
          items={[
            { name: "AWS", level: 80, icon: <Cloud size={16} /> },
            { name: "Docker", level: 85, icon: <Box size={16} /> },
            { name: "CI/CD Actions", level: 78, icon: <Settings size={16} /> },
            { name: "Vercel / Edge", level: 90, icon: <Globe size={16} /> }
          ]}
        />

        {/* 5. Design & Tools (Large) */}
        <TechCard
          className="md:col-span-2"
          title="Design & Workflow"
          icon={<Figma size={20} />}
          items={[
            { name: "Figma", level: 85, icon: <Figma size={16} /> },
            { name: "System Architecture", level: 88, icon: <Layers size={16} /> },
            { name: "Agile / Linear", level: 90, icon: <Menu size={16} /> },
            { name: "Technical Writing", level: 85, icon: <Mail size={16} /> }
          ]}
        />

      </div>
    </div>
  );
};

export default Tech;
