import { chromium } from 'playwright';

async function monitorLoadingMessages() {
  console.log('=== 实时监控 Python 环境加载消息 ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const messages = [];

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('正在加载') || text.includes('Python环境') || text.includes('Pyodide') || text.includes('Failed')) {
      messages.push({
        time: Date.now(),
        type: msg.type(),
        text: text
      });
    }
  });

  try {
    console.log('1. 开始监控并访问页面...\n');

    const navigationPromise = page.goto('http://localhost:5173/python-course/core-unit', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });

    console.log('2. 立即展开代码运行器（不等待页面完全加载）...\n');
    await page.waitForTimeout(1000);

    try {
      const expandButton = page.locator('button').filter({ hasText: /▶|▼/ }).first();
      await expandButton.click({ timeout: 2000 });
      console.log('✓ 代码运行器已展开\n');
    } catch (e) {
      console.log('⚠ 等待页面元素...\n');
      await page.waitForSelector('button >> text=/▶|▼/', { timeout: 5000 });
      await page.locator('button').filter({ hasText: /▶|▼/ }).first().click();
      console.log('✓ 代码运行器已展开\n');
    }

    console.log('3. 监控加载消息的出现...\n');
    const startTime = Date.now();
    let foundLoadingMessage = false;
    let foundReadyMessage = false;

    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(500);

      const loadingText = await page.locator('text=/正在加载.*Python/').count();
      const readyText = await page.locator('text="Python环境已就绪"').count();
      const loadingDiv = await page.locator('.bg-blue-50').count();

      if (loadingText > 0 && !foundLoadingMessage) {
        foundLoadingMessage = true;
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
        console.log(`✓✓ [${elapsed}s] 检测到加载消息！"正在加载Python环境..."`);
      }

      if (readyText > 0 && !foundReadyMessage) {
        foundReadyMessage = true;
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
        console.log(`✓✓ [${elapsed}s] 检测到就绪消息！"Python环境已就绪"`);
        break;
      }

      if (i % 10 === 0 && i > 0) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
        console.log(`  [${elapsed}s] 仍在等待... (第${i}次检查)`);
      }
    }

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n加载过程耗时: ${totalTime} 秒`);

    if (!foundReadyMessage) {
      console.log('⚠ 未检测到"Python环境已就绪"消息');
      console.log('   可能原因：');
      console.log('   1. 消息出现后 2 秒内自动消失');
      console.log('   2. Pyodide 加载失败');
      console.log('   3. 加载过程已提前完成\n');
    }

    console.log('4. 测试代码运行...\n');
    const textarea = await page.locator('textarea').first();
    await textarea.fill('print("Python环境测试成功!")');

    const runButton = page.locator('button:has-text("运行代码")').first();
    const isDisabled = await runButton.isDisabled();

    if (isDisabled) {
      console.log('⚠ 运行按钮被禁用');
      console.log('   等待环境加载...\n');
      await page.waitForFunction(() => {
        const btn = document.querySelector('button:has-text("运行代码")');
        return btn && !btn.disabled;
      }, { timeout: 30000 });
      console.log('✓ 环境已就绪\n');
    }

    console.log('运行代码: print("Python环境测试成功!")\n');
    await runButton.click();

    await page.waitForSelector('text=输出:', { timeout: 10000 });
    const output = await page.locator('.whitespace-pre-wrap').last().textContent();

    console.log(`输出结果: "${output}"\n`);

    if (output.includes('Python环境测试成功')) {
      console.log('✓✓✓ 代码运行成功！\n');
    } else {
      console.log('⚠ 输出结果不符合预期\n');
    }

    console.log('=== 最终总结 ===');
    console.log(`✓ Python环境加载: ${!isDisabled || foundReadyMessage ? '成功' : '状态未知（但代码可运行）'}`);
    console.log(`✓ 代码执行: ${output.includes('Python环境测试成功') ? '成功' : '失败'}`);
    console.log(`✓ 加载消息显示: ${foundLoadingMessage ? '是' : '否'}`);
    console.log(`✓ 就绪消息显示: ${foundReadyMessage ? '是' : '否（可能已超时消失）'}`);

    if (output.includes('Python环境测试成功') && !isDisabled) {
      console.log('\n=== 所有功能正常工作！===');
    }

  } catch (error) {
    console.error('\n❌ 测试失败:', error.message);
  } finally {
    await browser.close();
  }
}

monitorLoadingMessages();
