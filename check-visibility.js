import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3005');

  await page.waitForTimeout(3000);

  // 检查测试元素的详细信息
  const elementInfo = await page.evaluate(() => {
    // 找到包含"内联样式测试"的元素
    const testDiv = Array.from(document.querySelectorAll('div')).find(div =>
      div.textContent?.includes('内联样式测试')
    );

    if (!testDiv) {
      return { error: '未找到测试元素' };
    }

    const rect = testDiv.getBoundingClientRect();
    const style = window.getComputedStyle(testDiv);
    const parent = testDiv.parentElement;

    // 检查父元素
    let parentInfo = null;
    if (parent) {
      const parentStyle = window.getComputedStyle(parent);
      const parentRect = parent.getBoundingClientRect();
      parentInfo = {
        tagName: parent.tagName,
        position: parentStyle.position,
        overflow: parentStyle.overflow,
        overflowX: parentStyle.overflowX,
        overflowY: parentStyle.overflowY,
        zIndex: parentStyle.zIndex,
        transform: parentStyle.transform,
        width: parentRect.width,
        height: parentRect.height
      };
    }

    return {
      text: testDiv.textContent,
      position: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        right: rect.right,
        bottom: rect.bottom
      },
      style: {
        position: style.position,
        top: style.top,
        left: style.left,
        zIndex: style.zIndex,
        backgroundColor: style.backgroundColor,
        color: style.color,
        border: style.border,
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity
      },
      isInViewport: (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      ),
      parent: parentInfo,
      // 检查是否有遮挡
      elementAtPoint: document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)?.tagName
    };
  });

  console.log('📊 测试元素详细信息：');
  console.log(JSON.stringify(elementInfo, null, 2));

  await browser.close();
})();
