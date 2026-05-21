import React from 'react';
import { Link } from 'react-router-dom';
import PythonCourseLayout from '../layouts/PythonCourseLayout';
import { BookOpen, Code, TrendingUp, Award, Play } from 'lucide-react';

const PythonCourse: React.FC = () => {
  return (
    <PythonCourseLayout title="课程概览">
      <div className="p-6 lg:p-8">
        <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🐍</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Python基础课程</h1>
              <p className="text-xl opacity-90">系统学习Python编程，从入门到实践</p>
            </div>
          </div>
          <p className="text-lg opacity-90 leading-relaxed mb-6">
            欢迎来到Python基础课程！这是一门面向初学者的入门课程，从基础语法开始，带你踏入编程的世界。
            课程注重实践，每章节都配有在线代码编辑器，让你边学边练。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative bg-white/20 backdrop-blur rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              <BookOpen className="relative w-8 h-8 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
              <div className="relative font-bold">5大模块</div>
            </div>
            <div className="group relative bg-white/20 backdrop-blur rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              <Code className="relative w-8 h-8 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
              <div className="relative font-bold">在线编程</div>
            </div>
            <div className="group relative bg-white/20 backdrop-blur rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              <TrendingUp className="relative w-8 h-8 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
              <div className="relative font-bold">循序渐进</div>
            </div>
            <div className="group relative bg-white/20 backdrop-blur rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              <Award className="relative w-8 h-8 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
              <div className="relative font-bold">实战驱动</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">课程特色</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative flex items-start gap-4 p-4 bg-pink-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-pink-500/20 border-2 border-transparent hover:border-pink-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <span className="relative text-4xl group-hover:scale-125 transition-transform duration-300">🎯</span>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors duration-300">零基础友好</h3>
                <p className="text-gray-600 text-sm">专为初学者设计，循序渐进，无需任何编程基础</p>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 bg-purple-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-purple-500/20 border-2 border-transparent hover:border-purple-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <span className="relative text-4xl group-hover:scale-125 transition-transform duration-300">💡</span>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">实例驱动</h3>
                <p className="text-gray-600 text-sm">大量实例，边学边练，理论与实践相结合</p>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 bg-blue-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-blue-500/20 border-2 border-transparent hover:border-blue-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <span className="relative text-4xl group-hover:scale-125 transition-transform duration-300">🏆</span>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">实战练习</h3>
                <p className="text-gray-600 text-sm">配套练习题，巩固所学，及时检验学习效果</p>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 bg-green-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-green-500/20 border-2 border-transparent hover:border-green-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <span className="relative text-4xl group-hover:scale-125 transition-transform duration-300">📊</span>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">数据应用</h3>
                <p className="text-gray-600 text-sm">结合数据分析实际应用，学以致用</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">课程大纲</h2>
          <div className="space-y-4">
            <Link
              to="/python-course/chapter-1"
              className="group relative block p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-pink-500/30 border-2 border-transparent hover:border-pink-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🐍</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-pink-700 transition-colors duration-300">第一章：Python基础语法</h3>
                  <p className="text-gray-600 text-sm mb-2">变量、数据类型、运算符、字符串操作</p>
                  <div className="flex gap-2">
                    <span className="group/tag px-2 py-1 bg-green-100 text-green-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-green-200 cursor-pointer">入门</span>
                    <span className="group/tag px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-pink-200 cursor-pointer">4节课程</span>
                  </div>
                </div>
                <Play className="w-8 h-8 text-pink-600 group-hover:scale-125 group-hover:text-pink-700 transition-all duration-300" />
              </div>
            </Link>

            <Link
              to="/python-course/chapter-2"
              className="group relative block p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-blue-500/30 border-2 border-transparent hover:border-blue-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🗂️</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">第二章：数据结构</h3>
                  <p className="text-gray-600 text-sm mb-2">列表、元组、字典、集合</p>
                  <div className="flex gap-2">
                    <span className="group/tag px-2 py-1 bg-green-100 text-green-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-green-200 cursor-pointer">入门</span>
                    <span className="group/tag px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer">4节课程</span>
                  </div>
                </div>
                <Play className="w-8 h-8 text-blue-600 group-hover:scale-125 group-hover:text-blue-700 transition-all duration-300" />
              </div>
            </Link>

            <Link
              to="/python-course/chapter-3"
              className="group relative block p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-purple-500/30 border-2 border-transparent hover:border-purple-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">📦</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">第三章：函数与模块</h3>
                  <p className="text-gray-600 text-sm mb-2">函数定义、参数传递、模块导入</p>
                  <div className="flex gap-2">
                    <span className="group/tag px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-yellow-200 cursor-pointer">进阶</span>
                    <span className="group/tag px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-purple-200 cursor-pointer">3节课程</span>
                  </div>
                </div>
                <Play className="w-8 h-8 text-purple-600 group-hover:scale-125 group-hover:text-purple-700 transition-all duration-300" />
              </div>
            </Link>

            <Link
              to="/python-course/chapter-4"
              className="group relative block p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-green-500/30 border-2 border-transparent hover:border-green-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🏗️</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">第四章：面向对象编程</h3>
                  <p className="text-gray-600 text-sm mb-2">类与对象、继承与多态、特殊方法</p>
                  <div className="flex gap-2">
                    <span className="group/tag px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-yellow-200 cursor-pointer">进阶</span>
                    <span className="group/tag px-2 py-1 bg-green-100 text-green-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-green-200 cursor-pointer">3节课程</span>
                  </div>
                </div>
                <Play className="w-8 h-8 text-green-600 group-hover:scale-125 group-hover:text-green-700 transition-all duration-300" />
              </div>
            </Link>

            <Link
              to="/python-course/chapter-5"
              className="group relative block p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-orange-500/30 border-2 border-transparent hover:border-orange-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">📄</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-700 transition-colors duration-300">第五章：文件操作与异常处理</h3>
                  <p className="text-gray-600 text-sm mb-2">文件读写、异常处理、上下文管理器</p>
                  <div className="flex gap-2">
                    <span className="group/tag px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-yellow-200 cursor-pointer">进阶</span>
                    <span className="group/tag px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-orange-200 cursor-pointer">3节课程</span>
                  </div>
                </div>
                <Play className="w-8 h-8 text-orange-600 group-hover:scale-125 group-hover:text-orange-700 transition-all duration-300" />
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💡 学习建议</h2>
          <div className="space-y-4">
            <div className="group relative bg-white rounded-xl p-6 shadow transition-all duration-300 hover:scale-102 hover:shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <h3 className="relative font-bold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors duration-300">1. 循序渐进</h3>
              <p className="relative text-gray-700">建议按照课程顺序学习，每章节内容都是在前一章的基础上展开的。打好基础很重要，不要急于求成。</p>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow transition-all duration-300 hover:scale-102 hover:shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <h3 className="relative font-bold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors duration-300">2. 动手实践</h3>
              <p className="relative text-gray-700">每章节都配有在线代码编辑器，一定要动手编写代码。看十遍不如写一遍，只有实践才能真正掌握知识。</p>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow transition-all duration-300 hover:scale-102 hover:shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <h3 className="relative font-bold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors duration-300">3. 多做练习</h3>
              <p className="relative text-gray-700">每章节结尾都有练习题，建议先独立完成，再参考答案。遇到问题可以在评论区讨论交流。</p>
            </div>
          </div>
        </div>
      </div>
    </PythonCourseLayout>
  );
};

export default PythonCourse;
