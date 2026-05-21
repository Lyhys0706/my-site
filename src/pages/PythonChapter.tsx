import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import CodeRunner from '../components/CodeRunner';

const chapterContent: Record<string, {
  title: string;
  description: string;
  lessons: Array<{
    title: string;
    content: string;
    code?: string;
  }>;
}> = {
  'chapter-1': {
    title: '第1章：Python基础语法',
    description: '学习Python的基本语法，包括变量、数据类型、运算符等核心概念。',
    lessons: [
      {
        title: '1.1 第一个Python程序',
        content: '让我们从最简单的程序开始。print()函数用于在屏幕上输出内容。',
        code: `print("Hello, World!")
print("欢迎学习Python!")

# 这是注释
name = "学生"
print(f"你好, {name}!")
print("Python真是太有趣了！")`
      },
      {
        title: '1.2 变量和数据类型',
        content: 'Python中有多种数据类型：整数、浮点数、字符串、布尔值等。',
        code: `# 整数
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
print(type(age))
print(type(height))
print(type(name))
print(type(is_student))`
      },
      {
        title: '1.3 运算符',
        content: '学习算术运算符、比较运算符和逻辑运算符的使用。',
        code: `# 算术运算符
a, b = 10, 3
print(f"a + b = {a + b}")
print(f"a - b = {a - b}")
print(f"a * b = {a * b}")
print(f"a / b = {a / b}")
print(f"a // b = {a // b}")  # 整除
print(f"a % b = {a % b}")   # 取余
print(f"a ** b = {a ** b}") # 幂运算

# 比较运算符
print(f"a > b: {a > b}")
print(f"a == b: {a == b}")
print(f"a != b: {a != b}")

# 逻辑运算符
x, y = True, False
print(f"x and y: {x and y}")
print(f"x or y: {x or y}")
print(f"not x: {not x}")`
      },
      {
        title: '1.4 字符串操作',
        content: '学习字符串的拼接、切片、格式化等常用操作。',
        code: `# 字符串拼接
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
print(f"完整: {text}")
print(f"前5个字符: {text[:5]}")
print(f"后7个字符: {text[-7:]}")
print(f"第7-12个字符: {text[7:12]}")

# 字符串方法
print(f"大写: {text.upper()}")
print(f"小写: {text.lower()}")
print(f"替换: {text.replace('Python', 'World')}")`
      }
    ]
  },
  'chapter-2': {
    title: '第2章：控制流程',
    description: '学习条件语句和循环语句的使用。',
    lessons: [
      {
        title: '2.1 条件语句',
        content: '使用if-elif-else语句根据条件执行不同的代码。',
        code: `# 简单条件判断
score = 85
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格，需要加油！")

# 多条件判断
age = 20
is_student = True
if age >= 18 and is_student:
    print("成年学生")
elif age >= 18:
    print("成年人")
else:
    print("未成年人")`
      },
      {
        title: '2.2 for循环',
        content: '使用for循环遍历序列或执行固定次数的循环。',
        code: `# 遍历列表
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
for fruit in fruits:
    print(f"我喜欢吃: {fruit}")

# 使用range()
print("\\n使用range(1, 6):")
for i in range(1, 6):
    print(f"数字: {i}")

# 遍历字典
student = {"name": "张三", "age": 20, "major": "数据分析"}
print("\\n遍历字典:")
for key, value in student.items():
    print(f"{key}: {value}")`
      },
      {
        title: '2.3 while循环',
        content: '使用while循环在条件为真时重复执行代码块。',
        code: `# 基础while循环
count = 0
while count < 5:
    print(f"计数: {count}")
    count += 1

print("\\nwhile循环结束")

# 猜数字游戏
import random
target = random.randint(1, 10)
attempts = 0

print(f"\\n猜数字游戏！目标数字在1-10之间")

while True:
    guess = int(input("\\n请输入你猜的数字: "))
    attempts += 1
    
    if guess == target:
        print(f"恭喜你！猜对了！用了{attempts}次")
        break
    elif guess < target:
        print("太小了，再试试！")
    else:
        print("太大了，再试试！")`
      }
    ]
  },
  'chapter-3': {
    title: '第3章：函数与模块',
    description: '学习函数的定义、调用以及模块的使用。',
    lessons: [
      {
        title: '3.1 定义和调用函数',
        content: '使用def关键字定义函数，可以重复调用。',
        code: `# 定义简单函数
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
print(f"10 + 20 = {result}")

# 多个返回值
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

data = [10, 20, 30, 40, 50]
min_val, max_val, avg_val = get_stats(data)
print(f"最小值: {min_val}, 最大值: {max_val}, 平均值: {avg_val}")`
      },
      {
        title: '3.2 模块导入',
        content: '使用import导入标准库或第三方模块。',
        code: `# 导入整个模块
import math
print(f"圆周率: {math.pi}")
print(f"平方根: {math.sqrt(16)}")
print(f"2的3次方: {math.pow(2, 3)}")

# 导入特定函数
from random import randint, choice
print(f"\\n随机整数: {randint(1, 100)}")

colors = ["红色", "绿色", "蓝色", "黄色"]
print(f"随机颜色: {choice(colors)}")

# 使用别名
import datetime as dt
now = dt.datetime.now()
print(f"\\n当前时间: {now}")
print(f"年份: {now.year}, 月份: {now.month}, 日期: {now.day}")`
      }
    ]
  },
  'chapter-4': {
    title: '第4章：数据结构',
    description: '学习列表、元组、字典、集合的使用。',
    lessons: [
      {
        title: '4.1 列表',
        content: '列表是可变的有序序列，可以存储任意类型的数据。',
        code: `# 创建列表
fruits = ["苹果", "香蕉", "橙子"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

print(f"水果列表: {fruits}")
print(f"数字列表: {numbers}")

# 列表操作
fruits.append("葡萄")  # 添加元素
print(f"添加后: {fruits}")

fruits.insert(1, "草莓")  # 插入元素
print(f"插入后: {fruits}")

fruits.remove("香蕉")  # 移除元素
print(f"移除后: {fruits}")

# 列表切片
print(f"前两个: {fruits[:2]}")
print(f"后两个: {fruits[-2:]}")

# 列表排序
numbers.sort()
print(f"排序后: {numbers}")`
      },
      {
        title: '4.2 字典',
        content: '字典是键值对的数据结构，通过键来访问值。',
        code: `# 创建字典
student = {
    "name": "张三",
    "age": 20,
    "major": "数据分析"
}

print(f"学生信息: {student}")
print(f"姓名: {student['name']}")

# 添加和修改
student["grade"] = "大三"  # 添加新键值对
student["age"] = 21        # 修改值
print(f"更新后: {student}")

# 遍历字典
print("\\n遍历字典:")
for key, value in student.items():
    print(f"{key}: {value}")

# 常用方法
print(f"\\n所有键: {list(student.keys())}")
print(f"所有值: {list(student.values())}")
print(f"键值对: {list(student.items())}")`
      }
    ]
  },
  'chapter-5': {
    title: '第5章：文件操作',
    description: '学习文件的读写操作和异常处理。',
    lessons: [
      {
        title: '5.1 读写文本文件',
        content: '使用open()函数打开文件，使用read()和write()方法进行读写。',
        code: `# 写入文件
content = """Python数据分析实战
第一行：基础语法学习
第二行：数据处理技巧
第三行：可视化展示"""

with open("example.txt", "w", encoding="utf-8") as f:
    f.write(content)

print("文件写入成功！")

# 读取文件
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print("\\n文件内容:")
    print(content)

# 按行读取
with open("example.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
    print(f"\\n共有 {len(lines)} 行")
    for i, line in enumerate(lines, 1):
        print(f"第{i}行: {line.strip()}")`
      },
      {
        title: '5.2 异常处理',
        content: '使用try-except语句捕获和处理异常。',
        code: `# 基础异常处理
try:
    result = 10 / 0
except ZeroDivisionError:
    print("错误：不能除以零！")

# 多个异常类型
try:
    num = int(input("请输入一个数字: "))
    print(f"你输入的数字是: {num}")
except ValueError:
    print("错误：请输入有效的数字！")
except KeyboardInterrupt:
    print("\\n程序被用户中断")
finally:
    print("程序执行完毕")

# 实际应用示例
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "错误：除数不能为零"

print(f"\\nsafe_divide(10, 2) = {safe_divide(10, 2)}")
print(f"safe_divide(10, 0) = {safe_divide(10, 0)}")`
      }
    ]
  },
  'chapter-6': {
    title: '第6章：数据分析基础',
    description: '学习使用NumPy和Pandas进行数据分析。',
    lessons: [
      {
        title: '6.1 NumPy入门',
        content: 'NumPy是Python数值计算的基础库，提供高效的数组操作。',
        code: `import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])
print(f"数组: {arr}")
print(f"类型: {type(arr)}")
print(f"形状: {arr.shape}")

# 创建特殊数组
zeros = np.zeros(5)
ones = np.ones((3, 3))
range_arr = np.arange(0, 10, 2)

print(f"\\n零数组: {zeros}")
print(f"\\n全1矩阵:\\n{ones}")
print(f"\\n范围数组: {range_arr}")

# 数组运算
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
print(f"\\narr1 + arr2 = {arr1 + arr2}")
print(f"arr1 * 2 = {arr1 * 2}")
print(f"arr1的平方: {arr1 ** 2}")`
      },
      {
        title: '6.2 Pandas入门',
        content: 'Pandas是强大的数据分析库，提供DataFrame数据结构。',
        code: `import pandas as pd

# 创建DataFrame
data = {
    "姓名": ["张三", "李四", "王五", "赵六"],
    "年龄": [20, 22, 21, 23],
    "专业": ["数据分析", "计算机", "数学", "统计"],
    "成绩": [85, 92, 78, 88]
}

df = pd.DataFrame(data)
print("学生信息表:")
print(df)

# 基本统计
print(f"\\n平均年龄: {df['年龄'].mean()}")
print(f"最高成绩: {df['成绩'].max()}")
print(f"最低成绩: {df['成绩'].min()}")
print(f"成绩标准差: {df['成绩'].std():.2f}")

# 数据筛选
print(f"\\n成绩大于85的学生:")
print(df[df['成绩'] > 85])

# 数据排序
print(f"\\n按成绩排序（降序）:")
print(df.sort_values('成绩', ascending=False))`
      }
    ]
  }
};

const PythonChapter: React.FC = () => {
  const { chapterId } = useParams();
  const chapter = chapterContent[chapterId || 'chapter-1'];

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">章节不存在</h2>
          <Link to="/python-course" className="text-pink-600 hover:underline">
            返回课程目录
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* 章节头部 */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/python-course" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            返回课程目录
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-10 h-10" />
            <h1 className="text-4xl font-bold">{chapter.title}</h1>
          </div>
          <p className="text-xl opacity-90">{chapter.description}</p>
        </div>
      </div>

      {/* 章节内容 */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {chapter.lessons.map((lesson, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {lesson.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{lesson.content}</p>
              </div>
              
              {lesson.code && (
                <div>
                  <h3 className="text-lg font-semibold text-pink-600 mb-3 flex items-center gap-2">
                    <span>💻</span> 代码示例
                  </h3>
                  <CodeRunner 
                    initialCode={lesson.code}
                    title="在线代码编辑器"
                    defaultOpen={true}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 章节导航 */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            to="/python-course"
            className="px-6 py-3 bg-white border-2 border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors"
          >
            ← 返回课程目录
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PythonChapter;
