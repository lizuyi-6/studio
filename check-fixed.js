import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3005');

  await page.waitForTimeout(3000);

  // 查找所有fixed定位的元素
  const fixedElements = await page.evaluate(() => {
    const allElements = document.querySelectorAll('*');
    const fixedElements = [];

    allElements.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.position === 'fixed') {
        const rect = el.getBoundingClientRect();
        fixedElements.push({
          tagName: el.tagName,
          textContent: el.textContent?.trim().substring(0, 100),
          className: el.className,
          id: el.id,
          rect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          style: {
            zIndex: style.zIndex,
            backgroundColor: style.backgroundColor,
            color: style.color,
            display: style.display,
            opacity: style.opacity
          }
        });
      }
    });

    return fixedElements;
  });

  console.log('📍 所有fixed定位的元素：');
  console.log(JSON.stringify(fixedElements, null, 2));

  await browser.close();
})();
