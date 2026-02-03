import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  await page.goto('http://127.0.0.1:3005');

  // Wait for animations to settle
  await page.waitForTimeout(5000);

  console.log('📸 截图中...');
  await page.screenshot({
    path: 'screenshot-viewport.png',
    fullPage: false  // 只截取当前视口
  });

  // 再截一个全页的
  await page.screenshot({
    path: 'screenshot-fullpage.png',
    fullPage: true
  });

  console.log('✅ 截图完成！');

  await browser.close();
})();
