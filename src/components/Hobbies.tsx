import React from 'react';

const Hobbies: React.FC = () => {
  const hobbies = [
    {
      title: "美食探索",
      icon: "🍔",
      description: "喜欢尝试各种美食，从街头小吃到精致餐厅，记录每一道美味的瞬间。"
    },
    {
      title: "旅行摄影",
      icon: "✈️",
      description: "热爱到处旅行，用镜头捕捉不同地方的风景和文化，记录旅途中的美好回忆。"
    },
    {
      title: "风景欣赏",
      icon: "🏞️",
      description: "喜欢大自然的美景，无论是山川湖海还是城市风光，都能让我感受到生活的美好。"
    }
  ];

  return (
    <section id="hobbies" className="py-16 px-4 md:px-8 bg-pink-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">兴趣爱好</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-pink-700 mb-3">{hobby.title}</h3>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;