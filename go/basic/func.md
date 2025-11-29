# Go 语言函数教程

## 1. 函数定义
函数是把一段代码封装起来,能重复调用,输入参数，返回结果
**语法：**
```go
func 函数名(变量1 类型,变量2 类型) 返回值类型 {
    // 函数体
    return value //返回结果
}
```
**参数和返回值：**
- 函数参数:接收外部传递的数据
- 参数格式：参数名 类型，多个参数用逗号分隔。可以没参数
- 返回值：return value 返回函数执行的结果，可以不返回结果
```go
//定义个函数，接收外部传值，返回相加的结果
func add(a int, b int) int {
    return a + b
}
```
## 2. 函数调用
- 函数调用:函数名(参数1,参数2)
- 变量接收函数返回值：sum:=add(1,2)
**函数调用示例：**
```go
func add(a int, b int) int {
    fmt.Println("a,b正在相加",a,b)//打印入参a，b
    return a + b //返回a+b的结果
}
func main() {
    add(1,2)//函数只调用，不接收返回值，会打印a,b正在相加
    sum:=add(2,2)//调用函数，用变量接收返回值
    fmt.Println("a+b结果:",sum)//函数的返回值4
}
```
## 3. 多返回值
- Go支持函数返回多个值，非常适合返回结果和错误信息。 。
```go
//2个输入参数交换后返回
func swap(a, b string) (string, string) {
    return b, a
}
func main() {
    x, y := swap("hello", "world")
    fmt.Println(x, y)  //输出world，hello
}
```
