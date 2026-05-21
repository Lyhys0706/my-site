import React from 'react';
import { Link } from 'react-router-dom';
import { User, Code, Mail, MapPin, Book, Heart, Award, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 rounded-full blur-xl opacity-40 animate-pulse" />
            <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-8xl shadow-2xl border-4 border-pink-200">
              👩‍🎓
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            卢滢好
          </h1>
          <p className="text-xl text-pink-600 font-medium mb-2">
            商务数据分析与应用专业
          </p>
          <p className="text-gray-600">
            热爱数据，热爱编程，喜欢探索新事物
          </p>
        </div>

        {/* 关于我内容卡片 */}
        <Link to="/about" className="block group mb-12">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-500/20 border-2 border-transparent hover:border-pink-300">
            {/* 头部渐变 */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <User className="w-7 h-7" />
                关于我
                <span className="ml-auto text-sm font-normal opacity-80">点击查看详情 →</span>
              </h2>
            </div>
            
            {/* 内容区域 */}
            <div className="p-8">
              {/* 个人简介 */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3">👋 个人简介</h3>
                <p className="text-gray-600 leading-relaxed">
                  你好！我是卢滢好，一名商务数据分析与应用专业的学生。我对数据分析有着浓厚的兴趣和热情，擅长通过数据发现问题、解决问题。作为广东省数据分析技能大师工作室的助手，我始终保持着对技术的敬畏之心，不断学习、不断进步。
                </p>
              </div>

              {/* 基本信息 */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="group/item bg-pink-50 rounded-xl p-4 text-center transition-all duration-300 hover:bg-pink-100">
                  <div className="w-10 h-10 bg-pink-200 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="text-sm text-gray-500">所在地</div>
                  <div className="font-medium text-gray-900">广东省</div>
                </div>
                <div className="group/item bg-purple-50 rounded-xl p-4 text-center transition-all duration-300 hover:bg-purple-100">
                  <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Book className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-sm text-gray-500">专业</div>
                  <div className="font-medium text-gray-900">商务数据分析</div>
                </div>
                <div className="group/item bg-blue-50 rounded-xl p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-sm text-gray-500">年级</div>
                  <div className="font-medium text-gray-900">大学在读</div>
                </div>
                <div className="group/item bg-green-50 rounded-xl p-4 text-center transition-all duration-300 hover:bg-green-100">
                  <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-500">邮箱</div>
                  <div className="font-medium text-gray-900 truncate">3268511872@qq.com</div>
                </div>
              </div>

              {/* 专业技能 */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3">💻 专业技能</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Python</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">SQL</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Excel</span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Power BI</span>
                  <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">数据分析</span>
                  <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">数据可视化</span>
                </div>
              </div>

              {/* 兴趣爱好 */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="group/item bg-gradient-to-br from-pink-100 to-rose-200 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">🍜</div>
                  <div className="font-bold text-gray-900">美食探索</div>
                </div>
                <div className="group/item bg-gradient-to-br from-purple-100 to-indigo-200 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">✈️</div>
                  <div className="font-bold text-gray-900">旅行摄影</div>
                </div>
                <div className="group/item bg-gradient-to-br from-blue-100 to-cyan-200 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">💻</div>
                  <div className="font-bold text-gray-900">编程学习</div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* 其他导航卡片 */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/python-course"
            className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 border-2 border-transparent hover:border-purple-500 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            <div className="relative w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-purple-200 transition-all duration-300">
              <Code className="w-8 h-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
            </div>
            <h2 className="relative text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Python课程</h2>
            <p className="relative text-gray-600 text-sm group-hover:text-purple-600 transition-colors duration-300">系统学习Python编程，从入门到实践</p>
          </Link>
          <Link
            to="/contact"
            className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 border-2 border-transparent hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            <div className="relative w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            </div>
            <h2 className="relative text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">联系方式</h2>
            <p className="relative text-gray-600 text-sm group-hover:text-blue-600 transition-colors duration-300">有问题或建议？欢迎联系我</p>
          </Link>
        </div>

        {/* 底部 */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          © 2024 卢滢好 · 商务数据分析与应用专业
        </div>
      </div>
    </div>
  );
};

export default Home;
