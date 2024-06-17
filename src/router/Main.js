import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Member/LoginView.vue'
import FindIdView from '@/views/Member/FindIdView.vue'
import FindPasswordView from '@/views/Member/FindPasswordView.vue'
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
  },
  {
    path: '/FindId',
    name: 'FindId',
    component: FindIdView
  },
  {
    path: '/FindPassword',
    name: 'FindPassword',
    component: FindPasswordView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default routes;
