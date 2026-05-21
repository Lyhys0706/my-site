import React from 'react';
import PythonCourseLayout from '../layouts/PythonCourseLayout';
import CodeRunner from '../components/CodeRunner';

const Chapter5: React.FC = () => {
  return (
    <PythonCourseLayout title="第五章：文件操作与异常处理">
      <div className="p-6 lg:p-8">
        <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">📄</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">第五章：文件操作与异常处理</h1>
              <p className="text-xl opacity-90">文件读写、异常处理、上下文管理器</p>
            </div>
          </div>
          <p className="text-lg opacity-90">
            本章将带你学习如何读写文件，以及如何处理程序运行过程中可能出现的错误。
            良好的文件操作和异常处理是编写健壮程序的基础。
          </p>
        </div>

        <div id="lesson-5-1" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">5.1 文件读写</h2>
          <p className="text-gray-700 mb-6">使用open()函数打开文件，使用read()和write()方法进行读写。</p>
          
          <CodeRunner
            initialCode={`# 写入文件
content = """Python数据分析实战
第一行：基础语法学习
第二行：数据处理技巧
第三行：可视化展示
第四行：实战项目练习"""

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
        print(f"第{i}行: {line.strip()}")

# 追加模式
with open("example.txt", "a", encoding="utf-8") as f:
    f.write("\\n第五行：完成学习")

print("\\n追加内容后:")`}
            title="5.1 文件读写 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div id="lesson-5-2" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">5.2 异常处理</h2>
          <p className="text-gray-700 mb-6">使用try-except语句捕获和处理异常，使程序更加健壮。</p>
          
          <CodeRunner
            initialCode={`# 基础异常处理
try:
    result = 10 / 0
except ZeroDivisionError:
    print("错误：不能除以零！")

# 多个异常类型
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "错误：除数不能为零"
    except TypeError:
        return "错误：类型错误"
    except Exception as e:
        return f"未知错误：{e}"

print(f"safe_divide(10, 2) = {safe_divide(10, 2)}")
print(f"safe_divide(10, 0) = {safe_divide(10, 0)}")

# try-except-else-finally
try:
    num = int("42")
except ValueError:
    print("转换失败")
else:
    print(f"转换成功: {num}")
finally:
    print("无论成功与否都会执行")

# 实际应用示例
def get_value(data, key):
    try:
        return data[key]
    except KeyError:
        return f"键 '{key}' 不存在"
    except TypeError:
        return "数据类型错误"

data = {"name": "张三", "age": 20}
print(f"\\nget_value(data, 'name') = {get_value(data, 'name')}")
print(f"get_value(data, 'gender') = {get_value(data, 'gender')}")`}
            title="5.2 异常处理 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div id="lesson-5-3" className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">5.3 上下文管理器</h2>
          <p className="text-gray-700 mb-6">使用with语句简化文件操作，确保资源正确释放。</p>
          
          <CodeRunner
            initialCode={`# 上下文管理器示例
print("使用with语句管理文件:")

# with语句自动处理文件关闭
with open("test.txt", "w", encoding="utf-8") as f:
    f.write("Hello, Python!\\n")
    f.write("Welcome to Python course!\\n")

# 读取文件
with open("test.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# JSON文件操作（常用）
import json

data = {
    "name": "张三",
    "age": 20,
    "skills": ["Python", "SQL", "数据分析"]
}

# 写入JSON
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("JSON文件写入成功！")

# 读取JSON
with open("data.json", "r", encoding="utf-8") as f:
    loaded_data = json.load(f)
    print(f"读取数据: {loaded_data}")
    print(f"姓名: {loaded_data['name']}")
    print(f"技能: {', '.join(loaded_data['skills'])}")`}
            title="5.3 上下文管理器 - 在线练习"
            defaultOpen={true}
          />
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 章节总结</h2>
          <p className="text-gray-700 mb-4">
            本章学习了文件读写操作、异常处理机制以及上下文管理器的使用。
            掌握这些知识将使你能够编写更加健壮和安全的Python程序，能够正确处理文件操作中的各种情况。
          </p>
          <div className="text-orange-600 font-medium">
            🎉 恭喜！Python基础课程全部完成！
          </div>
        </div>
      </div>
    </PythonCourseLayout>
  );
};

export default Chapter5;
