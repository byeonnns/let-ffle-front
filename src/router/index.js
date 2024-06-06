import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Raffle from './Raffle';
import Admin from './Admin';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...Raffle,
  ...Admin
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
