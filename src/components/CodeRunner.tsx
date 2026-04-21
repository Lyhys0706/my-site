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
  const pyodideRef = useRef<any>(null);

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
  };

  useEffect(() => {
    const loadPyodide = async () => {
      try {
        const { loadPyodide } = await import('pyodide');
        pyodideRef.current = await loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
        });
      } catch (error) {
        console.error('Failed to load Pyodide:', error);
        setOutput('加载Python环境失败，请刷新页面重试');
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
    setOutput('');

    try {
      const originalStdout = pyodideRef.current.globals.get('sys').stdout;
      const originalStderr = pyodideRef.current.globals.get('sys').stderr;

      let outputBuffer = '';

      pyodideRef.current.globals.set('sys.stdout', {
        write: (text: string) => {
          outputBuffer += text;
        },
        flush: () => {}
      });

      pyodideRef.current.globals.set('sys.stderr', {
        write: (text: string) => {
          outputBuffer += text;
        },
        flush: () => {}
      });

      await pyodideRef.current.runPython(code);

      pyodideRef.current.globals.get('sys').stdout = originalStdout;
      pyodideRef.current.globals.get('sys').stderr = originalStderr;

      setOutput(outputBuffer || '代码运行成功，无输出');
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
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            placeholder="在这里输入Python代码..."
          />

          <div className="flex gap-4 mt-4">
            <button
              onClick={runCode}
              disabled={isRunning}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${isRunning ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 text-white hover:bg-pink-600'}`}
            >
              {isRunning ? '运行中...' : '运行代码'}
            </button>
            <button
              onClick={resetCode}
              disabled={isRunning}
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