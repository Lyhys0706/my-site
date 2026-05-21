import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我会尽快回复您。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <section className="bg-gradient-to-br from-pink-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6 group">
            <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">📬</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">联系方式</h1>
          <p className="text-xl opacity-90">
            有任何问题或建议，欢迎联系我！
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">联系我</h2>
            <div className="space-y-6">
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-pink-500/20 border-2 border-transparent hover:border-pink-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-200 transition-all duration-300">
                    <Mail className="w-7 h-7 text-pink-600 group-hover:text-pink-700 transition-colors duration-300" />
                  </div>
                  <div className="relative">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-pink-700 transition-colors duration-300">电子邮箱</h3>
                    <p className="text-gray-600 mb-2 group-hover:text-pink-600 transition-colors duration-300">3268511872@qq.com</p>
                    <a href="mailto:3268511872@qq.com" className="text-pink-600 hover:underline text-sm group-hover:text-pink-700 transition-colors duration-300">
                      点击发送邮件 →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-purple-500/20 border-2 border-transparent hover:border-purple-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-200 transition-all duration-300">
                    <Phone className="w-7 h-7 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                  </div>
                  <div className="relative">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">联系电话</h3>
                    <p className="text-gray-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">138-xxxx-xxxx</p>
                    <span className="text-gray-500 text-sm">（如有需要可提供）</span>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-blue-500/20 border-2 border-transparent hover:border-blue-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <MapPin className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                  <div className="relative">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">所在地</h3>
                    <p className="text-gray-600 mb-2 group-hover:text-blue-600 transition-colors duration-300">广东省</p>
                    <span className="text-gray-500 text-sm">欢迎交流学习</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">社交媒体</h3>
                <div className="flex gap-4">
                  <a href="#" className="group relative w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-pink-100 hover:shadow-lg hover:shadow-pink-500/20">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                    <Github className="relative w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors duration-300" />
                  </a>
                  <a href="#" className="group relative w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-green-100 hover:shadow-lg hover:shadow-green-500/20">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                    <span className="relative text-2xl group-hover:scale-125 transition-transform duration-300">💬</span>
                  </a>
                  <a href="#" className="group relative w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                    <MessageCircle className="relative w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">发送消息</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-pink-700 transition-colors duration-300">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:border-pink-300 hover:shadow-md"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-pink-700 transition-colors duration-300">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:border-pink-300 hover:shadow-md"
                    placeholder="example@example.com"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-pink-700 transition-colors duration-300">
                    主题
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:border-pink-300 hover:shadow-md"
                    placeholder="请输入消息主题"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-pink-700 transition-colors duration-300">
                    留言内容
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none hover:border-pink-300 hover:shadow-md"
                    placeholder="请输入您的留言内容..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:from-pink-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-500/30 flex items-center justify-center gap-2"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                  <Send className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="relative">发送消息</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
