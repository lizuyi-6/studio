import * as Sentry from '@sentry/react';

// Sentry初始化配置
// 文档: https://docs.sentry.io/platforms/javascript/

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
const SENTRY_ENVIRONMENT = import.meta.env.VITE_SENTRY_ENVIRONMENT || 'production';
const ENABLE_SENTRY = import.meta.env.VITE_ENABLE_SENTRY === 'true' && !!SENTRY_DSN;

export const initSentry = () => {
  if (!ENABLE_SENTRY) {
    console.log('🔍 Sentry is disabled. Set VITE_ENABLE_SENTRY=true and VITE_SENTRY_DSN to enable.');
    return;
  }

  Sentry.init({
    dsn: SENTRY_DSN,

    // 环境信息
    environment: SENTRY_ENVIRONMENT,

    // 采样率
    tracesSampleRate: 1.0, // 开发环境可以设为1.0，生产环境建议0.1-0.2
    replaysSessionSampleRate: 0.1, // 会话回放采样率
    replaysOnErrorSampleRate: 1.0, // 错误时回放采样率

    // 性能监控
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],

    // 过滤敏感信息
    beforeSend(event, hint) {
      // 移除敏感数据
      if (event.request) {
        delete event.request.cookies;
      }

      // 过滤特定的错误
      if (event.exception) {
        const error = hint.originalException;
        // 忽略某些第三方脚本错误
        if (error?.message?.includes('Script error')) {
          return null;
        }
      }

      return event;
    },

    // 版本信息
    release: import.meta.env.VITE_APP_VERSION || '1.0.0',
  });

  console.log('✅ Sentry initialized');
};

// 手动捕获错误的辅助函数
export const captureException = (error, context) => {
  if (!ENABLE_SENTRY) {
    console.error('Error (Sentry disabled):', error);
    return;
  }
  Sentry.captureException(error, context);
};

// 捕获消息的辅助函数
export const captureMessage = (message, level = 'info') => {
  if (!ENABLE_SENTRY) {
    console.log(`Message (Sentry disabled): [${level}] ${message}`);
    return;
  }
  Sentry.captureMessage(message, level);
};

// 设置用户信息的辅助函数
export const setUser = (user) => {
  if (!ENABLE_SENTRY) return;
  Sentry.setUser(user);
};

export { Sentry };
