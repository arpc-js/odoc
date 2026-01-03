# http

## 1.http接口作用
- 我们的程序能计算和存储数据了，但是我们无法通过界面操作，要用页面操作，通过http通信完成下单操作
- 作用:远程调函数,可以理解为远程方法一个接口就是一个远程函数，有传参，返回值，这样我们的商店就能远程下单了
- 分类get，post，请求响应，一般post用的多更万能

## 1.第一个http接口(远程调函数)
```java
package com.example.demo;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        //项目启动，上架商品
        SpringApplication.run(DemoApplication.class, args);
    }
    @RestController
    static class Api {
        // 最简单的http POST 接口，用户下单
        @PostMapping("/get_spus")//远程调用了这个函数
        public Map<String, Object> hello(@RequestBody Map<String, Object> body) {
        //用户打开网页远程查看商品，我们要把商品返回给用户
            return resp;//返回空，然后在硬编码spus
        }
    }
}
```
-- 请求参数格式json，返回格式code，data，msg
- ptr远程访问http接口返回硬编码商品列表（DemoApplication静态存数据）
- 然后.http文件让ai画出页面(一个cdn vue好演示)，要跨域
- 改造注册/登录后才能购买(引入颁发令牌和验证令牌，引入header放公共数据)，商家目前直接操作数据库免上架
- 每个方法要验证登录了才能访问，太麻烦了，用拦截器统一验证
- .http(.http请求响应写好，登录注册，查看商品，购买商品，查看订单)，.http文件ai生成一个html(一个cdn vue好演示)
- 然后演示断电后数据消失，目前存在内存中，内存重启/断电后数据小时，因此需要把数据存到数据库中

#数据库 
- winget快捷安装，mysql存储，查询(连表join)，修改删除
- springboot集成mybatis-plus(能讲注解sql能讲方法操作(非ar)(顺便讲继承的作用和@Data get set等价于.)
- 内存存储改造mysql数据库存储 2层架构,演示网站下单，关机后数据还在
- 2层架构改为三层架构(增加service)

- 腾讯云云端部署(ip->域名->ssl) 前端复杂nginx的html，后端java -jar 部署，后台部署
- 集群化部署

# 引入微信支付(可选)

# vue/uniapp小程序(可选)

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
