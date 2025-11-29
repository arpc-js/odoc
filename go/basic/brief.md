<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300"
/>

<script setup>
import VideoPlayer from '../../.vitepress/components/VideoPlayer.vue'
</script>
# Go语言简介

## 课程介绍
#### 基础：一个月达到初级程序员(能搬砖水平),薪资10k左右
路线：go基础，web服务，数据库，单体项目，面试八股文,工作完全够用
#### 进阶：3-6个月达到中高级程序员，薪资10-20k左右，20k以上看造化
路线：按顺序学习，标记为进阶的有难度,又很少用到,自主选择学习

## 1.1.1 Go 简介和特点
Go 是 Google 打造的一门编程语言，有以下特点：
- **简约**：语法简单，学习成本低（相较于 Java 可降低 2~3 倍）。
- **高并发**：Go 通过轻量级协程**goroutine**和 **非阻塞 I/O**，适合高并发网络服务和分布式系统。
- **低内存占用**：相较于传统线程模型，goroutine 内存占用小，可同时运行数十万协程。
- **静态编译二进制**：打包独立可执行文件，无需依赖运行环境，便于跨平台部署。


## 1.1.2 Go 擅长的领域
- 高并发服务端开发
- 微服务与分布式系统
- 高性能框架
- 云原生与容器化平台
- 区块链

