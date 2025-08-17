<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300"
/>

<script setup>
import VideoPlayer from '../../.vitepress/components/VideoPlayer.vue'
</script>
# Go语言简介

## 课程介绍
一个月转行程序员系统课程，基础课能达到初级程序员水平，薪资10k左右
进阶课程需要2-3个月，进阶能达到中高级程序员水平，薪资10-20k左右，更高看造化
#### 一个月入门：达到初级程序员(能搬砖水平),薪资10k左右
路线：go基础，web服务，数据库，单体项目，面试八股文
#### 2-3个月入门：达到中高级程序员，薪资10-20k左右，20k以上看造化
路线：按顺序学习

*是搬砖指数，


## 1.1.1 Go 与并发

Go（又称 Golang）是 Google 打造的一门开源编程语言。它在 2006 年启动研发，2009 年开源，并在 2012 年推出了首个稳定版本。Go 的设计目标是：**写代码的体验像 Python 一样轻松，但运行效率接近 C/C++**。

Go 的最大亮点是 **天生支持并发**。它引入了一种比线程更轻量的机制——**goroutine**。

**goroutine 的优势：**
- 拥有可按需扩展的栈空间，用多少占多少。
- 启动速度极快，资源消耗极低（仅需约 2KB 内存）。
- 内置 `channel`，能让并发协作更安全。
- 大多数情况下无需手动加锁就能共享数据。

借助 goroutine，一个 Go 程序可以轻松同时跑上百万个任务，并能充分利用多核 CPU 的性能。这正是 Go 被称为“并发时代的 C 语言”的原因。

---

## 1.1.2 简单高效的语言设计

**语法简洁**  
Go 在 C 的基础上做了极大简化：
- 没有多余的括号。
- 只有 `for` 一种循环结构，却能覆盖所有迭代场景。

**统一的代码风格**  
Go 自带 `go fmt` 格式化工具，不同开发者写出的代码都会自动统一风格，彻底告别“代码长得像谜语”的情况。

**效率兼顾**
- 写代码时像 Python 一样简洁高效。
- 运行时又能发挥接近 C/C++ 的性能。

---

## 1.1.3 谁在用 Go

- **Google**：大规模应用，Kubernetes 等核心项目都基于 Go。  
  👉 [kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)
- **Facebook**： 👉 [facebookgo](https://github.com/facebookgo)
- **国内公司**：腾讯、百度、360 等。
- **360**：开源日志系统 👉 [Qihoo360/poseidon](https://github.com/Qihoo360/poseidon)

---

## 1.1.4 Go 擅长的领域

- 高并发服务端开发
- 微服务与分布式系统
- 网络编程与高性能通信框架
- 区块链与加密应用
- 内存型数据库（BoltDB、LevelDB）
- 云计算与容器化平台

---

## 1.1.5 Go 的发展前景

如今，Go 已在多个领域被广泛采用：
- 云计算与容器技术
- 大数据与 AI 应用
- 运维自动化与爬虫
- 科学计算与数据分析
- 游戏与后端服务

Go 语言既易学又高效，并发特性正好契合了互联网的高并发需求。随着越来越多公司将 Go 作为核心语言，市场对 Go 工程师的需求持续上涨，岗位稀缺，薪资待遇普遍优厚。

**一句话总结：**  
Go 是一门既容易上手、又面向未来的语言。如果你想抓住趋势，Go 是非常值得投入的选择。  
