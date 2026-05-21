import React from 'react';
import PythonCourseLayout from '../layouts/PythonCourseLayout';
import CodeRunner from '../components/CodeRunner';

const Chapter2: React.FC = () => {
  return (
    <PythonCourseLayout title="第二章：数据结构">
      <div className="p-6 lg:p-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🗂️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">第二章：数据结构</h1>
              <p className="text-xl opacity-90">列表、元组、字典、集合</p>
            </div>
          </div>
          <p className="text-lg opacity-90">
            本章将带你学习Python中四种重要的数据结构：列表、元组、字典和集合。
            这些数据结构是Python编程的基础，掌握它们将使你的编程能力大幅提升。
          </p>
        </div>

        {/* 2.1 列表 */}
        <div id="lesson-2-1" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">2.1</span>
            列表
          </h2>
          <p className="text-gray-700 mb-6">
            列表是Python中最常用的数据结构，它是一个有序、可变的元素集合。你可以随时添加、删除或修改列表中的元素。
          </p>

          <CodeRunner
            initialCode={`# 创建列表
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

print(f"水果列表: {fruits}")
print(f"数字列表: {numbers}")
print(f"混合列表: {mixed}")

# 列表操作
print(f"\\n列表操作:")
fruits.append("草莓")  # 添加元素
print(f"追加后: {fruits}")

fruits.insert(1, "西瓜")  # 插入元素
print(f"插入后: {fruits}")

removed = fruits.pop()  # 移除并返回最后一个元素
print(f"移除: {removed}, 列表: {fruits}")

# 列表切片
print(f"\\n切片操作:")
print(f"前两个: {fruits[:2]}")
print(f"后两个: {fruits[-2:]}")
print(f"中间元素: {fruits[1:3]}")`}
            title="2.1 列表 - 在线练习"
            defaultOpen={true}
          />
        </div>

        {/* 2.2 元组 */}
        <div id="lesson-2-2" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold">2.2</span>
            元组
          </h2>
          <p className="text-gray-700 mb-6">
            元组与列表类似，但元组是不可变的（创建后不能修改）。元组通常用于存储不变的数据。
          </p>

          <CodeRunner
            initialCode={`# 创建元组
coordinates = (10, 20)
colors = ("红色", "绿色", "蓝色")

print(f"坐标: {coordinates}")
print(f"颜色: {colors}")

# 访问元素
print(f"\\n访问元素:")
print(f"第一个坐标: {coordinates[0]}")
print(f"第二个坐标: {coordinates[1]}")

# 元组解包
x, y = coordinates
print(f"\\n解包: x = {x}, y = {y}")

# 元组方法
print(f"\\n元组方法:")
print(f"红色在颜色中: {'红色' in colors}")
print(f"颜色数量: {len(colors)}")

# 单元素元组（需要逗号）
single = (42,)
print(f"\\n单元素元组: {single}")`}
            title="2.2 元组 - 在线练习"
            defaultOpen={true}
          />
        </div>

        {/* 2.3 字典 */}
        <div id="lesson-2-3" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold">2.3</span>
            字典
          </h2>
          <p className="text-gray-700 mb-6">
            字典是键值对的数据结构，通过键来访问值。字典中的键必须是唯一的，且不可变（通常用字符串或数字）。
          </p>

          <CodeRunner
            initialCode={`# 创建字典
student = {
    "name": "张三",
    "age": 20,
    "major": "数据分析"
}

print(f"学生信息: {student}")

# 访问值
print(f"\\n访问值:")
print(f"姓名: {student['name']}")
print(f"年龄: {student['age']}")

# 添加和修改
student["grade"] = "大三"
student["age"] = 21
print(f"\\n更新后: {student}")

# 遍历字典
print(f"\\n遍历字典:")
for key, value in student.items():
    print(f"{key}: {value}")

# 常用方法
print(f"\\n常用方法:")
print(f"所有键: {list(student.keys())}")
print(f"所有值: {list(student.values())}")
print(f"键值对: {list(student.items())}")`}
            title="2.3 字典 - 在线练习"
            defaultOpen={true}
          />
        </div>

        {/* 2.4 集合 */}
        <div id="lesson-2-4" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">2.4</span>
            集合
          </h2>
          <p className="text-gray-700 mb-6">
            集合是无序且不重复的元素集合。主要用于去重和成员测试。
          </p>

          <CodeRunner
            initialCode={`# 创建集合
fruits = {"苹果", "香蕉", "橙子", "苹果", "香蕉"}
print(f"集合（自动去重）: {fruits}")

# 添加和删除
fruits.add("葡萄")
fruits.remove("香蕉")
print(f"添加和删除后: {fruits}")

# 集合运算
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

print(f"\\n集合运算:")
print(f"并集: {set1 | set2}")
print(f"交集: {set1 & set2}")
print(f"差集: {set1 - set2}")
print(f"对称差集: {set1 ^ set2}")

# 成员测试
print(f"\\n成员测试:")
print(f"3在set1中: {3 in set1}")
print(f"6不在set1中: {6 not in set1}")`}
            title="2.4 集合 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 章节总结</h2>
          <p className="text-gray-700 mb-4">
            本章学习了四种重要的数据结构：列表（可变有序）、元组（不可变有序）、字典（键值对）、集合（无序不重复）。
            掌握这些数据结构将使你能够更高效地组织和处理数据。
          </p>
          <div className="text-blue-600 font-medium">
            → 下一章：函数与模块
          </div>
        </div>
      </div>
    </PythonCourseLayout>
  );
};

export default Chapter2;
