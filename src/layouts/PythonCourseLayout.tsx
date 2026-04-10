import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const PythonCourseLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Python课程独立导航栏 */}
      <header className="bg-gradient-to-r from-pink-200 to-pink-300 py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-pink-800">Python基础课程</h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">返回首页</Link>
            <Link to="/python-course" className="px-4 py-2 bg-pink-300 hover:bg-pink-400 rounded-full text-pink-800 font-medium transition-all">课程首页</Link>
            <a href="#syntax" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">基础语法</a>
            <a href="#data-structures" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">数据结构</a>
            <a href="#functions" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">函数与模块</a>
          </nav>
        </div>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="bg-pink-100 py-6 text-center text-pink-800">
        <p>© 2026 Python基础课程 | 商务数据分析与应用专业</p>
      </footer>
    </div>
  );
};

export default PythonCourseLayout;