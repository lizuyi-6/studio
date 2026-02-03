import { test, expect } from '@playwright/test';

test.describe('Aether Studio - Basic Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    // 导航到应用
    await page.goto('http://127.0.0.1:3005');
  });

  test('Home page loads successfully', async ({ page }) => {
    // 等待页面加载
    await page.waitForLoadState('networkidle');

    // 检查标题
    await expect(page).toHaveTitle(/Aether Studio/);

    // 检查导航栏
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();

    // 检查主要内容（使用第一个匹配元素）
    const mainContent = page.locator('div[class*="bg-black"]').first();
    await expect(mainContent).toBeVisible();
  });

  test('Navigation works correctly', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    // 点击"解决方案"链接
    await page.click('text=解决方案');

    // 等待导航完成
    await page.waitForTimeout(500);

    // 检查URL变化（状态路由，URL不会变，但内容会变）
    const content = page.locator('text=精选开源项目');
    await expect(content).toBeVisible({ timeout: 5000 });
  });

  test('Tech page displays correctly', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    // 点击"技术栈"链接
    await page.click('text=技术栈');
    await page.waitForTimeout(500);

    // 检查技术栈标题（使用实际的中文标题）
    const heading = page.locator('text=技术武器库');
    await expect(heading).toBeVisible({ timeout: 5000 });

    // 检查技术卡片存在（使用英文卡片标题）
    const techCard = page.locator('text=Core Foundations');
    await expect(techCard).toBeVisible({ timeout: 5000 });
  });

  test('Solutions page displays projects', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    // 点击"解决方案"链接
    await page.click('text=解决方案');
    await page.waitForTimeout(500);

    // 检查项目卡片
    const projectCards = page.locator('text=newide');
    await expect(projectCards.first()).toBeVisible({ timeout: 5000 });
  });

  test('About page loads', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    // 点击"关于"链接
    await page.click('text=关于');
    await page.waitForTimeout(500);

    // 检查关于页面内容（使用实际的标题文本）
    const aboutContent = page.locator('text=CRAFTING DIGITAL REALITY');
    await expect(aboutContent).toBeVisible({ timeout: 5000 });
  });

  test('No console errors', async ({ page }) => {
    const errors = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // 检查是否有错误
    expect(errors.length).toBe(0);
  });
});
