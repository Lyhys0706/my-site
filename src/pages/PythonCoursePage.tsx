import React from 'react';

const PythonCoursePage: React.FC = () => {
  const lessons = [
    {
      id: 1,
      title: "Python 基础语法",
      description: "学习Python的基本语法、数据类型和操作符",
      topics: ["变量和常量", "数据类型", "运算符", "控制流", "循环结构", "条件语句"]
    },
    {
      id: 2,
      title: "Python 数据结构",
      description: "掌握Python的内置数据结构及其使用方法",
      topics: ["列表 (List)", "元组 (Tuple)", "字典 (Dictionary)", "集合 (Set)", "字符串操作", "数据结构选择"]
    },
    {
      id: 3,
      title: "Python 函数与模块",
      description: "学习函数定义、参数传递和模块导入",
      topics: ["函数定义", "参数类型", "返回值", "作用域", "模块导入", "包的使用"]
    },
    {
      id: 4,
      title: "Python 面向对象编程",
      description: "掌握面向对象编程的基本概念和实践",
      topics: ["类和对象", "继承", "多态", "封装", "特殊方法", "类的设计"]
    },
    {
      id: 5,
      title: "Python 文件操作与异常处理",
      description: "学习文件的读写操作和异常处理机制",
      topics: ["文件打开与关闭", "文件读写", "异常处理", "上下文管理器", "文件路径操作"]
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold text-pink-800 mb-8 text-center">Python基础课程</h1>
        <div className="bg-pink-100 rounded-2xl p-8 shadow-sm mb-12">
          <p className="text-gray-700 mb-4">
            欢迎来到Python基础课程学习页面！这里为你提供Python基础素养的核心内容，帮助你掌握数据分析所需的Python技能。
          </p>
          <p className="text-gray-700">
            本课程包含5个核心章节，涵盖了Python基础语法、数据结构、函数与模块、面向对象编程以及文件操作与异常处理等内容。
          </p>
        </div>
        <div className="space-y-12">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              id={lesson.id === 1 ? "syntax" : lesson.id === 2 ? "data-structures" : lesson.id === 3 ? "functions" : lesson.id === 4 ? "oop" : "file-handling"}
              className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold mr-4">
                  {lesson.id}
                </div>
                <h3 className="text-2xl font-semibold text-pink-700">{lesson.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">{lesson.description}</p>
              <div className="border-t border-pink-100 pt-6">
                <h4 className="font-medium text-pink-600 mb-4 text-lg">学习内容：</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {lesson.topics.map((topic, index) => (
                    <li key={index} className="text-md">{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PythonCoursePage;