<template>
  <div class="container">
    <!-- 登录状态检测 -->
    <div v-if="!isLoggedIn" class="login-message" @click="goLogin">
      <p>🔐点击登录vip查看视频</p>
    </div>
    <!-- 视频播放区域 -->
    <div v-else class="video-container">
      <video
          width="640"
          controls
          :poster="poster"
      >
        <source :src="src" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

// 接收外部传入的视频链接和海报
defineProps({
  src: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    default: '' // 可选，没传就不显示封面
  }
})

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
.container {
  max-width: 680px;
  border-radius: 12px;
  background-color: #f8fafc;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  margin: 2rem auto;
  cursor: pointer;
}

.login-message {
  text-align: center;
  background-color: #fffbeb;
  border: 1px solid #fcd34d;
  border-radius: 8px;
  color: #b45309;
  font-size: 1.1rem;
  padding: 1rem;
}

.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

video {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #000;
}
</style>
