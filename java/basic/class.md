<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300"
/>

<script setup>
import VideoPlayer from '../../.vitepress/components/VideoPlayer.vue'
</script>
##  类和方法
- 定义:类自己的函数，这样就不需要传参给函数了，对象自己就能执行自己的方法函数
## 重复插入订单太麻烦，用函数简化代码
```java
class User {name,is_vip}
class Order {}
public class computer {
    public static void main(String[] args) {
       user1=new User();
       user1.name='张三';
       user1.is_vip=true;
    
       order1=new Order();
       name='张三'
       paid = true
       total=2+5
       order.add();
       System.out.println("判断是否打折：" + total>10);  // 输出：算账结果：false
       System.out.println("判断是否是会员打折：" + user1.is_vip=true&&total>10);  // 输出：算账结果：7
       //目前只能打折不能按条件执行，打折total要改为0.8* total,会员0.5，不打折不动，代码分为三个分支
       if total>10{
                   //8折
       }else if user1.is_vip=true&&total>10{
                  //5折
       }else{
         //不需要操作
       }
    }
}
```
##  静态:属于类，所有对象都共享同一个全局字段/方法
分类:静态字段/静态方法

##  封装
private要封装加get set或者@data，public不需要封装
@data是封装的缩写

##  继承:子类继承拥有父类的方法