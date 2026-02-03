import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push({
        text: msg.text(),
        type: msg.type(),
        location: msg.location()
      });
    }
  });

  await page.goto('http://127.0.0.1:3005');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  console.log('🔍 控制台错误：');
  console.log(`总共 ${errors.length} 个错误\n`);

  errors.forEach((err, i) => {
    console.log(`错误 ${i + 1}:`);
    console.log(`  消息: ${err.text}`);
    console.log(`  位置: ${err.location?.url || 'N/A'}:${err.location?.lineNumber || 'N/A'}`);
    console.log('');
  });

  await browser.close();
})();
