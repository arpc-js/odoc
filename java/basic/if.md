<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300"
/>

<script setup>
import VideoPlayer from '../../.vitepress/components/VideoPlayer.vue'
</script>
#  if条件分支
- 定义:比较运算，满足执行if分支，不满足执行else分支
- 语法:if(条件) {代码} else {代码}，条件就是true执行，false不执行
- 分类:if,else，后两个可以省略
## 活动规则:满10元8折，会员满10元打5折扣
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
