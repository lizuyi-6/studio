import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3005');

  // Wait for page to load
  await page.waitForTimeout(3000);

  // Check if test elements exist in DOM
  const testElement = await page.evaluate(() => {
    const allDivs = document.querySelectorAll('div');
    const divsText = Array.from(allDivs).map(div => ({
      text: div.textContent?.trim().substring(0, 50),
      style: window.getComputedStyle(div).position,
      zIndex: window.getComputedStyle(div).zIndex,
      backgroundColor: window.getComputedStyle(div).backgroundColor,
      display: window.getComputedStyle(div).display
    }));

    return {
      totalDivs: allDivs.length,
      divsContainingTest: divsText.filter(d =>
        d.text?.includes('内联样式测试') ||
        d.text?.includes('SUPER TEST') ||
        d.text?.includes('TEST 3')
      ),
      allFixedDivs: divsText.filter(d => d.style === 'fixed')
    };
  });

  console.log('🔍 DOM检查结果：');
  console.log('总div数量:', testElement.totalDivs);
  console.log('包含测试文字的div:', JSON.stringify(testElement.divsContainingTest, null, 2));
  console.log('所有fixed定位的div数量:', testElement.allFixedDivs.length);
  console.log('前5个fixed div:', JSON.stringify(testElement.allFixedDivs.slice(0, 5), null, 2));

  await browser.close();
})();
