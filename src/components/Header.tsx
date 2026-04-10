import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-pink-200 to-pink-300 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-pink-100 p-2 mb-6 shadow-lg">
          <div className="w-full h-full rounded-full bg-pink-200 flex items-center justify-center">
            <span className="text-4xl font-bold text-pink-600">我</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-2">商务数据分析学生</h1>
        <p className="text-lg text-pink-700 mb-6 text-center">喜欢美食、旅游和摄影的开朗女孩</p>
        <nav className="flex flex-wrap justify-center gap-4">
          <a href="#about" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">关于我</a>
          <a href="#hobbies" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">兴趣爱好</a>
          <a href="#skills" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">技能</a>
          <a href="#python-course" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">Python课程</a>
          <a href="#portfolio" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">作品集</a>
          <a href="#contact" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all">联系我</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;