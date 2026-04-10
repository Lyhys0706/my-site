import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">关于我</h2>
        <div className="bg-pink-50 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                <span className="text-6xl font-bold text-pink-700">👩‍🎓</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">个人简介</h3>
              <p className="text-gray-700 mb-4">
                我是一名商务数据分析与应用专业的学生，热爱数据背后的故事和洞察。性格开朗活泼，喜欢结交新朋友，探索新事物。
              </p>
              <p className="text-gray-700 mb-6">
                平时喜欢尝试各种美食，记录生活中的美好瞬间，也喜欢到处旅行，欣赏不同地方的风景和文化。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-pink-600">专业</h4>
                  <p className="text-gray-600">商务数据分析与应用</p>
                </div>
                <div>
                  <h4 className="font-medium text-pink-600">兴趣</h4>
                  <p className="text-gray-600">美食、旅游、摄影</p>
                </div>
                <div>
                  <h4 className="font-medium text-pink-600">性格</h4>
                  <p className="text-gray-600">开朗、乐观、热情</p>
                </div>
                <div>
                  <h4 className="font-medium text-pink-600">目标</h4>
                  <p className="text-gray-600">成为优秀的数据分析师</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;