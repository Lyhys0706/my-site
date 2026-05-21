import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Book, Heart, Award, MapPin, Calendar, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="group inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            返回首页
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-6xl">
              👩‍🎓
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">关于我</h1>
              <p className="text-xl opacity-90">商务数据分析与应用专业学生</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <section className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">👋</span> 个人简介
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              你好！我是卢滢好，一名商务数据分析与应用专业的学生。我对数据分析有着浓厚的兴趣和热情，擅长通过数据发现问题、解决问题。
            </p>
            <p>
              性格开朗活泼，喜欢结交新朋友，探索新事物。平时喜欢尝试各种美食，记录生活中的美好瞬间，也喜欢到处旅行，欣赏不同地方的风景和文化。
            </p>
            <p>
              作为一名数据分析师的初学者，我始终保持着对技术的敬畏之心，不断学习、不断进步。希望通过自己的努力，在数据领域有所建树。
            </p>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📋</span> 基本信息
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative flex items-center gap-3 bg-gradient-to-br from-pink-50 to-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 border-2 border-transparent hover:border-pink-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-200 transition-all duration-300">
                <MapPin className="w-6 h-6 text-pink-600 group-hover:text-pink-700 transition-colors duration-300" />
              </div>
              <div className="relative">
                <div className="text-sm text-gray-500">所在地</div>
                <div className="font-medium text-gray-900 group-hover:text-pink-700 transition-colors duration-300">广东省</div>
              </div>
            </div>
            <div className="group relative flex items-center gap-3 bg-gradient-to-br from-purple-50 to-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 border-2 border-transparent hover:border-purple-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-200 transition-all duration-300">
                <Book className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
              </div>
              <div className="relative">
                <div className="text-sm text-gray-500">专业</div>
                <div className="font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-300">商务数据分析与应用</div>
              </div>
            </div>
            <div className="group relative flex items-center gap-3 bg-gradient-to-br from-blue-50 to-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 border-2 border-transparent hover:border-blue-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                <Calendar className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <div className="relative">
                <div className="text-sm text-gray-500">年级</div>
                <div className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-300">大学在读</div>
              </div>
            </div>
            <div className="group relative flex items-center gap-3 bg-gradient-to-br from-green-50 to-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 border-2 border-transparent hover:border-green-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-green-200 transition-all duration-300">
                <Mail className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
              </div>
              <div className="relative">
                <div className="text-sm text-gray-500">邮箱</div>
                <div className="font-medium text-gray-900 group-hover:text-green-700 transition-colors duration-300">3268511872@qq.com</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Code className="w-7 h-7 text-pink-600" />
            专业技能
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">编程语言</h3>
              <div className="flex flex-wrap gap-3">
                <span className="group relative px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-pink-200 hover:shadow-lg hover:shadow-pink-500/30 cursor-pointer">
                  <span className="relative">Python</span>
                </span>
                <span className="group relative px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-blue-200 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer">
                  <span className="relative">SQL</span>
                </span>
                <span className="group relative px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-yellow-200 hover:shadow-lg hover:shadow-yellow-500/30 cursor-pointer">
                  <span className="relative">R语言</span>
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">数据分析工具</h3>
              <div className="flex flex-wrap gap-3">
                <span className="group relative px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-purple-200 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer">
                  <span className="relative">Excel</span>
                </span>
                <span className="group relative px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-green-200 hover:shadow-lg hover:shadow-green-500/30 cursor-pointer">
                  <span className="relative">Power BI</span>
                </span>
                <span className="group relative px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-orange-200 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer">
                  <span className="relative">Tableau</span>
                </span>
                <span className="group relative px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer">
                  <span className="relative">FineBI</span>
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">专业知识</h3>
              <div className="flex flex-wrap gap-3">
                <span className="group relative px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-indigo-200 hover:shadow-lg hover:shadow-indigo-500/30 cursor-pointer">
                  <span className="relative">数据分析</span>
                </span>
                <span className="group relative px-4 py-2 bg-rose-100 text-rose-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-rose-200 hover:shadow-lg hover:shadow-rose-500/30 cursor-pointer">
                  <span className="relative">数据可视化</span>
                </span>
                <span className="group relative px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-teal-200 hover:shadow-lg hover:shadow-teal-500/30 cursor-pointer">
                  <span className="relative">数据挖掘</span>
                </span>
                <span className="group relative px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer">
                  <span className="relative">统计分析</span>
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">特长技能</h3>
              <div className="flex flex-wrap gap-3">
                <span className="group relative px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer">
                  <span className="relative">销售数据分析</span>
                </span>
                <span className="group relative px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-cyan-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer">
                  <span className="relative">用户行为分析</span>
                </span>
                <span className="group relative px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 text-teal-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30 cursor-pointer">
                  <span className="relative">市场趋势分析</span>
                </span>
                <span className="group relative px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-amber-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer">
                  <span className="relative">商业智能报表</span>
                </span>
                <span className="group relative px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-rose-500/30 cursor-pointer">
                  <span className="relative">数据清洗与预处理</span>
                </span>
                <span className="group relative px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 cursor-pointer">
                  <span className="relative">数据建模与预测</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart className="w-7 h-7 text-pink-600" />
            兴趣爱好
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative bg-gradient-to-br from-pink-100 to-rose-200 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30 border-2 border-transparent hover:border-pink-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">🍜</div>
              <h3 className="relative font-bold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors duration-300">美食探索</h3>
              <p className="relative text-gray-600 text-sm group-hover:text-pink-600 transition-colors duration-300">喜欢尝试各种美食，探索不同地方的特色小吃和餐厅</p>
            </div>
            <div className="group relative bg-gradient-to-br from-purple-100 to-indigo-200 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 border-2 border-transparent hover:border-purple-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">✈️</div>
              <h3 className="relative font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">旅行摄影</h3>
              <p className="relative text-gray-600 text-sm group-hover:text-purple-600 transition-colors duration-300">喜欢到处旅行，欣赏不同地方的风景和文化，用镜头记录美好瞬间</p>
            </div>
            <div className="group relative bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 border-2 border-transparent hover:border-blue-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">💻</div>
              <h3 className="relative font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">编程学习</h3>
              <p className="relative text-gray-600 text-sm group-hover:text-blue-600 transition-colors duration-300">对编程充满热情，不断学习新的技术，提升自己的技能</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-7 h-7 text-pink-600" />
            荣誉成就
          </h2>
          <div className="space-y-6">
            <div className="group relative flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-500 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-yellow-500/20">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🏆
              </div>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-yellow-700 transition-colors duration-300">广东省职业院校技能大赛 - 数据分析赛项三等奖</h3>
                <p className="text-gray-600 text-sm mb-2">2024年广东省职业院校学生技能大赛数据分析与可视化赛项中荣获三等奖</p>
                <div className="flex gap-2">
                  <span className="group/skill px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-yellow-200 cursor-pointer">省级奖项</span>
                  <span className="group/skill px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-orange-200 cursor-pointer">数据分析</span>
                </div>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🥈
              </div>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">校级数据分析技能竞赛二等奖</h3>
                <p className="text-gray-600 text-sm mb-2">2023年校级数据分析技能竞赛中表现优异，获得二等奖</p>
                <div className="flex gap-2">
                  <span className="group/skill px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-blue-200 cursor-pointer">校级奖项</span>
                  <span className="group/skill px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-purple-200 cursor-pointer">技能竞赛</span>
                </div>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-l-4 border-pink-500 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🎖️
              </div>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-pink-700 transition-colors duration-300">广东省数据分析技能大师工作室优秀助手</h3>
                <p className="text-gray-600 text-sm mb-2">作为工作室助手，积极参与数据项目实践，表现优秀</p>
                <div className="flex gap-2">
                  <span className="group/skill px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-pink-200 cursor-pointer">荣誉称号</span>
                  <span className="group/skill px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-rose-200 cursor-pointer">实践经验</span>
                </div>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border-l-4 border-green-500 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-green-500/20">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">校园数据可视化大赛优秀奖</h3>
                <p className="text-gray-600 text-sm mb-2">作品"校园消费数据分析与可视化"获得优秀奖</p>
                <div className="flex gap-2">
                  <span className="group/skill px-2 py-1 bg-green-100 text-green-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-green-200 cursor-pointer">创意奖项</span>
                  <span className="group/skill px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-teal-200 cursor-pointer">数据可视化</span>
                </div>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-l-4 border-indigo-500 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-indigo-500/20">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                📈
              </div>
              <div className="relative">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors duration-300">企业数据分析项目实践优秀成果奖</h3>
                <p className="text-gray-600 text-sm mb-2">参与企业真实数据分析项目，提出有效优化建议，获企业好评</p>
                <div className="flex gap-2">
                  <span className="group/skill px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-indigo-200 cursor-pointer">企业合作</span>
                  <span className="group/skill px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs transition-all duration-300 hover:scale-110 hover:bg-purple-200 cursor-pointer">项目实践</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-3xl">🌟</span> 性格特点
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="group relative bg-white/20 backdrop-blur rounded-xl p-4 text-center transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              <div className="relative text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">😊</div>
              <div className="relative font-semibold group-hover:text-white transition-colors duration-300">开朗活泼</div>
            </div>
            <div className="group relative bg-white/20 backdrop-blur rounded-xl p-4 text-center transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              <div className="relative text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">💪</div>
              <div className="relative font-semibold group-hover:text-white transition-colors duration-300">积极向上</div>
            </div>
            <div className="group relative bg-white/20 backdrop-blur rounded-xl p-4 text-center transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              <div className="relative text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">🤝</div>
              <div className="relative font-semibold group-hover:text-white transition-colors duration-300">乐于助人</div>
            </div>
            <div className="group relative bg-white/20 backdrop-blur rounded-xl p-4 text-center transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              <div className="relative text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">📚</div>
              <div className="relative font-semibold group-hover:text-white transition-colors duration-300">好学上进</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
