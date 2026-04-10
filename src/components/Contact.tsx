import React from 'react';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: "微信", icon: "💬", link: "#" },
    { name: "微博", icon: "📱", link: "#" },
    { name: "小红书", icon: "📖", link: "#" },
    { name: "Instagram", icon: "📸", link: "#" }
  ];

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">联系我</h2>
        <div className="bg-pink-50 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">联系方式</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="text-xl">📧</span>
                  <span>email@example.com</span>
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="text-xl">📱</span>
                  <span>123-4567-8910</span>
                </p>
                <div className="mt-6">
                  <h4 className="font-medium text-pink-600 mb-3">社交账号</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.link} 
                        className="flex flex-col items-center gap-1 text-pink-700 hover:text-pink-500 transition-colors"
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <span className="text-sm">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">留言</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="你的名字" 
                    className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="你的邮箱" 
                    className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="你的留言" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-300 to-pink-400 text-white font-medium py-2 px-4 rounded-lg hover:from-pink-400 hover:to-pink-500 transition-all"
                >
                  发送留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;