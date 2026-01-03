# 6. 方法（Method）
在 Go 中，**方法（method）** 本质上是 **带有接收者（receiver）的函数**。  
方法可以绑定到某个 **结构体** 上，使得结构体具备“行为”，从而更像一个“对象”。
> 简记：函数是独立的；方法是结构体上的函数。

---

## 6.1 方法的定义格式
接收者当前实例
```go
func (接收者 结构体) 方法名(参数列表) 返回值 {
    // 方法体
    return
}
```

## 6.2 结构体值接收者
```go
package main
import "fmt"
type Student struct {
    Name  string
    Score int
}
// 值接收者方法
func (s Student) UpdateScore(newScore int) {
    fmt.Println("方法在修改副本:") // 输出 90，原数据未改变
    s.Score = newScore // 修改的是副本
}
func main() {
    stu := Student{Name: "张三", Score: 90}
    stu.UpdateScore(100)
    fmt.Println("值接收者修改后成绩:", stu.Score) // 输出 90，原数据未改变
}
```
## 6.3 结构体指针接收者(常用)
```go
package main
import "fmt"
type Student struct {
    Name  string
    Score int
}
// 指针接收者方法
func (s *Student) UpdateScore(newScore int) {
    fmt.Println("方法在修改相同地址的数据:") // 
    s.Score = newScore // 修改原结构体
}
func main() {
    stu := &Student{Name: "张三", Score: 90}
    stu.UpdateScore(100)//张三修改字节成绩为100了
    fmt.Println("指针接收者修改后成绩:", stu.Score) // 输出 100，原数据被修改
}
```
