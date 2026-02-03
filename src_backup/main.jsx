import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './index';
import './index.css';
import { initSentry } from './utils/sentry';
import { initPerformanceMonitoring } from './utils/performance';

// 初始化Sentry错误追踪（仅在生产环境启用）
initSentry();

// 初始化性能监控
initPerformanceMonitoring();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
