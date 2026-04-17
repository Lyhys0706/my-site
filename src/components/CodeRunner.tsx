import React, { useState, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter, highlightActiveLine, drawSelection } from '@codemirror/view';
import { python } from '@codemirror/lang-python';
import { defaultKeymap } from '@codemirror/commands';
import { oneDark } from '@codemirror/theme-one-dark';

const CodeRunner: React.FC<{
  initialCode: string;
  title?: string;
  defaultOpen?: boolean;
}> = ({ initialCode, title = '代码运行器', defaultOpen = false }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const editorRef = useRef<HTMLDivElement>(null);
  const editorViewRef = useRef<EditorView | null>(null);
  const pyodideRef = useRef<any>(null);

  // 重置代码到初始状态
  const resetCode = () => {
    setCode(initialCode);
    if (editorViewRef.current) {
      editorViewRef.current.dispatch({
        changes: {
          from: 0,
          to: editorViewRef.current.state.doc.length,
          insert: initialCode
        }
      });
    }
    setOutput('');
  };

  // 初始化Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      try {
        // 动态加载Pyodide
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

  // 初始化CodeMirror
  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: code,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightActiveLine(),
        drawSelection(),
        keymap.of(defaultKeymap),
        python(),
        oneDark,
        EditorView.updateListener.of(update => {
          if (update.changes) {
            setCode(update.state.doc.toString());
          }
        }),
      ],
    });

    editorViewRef.current = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    return () => {
      editorViewRef.current?.destroy();
    };
  }, []);

  // 运行代码
  const runCode = async () => {
    if (!pyodideRef.current) {
      setOutput('Python环境正在加载，请稍候...');
      return;
    }

    setIsRunning(true);
    setOutput('');

    try {
      // 重定向stdout和stderr
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

      // 运行代码
      await pyodideRef.current.runPython(code);

      // 恢复原始输出
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
      {/* 标题栏 */}
      <div 
        className="flex justify-between items-center px-6 py-3 bg-pink-100 rounded-t-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-pink-800">{title}</h3>
        <button className="text-pink-700 hover:text-pink-900">
          {isOpen ? '▼' : '▶'}
        </button>
      </div>

      {/* 内容区域 */}
      {isOpen && (
        <div className="p-4">
          {/* 代码编辑器 */}
          <div 
            ref={editorRef} 
            className="border border-gray-300 rounded-lg h-64 mb-4"
          ></div>

          {/* 按钮区域 */}
          <div className="flex gap-4 mb-4">
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

          {/* 输出区域 */}
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