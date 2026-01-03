#  变量
## 1.变量存储
- 上节课学会了计算，现在学习如何存储计算的结果
- 语法: var 变量名 = 值 
- 举例:var toltal = 2+3 2+3的结果赋值给toltal变量保存
```go
func main() { //程序入口main函数,程序从这里开始逐行执行
        var toltal = 2+3//牛奶+面板总价
        System.out.println(toltal)  // 算账
        //用户又加了个2元苹果
        toltal=toltal+2
        System.out.println(toltal)  // 算账
}
```
## 1.1 数据类型
- 类型 :数字(整数,小数),字符串,布尔(真假)，数组(存多个)，对象(多个变量合并)
- 定义: var toltal =值(省略数据类型),或者数据类型 变量名 = 值,或者

| 数据类型   | 程序表示                              | 举例                |
|--------|-----------------------------------|-------------------|
| 整数     | var stock = 100 或者int stock = 100 | 库存100             |
| 小数     | var total = 100 float total = 100 | 价格3.5             |
| 字符串    | var name='张三' (字符串用引号包裹)          | 姓名张三              |
| 布尔(是否) | var is_vip = true                 | 是会员true,不是会员false |
```java
public class computer {
    public static void main(String[] args) {
       var name='张三';//买家姓名,一行代码写完后，必须分号结束
       var paid = true
       var toltal = 2.5 + 5;  // accountResult 是一个"容器"，里面装了7
       var stock = 100 - 1;  // inventoryResult 是一个"容器"，里面装了99
       System.out.println("算账结果：" + toltal);  // 输出：算账结果：7
       //李四再下单
    }
}
```

## 1.2数组类型
- 定义:存多个值
- 分类:普通数组(长度固定,不用学)，动态数组(自动扩容)
```java
class Order {}
public class computer {
    public static void main(String[] args) {
      //数组存多个基本数据
      //orders数组存多个订单
       order1=new Order();
       name='张三'
       paid = true
       float toltal = 2.5 + 5;  // accountResult 是一个"容器"，里面装了7
       int stock = 100 - 1;  // inventoryResult 是一个"容器"，里面装了99
       System.out.println("算账结果：" + toltal);  // 输出：算账结果：7
       //李四再下单
    }
}
```
## 1.3类&字段
类是多个变量的结合体,是一种特殊类型，类中的变量叫字段
比如商品类型，商品类型是名称，价格，库存3个变量的结合体

| 数据类型   | 程序表示   | 举例                |
|--------|--------|-------------------|
| 类      | int    | 库存100             |

```java
class Order {}
public class computer {
    public static void main(String[] args) {
       order1=new Order();
       name='张三'
       paid = true
       float toltal = 2.5 + 5;  // accountResult 是一个"容器"，里面装了7
       int stock = 100 - 1;  // inventoryResult 是一个"容器"，里面装了99
       System.out.println("算账结果：" + toltal);  // 输出：算账结果：7
       //李四再下单
    }
}
```