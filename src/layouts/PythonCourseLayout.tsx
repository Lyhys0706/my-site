import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Menu, X, ChevronRight, Play, CheckCircle } from 'lucide-react';
import FloatingCodeTrainer from '../components/FloatingCodeTrainer';

const menuItems = [
  {
    title: '课程概览',
    path: '/python-course',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: '第一章：Python基础语法',
    path: '/python-course/chapter-1',
    icon: <span className="text-lg">🐍</span>,
    lessons: [
      { title: '1.1 第一个Python程序', path: '/python-course/chapter-1#lesson-1-1' },
      { title: '1.2 变量和数据类型', path: '/python-course/chapter-1#lesson-1-2' },
      { title: '1.3 运算符', path: '/python-course/chapter-1#lesson-1-3' },
      { title: '1.4 字符串操作', path: '/python-course/chapter-1#lesson-1-4' }
    ]
  },
  {
    title: '第二章：数据结构',
    path: '/python-course/chapter-2',
    icon: <span className="text-lg">🗂️</span>,
    lessons: [
      { title: '2.1 列表', path: '/python-course/chapter-2#lesson-2-1' },
      { title: '2.2 元组', path: '/python-course/chapter-2#lesson-2-2' },
      { title: '2.3 字典', path: '/python-course/chapter-2#lesson-2-3' },
      { title: '2.4 集合', path: '/python-course/chapter-2#lesson-2-4' }
    ]
  },
  {
    title: '第三章：函数与模块',
    path: '/python-course/chapter-3',
    icon: <span className="text-lg">📦</span>,
    lessons: [
      { title: '3.1 函数定义与调用', path: '/python-course/chapter-3#lesson-3-1' },
      { title: '3.2 参数传递', path: '/python-course/chapter-3#lesson-3-2' },
      { title: '3.3 模块导入', path: '/python-course/chapter-3#lesson-3-3' }
    ]
  },
  {
    title: '第四章：面向对象编程',
    path: '/python-course/chapter-4',
    icon: <span className="text-lg">🏗️</span>,
    lessons: [
      { title: '4.1 类与对象', path: '/python-course/chapter-4#lesson-4-1' },
      { title: '4.2 继承与多态', path: '/python-course/chapter-4#lesson-4-2' },
      { title: '4.3 特殊方法', path: '/python-course/chapter-4#lesson-4-3' }
    ]
  },
  {
    title: '第五章：文件操作与异常处理',
    path: '/python-course/chapter-5',
    icon: <span className="text-lg">📄</span>,
    lessons: [
      { title: '5.1 文件读写', path: '/python-course/chapter-5#lesson-5-1' },
      { title: '5.2 异常处理', path: '/python-course/chapter-5#lesson-5-2' },
      { title: '5.3 上下文管理器', path: '/python-course/chapter-5#lesson-5-3' }
    ]
  }
];

interface PythonCourseLayoutProps {
  children: React.ReactNode;
  title: string;
  showSidebar?: boolean;
}

const PythonCourseLayout: React.FC<PythonCourseLayoutProps> = ({ 
  children, 
  title, 
  showSidebar = true 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* 顶部导航栏 */}
      <header className="bg-white/95 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-pink-50 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🐍</span>
              <div>
                <h1 className="font-bold text-gray-900">{title}</h1>
                <p className="text-xs text-gray-500">Python基础课程</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">返回首页</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* 侧边栏菜单 */}
        {showSidebar && (
          <>
            {/* 移动端遮罩 */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
            
            {/* 侧边栏 */}
            <aside className={`
              fixed lg:sticky top-0 lg:top-[72px] left-0 z-50 lg:z-0
              w-80 lg:w-64 h-screen lg:h-[calc(100vh-72px)]
              bg-white border-r border-pink-100
              transform transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
              <div className="overflow-y-auto h-full py-4 px-3">
                <nav className="space-y-1">
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    
                    return (
                      <div key={index}>
                        <Link
                          to={item.path}
                          onClick={() => setIsSidebarOpen(false)}
                          className={`
                            flex items-center gap-3 px-4 py-3 rounded-xl
                            transition-all duration-200
                            ${isActive 
                              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                              : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                            }
                          `}
                        >
                          {item.icon}
                          <span className="font-medium">{item.title}</span>
                          {isActive && <CheckCircle className="w-4 h-4 ml-auto" />}
                        </Link>
                        
                        {item.lessons && isActive && (
                          <div className="ml-4 mt-2 space-y-1 border-l-2 border-pink-200 pl-4">
                            {item.lessons.map((lesson, lessonIndex) => (
                              <a
                                key={lessonIndex}
                                href={lesson.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                              >
                                <Play className="w-3 h-3" />
                                {lesson.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>

                {/* 学习进度 */}
                <div className="mt-8 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-3">📊 学习进度</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">已完成</span>
                        <span className="font-semibold text-pink-600">0/6 章节</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" style={{ width: '0%' }} />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      开始学习，迈向Python大师之路！
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </>
        )}

        {/* 主内容区域 */}
        <main className={`flex-1 min-h-[calc(100vh-72px)] ${showSidebar ? 'lg:ml-0' : ''}`}>
          {children}
        </main>
      </div>
      
      {/* 悬浮实操训练面板 */}
      <FloatingCodeTrainer />
    </div>
  );
};

export default PythonCourseLayout;
