import React from 'react';

const Footer = () => (
  <footer className="py-16 border-t border-white/10 bg-black text-sm text-gray-500 relative z-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div>
        <div className="mb-2 font-bold text-white tracking-wide uppercase text-lg">Aether Studio</div>
        <p className="text-xs opacity-60">Engineered for Precision.</p>
      </div>

      <div className="flex flex-wrap gap-8">
        <a href="#" className="hover:text-white transition-colors">服务条款</a>
        <a href="#" className="hover:text-white transition-colors">隐私政策</a>
        <a href="#" className="hover:text-white transition-colors">关于我们</a>
        <a href="#" className="hover:text-white transition-colors">联系方式</a>
      </div>
    </div>
    <div className="container mx-auto px-6 mt-8 pt-8 border-t border-white/5 text-xs text-gray-600 flex justify-between">
      <span>&copy; 2026 Aether Studio. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
