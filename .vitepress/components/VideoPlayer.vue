<!-- .vitepress/components/VideoPlayer.vue -->
<template>
  <div
      v-if="show && mounted"
      :class="['video-wrapper', { 'floating-mode': isPC }]"
  >
    <!-- 未登录：锁 + 提示 -->
    <div v-if="!isLoggedIn" class="login-cover" @click="goLogin">
      <div class="lock-icon">Lock</div>
      <div class="tip">点击登录 VIP 查看视频</div>
    </div>

    <!-- 已登录：播放视频 -->
    <video
        v-else
        :src="src"
        :poster="poster"
        controls
        playsinline
        preload="metadata"
        :loop="isPC"
        class="the-video"
    >
      您的浏览器不支持视频播放。
    </video>

    <!-- PC 才有关闭按钮 -->
    <!--    <button v-if="isLoggedIn && isPC" class="close-btn" @click="closeFloating">
          ×
        </button>-->
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted, onUnmounted } from 'vue'

defineProps({
  src: { type: String, required: true },
  poster: { type: String, default: '' }
})

const isLoggedIn = ref(false)
const show = ref(true)
const mounted = ref(false) // 添加这个标记
// 是否为 PC（>768px）- 初始设为false，避免SSR错误
const isPC = ref(false)

// 登录状态监听
watchEffect(() => {
  if (mounted.value && typeof localStorage !== 'undefined') {
    isLoggedIn.value = !!localStorage.getItem('token')
  }
})

let updateSize

// 监听窗口大小变化 + 记住用户是否关闭过悬浮窗
onMounted(() => {
  mounted.value = true

  updateSize = () => {
    if (typeof window !== 'undefined') {
      isPC.value = window.innerWidth > 768
    }
  }

  updateSize()

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateSize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined' && updateSize) {
    window.removeEventListener('resize', updateSize)
  }
})

// 跳转登录
const goLogin = () => {
  if (typeof window !== 'undefined') {
    const redirect = encodeURIComponent(window.location.href)
    window.location.href = `/login.html?redirect=${redirect}`
  }
}

// 关闭悬浮窗（PC 才记住）
const closeFloating = () => {
  show.value = false
}
</script>

<style scoped>
.the-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: inherit;
  background: #000;
}

/* ========= PC 端：右下角悬浮 ========= */
.video-wrapper.floating-mode {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 280px;
  height: 170px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.35);
  z-index: 9999;
  transition: all 0.4s ease;
}

.video-wrapper.floating-mode:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 70px rgba(0,0,0,0.45);
}

/* ========= 移动端：普通内联响应式视频 ========= */
.video-wrapper:not(.floating-mode) {
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  margin: 2rem 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  background: #000;
}

/* 未登录遮罩（通用） */
.login-cover {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  user-select: none;
  border-radius: inherit;
}
.lock-icon {
  font-size: 56px;
  margin-bottom: 12px;
}
.tip {
  font-size: 17px;
  font-weight: 600;
}

/* 关闭按钮（仅 PC 悬浮时显示） */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background: rgba(0,0,0,0.6);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  z-index: 10;
}
.close-btn:hover {
  background: rgba(255,255,255,0.25);
}

/* 移动端微调 */
@media (max-width: 768px) {
  .video-wrapper:not(.floating-mode) {
    margin: 1.5rem 0;
    border-radius: 12px;
  }
}
</style>