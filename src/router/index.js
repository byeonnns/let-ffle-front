import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Raffle from './Raffle';
import Admin from './Admin';
import Board from './Board';
import Member from './Member';
import Notice from './Notice';
import Faq from './Faq';
import Main from './Main';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...Main,
  ...Raffle,
  ...Admin,
  ...Board,
  ...Notice,
  ...Member,
  ...Faq,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
