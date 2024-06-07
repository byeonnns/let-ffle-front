import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Member/LoginView.vue'
import JoinView from '@/views/Member/JoinView.vue'

const routes = [
  {
    path: '/join',
    name: 'join',
    component: JoinView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default routes;
