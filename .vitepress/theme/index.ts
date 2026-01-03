// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import VideoPlayer from '../components/VideoPlayer.vue' // 导入组件

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        // 注册全局组件
        app.component('VideoPlayer', VideoPlayer)
        
        // 全局 JS 在这里写
        onMounted(() => {
            console.log('文档加载后执行 JS')
        })
    },
}