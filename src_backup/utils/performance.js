import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

/**
 * 性能监控工具
 *
 * 监控核心Web指标（Core Web Vitals）并发送到分析平台
 * 文档: https://web.dev/vitals/
 *
 * 指标说明:
 * - CLS (Cumulative Layout Shift): 累积布局偏移，衡量视觉稳定性
 * - INP (Interaction to Next Paint): 交互到下次绘制，衡量交互性
 * - FCP (First Contentful Paint): 首次内容绘制，衡量加载性能
 * - LCP (Largest Contentful Paint): 最大内容绘制，衡量加载性能
 * - TTFB (Time to First Byte): 首字节时间，衡量服务器响应
 */

const isDevelopment = import.meta.env.DEV;
const ENABLE_PERFORMANCE_MONITORING = import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING !== 'false';

// 性能数据存储
let vitalsData = {
  cls: null,
  inp: null,
  fcp: null,
  lcp: null,
  ttfb: null,
};

/**
 * 发送性能数据到分析平台
 * @param {Object} metric - 性能指标对象
 */
const sendToAnalytics = (metric) => {
  // 存储数据
  vitalsData[metric.name.toLowerCase()] = metric.value;

  // 开发环境打印到控制台
  if (isDevelopment) {
    console.log(`📊 [Performance] ${metric.name}:`, metric.value, metric);
  }

  // 生产环境可以发送到分析平台
  if (!isDevelopment && ENABLE_PERFORMANCE_MONITORING) {
    // 示例: 发送到Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }

    // 示例: 发送到自定义分析端点
    // fetch('/api/analytics/performance', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     metric: metric.name,
    //     value: metric.value,
    //     id: metric.id,
    //     url: window.location.href,
    //     timestamp: Date.now(),
    //   }),
    // }).catch(err => console.error('Failed to send performance data:', err));
  }
};

/**
 * 初始化性能监控
 */
export const initPerformanceMonitoring = () => {
  if (!ENABLE_PERFORMANCE_MONITORING) {
    console.log('📊 Performance monitoring is disabled');
    return;
  }

  try {
    // CLS - 累积布局偏移
    onCLS(sendToAnalytics);

    // INP - 交互到下次绘制（替代FID）
    onINP(sendToAnalytics);

    // FCP - 首次内容绘制
    onFCP(sendToAnalytics);

    // LCP - 最大内容绘制
    onLCP(sendToAnalytics);

    // TTFB - 首字节时间
    onTTFB(sendToAnalytics);

    console.log('✅ Performance monitoring initialized');
  } catch (error) {
    console.error('Failed to initialize performance monitoring:', error);
  }
};

/**
 * 获取当前收集的性能数据
 */
export const getVitalsData = () => {
  return vitalsData;
};

/**
 * 生成性能报告
 */
export const generatePerformanceReport = () => {
  const report = {
    url: window.location.href,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    vitals: vitalsData,
    rating: {
      cls: getCLSRating(vitalsData.cls),
      inp: getINPRating(vitalsData.inp),
      fcp: getFCPRating(vitalsData.fcp),
      lcp: getLCPRating(vitalsData.lcp),
      ttfb: getTTFBRating(vitalsData.ttfb),
    },
  };

  return report;
};

/**
 * 评估CLS评级
 */
const getCLSRating = (cls) => {
  if (cls === null) return 'unknown';
  if (cls <= 0.1) return 'good';
  if (cls <= 0.25) return 'needs-improvement';
  return 'poor';
};

/**
 * 评估INP评级
 */
const getINPRating = (inp) => {
  if (inp === null) return 'unknown';
  if (inp <= 200) return 'good';
  if (inp <= 500) return 'needs-improvement';
  return 'poor';
};

/**
 * 评估FCP评级
 */
const getFCPRating = (fcp) => {
  if (fcp === null) return 'unknown';
  if (fcp <= 1800) return 'good';
  if (fcp <= 3000) return 'needs-improvement';
  return 'poor';
};

/**
 * 评估LCP评级
 */
const getLCPRating = (lcp) => {
  if (lcp === null) return 'unknown';
  if (lcp <= 2500) return 'good';
  if (lcp <= 4000) return 'needs-improvement';
  return 'poor';
};

/**
 * 评估TTFB评级
 */
const getTTFBRating = (ttfb) => {
  if (ttfb === null) return 'unknown';
  if (ttfb <= 800) return 'good';
  if (ttfb <= 1800) return 'needs-improvement';
  return 'poor';
};

/**
 * 导出性能报告到控制台
 */
export const logPerformanceReport = () => {
  const report = generatePerformanceReport();
  console.table({
    'CLS (布局偏移)': {
      值: report.vitals.cls?.toFixed(4) || 'N/A',
      评级: report.rating.cls,
    },
    'INP (交互响应)': {
      值: report.vitals.inp?.toFixed(0) || 'N/A',
      评级: report.rating.inp,
      单位: 'ms',
    },
    'FCP (内容绘制)': {
      值: report.vitals.fcp?.toFixed(0) || 'N/A',
      评级: report.rating.fcp,
      单位: 'ms',
    },
    'LCP (最大绘制)': {
      值: report.vitals.lcp?.toFixed(0) || 'N/A',
      评级: report.rating.lcp,
      单位: 'ms',
    },
    'TTFB (首字节)': {
      值: report.vitals.ttfb?.toFixed(0) || 'N/A',
      评级: report.rating.ttfb,
      单位: 'ms',
    },
  });
};
