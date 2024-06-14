import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Lottie from 'vue3-lottie'

// Bootstrap 관련 Javascript와 css, icon 로딩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(Vue3Lottie).use(store).use(router).mount('#app')
