import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo和简介 */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-bold text-pink-500 mb-4 inline-block">
              Dashboard
            </Link>
            <p className="text-gray-400 leading-relaxed mb-4">
              专注于数据分析与Python编程的学习与分享。欢迎与我交流学习心得，共同进步！
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <span className="text-lg">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <span className="text-lg">💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <span className="text-lg">📱</span>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="font-bold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-pink-500 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/python-course" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Python课程
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-pink-500 transition-colors">
                  联系方式
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="font-bold text-lg mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 3268511872@qq.com</li>
              <li>📍 广东省</li>
              <li>💼 商务数据分析与应用</li>
            </ul>
          </div>
        </div>

        {/* 底部 */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Dashboard. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> using React & Python
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
