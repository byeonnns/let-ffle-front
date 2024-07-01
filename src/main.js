import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Lottie from 'vue3-lottie'
import axiosConfig from './apis/axiosConfig'

// Bootstrap 관련 Javascript와 css, icon 로딩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 브라우저 refresh시 인증 정보를 store에 저장
store.dispatch("loadAuth");

createApp(App).use(Vue3Lottie).use(store).use(router).mount('#app')
