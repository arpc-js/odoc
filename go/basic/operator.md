# Go 运算符教程
本教程介绍 Go 语言中的运算符，包括算术、关系、逻辑、位运算和赋值运算符

## 1️⃣ 算术运算符 (Arithmetic Operators)
用于数学计算。

| 运算符 | 名称 | 示例 | 说明 |
|--------|------|------|------|
| `+` | Addition | `a + b` | 两数相加 |
| `-` | Subtraction | `a - b` | 两数相减 |
| `*` | Multiplication | `a * b` | 两数相乘 |
| `/` | Division | `a / b` | 两数相除 |
| `%` | Modulo | `a % b` | 取余数 |
| `++` | Increment | `a++` | 自增 1 |
| `--` | Decrement | `a--` | 自减 1 |

**示例：**
```go
package main
import "fmt"

func main() {
    a := 10
    b := 3
    fmt.Println("a + b =", a + b) //13
    fmt.Println("a - b =", a - b) //7
    fmt.Println("a * b =", a * b) //30
    fmt.Println("a / b =", a / b)
    fmt.Println("a % b =", a % b)
    a++ //11
    fmt.Println("a++ =", a)
}
```
## 2️⃣️ 关系运算符表格
| 运算符 | 英文名称        | 示例       | 说明               |
|--------|----------------|-----------|------------------|
| `==`   | Equal          | `a == b`  | 判断是否相等       |
| `!=`   | Not Equal      | `a != b`  | 判断是否不等       |
| `>`    | Greater than   | `a > b`   | 判断是否大于       |
| `<`    | Less than      | `a < b`   | 判断是否小于       |
| `>=`   | Greater or Equal | `a >= b` | 判断是否大于等于   |
| `<=`   | Less or Equal  | `a <= b`  | 判断是否小于等于   |

**示例：**
```go
package main

import "fmt"

func main() {
    a := 10
    b := 20

    fmt.Println("a =", a, ", b =", b)
    fmt.Println("a == b:", a == b) // false
    fmt.Println("a != b:", a != b) // true
    fmt.Println("a > b:", a > b)   // false
    fmt.Println("a < b:", a < b)   // true
    fmt.Println("a >= b:", a >= b) // false
    fmt.Println("a <= b:", a <= b) // true
}
```
## 3️⃣ 逻辑运算符
| 运算符 | 英文名称       | 示例         | 说明                               |
|--------|----------------|------------|----------------------------------|
| `&&`   | Logical AND    | `a && b`   | 两个条件都为 true，结果才为 true |
| `\|\|` | Logical OR     | `a \|\| b` | 任意一个条件为 true，结果为 true |
| `!`    | Logical NOT    | `!a`       | 取反，true → false，false → true |

**示例：**
```go
package main
import "fmt"
func main() {
    a := true
    b := false
    fmt.Println("a =", a, ", b =", b)
    fmt.Println("a && b:", a && b) // false
    fmt.Println("a || b:", a || b) // true
    fmt.Println("!a:", !a)         // false
    fmt.Println("!b:", !b)         // true
}
```
