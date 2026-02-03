import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3005');

  // Wait for page to fully load and animations to complete
  await page.waitForTimeout(5000);

  // Take screenshot
  await page.screenshot({
    path: 'screenshot-decoration.png',
    fullPage: true
  });

  console.log('Screenshot saved to screenshot-decoration.png');

  await browser.close();
})();
