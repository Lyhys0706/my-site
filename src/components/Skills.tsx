import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: "Excel数据分析", level: 85 },
    { name: "Python编程", level: 70 },
    { name: "SQL数据库", level: 75 },
    { name: "数据可视化", level: 80 },
    { name: "统计学", level: 65 },
    { name: "商业智能", level: 60 }
  ];

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">专业技能</h2>
        <div className="bg-pink-50 rounded-2xl p-8 shadow-sm">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-pink-700">{skill.name}</span>
                  <span className="text-pink-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-pink-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-300 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;