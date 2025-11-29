# 3. 切片（Slice）类型
在 Go 中，**切片（Slice）** 是一种可以存储多个元素的动态序列。
> 简记：变量存一个值，切片可以存多个值；切片长度可动态变化，比固定长度数组更常用。

## 3.1 创建切片
```go
func main() {
    // 声明并初始化字符串切片
    students := []string{"张三", "李四", "王五"} 
    fmt.Println("students:", students) // 输出：[张三 李四 王五]
}
```
## 3.2 访问和修改切片元素
访问切片从0开始，0代表第一个，1代表第二个
```go
func main() {
    // 声明并初始化字符串切片,存多个学生
    students := []string{"张三", "李四", "王五"}
    // 访问元素
    fmt.Println("第一个学生:", students[0]) // 输出：张三
    // 修改元素
    students[1] = "赵六"
    fmt.Println("修改后:", students) // 输出：[张三 赵六 王五]
}
```
## 3.3 添加
append(切片,元素)可以给切片添加元素
```go
func main() {
    students := []string{"张三", "李四", "王五"}
    fmt.Println("长度:", len(students)) // 输出：3,len函数可以获取切片长度
    // 使用 append 添加元素
    students = append(students, "赵六")
    fmt.Println("追加后:", students) // 输出：[张三 李四 王五 赵六]
    fmt.Println("长度:", len(students)) // 输出：4,添加一个赵六，切片长度变成4了
}
```
## 3.4 切片遍历
遍历就是“一个一个访问切片里的每个元素”，就像老师依次点名全班学生。

使用 `for range` 遍历切片：`for 下标, 元素 := range 切片`
```go
func main() {
    students := []string{"张三", "李四", "王五"}
    // 遍历学生列表，依次打印每个学生下标序号和名字
    for i, name := range students {
        fmt.Println("下标:", i, "学生:", name)
    }
}
```
