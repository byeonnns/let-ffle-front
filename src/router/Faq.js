
const routes = [
    {
        path: '/Faq',
        component: () => import(/* webpackChunkName: "Faq" */ '@/views/Faq/FaqMainView.vue')
    },


];

export default routes;