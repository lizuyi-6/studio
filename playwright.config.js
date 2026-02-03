import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',  // 只运行 E2E 测试，避免与 Vitest 冲突
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // 使用单worker以避免端口冲突
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:3005',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // 启动开发服务器
  webServer: {
    command: 'npm run dev -- --port 3005',
    url: 'http://127.0.0.1:3005',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
