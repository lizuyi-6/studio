import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  const circleErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      errors.push({ text, location: msg.location() });

      if (text.includes('circle') && (text.includes('cx') || text.includes('cy'))) {
        circleErrors.push({ text, location: msg.location() });
      }
    }
  });

  await page.goto('http://127.0.0.1:3005');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  console.log('🔍 总共', errors.length, '个错误');
  console.log('其中', circleErrors.length, '个是 circle 相关错误\n');

  if (circleErrors.length > 0) {
    console.log('📍 Circle 错误详情：');
    circleErrors.forEach((err, i) => {
      console.log(`错误 ${i + 1}:`);
      console.log(`  消息: ${err.text}`);
      console.log('');
    });

    // Try to find all circle elements in the DOM
    console.log('\n🔎 检查 DOM 中的 circle 元素...');
    const circles = await page.evaluate(() => {
      const circles = document.querySelectorAll('circle');
      return Array.from(circles).map((circle, i) => {
        return {
          index: i,
          hasCx: circle.hasAttribute('cx'),
          hasCy: circle.hasAttribute('cy'),
          cx: circle.getAttribute('cx'),
          cy: circle.getAttribute('cy'),
          r: circle.getAttribute('r'),
          className: circle.className,
          parentHTML: circle.parentElement?.outerHTML?.substring(0, 200)
        };
      });
    });

    console.log(`\n找到 ${circles.length} 个 circle 元素：\n`);

    circles.filter(c => !c.hasCx || !c.hasCy).forEach((c, i) => {
      console.log(`❌ Circle #${c.index} (缺少属性):`);
      console.log(`   hasCx: ${c.hasCx}, hasCy: ${c.hasCy}`);
      console.log(`   cx: ${c.cx}, cy: ${c.cy}, r: ${c.r}`);
      console.log(`   parent: ${c.parentHTML}...`);
      console.log('');
    });
  }

  await browser.close();
})();
