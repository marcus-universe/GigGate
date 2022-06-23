import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import store from './store'


const app = createApp(App).use(store)

app.use(router).use(Vue3Lottie).mount('#app')
