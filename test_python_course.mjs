import { chromium } from 'playwright';

async function testPythonCourse() {
  console.log('开始测试 Python 基础课程页面...\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  const consoleWarnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    } else if (msg.type() === 'warning') {
      consoleWarnings.push(msg.text());
    }
  });

  page.on('pageerror', error => {
    consoleErrors.push(`Page Error: ${error.message}`);
  });

  try {
    console.log('1. 访问 Python基础课程 页面...');
    await page.goto('http://localhost:5173/python-course/core-unit', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    console.log('✓ 页面加载成功\n');

    console.log('2. 检查页面标题...');
    const title = await page.title();
    console.log(`   页面标题: ${title}\n`);

    console.log('3. 查找代码运行器组件...');
    const codeRunners = await page.locator('button:has-text("运行代码")').count();
    console.log(`   找到 ${codeRunners} 个代码运行器\n`);

    console.log('4. 查找并展开代码运行器...');
    const expandButtons = await page.locator('button').filter({ hasText: /▶|▼/ }).count();
    console.log(`   找到 ${expandButtons} 个展开/收起按钮`);

    if (expandButtons > 0) {
      console.log('   正在点击第一个展开按钮...');
      await page.locator('button').filter({ hasText: /▶|▼/ }).first().click();
      await page.waitForTimeout(1000);

      const codeRunnersAfterExpand = await page.locator('button:has-text("运行代码")').count();
      console.log(`   展开后找到 ${codeRunnersAfterExpand} 个"运行代码"按钮\n`);
    }

    console.log('5. 检查 Python 环境加载状态...');
    const loadingMessages = await page.locator('text=/正在加载|Python环境已就绪/i').count();

    if (loadingMessages > 0) {
      console.log('   ✓ 找到加载状态消息');

      const loadingText = await page.locator('text=/正在加载/').first().isVisible().catch(() => false);
      const readyText = await page.locator('text="Python环境已就绪"').first().isVisible().catch(() => false);

      if (readyText) {
        console.log('   ✓✓ Python环境已就绪！');
      } else if (loadingText) {
        console.log('   ⏳ Python环境仍在加载中，等待完成...');
        await page.waitForSelector('text="Python环境已就绪"', { timeout: 20000 }).catch(() => {
          console.log('   ⚠ 等待超时，Python环境可能加载失败');
        });
      }
    } else {
      console.log('   ⚠ 未找到加载状态消息');
    }

    console.log('\n6. 展开第一个代码运行器...');
    await page.locator('button:has-text("运行代码")').first().click();
    await page.waitForTimeout(500);

    console.log('7. 检查是否需要等待环境加载...');
    const isDisabled = await page.locator('button:has-text("运行代码")').first().isDisabled();

    if (isDisabled) {
      console.log('   ⏳ 运行按钮被禁用，等待Python环境加载...');
      await page.waitForFunction(() => {
        const btn = document.querySelector('button:has-text("运行代码")');
        return btn && !btn.disabled;
      }, { timeout: 25000 });
      console.log('   ✓ Python环境已就绪，可以运行代码');
    }

    console.log('\n8. 运行一个简单的Python代码: print("Hello!")...');
    const textarea = await page.locator('textarea').first();
    await textarea.fill('print("Hello!")');

    await page.locator('button:has-text("运行代码")').first().click();

    console.log('   ⏳ 等待代码执行...');
    await page.waitForSelector('text=输出:', { timeout: 10000 });

    const output = await page.locator('.whitespace-pre-wrap').last().textContent();
    console.log(`   输出结果: "${output}"`);

    if (output === 'Hello!') {
      console.log('   ✓✓ 代码运行成功！');
    } else {
      console.log(`   ⚠ 输出结果不符合预期，预期: "Hello!"`);
    }

    console.log('\n9. 检查控制台错误...');
    if (consoleErrors.length > 0) {
      console.log(`   发现 ${consoleErrors.length} 个控制台错误:`);
      consoleErrors.forEach((err, i) => {
        console.log(`   ${i + 1}. ${err}`);
      });
    } else {
      console.log('   ✓ 没有JavaScript错误');
    }

    if (consoleWarnings.length > 0) {
      console.log(`\n   发现 ${consoleWarnings.length} 个控制台警告:`);
      consoleWarnings.slice(0, 3).forEach((warn, i) => {
        console.log(`   ${i + 1}. ${warn}`);
      });
    }

    console.log('\n=== 测试总结 ===');
    console.log('✓ 页面访问: 成功');
    console.log(`✓ Python环境: ${loadingMessages > 0 ? '已检测到加载状态' : '未检测到'}`);
    console.log(`✓ 代码运行: ${output === 'Hello!' ? '成功' : '失败'}`);
    console.log(`✓ 控制台错误: ${consoleErrors.length} 个`);

  } catch (error) {
    console.error('\n❌ 测试过程中发生错误:', error.message);

    if (consoleErrors.length > 0) {
      console.log('\n捕获到的控制台错误:');
      consoleErrors.forEach((err, i) => {
        console.log(`  ${i + 1}. ${err}`);
      });
    }
  } finally {
    await browser.close();
  }
}

testPythonCourse();
