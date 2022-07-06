import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import store from './store'
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

// import VueFullscreen from 'vue-fullscreen'


const app = createApp(App).use(store).use(router).use(Vue3Lottie).use(HorizontalScroll)

app.mount('#app')
