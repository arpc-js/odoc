

# 全局拦截器
run(intercepter)
## 拦截示例
以下是登录拦截，和接口权限拦截,详情查看index.ts
````ts
import {run, conf, verifyToken,getJwt, Rsp} from "./oop-core/oapi";
run(intercepter)
async function intercepter(r,w) {
    const path = new URL(r.url).pathname.substring(1);
    let token=r.headers.get('Authorization')
    if (conf.auth && !conf.blacklist.includes(path) && !(await verifyToken(token))){
        //去掉错误码，直接用错误信息代替错误码
        throw 'Unauthorized'
    }
    if (conf.auth&&!conf.blacklist.includes(path) &&!has(getJwt(token).payload,path)){
        throw 'Forbidden'
    }
}
function has(user,perm) {
    let permissions=user?.role.flatMap(r=>r.permission)
    let has=permissions?.some(p =>['*',perm].includes(p.name))
    return has
}
````

# 视频教程
  <MyButton />

# 示例页面

这里有一些文本。

<script setup>
import MyButton from './.vitepress/components/MyButton.vue'
</script>
