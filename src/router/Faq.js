import Faq from '../views/Faq/index.vue'
const routes = [
    {
        path: '/Faq',
        component: () => import(/* webpackChunkName: "Faq" */ '@/views/Faq')
    },


];

export default routes;