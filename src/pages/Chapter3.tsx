import React from 'react';
import PythonCourseLayout from '../layouts/PythonCourseLayout';
import CodeRunner from '../components/CodeRunner';

const Chapter3: React.FC = () => {
  return (
    <PythonCourseLayout title="第三章：函数与模块">
      <div className="p-6 lg:p-8">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">📦</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">第三章：函数与模块</h1>
              <p className="text-xl opacity-90">函数定义、参数传递、模块导入</p>
            </div>
          </div>
          <p className="text-lg opacity-90">
            本章将带你学习如何定义和使用函数，以及如何导入和使用模块。
            函数是组织代码的基本单元，模块则帮助我们管理大型项目。
          </p>
        </div>

        <div id="lesson-3-1" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">3.1 函数定义与调用</h2>
          <p className="text-gray-700 mb-6">函数是一段可重复使用的代码块。使用def关键字定义函数。</p>
          
          <CodeRunner
            initialCode={`# 定义简单函数
def greet():
    print("你好！欢迎学习Python！")

# 调用函数
greet()
greet()

# 带参数的函数
def greet_person(name):
    print(f"你好，{name}！")

greet_person("小明")
greet_person("小红")

# 带返回值的函数
def add(a, b):
    return a + b

result = add(10, 20)
print(f"\\n10 + 20 = {result}")

# 多个返回值
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

data = [10, 20, 30, 40, 50]
min_val, max_val, avg_val = get_stats(data)
print(f"\\n最小值: {min_val}")
print(f"最大值: {max_val}")
print(f"平均值: {avg_val}")`}
            title="3.1 函数定义 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div id="lesson-3-2" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">3.2 参数传递</h2>
          <p className="text-gray-700 mb-6">学习位置参数、默认参数、关键字参数和可变参数。</p>
          
          <CodeRunner
            initialCode={`# 位置参数和默认参数
def power(base, exponent=2):
    return base ** exponent

print(f"3的平方: {power(3)}")
print(f"2的立方: {power(2, 3)}")

# 关键字参数
def introduce(name, age, city="北京"):
    print(f"我是{name}，今年{age}岁，来自{city}")

introduce("小明", 20)
introduce("小红", 22, city="上海")
introduce(age=25, name="小李")

# 可变参数
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(f"\\n求和: {sum_all(1, 2, 3, 4, 5)}")
print(f"求和: {sum_all(10, 20)}")

# 关键字可变参数
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print("\\n学生信息:")
print_info(name="张三", age=20, major="数据分析")`}
            title="3.2 参数传递 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div id="lesson-3-3" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">3.3 模块导入</h2>
          <p className="text-gray-700 mb-6">使用import导入标准库或第三方模块。</p>
          
          <CodeRunner
            initialCode={`# 导入整个模块
import math
print(f"圆周率: {math.pi}")
print(f"平方根: {math.sqrt(16)}")
print(f"2的3次方: {math.pow(2, 3)}")

# 导入特定函数
from random import randint, choice
print(f"\\n随机整数(1-100): {randint(1, 100)}")

colors = ["红色", "绿色", "蓝色", "黄色"]
print(f"随机颜色: {choice(colors)}")

# 使用别名
import datetime as dt
now = dt.datetime.now()
print(f"\\n当前时间: {now}")
print(f"年份: {now.year}, 月份: {now.month}")

# 字符串处理模块
import string
print(f"\\n英文字母: {string.ascii_letters}")
print(f"数字: {string.digits}")`}
            title="3.3 模块导入 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 章节总结</h2>
          <p className="text-gray-700 mb-4">
            本章学习了函数的定义与调用、参数传递方式（位置参数、默认参数、关键字参数、可变参数）以及模块的导入与使用。
            掌握这些知识将帮助你编写更加模块化和可重用的代码。
          </p>
          <div className="text-purple-600 font-medium">
            → 下一章：面向对象编程
          </div>
        </div>
      </div>
    </PythonCourseLayout>
  );
};

export default Chapter3;
