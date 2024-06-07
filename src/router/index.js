import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Raffle from './Raffle';
import Admin from './Admin';
import Board from './Board';
import Member from './Member';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...Raffle,
  ...Admin,
  ...Board,
  ...Member
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
