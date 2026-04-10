import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "电商平台销售数据分析",
      description: "分析电商平台销售数据，识别热销产品和用户购买行为模式。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20dashboard%20with%20charts%20and%20graphs%20in%20pink%20theme&image_size=square"
    },
    {
      title: "社交媒体用户行为分析",
      description: "分析社交媒体用户互动数据，优化内容策略和用户体验。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=social%20media%20analytics%20dashboard%20with%20pink%20color%20scheme&image_size=square"
    },
    {
      title: "市场调研数据可视化",
      description: "将市场调研数据转化为直观的可视化图表，辅助商业决策。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=market%20research%20data%20visualization%20with%20pink%20elements&image_size=square"
    }
  ];

  return (
    <section id="portfolio" className="py-16 px-4 md:px-8 bg-pink-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">作品集</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;