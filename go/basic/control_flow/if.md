# Go 语言 if 条件语句

## 1️⃣ 单独 if

- 用于判断条件是否成立
- 条件为 true 时执行对应代码块

```go
package main
import "fmt"

func main() {
    a := 10
    if a > 5 {
        fmt.Println("a 大于 5")
    }
}
```

## 2️⃣ if-else
- 条件成立执行 if 块，否则执行 else 块
```go
package main
import "fmt"

func main() {
    a := 10
    if a > 5 {
        fmt.Println("a 大于 5")
    }
}
```
## 3️⃣ if-else if-else
- 当有多个条件判断时使用
- 满足第一个条件就执行对应代码块，其余条件不再判断
```go
func main() {
    a := 7
    if a > 10 {
        fmt.Println("a 大于 10")
    } else if a > 5 {
        fmt.Println("a 大于 5 且小于等于 10")
    } else {
        fmt.Println("a 小于等于 5")
    }
}
```
