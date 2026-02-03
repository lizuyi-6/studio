import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3005');
  await page.waitForTimeout(3000);

  // 检查所有装饰组件
  const decorations = await page.evaluate(() => {
    const result = {};

    // 检查GridBackground
    const gridPattern = document.querySelector('#grid-pattern-enhanced');
    result.GridBackground = gridPattern !== null;

    // 检查DataFlowTop
    const dataFlowGradient = document.querySelector('#data-flow-gradient');
    result.DataFlowTop = dataFlowGradient !== null;

    // 检查CornerDecoration (4个角落)
    const cornerDecorations = document.querySelectorAll('[class*="corner-decoration"], svg[viewBox="0 0 100 100"]');
    result.CornerDecoration = cornerDecorations.length >= 4;

    // 检查FloatingTechIcon
    const floatingIcons = document.querySelectorAll('svg[viewBox*="-12 -12"]');
    result.FloatingTechIcon = floatingIcons.length >= 4;

    // 检查CircuitDecoration
    const circuitDecos = document.querySelectorAll('svg[width="80"][height="300"]');
    result.CircuitDecoration = circuitDecos.length >= 2;

    // 检查HUDIndicator
    const hudIndicators = Array.from(document.querySelectorAll('div')).filter(div =>
      div.textContent?.includes('SYS:') || div.textContent?.includes('NET:')
    );
    result.HUDIndicator = hudIndicators.length >= 2;

    // 检查PulseRing
    const pulseRings = document.querySelectorAll('svg[viewBox="0 0 100 100"]');
    result.PulseRing = pulseRings.length >= 2;

    // 检查RippleEffect (motion.circle with special props)
    const allMotionCircles = document.querySelectorAll('circle[cx="20"][cy="20"]');
    result.RippleEffect = allMotionCircles.length >= 6; // 2个RippleEffect * 3个circle

    return result;
  });

  console.log('🎨 装饰组件检查结果：');
  console.log(JSON.stringify(decorations, null, 2));

  const allPresent = Object.values(decorations).every(v => v === true);
  console.log('\n' + (allPresent ? '✅ 所有装饰组件都已渲染！' : '⚠️ 部分装饰组件未渲染'));

  await browser.close();
})();
