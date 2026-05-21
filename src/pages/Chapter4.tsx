import React from 'react';
import PythonCourseLayout from '../layouts/PythonCourseLayout';
import CodeRunner from '../components/CodeRunner';

const Chapter4: React.FC = () => {
  return (
    <PythonCourseLayout title="第四章：面向对象编程">
      <div className="p-6 lg:p-8">
        <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏗️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">第四章：面向对象编程</h1>
              <p className="text-xl opacity-90">类与对象、继承与多态、特殊方法</p>
            </div>
          </div>
          <p className="text-lg opacity-90">
            面向对象编程（OOP）是一种编程范式，通过"类"和"对象"来组织代码。
            本章将带你学习类的定义、对象的创建、继承以及特殊方法的使用。
          </p>
        </div>

        <div id="lesson-4-1" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">4.1 类与对象</h2>
          <p className="text-gray-700 mb-6">类是对象的蓝图，对象是类的实例。</p>
          
          <CodeRunner
            initialCode={`# 定义一个简单的类
class Student:
    def __init__(self, name, age, major):
        self.name = name
        self.age = age
        self.major = major
    
    def introduce(self):
        return f"我叫{self.name}，今年{self.age}岁，专业是{self.major}"
    
    def study(self, subject):
        return f"{self.name}正在学习{subject}"

# 创建对象
student1 = Student("张三", 20, "数据分析")
student2 = Student("李四", 22, "计算机科学")

print(student1.introduce())
print(student2.introduce())
print()

print(student1.study("Python"))
print(student2.study("数据结构"))

# 访问和修改属性
print(f"\\n{student1.name}的年龄: {student1.age}")
student1.age = 21
print(f"修改后: {student1.name}的年龄: {student1.age}")`}
            title="4.1 类与对象 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div id="lesson-4-2" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">4.2 继承与多态</h2>
          <p className="text-gray-700 mb-6">继承允许我们创建基于现有类的新类，多态允许不同对象对同一消息做出不同响应。</p>
          
          <CodeRunner
            initialCode={`# 基类
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"我是{self.name}，今年{self.age}岁"

# 子类
class Student(Person):
    def __init__(self, name, age, major):
        super().__init__(name, age)
        self.major = major
    
    def introduce(self):
        return f"{super().introduce()}，专业是{self.major}"
    
    def study(self):
        return f"{self.name}正在学习{self.major}"

# 创建对象
person = Person("王老师", 35)
student = Student("小明", 20, "数据分析")

print(person.introduce())
print()
print(student.introduce())
print(student.study())

# 多态示例
def introduce_person(p):
    print(p.introduce())

print("\\n多态演示:")
introduce_person(person)
introduce_person(student)`}
            title="4.2 继承与多态 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div id="lesson-4-3" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">4.3 特殊方法</h2>
          <p className="text-gray-700 mb-6">特殊方法（魔术方法）允许我们自定义类的行为。</p>
          
          <CodeRunner
            initialCode={`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

# 创建向量
v1 = Vector(2, 3)
v2 = Vector(4, 5)

print(f"v1: {v1}")
print(f"v2: {v2}")

v3 = v1 + v2
print(f"\\nv1 + v2 = {v3}")

v4 = v1 * 3
print(f"v1 * 3 = {v4}")

print(f"\\nv1 == v2: {v1 == v2}")
print(f"v1 == Vector(2, 3): {v1 == Vector(2, 3)}")`}
            title="4.3 特殊方法 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 章节总结</h2>
          <p className="text-gray-700 mb-4">
            本章学习了面向对象编程的核心概念：类与对象的定义、继承与多态、以及特殊方法的使用。
            面向对象编程是现代软件开发中最重要的编程范式之一。
          </p>
          <div className="text-green-600 font-medium">
            → 下一章：文件操作与异常处理
          </div>
        </div>
      </div>
    </PythonCourseLayout>
  );
};

export default Chapter4;
