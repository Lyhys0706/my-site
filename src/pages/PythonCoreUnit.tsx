import React from 'react';
import { Link } from 'react-router-dom';
import CodeRunner from '../components/CodeRunner';

const PythonCoreUnit: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link to="/python-course" className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-800 font-medium transition-all mr-4">
            ← 返回课程首页
          </Link>
          <h1 className="text-3xl font-bold text-pink-800">Python语言核心：掌握与数据打交道的语法</h1>
        </div>
        
        <div className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">单元概述</h2>
          <p className="text-gray-600 mb-6">
            这是Python学习的第一个核心单元，目标是帮助你掌握与数据打交道的基本语法。无论你是完全的编程小白，还是有其他语言基础的学习者，本单元都能为你打下坚实的Python基础。
          </p>
          <p className="text-gray-600">
            本单元将涵盖Python的基本语法、数据类型、数据结构、控制流、函数、面向对象编程基础以及文件操作与异常处理。这些内容是所有Python程序的基础，也是你后续学习数据分析和AI应用的必备知识。
          </p>
        </div>
        
        {/* 1. 基本语法与数据类型 */}
        <div className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-6">1. 基本语法与数据类型</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-pink-600 mb-4">1.1 变量与赋值</h3>
            <p className="text-gray-600 mb-4">
              变量是存储数据的容器，在Python中创建变量非常简单，只需要为变量赋值即可。
            </p>
            <CodeRunner 
              initialCode={`# 变量赋值示例
name = "商务数据分析"
age = 20
height = 1.65
is_student = True

print(name)    # 输出：商务数据分析
print(age)     # 输出：20
print(height)  # 输出：1.65
print(is_student)  # 输出：True`}
              title="变量赋值示例"
              defaultOpen={false}
            />
            <p className="text-gray-600">
              在Python中，变量的类型是动态的，不需要显式声明类型。Python会根据赋值自动确定变量的类型。
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-pink-600 mb-4">1.2 数据类型</h3>
            <p className="text-gray-600 mb-4">
              Python有几种基本的数据类型，你需要熟悉它们的特点和用法。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-medium text-pink-700 mb-2">整数 (int)</h4>
                <p className="text-gray-600 text-sm">用于表示整数，如：1, 100, -5</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-medium text-pink-700 mb-2">浮点数 (float)</h4>
                <p className="text-gray-600 text-sm">用于表示小数，如：3.14, 0.001, -2.5</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-medium text-pink-700 mb-2">字符串 (str)</h4>
                <p className="text-gray-600 text-sm">用于表示文本，如："Hello", 'Python'</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-medium text-pink-700 mb-2">布尔值 (bool)</h4>
                <p className="text-gray-600 text-sm">用于表示真或假，只有两个值：True, False</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-pink-600 mb-4">1.3 核心数据结构</h3>
            <p className="text-gray-600 mb-4">
              Python有四种核心数据结构，它们在数据分析中非常常用：
            </p>
            
            <div className="mb-6">
              <h4 className="font-medium text-pink-700 mb-2">列表 (List)</h4>
              <p className="text-gray-600 mb-3">
                列表是有序的可变集合，用方括号 [] 表示。
              </p>
              <CodeRunner 
                initialCode={`# 创建列表
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]

# 访问元素
print(fruits[0])  # 输出：apple

# 修改元素
fruits[1] = "orange"
print(fruits)  # 输出：['apple', 'orange', 'cherry']

# 添加元素
fruits.append("grape")
print(fruits)  # 输出：['apple', 'orange', 'cherry', 'grape']`}
                title="列表操作示例"
                defaultOpen={false}
              />
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-pink-700 mb-2">字典 (Dictionary)</h4>
              <p className="text-gray-600 mb-3">
                字典是无序的键值对集合，用大括号 {} 表示。
              </p>
              <CodeRunner 
                initialCode={`# 创建字典
student = {
  "name": "张三",
  "age": 20,
  "major": "商务数据分析"
}

# 访问值
print(student["name"])  # 输出：张三

# 修改值
student["age"] = 21
print(student)  # 输出：{'name': '张三', 'age': 21, 'major': '商务数据分析'}

# 添加新键值对
student["grade"] = "A"
print(student)  # 输出：{'name': '张三', 'age': 21, 'major': '商务数据分析', 'grade': 'A'}`}
                title="字典操作示例"
                defaultOpen={false}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-pink-700 mb-2">元组 (Tuple)</h4>
                <p className="text-gray-600 mb-3">
                  元组是有序的不可变集合，用圆括号 () 表示。
                </p>
                <CodeRunner 
                  initialCode={`# 创建元组
colors = ("red", "green", "blue")

# 访问元素
print(colors[0])  # 输出：red

# 注意：元组不能修改
# colors[0] = "yellow"  # 这会报错`}
                  title="元组操作示例"
                  defaultOpen={false}
                />
              </div>
              <div>
                <h4 className="font-medium text-pink-700 mb-2">集合 (Set)</h4>
                <p className="text-gray-600 mb-3">
                  集合是无序的唯一元素集合，用大括号 {} 表示。
                </p>
                <CodeRunner 
                  initialCode={`# 创建集合
numbers = {1, 2, 3, 4, 5}

# 添加元素
numbers.add(6)
print(numbers)  # 输出：{1, 2, 3, 4, 5, 6}

# 注意：集合会自动去重
duplicates = {1, 2, 2, 3, 3, 3}
print(duplicates)  # 输出：{1, 2, 3}`}
                  title="集合操作示例"
                  defaultOpen={false}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 2. 程序控制结构 */}
        <div className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-6">2. 程序控制结构</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-pink-600 mb-4">2.1 条件语句 (if-elif-else)</h3>
            <p className="text-gray-600 mb-4">
              条件语句用于根据不同的条件执行不同的代码块。
            </p>
            <CodeRunner 
              initialCode={`# 条件语句示例
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")

# 输出：良好`}
              title="条件语句示例"
              defaultOpen={false}
            />
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-pink-600 mb-4">2.2 循环语句</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-pink-700 mb-2">for 循环</h4>
              <p className="text-gray-600 mb-3">
                for 循环用于遍历序列（如列表、元组、字符串）中的元素。
              </p>
              <CodeRunner 
                initialCode={`# for 循环示例
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(f"我喜欢吃 {fruit}")

# 输出：
# 我喜欢吃 apple
# 我喜欢吃 banana
# 我喜欢吃 cherry`}
                title="for循环示例"
                defaultOpen={false}
              />
            </div>
            
            <div>
              <h4 className="font-medium text-pink-700 mb-2">while 循环</h4>
              <p className="text-gray-600 mb-3">
                while 循环用于在条件为真时重复执行代码块。
              </p>
              <CodeRunner 
                initialCode={`# while 循环示例
count = 1

while count <= 5:
    print(f"计数：{count}")
    count += 1

# 输出：
# 计数：1
# 计数：2
# 计数：3
# 计数：4
# 计数：5`}
                title="while循环示例"
                defaultOpen={false}
              />
            </div>
          </div>
        </div>
        
        {/* 3. 函数 */}
        <div className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-6">3. 函数</h2>
          <p className="text-gray-600 mb-4">
            函数是可重用的代码块，用于执行特定的任务。使用函数可以使代码更加模块化和易于维护。
          </p>
          <CodeRunner 
            initialCode={`# 函数定义和调用示例
def greet(name):
    """问候函数"""
    return f"你好，{name}！"

def calculate_average(numbers):
    """计算平均值"""
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

# 调用函数
print(greet("商务数据分析"))  # 输出：你好，商务数据分析！

scores = [85, 90, 78, 92, 88]
print(calculate_average(scores))  # 输出：86.6`}
            title="函数定义和调用示例"
            defaultOpen={false}
          />
          <p className="text-gray-600">
            函数可以接受参数，也可以返回值。函数文档字符串（三引号中的内容）用于说明函数的功能，这是一个良好的编程习惯。
          </p>
        </div>
        
        {/* 4. 面向对象编程基础 */}
        <div className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-6">4. 面向对象编程（OOP）基础</h2>
          <p className="text-gray-600 mb-4">
            面向对象编程是一种编程范式，它将数据和操作数据的方法封装在一起。在Python中，一切皆对象。
          </p>
          <CodeRunner 
            initialCode={`# 类的定义和使用示例
class Student:
    def __init__(self, name, age, major):
        self.name = name
        self.age = age
        self.major = major
    
    def introduce(self):
        return f"我叫{self.name}，今年{self.age}岁，专业是{self.major}。"

# 创建对象
student1 = Student("张三", 20, "商务数据分析")
student2 = Student("李四", 21, "市场营销")

# 调用方法
print(student1.introduce())  # 输出：我叫张三，今年20岁，专业是商务数据分析。
print(student2.introduce())  # 输出：我叫李四，今年21岁，专业是市场营销。`}
            title="面向对象编程示例"
            defaultOpen={false}
          />
          <p className="text-gray-600">
            类是对象的蓝图，对象是类的实例。__init__方法是构造函数，用于初始化对象的属性。self参数代表对象本身。
          </p>
        </div>
        
        {/* 5. 文件操作与异常处理 */}
        <div className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-6">5. 文件操作与异常处理</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-pink-600 mb-4">5.1 文件读写</h3>
            <p className="text-gray-600 mb-4">
              Python提供了简单的方法来读写文件，这在处理数据时非常重要。
            </p>
            <CodeRunner 
              initialCode={`# 文件写入示例
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("商务数据分析\n")
    f.write("Python基础\n")
    f.write("数据科学\n")

# 文件读取示例
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# 输出：
# 商务数据分析
# Python基础
# 数据科学`}
              title="文件操作示例"
              defaultOpen={false}
            />
            <p className="text-gray-600">
              使用with语句可以自动处理文件的关闭，这是一种良好的编程习惯。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-pink-600 mb-4">5.2 异常处理</h3>
            <p className="text-gray-600 mb-4">
              异常处理用于捕获和处理程序运行时的错误，使程序更加健壮。
            </p>
            <CodeRunner 
              initialCode={`# 异常处理示例
try:
    # 可能会出错的代码
    number = int(input("请输入一个数字："))
    result = 10 / number
    print(f"结果是：{result}")
except ValueError:
    print("错误：请输入有效的数字！")
except ZeroDivisionError:
    print("错误：除数不能为零！")
except Exception as e:
    print(f"发生了未知错误：{e}")
finally:
    print("程序执行完毕")`}
              title="异常处理示例"
              defaultOpen={false}
            />
          </div>
        </div>
        
        {/* 练习与挑战 */}
        <div className="bg-pink-100 rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-6">练习与挑战</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-pink-600 mb-3">基础练习</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>创建一个包含5个元素的列表，然后添加一个元素，删除一个元素，并打印最终结果。</li>
                <li>创建一个字典，包含姓名、年龄、专业等信息，然后修改其中的一个值，并添加一个新的键值对。</li>
                <li>使用for循环打印1到10的数字。</li>
                <li>使用while循环计算1到100的和。</li>
                <li>定义一个函数，接受两个参数并返回它们的和。</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-pink-600 mb-3">进阶挑战</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>编写一个程序，从用户输入中读取5个数字，计算它们的平均值，并打印结果。</li>
                <li>创建一个Student类，包含姓名、年龄、成绩等属性，以及计算平均成绩的方法。</li>
                <li>编写一个程序，读取一个文本文件的内容，统计其中单词的出现次数，并打印前10个最常用的单词。</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* 小结 */}
        <div className="bg-white border border-pink-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">单元小结</h2>
          <p className="text-gray-600 mb-4">
            在本单元中，你学习了Python的核心语法和数据结构，包括：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>变量与数据类型（整数、浮点数、字符串、布尔值）</li>
            <li>核心数据结构（列表、字典、元组、集合）</li>
            <li>程序控制结构（条件语句、循环语句）</li>
            <li>函数的定义和使用</li>
            <li>面向对象编程的基础概念</li>
            <li>文件操作与异常处理</li>
          </ul>
          <p className="text-gray-600">
            这些知识是Python编程的基础，也是你后续学习数据分析和AI应用的必备技能。通过不断练习和实践，你将逐渐掌握这些概念并能够灵活运用它们解决实际问题。
          </p>
        </div>
      </div>
    </div>
  );
};

export default PythonCoreUnit;