<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300"
/>

<script setup>
import VideoPlayer from '../../../.vitepress/components/VideoPlayer.vue'
</script>
# 5. 结构体（struct）类型
**结构体（struct）** 结合多个变量为一个整体
> 简记：结构体就是把多个变量打包成一个整体，表示一个“对象”。打包后的变量叫字段

## 5.1 定义和创建结构体
之前定义学生用的name,age,score三个变量,可以用结构体打包成一个学生类型
```go
package main
import "fmt"
// 定义一个学生结构体
type Student struct {
    Name  string // 姓名
    Age   int    // 年龄
    Score int    // 分数
}
func main() {
    //创建结构体实例
    stu_lisi := Student{Name: "李四", Age: 19, Score: 85}
    fmt.Println("stu_lisi:", stu_lisi)
}
```
## 5.2 实例化结构体和访问字段
实例化:学生Student结构体是一大类，创建一个学生叫张三，叫实例化

访问字段:通过 .（点运算符）可以访问和修改结构体字段：
```go
package main
import "fmt"
// 定义一个学生结构体
type Student struct {
    Name  string // 姓名
    Age   int    // 年龄
    Score int    // 分数
}
func main() {
    //创建结构体实例，stu_lisi是学生结构体的一个实例
    stu_lisi := Student{Name: "李四", Age: 19, Score: 85}
    // 访问实例字段
    fmt.Println("姓名:", stu_lisi.Name)
    fmt.Println("成绩:", stu_lisi.Score)
}
```

## 5.3 结构体值传递
当结构体作为函数参数时，Go使用复制的值传递。
函数内部操作的是结构体的副本，修改字段不会影响外部实例的原数据
```go
package main
import "fmt"
type Student struct {
    Name  string
    Age   int
    Score int
}
// 值传递函数
func updateScoreValue(s Student, newScore int) {
    s.Score = newScore // 只修改副本
    fmt.Println("stu副本分数修改为:", stu.Score)//输出副本分数为100
}
func main() {
    stu := Student{Name: "张三", Age: 18, Score: 90}
    fmt.Println("修改前成绩:", stu.Score)
    updateScoreValue(stu, 100)//函数内部修改结构体的副本分数为100，外部stu值不会改变
    fmt.Println("值传递修改后成绩:", stu.Score) // 外部仍然是90
}
```
## 5.4 结构体指针传递
传递结构体的指针，stu和s指针指向同一块内存地址，因此修改的是同一个stu实例
```go
// 指针传递函数
func updateScorePointer(s *Student, newScore int) {
    s.Score = newScore // 修改原实例
    fmt.Println("函数内部指针修改分数为:", s.Score)
}
func main() {
    //创建结构体的指针实例
    stu := &Student{Name: "张三", Age: 18, Score: 90}
    fmt.Println("修改前成绩:", stu.Score)

    updateScorePointer(stu, 100) //传入结构体指针，修改100
    fmt.Println("指针传递修改后成绩:", stu.Score) // 外部变为 100
}
```

## 5.5. 数据类型的传递方式
基本类型，数组，结构体是值传递，切片，map，等指针传递(值传递但值是指针的副本s1，s2指针副本指向同一地址)

| 类型        | 传递方式   | 是否共享底层数据 | 示例 |
|-------------|--------|------------------|------|
| 基本类型 (int, float, string, bool) | 值传递    | ❌ | 拷贝一份独立值 |
| 数组 [N]T   | 值传递    | ❌ | 完整复制整个数组 |
| 结构体 struct | 值传递    | ❌ | 复制所有字段 |
| 切片 slice   | 指针传递   | ✅ | 多个变量共享底层数组 |
| 映射 map     | 指针传递   | ✅ | 多个变量共享同一哈希表 |
| 通道 channel | 指针传递   | ✅ | 多个变量共享同一队列 |
| 接口 interface | 指针传递 ） | ✅ | 底层存储 (动态类型, 数据指针) |
