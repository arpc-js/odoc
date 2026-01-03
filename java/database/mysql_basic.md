<VideoPlayer
src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
poster="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=1066&h=600"
/>

<script setup>
import VideoPlayer from '../../.vitepress/components/VideoPlayer.vue'
</script>

<style>
.box {
  background: #f0f9eb;
  border-left: 5px solid #67c23a;
  padding: 16px 20px;
  border-radius: 0 8px 8px 0;
  margin: 28px 0;
  font-size: 16px;
  line-height: 1.8;
}
img {
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  margin: 20px auto;
  display: block;
  max-width: 100%;
}
</style>

# 第七课：数据库全家桶（把货架和账本永久搬进电脑）

<div class="box">
<b>本课目标</b><br>
1. 5分钟装好 MySQL（用最傻瓜的 phpStudy）<br>
2. 彻底搞懂「表」到底是什么<br>
3. 学会建表 + 增删改查 + MySQL 数据类型和 Java 类的完美对应<br>
学完这一课，你的网上商店就有了「永不关机的超级账本」！
</div>

## 1. 数据库安装（最简单方案：phpStudy 一键搞定）

| 步骤 | 操作 | 截图 |
|------|------|------|
| 1 | 打开官网 → https://www.xp.cn/download.html | ![phpStudy官网](https://tc.hd512.com/2025/db1-home.jpg) |
| 2 | 点「Windows 一键安装包」下载 | ![下载按钮](https://tc.hd512.com/2025/db2-download.jpg) |
| 3 | 双击安装 → 一直下一步 → 安装到 D:\phpstudy_pro（随便） | ![安装路径](https://tc.hd512.com/2025/db3-install.jpg) |
| 4 | 安装完打开 phpStudy → 点「启动 MySQL」 | ![启动MySQL](https://tc.hd512.com/2025/db4-start.jpg) |
| 5 | 默认账号密码都是 `root` / `root` | 记住！后面全用这个 |

<div class="box">
看到 MySQL 变成绿色运行状态 → 数据库已经装好了！<br>
再也不用担心电脑关机数据就没了
</div>

## 2. 数据库、表、字段到底是什么？（用小卖部彻底讲透）

| 现实中的东西      | 数据库里的概念 | 举例 |
|-------------------|----------------|------|
| 你家整个小卖部    | 数据库（Database） | 数据库名叫 `shop_db` |
| 货架上的「商品区」 | 表（Table）        | 表名叫 `product` |
| 商品上的标签      | 字段（Column）     | id、name、price、stock |
| 每一件具体商品    | 一行记录（Row）    | 可乐，5元，库存88瓶 |

![数据库结构图](https://tc.hd512.com/2025/db-table.jpg)

## 3. MySQL 数据类型 vs Java 类型（背会这一张表就够了！）
表的字段是有类型的，数字，还剩字符串，日期，存不同类型的数据
| MySQL 类型         | Java 类型       | 说明                     | 例子                 |
|--------------------|-----------------|--------------------------|----------------------|
| INT                | int / Integer   | 整数                     | 库存 99              |
| BIGINT             | long / Long     | 超大整数（主键专用）     | id = 10086           |
| VARCHAR(255)       | String          | 文字，最常用             | 商品名“可口可乐”     |
| DECIMAL(10,2)      | BigDecimal      | 精确小数（钱专用）       | 价格 5.50            |
| DATETIME / TIMESTAMP | LocalDateTime | 时间                     | 下单时间 2025-01-01 10:00:00 |
| TINYINT(1)         | boolean / Boolean | 布尔值（0=假 1=真）     | 是否上架 1            |


## 4. 建表（我们来建一个商品表）

在 phpStudy 里点「数据库管理」→ 新建数据库 `shop_db` → 打开 → 新建表

```sql
CREATE TABLE product (
    id          BIGINT PRIMARY KEY AUTO_INCREMENT,   -- 商品编号，自动增长
    name        VARCHAR(100) NOT NULL,               -- 商品名字
    price       DECIMAL(10,2) NOT NULL,              -- 价格，保留2位小数
    stock       INT DEFAULT 0,                       -- 库存，默认0
    image       VARCHAR(255),                        -- 图片地址
    is_onsale   TINYINT(1) DEFAULT 1,                -- 是否上架 1=上架
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP, -- 创建时间
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;