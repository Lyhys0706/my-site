import React from 'react';

const PythonCoursePage: React.FC = () => {
  const modules = [
    {
      id: 1,
      title: "Python语言核心：掌握与数据打交道的语法",
      description: "这部分是编程的基石，目标是能读懂和编写处理数据的代码。",
      sections: [
        {
          title: "基本语法与数据结构",
          content: "所有程序的起点。熟练掌握变量、数据类型（整数、浮点数、字符串、布尔值），以及列表（List）、元组（Tuple）、字典（Dict）、集合（Set）这四种核心数据结构。在AI和数据分析中，列表和字典用于存储和操作数据集合，使用频率极高。"
        },
        {
          title: "程序控制结构",
          content: "包括条件语句（if-elif-else）和循环语句（for、while）。这是实现数据遍历、条件筛选和自动化流程控制的基础。"
        },
        {
          title: "函数",
          content: "学习函数的定义、参数传递和返回值。函数能将代码模块化，是构建复杂数据处理流程的关键。"
        },
        {
          title: "面向对象编程（OOP）基础",
          content: "理解类、对象、封装、继承和多态的基本概念。虽然初期不必深入，但这是阅读和理解许多高级库与框架代码的必备知识。"
        },
        {
          title: "文件操作与异常处理",
          content: "掌握基本的文件读写（如处理CSV、JSON文件）以及使用try-except捕获错误。数据清洗和模型训练中，读写数据和鲁棒性处理必不可少。"
        }
      ]
    },
    {
      id: 2,
      title: "数据处理与科学计算库：直接赋能数据分析",
      description: "这是学习的重中之重，也是Python在AI领域无可替代的原因。掌握这些库，你就掌握了处理数据的'超能力'。",
      sections: [
        {
          title: "NumPy",
          content: "Python科学计算的基石，提供高效的多维数组对象和矩阵运算能力。几乎所有机器学习框架底层都依赖NumPy进行数值计算。"
        },
        {
          title: "Pandas",
          content: "数据分析的'瑞士军刀'。核心是掌握DataFrame和Series这两种数据结构，用于数据的读取、清洗、转换、合并和分组聚合分析。你的专业'商务数据分析'绝大部分工作都可通过Pandas完成。"
        },
        {
          title: "Matplotlib / Seaborn",
          content: "数据可视化库。学习绘制折线图、柱状图、散点图、直方图等，用于数据探索和结果展示。一图胜千言，可视化是分析报告的核心。"
        }
      ]
    },
    {
      id: 3,
      title: "高效学习的实践路径",
      description: "明确了学什么，如何高效学习同样关键。以下是结合搜索结果的建议：",
      sections: [
        {
          title: "目标驱动，制定计划",
          content: "明确你学习Python是为了'商务数据分析'和'AI应用'。以此为目标，将上述内容分解为每周的学习任务，保持连续性。"
        },
        {
          title: "边学边练，项目为王",
          content: "切忌只看不写。从第一个print('Hello World')开始，就要动手。最佳路径是：基础练习→库专项练习→微型项目。例如：用Pandas读取一个CSV销售报表，进行数据清洗、分组统计，并用Matplotlib画出月度销售趋势图。"
        },
        {
          title: "善用资源与社区",
          content: "选择一本好书（如《Python编程：从入门到实践》），利用交互式平台（Codecademy、DataCamp），融入社区（Stack Overflow、GitHub、Reddit）。这是解决问题、开阔眼界的最快途径。"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold text-pink-800 mb-8 text-center">Python基础课程</h1>
        <div className="bg-pink-100 rounded-2xl p-8 shadow-sm mb-12">
          <p className="text-gray-700 mb-4">
            在AI编程日益成熟的今天，学习Python基础的核心策略是：聚焦与AI和数据科学强相关的核心语法与生态库，跳过非必要的边缘知识，以最快速度获得"使用AI工具解决实际问题"的能力。
          </p>
          <p className="text-gray-700">
            基于搜索结果，为你梳理了一份高效、实用的Python基础学习清单，确保你学习的每一分钟都直接服务于未来的数据分析与AI应用。
          </p>
        </div>
        <div className="space-y-16">
          {modules.map((module) => (
            <div 
              key={module.id} 
              id={module.id === 1 ? "core-language" : module.id === 2 ? "data-libraries" : "learning-path"}
              className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold mr-4">
                  {module.id}
                </div>
                <h2 className="text-2xl font-semibold text-pink-700">{module.title}</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg">{module.description}</p>
              <div className="space-y-6">
                {module.sections.map((section, index) => (
                  <div key={index} className="border-l-4 border-pink-300 pl-6 py-2">
                    <h3 className="text-xl font-medium text-pink-600 mb-2">{section.title}</h3>
                    <p className="text-gray-600">{section.content}</p>
                  </div>
                ))}
              </div>
              {module.id === 1 && (
                <div className="mt-8 pt-6 border-t border-pink-100">
                  <a href="/python-course/core-unit" className="inline-block px-6 py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white font-medium rounded-full hover:from-pink-400 hover:to-pink-500 transition-all">
                    开始学习第一个单元 →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 bg-pink-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">总结与展望</h2>
          <p className="text-gray-700 mb-4">
            在AI时代学习Python基础，"精"比"广"更重要。你无需立即深入线程、网络编程等高级主题，而应牢牢抓住数据处理（Pandas/NumPy）和基础编程逻辑这两个命脉。
          </p>
          <p className="text-gray-700">
            当你扎实掌握了这份清单中的内容，你就不仅具备了理解和使用AI模型（如调用Scikit-learn、PyTorch库）的底层能力，更能利用AI编程助手（如Copilot）高效完成代码，真正实现人机协同。此时，你的Python基础就不再是孤立的语法知识，而是连接你的商业洞察与AI智能的核心桥梁。
          </p>
        </div>
      </div>
    </div>
  );
};

export default PythonCoursePage;