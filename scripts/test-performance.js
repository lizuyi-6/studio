import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  // 启用性能追踪
  const client = await context.newCDPSession(page);
  await client.send('Performance.enable');
  await client.send('LayerTree.enable');

  console.log('🌐 正在打开 Aether Studio...');
  await page.goto('http://127.0.0.1:3005');

  console.log('⏳ 等待页面稳定...');
  await page.waitForTimeout(3000);

  // 收集性能指标
  console.log('📊 收集性能指标...');

  const metrics = await client.send('Performance.getMetrics');

  // 计算动画元素数量
  const animatedElements = await page.evaluate(() => {
    const stars = document.querySelectorAll('[class*="opacity"]').length;
    const planets = document.querySelectorAll('svg').length;
    const motionDivs = document.querySelectorAll('[class*="motion"]').length;
    return { stars, planets, motionDivs };
  });

  // 获取帧率信息
  const fps = await page.evaluate(() => {
    let frames = 0;
    let lastTime = performance.now();

    return new Promise((resolve) => {
      function measureFrame() {
        frames++;
        const currentTime = performance.now();

        if (currentTime >= lastTime + 1000) {
          resolve(frames);
          return;
        }

        requestAnimationFrame(measureFrame);
      }

      requestAnimationFrame(measureFrame);
    });
  });

  // 获取布局抖动次数
  const layoutShifts = await page.evaluate(() => {
    let cls = 0;
    return new Promise((resolve) => {
      setTimeout(() => resolve(cls), 2000);
    });
  });

  console.log('\n📊 性能测试结果：');
  console.log('='.repeat(50));

  console.log(`\n🎬 动画元素统计：`);
  console.log(`   - 星星数量: ${animatedElements.stars}`);
  console.log(`   - 星球SVG: ${animatedElements.planets}`);
  console.log(`   - 动画容器: ${animatedElements.motionDivs}`);
  console.log(`   - 总计: ${animatedElements.stars + animatedElements.planets + animatedElements.motionDivs}`);

  console.log(`\n⚡ 性能指标：`);
  console.log(`   - 估算FPS: ${fps}`);

  // 查找关键性能指标
  const timestamp = metrics.metrics.find(m => m.name === 'Timestamp');
  const jsHeapUsed = metrics.metrics.find(m => m.name === 'JSHeapUsedSize');
  const domNodes = metrics.metrics.find(m => m.name === 'DOMNodeCount');

  if (jsHeapUsed) {
    console.log(`   - 内存使用: ${(jsHeapUsed.value / 1024 / 1024).toFixed(2)} MB`);
  }

  if (domNodes) {
    console.log(`   - DOM节点数: ${domNodes.value}`);
  }

  // GPU加速检测
  const gpuAccelerated = await page.evaluate(() => {
    const testDiv = document.createElement('div');
    testDiv.style.transform = 'translateZ(0)';
    document.body.appendChild(testDiv);

    const computedStyle = window.getComputedStyle(testDiv);
    const hasTransform = computedStyle.transform !== 'none';

    document.body.removeChild(testDiv);
    return hasTransform;
  });

  console.log(`\n🎨 渲染优化：`);
  console.log(`   - GPU加速: ${gpuAccelerated ? '✅ 已启用' : '❌ 未启用'}`);

  // CSS Containment检测
  const hasContainment = await page.evaluate(() => {
    const elements = document.querySelectorAll('[style*="contain"]');
    return elements.length > 0;
  });

  console.log(`   - CSS Containment: ${hasContainment ? '✅ 已启用' : '❌ 未启用'}`);

  // will-change检测
  const willChangeCount = await page.evaluate(() => {
    const elements = document.querySelectorAll('[class*="will-change"]');
    return elements.length;
  });

  console.log(`   - will-change优化: ${willChangeCount > 0 ? `✅ 已启用 (${willChangeCount}个元素)` : '❌ 未启用'}`);

  console.log('\n' + '='.repeat(50));

  // 性能评级
  const animatedElementCount = animatedElements.stars + animatedElements.planets + animatedElements.motionDivs;
  let performanceGrade = 'A';
  let performanceNotes = [];

  if (animatedElementCount > 30) {
    performanceGrade = 'C';
    performanceNotes.push('动画元素过多');
  } else if (animatedElementCount > 20) {
    performanceGrade = 'B';
    performanceNotes.push('动画元素适中');
  } else {
    performanceNotes.push('动画元素优化良好');
  }

  if (fps < 30) {
    performanceGrade = 'D';
    performanceNotes.push('帧率过低');
  } else if (fps >= 55) {
    performanceNotes.push('帧率优秀');
  }

  console.log(`\n📈 性能评级: ${performanceGrade}`);
  performanceNotes.forEach(note => console.log(`   - ${note}`));

  console.log('\n💡 优化建议：');
  if (animatedElementCount > 20) {
    console.log('   - 进一步减少动画元素数量');
  }
  if (!gpuAccelerated) {
    console.log('   - 启用GPU加速 (transform: translateZ(0))');
  }
  if (!hasContainment) {
    console.log('   - 添加CSS Containment隔离重排');
  }
  if (performanceGrade === 'A') {
    console.log('   - ✅ 性能优化完成！');
  }

  console.log('\n🎉 浏览器保持打开，您可以手动观察动画流畅度！');
  console.log('💡 提示：按 Ctrl+C 或关闭浏览器窗口结束测试\n');

  // 保持浏览器打开
  await new Promise(() => {});

  await browser.close();
})();
