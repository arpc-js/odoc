# 错误处理

## 1. 引言

Go 的错误处理通过显式返回 `error` 值，强调透明性和可预测性，不使用异常机制。本讲义聚焦 Go 的错误检查机制（`err` 判断）及其与 `panic` 和 `recover` 的对比，保留核心内容并提供示例。

## 2. Go 错误处理核心

### 2.1 错误类型

Go 的 `error` 是一个内置接口：

```go
type error interface {
    Error() string
}
```

- 使用 `errors.New` 创建简单错误。
- 使用 `fmt.Errorf` 动态生成错误。

示例：

```go
package main

import (
    "errors"
    "fmt"
)

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("错误:", err) // 输出: 错误: division by zero
        return
    }
    fmt.Println("结果:", result)
}
```

---

## 3. 错误检查与处理

### 3.1 显式检查 `err`

Go 要求函数返回 `error` 类型，调用者需检查 `err != nil`。

示例：

```go
package main

import (
    "fmt"
    "os"
)

func readFile(path string) error {
    file, err := os.Open(path)
    if err != nil {
        return fmt.Errorf("打开文件 %s 失败: %w", path, err)
    }
    defer file.Close()
    return nil
}

func main() {
    err := readFile("nonexistent.txt")
    if err != nil {
        fmt.Println(err) // 输出: 打开文件 nonexistent.txt 失败: ...
    }
}
```

### 3.2 错误包装

使用 `fmt.Errorf` 的 `%w` 包装错误，保留上下文。`errors.Is` 和 `errors.As` 用于检查和解包。

示例：

```go
package main

import (
    "errors"
    "fmt"
    "os"
)

func openFile(path string) error {
    file, err := os.Open(path)
    if err != nil {
        return fmt.Errorf("无法打开文件 %s: %w", path, err)
    }
    defer file.Close()
    return nil
}

func main() {
    err := openFile("nonexistent.txt")
    if err != nil {
        if errors.Is(err, os.ErrNotExist) {
            fmt.Println("文件不存在")
        } else {
            fmt.Println("其他错误:", err)
        }
    }
}
```

---

## 4. `err` 判断与 `panic`/`recover` 对比

### 4.1 `err` 判断

- **方式**：函数返回 `error`，调用者显式检查 `err != nil`。
- **特点**：
    - 显式、清晰，强制处理错误。
    - 适合可预见的错误（如文件不存在、输入无效）。
    - 代码结构简单，易于维护。
- **适用场景**：常规错误处理，鼓励程序员主动处理异常。

示例：

```go
func processFile(path string) error {
    file, err := os.Open(path)
    if err != nil {
        return fmt.Errorf("处理文件失败: %w", err)
    }
    defer file.Close()
    return nil
}
```

### 4.2 `panic` 和 `recover`

- **方式**：
    - `panic`：抛出异常，终止程序执行，除非被 `recover` 捕获。
    - `recover`：捕获 `panic`，恢复程序执行。
- **特点**：
    - 类似其他语言的异常机制，但 Go 不鼓励频繁使用。
    - 打断正常控制流，可能导致代码复杂。
    - `recover` 必须在 `defer` 中使用，且仅捕获当前 Goroutine 的 `panic`。
- **适用场景**：仅用于程序无法继续运行的情况（如初始化失败、不可恢复的错误）。

示例：

```go
package main

import (
    "fmt"
)

func riskyOperation() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("恢复自 panic:", r) // 输出: 恢复自 panic: 致命错误
        }
    }()
    panic("致命错误")
}

func main() {
    riskyOperation()
    fmt.Println("程序继续执行")
}
```

### 4.3 对比总结

| 特性              | `err` 判断                          | `panic`/`recover`                  |
|-------------------|------------------------------------|------------------------------------|
| **机制**          | 显式返回 `error`，需检查            | 抛出异常，需捕获                   |
| **使用场景**      | 可预见错误（如文件操作、输入验证）  | 不可恢复错误（如初始化失败）        |
| **代码可读性**    | 清晰、结构化                      | 可能复杂，需小心管理控制流         |
| **性能**          | 低开销，常规流程                  | 高开销，打断正常执行               |
| **Go 推荐度**     | 首选，符合 Go 哲学                | 谨慎使用，仅限必要情况             |

**建议**：
- 优先使用 `err` 判断处理常规错误。
- 仅在程序无法继续运行时使用 `panic`，并配合 `recover` 恢复。

---

## 5. 最佳实践

1. **立即检查错误**：调用后立即处理 `err`，避免忽略。
   ```go
   file, err := os.Open("example.txt")
   if err != nil {
       return fmt.Errorf("打开文件失败: %w", err)
   }
   ```

2. **提供上下文**：用 `fmt.Errorf` 和 `%w` 包装错误。
   ```go
   return fmt.Errorf("处理 %s 失败: %w", task, err)
   ```

3. **避免滥用 `panic`**：仅用于致命错误。
   ```go
   // 错误做法
   if err != nil {
       panic("文件读取失败")
   }
   // 正确做法
   if err != nil {
       return fmt.Errorf("文件读取失败: %w", err)
   }
   ```

4. **延迟清理**：用 `defer` 确保资源释放。
   ```go
   file, err := os.Open("example.txt")
   if err != nil {
       return err
   }
   defer file.Close()
   ```

---

## 6. 总结

Go 的错误处理以显式 `err` 检查为核心，简单透明，适合大多数场景。`panic` 和 `recover` 仅用于不可恢复的错误，需谨慎使用。通过遵循最佳实践（如立即检查错误、提供上下文、避免 `panic`），开发者可以编写健壮、可维护的 Go 代码。

## 7. 进一步学习资源

- [Go 官方博客：错误处理](https://go.dev/blog/error-handling)
- [Go by Example：错误](https://gobyexample.com/errors)
- [Effective Go：错误处理](https://golang.org/doc/effective-go#errors)
