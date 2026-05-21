import React, { useState, useEffect, useRef } from 'react';

const CodeRunner: React.FC<{
  initialCode: string;
  title?: string;
  defaultOpen?: boolean;
}> = ({ initialCode, title = '代码运行器', defaultOpen = false }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('正在加载Python环境，请稍候...');
  const pyodideRef = useRef<any>(null);

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
  };

  useEffect(() => {
    const loadPyodide = async () => {
      try {
        setIsLoading(true);
        setLoadingMessage('正在加载Python环境，请稍候...');
        
        const pyodideModule = await import('pyodide');
        pyodideRef.current = await pyodideModule.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/',
        });
        
        setLoadingMessage('Python环境已就绪');
        
        setTimeout(() => {
          setLoadingMessage('');
          setIsLoading(false);
        }, 2000);
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
    <div className="bg-white border border-pink-200 rounded-xl shadow-sm mb-6">
      <div 
        className="flex justify-between items-center px-6 py-3 bg-pink-100 rounded-t-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-pink-800">{title}</h3>
        <button className="text-pink-700 hover:text-pink-900">
          {isOpen ? '▼' : '▶'}
        </button>
      </div>

      {isOpen && (
        <div className="p-4">
          {(isLoading || loadingMessage) && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm">
              {loadingMessage}
            </div>
          )}
          
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            placeholder="在这里输入Python代码..."
            disabled={isLoading}
          />

          <div className="flex gap-4 mt-4">
            <button
              onClick={runCode}
              disabled={isRunning || isLoading}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${isRunning || isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 text-white hover:bg-pink-600'}`}
            >
              {isRunning ? '运行中...' : '运行代码'}
            </button>
            <button
              onClick={resetCode}
              disabled={isRunning || isLoading}
              className="px-4 py-2 rounded-lg font-medium transition-all bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              重置代码
            </button>
          </div>

          {output && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <h4 className="font-medium text-gray-700 mb-2">输出:</h4>
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeRunner;
