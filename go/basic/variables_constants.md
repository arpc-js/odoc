# 1. 变量
变量：变量用来存储数据,值可以变

### 1.1 变量声明:
格式:var 变量名 类型
```go
func main() {
    var name string //声明一个字符串类型的变量用户名，但没有赋值
    var age int //声明一个数字类型的变量年龄，但没有赋值
    fmt.Println("name:", name) //打印名称name 结果是空字符串，因为字符串类型默认为空字符串
    fmt.Println("age:", age) //打印名称age 结果是0，因为数字类型默认为0
}
```
### 1.2 变量赋值:
格式: 变量名=值
```go
func main() {
    var name string  //声明一个字符串类型的变量用户名，但没有赋值
    var age int     //声明一个数字类型的变量年龄，但没有赋值
    name="张三" //name赋值为张三，字符串类型的值要用双引号包裹
    age=18 //age年龄赋值18，数字类型不需要双引号包裹
    fmt.Println("name:", name) //打印变量的值 结果是张三
    fmt.Println("age:", age) //打印变量的值 结果是18
}
```

### 1.2 声明赋值
声明和赋值合二为一，类型自动推断，格式:var 变量=值
```go
func main() {
    var name ="张三"  //声明name变量，值是张三
    var age =18     //声明赋值合二为一
    fmt.Println("name:", name) //打印变量的值 结果是张三
    fmt.Println("age:", age) //打印变量的值 结果是18
}
```

### 1.3 短变量声明赋值
若在函数内部:声明赋值能简化成:变量:=值，类型自动推断
```go
func main() {
    name :="张三"  //声明name变量，值是张三
    age :=18     //声明赋值合二为一
    fmt.Println("name:", name) //打印变量的值 结果是张三
    fmt.Println("age:", age) //打印变量的值 结果是18
}
```
### 1.4 修改变量
若在函数内部:声明赋值能简化成:变量:=值，类型自动推断
```go
func main() {
    name := "张三"  //声明name变量，值是张三
    name = "李四"  //修改name变量的值为李四
    fmt.Println("name:", name) //打印name变量的值 结果是李四
}
```

# 1. 常量
常量：常量用来存储数据,值不可以变
### 1.1 常量教程:
格式: var变成const就是常量
```go
func main() {
    const name ="张三"  //声明赋值name常量，值为张三
    name="李四" //报错，常量无法被修改
    fmt.Println("name:", name) //打印变量的值 结果是张三
}
```
