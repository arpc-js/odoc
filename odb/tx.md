# 声明式事务
@Tx加在方法上开启事务
## 创建用户表示例
以下云对象项目启动自动创建商家表
````ts
@Tx
async add() {
    return await super.add()
}
````
