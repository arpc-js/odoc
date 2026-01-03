# Go 语言入门教程：Hello World

## 第 1 步：创建 Go 文件

在工作目录下创建 `main.go`：

mkdir go-hello
cd go-hello
touch main.go

## 第 2 步：编写 Hello World 程序

在 main.go 中输入：

package main       // 这是程序包，告诉 Go 这是可执行程序

import "fmt"       // 导入 fmt 包，里面有打印功能

func main() {       // main 函数是程序入口
fmt.Println("Hello World")   // 调用 Println 打印 Hello World
}

## 第 3 步：运行程序

go run main.go

输出结果：

Hello World

## 第 4 步：代码解析

package main
Go 文件属于一个包（package）。
main 包表示可执行程序。

import "fmt"
导入其他包。
fmt 提供格式化输入输出功能。

func main()
main 函数是程序入口。

fmt.Println("Hello World")
调用 Println 打印文本并换行。

## 第 5 步：编程基本概念

程序包（Package）：组织代码的单位。
导入包（Import）：使用其他包提供的功能。
函数（Function）：可复用逻辑，main 是入口。
输出（Print / Println）：程序与用户交互的方式。
注释：用 // 添加注释解释代码。
