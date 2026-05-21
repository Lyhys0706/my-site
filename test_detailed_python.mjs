import { chromium } from 'playwright';

async function testPythonEnvironmentLoading() {
  console.log('=== 详细测试 Python 环境加载 ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleMessages = [];

  page.on('console', msg => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text()
    });
  });

  page.on('pageerror', error => {
    consoleMessages.push({
      type: 'pageerror',
      text: error.message
    });
  });

  try {
    console.log('1. 访问页面并开始监控...');
    await page.goto('http://localhost:5173/python-course/core-unit', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    console.log('✓ 页面加载完成\n');

    console.log('2. 立即检查加载状态（页面刚加载时）...');
    await page.waitForTimeout(500);
    const initialLoadingText = await page.locator('text=/正在加载/').count();
    const initialReadyText = await page.locator('text="Python环境已就绪"').count();

    console.log(`   - "正在加载" 消息数量: ${initialLoadingText}`);
    console.log(`   - "Python环境已就绪" 消息数量: ${initialReadyText}`);

    if (initialLoadingText > 0) {
      console.log('   ✓✓ 检测到 Python 环境正在加载！\n');
    } else {
      console.log('   ⚠ 未检测到加载消息\n');
    }

    console.log('3. 展开代码运行器并监控 Pyodide 加载...');
    await page.locator('button').filter({ hasText: /▶|▼/ }).first().click();

    console.log('   ⏳ 等待 Pyodide 从 CDN 加载...');
    const startTime = Date.now();

    try {
      await page.waitForSelector('text="Python环境已就绪"', { timeout: 30000 });
      const loadTime = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`   ✓✓ Python环境加载成功！耗时: ${loadTime} 秒\n`);
    } catch (error) {
      console.log('   ⚠ 等待"Python环境已就绪"消息超时\n');
    }

    console.log('4. 检查网络请求...');
    const pyodideRequests = await page.evaluate(() => {
      return window.performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('pyodide'))
        .map(entry => ({
          url: entry.name.substring(0, 100),
          duration: (entry.duration / 1000).toFixed(2) + 's'
        }));
    });

    if (pyodideRequests.length > 0) {
      console.log(`   找到 ${pyodideRequests.length} 个 Pyodide 相关请求`);
      pyodideRequests.slice(0, 2).forEach(req => {
        console.log(`   - ${req.url}... (${req.duration})`);
      });
    } else {
      console.log('   未在当前页面找到 Pyodide 请求（可能在 iframe 或子资源中）');
    }

    console.log('\n5. 测试代码运行...');
    const textarea = await page.locator('textarea').first();
    await textarea.fill('print("Hello from Python!")');

    const runButton = page.locator('button:has-text("运行代码")').first();
    const isDisabled = await runButton.isDisabled();

    if (isDisabled) {
      console.log('   ⏳ 运行按钮仍被禁用，等待环境...');
      await page.waitForFunction(() => {
        const btn = document.querySelector('button:has-text("运行代码")');
        return btn && !btn.disabled;
      }, { timeout: 20000 });
    }

    console.log('   正在运行代码...');
    await runButton.click();

    await page.waitForSelector('text=输出:', { timeout: 10000 });
    const output = await page.locator('.whitespace-pre-wrap').last().textContent();

    console.log(`   输出: "${output}"`);
    if (output.includes('Hello from Python!')) {
      console.log('   ✓✓ 代码运行成功！\n');
    }

    console.log('6. 检查控制台日志...');
    const errors = consoleMessages.filter(m => m.type === 'error');
    const warnings = consoleMessages.filter(m => m.type === 'warning');
    const failedRequests = consoleMessages.filter(m => m.text.includes('Failed to load'));

    if (errors.length > 0) {
      console.log(`\n   发现 ${errors.length} 个错误:`);
      errors.forEach((err, i) => {
        console.log(`   ${i + 1}. [${err.type}] ${err.text}`);
      });
    } else {
      console.log('   ✓ 没有错误');
    }

    if (warnings.length > 0) {
      console.log(`\n   发现 ${warnings.length} 个警告:`);
      warnings.slice(0, 5).forEach((warn, i) => {
        console.log(`   ${i + 1}. ${warn.text}`);
      });
    }

    if (failedRequests.length > 0) {
      console.log(`\n   发现 ${failedRequests.length} 个加载失败:`);
      failedRequests.forEach((req, i) => {
        console.log(`   ${i + 1}. ${req.text}`);
      });
    }

    console.log('\n=== 测试总结 ===');
    console.log('✓ 页面加载: 成功');
    console.log(`✓ Python环境: ${initialLoadingText > 0 ? '检测到加载过程' : '未检测到加载消息（可能已超时）'}`);
    console.log(`✓ 代码执行: ${output.includes('Hello') ? '成功' : '失败'}`);
    console.log(`✓ 错误数量: ${errors.length} 个`);

    if (errors.length === 0 && output.includes('Hello')) {
      console.log('\n=== 总体评估: 所有功能正常工作 ===');
    } else {
      console.log('\n=== 总体评估: 发现问题，需要检查 ===');
    }

  } catch (error) {
    console.error('\n❌ 测试失败:', error.message);

    console.log('\n控制台消息:');
    consoleMessages.forEach((msg, i) => {
      console.log(`  ${i + 1}. [${msg.type}] ${msg.text}`);
    });
  } finally {
    await browser.close();
  }
}

testPythonEnvironmentLoading();
