import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = ({ currentView, onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 导航配置
  const navLinks = [
    { name: '首页', id: 'home' },
    { name: '解决方案', id: 'solutions' },
    { name: '技术栈', id: 'tech' },
    { name: '关于', id: 'about' },
    { name: '企业团队', id: 'team' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onViewChange('home')}
        >
          <Logo className="h-8 w-8 text-[#0066FF]" />
          <span className="font-bold text-lg tracking-wide uppercase text-white hover:text-[#0066FF] transition-colors">Aether Studio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`transition-colors hover:text-white ${currentView === item.id ? 'text-white font-bold' : ''}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium hover:text-white text-gray-400 transition-colors">
            加入我们
          </button>
          <a href="#" className="bg-white text-black px-5 py-2 rounded-[4px] text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center">
            联系我们
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => { onViewChange(item.id); setIsOpen(false); }}
              className={`text-left py-2 block hover:text-white ${currentView === item.id ? 'text-white' : 'text-gray-400'}`}
            >
              {item.name}
            </button>
          ))}
          <a href="#" className="text-gray-400 hover:text-white py-2 block">加入我们</a>
          <a href="#" className="bg-white text-black px-5 py-3 rounded-[4px] text-sm font-bold w-full text-center block">
            联系我们
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
