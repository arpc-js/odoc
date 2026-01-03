<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=2118850509,1265569087&fm=253&fmt=auto&app=138&f=JPEG?w=474&h=291"
/>

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

# 第二课：计算
计算分为3类：算数运算、比较运算、逻辑运算

## 1. 算数计算

| 分类 | 符号 | 算数运算    | 结果 |
|----|-----|-------|------|
| 加法 | +   | `4+2` | 6 |
| 减法 | -   | `4-2` | 2 |
| 乘法 | *   | `4*2` | 8 |
| 除法 | /   | `4/2` | 2 |

用编程完成算数运算,加减乘除
```java
void main(){
    IO.print(4+2);//注意;结尾代表一行程序结束
    IO.print(4-2);
    IO.print(4*2);
    IO.print(4/2);    
}
```

## 2. 比较计算:(><=)
2个数比大小,返回是否满足关系，是否(true,false)

| 分类  | 符号 | 比较运算 | 结果       |
|-----|-----|------|----------|
| 大于  | >  | `4>2`  | true(是)  |
| 小于  | <  | `4<2`  | false(否) |
| 等于  | == | `4==2` | false(否) |
| 不等于 | != | `4!=2` | true(否)  |

```java
void main(){
    IO.print(4>2);   // true
    IO.print(4<2);   // false
    IO.print(4==2);  // false
    IO.print(4!=2);  // true
}
```

## 3. 逻辑计算
先比较返回是否(true/false)，再进行逻辑运算

| 分类           | 符号 | 逻辑运算 | 结果 |
|--------------|-----|------|------|
| 与(并且,二者同时满足) | &  | `4>2 & 3>2` | true |
| 或(或者,满足一个)       | \| | `4>2 \| 1>2` | true |
| 非(取反)        | !  | `!4>2` | false |

```java
void main(){
    IO.print(4>2 & 3>2);   // true & true = true
    IO.print(4>2 | 1>2);   // true | false = true
    IO.print(!4>2);        // !true = false
}
```

