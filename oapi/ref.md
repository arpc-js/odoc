# 响应式云对象:不写js
云对象是响应式的,可以双向绑定到表单，和响应式刷新到页面,项目可以不写繁琐的js
## 响应式双向绑定
演示真实新增功能，非模拟数据，无js操作formData和http
```vue
<script setup lang="ts">
  import {Permission} from "../../../api/Permission";
  let o=new Permission()
</script>
<template>
  <el-form ref="formRef" :model="o" label-width="auto">
      <el-form-item label="权限名称" key="name">
        <el-input  v-model="o.name" />
      </el-form-item>
      <el-button @click="o.add()" type="primary" plain>新增权限</el-button>
  </el-form>
</template>
````
## 响应式刷新列表:云对象自动刷新属于自己的返回值
演示响应式刷新：无js实现列表页
```vue
<script setup lang="ts">
  import {Permission} from "../../../api/Permission";
  let o=new Permission()
  o.gets()//返回值属于对象本身，结果自动刷新赋值到list，页面自动响应式显示
</script>
<template>
  <el-table  :data="o.list" style="width: 100%">
    <el-table-column fiexd
                     label="权限名称"
                     prop="name"
    />
  </el-table>
</template>
````
## 响应式刷新对象:云对象自动刷新属于自己的返回值
演示响应式刷新对象：无js实现详情
```vue
<script setup lang="ts">
  import {Permission} from "../../../api/Permission";
  let o=new Permission()
  o.get(1)//查id为1的权限，返回值属于对象本身，结果自动刷新赋值到o对象，页面自动响应式显示
</script>
<template>
  <el-form ref="formRef" :model="o" label-width="auto">
    <el-form-item label="权限名称" key="name">
      <el-input  v-model="o.name" />
    </el-form-item>
  </el-form>
</template>
````
