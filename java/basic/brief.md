<ClientOnly>
<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=2118850509,1265569087&fm=253&fmt=auto&app=138&f=JPEG?w=474&h=291"
/></ClientOnly>
<script setup>
import VideoPlayer from '../../.vitepress/components/VideoPlayer.vue'
</script>

<style>
.box {
  background: #f0f9eb;
  border-left: 5px solid #67c23a;
  padding: 14px 18px;
  border-radius: 0 8px 8px 0;
  margin: 20px 0;
  font-size: 16px;
}
h3 { margin: 32px 0 16px 0; }
</style>

# 第一课：什么是编程？

计算机就是计算和存储的机器，编程是操作计算和存储的指令。

## 1. 举例：店铺结账

**场景：** 顾客买了2块钱面包和3块钱牛奶，老板算账后用户才能付钱。

| 步骤           | 人脑 | 编程 | 类型 |
|--------------|------|------|------|
| 1. 订单总价从0元开始 | 记住：0 | `total = 0` | 存储 |
| 2. 加上2块钱面包   | 计算：0 + 2 = 2 | `total = total + 2` | 计算 + 存储 |
| 3. 加上3块钱牛奶   | 计算：2 + 3 = 5 | `total = total + 3` | 计算 + 存储 |
| 4. 保存订单      | 记在账本上 | `save(total)` | 存储 |


## 2. 总结

**计算指令：** 加减乘除 (+, -, *, /)

**存储指令：** 赋值 (=)，保存到文件/数据库

**编程语言 = 连续计算 + 连续存储**
