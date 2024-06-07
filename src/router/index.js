import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Raffle from './Raffle';
import Admin from './Admin';
import Board from './Board';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...Raffle,
  ...Admin,
  ...Board
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
