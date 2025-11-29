# 4. Map 类型（字典/哈希表）

在 Go 中，**map** 是一种键值对（key-value）集合，用来快速存储和查找数据。
> 简记：切片按顺序存元素，map 按 key 查找对应 value，适合需要快速查找或更新的场景。


## 4.1 声明赋值和访问
比如通过学生名称，映射到分数
```go
func main() {
    // 声明并初始化 map
    scores := map[string]int{
        "张三": 90,
        "李四": 85,
    }
    //map变量[key]访问元素
    fmt.Println("张三的分数:", scores["张三"]) // 输出：90分}//访问张三成绩
    fmt.Println("张三的分数:", scores) }//输出所有学生和成绩
```
## 4.2 增加元素
map增加王五和对应的成绩
```go
func main() {
    // 声明并初始化 map
    scores := map[string]int{
        "张三": 90,
        "李四": 85,
    }
    scores["王五"] = 78
    fmt.Println("增加后:", scores)//结果有3个了
```
## 4.3 修改元素
map修改李四对应的成绩
```go
func main() {
    // 声明并初始化 map
    scores := map[string]int{
        "张三": 90,
        "李四": 85,
    }
    scores["李四"] = 88
    fmt.Println("修改后:", scores)
```
## 4.4 删除元素
map修改李四对应的成绩
```go
func main() {
    // 声明并初始化 map
    scores := map[string]int{
        "张三": 90,
        "李四": 85,
    }
    delete(scores, "张三")
    fmt.Println("修改后:", scores)
```
## 4.5 map遍历
遍历就是“一个一个访问map里的每个元素”，就像老师依次点名全班学生报出对应成绩。

使用 `for range` 遍历map：`for 键, 值 := range map`
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
