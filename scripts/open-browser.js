import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000 // 放慢操作，便于观察
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  console.log('🌐 正在打开 Aether Studio...');
  await page.goto('http://127.0.0.1:3005');

  console.log('✅ 页面已加载！');
  console.log('📸 正在截图...');

  // 等待页面完全加载
  await page.waitForTimeout(3000);

  // 截图
  await page.screenshot({
    path: 'screenshots/homepage.png',
    fullPage: true
  });

  console.log('✅ 截图已保存到 screenshots/homepage.png');
  console.log('🎉 浏览器已打开，您可以手动测试应用！');
  console.log('💡 提示：按 Ctrl+C 或关闭浏览器窗口结束测试');

  // 保持浏览器打开，等待用户关闭
  await new Promise(() => {});

  await browser.close();
})();
