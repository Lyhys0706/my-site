import React, { useState, useEffect, useRef } from 'react';

const FloatingCodeTrainer: React.FC = () => {
  const [code, setCode] = useState(`# 在此输入Python代码...
# 例如：
print("Hello, World!")

x = 10
y = 20
print(f"x + y = {x + y}")`);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('正在加载Python环境...');
  const pyodideRef = useRef<any>(null);

  const basicExamples = [
    { name: 'Hello World', code: 'print("Hello, World!")' },
    { name: '加减乘除', code: 'a = 10\nb = 5\nprint(f"a + b = {a + b}")\nprint(f"a - b = {a - b}")\nprint(f"a * b = {a * b}")\nprint(f"a / b = {a / b}")' },
    { name: '条件判断', code: 'score = 85\nif score >= 90:\n    print("优秀")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")' },
    { name: '循环', code: 'for i in range(1, 6):\n    print(f"第 {i} 次循环")' },
    { name: '列表操作', code: 'fruits = ["苹果", "香蕉", "橙子"]\nfor fruit in fruits:\n    print(f"我喜欢吃{fruit}")' },
  ];

  const resetCode = () => {
    setCode(`# 在此输入Python代码...
# 例如：
print("Hello, World!")

x = 10
y = 20
print(f"x + y = {x + y}")`);
    setOutput('');
  };

  const clearOutput = () => {
    setOutput('');
  };

  const selectExample = (exampleCode: string) => {
    setCode(exampleCode);
    setOutput('');
  };

  useEffect(() => {
    const loadPyodide = async () => {
      try {
        setIsLoading(true);
        setLoadingMessage('正在加载Python环境...');
        
        const pyodideModule = await import('pyodide');
        pyodideRef.current = await pyodideModule.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/',
        });
        
        setLoadingMessage('Python环境已就绪');
        
        setTimeout(() => {
          setLoadingMessage('');
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Failed to load Pyodide:', error);
        setOutput('加载Python环境失败，请刷新页面重试');
        setIsLoading(false);
      }
    };

    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodideRef.current) {
      setOutput('Python环境正在加载，请稍候...');
      return;
    }

    setIsRunning(true);
    setOutput('运行中...');

    try {
      let outputBuffer = [];

      pyodideRef.current.setStdout({
        batched: (text: string) => {
          outputBuffer.push(text);
        }
      });

      pyodideRef.current.setStderr({
        batched: (text: string) => {
          outputBuffer.push(text);
        }
      });

      await pyodideRef.current.runPythonAsync(code);

      const finalOutput = outputBuffer.join('');
      setOutput(finalOutput || '代码运行成功，无输出');
    } catch (error: any) {
      setOutput(`错误: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <>
      {/* 悬浮按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        style={{ boxShadow: '0 8px 32px rgba(236, 72, 153, 0.4)' }}
      >
        <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">💻</span>
      </button>

      {/* 悬浮面板 */}
      <div
        className={`fixed bottom-24 right-8 z-50 w-[400px] bg-white rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ boxShadow: '0 20px 60px rgba(236, 72, 153, 0.3)' }}
      >
        {/* 头部 */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-3 flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-white font-bold flex items-center gap-2">
            <span>✨</span> 实操训练
          </span>
          <button className="text-white/80 hover:text-white transition-colors">
            {isOpen ? '▼' : '▲'}
          </button>
        </div>

        {/* 内容 */}
        {isOpen && (
          <div className="p-4">
            {/* 加载状态 */}
            {(isLoading || loadingMessage) && (
              <div className="mb-3 p-3 bg-pink-50 border border-pink-200 rounded-lg text-pink-700 text-sm text-center">
                {loadingMessage}
              </div>
            )}

            {/* 代码输入区 */}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-48 p-3 border border-pink-200 rounded-xl font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent disabled:bg-gray-100"
              placeholder="在此输入Python代码..."
              disabled={isLoading}
            />

            {/* 基础示例下拉 */}
            <div className="relative mt-3">
              <select
                onChange={(e) => selectExample(e.target.value)}
                className="w-full px-3 py-2 border border-pink-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
              >
                <option value="">基础示例</option>
                {basicExamples.map((example, index) => (
                  <option key={index} value={example.code}>{example.name}</option>
                ))}
              </select>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={runCode}
                disabled={isRunning || isLoading}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  isRunning || isLoading
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 hover:shadow-lg'
                }`}
              >
                <span>{isRunning ? '⏳' : '▶'}</span>
                {isRunning ? '运行中...' : '运行代码'}
              </button>
              <button
                onClick={clearOutput}
                className="px-4 py-2 rounded-lg font-medium transition-all bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                清空
              </button>
              <button
                onClick={resetCode}
                className="px-4 py-2 rounded-lg font-medium transition-all bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                重置
              </button>
            </div>

            {/* 输出区 */}
            {output && (
              <div className="mt-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium text-gray-700">输出结果</span>
                </div>
                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">{output}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingCodeTrainer;
