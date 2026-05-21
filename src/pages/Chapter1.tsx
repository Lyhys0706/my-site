import React from 'react';
import PythonCourseLayout from '../layouts/PythonCourseLayout';
import CodeRunner from '../components/CodeRunner';

const Chapter1: React.FC = () => {
  return (
    <PythonCourseLayout title="第一章：Python基础语法">
      <div className="p-6 lg:p-8">
        {/* 章节介绍 */}
        <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🐍</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">第一章：Python基础语法</h1>
              <p className="text-xl opacity-90">变量、数据类型、运算符、字符串操作</p>
            </div>
          </div>
          <p className="text-lg opacity-90">
            本章将带你学习Python的基础语法，包括变量的定义、数据类型、运算符的使用以及字符串的操作。
            通过大量的实例和在线代码编辑器，你将快速掌握Python编程的基本技能。
          </p>
        </div>

        {/* 1.1 第一个Python程序 */}
        <div id="lesson-1-1" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 font-bold">1.1</span>
            第一个Python程序
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            让我们从最简单的程序开始。print()函数用于在屏幕上输出内容。在Python中，print()是一个内置函数，
            可以将指定的内容打印到控制台。
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6">
            <h4 className="font-bold text-blue-900 mb-2">💡 小贴士</h4>
            <p className="text-blue-800 text-sm">
              print()函数是Python中最常用的函数之一，它可以输出各种类型的数据，包括字符串、数字、变量等。
              使用双引号或单引号括起来的文本称为字符串。
            </p>
          </div>

          <CodeRunner
            initialCode={`# 第一个Python程序
print("Hello, World!")
print("欢迎学习Python!")

# 这是注释，不会被执行
name = "学生"
print(f"你好, {name}!")
print("Python真是太有趣了！")`}
            title="1.1 第一个Python程序 - 在线练习"
            defaultOpen={true}
          />
        </div>

        {/* 1.2 变量和数据类型 */}
        <div id="lesson-1-2" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold">1.2</span>
            变量和数据类型
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Python中有多种数据类型，包括整数(int)、浮点数(float)、字符串(str)、布尔值(bool)等。
            变量是用来存储数据的容器，我们不需要声明变量的类型，Python会自动推断。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-bold text-pink-900 mb-2">🔢 整数 (int)</h4>
              <p className="text-pink-800 text-sm">用于表示整数，如：1, 100, -5</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-bold text-blue-900 mb-2">🔟 浮点数 (float)</h4>
              <p className="text-blue-800 text-sm">用于表示小数，如：3.14, -0.5</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h4 className="font-bold text-green-900 mb-2">📝 字符串 (str)</h4>
              <p className="text-green-800 text-sm">用于表示文本，如："Hello"</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl">
              <h4 className="font-bold text-yellow-900 mb-2">✅ 布尔值 (bool)</h4>
              <p className="text-yellow-800 text-sm">用于表示真/假，值为True或False</p>
            </div>
          </div>

          <CodeRunner
            initialCode={`# 整数
age = 20
print(f"年龄: {age}")

# 浮点数
height = 1.65
print(f"身高: {height}米")

# 字符串
name = "小明"
print(f"姓名: {name}")

# 布尔值
is_student = True
print(f"是学生吗: {is_student}")

# 查看数据类型
print(f"\\n数据类型:")
print(f"age的类型: {type(age)}")
print(f"height的类型: {type(height)}")
print(f"name的类型: {type(name)}")
print(f"is_student的类型: {type(is_student)}")`}
            title="1.2 变量和数据类型 - 在线练习"
            defaultOpen={true}
          />
        </div>

        {/* 1.3 运算符 */}
        <div id="lesson-1-3" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">1.3</span>
            运算符
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            运算符用于对数据进行计算和比较。Python支持算术运算符（+、-、*、/）、比较运算符（==、!=、&gt;、&lt;）和逻辑运算符（and、or、not）。
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-bold text-pink-900 mb-2">➕ 算术运算符</h4>
              <p className="text-pink-800 text-sm">+ - * / // % **</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl">
              <h4 className="font-bold text-purple-900 mb-2">⚖️ 比较运算符</h4>
              <p className="text-purple-800 text-sm">== != &gt; &lt; &gt;= &lt;=</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-bold text-blue-900 mb-2">🔗 逻辑运算符</h4>
              <p className="text-blue-800 text-sm">and or not</p>
            </div>
          </div>

          <CodeRunner
            initialCode={`# 算术运算符
a, b = 10, 3
print(f"a = {a}, b = {b}")
print(f"a + b = {a + b}")
print(f"a - b = {a - b}")
print(f"a * b = {a * b}")
print(f"a / b = {a / b}")
print(f"a // b = {a // b}")  # 整除
print(f"a % b = {a % b}")   # 取余
print(f"a ** b = {a ** b}") # 幂运算

# 比较运算符
print(f"\\n比较运算:")
print(f"a > b: {a > b}")
print(f"a == b: {a == b}")
print(f"a != b: {a != b}")

# 逻辑运算符
x, y = True, False
print(f"\\n逻辑运算:")
print(f"x and y: {x and y}")
print(f"x or y: {x or y}")
print(f"not x: {not x}")`}
            title="1.3 运算符 - 在线练习"
            defaultOpen={true}
          />
        </div>

        {/* 1.4 字符串操作 */}
        <div id="lesson-1-4" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold">1.4</span>
            字符串操作
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            字符串是Python中非常重要的数据类型。我们可以使用+号拼接字符串，使用*号重复字符串，
            使用切片操作获取子字符串，还可以使用各种内置方法操作字符串。
          </p>

          <CodeRunner
            initialCode={`# 字符串拼接
first_name = "张"
last_name = "三"
name = first_name + last_name
print(f"姓名: {name}")

# 字符串格式化
age = 20
message = f"我叫{name}，今年{age}岁"
print(message)

# 字符串切片
text = "Hello, Python!"
print(f"\\n原字符串: '{text}'")
print(f"前5个字符: '{text[:5]}'")
print(f"后7个字符: '{text[-7:]}'")
print(f"第7-12个字符: '{text[7:12]}'")

# 字符串方法
print(f"\\n字符串方法:")
print(f"大写: {text.upper()}")
print(f"小写: {text.lower()}")
print(f"替换: {text.replace('Python', 'World')}")
print(f"长度: {len(text)}")

# 字符串重复
greeting = "Hi! "
print(f"\\n重复字符串: {greeting * 3}")`}
            title="1.4 字符串操作 - 在线练习"
            defaultOpen={true}
          />
        </div>

        {/* 章节总结 */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 章节总结</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-pink-600 mb-3">✅ 已掌握的技能</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 使用print()函数输出内容</li>
                <li>• 定义变量并理解数据类型</li>
                <li>• 使用算术运算符进行计算</li>
                <li>• 使用比较和逻辑运算符</li>
                <li>• 操作和处理字符串</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-purple-600 mb-3">📖 下一步学习</h3>
              <p className="text-gray-700 mb-3">
                在下一章中，我们将学习Python的数据结构，包括列表、元组、字典和集合。
                这些数据结构将帮助你更高效地组织和处理数据。
              </p>
              <div className="text-purple-600 font-medium">
                → 第二章：数据结构
              </div>
            </div>
          </div>
        </div>
      </div>
    </PythonCourseLayout>
  );
};

export default Chapter1;
