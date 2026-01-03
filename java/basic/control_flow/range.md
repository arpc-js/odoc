# range循环遍历切片，map
- `range` 用于 **遍历数组、切片、map**
- 每次循环返回 **索引和值**（数组、切片）或 **键值对**（map）

## 1️⃣ range遍历切片
```go
func main() {
    students := []string{"张三", "李四", "王五"}
    // 遍历学生列表，依次打印每个学生下标序号和名字
    for i, name := range students {
        fmt.Println("下标:", i, "学生:", name)
    }
}
```
## 2️⃣ range遍历map
```go
func main() {
    scores := map[string]int{
        "张三": 90,
        "李四": 85,
    }
    // 遍历 Map，依次打印 key 和 value,学生名字对应的成绩
    for name, score := range scores {
        fmt.Println("学生:", name, "分数:", score)
    }
}
```
