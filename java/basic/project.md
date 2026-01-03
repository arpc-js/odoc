<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300"
/>

<script setup>
import VideoPlayer from '../../.vitepress/components/VideoPlayer.vue'
</script>
##  线上商店
- 定义:你已经学会算账和记账了，计算，存储，条件，循环，函数，类
- 现在可以开一个线上商店了
- 需求分析:用户注册，上架商品，算账，记账
## 项目实战
```java
class User {name,is_vip}
class Spu {}
class Order {}
users，spus，orders(表)
public class computer {
    public static void main(String[] args) {
       //上架2个商品
       spu1.add()
       spu2.add()
       //用户张三李四注册
       user1.add()
       user2.add()
       //张三购买商品1，商品2，结账
       //是否是会员，是否有活动
       order1.add()
       //李四非会员结账
       order2.add()
       //查看账本
       order.get ()//返回多个订单
           
       order1=new Order();
       name='张三'
       paid = true
       total=2+5
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