<template>
  <div class="container">
    <!-- 登录状态检测 -->
    <div v-if="!isLoggedIn" class="login-message" @click="goLogin">
      <p>🔐 点击登录查看视频</p>
    </div>

    <!-- 视频播放区域 -->
    <div v-else class="video-container">
      <video width="640" controls poster="https://img0.baidu.com/it/u=1824065026,969150335&fm=253&fmt=auto&app=120&f=JPEG?w=798&h=500">
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const isLoggedIn = ref(false)

// 自动监听 token 变化
watchEffect(() => {
  isLoggedIn.value = !!localStorage.getItem('token')
})

// 跳转登录页
function goLogin() {
  const currentPath = encodeURIComponent(window.location.pathname + window.location.search)
  window.location.href = `/login.html?redirect=${currentPath}`
}
</script>

<style scoped>

</style>
