# Go 语言 for 循环教程

## 1️⃣ for 循环

- **循环（Loop）**：让程序重复执行某段代码
- **基本语法**
```go
for 初始化; 条件; 增量 {
    // 循环体
}
```
- **示例代码**

```go
func main() {
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
}
```
## 2️⃣ 循环控制
- **break**：提前结束循环
```go
func main() {
    for i := 0; i < 5; i++ {
        if i == 3 {
            break // i 等于 3 时退出循环
        }
        fmt.Println("i =", i)
    }
}
```
- **continue**：跳过当前循环，进入下一个循环
```go
func main() {
    for i := 0; i < 5; i++ {
        if i == 2 {
            continue // i 等于 2 时跳过本次循环
        }
        fmt.Println("i =", i)
    }
}
```
## 3️⃣ 无限循环(死循环)
```go
func main() {
    for true  {
        fmt.Printf("这是无限循环。\n");
    }
}
```
