import React from 'react';

const PythonCourse: React.FC = () => {
  const lessons = [
    {
      id: 1,
      title: "Python 基础入门",
      description: "了解Python的基本概念、安装方法和开发环境配置",
      topics: ["Python简介", "安装Python", "IDE选择", "第一个Python程序"]
    },
    {
      id: 2,
      title: "Python 语法基础",
      description: "学习Python的基本语法、数据类型和操作符",
      topics: ["变量和数据类型", "运算符", "控制流", "循环结构"]
    },
    {
      id: 3,
      title: "Python 函数和模块",
      description: "掌握函数定义、参数传递和模块导入",
      topics: ["函数定义", "参数类型", "返回值", "模块导入"]
    },
    {
      id: 4,
      title: "Python 数据结构",
      description: "学习列表、元组、字典和集合等数据结构",
      topics: ["列表", "元组", "字典", "集合"]
    },
    {
      id: 5,
      title: "Python 文件操作",
      description: "掌握文件的读写操作和异常处理",
      topics: ["文件读写", "异常处理", "上下文管理器"]
    },
    {
      id: 6,
      title: "Python 数据分析基础",
      description: "学习使用Python进行数据分析的基本方法",
      topics: ["NumPy简介", "Pandas基础", "数据可视化"]
    }
  ];

  return (
    <section id="python-course" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">Python基础课程</h2>
        <div className="bg-pink-50 rounded-2xl p-8 shadow-sm mb-8">
          <p className="text-gray-700 mb-4">
            欢迎来到Python基础课程学习模块！这里将为你提供从入门到进阶的Python学习内容，帮助你掌握数据分析所需的Python技能。
          </p>
          <p className="text-gray-700">
            本课程包含6个核心章节，涵盖了Python基础语法、数据结构、文件操作以及数据分析基础等内容。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              className="bg-white border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold mr-3">
                  {lesson.id}
                </div>
                <h3 className="text-xl font-semibold text-pink-700">{lesson.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{lesson.description}</p>
              <div className="border-t border-pink-100 pt-4">
                <h4 className="font-medium text-pink-600 mb-2">学习内容：</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {lesson.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PythonCourse;